import React from 'react';
import { motion } from 'framer-motion';

export default function SecondaryButton({ children, onClick }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
    >
      {children}
    </motion.button>
  );
}