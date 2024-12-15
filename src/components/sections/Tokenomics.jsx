import React from 'react';
import { motion } from 'framer-motion';
import TokenCard from '../tokenomics/TokenCard';
import ChristmasLights from '../theme/ChristmasLights';

export default function Tokenomics() {
  const tokenomicsData = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      subtitle: "BLAK Tokens",
      icon: "💰",
      animation: {
        y: [-4, 4, -4],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Initial Price",
      value: "$0.0001",
      subtitle: "Starting Low",
      icon: "📈",
      animation: {
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Liquidity Pool",
      value: "80%",
      subtitle: "Locked Forever",
      icon: "🔒",
      animation: {
        rotate: [-5, 5, -5],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Marketing",
      value: "10%",
      subtitle: "Community Growth",
      icon: "🚀",
      animation: {
        x: [-4, 4, -4],
        transition: {
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  ];

  return (
    <section className="min-h-screen bg-[#ff3131] relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <ChristmasLights />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white font-poppins">
            Tokenomics
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto font-poppins">
            Fair Launch: No presales, no team tokens. Just pure community power.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tokenomicsData.map((item, index) => (
              <TokenCard key={index} data={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 font-poppins">Tax Structure</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">1%</p>
                <p className="text-white/60">Buy Tax</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">1%</p>
                <p className="text-white/60">Sell Tax</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}