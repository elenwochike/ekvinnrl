import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const TODAY = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const BLOCK = 'relative py-[clamp(56px,8vw,108px)]';
const BLOCK_BORDER = `${BLOCK} border-t border-line`;
const WRAP = 'max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]';
const EYEBROW =
  "font-mono text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-steel flex items-center gap-[0.6em] " +
  "before:content-[''] before:w-[22px] before:h-px before:bg-line-strong before:inline-block";
const BLOCK_HEAD = 'flex flex-col gap-3.5 mb-11 max-w-[640px]';
const BLOCK_HEAD_H2 = 'text-[clamp(1.9rem,4vw,2.8rem)]';
const BTN_BASE =
  'font-mono text-[0.8rem] font-bold tracking-[0.06em] uppercase px-6 py-[15px] no-underline cursor-pointer ' +
  'inline-flex items-center gap-2.5 border-[1.5px] border-line-strong';
const BTN_SOLID = `${BTN_BASE} bg-ink text-bg border-ink hover:bg-orange hover:border-orange hover:text-white`;
const BTN_LINE = `${BTN_BASE} bg-transparent text-ink hover:border-orange hover:text-orange`;

export default function Home() {
  const navigate = useNavigate();

  const process = [
    ['Consult', "We walk the site or review your brief, understand budget and timeline, and scope what's realistic."],
    ['Design', 'Concept drawings, material boards and 3D views, refined with you until the plan is signed off.'],
    ['Approve', 'Drawings packaged for regulatory approval and final client sign-off on cost and scope.'],
    ['Build', 'Our site team executes with weekly progress reports, photos and budget tracking.'],
    ['Handover', 'Snagging, deep clean, styling and a full documentation pack handed over with your keys.'],
  ];

  return (
    <section id="page-home">
      <section className="relative pt-[clamp(48px,7vw,84px)] pb-[clamp(64px,9vw,120px)] overflow-hidden">
        <div
          className="blueprint-grid absolute inset-0 z-0
            before:content-[''] before:absolute before:-top-px before:-left-px before:w-3.5 before:h-3.5
            before:border-[1.5px] before:border-line-strong before:border-r-0 before:border-b-0 before:pointer-events-none
            after:content-[''] after:absolute after:-bottom-px after:-right-px after:w-3.5 after:h-3.5
            after:border-[1.5px] after:border-line-strong after:border-l-0 after:border-t-0 after:pointer-events-none"
        />
        <div className={`${WRAP} relative z-[1] grid grid-cols-[1.3fr_1fr] max-[920px]:grid-cols-1 gap-12 items-end`}>
          <div>
            <div className={`${EYEBROW} mb-[22px]`}>Port Harcourt, Nigeria </div>
            <h1 className="text-[clamp(2.6rem,6.2vw,5rem)] leading-[0.98]">
              We draft it.
              <br />
              We finish it.
              <br />
              We <em className="not-italic text-orange">build</em> it.
            </h1>
            <p className="mt-[22px] text-[1.1rem] max-w-[52ch] text-ink-soft">
              Ekvinn Resources is a Port Harcourt-based studio delivering architectural design, interior finishing and
              construction under one roof — from the first concept sketch to the final coat of paint.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-[34px]">
              <button className={BTN_SOLID} onClick={() => navigate('/contact')}>
                Start a project →
              </button>
              <button className={BTN_LINE} onClick={() => navigate('/portfolio')}>
                View portfolio
              </button>
            </div>
          </div>
          <div className="border-[1.5px] border-line-strong bg-surface px-[22px] pt-[22px] pb-[18px]">
            <div className="flex justify-between font-mono text-[0.74rem] py-2 border-b border-dashed border-line-strong">
              <span className="text-steel tracking-[0.08em] uppercase font-semibold">Project</span>
              <span className="font-bold">Ekvinn Resources HQ</span>
            </div>
            <div className="flex justify-between font-mono text-[0.74rem] py-2 border-b border-dashed border-line-strong">
              <span className="text-steel tracking-[0.08em] uppercase font-semibold">Scale</span>
              <span className="font-bold">1 : 100</span>
            </div>
            <div className="flex justify-between font-mono text-[0.74rem] py-2 border-b border-dashed border-line-strong">
              <span className="text-steel tracking-[0.08em] uppercase font-semibold">Drawn by</span>
              <span className="font-bold">Studio EK</span>
            </div>
            <div className="flex justify-between font-mono text-[0.74rem] py-2 border-b border-dashed border-line-strong">
              <span className="text-steel tracking-[0.08em] uppercase font-semibold">Date</span>
              <span className="font-bold">{TODAY}</span>
            </div>
            <div className="flex justify-between font-mono text-[0.74rem] py-2">
              <span className="text-steel tracking-[0.08em] uppercase font-semibold">Sheet No.</span>
              <span className="font-bold">EK–A01</span>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-steel">
              <span className="font-mono text-[0.68rem] tabular-nums">0</span>
              <div
                className="flex-1 h-px bg-line-strong relative
                  before:content-[''] before:absolute before:-top-1 before:left-0 before:w-px before:h-[9px] before:bg-line-strong
                  after:content-[''] after:absolute after:-top-1 after:right-0 after:w-px after:h-[9px] after:bg-line-strong"
              />
              <span className="font-mono text-[0.68rem] tabular-nums">12,400 mm</span>
            </div>
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className="grid grid-cols-4 max-[920px]:grid-cols-2 border-t border-l border-line-strong">
            <div className="border-r border-b border-line-strong px-5 py-7">
              <b className="block font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-orange">13</b>
              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-steel">Years in practice</span>
            </div>
            <div className="border-r border-b border-line-strong px-5 py-7">
              <b className="block font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-orange">180+</b>
              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-steel">Projects delivered</span>
            </div>
            <div className="border-r border-b border-line-strong px-5 py-7">
              <b className="block font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-orange">45,000</b>
              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-steel">Sq. m. built</span>
            </div>
            <div className="border-r border-b border-line-strong px-5 py-7">
              <b className="block font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-orange">96%</b>
              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-steel">Clients who refer us</span>
            </div>
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>What we do</div>
            <h2 className={BLOCK_HEAD_H2}>Three disciplines, one crew.</h2>
            <p className="text-ink-soft">
              Most projects fail at the handoffs — architect to fitter to contractor. We keep design, finishing and
              build under one team, so nothing gets lost in translation.
            </p>
          </div>
          <div className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-px bg-line-strong border border-line-strong">
            <div className="bg-bg px-7 py-8 flex flex-col gap-4 relative">
              <span className="font-mono text-[0.75rem] font-bold text-steel">01</span>
              <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
                <path d="M6 34 L22 8 L38 34" stroke="var(--color-orange)" strokeWidth="1.8" />
                <path d="M6 34 H38" stroke="currentColor" strokeWidth="1.8" />
                <path d="M14 34 V22 H30 V34" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <h3 className="text-2xl">Architectural Design</h3>
              <p className="text-ink-soft text-[0.95rem]">Concept design, planning drawings, structural coordination and 3D visualization that gets approvals through the first time.</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2.5">
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Concept</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Planning</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">3D Viz</span>
              </div>
              <button
                className="font-mono text-[0.74rem] font-bold tracking-[0.06em] uppercase text-blue no-underline inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0"
                onClick={() => navigate('/services')}
              >
                Explore service →
              </button>
            </div>
            <div className="bg-bg px-7 py-8 flex flex-col gap-4 relative">
              <span className="font-mono text-[0.75rem] font-bold text-steel">02</span>
              <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
                <rect x="7" y="9" width="30" height="26" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7 20 H37" stroke="var(--color-orange)" strokeWidth="1.6" />
                <path d="M18 20 V35 M27 9 V20" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <h3 className="text-2xl">Interior Finishing</h3>
              <p className="text-ink-soft text-[0.95rem]">Space planning, material and finish selection, custom joinery, lighting design and styling for spaces people actually enjoy.</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2.5">
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Joinery</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Lighting</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Styling</span>
              </div>
              <button
                className="font-mono text-[0.74rem] font-bold tracking-[0.06em] uppercase text-blue no-underline inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0"
                onClick={() => navigate('/services')}
              >
                Explore service →
              </button>
            </div>
            <div className="bg-bg px-7 py-8 flex flex-col gap-4 relative">
              <span className="font-mono text-[0.75rem] font-bold text-steel">03</span>
              <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
                <path d="M10 34 L10 18 L22 10 L34 18 L34 34" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 34 H40" stroke="var(--color-orange)" strokeWidth="1.8" />
              </svg>
              <h3 className="text-2xl">Construction</h3>
              <p className="text-ink-soft text-[0.95rem]">Site supervision, MEP coordination and quality control from groundbreaking to handover, on budget and on schedule.</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2.5">
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">Site mgmt</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">MEP</span>
                <span className="font-mono text-[0.66rem] font-semibold tracking-[0.04em] uppercase text-steel border border-line-strong px-2 py-1">QA/QC</span>
              </div>
              <button
                className="font-mono text-[0.74rem] font-bold tracking-[0.06em] uppercase text-blue no-underline inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0"
                onClick={() => navigate('/services')}
              >
                Explore service →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>How a project runs</div>
            <h2 className={BLOCK_HEAD_H2}>Five stages, no surprises.</h2>
          </div>
          <div className="flex flex-col">
            {process.map(([title, copy], i) => (
              <div
                className={`grid grid-cols-[90px_1fr] border-t border-line-strong py-[22px] gap-5 items-start ${
                  i === process.length - 1 ? 'border-b' : ''
                }`}
                key={title}
              >
                <div className="font-display font-extrabold text-[2.1rem] text-line-strong">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4 className="text-[1.15rem] mb-1.5 font-bold">{title}</h4>
                  <p className="text-ink-soft max-w-[60ch] text-[0.95rem]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className="flex justify-between items-end flex-wrap gap-4 mb-11">
            <div>
              <div className={EYEBROW}>Selected work</div>
              <h2 className={`${BLOCK_HEAD_H2} mt-3.5`}>Recent drawings, built.</h2>
            </div>
            <button className={BTN_LINE} onClick={() => navigate('/portfolio')}>Full portfolio →</button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px]">
            {PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className="cta-banner-stripes border-[1.5px] border-line-strong p-[clamp(32px,6vw,56px)] flex justify-between items-center gap-[30px] flex-wrap">
            <h3 className="text-[clamp(1.5rem,3vw,2.1rem)] bg-bg inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] px-1.5 py-0.5">
              Have a site and a deadline?
            </h3>
            <button className={BTN_SOLID} onClick={() => navigate('/contact')}>Get a quote →</button>
          </div>
        </div>
      </section>
    </section>
  );
}
