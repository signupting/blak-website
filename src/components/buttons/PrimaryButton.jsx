import React from 'react';
import { motion } from 'framer-motion';

export default function PrimaryButton({ children, onClick }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-gradient-to-r from-red-400 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow duration-300"
    >
      {children}
    </motion.button>
  );
}