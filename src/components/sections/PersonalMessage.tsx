export function PersonalMessage() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 glass-card p-10 md:p-16 border-gold/10">
          
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold to-gold-dark p-1">
              <div className="w-full h-full bg-[#0a0a0a] rounded-full overflow-hidden p-1">
                <img 
                  src="https://assets.cdn.filesafe.space/Tv5qFafGTCSVYoxMXmev/media/698222c96860b8ec9c2755c8.jpeg" 
                  alt="Angel - NOVIRE Expert" 
                  className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-widest text-gold uppercase mb-6">Personal Message from Angel</h3>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic">
              "I know financial decisions can feel overwhelming because every person's situation is unique. My goal isn't simply to provide advice—it's to help you gain clarity, confidence, and a strategy you can trust. If you're ready to take the next step, I'd be honored to be part of your journey."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}