import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../config.js';

const WRAP = 'max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]';
const EYEBROW =
  "font-mono text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-steel flex items-center gap-[0.6em] " +
  "before:content-[''] before:w-[22px] before:h-px before:bg-line-strong before:inline-block";
const BTN_SOLID =
  'font-mono text-[0.8rem] font-bold tracking-[0.06em] uppercase px-6 py-[15px] no-underline cursor-pointer ' +
  'inline-flex items-center gap-2.5 border-[1.5px] border-line-strong bg-ink text-bg hover:bg-orange hover:border-orange hover:text-white';
const FIELD_INPUT = 'border border-line-strong bg-surface px-3.5 py-[13px] text-[0.95rem] text-ink focus:border-orange';
const ROW = 'flex justify-between gap-4 py-3.5 border-b border-dashed border-line-strong text-[0.95rem]';

const EMPTY = { name: '', phone: '', email: '', type: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New project inquiry — ${form.type || 'General'} — ${form.name}`;
    const body =
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Project type: ${form.type}\n\n` +
      `Brief:\n${form.message}`;

    // Static, backend-free delivery: opens the visitor's own email app with
    // the brief pre-filled and addressed to CONTACT_EMAIL. For a silent,
    // one-click server-side send instead, wire this up to a form service
    // (e.g. Formspree or EmailJS) using your own account credentials.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <section id="page-contact">
      <section className="relative pt-[56px] pb-[clamp(56px,8vw,108px)]">
        <div className={WRAP}>
          <div className={EYEBROW}>Contact</div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] mt-4 max-w-[16ch]">
            Tell us about the site.
          </h1>
          <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-14 items-start mt-11">
            <div>
              <div>
                <div className={ROW}>
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-steel">Studio</span>
                  <span>No 3 cherubim road, Port Harcourt, Rivers State</span>
                </div>
                <div className={ROW}>
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-steel">Phone</span>
                  <span>+234 809 123 4567</span>
                </div>
                <div className={ROW}>
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-steel">Email</span>
                  <span>{CONTACT_EMAIL}</span>
                </div>
                <div className={ROW}>
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-steel">Hours</span>
                  <span>Mon–Fri 8:00–18:00, Sat 9:00–14:00</span>
                </div>
              </div>
              <div className="blueprint-grid border border-line-strong aspect-[4/3] mt-7 relative overflow-hidden bg-surface">
                <svg viewBox="0 0 300 225" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M20 190 L140 40 L280 190" stroke="var(--color-line-strong)" strokeWidth="1.4" fill="none" />
                  <circle cx="140" cy="120" r="6" fill="var(--color-orange)" />
                  <line x1="140" y1="120" x2="140" y2="60" stroke="var(--color-orange)" strokeWidth="1.4" />
                  <text x="146" y="115" fontFamily="Raleway, sans-serif" fontSize="9" fill="var(--color-ink-soft)">EKVINN STUDIO</text>
                  <text x="146" y="128" fontFamily="Raleway, sans-serif" fontSize="8" fill="var(--color-steel)">Port Harcourt, Nigeria</text>
                </svg>
              </div>
            </div>

            <div>
              {!submitted ? (
                <form className="border border-line-strong p-[clamp(24px,4vw,36px)]" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-4">
                    <div className="flex flex-col gap-2 mb-5">
                      <label className="font-mono text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-steel" htmlFor="f-name">Full name</label>
                      <input className={FIELD_INPUT} id="f-name" required placeholder="Your name" value={form.name} onChange={update('name')} />
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                      <label className="font-mono text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-steel" htmlFor="f-phone">Phone</label>
                      <input className={FIELD_INPUT} id="f-phone" required placeholder="+234" value={form.phone} onChange={update('phone')} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    <label className="font-mono text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-steel" htmlFor="f-email">Email</label>
                    <input className={FIELD_INPUT} id="f-email" type="email" required placeholder="you@email.com" value={form.email} onChange={update('email')} />
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    <label className="font-mono text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-steel" htmlFor="f-type">Project type</label>
                    <select className={FIELD_INPUT} id="f-type" required value={form.type} onChange={update('type')}>
                      <option value="">Select one</option>
                      <option>Architectural design</option>
                      <option>Interior finishing</option>
                      <option>Full construction</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    <label className="font-mono text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-steel" htmlFor="f-msg">Project brief</label>
                    <textarea
                      className={FIELD_INPUT}
                      id="f-msg"
                      rows="4"
                      required
                      placeholder="Location, size, timeline, budget range..."
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>
                  <button type="submit" className={`${BTN_SOLID} w-full justify-center`}>
                    Submit brief →
                  </button>
                  <p className="text-[0.78rem] text-steel mt-3.5">
                    Submitting opens your email app with this brief addressed to {CONTACT_EMAIL}.
                  </p>
                </form>
              ) : (
                <div className="border-[2.5px] border-tape-red text-tape-red p-[34px] text-center -rotate-2">
                  <h3 className="text-[1.7rem] tracking-[0.06em]">BRIEF RECEIVED</h3>
                  <p className="mt-2.5 text-ink-soft font-mono text-[0.85rem]">
                    Thanks — we've prepared your {form.type ? form.type.toLowerCase() : 'project'} brief for{' '}
                    {CONTACT_EMAIL}. Send the email from the app that just opened and a project lead will call
                    within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
