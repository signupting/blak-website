import React from 'react';
import { motion } from 'framer-motion';

export default function ChristmasLights() {
  const lights = Array(20).fill(null);
  
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
      <div className="flex justify-between px-2">
        {lights.map((_, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{
              backgroundColor: index % 2 === 0 ? '#ef4444' : '#22c55e',
              boxShadow: `0 0 10px ${index % 2 === 0 ? '#ef4444' : '#22c55e'}`
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
      </div>
    </div>
  );
}