
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'AI Agents',
    description: 'We build autonomous digital coworkers that handle customer support, lead generation, and complex operations without human intervention.',
    color: 'bg-gray-50'
  },
  {
    id: '02',
    title: 'AI Workflows',
    description: 'Seamlessly integrate Large Language Models into your existing software stack to automate repetitive tasks and data processing.',
    color: 'bg-gray-100'
  },
  {
    id: '03',
    title: 'Business Scaling',
    description: 'Strategic AI consulting to identify bottlenecks and deploy 10x solutions that allow your team to focus on high-level growth.',
    color: 'bg-gray-50'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-light tracking-tighter mb-16"
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col p-8 rounded-2xl ${service.color} min-h-[400px] justify-between border border-gray-100 group hover:border-gray-300 transition-all`}
          >
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-4">{service.id}</span>
              <h3 className="text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
            </div>
            <div className="w-full aspect-square relative overflow-hidden rounded-xl mt-8">
              <div className="absolute inset-0 metallic-gradient opacity-30 group-hover:scale-110 transition-transform duration-700" />
              <img 
                src={`https://picsum.photos/seed/${service.id}/400/400`} 
                alt={service.title}
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
