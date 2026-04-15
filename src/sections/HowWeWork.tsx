import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const principles = [
  'Thoughtful system design over rapid exposure',
  'Internal rigor over external validation',
  'Understanding failure modes before scaling success',
];

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.work-animate');
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
      id="how-we-work"
      className="section-padding section-spacing relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="work-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-8">
          How We Work
        </h2>

        {/* Intro */}
        <p className="work-animate opacity-0 text-xl md:text-2xl text-foreground leading-relaxed mb-10">
          Shrubnet Labs operates deliberately and quietly.
        </p>

        <p className="work-animate opacity-0 text-base text-muted-foreground mb-8">
          We favor:
        </p>

        {/* Principles List */}
        <ul className="space-y-4 mb-12">
          {principles.map((principle, index) => (
            <li
              key={index}
              className="work-animate opacity-0 flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-emerald" />
              </span>
              <span className="text-base text-foreground/90">{principle}</span>
            </li>
          ))}
        </ul>

        {/* Closing Statement */}
        <div className="work-animate opacity-0 pt-8 border-t border-subtle">
          <p className="text-base text-slate leading-relaxed mb-2">
            Some work remains exploratory.
          </p>
          <p className="text-base text-slate leading-relaxed mb-2">
            Some work never becomes a product.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            All work is treated seriously.
          </p>
        </div>
      </div>
    </section>
  );
}
