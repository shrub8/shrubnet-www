#!/usr/bin/env node
/**
 * Prerender script for SEO/crawler support
 */

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST_DIR = resolve(__dirname, '../dist');
const PORT = 3456;
const CHROME_PATH = '/snap/bin/chromium';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

function startStaticServer() {
  const server = createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    
    // Build file path - remove leading slash
    const relativePath = url === '/' ? 'index.html' : url.replace(/^\//, '');
    let filePath = resolve(DIST_DIR, relativePath);
    
    console.log(`  📥 ${url} -> ${filePath}`);
    
    // Check if file exists
    if (!existsSync(filePath)) {
      // Try with .html extension
      const htmlPath = filePath + '.html';
      if (existsSync(htmlPath)) {
        filePath = htmlPath;
      } else {
        // SPA fallback
        console.log(`     -> SPA fallback to index.html`);
        filePath = resolve(DIST_DIR, 'index.html');
      }
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath) || '.html';
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
      console.log(`     -> 200 ${contentType}`);
    } catch (e) {
      console.error(`     -> 404 ERROR: ${e.message}`);
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve, reject) => {
    server.listen(PORT, '127.0.0.1', (err) => {
      if (err) reject(err);
      else resolve(server);
    });
  });
}

async function prerender() {
  if (!existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('🚀 Starting static server...');
  const server = await startStaticServer();

  try {
    const puppeteer = await import('puppeteer');
    console.log(`🌐 Launching Puppeteer...`);
    
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: CHROME_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.log(`  🖥️  Console ${msg.type()}: ${msg.text()}`);
      }
    });
    
    page.on('pageerror', (err) => {
      console.log(`  ❌ Page error: ${err.message}`);
    });

    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    console.log(`📄 Loading page at http://127.0.0.1:${PORT}/...`);
    
    await page.goto(`http://127.0.0.1:${PORT}/`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    
    // Wait for React
    await new Promise(r => setTimeout(r, 3000));
    
    const rootContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return {
        hasChildren: root ? root.children.length > 0 : false,
        innerHTML: root ? root.innerHTML.substring(0, 500) : 'empty',
      };
    });
    
    console.log(`  🔍 Root has content: ${rootContent.hasChildren}`);
    if (rootContent.hasChildren) {
      console.log(`  ✅ SUCCESS! Content found.`);
    } else {
      console.log(`  ⚠️  Root HTML: ${rootContent.innerHTML}`);
    }

    const html = await page.content();
    const fs = await import('fs');
    fs.writeFileSync(resolve(DIST_DIR, 'index.html'), html);

    await browser.close();
    
    const size = (html.length / 1024).toFixed(1);
    console.log(`💾 Saved dist/index.html (${size}KB)`);

  } catch (error) {
    console.error('❌ Prerender failed:', error.message);
    process.exit(1);
  } finally {
    server.close();
    console.log('🛑 Server stopped');
  }
}

prerender();
