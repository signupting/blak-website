import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialShareButton from './SocialShareButton';

export default function ShareModal({ isOpen, onClose }) {
  const socialPlatforms = [
    { name: 'WhatsApp', icon: '📱', color: 'from-[#25D366] to-[#128C7E]' },
    { name: 'Twitter', icon: '🐦', color: 'from-[#1DA1F2] to-[#0C85D0]' },
    { name: 'Telegram', icon: '✈️', color: 'from-[#0088cc] to-[#0077B5]' },
    { name: 'Instagram', icon: '📸', color: 'from-[#833AB4] to-[#C13584]' },
    { name: 'TikTok', icon: '🎵', color: 'from-[#000000] to-[#25F4EE]' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[90%] max-w-md bg-gradient-to-b from-[#ff4b4b] to-[#ff3131] p-8 rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold mb-8 text-white font-poppins text-center">
                Share Your Legend
              </h3>
              
              <motion.button
                className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                ✕
              </motion.button>
            </div>
            
            <div className="space-y-3">
              {socialPlatforms.map((platform) => (
                <SocialShareButton
                  key={platform.name}
                  platform={platform}
                  onClick={() => {
                    console.log(`Sharing to ${platform.name}`);
                    onClose();
                  }}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/80 font-poppins">
                Don't forget to tag <span className="font-bold text-white">#BLAK</span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}