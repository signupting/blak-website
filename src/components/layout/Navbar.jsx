import React from 'react';
import { motion } from 'framer-motion';

function NavIcon({ src, alt, animation }) {
  return (
    <motion.a 
      href="#"
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(255,255,255,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={animation}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-6 h-6 object-contain"
      />
    </motion.a>
  );
}

export default function Navbar() {
  const telegramAnimation = {
    y: [-2, 2, -2],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const xAnimation = {
    scale: [1, 1.05, 1],
    x: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl brand-text cursor-pointer text-black"
          >
            $BLAK
          </motion.div>
          
          <div className="flex items-center gap-4">
            <NavIcon 
              src="/images/telegram black.svg"
              alt="Join Telegram"
              animation={telegramAnimation}
            />
            <NavIcon 
              src="/images/x-social-media-black-icon.svg"
              alt="Follow on X"
              animation={xAnimation}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}