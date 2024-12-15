import React from 'react';
import { motion } from 'framer-motion';
import StepCard from './StepCard';

const steps = [
  {
    title: "Pick $BLAK on Pump.fun",
    description: "Navigate to Pump.fun and search for $BLAK",
    icon: "🔍",
    animation: {
      y: [-2, 2, -2],
      rotate: [-10, 10, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  {
    title: "Buy on the bonding curve",
    description: "Get in early for the best price",
    icon: "📈",
    animation: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  {
    title: "Sell anytime",
    description: "Lock in profits whenever you want",
    icon: "💎",
    animation: {
      rotate: [-15, 15, -15],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  {
    title: "Market cap hits $100k",
    description: "Liquidity is added to Raydium & burned",
    icon: "🚀",
    animation: {
      y: [-4, 4, -4],
      x: [-2, 2, -2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
];

export default function Steps() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <StepCard key={index} step={step} index={index} />
      ))}
    </div>
  );
}