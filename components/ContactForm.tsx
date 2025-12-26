
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! ScaleFlight will reach out soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-8xl font-light tracking-tighter mb-12"
        >
          Let's get started!
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-xl"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="hello@company.com"
                className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-xl"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-medium">Message</label>
            <textarea 
              rows={4}
              required
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us about your scaling goals"
              className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black outline-none transition-colors font-light text-xl resize-none"
            />
          </div>
          
          <div className="pt-8 flex justify-center">
            <button 
              type="submit"
              className="group relative px-12 py-5 bg-black text-white rounded-full text-xs font-medium uppercase tracking-widest hover:bg-gray-900 transition-all"
            >
              <span className="relative z-10">Send Message</span>
            </button>
          </div>
        </form>

        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs tracking-widest uppercase">
          <p>ScaleFlight · An AI scaling studio.</p>
          <p>hello@scaleflight.ai</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
