
import React from 'react';
import { motion } from 'framer-motion';
import MetallicShape from './MetallicShape';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[120px] font-light tracking-tighter leading-none mb-4"
        >
          Scale with AI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          An AI-first automation agency. We bridge the gap between human creativity and autonomous intelligence to skyrocket your business efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-full text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-all overflow-hidden"
          >
            <span className="relative z-10">Start Scaling</span>
            <motion.div 
              className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"
            />
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-4xl opacity-50 pointer-events-none">
        <MetallicShape size={600} />
      </div>
    </section>
  );
};

export default Hero;
