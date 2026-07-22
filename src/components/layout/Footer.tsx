import { Button } from '@/components/ui/Button';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-[#050505] pt-24 pb-8 relative overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
          
          <div className="lg:col-span-1">
            <img 
              src={`${baseUrl}logo.png`} 
              alt="NOVIRE" 
              className="h-14 mb-6 opacity-90"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Empowering individuals and businesses with personalized financial strategies, funding preparation, and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-gold/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-gold/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-gold/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-gold transition-colors">Financial Strategy Sessions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Credit Wellness Guidance</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Funding Preparation</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Financial Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Client Success</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Ready to Start?</h4>
            <p className="text-sm text-neutral-400 mb-6">
              Book a free discovery call to discuss your financial goals.
            </p>
            <Button size="sm" className="w-full bg-white/10 text-white hover:bg-gold hover:text-black border border-white/10 hover:border-gold">
              Book Consultation
            </Button>
          </div>
          
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} NOVIRE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
