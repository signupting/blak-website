import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useImageGeneration } from '../../hooks/useImageGeneration';
import PromptHelper from './PromptHelper';
import PromptCrafter from './PromptCrafter';
import GenerateButton from './GenerateButton';

export default function GeneratorInterface({ onImageGenerated }) {
  const [prompt, setPrompt] = useState('');
  const [craftedPrompt, setCraftedPrompt] = useState('');
  const { generate, isGenerating, error } = useImageGeneration();

  const handleGenerate = async () => {
    if (!craftedPrompt) return;
    
    try {
      const imageUrl = await generate(craftedPrompt);
      onImageGenerated(imageUrl);
    } catch (err) {
      console.error('Failed to generate image:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10"
    >
      <h3 className="text-2xl font-bold mb-6 font-poppins text-center">Create Your Legend</h3>
      
      <div className="space-y-6">
        <PromptHelper onSelectPrompt={setPrompt} />
        
        <div>
          <label className="block text-white/80 mb-2 font-poppins" htmlFor="prompt">
            Describe Your Legend
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your idea or click above for inspiration"
            className="w-full h-32 bg-white/10 rounded-xl p-4 text-white placeholder-white/40 font-poppins resize-none focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        {craftedPrompt && (
          <div className="bg-white/5 p-4 rounded-xl">
            <p className="text-sm text-white/60 mb-2 font-poppins">Crafted Prompt:</p>
            <p className="text-white/90 font-poppins">{craftedPrompt}</p>
          </div>
        )}

        <PromptCrafter 
          prompt={prompt} 
          onCraft={setCraftedPrompt}
        />

        <GenerateButton 
          onClick={handleGenerate}
          disabled={!craftedPrompt || isGenerating}
          isGenerating={isGenerating}
        />
      </div>
    </motion.div>
  );
}