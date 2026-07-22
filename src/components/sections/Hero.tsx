import { Button } from '@/components/ui/Button';
import { CheckCircle2, TrendingUp, Calendar, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-2/3 left-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-500/20 bg-brand-500/5 text-brand-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
            Trusted Financial Guidance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] mb-8"
          >
            Financial Confidence<br />
            <span className="text-gradient-gold italic pr-4">Starts With the Right Strategy.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed"
          >
            Helping individuals, entrepreneurs, and growing businesses make smarter financial decisions through personalized guidance, funding preparation, and long-term planning.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
             <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black border-none hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] px-10 py-5 text-lg" withArrow>
              Book Your Consultation
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto glass-card border-white/20 hover:bg-white/10 px-10 py-5 text-lg">
              Explore Our Process
            </Button>
          </motion.div>
        </div>

        {/* Floating Composition */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0"
          >
            {/* Main Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[500px] glass-card p-2 z-20 shadow-2xl rotate-2 animate-float">
              <img 
                src="public/Angel-Sitting.jpeg" 
                alt="NOVIRE Expert"
                className="w-full h-full object-cover rounded-xl filter contrast-125"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}