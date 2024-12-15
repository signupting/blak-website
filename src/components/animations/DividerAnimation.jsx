import React from 'react';
import { motion } from 'framer-motion';

export function DividerAnimation() {
  return (
    <motion.div 
      className="relative w-full h-2 my-12"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-full">
        <motion.div 
          className="absolute inset-0 bg-white/10"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}