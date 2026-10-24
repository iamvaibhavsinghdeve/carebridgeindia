import { Link } from 'react-router-dom';
import { SITE } from '../data/content.js';
import { route } from '../lib/util.js';
import { useModal } from '../lib/modal.js';
import Icon from './Icon.jsx';

/* internal link: takes a config-style href ("treatments/x.html") */
export function L({ href, className, children, tabIndex }) {
  return <Link className={className} to={route(href)} tabIndex={tabIndex}>{children}</Link>;
}

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map(([label, href], i) =>
          i === items.length - 1
            ? <li key={label} aria-current="page">{label}</li>
            : <li key={label}><L href={href}>{label}</L></li>
        )}
      </ol>
    </nav>
  );
}

export function PageHead({ pill, title, lead, icon }) {
  return (
    <div className="phead">
      {pill && <span className="pill2">{pill}</span>}
      {icon && <span className="phead__ic"><Icon k={icon} /></span>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function CtaRow() {
  const open = useModal();
  return (
    <div className="pcta">
      <button className="btn btn--solid" type="button" onClick={open}>Get free consultation</button>
      <L className="btn btn--ghost" href="contact.html">Talk to a coordinator</L>
    </div>
  );
}

export function TickList({ items }) {
  return <ul className="ticklist">{items.map((b) => <li key={b}>{b}</li>)}</ul>;
}

export function ServicesRow() {
  return (
    <ul className="services__row">
      {SITE.services.map((s) => (
        <li key={s.name}><Icon k={s.icon} /><span>{s.name}</span></li>
      ))}
    </ul>
  );
}

export function JourneyRail() {
  return (
    <ul className="tl__row" tabIndex="0" aria-label="The 12 step patient journey">
      {SITE.steps.map(([label, ic], i) => (
        <li key={label}>
          <span className="tl__node"><Icon k={ic} cls="ic--sm" /></span>
          <b>{i + 1}</b>
          <span className="tl__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export function StatRow() {
  return (
    <ul className="statrow">
      {SITE.stats.map((s) => (
        <li key={s.label}>
          <span className="count" data-to={s.to} data-suffix={s.suffix}>0</span>
          <p>{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

export function StoriesGrid() {
  return (
    <>
      <p className="testimonials-note">{SITE.testimonialNotice}</p>
      <ul className="stories__grid">
        {SITE.testimonials.map((t) => (
          <li key={t.name}>
            <blockquote>{t.quote}</blockquote>
            <div className="stories__who">
              <span className="av" aria-hidden="true">{t.initials}</span>
              <div><b>{t.name}</b><small>{t.place}</small></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PlansGrid() {
  const open = useModal();
  return (
    <div className="plans__grid">
      <div className="card plan">
        <h3>Free medical opinion</h3>
        <p className="plan__price">৳0 <small>always free</small></p>
        <ul>
          <li>Doctor-reviewed opinion on your reports</li>
          <li>Shortlist of suitable hospitals</li>
          <li>Written cost estimate before you decide</li>
        </ul>
        <button className="btn btn--ghost btn--wide" type="button" onClick={open}>Start free</button>
      </div>
      <div className="card plan plan--teal">
        <span className="plan__tag">Most chosen</span>
        <h3>Full journey care</h3>
        <p className="plan__price">Quoted once <small>up front</small></p>
        <ul>
          <li>Visa filing, flights and accommodation</li>
          <li>Airport pickup and Bangla coordinator</li>
          <li>In-hospital support and billing checks</li>
          <li>Follow-up and medicine supply after return</li>
        </ul>
        <button className="btn btn--white btn--wide" type="button" onClick={open}>Plan my journey</button>
      </div>
    </div>
  );
}

export function IndiaSection() {
  return (
    <section className="india">
      <div className="wrap india__grid">
        <div className="india__photo">
          <img src="/img/photo-surgery.png" alt="Surgical team in an operating theatre" loading="lazy" />
        </div>
        <div className="india__copy">
          <h2>World-class care, two hours from Dhaka</h2>
          <p className="lead">A short flight puts you in front of surgeons who handle thousands of cases a year, at a fraction of the cost of Singapore or Bangkok.</p>
          <ul className="india__list">
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 16l20-9-6 9 6 4H9l-7-4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
              <div><strong>Short travel</strong><p>Direct Dhaka to Delhi, Kolkata and Chennai flights, daily.</p></div>
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>Accredited hospitals</strong><p>JCI and NABH certified facilities with international patient desks.</p></div>
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14H7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M10 12h6M10 16h6" stroke="currentColor" strokeLinecap="round" /></svg>
              <div><strong>Clear pricing</strong><p>Written estimates before you fly. No surprises at discharge.</p></div>
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <div><strong>Faster scheduling</strong><p>Appointments confirmed in days, not months.</p></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PcardSection() {
  return (
    <section className="pcard">
      <div className="wrap pcard__grid">
        <div className="pcard__photo">
          <img src="/img/photo-consult.png" alt="A doctor reviewing papers with a patient" loading="lazy" />
        </div>
        <div className="pcard__cards">
          <div className="card pcard__item">
            <span className="pcard__ic"><svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            <div><h3>One Point of Contact</h3><p>From your first report to safe return home</p></div>
          </div>
          <div className="card pcard__item">
            <span className="pcard__ic"><svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M3 21h18M10 8h4M12 8v5M10 13h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></span>
            <div><h3>Expert Hospital Network</h3><p>Top accredited hospitals across India</p></div>
          </div>
          <div className="card pcard__item">
            <span className="pcard__ic"><svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v4H8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12h6M9 16h6" stroke="currentColor" strokeLinecap="round" /></svg></span>
            <div><h3>Complete Support</h3><p>Visa, travel, stay, treatment &amp; follow-up</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const HOSP_LOGOS = {
  'apollo-hospitals': 'apollo.svg',
  'fortis-hospitals': 'fortis.svg',
  'max-healthcare': 'max.svg',
  'medanta-the-medicity': 'medanta.svg',
  'artemis-hospital': 'artemis.svg',
  'blk-max-hospital': 'blkmax.svg',
  'amrita-hospital': 'amrita.svg',
  'manipal-hospitals': 'manipal.svg'
};

export function BrandMarquee() {
  return (
    <section className="bmarq">
      <div className="wrap">
        <p className="bmarq__eye">Trusted care. World-class treatment.</p>
        <h2 className="bmarq__t">Patients Travel With India&rsquo;s <span>Most Trusted Hospitals</span></h2>
      </div>
      <div className="bmarq__rail">
        <div className="bmarq__track">
          {[0, 1].map((copy) => (
            <div className="bmarq__half" key={copy} aria-hidden={copy === 1 || undefined}>
              {SITE.hospitals.map((h) => (
                <L
                  className="bmarq__item"
                  key={h.slug}
                  href={'hospitals/' + h.slug + '.html'}
                  tabIndex={copy === 1 ? -1 : 0}
                >
                  <img src={'/img/logos/' + HOSP_LOGOS[h.slug]} alt={copy === 0 ? h.name : ''} loading="lazy" />
                </L>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
