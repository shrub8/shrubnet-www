import { useEffect, useRef } from 'react';
import { Network, Clock, Cpu, GitBranch, FlaskConical, Database, Layers, Brain } from 'lucide-react';

const focusAreas = [
  {
    icon: Network,
    title: 'Agentic Systems & Automation',
    description: 'Designing systems where autonomous components collaborate, adapt, and self-correct.',
  },
  {
    icon: Clock,
    title: 'Asynchronous & Distributed Architectures',
    description: 'Solving problems that span time, machines, networks, and uncertain states.',
  },
  {
    icon: Cpu,
    title: 'Applied AI Infrastructure',
    description: 'Practical foundations for AI-enabled systems, not demos or wrappers.',
  },
  {
    icon: GitBranch,
    title: 'Tooling for Non-Linear Workflows',
    description: "Supporting workflows that don't move in straight lines or predictable sequences.",
  },
  {
    icon: FlaskConical,
    title: 'Research-Driven Prototyping',
    description: 'Building to understand, not just to ship.',
  },
  {
    icon: Database,
    title: 'Data Architecture & ETL',
    description: 'Data lakes, pipelines, and orchestration at scale. Queue systems, time-series, and schema mapping.',
  },
  {
    icon: Layers,
    title: 'Legacy Systems Integration',
    description: 'Connecting legacy platforms with modern AI. Cross-system automation where APIs do not exist.',
  },
  {
    icon: Brain,
    title: 'Multi-Modal AI Systems',
    description: 'RAG, Graph RAG, embeddings, and agents. Vision, audio, and generative pipelines.',
  },
];

export function AreasOfFocus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.focus-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="areas-of-focus"
      className="section-padding section-spacing relative bg-secondary/30"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Title */}
        <h2 className="focus-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-12">
          Areas of Exploration
        </h2>

        {/* Focus Areas Grid - 8 cards, 4x2 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="focus-animate opacity-0 group p-6 border border-subtle hover:border-emerald/30 rounded-sm transition-all duration-500 hover:glow-emerald bg-card/30"
            >
              <area.icon className="w-5 h-5 text-emerald mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base font-medium text-foreground mb-3 leading-tight">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
