import React from 'react';
import { motion } from 'framer-motion';

export default function MerchSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-red-900 to-green-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16 text-white"
        >
          merch shop
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="aspect-square bg-white/5 rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}