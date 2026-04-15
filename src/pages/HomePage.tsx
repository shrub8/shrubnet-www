import { Hero } from '../sections/Hero';
import { WhatWeAre } from '../sections/WhatWeAre';
import { AreasOfFocus } from '../sections/AreasOfFocus';
import { TechnicalCapabilities } from '../sections/TechnicalCapabilities';
import { HowWeWork } from '../sections/HowWeWork';
import { SupportingBuilders } from '../sections/SupportingBuilders';
import { Origins } from '../sections/Origins';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhatWeAre />
      <AreasOfFocus />
      <TechnicalCapabilities />
      <HowWeWork />
      <SupportingBuilders />
      <Origins />
      <Contact />
      <Footer />
    </div>
  );
}
