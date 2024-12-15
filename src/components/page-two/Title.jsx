import React from 'react';
import { motion } from 'framer-motion';

export default function Title() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[95vw] md:w-[85vw] lg:w-[75vw] mx-auto"
    >
      <img 
        src="/images/Page 2: text 1.svg" 
        alt="Title"
        className="w-full h-auto"
      />
    </motion.div>
  );
}