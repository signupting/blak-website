import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = () => {
    // TODO: Implement AI image generation
    console.log('Generating image with prompt:', prompt);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-red-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-8 text-center text-white"
        >
          Create Your Own <span className="brand-text">BLAKKK</span> Memes
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your BLAKKK Santa scene..."
              className="w-full h-32 bg-white/10 rounded-xl p-4 text-white placeholder-white/60 mb-4"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              className="w-full bg-white/20 hover:bg-white/30 text-white py-4 rounded-xl font-bold transition-colors"
            >
              Generate Meme
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}