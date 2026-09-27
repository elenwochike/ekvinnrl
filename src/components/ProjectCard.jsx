import React from 'react';

export default function ProjectCard({ p }) {
  return (
    <div
      className="border border-line-strong bg-surface cursor-pointer transition-[transform,border-color] duration-150
        [transition-timing-function:ease] hover:-translate-y-[3px] hover:border-ink"
      data-cat={p.cat}
    >
      <div className="aspect-[4/3] relative overflow-hidden border-b border-line-strong">
        <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="w-full h-full">
          <rect width="100" height="75" fill="var(--color-surface)" />
          <g opacity="0.9">
            <rect x="10" y="12" width="80" height="52" fill="none" stroke={p.hue} strokeWidth="1.2" />
            <line x1="10" y1="38" x2="90" y2="38" stroke={p.hue} strokeWidth="0.8" opacity="0.6" />
            <line x1="45" y1="12" x2="45" y2="64" stroke={p.hue} strokeWidth="0.8" opacity="0.6" />
            <line x1="10" y1="8" x2="90" y2="8" stroke="var(--color-steel)" strokeWidth="0.6" />
            <line x1="10" y1="6" x2="10" y2="10" stroke="var(--color-steel)" strokeWidth="0.6" />
            <line x1="90" y1="6" x2="90" y2="10" stroke="var(--color-steel)" strokeWidth="0.6" />
          </g>
        </svg>
      </div>
      <div className="px-[18px] py-4 flex flex-col gap-1">
        <span className="font-mono text-[0.66rem] font-bold tracking-[0.1em] uppercase text-orange tabular-nums">
          {p.type} · {p.year}
        </span>
        <h4 className="text-[1.08rem] font-bold">{p.name}</h4>
        <span className="font-mono text-[0.72rem] text-steel tabular-nums">{p.loc}</span>
      </div>
    </div>
  );
}
