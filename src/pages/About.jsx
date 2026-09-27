import React from 'react';

const BLOCK_BORDER = 'relative py-[clamp(56px,8vw,108px)] border-t border-line';
const WRAP = 'max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]';
const EYEBROW =
  "font-mono text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-steel flex items-center gap-[0.6em] " +
  "before:content-[''] before:w-[22px] before:h-px before:bg-line-strong before:inline-block";
const BLOCK_HEAD = 'flex flex-col gap-3.5 mb-11 max-w-[640px]';
const BLOCK_HEAD_H2 = 'text-[clamp(1.9rem,4vw,2.8rem)]';

const VALUES = [
  ['Drawings before demolition', 'Nothing gets built without an approved, dimensioned drawing. It saves every client money in the long run.'],
  ['One contract, one team', 'Design and construction under a single agreement means no finger-pointing between trades.'],
  ['Open-book costing', 'You see the same bill of quantities our site managers work from — no hidden markups.'],
  ['We show up after handover', 'Every project carries a 12-month defects window we actually honour, not just print in the contract.'],
];

const TIMELINE = [
  ['2013', 'Studio founded in Ikeja, Lagos', 'Two founding partners, one drafting table, first residential commission in Maryland.'],
  ['2016', 'In-house construction arm launched', 'Brought site execution under the same roof after one too many handoff failures with external contractors.'],
  ['2019', 'Interior finishing studio added', 'A dedicated finishes and joinery team, so furniture and fit-out stop being an afterthought.'],
  ['2022', 'Expanded to Abuja and Port Harcourt', 'Opened satellite site offices to serve commercial clients outside Lagos.'],
  ['2025', '180th project handed over', 'Crossed 45,000 sq. m. of delivered space across residential, hospitality and commercial work.'],
];

const TEAM = [
  ['Adaeze Okonkwo', 'Principal Architect'],
  ['Tunde Balogun', 'Head of Construction'],
  ['Ifeoma Chukwu', 'Head of Interiors'],
  ['Segun Adeyemi', 'Projects Director'],
];

const CREDS = [
  'ARCON Registered Architects',
  'COREN Certified Engineers',
  'Lagos State Physical Planning Permit Partner',
  'NIQS Affiliated Quantity Surveyors',
  'Full Site Liability Insurance',
];

export default function About() {
  return (
    <section id="page-about">
      <section className="relative pt-[56px] pb-[clamp(56px,8vw,108px)]">
        <div className={WRAP}>
          <div className={EYEBROW}>About the studio</div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] mt-4 max-w-[16ch]">
            Built by people who've stood on the scaffolding.
          </h1>
          <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-14 items-start mt-11">
            <p className="text-[1.05rem] text-ink-soft">
              Ekvinn Resources started in 2013 out of a one-room office in Ikeja with a single drafting table and a
              conviction: that architects, finishers and builders shouldn't be three separate phone calls. Thirteen
              years on, we're a 34-person studio working across Lagos, Abuja and Port Harcourt, still run on that
              same principle — one team, one set of drawings, one point of accountability from foundation to
              furniture.
            </p>
            <p className="text-[1.05rem] text-ink-soft">
              We're small enough that the partner who signs your drawings is the same one who walks your site on
              completion day. That's deliberate. Every project on our books gets a named lead who stays with it
              from the first sketch to the final snag list.
            </p>
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>What we hold to</div>
            <h2 className={BLOCK_HEAD_H2}>Four things we don't compromise on.</h2>
          </div>
          <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-px bg-line-strong border border-line-strong">
            {VALUES.map(([title, copy]) => (
              <div className="bg-bg p-[26px]" key={title}>
                <h4 className="text-[1.1rem] mb-2 font-bold">{title}</h4>
                <p className="text-ink-soft text-[0.92rem]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>Timeline</div>
            <h2 className={BLOCK_HEAD_H2}>Thirteen years, briefly.</h2>
          </div>
          <div className="relative pl-[26px] border-l-[1.5px] border-dashed border-line-strong flex flex-col gap-[34px]">
            {TIMELINE.map(([yr, title, copy]) => (
              <div
                className="relative before:content-[''] before:absolute before:-left-[31px] before:top-0.5
                  before:w-[9px] before:h-[9px] before:rounded-full before:bg-orange before:border-2 before:border-bg
                  before:outline before:outline-[1.5px] before:outline-orange"
                key={yr}
              >
                <div className="font-mono text-[0.78rem] font-bold text-orange tracking-[0.06em]">{yr}</div>
                <h4 className="mt-1 text-[1.1rem] font-bold">{title}</h4>
                <p className="text-ink-soft text-[0.92rem] mt-1 max-w-[52ch]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>Leadership</div>
            <h2 className={BLOCK_HEAD_H2}>The people signing your drawings.</h2>
          </div>
          <div className="grid grid-cols-4 max-[920px]:grid-cols-2 gap-[22px]">
            {TEAM.map(([name, role]) => (
              <div className="border border-line-strong p-[18px] text-left" key={name}>
                <div className="blueprint-grid aspect-square mb-3.5 relative overflow-hidden bg-surface" />
                <h5 className="text-base font-bold">{name}</h5>
                <span className="font-mono text-[0.68rem] text-steel tracking-[0.04em] uppercase">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={BLOCK_BORDER}>
        <div className={WRAP}>
          <div className={BLOCK_HEAD}>
            <div className={EYEBROW}>Credentials</div>
            <h2 className={BLOCK_HEAD_H2}>Registered, insured, inspected.</h2>
          </div>
          <div className="flex flex-wrap gap-3.5">
            {CREDS.map((c) => (
              <span
                className="border border-line-strong px-4 py-2.5 font-mono text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-ink-soft"
                key={c}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
