import React from 'react';
import { useNavigate } from 'react-router-dom';

const BLOCK_BORDER = 'relative py-[clamp(56px,8vw,108px)] border-t border-line';
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

const SERVICES = [
  {
    index: '01',
    title: 'Architectural Design',
    intro: 'From first sketch to a drawing set a contractor can actually build from.',
    items: [
      ['Concept & feasibility design', '2–4 weeks'],
      ['Planning permission drawing sets', '3–5 weeks'],
      ['Structural & MEP coordination', 'Ongoing'],
      ['3D visualization & walkthroughs', '1–2 weeks'],
      ['Construction detail drawings', '2–3 weeks'],
      ['Landscape & site planning', '1–2 weeks'],
    ],
  },
  {
    index: '02',
    title: 'Interior Finishing',
    intro: "Where the drawings become a place you'd actually want to live or work.",
    items: [
      ['Space planning & layout design', '1–3 weeks'],
      ['Material & finish selection', 'Ongoing'],
      ['Custom joinery & cabinetry', '4–8 weeks'],
      ['Lighting design', '1–2 weeks'],
      ['Furniture sourcing & styling', '2–4 weeks'],
      ['Wall, floor & ceiling finishes', 'Site-dependent'],
    ],
  },
  {
    index: '03',
    title: 'Construction',
    intro: "Groundbreaking to handover, managed by people who've done it before.",
    items: [
      ['Site supervision & project management', 'Full build'],
      ['Structural & civil works', 'Site-dependent'],
      ['MEP installation & coordination', 'Site-dependent'],
      ['Quality control & inspections', 'Weekly'],
      ['Budget & procurement tracking', 'Ongoing'],
      ['Snagging & handover', '1–2 weeks'],
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="page-services">
      <section className="relative pt-[56px] pb-[clamp(56px,8vw,108px)]">
        <div className={WRAP}>
          <div className={EYEBROW}>Services</div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] mt-4 max-w-[20ch]">
            Everything between a blank site and a finished room.
          </h1>
          <p className="mt-5 max-w-[64ch] text-ink-soft text-[1.05rem]">
            Engage us for one phase or all three — each is delivered by a dedicated team, coordinated through a
            single project lead so nothing falls through the cracks between drawing, finishing and site.
          </p>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          {SERVICES.map((s, i) => (
            <div
              className={`grid grid-cols-[0.9fr_1.1fr] max-[920px]:grid-cols-1 gap-12 py-[52px] items-start ${
                i !== SERVICES.length - 1 ? 'border-b border-line' : ''
              }`}
              key={s.index}
            >
              <div className="flex flex-col gap-3 sticky top-[calc(var(--nav-h)+20px)] max-[920px]:static">
                <span className="font-display font-extrabold text-[3.4rem] text-line-strong leading-none">{s.index}</span>
                <h3 className="text-[1.9rem]">{s.title}</h3>
                <p className="text-ink-soft">{s.intro}</p>
              </div>
              <ul className="flex flex-col list-none m-0 p-0">
                {s.items.map(([label, time], j) => (
                  <li
                    className={`grid grid-cols-[1fr_auto] gap-3.5 py-3.5 border-t border-line-strong text-[0.96rem] ${
                      j === s.items.length - 1 ? 'border-b' : ''
                    }`}
                    key={label}
                  >
                    <b className="font-bold">{label}</b>
                    <span className="text-steel font-mono text-[0.74rem] self-center">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>Engagement models</div>
            <h2 className={BLOCK_HEAD_H2}>How clients typically work with us.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.92rem]">
              <thead>
                <tr>
                  <th className="border border-line-strong px-3.5 py-3 text-left font-mono text-[0.7rem] font-bold tracking-[0.08em] uppercase text-steel bg-surface">Package</th>
                  <th className="border border-line-strong px-3.5 py-3 text-left font-mono text-[0.7rem] font-bold tracking-[0.08em] uppercase text-steel bg-surface">Best for</th>
                  <th className="border border-line-strong px-3.5 py-3 text-left font-mono text-[0.7rem] font-bold tracking-[0.08em] uppercase text-steel bg-surface">Includes</th>
                  <th className="border border-line-strong px-3.5 py-3 text-left font-mono text-[0.7rem] font-bold tracking-[0.08em] uppercase text-steel bg-surface">Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-line-strong px-3.5 py-3 text-left"><b className="font-bold">Design only</b></td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">Clients with their own contractor</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">Concept, planning set, 3D views</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">4–8 weeks</td>
                </tr>
                <tr>
                  <td className="border border-line-strong px-3.5 py-3 text-left"><b className="font-bold">Design + Finishing</b></td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">Renovations &amp; fit-outs</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">Design, materials, joinery, styling</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">8–14 weeks</td>
                </tr>
                <tr>
                  <td className="border border-line-strong px-3.5 py-3 text-left"><b className="font-bold">Full delivery</b></td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">New builds, ground-up projects</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">Design, permits, build, finishing, handover</td>
                  <td className="border border-line-strong px-3.5 py-3 text-left">6–14 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className="cta-banner-stripes border-[1.5px] border-line-strong p-[clamp(32px,6vw,56px)] flex justify-between items-center gap-[30px] flex-wrap">
            <h3 className="text-[clamp(1.5rem,3vw,2.1rem)] bg-bg inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] px-1.5 py-0.5">
              Not sure which package fits?
            </h3>
            <button className={BTN_SOLID} onClick={() => navigate('/contact')}>Talk to the studio →</button>
          </div>
        </div>
      </section>
    </section>
  );
}
