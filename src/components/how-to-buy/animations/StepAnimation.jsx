import { motion } from 'framer-motion';

export const stepAnimations = {
  search: {
    y: [-2, 2, -2],
    rotate: [-10, 10, -10],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  chart: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  diamond: {
    rotate: [-15, 15, -15],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  rocket: {
    y: [-4, 4, -4],
    x: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  whileHover: { scale: 1.05 }
};

export const iconAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { type: "spring", stiffness: 200, damping: 10 }
};