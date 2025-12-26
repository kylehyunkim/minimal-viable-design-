
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'How It Works', href: '#solutions' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Results', href: '#testimonials' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md"
    >
      <a href="#hero" className="flex items-center gap-2">
        <img
          src="/logo/justlogo.jpg"
          alt="ScaleFlight Logo"
          className="h-12 md:h-16 w-auto"
        />
        <span className="text-lg md:text-xl font-medium tracking-tight text-black">SCALEFLIGHT</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="px-6 py-2 bg-black text-white text-xs font-medium uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
      >
        Free Strategy Call
      </a>
    </motion.nav>
  );
};

export default Navbar;
