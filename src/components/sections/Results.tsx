import { Button } from '@/components/ui/Button';

export function Results() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-950/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12">Helping Clients Move Forward With Confidence</h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-neutral-300 font-serif italic mb-16">
            <p>Every financial journey is different.</p>
            <p>Some clients come seeking clarity.</p>
            <p>Others want to prepare for funding opportunities.</p>
            <p>Many simply want expert guidance before making important financial decisions.</p>
          </div>

          <div className="glass-card p-10 md:p-12 inline-block">
            <p className="text-lg md:text-xl text-white font-medium mb-0">
              No matter the goal, our mission remains the same:
              <br/><br/>
              <span className="text-gold">Provide personalized strategies that help clients make smarter financial decisions with confidence.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}