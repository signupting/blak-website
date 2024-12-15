import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChristmasLights from '../theme/ChristmasLights';
import { useInView } from 'react-intersection-observer';
import SocialPopup from '../ui/SocialPopup';

export default function InnerCircle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showSocials, setShowSocials] = useState(false);

  const perks = [
    { icon: "🎯", title: "Daily truth drops and legendary memes" },
    { icon: "🎁", title: "Exclusive giveaways for the real ones" },
    { icon: "🔓", title: "First access to new legend reveals" },
    { icon: "🤝", title: "Based community of truth seekers" }
  ];

  return (
    <section className="min-h-screen bg-[#ff3131] relative overflow-hidden py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      <ChristmasLights />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-poppins">
            THE INNER CIRCLE
          </h2>
          
          <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto font-poppins">
            Where legends get exposed and holders get paid. The movement is growing, but the truth can't wait.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{
                    y: [-2, 2, -2],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {perk.icon}
                </motion.div>
                <p className="text-lg font-poppins">{perk.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSocials(true)}
              className="bg-gradient-to-r from-white/20 to-white/10 text-white px-12 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 font-poppins"
            >
              Join The Inner Circle
            </motion.button>
            
            <p className="text-white/60 font-poppins">
              The truth is spreading. Will you be part of it?
            </p>
          </motion.div>
        </motion.div>
      </div>

      <SocialPopup isOpen={showSocials} onClose={() => setShowSocials(false)} />
    </section>
  );
}