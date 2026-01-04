
import React from 'react';
import { motion } from 'framer-motion';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-[#0a0a0f] border border-white/10 rounded-2xl p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-light tracking-tighter text-white mb-8">Privacy Policy</h2>

        <div className="space-y-6 text-white/70 text-sm leading-relaxed">
          <p className="text-white/50 text-xs uppercase tracking-wider">Last updated: January 2025</p>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Introduction</h3>
            <p>
              ScaleFlight ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website
              and use our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Information We Collect</h3>
            <p className="mb-3">We collect information you voluntarily provide through our contact form:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Message content and business challenges you describe</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">How We Use Your Information</h3>
            <p className="mb-3">We use the information you provide to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to your inquiries and contact requests</li>
              <li>Schedule and conduct strategy calls</li>
              <li>Provide information about our AI consulting services</li>
              <li>Send follow-up communications related to your inquiry</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Data Protection</h3>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel
              who need it to respond to your inquiry.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Data Sharing</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only with trusted service providers who assist us in operating our business, provided they agree to keep
              your information confidential.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Your Rights</h3>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Contact Us</h3>
            <p>
              If you have questions about this privacy policy or wish to exercise your rights, please contact us
              through our website contact form or email us directly.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;
