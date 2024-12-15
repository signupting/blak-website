import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <motion.div 
          key={interval}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/10 min-w-[140px]"
        >
          <div className="text-5xl font-bold font-poppins text-white mb-2">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm text-white/40 font-poppins uppercase tracking-wider">
            {interval}
          </div>
        </motion.div>
      ))}
    </div>
  );
}