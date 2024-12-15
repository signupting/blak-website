import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrompts } from '../../hooks/usePrompts';

export default function PromptHelper({ onSelectPrompt }) {
  const [showPrompts, setShowPrompts] = useState(false);
  const prompts = usePrompts();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowPrompts(!showPrompts)}
        className="w-full bg-transparent text-white text-2xl py-4 rounded-xl font-bold transition-all duration-300 font-poppins border-2 border-white/30 hover:border-white/50 hover:bg-white/10"
      >
        Need Ideas? 💡
      </motion.button>

      <AnimatePresence>
        {showPrompts && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#ff3131] rounded-xl overflow-hidden border-2 border-white/30 shadow-lg"
          >
            {prompts.map((prompt, index) => (
              <motion.button
                key={index}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                onClick={() => {
                  onSelectPrompt(prompt);
                  setShowPrompts(false);
                }}
                className="w-full text-left px-6 py-4 text-white text-xl font-poppins border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-colors duration-300"
              >
                {prompt}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}