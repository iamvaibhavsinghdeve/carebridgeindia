import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { SITE } from '../data/content.js';
import { route, img } from '../lib/util.js';
import { ModalCtx } from '../lib/modal.js';
import { L } from './Ui.jsx';
import ConsultForm from './ConsultForm.jsx';

const REVEAL_SEL = [
  '.hero__copy', '.hero__visual', '.pcard__grid', '.services__in', '.why__grid',
  '.statrow', '.treat__grid li', '.india__photo', '.india__copy', '.stories__grid li',
  '.plan', '.cta__in', '.sechead', '.tl__head', '.tl__row', '.phead', '.pbody',
  '.pgcards', '.specrow', '.crumbs', '.h3jour', '.h4care'
].join(', ');

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { mega: 0 },
  { mega: 1 },
  { label: 'Patient Stories', to: '/stories' },
  { mega: 2 },
  { label: 'Contact', to: '/contact' }
];

function runCount(el) {
  const to = parseFloat(el.dataset.to) || 0;
  const suf = el.dataset.suffix || '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = to.toLocaleString() + suf;
    return;
  }
  let start = null;
  const dur = 1400;
  const step = (ts) => {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString() + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Layout() {
  const [mega, setMega] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const lastFocus = useRef(null);
  const loc = useLocation();
  const path = loc.pathname;

  const openModal = (e) => {
    if (e) e.preventDefault();
    lastFocus.current = document.activeElement;
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  /* route change: close overlays, back to top */
  useEffect(() => {
    setMega(-1);
    setNavOpen(false);
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }, [path]);

  /* deep links: ?mega=0..2 opens a menu, ?modal=1 opens the form */
  useEffect(() => {
    const q = new URLSearchParams(loc.search);
    if (q.has('mega')) setMega(parseInt(q.get('mega'), 10) || 0);
    if (q.has('modal')) setModalOpen(true);
  }, [loc.search]);

  /* sticky header */
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  /* outside click + escape */
  useEffect(() => {
    const click = (e) => { if (!e.target.closest('.hdr')) setMega(-1); };
    const key = (e) => {
      if (e.key !== 'Escape') return;
      setMega(-1);
      setNavOpen(false);
      setModalOpen(false);
      document.body.style.overflow = '';
    };
    document.addEventListener('click', click);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('keydown', key);
    };
  }, []);

  /* smooth in-page anchors under the sticky header */
  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      const hdr = document.querySelector('.hdr');
      const top = t.getBoundingClientRect().top + window.scrollY - ((hdr ? hdr.offsetHeight : 70) + 14);
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);

  /* reveal-on-scroll + animated counters, re-armed per route */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = [...document.querySelectorAll(REVEAL_SEL)];
    els.forEach((el) => el.classList.add('reveal'));
    const counts = [...document.querySelectorAll('.count')];
    if (!('IntersectionObserver' in window) || reduced) {
      els.forEach((el) => el.classList.add('in'));
      counts.forEach(runCount);
      return;
    }
    const io = new IntersectionObserver((es, o) => {
      es.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    const co = new IntersectionObserver((es, o) => {
      es.forEach((en) => {
        if (en.isIntersecting) { runCount(en.target); o.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
    counts.forEach((el) => co.observe(el));
    return () => { io.disconnect(); co.disconnect(); };
  }, [path]);

  /* modal open: lock scroll + focus first field */
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      const f = document.querySelector('.modal input, .modal select, .modal textarea, .modal button');
      if (f) f.focus();
    } else {
      document.body.style.overflow = '';
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    }
  }, [modalOpen]);

  const isActive = (href) => {
    const r = route(href);
    return path === r || path.startsWith(r + '/');
  };

  const m = mega > -1 ? SITE.menus[mega] : null;

  return (
    <ModalCtx.Provider value={openModal}>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className={'hdr' + (stuck ? ' is-stuck' : '')} onMouseLeave={() => { if (window.innerWidth > 900) setMega(-1); }}>
        <div className="hdr__in">
          <Link className="brand2" to="/" aria-label="CareBridge home">
            <img src="/favicon.png" alt="CareBridge India" />
          </Link>
          <nav className={'nav' + (navOpen ? ' is-open' : '')} aria-label="Main">
            <ul className="nav__list">
              {NAV.map((n) => {
                if (n.mega !== undefined) {
                  const menu = SITE.menus[n.mega];
                  return (
                    <li
                      key={menu.label}
                      className={'nav__item' + (mega === n.mega ? ' is-open' : '') + (isActive(menu.href) ? ' is-active' : '')}
                      onMouseEnter={() => { if (window.innerWidth > 900) setMega(n.mega); }}
                    >
                      <button
                        className="nav__link"
                        type="button"
                        aria-expanded={mega === n.mega}
                        onClick={(e) => { e.stopPropagation(); setMega(mega === n.mega ? -1 : n.mega); }}
                      >
                        {menu.label}
                        <svg className="caret" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={n.to} className={'nav__item' + (path === n.to ? ' is-active' : '')}>
                    <Link className="nav__link" to={n.to}>{n.label}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav__side">
              <button className="btn btn--solid btn--sm" type="button" onClick={openModal}>Get free consultation</button>
            </div>
            <button
              className="burger"
              type="button"
              aria-expanded={navOpen}
              aria-label="Open menu"
              onClick={() => {
                const o = !navOpen;
                setNavOpen(o);
                document.body.style.overflow = o ? 'hidden' : '';
              }}
            >
              <span></span><span></span>
            </button>
          </nav>
        </div>
        <div className="mega" hidden={mega === -1}>
          {m && (
            <div className="mega__in">
              <Link className="mega__all" to={route(m.href)}>View all {m.label.toLowerCase()}</Link>
              {m.groups.map((g) => (
                <div className="mega__group" key={g.title}>
                  <h4>{g.title}</h4>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link className="mega__link" to={route(it.href)}><b>{it.name}</b><small>{it.desc}</small></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {m.promo && (
                <Link className="mega__promo" to={route(m.promo.href)}>
                  <img src={img(m.promo.img)} alt="" loading="lazy" />
                  <div><b>{m.promo.title}</b><span>{m.promo.link}</span></div>
                </Link>
              )}
            </div>
          )}
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <section className="cta">
        <div className="wrap cta__in">
          <span className="cta__ic">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3L3 10.5l6.2 2.3L11.5 19Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9.2 12.8L21 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </span>
          <div>
            <h2>Ready to take the first step towards better health?</h2>
            <p>Let our expert team guide you with a free consultation and personalised support.</p>
          </div>
          <div className="cta__btns">
            <button className="btn btn--teal" type="button" onClick={openModal}>Get Free Consultation</button>
          </div>
        </div>
      </section>

      <footer className="ftr">
        <div className="wrap ftr__grid">
          <div className="ftr__brand">
            <Link className="logo" to="/" aria-label="CareBridge home">
              <img className="logo__img" src="/favicon.png" alt="" />
              <span className="logo__word">CareBridge India</span>
            </Link>
            <p className="ftr__desc">Your trusted partner for medical travel from Bangladesh to India. With you, every step of the way.</p>
            <div className="ftr__social">
              <a href="#" aria-label="Facebook"><svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z" fill="currentColor" /></svg></a>
              <a href="#" aria-label="Instagram"><svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.6" cy="7.4" r="1.2" fill="currentColor" /></svg></a>
              <a href="#" aria-label="YouTube"><svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" /></svg></a>
            </div>
            <p className="ftr__status">Coordinators online 24/7</p>
          </div>
          <div className="ftr__cols">
            {SITE.footer.map((c) => (
              <div key={c.title}>
                <h4>{c.title}</h4>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}><L href={l.href}>{l.label}</L></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="wrap ftr__bar">
          <p>© {new Date().getFullYear()} CareBridge India. All rights reserved.</p>
          <div className="ftr__barlinks">
            <L href="privacy-policy.html">Privacy</L>
            <L href="terms-of-service.html">Terms</L>
            <button className="textlink" type="button" onClick={openModal}>Start your journey</button>
          </div>
        </div>
        <div className="ftr__art" aria-hidden="true" />
      </footer>

      {modalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultTitle"
          onKeyDown={(e) => {
            if (e.key !== 'Tab') return;
            const f = [...document.querySelectorAll('.modal a[href], .modal button:not([disabled]), .modal input, .modal select, .modal textarea')]
              .filter((el) => el.offsetParent !== null);
            if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          }}
        >
          <div className="modal__back" onClick={closeModal}></div>
          <div className="modal__panel">
            <button className="modal__x" type="button" onClick={closeModal} aria-label="Close">×</button>
            <h2 id="consultTitle">Free consultation</h2>
            <p className="modal__sub">Tell us about the patient. A coordinator will call you back within one working day.</p>
            <ConsultForm />
          </div>
        </div>
      )}
    </ModalCtx.Provider>
  );
}
