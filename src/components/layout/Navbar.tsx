import { Button } from '@/components/ui/Button';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu on scroll down
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
      >
        <div className={`glass-nav px-6 py-3 rounded-full flex items-center justify-between gap-8 transition-all duration-500 ${scrolled ? 'w-full max-w-5xl' : 'w-full max-w-7xl'}`}>
          <a href="/" className="flex items-center gap-3 z-50">
            <img 
              src="/logo.png" 
              alt="NOVIRE" 
              className="h-12 md:h-12"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-[0_0_15px_rgba(255,255,255,0.15)]" withArrow>
              Book Consultation
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none z-50"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-xl font-serif mt-12">
              <a href="#about" className="text-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="text-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#testimonials" className="text-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#faq" className="text-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            </div>
            <div className="mt-auto pb-8">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black border-none hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] px-10 py-5 text-lg" withArrow>
              Book Your Consultation
            </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}