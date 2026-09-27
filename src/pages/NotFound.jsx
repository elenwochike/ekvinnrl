import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section id="page-not-found">
      <section className="relative pt-[56px] pb-[clamp(56px,8vw,108px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,56px)]">
          <div className="font-mono text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-steel flex items-center gap-[0.6em]
            before:content-[''] before:w-[22px] before:h-px before:bg-line-strong before:inline-block">
            404
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] mt-4 max-w-[16ch]">
            This page hasn't been drawn up.
          </h1>
          <p className="text-[1.05rem] text-ink-soft mt-6 max-w-[48ch]">
            The page you're looking for doesn't exist or may have moved. Double-check the link, or head back
            to the homepage.
          </p>
          <Link
            to="/"
            className="font-mono text-[0.8rem] font-bold tracking-[0.06em] uppercase px-6 py-[15px] no-underline
              cursor-pointer border-[1.5px] border-line-strong inline-block mt-8"
          >
            Back to home
          </Link>
        </div>
      </section>
    </section>
  );
}
