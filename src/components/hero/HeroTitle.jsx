import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="christmas-title text-8xl md:text-9xl font-bold mb-6 text-white"
      >
        BLAS
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="holiday-text text-3xl md:text-4xl mb-8 text-white font-bold"
      >
        Santa Was Black. History Says It. Crypto Proves It.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="holiday-text text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto"
      >
        BLAS is the meme coin rewriting holiday legends. Join the movement, create your 
        version of Black Santa Claus, and let's sleigh our way to the moon.
      </motion.p>
    </>
  );
}