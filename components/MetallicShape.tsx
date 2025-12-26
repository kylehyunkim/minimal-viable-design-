
import React from 'react';
import { motion } from 'framer-motion';

interface MetallicShapeProps {
  className?: string;
  size?: number;
}

const MetallicShape: React.FC<MetallicShapeProps> = ({ className, size = 400 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <filter id="metallic" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="#ffffff" result="specOut">
                <fePointLight x="-5000" y="-10000" z="20000" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceGraphic" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            </filter>
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#chromeGradient)"
            filter="url(#metallic)"
            animate={{
              d: [
                "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.7,80.1,29.3,71.4,41.9C62.7,54.5,50.6,65,36.8,71.8C23,78.6,7.6,81.6,-8.1,79.5C-23.7,77.4,-39.7,70.2,-52.7,59.3C-65.8,48.4,-75.9,33.9,-80.4,18.1C-84.9,2.3,-83.8,-14.8,-76.6,-29.4C-69.4,-44.1,-56,-56.3,-41.4,-63C-26.8,-69.6,-11,-70.7,2.5,-75C16,-79.3,31.3,-83.7,44.7,-76.4Z",
                "M48.1,-79.1C61.3,-72.4,70.3,-58.7,75.9,-44.2C81.4,-29.7,83.4,-14.9,81.8,-0.9C80.2,13.1,75,26.1,66.4,37.3C57.8,48.5,45.8,57.8,32.7,63.9C19.6,70,5.4,72.9,-9.2,71.4C-23.8,69.9,-38.8,64,-50.8,54.4C-62.7,44.9,-71.7,31.6,-75.9,17C-80.2,2.4,-79.7,-13.4,-73.4,-27.1C-67.1,-40.8,-55,-52.3,-41.3,-58.7C-27.6,-65.1,-12.3,-66.3,2.1,-70C16.5,-73.7,34.9,-85.9,48.1,-79.1Z",
                "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.7,80.1,29.3,71.4,41.9C62.7,54.5,50.6,65,36.8,71.8C23,78.6,7.6,81.6,-8.1,79.5C-23.7,77.4,-39.7,70.2,-52.7,59.3C-65.8,48.4,-75.9,33.9,-80.4,18.1C-84.9,2.3,-83.8,-14.8,-76.6,-29.4C-69.4,-44.1,-56,-56.3,-41.4,-63C-26.8,-69.6,-11,-70.7,2.5,-75C16,-79.3,31.3,-83.7,44.7,-76.4Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default MetallicShape;
