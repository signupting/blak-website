import React from 'react';
import { motion } from 'framer-motion';

export default function SocialLinks() {
  const socialLinks = [
    { 
      image: '/images/Page 2: Telegram.svg', 
      alt: 'Telegram', 
      link: '#',
      animation: {
        animate: {
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }
    },
    { 
      image: '/images/Page 2: X.svg', 
      alt: 'X', 
      link: '#',
      animation: {
        animate: {
          scale: [1, 1.05, 1],
          x: [-5, 5, -5],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }
    }
  ];

  const glowAnimation = {
    initial: { 
      filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
      scale: 1
    },
    whileHover: { 
      filter: "drop-shadow(0px 0px 20px rgba(255,255,255,0.5))",
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    whileTap: { 
      scale: 0.95,
      filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.7))"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-row gap-8 md:gap-16 justify-center items-center w-[95vw] md:w-[85vw] lg:w-[75vw] mx-auto"
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.alt}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="w-[40vw] md:w-[35vw] lg:w-[30vw] max-w-[400px]"
        >
          <motion.a
            href={social.link}
            variants={glowAnimation}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
            className="block w-full transform transition-all duration-300"
          >
            <motion.div
              animate={social.animation.animate}
            >
              <img 
                src={social.image} 
                alt={social.alt}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
}