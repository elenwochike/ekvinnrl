import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config.js';

function cellClass(i) {
  return [
    'px-[22px] py-[26px]',
    i === 0 ? 'border-l-0' : 'border-l border-line-strong',
    i === 2 ? 'max-[920px]:border-l-0' : '',
    'max-[600px]:border-l-0 max-[600px]:border-t max-[600px]:border-line-strong',
    i === 0 ? 'max-[600px]:border-t-0' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

const linkClass = 'block no-underline text-ink-soft text-[0.92rem] py-[5px] hover:text-orange';
const headingClass = 'font-mono text-[0.7rem] font-bold tracking-[0.12em] uppercase text-steel mb-3.5';

export default function Footer() {
  return (
    <footer className="border-t-2 border-line-strong bg-surface">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] max-[920px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div className={cellClass(0)}>
            <img className="h-[26px] w-auto mb-3.5 opacity-[0.92]" src="/logo-mark.png" alt="Ekvinn Resources mark" />
            <p className="text-ink-soft text-[0.92rem]">
              Architectural design, interior finishing and construction, based in Port Harcourt, Nigeria since 2013.
            </p>
          </div>
          <div className={cellClass(1)}>
            <h5 className={headingClass}>Studio</h5>
            <Link className={linkClass} to="/about">About</Link>
            <Link className={linkClass} to="/services">Services</Link>
            <Link className={linkClass} to="/portfolio">Portfolio</Link>
          </div>
          <div className={cellClass(2)}>
            <h5 className={headingClass}>Get in touch</h5>
            <Link className={linkClass} to="/contact">Contact</Link>
            <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a className={linkClass} href="tel:+2348091234567">+234 809 123 4567</a>
          </div>
          <div className={cellClass(3)}>
            <h5 className={headingClass}>Studio hours</h5>
            <p className="text-ink-soft text-[0.92rem]">
              Mon–Fri 8:00–18:00
              <br />
              Sat 9:00–14:00
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line-strong flex justify-between items-center py-4 px-[clamp(20px,5vw,56px)]
        font-mono text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-steel flex-wrap gap-2.5">
        <span>© {new Date().getFullYear()} Ekvinn Resources Limited · Sheet EK–001</span>
        <span>Port Harcourt · Abuja · Port Harcourt</span>
      </div>
    </footer>
  );
}
