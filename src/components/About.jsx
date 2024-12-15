import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-red-950 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Unwrapping the Truth</h2>
            <p className="text-lg mb-6">
              They lied to us, frens. The mainstream media has been pumping the same old story: 
              Santa Claus is a jolly white dude from the North Pole. But here's the alpha they 
              don't want you to know—<span className="text-yellow-400 font-bold">Santa was Black</span>.
            </p>
            <p className="text-lg">
              The original Saint Nicholas, a 4th-century bishop from Myra (modern-day Turkey), 
              was rocking a darker complexion. Historians have receipts, but over time, the narrative 
              got rugged by Western culture.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/blanta-image.jpg" 
              alt="Blanta Claus" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-red-900 p-4 rounded-lg font-bold">
              The Real Santa 🎅🏿
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}