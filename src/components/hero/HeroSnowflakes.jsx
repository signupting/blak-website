import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSnowflakes() {
  const snowflakes = Array(20).fill('❄');
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((_, i) => (
        <motion.div 
          key={i} 
          className="absolute text-white/20"
          initial={{ 
            top: "-10%",
            left: `${Math.random() * 100}%`,
            scale: Math.random() * (1.2 - 0.8) + 0.8,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: "110%",
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: Math.random() * (15 - 10) + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -15
          }}
          style={{
            fontSize: `${Math.random() * (30 - 10) + 10}px`
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}