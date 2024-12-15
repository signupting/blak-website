import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PrimaryButton from '../buttons/PrimaryButton';

export default function MemeGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const placeholderMemes = [
    { id: 1, title: "Original Blanta", emoji: "🎅🏿" },
    { id: 2, title: "Moon Soon", emoji: "🚀" },
    { id: 3, title: "Holiday Spirit", emoji: "🎄" },
    { id: 4, title: "WAGMI", emoji: "💎" }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-green-900 to-red-900 text-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="christmas-title text-5xl font-bold mb-8">Meme Gallery</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            From AI-generated masterpieces to laugh-out-loud Photoshop memes, 
            this is where the best of Blanta lives.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {placeholderMemes.map((meme, index) => (
              <motion.div
                key={meme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{meme.emoji}</div>
                <h3 className="text-xl font-bold">{meme.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <PrimaryButton>Submit Your Meme</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}