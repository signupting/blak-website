import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GeneratorInterface from './GeneratorInterface';
import ImageDisplay from './ImageDisplay';
import { DividerAnimation } from '../animations/DividerAnimation';

export default function BlakLab() {
  const [generatedImage, setGeneratedImage] = useState(null);

  return (
    <section className="min-h-screen bg-[#ff3131] relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-4 flex items-center justify-center gap-4">
            <span className="brand-text text-black">BLAK</span>
            <span className="font-poppins text-white">LAB</span>
          </h2>

          <DividerAnimation />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/80 mb-16 max-w-3xl mx-auto font-poppins"
          >
            Create legendary BLAK MEME's with our AI generator
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <GeneratorInterface onImageGenerated={setGeneratedImage} />
          <ImageDisplay imageUrl={generatedImage} />
        </div>
      </div>
    </section>
  );
}