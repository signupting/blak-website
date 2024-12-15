import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  })
};

const socialImages = [
  {
    src: "/images/Page 2- Telegram.png",
    alt: "Join Telegram",
    animation: {
      y: [-10, 10, -10],
      rotate: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  {
    src: "/images/Page 2: X.svg",
    alt: "Follow on X",
    animation: {
      y: [10, -10, 10],
      rotate: [8, -8, 8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }
];

export default function AboutContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto space-y-12"
    >
      <div className="space-y-6">
        <motion.p 
          custom={0} 
          variants={textVariants} 
          className="text-2xl md:text-3xl font-poppins leading-relaxed"
        >
          Born from the dankest corners of the internet,
          <br />
          raised by <span className="font-bold">meme</span> lords,
          <br />
          we're now exposing <span className="font-sawer text-black">BLAK</span> truths...
        </motion.p>
        
        <motion.p 
          custom={1} 
          variants={textVariants}
          className="text-2xl md:text-3xl font-poppins leading-relaxed"
        >
          ...that change <span className="font-bold">everything!</span>
        </motion.p>

        <div className="relative pt-8">
          <motion.p 
            custom={2}
            variants={textVariants}
            className="text-2xl md:text-3xl font-poppins font-bold"
          >
            Join the inner circle!
          </motion.p>
        </div>

        <motion.div 
          custom={3}
          variants={textVariants}
          className="flex justify-center items-center gap-24 pt-12"
        >
          {socialImages.map((image, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-48 h-48 relative"
              whileHover={{ scale: 1.1 }}
              animate={image.animation}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}