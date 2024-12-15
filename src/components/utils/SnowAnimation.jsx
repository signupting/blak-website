import React from 'react';

export default function SnowAnimation() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('/snowflakes-1.png')] opacity-20 animate-snow-1" />
      <div className="absolute inset-0 bg-[url('/snowflakes-2.png')] opacity-15 animate-snow-2" />
      <div className="absolute inset-0 bg-[url('/snowflakes-3.png')] opacity-10 animate-snow-3" />
    </>
  );
}