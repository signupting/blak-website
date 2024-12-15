import React from 'react';
import { motion } from 'framer-motion';
import GeneratorInterface from '../blak-lab/GeneratorInterface';
import ImageDisplay from '../blak-lab/ImageDisplay';
import ShareModal from '../blak-lab/ShareModal';

export default function BlakLab() {
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

          <motion.div 
            className="relative w-full h-2 my-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-full">
              <motion.div 
                className="absolute inset-0 bg-white/10"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/80 mb-16 max-w-3xl mx-auto font-poppins"
          >
            Create legendary BLAK MEME's with our AI generator.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <GeneratorInterface />
          <ImageDisplay />
        </div>
      </div>
    </section>
  );
}