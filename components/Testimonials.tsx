
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: '01',
    text: "ScaleFlight has been an exceptional partner, bringing autonomous agents that actually work to our sales process. Their technical excellence is unmatched in the AI space.",
    author: "MARCUS REED",
    role: "FOUNDER OF NEXUS CORE"
  },
  {
    id: '02',
    text: "The migration from manual workflows to AI-orchestrated systems was seamless. They captured our complex requirements and delivered a solution that saved us 40+ hours a week.",
    author: "SARAH CHEN",
    role: "COO AT LUMINARY LABS"
  },
  {
    id: '03',
    text: "Beyond just building tools, they understood our scaling mission. The result is an AI layer that is technical yet approachable, perfectly aligned with our community.",
    author: "DAVID VANCE",
    role: "CEO OF FLIGHT DECK"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Testimonials</h2>
          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="min-w-[300px] md:min-w-[450px] bg-gray-50 rounded-2xl p-10 flex flex-col justify-between snap-start border border-transparent hover:border-gray-200 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-gray-400 mb-8 block">{t.id}</span>
                <p className="text-xl font-light leading-relaxed mb-12">"{t.text}"</p>
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase mb-1">{t.author}</p>
                <p className="text-xs font-mono tracking-widest uppercase text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
