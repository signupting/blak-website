import React from 'react';
import { motion } from 'framer-motion';

export default function AboutImage() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
        <img 
          src="https://drive.google.com/uc?export=view&id=1mXdIjho05fP-QhsLiFN6GHn1tksXYtbc" 
          alt="Blanta Claus" 
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-red-600 text-white p-4 rounded-xl font-bold shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span className="mr-2">The Real Santa</span>
        <span role="img" aria-label="Black Santa">🎅🏿</span>
      </motion.div>
    </motion.div>
  );
}