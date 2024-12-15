import React from 'react';
import { motion } from 'framer-motion';
import SocialButtons from '../ui/SocialButtons';

export default function Community() {
  return (
    <section className="py-32 bg-gradient-to-b from-green-900 via-red-900 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-8 text-center text-white"
        >
          Be Part of the <span className="brand-text">BLAK</span> Movement!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-center mb-12 text-white/90 max-w-3xl mx-auto"
        >
          Join our community of degens and help us rewrite holiday history. Share memes,
          earn rewards, and be part of something revolutionary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <SocialButtons />
        </motion.div>
      </div>
    </section>
  );
}