import { LineChart, Wallet, Building2, BookOpen, TrendingUp, CircleDollarSign, Gauge, BookText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: LineChart,
      bgIcon: TrendingUp,
      title: "Financial Strategy Sessions",
      desc: "Receive personalized financial guidance based on your current situation, future goals, and long-term vision.",
      color: "from-blue-500/10 to-transparent"
    },
    {
      icon: Wallet,
      bgIcon: Gauge,
      title: "Credit Wellness Guidance",
      desc: "Learn practical strategies to strengthen your financial profile and better prepare for future opportunities.",
      color: "from-emerald-500/10 to-transparent"
    },
    {
      icon: Building2,
      bgIcon: CircleDollarSign,
      title: "Funding Preparation",
      desc: "Understand what lenders typically look for and prepare your financial profile before applying.",
      color: "from-gold/10 to-transparent"
    },
    {
      icon: BookOpen,
      bgIcon: BookText,
      title: "Financial Education & Coaching",
      desc: "Gain the knowledge and confidence needed to make smarter financial decisions through personalized coaching sessions.",
      color: "from-purple-500/10 to-transparent"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Solutions Designed Around Your Financial Goals</h2>
          <p className="text-xl text-neutral-400">
            No matter where you are in your financial journey, NOVIRE provides strategic guidance designed to help you move forward with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="glass-card p-10 group relative overflow-hidden border-l-2 border-l-transparent hover:border-l-gold transition-all duration-500"
            >
              {/* Unique Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Unique Tiny Visual/Icon in Background */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 transform group-hover:scale-110 group-hover:-rotate-12">
                <service.bgIcon className="w-48 h-48 text-white" strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-colors shadow-lg">
                    <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-neutral-700 font-serif text-3xl">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed max-w-[90%]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}