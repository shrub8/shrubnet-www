import { useEffect, useRef } from 'react';

export function Hero() {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      
      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="hero-animate opacity-0 mb-12">
          <img
            ref={logoRef}
            src="/shrubnet-logo.png"
            alt="Shrubnet Labs"
            className="w-32 h-32 md:w-40 md:h-40 object-contain glow-emerald rounded-full"
          />
        </div>

        {/* Headline */}
        <h1 className="hero-animate opacity-0 text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6">
          Shrubnet Labs
        </h1>

        {/* Subheadline */}
        <p className="hero-animate opacity-0 text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
          Research & development for complex systems, agentic automation, and hard technical problems.
        </p>

        {/* Supporting Line */}
        <p className="hero-animate opacity-0 text-base text-slate max-w-xl mb-12 leading-relaxed">
          We explore problems that don't fit neatly into products, roadmaps, or sprint cycles.
        </p>

        {/* CTA */}
        <div className="hero-animate opacity-0 flex gap-4">
          <button
            onClick={() => scrollToSection('what-we-are')}
            className="px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground border border-border/50 hover:border-emerald/50 rounded-sm transition-all duration-300 hover:glow-emerald"
          >
            Learn more
          </button>
          <a
            href="/#/submit-project"
            className="px-6 py-3 text-sm font-medium text-background bg-foreground/90 hover:bg-foreground rounded-sm transition-all duration-300"
          >
            Submit a Project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-animate opacity-0">
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent animate-pulse-subtle" />
      </div>
    </section>
  );
}
