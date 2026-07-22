import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Dark Green Background */}
      <div className="absolute inset-0 bg-brand-950/80 z-0"></div>
      <div className="absolute inset-0 noise-bg opacity-10 z-0"></div>
      <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-gradient-to-br from-brand-800/40 via-transparent to-brand-900/40 rounded-full blur-[150px] animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-24 text-center max-w-5xl mx-auto border-gold/30 relative overflow-hidden shadow-[0_0_80px_rgba(20,83,45,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl mb-8 text-white tracking-tight">
            Your Financial Goals Deserve a <span className="text-gradient-gold italic">Clear Strategy.</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-neutral-300 font-serif italic mb-10 max-w-3xl mx-auto">
            Stop second-guessing your financial decisions.
          </p>
          
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether you're planning for future opportunities, preparing for funding, or simply looking for trusted financial guidance, NOVIRE is here to help you move forward with confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black border-none hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] px-10 py-5 text-lg" withArrow>
              Book Your Consultation
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto glass-card border-white/20 hover:bg-white/10 px-10 py-5 text-lg">
              Let's Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}