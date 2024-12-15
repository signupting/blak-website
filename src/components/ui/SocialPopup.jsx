import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-[#ff3131] p-8 rounded-2xl shadow-2xl flex gap-8"
          >
            <motion.a
              href="#telegram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <img 
                src="/images/telegram black.svg"
                alt="Join Telegram"
                className="w-14 h-14"
              />
            </motion.a>

            <motion.a
              href="#x"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <img 
                src="/images/x-social-media-black-icon.svg"
                alt="Follow on X"
                className="w-14 h-14"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}