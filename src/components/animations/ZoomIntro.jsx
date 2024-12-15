import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ZoomIntro() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-b from-green-900 via-red-900 to-green-900 pointer-events-none"
        >
          <motion.div
            initial={{ 
              scale: 15,
              x: "50%",
              y: "50%",
              translateX: "-50%",
              translateY: "-50%"
            }}
            animate={{ 
              scale: 1,
              x: "85%",
              y: "5%",
              translateX: "0%",
              translateY: "0%"
            }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smoother animation
            }}
            className="fixed text-8xl origin-center"
          >
            🎅🏿
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}