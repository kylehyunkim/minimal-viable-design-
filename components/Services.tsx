
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    id: '01',
    pillar: 'Customer Communication',
    painPoint: 'Every Missed Call Is Money Walking Out the Door',
    painDescription: "You're on a job site, in a meeting, or it's 9 PM and your phone rings. You can't answer every call. But here's the brutal truth: 68% of customers who can't reach you the first time will call your competitor instead.",
    solutionTitle: 'AI Receptionist & Lead Response',
    solutionDescription: "Our AI receptionist answers every call, 24/7/365. It sounds natural, understands your services, qualifies the lead, and books appointments directly into your calendar. Instant response to calls, texts, and web inquiries—your leads never go cold again.",
    stats: [
      { value: '24/7', label: 'availability without hiring staff' },
      { value: '<1 min', label: 'response time to new leads' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: '02',
    pillar: 'Workflow Automation',
    painPoint: "You're Stuck Managing Tasks Instead of Growing Your Business",
    painDescription: "Scheduling crews, dispatching jobs, coordinating between office and field—it's a constant juggling act. Your team wastes hours on coordination that should happen automatically. Meanwhile, jobs slip through the cracks.",
    solutionTitle: 'Intelligent Scheduling & Dispatch',
    solutionDescription: "AI-powered scheduling that optimizes routes, assigns the right crew to the right job, and adapts in real-time when things change. Automated reminders, status updates, and handoffs keep everyone in sync without the back-and-forth.",
    stats: [
      { value: '40%', label: 'reduction in scheduling time' },
      { value: '2x', label: 'faster job coordination' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: '03',
    pillar: 'Back Office AI',
    painPoint: "Paperwork Is Eating Your Profits",
    painDescription: "Invoices, estimates, documentation, follow-ups—the administrative work never ends. You didn't start a business to spend nights doing paperwork. Every hour on admin is an hour not spent on billable work or winning new customers.",
    solutionTitle: 'Automated Admin & Documentation',
    solutionDescription: "AI handles the busywork: generating estimates from job details, creating and sending invoices, documenting work with photos and notes, and following up on unpaid bills. Your back office runs itself so you can focus on the work that actually pays.",
    stats: [
      { value: '30%', label: 'reduction in admin time' },
      { value: '50%', label: 'faster invoicing' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: '04',
    pillar: 'Data & Insights',
    painPoint: "You're Flying Blind Without Real Business Intelligence",
    painDescription: "You know your business could be more profitable, but you're not sure where the leaks are. Which marketing channels actually work? Which jobs are most profitable? What's your true capacity? Without clear data, you're guessing.",
    solutionTitle: 'AI-Powered Business Intelligence',
    solutionDescription: "Get clarity on what's actually happening in your business. AI analyzes your operations to surface insights: which lead sources convert best, where jobs are getting delayed, and where you're leaving money on the table. Make decisions based on data, not gut feel.",
    stats: [
      { value: '25%', label: 'improvement in profitability' },
      { value: 'Real-time', label: 'operational visibility' }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="solutions" className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-400/70 mb-4 block">Operational AI Solutions</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4 text-white">
            Four Pillars of Business Automation
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We don't just solve one problem—we transform how your entire operation runs. Each pillar works together to create a business that scales without scaling headcount.
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
              className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/[0.06] hover:border-cyan-400/20 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Pain Point Side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10 text-cyan-400">
                      {solution.icon}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-white/30 uppercase tracking-wider block">Pillar {solution.id}</span>
                      <span className="text-sm font-medium text-cyan-400/80">{solution.pillar}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light leading-tight text-white">
                    {solution.painPoint}
                  </h3>

                  <p className="text-white/50 leading-relaxed">
                    {solution.painDescription}
                  </p>
                </div>

                {/* Solution Side */}
                <div className="lg:border-l lg:border-white/10 lg:pl-12 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Our Solution
                  </div>

                  <h4 className="text-xl md:text-2xl font-medium text-white">
                    {solution.solutionTitle}
                  </h4>

                  <p className="text-white/50 leading-relaxed">
                    {solution.solutionDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 pt-4">
                    {solution.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-2xl md:text-3xl font-light bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                        <p className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
