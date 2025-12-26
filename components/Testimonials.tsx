
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: '01',
    text: "We were missing 30-40% of our calls when crews were out on jobs. Now every call gets answered, and we've booked 12 more jobs this month alone. The AI sounds so natural that customers don't even realize it's not a person.",
    author: "MIKE RODRIGUEZ",
    role: "OWNER, RODRIGUEZ HVAC",
    result: "+12 jobs/month"
  },
  {
    id: '02',
    text: "I was skeptical about AI, but ScaleFlight made it simple. They understood my roofing business, set everything up, and now leads get responses in under a minute. My close rate went from 35% to 52%.",
    author: "JENNIFER WALSH",
    role: "CEO, WALSH ROOFING & SIDING",
    result: "52% close rate"
  },
  {
    id: '03',
    text: "Between managing properties and showing homes, I couldn't keep up with inquiries. Now the AI qualifies leads, schedules showings, and follows up automatically. I'm closing more deals with less stress.",
    author: "DAVID CHEN",
    role: "BROKER, CHEN REALTY GROUP",
    result: "25% more closings"
  },
  {
    id: '04',
    text: "We went from losing after-hours calls to voicemail to booking emergency jobs at 2 AM. That alone paid for the service in the first week. Now we're booked solid.",
    author: "TONY MARCELLO",
    role: "OWNER, MARCELLO PLUMBING",
    result: "24/7 bookings"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-black/40 mb-4 block">Real Results</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">What Business Owners Say</h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Contractors and service businesses just like yours are already seeing results with AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gray-400">{t.id}</span>
                  <span className="px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-black/70">{t.result}</span>
                </div>
                <p className="text-lg font-light leading-relaxed mb-8 text-black/80">"{t.text}"</p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-black mb-1">{t.author}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
