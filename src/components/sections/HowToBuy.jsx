import React from 'react';
import { motion } from 'framer-motion';
import Steps from '../how-to-buy/Steps';
import CountdownTimer from '../ui/CountdownTimer';
import ChristmasLights from '../theme/ChristmasLights';

export default function HowToBuy() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white font-poppins">
            How to Get Your Hands on $BLAK
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-16 py-4 rounded-full text-xl font-bold border-2 border-black hover:bg-white/90 transition-all duration-300 mb-12"
          >
            Buy $BLAK
          </motion.button>
          <CountdownTimer targetDate="2024-01-01T00:00:00" />
        </motion.div>
        
        <Steps />
      </div>
    </section>
  );
}