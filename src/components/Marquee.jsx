import React from 'react';

const WORDS = [
  'ARCHITECTURAL DESIGN',
  'INTERIOR FINISHING',
  'CONSTRUCTION MANAGEMENT',
  '3D VISUALIZATION',
  'SPACE PLANNING',
  'SITE SUPERVISION',
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="border-t border-b border-line-strong overflow-hidden whitespace-nowrap bg-surface" aria-hidden="true">
      <div className="inline-flex animate-[scroll-left_32s_linear_infinite] py-3">
        {items.map((w, i) => (
          <span
            key={i}
            className="font-mono text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-steel px-5
              inline-flex items-center gap-5 after:content-['◆'] after:text-orange after:text-[0.6rem]"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
