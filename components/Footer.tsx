
import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="py-8 bg-[#080810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo/logo_clean.jpg"
            alt="ScaleFlight Logo"
            className="h-8 w-auto"
          />
          <span className="text-sm font-light tracking-tighter text-white/40">ScaleFlight</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onPrivacyClick}
            className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={onTermsClick}
            className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
          >
            Terms & Conditions
          </button>
        </div>

        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} ScaleFlight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
