import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 to-green-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="brand-text text-2xl mb-4">BLAKKK</h3>
            <p className="text-white/80">
              Rewriting holiday legends, one meme at a time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
              <li><a href="#merch" className="text-white/80 hover:text-white">Merch</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Telegram</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>This is a meme coin and should not be considered financial advice.</p>
          <p className="mt-2">© 2023 BLAKKK. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}