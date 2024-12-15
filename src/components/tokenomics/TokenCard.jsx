import React from 'react';
import { motion } from 'framer-motion';

export default function TokenCard({ data, index }) {
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
        className="text-6xl mb-6 flex justify-center"
        animate={data.animation}
      >
        {data.icon}
      </motion.div>
      
      <h3 className="text-xl font-bold mb-2 font-poppins">{data.title}</h3>
      <p className="text-3xl font-bold text-white mb-1 font-poppins">{data.value}</p>
      <p className="text-white/60 font-poppins">{data.subtitle}</p>
    </motion.div>
  );
}