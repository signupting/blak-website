import React from 'react';
import { motion } from 'framer-motion';

export default function PromptCrafter({ prompt, onCraft }) {
  const craftPrompt = () => {
    if (!prompt) return;
    
    // Enhance the prompt with specific formatting and keywords
    const crafted = `Create a historically accurate, photorealistic image of ${prompt.trim()}. Style: Professional photography, detailed, cinematic lighting, 8k resolution. The subject should appear dignified and powerful.`;
    
    onCraft(crafted);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={craftPrompt}
      disabled={!prompt}
      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 font-poppins mb-4
        ${prompt 
          ? 'bg-gradient-to-r from-white/20 to-white/10 text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/20' 
          : 'bg-white/10 text-white/40 cursor-not-allowed border-2 border-white/10'}`}
    >
      Craft Prompt ✨
    </motion.button>
  );
}