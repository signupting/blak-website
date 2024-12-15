import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Roadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const phases = [
    {
      title: "Phase 1",
      items: [
        "Launch on PancakeSwap",
        "Build Telegram community",
        "First meme contest"
      ]
    },
    {
      title: "Phase 2",
      items: [
        "Community challenges",
        "Merch launch",
        "BLAS airdrops"
      ]
    },
    {
      title: "Phase 3",
      items: [
        "NFT minting",
        "Staking",
        "Viral campaigns"
      ]
    },
    {
      title: "Phase 4",
      items: [
        "Charitable initiatives",
        "Major influencer partnerships",
        "Global BLAS movement"
      ]
    }
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
          <h2 className="christmas-title text-5xl font-bold mb-16">Roadmap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-lg text-white/90">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}