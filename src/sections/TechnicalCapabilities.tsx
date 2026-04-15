import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Database, Server, Brain, Globe, Shield, HardDrive, Stethoscope } from 'lucide-react';

interface CapabilityCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  items: string[];
}

const capabilities: CapabilityCategory[] = [
  {
    id: 'data',
    icon: Database,
    title: 'Data Architecture & ETL',
    items: [
      'Queue-based systems: RabbitMQ, Kafka, SQS',
      'Data lake architecture: Databricks, Apache Spark, Airbyte',
      'ETL task orchestration and pipeline design',
      'High-velocity time-series data management',
      'SQL & NoSQL: Postgres, MongoDB, ACID compliance',
      'Schema-driven GraphQL APIs with Hasura',
      'Data Concept Code Mapping: OMOP, SnoMed, Common Data Model',
      'Data Feeds As A Service: real-time and adaptive refresh',
    ],
  },
  {
    id: 'apis',
    icon: Server,
    title: 'Financial & API Systems',
    items: [
      'Financial Services APIs: Plaid, SILA, Lithic, Stripe',
      'Payment rails: custom banking integrations',
      'Supabase: on-premise Docker, cloud deployments',
      'Edge Functions, S3-compatible Storage, Auth',
      'Database and Vector Database solutions',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI, ML & Generative Systems',
    items: [
      'On-premise AI, RAG and Graph RAG',
      'Custom AI Agents: LangChain, Tool Calling, Function Calling',
      'Embeddings and Vector Stores: PGVector, Supabase',
      'LLMs: Open Source, Anthropic, OpenAI, MiniMax, Kimi, Manus',
      'Image & Video generation: ComfyUI, Stable Diffusion, Flux',
      'Qwen, WAN, VEO, SORA pipelines',
      'Pre-LLM ML: NLP, OCR, YOLO, Object Detection, Depth Perception',
      'Audio: Text-to-Speech, Speech-to-Text',
      'Autoencoder training, Sentiment Analysis, Log Analysis',
    ],
  },
  {
    id: 'extraction',
    icon: Globe,
    title: 'Data Extraction & Automation',
    items: [
      'Industrial-grade data extraction at scale',
      'Playwright, Selenium with Chromium and Firefox drivers',
      'AI-assisted scraping for complex data structures',
      'Structured and unstructured data extraction',
      'Anti-bot technology and cybersecurity',
      'Detection bypassing: HUMAN, The Dread Clock',
    ],
  },
  {
    id: 'infrastructure',
    icon: HardDrive,
    title: 'Infrastructure & DevOps',
    items: [
      'Legacy platforms: AIX, AS-400, XENIX, UNIX',
      'Extensive Linux and Windows experience',
      'DOS, NT 4.0, Domain Controllers, Exchange',
      'SQL Servers, File and Application Servers',
      'Routers, Switches, Firewalls',
      'Datacenter and telco to the DMARC',
      'SMB and SaaS operational backgrounds',
      'DevOps, MLOps, high-compliance environments',
      'Managing distributed development teams',
    ],
  },
  {
    id: 'medical',
    icon: Stethoscope,
    title: 'Medical Software & Compliance',
    items: [
      'Motion Analysis and PHI management',
      'De-identification protocols',
      'AI-driven medical integration',
      'EMR/EHR platforms, LIMS, PMS, Registries',
      'Agentic AI working with clinical systems',
    ],
  },
];

function CapabilityAccordion({ category, isOpen, onToggle }: { 
  category: CapabilityCategory; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  const Icon = category.icon;
  
  return (
    <div className="border border-subtle rounded-sm overflow-hidden bg-card/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <Icon className="w-5 h-5 text-emerald" />
          <span className="text-base font-medium text-foreground">{category.title}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 border-t border-subtle">
          <ul className="space-y-2 pt-4">
            {category.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-amber mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TechnicalCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openCategory, setOpenCategory] = useState<string | null>('data');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.tech-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 60);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="technical-capabilities"
      className="section-padding section-spacing relative"
    >
      {/* Subtle background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Title */}
        <h2 className="tech-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-4">
          Technical Capabilities
        </h2>

        {/* Intro */}
        <p className="tech-animate opacity-0 text-xl md:text-2xl text-foreground leading-relaxed mb-4">
          Deep expertise across the full stack.
        </p>

        <p className="tech-animate opacity-0 text-base text-muted-foreground leading-relaxed mb-12">
          From legacy mainframes to frontier AI models. Decades of hands-on experience 
          building systems that move data, process intelligence, and connect the old world to the new.
        </p>

        {/* Current Focus Banner */}
        <div className="tech-animate opacity-0 mb-10 p-6 border border-emerald/30 rounded-sm bg-emerald/5">
          <div className="flex items-start gap-4">
            <Shield className="w-5 h-5 text-emerald mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Current Focus</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrating AI with legacy platforms that require special tooling aligned with our unique stack. 
                Building multi-faceted systems with physical devices, cloud integration, extensive AI automation, 
                and ML algorithms to reduce LLM token consumption.
              </p>
            </div>
          </div>
        </div>

        {/* Capability Accordions */}
        <div className="space-y-3">
          {capabilities.map((category) => (
            <div key={category.id} className="tech-animate opacity-0">
              <CapabilityAccordion
                category={category}
                isOpen={openCategory === category.id}
                onToggle={() => toggleCategory(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
