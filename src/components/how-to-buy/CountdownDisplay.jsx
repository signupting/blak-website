import React from 'react';
import CountdownCard from './CountdownCard';
import { useCountdown } from './hooks/useCountdown';

export default function CountdownDisplay({ targetDate }) {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <CountdownCard key={interval} interval={interval} value={value} />
      ))}
    </div>
  );
}