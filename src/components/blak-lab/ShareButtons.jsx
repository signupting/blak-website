import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShareModal from './ShareModal';

export default function ShareButtons() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsShareModalOpen(true)}
            className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold transition-all duration-300 font-poppins"
          >
            Share 🚀
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold transition-all duration-300 font-poppins"
          >
            Save 💾
          </motion.button>
        </div>

        <div className="text-center text-white/60 font-poppins">
          #BLAK
        </div>
      </div>

      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
}