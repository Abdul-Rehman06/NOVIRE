import { ArrowRight } from 'lucide-react';

export function FinancialInsights() {
  const categories = [
    "Financial Planning",
    "Credit Education",
    "Funding Preparation",
    "Business Finance Tips"
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Financial Knowledge That Empowers Better Decisions</h2>
            <p className="text-xl text-neutral-400">
              Good financial decisions begin with the right information. Explore practical tips, expert insights, and educational resources designed to help you better understand your finances and prepare for future opportunities.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <a key={i} href="#" className="glass-card p-8 group flex flex-col justify-between aspect-square hover:bg-white/[0.04] transition-all">
              <h3 className="text-2xl font-semibold text-white group-hover:text-gold transition-colors">{category}</h3>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all self-end">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}