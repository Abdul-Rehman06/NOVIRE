import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Results } from '@/components/sections/Results';
import { Testimonials } from '@/components/sections/Testimonials';
import { Resources } from '@/components/sections/Resources';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { PersonalMessage } from '@/components/sections/PersonalMessage';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40"></div>
        <div className="absolute inset-0 noise-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <About />
          <Services />
          <HowItWorks />
          <WhyChooseUs />
          <Results />
          <Testimonials />
          <Resources />
          <FAQ />
          <FinalCTA />
          <PersonalMessage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;