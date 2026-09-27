import React, { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const UNIT_COUNT = 90;

function buildUnits() {
  const units = [];
  for (let i = 0; i < UNIT_COUNT; i++) {
    const n = i + 1;
    const isFoot = n % 12 === 0;
    const isMajor = n % 4 === 0;
    const isMid = n % 2 === 0;
    let cls = 'tape-unit';
    if (isFoot) cls += ' major foot';
    else if (isMajor) cls += ' major';
    else if (isMid) cls += ' mid';
    let label = '';
    if (isFoot) label = `${n / 12}'`;
    else if (isMajor) label = String(n);
    units.push({ key: n, cls, label });
  }
  return units;
}

export default function TapeWidget() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const trackRef = useRef(null);
  const caseRef = useRef(null);
  const units = useMemo(buildUnits, []);

  useEffect(() => {
    const track = trackRef.current;
    const caseEl = caseRef.current;
    if (!track || !caseEl) return;

    let ticking = false;

    function syncCaseHeight() {
      const h = caseEl.getBoundingClientRect().height;
      if (h > 0) document.documentElement.style.setProperty('--tape-case-h', `${h}px`);
    }

    function update() {
      ticking = false;
      if (!isHome) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      track.style.setProperty('--progress', progress.toFixed(4));
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    function onResize() {
      syncCaseHeight();
      update();
    }

    syncCaseHeight();
    track.style.setProperty('--progress', 0);
    requestAnimationFrame(update);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [isHome, location.key]);

  return (
    <>
      <div
        className={`tape-track ${isHome ? 'flex' : 'hidden'}`}
        ref={trackRef}
        aria-hidden="true"
      >
        <div className="tape-hook" />
        <div className="tape-wrap">
          <div className="tape-ticks">
            <div className="tape-blade-edge l" />
            <div className="tape-blade-edge r" />
            {units.map((u) => (
              <div key={u.key} className={u.cls}>
                {u.label !== '' && <span className="tick-label">{u.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`tape-case ${isHome ? 'flex' : 'hidden'}`}
        ref={caseRef}
        aria-hidden="true"
      >
        <div className="slot" />
        <div className="grip" />
        <img className="mark-badge" src="/logo-mark.png" alt="" />
      </div>
    </>
  );
}
