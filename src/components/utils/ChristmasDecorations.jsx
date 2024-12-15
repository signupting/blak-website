import React from 'react';
import { motion } from 'framer-motion';
import ChristmasLights from './ChristmasLights';

export default function ChristmasDecorations() {
  return (
    <>
      <ChristmasLights />
      <div className="absolute top-0 left-0 w-full h-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[linear-gradient(to_top,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
      
      {/* Animated Christmas Elements */}
      <motion.div 
        className="absolute top-20 left-[10%] text-6xl"
        animate={{ 
          rotate: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎄
      </motion.div>

      <motion.div 
        className="absolute top-40 right-[15%] text-6xl"
        animate={{ 
          rotate: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎅🏿
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-[20%] text-5xl"
        animate={{ 
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎁
      </motion.div>

      <motion.div 
        className="absolute top-60 left-[80%] text-5xl"
        animate={{ 
          rotate: [-10, 10, -10],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      <motion.div 
        className="absolute bottom-40 right-[25%] text-5xl"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🦌
      </motion.div>
    </>
  );
}