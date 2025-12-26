
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Mission />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="py-12 bg-white flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 opacity-20">
          <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M70 20C75 35 60 45 40 55C20 65 15 85 40 80C65 75 80 50 70 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-medium tracking-tight text-black">ScaleFlight</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
