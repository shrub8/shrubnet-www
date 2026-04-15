import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="opacity-0 section-padding py-12 border-t border-subtle"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side - Company info */}
          <div>
            <p className="text-sm font-medium text-foreground mb-2">
              Shrubnet, LLC
            </p>
            <div className="flex items-start gap-2 text-xs text-slate mb-1">
              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <div>
                <p>118 Broadway, Suite 221</p>
                <p>San Antonio, TX 78205</p>
              </div>
            </div>
            <p className="text-xs text-slate mt-2">
              Independent research & development
            </p>
          </div>

          {/* Middle - Legal links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Legal</p>
            <a
              href="/#/privacy"
              className="text-sm text-muted-foreground hover:text-emerald transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/#/terms"
              className="text-sm text-muted-foreground hover:text-emerald transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:items-end gap-2">
            <a
              href="mailto:hello@shrubnet.com"
              className="text-sm text-muted-foreground hover:text-emerald transition-colors duration-300"
            >
              hello@shrubnet.com
            </a>
            <p className="text-xs text-slate">
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
