import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import Snowflakes from '../theme/Snowflakes';
import ChristmasDecorations from '../theme/ChristmasDecorations';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-green-900 via-red-900 to-green-900">
      <ChristmasDecorations />
      <Snowflakes />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="christmas-title text-7xl md:text-8xl font-bold mb-6 text-white"
        >
          BLANTA CLAUS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-2xl md:text-3xl mb-8 text-white font-bold"
        >
          Santa Was Black. History Says It. Crypto Proves It.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="text-xl mb-12 text-white/90 max-w-3xl mx-auto"
        >
          BLAS is the meme coin rewriting holiday legends. Join the movement, create your version of Black Santa Claus, and let's sleigh our way to the moon.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <PrimaryButton>Buy BLAS Now</PrimaryButton>
          <SecondaryButton>Join Our Telegram</SecondaryButton>
          <SecondaryButton>Explore the Blanta Story</SecondaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}