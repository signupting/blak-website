import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

export default function LoreGenerator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [generatedLore, setGeneratedLore] = useState('');

  const prompts = [
    "Blanta was banned from the North Pole because...",
    "Blanta stole Christmas after...",
    "The real reason Blanta's sleigh is so fast is...",
    "What really happens when Blanta comes down the chimney..."
  ];

  const handleGenerateLore = () => {
    if (!selectedPrompt) return;
    setGeneratedLore("Your creative Blanta story will appear here...");
  };

  return (
    <section className="py-32 bg-gradient-to-b from-red-900 to-green-900 text-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="christmas-title text-5xl font-bold mb-8">Create Your Blanta Lore</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Every great meme has its story. Choose a prompt and create your own Blanta legend.
            The best stories will be immortalized in the BLAS community hall of fame!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Choose Your Prompt</h3>
              <div className="space-y-4">
                {prompts.map((prompt, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedPrompt(prompt)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      selectedPrompt === prompt 
                        ? 'bg-white/20 shadow-lg' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Your Blanta Story</h3>
              <div className="bg-white/5 p-6 rounded-xl min-h-[200px] mb-6 text-left">
                {generatedLore || "Select a prompt to start your story..."}
              </div>
              <div className="flex gap-4 justify-center">
                <PrimaryButton onClick={handleGenerateLore}>Generate</PrimaryButton>
                <SecondaryButton>Share Story</SecondaryButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}