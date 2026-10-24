import { useEffect, useRef } from 'react';
import { SITE } from '../data/content.js';
import { L } from './Ui.jsx';

/* Horizontal hospital card rail with prev/next arrows + mouse drag. */
export default function HospRail() {
  const track = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const step = () => {
      const li = t.children[0];
      if (!li) return 1;
      const gap = parseFloat(getComputedStyle(t).columnGap || '16') || 16;
      return li.getBoundingClientRect().width + gap;
    };
    const page = () => Math.max(1, Math.floor(t.clientWidth / step())) * step();
    const sync = () => {
      const max = t.scrollWidth - t.clientWidth - 2;
      if (prev.current) prev.current.disabled = t.scrollLeft <= 2;
      if (next.current) next.current.disabled = t.scrollLeft >= max;
    };
    const onPrev = () => t.scrollBy({ left: -page(), behavior: reduced ? 'auto' : 'smooth' });
    const onNext = () => t.scrollBy({ left: page(), behavior: reduced ? 'auto' : 'smooth' });
    const onScroll = () => { clearTimeout(t._t); t._t = setTimeout(sync, 90); };
    const onResize = () => sync();
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); t.scrollBy({ left: page(), behavior: 'smooth' }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); t.scrollBy({ left: -page(), behavior: 'smooth' }); }
    };
    let down = false, sx = 0, sl = 0, moved = false;
    const onDown = (e) => {
      if (e.pointerType === 'touch') return;
      down = true; moved = false; sx = e.clientX; sl = t.scrollLeft;
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 4) moved = true;
      t.scrollLeft = sl - dx;
    };
    const onUp = () => { if (down) { down = false; sync(); } };
    const onClickCapture = (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } };

    prev.current?.addEventListener('click', onPrev);
    next.current?.addEventListener('click', onNext);
    t.addEventListener('scroll', onScroll, { passive: true });
    t.addEventListener('keydown', onKey);
    t.addEventListener('pointerdown', onDown);
    t.addEventListener('click', onClickCapture, true);
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    sync();
    return () => {
      prev.current?.removeEventListener('click', onPrev);
      next.current?.removeEventListener('click', onNext);
      t.removeEventListener('scroll', onScroll);
      t.removeEventListener('keydown', onKey);
      t.removeEventListener('pointerdown', onDown);
      t.removeEventListener('click', onClickCapture, true);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="hosp__head">
          <div>
            <h2>Our partner hospitals</h2>
            <p>Top accredited hospitals across India, with international patient desks we work with every week.</p>
          </div>
          <div className="rail__nav">
            <button className="railbtn railbtn--light" ref={prev} type="button" aria-label="Previous hospitals">←</button>
            <button className="railbtn railbtn--light" ref={next} type="button" aria-label="Next hospitals">→</button>
          </div>
        </div>
      </div>
      <div className="wrap wrap--wide">
        <ul className="rail rail--hosp" ref={track} tabIndex="0" aria-label="Partner hospitals">
          {SITE.hospitals.map((h) => (
            <li key={h.slug}>
              <L className="hcard" href={'hospitals/' + h.slug + '.html'}>
                <b>{h.name}</b>
                <div className="hcard__city">
                  <svg className="ic ic--xs" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  {h.city}, India
                </div>
                <div className="hcard__chips">
                  <span className="hchip">{h.acc} accredited</span>
                  <span className="hchip hchip--line">Multi-speciality</span>
                </div>
                <span className="pgcard__more">View hospital</span>
              </L>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
