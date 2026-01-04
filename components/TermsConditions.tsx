
import React from 'react';
import { motion } from 'framer-motion';

interface TermsConditionsProps {
  onClose: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onClose }) => {
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

        <h2 className="text-3xl font-light tracking-tighter text-white mb-8">Terms & Conditions</h2>

        <div className="space-y-6 text-white/70 text-sm leading-relaxed">
          <p className="text-white/50 text-xs uppercase tracking-wider">Last updated: January 2025</p>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Agreement to Terms</h3>
            <p>
              By accessing and using the ScaleFlight website, you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, you should not use our website or services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Services Description</h3>
            <p>
              ScaleFlight provides AI consulting and implementation services for contractors and service businesses.
              Our services include AI receptionist systems, workflow automation, back office automation, and business
              intelligence solutions. Specific deliverables and terms will be outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Use of Website</h3>
            <p className="mb-3">When using our website, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide accurate and complete information in any forms you submit</li>
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to interfere with the website's functionality or security</li>
              <li>Not reproduce, duplicate, or exploit any part of the website without permission</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of ScaleFlight
              and is protected by copyright and other intellectual property laws. You may not use, reproduce, or
              distribute any content without our prior written consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Disclaimer of Warranties</h3>
            <p>
              The website and its content are provided "as is" without warranties of any kind, either express or implied.
              We do not guarantee that the website will be error-free, secure, or continuously available. Results mentioned
              in testimonials and case studies are specific to those clients and are not guaranteed for all users.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Limitation of Liability</h3>
            <p>
              ScaleFlight shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              arising from your use of the website or services. Our total liability shall not exceed the amount paid by
              you, if any, for accessing the website.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or practices
              of these external sites. Accessing third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Modifications</h3>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately
              upon posting to the website. Your continued use of the website after changes constitutes acceptance of the
              modified terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Governing Law</h3>
            <p>
              These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes
              arising from these terms shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-light text-white mb-3">Contact</h3>
            <p>
              For questions regarding these Terms and Conditions, please contact us through our website contact form.
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TermsConditions;
