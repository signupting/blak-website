import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-2 font-sawer">
        YOUR FAVORITE LEGEND..?
      </h2>
      <p className="text-3xl md:text-5xl font-bold font-sawer">
        PROBABLY... <span className="text-black">BLAK</span>
      </p>
    </motion.div>
  );
}