import React from 'react';
import { motion } from 'framer-motion';
import HeroSnowflakes from '../hero/HeroSnowflakes';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-900 to-[#ff3131] relative overflow-hidden flex items-center justify-center">
      <HeroSnowflakes />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2
          }}
          className="relative flex flex-col items-center"
        >
          <motion.img
            src="/images/HERO PAGE 1.png"
            alt="BLAK SANTA"
            className="w-[95vw] md:w-[70vw] max-w-[1200px] mx-auto mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1,
              y: 0,
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}