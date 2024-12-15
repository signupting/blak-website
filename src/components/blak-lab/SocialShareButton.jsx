import React from 'react';
import { motion } from 'framer-motion';

export default function SocialShareButton({ platform, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full bg-gradient-to-r ${platform.color} text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl`}
    >
      <span className="text-2xl">{platform.icon}</span>
      <span className="font-poppins">Share on {platform.name}</span>
    </motion.button>
  );
}