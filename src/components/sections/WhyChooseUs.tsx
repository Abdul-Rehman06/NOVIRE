import { UserCheck, Eye, Headphones, Compass, Lock, CheckSquare } from 'lucide-react';

export function WhyChooseUs() {
  const cards = [
    {
      icon: UserCheck,
      title: "Personalized Financial Guidance",
      desc: "Every recommendation is built specifically around your unique goals—not generic templates."
    },
    {
      icon: Eye,
      title: "Honest & Transparent Advice",
      desc: "Clear communication, realistic expectations, and guidance you can trust."
    },
    {
      icon: Headphones,
      title: "Professional Support",
      desc: "Receive dedicated one-on-one attention throughout your financial journey."
    },
    {
      icon: Compass,
      title: "Long-Term Focus",
      desc: "Helping you build sustainable financial confidence—not temporary solutions."
    },
    {
      icon: Lock,
      title: "Confidential Consultations",
      desc: "Your financial information remains private, secure, and handled with professionalism."
    },
    {
      icon: CheckSquare,
      title: "Practical Strategies",
      desc: "Simple, actionable recommendations you can confidently implement."
    }
  ];

  return (
    <section className="py-32 bg-[#050505]/50 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-white">Why Clients Trust NOVIRE</h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {cards.map((card, i) => (
            <div key={i} className="break-inside-avoid glass-card p-8 hover:-translate-y-1 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[30px] group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none"></div>
              
              <card.icon className="w-6 h-6 text-gold mb-6" strokeWidth={1} />
              
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{card.title}</h3>
              <p className="text-neutral-400 leading-relaxed relative z-10">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}