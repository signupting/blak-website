import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/snowflakes.png')] opacity-10 animate-snow"></div>
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-transparent bg-clip-text">
            BLANTA CLAUS
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-yellow-100">The Real OG Santa</p>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
              Buy $BLANTA
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400/10 transition-colors">
              Join Community
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}