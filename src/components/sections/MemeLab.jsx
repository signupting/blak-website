import React from 'react';
import { motion } from 'framer-motion';
import MemeGenerator from '../meme-lab/MemeGenerator';
import ShareSection from '../meme-lab/ShareSection';
import ChristmasLights from '../theme/ChristmasLights';

export default function MemeLab() {
  return (
    <section className="min-h-screen bg-[#ff3131] relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <ChristmasLights />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="brand-text text-black">BLAK</span>
            <span className="font-poppins text-white"> MEME LAB</span>
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto font-poppins">
            Create Your <span className="brand-text text-black">BLAK</span> Legend
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <MemeGenerator />
            <ShareSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
}