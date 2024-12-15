import React from 'react';

export default function Snowflakes() {
  const snowflakes = Array(10).fill('❅');
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {snowflakes.map((flake, i) => (
        <div key={i} className="snowflake">
          {flake}
        </div>
      ))}
    </div>
  );
}