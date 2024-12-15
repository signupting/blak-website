import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

export default function HeroButtons() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center gap-4"
    >
      <PrimaryButton>Buy $BLANTA</PrimaryButton>
      <SecondaryButton>Join Community</SecondaryButton>
    </motion.div>
  );
}