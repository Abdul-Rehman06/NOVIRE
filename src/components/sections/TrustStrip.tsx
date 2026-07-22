import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function TrustStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { num: 500, suffix: "+", title: "Consultations" },
    { num: 97, suffix: "%", title: "Client Satisfaction" },
    { num: 10, suffix: "+", title: "Years Experience" },
    { num: 100, suffix: "%", title: "Personalized Plans" },
  ];

  return (
    <section className="py-24 bg-[#050505]/50 border-y border-white/5 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
                {isInView ? (
                  <CountUp end={stat.num} duration={2.5} separator="," />
                ) : "0"}
                {stat.suffix}
              </div>
              <h3 className="text-sm md:text-base font-medium text-neutral-400 uppercase tracking-wider">{stat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}