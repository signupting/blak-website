import React from 'react';
import { motion } from 'framer-motion';

export default function ChristmasLights() {
  const lights = Array(20).fill(null);
  
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden pointer-events-none z-50">
      <div className="relative h-8">
        <motion.div 
          className="absolute top-2 left-0 w-full h-[2px]"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)",
              "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 100%)",
              "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="flex justify-between px-4">
          {lights.map((_, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ y: -10 }}
              animate={{ 
                y: [-8, -10, -8],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: index % 2 === 0 ? '#ef4444' : '#22c55e',
                }}
                animate={{
                  boxShadow: [
                    `0 0 10px ${index % 2 === 0 ? '#ef4444' : '#22c55e'}`,
                    `0 0 20px ${index % 2 === 0 ? '#ef4444' : '#22c55e'}`,
                    `0 0 10px ${index % 2 === 0 ? '#ef4444' : '#22c55e'}`
                  ],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}