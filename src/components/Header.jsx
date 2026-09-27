import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

const navLinkBase =
  "font-mono text-[0.78rem] font-semibold tracking-[0.06em] uppercase no-underline px-4 py-2.5 relative cursor-pointer bg-transparent border-none " +
  "after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1.5 after:h-0.5 after:bg-orange " +
  "after:origin-left after:transition-transform after:duration-200 after:[transition-timing-function:ease]";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <header
      className="sticky top-0 z-[80] h-[var(--nav-h)] border-b-[1.5px] border-line-strong flex items-center
        before:content-[''] before:absolute before:inset-0 before:z-[-1]
        before:bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] before:backdrop-blur-[8px]"
    >
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)] flex items-center justify-between gap-6">
        <button className="flex items-center no-underline cursor-pointer bg-transparent border-none p-0" onClick={() => go('/')} aria-label="Ekvinn Resources — home">
          <img className="h-[34px] w-auto" src="/logo-full.png" alt="Ekvinn Resources Limited" />
        </button>

        <nav className="flex items-center gap-0.5 max-[920px]:hidden" id="primary-nav">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-ink after:scale-x-100' : 'text-ink-soft after:scale-x-0 hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            className="font-mono text-[0.74rem] font-bold tracking-[0.06em] uppercase bg-ink text-bg px-[18px] py-[11px]
              no-underline border-none cursor-pointer flex items-center gap-2 hover:bg-orange hover:text-white"
            onClick={() => go('/contact')}
          >
            Start a project →
          </button>
          <button
            className="hidden max-[920px]:flex bg-transparent border-[1.5px] border-line-strong w-[42px] h-[42px]
              cursor-pointer items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="block w-[18px] h-0.5 bg-ink relative
                before:content-[''] before:block before:w-[18px] before:h-0.5 before:bg-ink before:absolute before:-top-1.5
                after:content-[''] after:block after:w-[18px] after:h-0.5 after:bg-ink after:absolute after:top-1.5"
            />
          </button>
        </div>
      </div>

      <nav
        className={`hidden ${open ? 'max-[920px]:flex' : ''} fixed inset-x-0 bottom-0 top-[var(--nav-h)] bg-bg
          flex-col p-5 z-[90] gap-1 overflow-y-auto`}
      >
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `text-[1.1rem] py-4 px-1 border-b border-line no-underline text-left cursor-pointer bg-transparent ${
                isActive ? 'text-orange' : 'text-ink-soft'
              }`
            }
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
