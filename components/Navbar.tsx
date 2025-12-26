
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = ['Services', 'Mission', 'Testimonials', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
           <path d="M70 20C75 35 60 45 40 55C20 65 15 85 40 80C65 75 80 50 70 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M40 55L30 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-xl font-medium tracking-tight">ScaleFlight</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <a 
        href="#contact"
        className="px-6 py-2 bg-black text-white text-xs font-medium uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
      >
        Contact
      </a>
    </motion.nav>
  );
};

export default Navbar;
