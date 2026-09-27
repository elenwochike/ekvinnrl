import React, { useState } from 'react';
import { PROJECTS } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const WRAP = 'max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]';
const EYEBROW =
  "font-mono text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-steel flex items-center gap-[0.6em] " +
  "before:content-[''] before:w-[22px] before:h-px before:bg-line-strong before:inline-block";

const FILTERS = [
  ['all', 'All work'],
  ['residential', 'Residential'],
  ['commercial', 'Commercial'],
  ['interior', 'Interior'],
];

const FILTER_BTN_BASE =
  'font-mono text-[0.74rem] font-semibold tracking-[0.06em] uppercase px-4 py-[9px] border border-line-strong ' +
  'bg-transparent cursor-pointer text-ink-soft hover:border-ink hover:text-ink';
const FILTER_BTN_ACTIVE = 'bg-ink border-ink text-bg hover:border-ink hover:text-bg';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="page-portfolio">
      <section className="relative pt-[56px] pb-[clamp(56px,8vw,108px)]">
        <div className={WRAP}>
          <div className={EYEBROW}>Portfolio</div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] mt-4 max-w-[18ch]">
            180 projects. A few worth showing.
          </h1>
          <div className="flex flex-wrap gap-2.5 mb-8 mt-[34px]">
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                className={`${FILTER_BTN_BASE} ${filter === key ? FILTER_BTN_ACTIVE : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px] mt-2">
            {visible.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
