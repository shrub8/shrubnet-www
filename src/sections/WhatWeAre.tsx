import { useEffect, useRef } from 'react';

export function WhatWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.section-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-are"
      className="section-padding section-spacing relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="section-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-8">
          What We Are
        </h2>

        {/* Main Content */}
        <div className="space-y-6">
          <p className="section-animate opacity-0 text-xl md:text-2xl text-foreground leading-relaxed">
            Shrubnet Labs is an independent R&D organization focused on designing, testing, and evolving complex technical systems.
          </p>

          <p className="section-animate opacity-0 text-lg text-muted-foreground leading-relaxed">
            We work in the space between infrastructure, automation, and intelligence — where problems are asynchronous, multi-agent, and resistant to simple solutions.
          </p>

          <div className="section-animate opacity-0 pt-6 border-t border-subtle">
            <p className="text-base text-slate leading-relaxed">
              Shrubnet Labs is not a product company or an app repository.
              It is a place for experimentation, architecture, and long-term thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
