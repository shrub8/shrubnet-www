import { useEffect, useRef } from 'react';

export function Origins() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.origin-animate');
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
      id="origins"
      className="section-padding section-spacing relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="origin-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-8">
          Origins
        </h2>

        {/* Origin Story */}
        <div className="space-y-6">
          <p className="origin-animate opacity-0 text-lg text-foreground leading-relaxed">
            Shrubnet began as a practical response to a recurring problem:
            modern systems are increasingly asynchronous, automated, and difficult to reason about — yet most tooling and advice assumes linearity.
          </p>

          <p className="origin-animate opacity-0 text-base text-muted-foreground leading-relaxed">
            Shrubnet Labs was formed to explore these gaps through research, experimentation, and hands-on system design.
          </p>

          {/* Name Explanation */}
          <div className="origin-animate opacity-0 pt-8 mt-8 border-t border-subtle">
            <p className="text-base text-slate leading-relaxed">
              The name reflects the original inspiration:{' '}
              <span className="text-foreground/80">
                resilient, distributed growth
              </span>{' '}
              — small components working together to support complex outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
