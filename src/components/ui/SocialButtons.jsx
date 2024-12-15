import React from 'react';
import { motion } from 'framer-motion';

export default function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      <SocialButton href="#" platform="Twitter" icon="🐦" />
      <SocialButton href="#" platform="Telegram" icon="📱" />
    </div>
  );
}

function SocialButton({ href, platform, icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
    >
      <span>{icon}</span>
      <span>Join {platform}</span>
    </motion.a>
  );
}