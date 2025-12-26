
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
          <div className="logo-bird-container" style={{ height: '20px', width: '20px' }}>
            <img 
              src="/logo/logo.jpg" 
              alt="ScaleFlight Bird Logo" 
              className="logo-bird" 
              style={{ 
                height: '20px',
                clipPath: 'inset(0 50% 0 0)',
                objectPosition: '0% center'
              }} 
            />
          </div>
          <span className="logo-text text-sm font-medium tracking-tight text-black">ScaleFlight</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
