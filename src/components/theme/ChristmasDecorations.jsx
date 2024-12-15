import React from 'react';
import { motion } from 'framer-motion';

export default function ChristmasDecorations() {
  const decorations = [
    { emoji: "🎄", position: "top-20 left-[10%]", size: "text-6xl", delay: 0 },
    { emoji: "🎅🏿", position: "top-40 right-[15%]", size: "text-6xl", delay: 0.2 },
    { emoji: "🎁", position: "bottom-32 left-[20%]", size: "text-5xl", delay: 0.4 },
    { emoji: "⭐", position: "top-60 left-[80%]", size: "text-5xl", delay: 0.6 },
    { emoji: "🦌", position: "bottom-40 right-[25%]", size: "text-5xl", delay: 0.8 }
  ];

  return (
    <>
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.position} ${decoration.size}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            opacity: { duration: 0.5, delay: decoration.delay },
            scale: { duration: 0.5, delay: decoration.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
}