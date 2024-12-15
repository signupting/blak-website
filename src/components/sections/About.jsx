import React from 'react';
import { motion } from 'framer-motion';
import AboutHeading from '../about/AboutHeading';
import AboutContent from '../about/AboutContent';

export default function About() {
  return (
    <section className="min-h-screen bg-[#ff3131] flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-16"
        >
          <AboutHeading />
          <AboutContent />
        </motion.div>
      </div>
    </section>
  );
}