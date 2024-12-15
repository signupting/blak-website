import React from 'react';
import { motion } from 'framer-motion';

export default function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-b from-white/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative group"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <motion.div 
        className="text-6xl mb-6 flex justify-center relative"
        animate={step.animation}
      >
        {step.icon}
      </motion.div>
      <div className="text-4xl mb-4 text-white/40 font-poppins">{index + 1}</div>
      <h3 className="text-xl font-bold mb-2 font-poppins">{step.title}</h3>
      <p className="text-white/60 font-poppins">{step.description}</p>
    </motion.div>
  );
}