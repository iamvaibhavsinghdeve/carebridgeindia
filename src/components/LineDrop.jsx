import { useEffect, useRef } from 'react';

/* Splits a heading into words, groups them by rendered line and lets each
   line drop in from above; `reverse` starts with the last line. */
export default function LineDrop({
  segs, as: Tag = 'h1', className = '', reverse = false, step = 105, delay = 0, on = 'view', ...rest
}) {
  const ref = useRef(null);
  const words = [];
  segs.forEach((s) => s.t.split(/\s+/).filter(Boolean).forEach((w) => words.push({ w, a: !!s.a })));

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = [...el.querySelectorAll('.ld__w')];
    let raf = 0;
    const layout = () => {
      let line = -1;
      let top = null;
      nodes.forEach((n) => {
        const t = Math.round(n.getBoundingClientRect().top);
        if (top === null || Math.abs(t - top) > 8) { top = t; line += 1; }
        n.dataset.line = String(line);
      });
      const total = line + 1;
      nodes.forEach((n) => {
        const i = Number(n.dataset.line);
        n.style.setProperty('--ld', `${delay + (reverse ? total - 1 - i : i) * step}ms`);
      });
    };
    layout();
    if (document.fonts) document.fonts.ready.then(layout).catch(() => {});
    let io = null;
    if (on === 'view' && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((es, o) => {
        es.forEach((e) => { if (e.isIntersecting) { el.classList.add('ld--go'); o.disconnect(); } });
      }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
      io.observe(el);
    } else {
      el.classList.add('ld--go');
    }
    const resize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); };
    window.addEventListener('resize', resize);
    return () => { if (io) io.disconnect(); window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, [reverse, step, delay, on, segs]);

  const kids = [];
  words.forEach((w, i) => {
    if (i) kids.push(' ');
    kids.push(
      <span className={w.a ? 'ld__w ld__w--a' : 'ld__w'} key={i}>{w.w}</span>
    );
  });

  return <Tag ref={ref} className={'ld ' + className} {...rest}>{kids}</Tag>;
}
