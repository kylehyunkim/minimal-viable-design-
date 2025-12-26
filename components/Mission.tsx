
import React from 'react';
import { motion } from 'framer-motion';
import MetallicShape from './MetallicShape';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-2xl text-gray-300 font-light leading-tight">
              We make the scale we believe in.
            </p>
            <p className="text-2xl text-black font-light leading-tight">
              Work we're proud to have built.
            </p>
            <p className="text-2xl text-gray-300 font-light leading-tight">
              Future worth being known for.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full md:w-1/2 aspect-square flex items-center justify-center">
          <MetallicShape size={500} className="scale-75 md:scale-100" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase mix-blend-difference text-white">Mission</h2>
          </motion.div>
        </div>

        <div className="z-10 max-w-sm self-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-right"
          >
             <p className="text-gray-400 font-light mb-2">Build it the smartest version it can be.</p>
             <p className="text-black font-medium uppercase tracking-widest text-xs">Only the kind of AI we're proud to sign.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
