import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const mentorshipAreas = [
  'Architectural review and system thinking',
  'Early-stage technical strategy',
  'Navigating hard trade-offs in automation and AI design',
  'Helping founders reason through complexity before it becomes technical debt',
];

export function SupportingBuilders() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.mentor-animate');
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
      id="supporting-builders"
      className="section-padding section-spacing relative bg-secondary/30"
    >
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Title */}
        <h2 className="mentor-animate opacity-0 text-sm font-mono text-emerald uppercase tracking-widest mb-8">
          Supporting Builders
        </h2>

        {/* Intro */}
        <p className="mentor-animate opacity-0 text-lg text-muted-foreground leading-relaxed mb-10">
          Alongside research, Shrubnet Labs provides mentorship and guidance to founders working on technically complex ideas.
        </p>

        <p className="mentor-animate opacity-0 text-base text-foreground/80 mb-6">
          This includes:
        </p>

        {/* Mentorship Areas */}
        <ul className="space-y-4 mb-10">
          {mentorshipAreas.map((area, index) => (
            <li
              key={index}
              className="mentor-animate opacity-0 flex items-start gap-3 group"
            >
              <ArrowRight className="flex-shrink-0 w-4 h-4 text-amber mt-1 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-base text-foreground/80">{area}</span>
            </li>
          ))}
        </ul>

        {/* Closing Statement */}
        <div className="mentor-animate opacity-0 pt-6 border-t border-subtle">
          <p className="text-sm text-slate italic">
            Mentorship is selective and relationship-driven, not programmatic.
          </p>
        </div>
      </div>
    </section>
  );
}
