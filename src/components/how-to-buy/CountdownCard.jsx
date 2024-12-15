import React from 'react';
import { motion } from 'framer-motion';
import { formatNumber } from './utils/timeUtils';

export default function CountdownCard({ interval, value }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10 min-w-[140px]"
    >
      <div className="text-5xl font-bold font-poppins text-white mb-2">
        {formatNumber(value)}
      </div>
      <div className="text-sm text-white/40 font-poppins uppercase tracking-wider">
        {interval}
      </div>
    </motion.div>
  );
}