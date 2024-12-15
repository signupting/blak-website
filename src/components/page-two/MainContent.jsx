import React from 'react';
import { motion } from 'framer-motion';

export default function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-[100vw] md:w-[95vw] lg:w-[90vw] mx-auto px-4"
    >
      <img 
        src="/images/Page 2: text 2.svg" 
        alt="Main Content"
        className="w-full h-auto"
      />
    </motion.div>
  );
}