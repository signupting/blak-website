import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PrimaryButton from '../buttons/PrimaryButton';

export default function NFTSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nftCards = [
    { id: 1, title: "OG Blanta", rarity: "Legendary" },
    { id: 2, title: "Cyber Blanta", rarity: "Epic" },
    { id: 3, title: "Space Blanta", rarity: "Rare" },
    { id: 4, title: "Pixel Blanta", rarity: "Common" }
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
          <h2 className="christmas-title text-5xl font-bold mb-8">The Many Faces of Blanta</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Mint your piece of Blanta history. Stake your NFTs for rewards or trade them on the marketplace.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {nftCards.map((nft, index) => (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                }}
              >
                <div className="aspect-square mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                  <span className="text-6xl">🎅🏿</span>
                </div>
                <h3 className="text-xl font-bold">{nft.title}</h3>
                <p className="text-sm text-white/80">{nft.rarity}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <PrimaryButton>View NFT Collection</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}