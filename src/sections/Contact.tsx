import { useEffect, useRef } from 'react';
import { Send, ArrowUpRight, FileText, Mail } from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.contact-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding section-spacing relative bg-secondary/30"
    >
      {/* Subtle glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Headline */}
        <h2 className="contact-animate opacity-0 text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
          Shrubnet collaborates selectively.
        </h2>

        {/* Subtext */}
        <p className="contact-animate opacity-0 text-base text-muted-foreground mb-10">
          Have a complex project in mind? Submit your requirements and we'll get back to you within 2-3 business days.
        </p>

        {/* CTA Buttons */}
        <div className="contact-animate opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#/submit-project"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-background bg-foreground hover:bg-foreground/90 rounded-sm transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Submit a Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
          <a
            href="mailto:hello@shrubnet.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-foreground/80 hover:text-foreground border border-border/50 hover:border-emerald/50 rounded-sm transition-all duration-300 hover:glow-emerald"
          >
            <Mail className="w-4 h-4" />
            Email Us Directly
          </a>
        </div>

        {/* What to expect */}
        <div className="contact-animate opacity-0 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 border border-subtle rounded-sm bg-card/30">
            <Send className="w-5 h-5 text-emerald mb-3" />
            <h3 className="text-sm font-medium text-foreground mb-1">Submit Your Project</h3>
            <p className="text-xs text-muted-foreground">Fill out our project intake form with scope, budget, and requirements.</p>
          </div>
          <div className="p-4 border border-subtle rounded-sm bg-card/30">
            <FileText className="w-5 h-5 text-emerald mb-3" />
            <h3 className="text-sm font-medium text-foreground mb-1">We Review & Respond</h3>
            <p className="text-xs text-muted-foreground">Our team evaluates fit and responds within 2-3 business days.</p>
          </div>
          <div className="p-4 border border-subtle rounded-sm bg-card/30">
            <ArrowUpRight className="w-5 h-5 text-emerald mb-3" />
            <h3 className="text-sm font-medium text-foreground mb-1">Scope & Proposal</h3>
            <p className="text-xs text-muted-foreground">If it's a fit, we'll schedule a call and provide a detailed proposal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
