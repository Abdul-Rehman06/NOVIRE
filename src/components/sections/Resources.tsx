import { ArrowDownToLine, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Resources() {
  const resources = [
    {
      title: "Financial Planning Checklist",
      desc: "Step-by-step guide to organizing your financial life.",
      type: "PDF Guide"
    },
    {
      title: "Funding Readiness Guide",
      desc: "What lenders look for and how to prepare.",
      type: "Checklist"
    },
    {
      title: "Credit Improvement",
      desc: "Actionable steps to boost your credit profile.",
      type: "PDF Guide"
    },
    {
      title: "Budget Planner",
      desc: "Simple, effective template for tracking cash flow.",
      type: "Template"
    }
  ];

  return (
    <section className="py-32 relative bg-[#050505]/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">Free Expert Resources</h2>
            <p className="text-xl text-neutral-400">
              Download our exclusive guides and templates to start taking control of your financial future today.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, i) => (
            <motion.a 
              key={i} 
              href="#" 
              whileHover={{ y: -5 }}
              className="glass-card p-8 group relative overflow-hidden transition-all border border-white/5 hover:border-gold/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[30px] group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/20 transition-colors">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <div className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                  {resource.type}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">{resource.title}</h3>
                <p className="text-sm text-neutral-400 mb-8">{resource.desc}</p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-gold transition-colors">
                  <ArrowDownToLine className="w-4 h-4" />
                  Download
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}