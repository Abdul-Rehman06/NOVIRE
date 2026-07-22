import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const faqs = [
    {
      q: "Do I need to prepare anything before my consultation?",
      a: "No. Simply schedule your appointment, and we'll guide you through everything during your session."
    },
    {
      q: "Is every consultation personalized?",
      a: "Absolutely. Every strategy is built specifically around your financial goals and current situation."
    },
    {
      q: "Can you help business owners?",
      a: "Yes. We work with both individuals and business owners seeking financial guidance and funding preparation."
    },
    {
      q: "How long does a consultation last?",
      a: "Consultations typically range from 30–60 minutes depending on your needs."
    },
    {
      q: "Is my information confidential?",
      a: "Yes. All conversations remain completely private and confidential."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-white">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "glass-card overflow-hidden transition-all duration-300",
                  isOpen ? "border-gold/30 bg-white/[0.04]" : "hover:border-white/10"
                )}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-lg font-medium text-white pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gold" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-neutral-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}