import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Working with NOVIRE completely changed how I approach my finances. Everything was explained clearly, and I finally had a plan I could follow with confidence.",
      name: "Sarah Jenkins",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Professional, knowledgeable, and genuinely invested in helping me succeed. I highly recommend scheduling a consultation.",
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The personalized guidance made all the difference. I felt supported throughout the entire process and finally secured the funding I needed.",
      name: "David Rodriguez",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Working with NOVIRE completely changed how I approach my finances. Everything was explained clearly, and I finally had a plan I could follow with confidence.",
      name: "Sarah Jenkins",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Professional, knowledgeable, and genuinely invested in helping me succeed. I highly recommend scheduling a consultation.",
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The personalized guidance made all the difference. I felt supported throughout the entire process and finally secured the funding I needed.",
      name: "David Rodriguez",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl mx-auto text-white">Trusted By Clients Who Wanted More Than Just Advice</h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track */}
        <motion.div 
          className="flex gap-6 px-3 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Double the testimonials to create a seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="glass-card p-8 md:p-10 w-[400px] shrink-0 hover:-translate-y-2 transition-transform duration-500 relative group border-white/5 hover:border-gold/30">
              <Quote className="w-24 h-24 text-white/[0.03] group-hover:text-gold/[0.05] transition-colors absolute -top-4 -left-2 rotate-180" />
              
              <div className="flex text-gold mb-6 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg text-neutral-300 italic leading-relaxed relative z-10 mb-8 min-h-[100px]">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-white/10 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}