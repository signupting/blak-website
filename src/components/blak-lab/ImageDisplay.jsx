import React from 'react';
import { motion } from 'framer-motion';
import ShareButtons from './ShareButtons';

export default function ImageDisplay({ imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10"
    >
      <div className="aspect-square bg-white/5 rounded-xl mb-6 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Generated BLAK meme"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white/40 font-poppins">Your legend will appear here</p>
          </div>
        )}
      </div>

      <ShareButtons imageUrl={imageUrl} />
    </motion.div>
  );
}