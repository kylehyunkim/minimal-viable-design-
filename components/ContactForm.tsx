
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const businessTypes = [
  'Construction / General Contractor',
  'HVAC / Plumbing / Electrical',
  'Real Estate / Property Management',
  'Roofing / Siding',
  'Landscaping / Lawn Care',
  'Home Services (Cleaning, Painting, etc.)',
  'Other Service Business'
];

const revenueRanges = [
  'Under $10,000/month',
  '$10,000 - $20,000/month',
  '$20,000 - $50,000/month',
  '$50,000 - $100,000/month',
  '$100,000+/month'
];

const biggestChallenges = [
  'Missing calls and losing potential customers',
  'Scheduling and dispatching is a constant headache',
  'Too much time on admin tasks instead of billable work',
  'Need better visibility into business performance',
  'Want to scale but don\'t know where to start with AI',
  'Other'
];

const currentOperations = [
  'Mostly manual—spreadsheets, paper, and phone calls',
  'Some software tools but not connected',
  'Good systems but looking to automate more',
  'Already using some AI tools',
  'Not sure where to start'
];

const timeframes = [
  'As soon as possible - I\'m losing money every day',
  'Within the next 30 days',
  'In 1-3 months',
  'Just exploring options for now'
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    revenueRange: '',
    biggestChallenge: '',
    currentOperations: '',
    timeframe: '',
    additionalInfo: ''
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll review your information and reach out within 24 hours to schedule a call.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      revenueRange: '',
      biggestChallenge: '',
      currentOperations: '',
      timeframe: '',
      additionalInfo: ''
    });
    setStep(1);
  };

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.businessName;
  const isStep2Valid = formData.businessType && formData.revenueRange;
  const isStep3Valid = formData.biggestChallenge && formData.timeframe;

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#080810] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-cyan-400/70 mb-4 block">Free Strategy Call</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4 text-white">
            Let's See If We're a Fit
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Answer a few quick questions so we can understand your business and come to the call prepared with specific recommendations.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs uppercase tracking-wider text-white/40 mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/[0.06]">
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light mb-6 text-white">Your Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all text-white placeholder-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-medium">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Smith HVAC Services"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all text-white placeholder-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@smithhvac.com"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all text-white placeholder-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-medium">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all text-white placeholder-white/30"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Business Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light mb-6 text-white">Tell Us About Your Business</h3>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">What type of business do you run? *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {businessTypes.map(type => (
                    <label
                      key={type}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.businessType === type
                          ? 'border-cyan-400/50 bg-cyan-400/10'
                          : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <input
                        type="radio"
                        name="businessType"
                        value={type}
                        checked={formData.businessType === type}
                        onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.businessType === type ? 'border-cyan-400' : 'border-white/30'
                        }`}>
                        {formData.businessType === type && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </span>
                      <span className="text-sm text-white/70">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">What's your current monthly revenue? *</label>
                <p className="text-xs text-white/30 mb-3">This helps us understand if we're the right fit. We work best with businesses doing $20k+/month.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {revenueRanges.map(range => (
                    <label
                      key={range}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.revenueRange === range
                          ? 'border-cyan-400/50 bg-cyan-400/10'
                          : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <input
                        type="radio"
                        name="revenueRange"
                        value={range}
                        checked={formData.revenueRange === range}
                        onChange={e => setFormData({ ...formData, revenueRange: e.target.value })}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.revenueRange === range ? 'border-cyan-400' : 'border-white/30'
                        }`}>
                        {formData.revenueRange === range && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </span>
                      <span className="text-sm text-white/70">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">How do you currently run your operations?</label>
                <select
                  value={formData.currentOperations}
                  onChange={e => setFormData({ ...formData, currentOperations: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all appearance-none text-white/70"
                >
                  <option value="" className="bg-[#0a0a0f]">Select an option...</option>
                  {currentOperations.map(option => (
                    <option key={option} value={option} className="bg-[#0a0a0f]">{option}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}

          {/* Step 3: Goals & Challenges */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light mb-6 text-white">Your Goals & Challenges</h3>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">What's your biggest challenge right now? *</label>
                <div className="space-y-3">
                  {biggestChallenges.map(challenge => (
                    <label
                      key={challenge}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.biggestChallenge === challenge
                          ? 'border-cyan-400/50 bg-cyan-400/10'
                          : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <input
                        type="radio"
                        name="biggestChallenge"
                        value={challenge}
                        checked={formData.biggestChallenge === challenge}
                        onChange={e => setFormData({ ...formData, biggestChallenge: e.target.value })}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.biggestChallenge === challenge ? 'border-cyan-400' : 'border-white/30'
                        }`}>
                        {formData.biggestChallenge === challenge && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </span>
                      <span className="text-sm text-white/70">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">How soon are you looking to implement? *</label>
                <div className="space-y-3">
                  {timeframes.map(time => (
                    <label
                      key={time}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.timeframe === time
                          ? 'border-cyan-400/50 bg-cyan-400/10'
                          : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <input
                        type="radio"
                        name="timeframe"
                        value={time}
                        checked={formData.timeframe === time}
                        onChange={e => setFormData({ ...formData, timeframe: e.target.value })}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.timeframe === time ? 'border-cyan-400' : 'border-white/30'
                        }`}>
                        {formData.timeframe === time && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </span>
                      <span className="text-sm text-white/70">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-medium">Anything else we should know?</label>
                <textarea
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={e => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Tell us about your specific situation, goals, or questions..."
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-4 focus:border-cyan-400/50 focus:bg-white/[0.08] outline-none transition-all resize-none text-white placeholder-white/30"
                />
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium uppercase tracking-widest hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Continue
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStep3Valid}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium uppercase tracking-widest hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Request Free Strategy Call
              </button>
            )}
          </div>
        </form>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your info is secure
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              We respond within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No obligation
            </span>
          </div>
        </motion.div>

        <div className="mt-16 pt-12 border-t border-white/10 flex items-center justify-center text-white/30 text-xs tracking-widest uppercase">
          <p>ScaleFlight · Operational AI for service businesses</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
