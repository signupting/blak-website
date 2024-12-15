import React from 'react';
import { motion } from 'framer-motion';

export default function SocialLinks() {
  const socialLinks = [
    {
      image: '/images/Page 2: Telegram.svg',
      alt: 'Join Telegram',
      link: '#',
      animation: {
        animate: {
          y: [-15, 15, -15],
          rotate: [-8, 8, -8],
          scale: [1, 1.1, 1]
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }
    },
    {
      image: '/images/Page 2: X.svg',
      alt: 'Follow on X',
      link: '#',
      animation: {
        animate: {
          x: [-20, 20, -20],
          rotate: [15, -15, 15],
          scale: [1, 0.9, 1]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-row justify-center items-center gap-8 md:gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          className="w-[45%] md:w-[35%] max-w-[300px] transform"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            filter: "drop-shadow(0 0 30px rgba(255,255,255,0.4))"
          }}
          animate={social.animation.animate}
          transition={social.animation.transition}
        >
          <motion.img 
            src={social.image} 
            alt={social.alt}
            className="w-full h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
}