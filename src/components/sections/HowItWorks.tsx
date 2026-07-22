import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, BarChart3, BrainCircuit, FileText, Handshake } from 'lucide-react';
import { useRef } from 'react';

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      icon: Calendar,
      title: "Schedule",
      desc: "Book a one-on-one consultation at a time that works for you."
    },
    {
      icon: BarChart3,
      title: "Financial Review",
      desc: "We'll discuss your current financial situation, challenges, and future objectives."
    },
    {
      icon: BrainCircuit,
      title: "Strategy Session",
      desc: "Deep dive into the specific tactics to overcome obstacles."
    },
    {
      icon: FileText,
      title: "Personalized Roadmap",
      desc: "Receive a customized financial roadmap built around your goals."
    },
    {
      icon: Handshake,
      title: "Ongoing Support",
      desc: "Implement your recommendations with dedicated guidance."
    }
  ];

  return (
    <section id="process" className="py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">What Happens During Your First Consultation?</h2>
          <p className="text-xl text-neutral-400">
            A clear, transparent process designed to give you clarity and confidence from day one.
          </p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          {/* Animated Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-light via-gold to-gold-dark -translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-24 md:pl-0 md:w-[45%]">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="glass-card p-8 hover:border-gold/30 transition-colors"
                    >
                      <span className="text-sm font-bold tracking-widest text-gold/70 uppercase mb-2 block">Step 0{i + 1}</span>
                      <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}