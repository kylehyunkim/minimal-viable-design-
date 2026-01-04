
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Services', href: '#solutions' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Results', href: '#testimonials' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5"
    >
      <a href="#hero" className="flex items-center gap-2">
        <img
          src="/logo/logo_clean-Photoroom.png"
          alt="ScaleFlight Logo"
          className="h-12 md:h-16 w-auto"
        />
        <span className="text-lg md:text-xl font-light tracking-tighter text-white">SCALEFLIGHT</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs font-light uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="px-4 py-2 md:px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] md:text-xs font-light uppercase tracking-wider md:tracking-widest rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all"
      >
        Free
        <span className="hidden md:inline"> Strategy</span> Call
      </a>
    </motion.nav>
  );
};

export default Navbar;
