
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    id: '01',
    painPoint: 'Every Missed Call Is Money Walking Out the Door',
    painDescription: "You're on a job site, in a meeting, or it's 9 PM and your phone rings. You can't answer every call. But here's the brutal truth: 68% of customers who can't reach you the first time will call your competitor instead.",
    solutionTitle: 'Never Miss Another Opportunity',
    solutionDescription: "Our AI receptionist answers every call, 24/7/365. It sounds natural, understands your services, qualifies the lead, and books appointments directly into your calendar. After-hours calls alone can increase your bookings by 28%.",
    stats: [
      { value: '42%', label: 'of small businesses lose revenue to missed calls' },
      { value: '24/7', label: 'availability without hiring night staff' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'bg-gray-50'
  },
  {
    id: '02',
    painPoint: "You Know AI Could Transform Your Business. You Just Don't Have Time to Figure It Out.",
    painDescription: "You've heard about AI. You know competitors are using it. But between managing crews, handling customers, and running operations, who has time to become a tech expert? You need someone who gets your business AND the technology.",
    solutionTitle: 'Done-For-You AI Implementation',
    solutionDescription: "We handle everything. We learn your business inside out, build custom AI systems that fit your exact workflow, and continuously optimize them. You don't need to understand the tech—you just see the results: more bookings, less busywork, better margins.",
    stats: [
      { value: '30%', label: 'reduction in operational costs' },
      { value: '2 weeks', label: 'to full implementation' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-gray-100'
  },
  {
    id: '03',
    painPoint: 'Leads Go Cold While You\'re Too Busy to Follow Up',
    painDescription: "A potential customer fills out your website form or calls for a quote. But you're swamped—by the time you follow up, they've already hired someone else. Speed wins in this business, and you're losing deals to faster responders.",
    solutionTitle: 'Instant Lead Response & Qualification',
    solutionDescription: "Our AI instantly engages every lead the moment they reach out. It asks the right questions, qualifies them based on your criteria, schedules estimates, and follows up automatically. Real estate firms using this approach have seen 25% sales increases. Your leads never go cold again.",
    stats: [
      { value: '80%', label: 'of customer interactions handled by AI' },
      { value: '<1 min', label: 'response time to new leads' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-gray-50'
  }
];

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-black/40 mb-4 block">The Problems We Solve</span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
          Sound Familiar?
        </h2>
        <p className="text-lg text-black/60 max-w-2xl mx-auto">
          These are the exact challenges holding back contractors, HVAC companies, and service businesses from scaling to the next level.
        </p>
      </motion.div>

      <div className="space-y-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`${solution.color} rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-gray-200 transition-all`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Pain Point Side */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 text-black/70">
                    {solution.icon}
                  </span>
                  <span className="text-xs font-mono text-black/40 uppercase tracking-wider">Problem {solution.id}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light leading-tight text-black">
                  {solution.painPoint}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {solution.painDescription}
                </p>
              </div>

              {/* Solution Side */}
              <div className="lg:border-l lg:border-gray-200 lg:pl-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-medium uppercase tracking-wider rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Our Solution
                </div>

                <h4 className="text-xl md:text-2xl font-medium text-black">
                  {solution.solutionTitle}
                </h4>

                <p className="text-black/60 leading-relaxed">
                  {solution.solutionDescription}
                </p>

                {/* Stats */}
                <div className="flex gap-8 pt-4">
                  {solution.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl md:text-3xl font-light text-black">{stat.value}</p>
                      <p className="text-xs text-black/50 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;
