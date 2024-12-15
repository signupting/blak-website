import React from 'react';
import { motion } from 'framer-motion';

export default function GenerateButton({ onClick, disabled, isGenerating }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 font-poppins
        ${disabled 
          ? 'bg-white/10 text-white/40 cursor-not-allowed' 
          : 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}`}
    >
      {isGenerating ? (
        <div className="flex items-center justify-center gap-2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
          <span>Generating...</span>
        </div>
      ) : (
        'Create Legend'
      )}
    </motion.button>
  );
}