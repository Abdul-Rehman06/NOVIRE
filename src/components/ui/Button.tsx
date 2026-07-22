import React from 'react';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 focus:ring-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 focus:ring-neutral-700",
    outline: "border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white focus:ring-neutral-700",
    ghost: "text-neutral-400 hover:text-white hover:bg-white/5 focus:ring-neutral-800",
  };

  const sizes = {
    sm: "text-sm px-5 py-2.5",
    md: "text-base px-7 py-3.5",
    lg: "text-lg px-9 py-4.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Ripple/Glow effect */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full blur-xl"></div>
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </span>
    </motion.button>
  );
}