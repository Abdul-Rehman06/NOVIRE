export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            {/* Giant blurred gold circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="public/Angel-Main.webp" 
                alt="NOVIRE Expert"
                className="w-full h-full object-cover rounded-2xl  hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating quote */}
            <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-sm z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-gold/20">
              <p className="font-serif text-xl italic text-white leading-relaxed">
                "Financial clarity creates confidence. Confidence creates opportunity."
              </p>
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Meet the Expert Behind <span className="text-gradient-gold">NOVIRE</span></h2>
            
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Financial decisions can feel overwhelming—but they don't have to.
              </p>
              <p>
                At NOVIRE, we believe every client deserves honest guidance, personalized strategies, and a clear path forward. Our mission is to simplify complex financial decisions while helping individuals and businesses build stronger financial foundations.
              </p>
              <p>
                Whether you're preparing for future opportunities, organizing your finances, or planning your next financial move, you'll receive dedicated one-on-one support designed around your unique goals—not a one-size-fits-all solution.
              </p>
              <p className="text-white font-medium italic pt-4">
                Because your financial future deserves more than generic advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}