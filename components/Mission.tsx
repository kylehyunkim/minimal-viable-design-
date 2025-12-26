
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'We Know Your Industry',
    description: "Construction, HVAC, real estate, home services—we've built AI systems specifically for businesses like yours. We understand your workflows, your customers, and your challenges."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Implementation',
    description: "You don't have months to wait. We get your AI systems live in weeks, not quarters. You'll see results before your next billing cycle."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Ongoing Optimization',
    description: "AI isn't set-it-and-forget-it. We continuously monitor, tune, and improve your systems so they get smarter and more effective over time."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'White-Glove Support',
    description: "You're busy running a business. We guide you through every step, handle the technical complexity, and make sure you're never left figuring things out alone."
  }
];

const Mission: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 px-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/loop2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-black/40 mb-4 block">Why ScaleFlight</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
            Built for Busy Business Owners
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            You don't need another tool to manage. You need a partner who handles the complexity so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-black/5 text-black">
                  {reason.icon}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">{reason.title}</h3>
                  <p className="text-black/60 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote/Promise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto pt-8 border-t border-gray-200"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-black/80 leading-relaxed mb-6">
            "We only take on clients we're confident we can help. If AI isn't right for your business, we'll tell you."
          </blockquote>
          <p className="text-sm text-black/50 uppercase tracking-widest">
            Honest guidance. Real results. No BS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
