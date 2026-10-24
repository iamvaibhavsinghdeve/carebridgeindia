import { useEffect, useRef, useState } from 'react';
import { SITE } from '../data/content.js';
import { usePageMeta } from '../lib/util.js';
import { useModal } from '../lib/modal.js';
import { L, HOSP_LOGOS } from '../components/Ui.jsx';
import Icon from '../components/Icon.jsx';

const STEP_DESC = {
  'Enquiry': 'Tell us your needs on WhatsApp or the form. A coordinator replies the same day.',
  'Share Reports': 'Send scans of reports and prescriptions securely to your coordinator.',
  'Medical Review': 'Indian specialists review every report and give a written first opinion.',
  'Hospital Options': 'You receive two to three matched hospital options with doctor profiles.',
  'Decision & Plan': 'Pick your hospital; we write the cost estimate and treatment plan.',
  'Visa Support': 'Appointment and invitation letters for your medical visa application.',
  'Travel Arranged': 'Flights, airport pickup and a hotel near the hospital, all booked.',
  'Arrival in India': 'A Bangla-speaking coordinator receives you and opens your file.',
  'Treatment': 'Daily coordinator visits through consultations, surgery and recovery.',
  'Discharge': 'Final bills matched to your written estimate before you leave.',
  'Follow-up': 'Reports and review appointments planned for after you return home.',
  'Return Home': 'Safe return with medicines, records and a follow-up schedule.'
};

const CARE_STEPS = [
  ['Medical Opinion', 'Get expert medical opinions from top specialists.', 'steth', 'orange'],
  ['Visa Assistance', 'Hassle-free visa support for a smooth journey.', 'passport', 'blue'],
  ['Travel Planning', 'Complete travel planning tailored to your needs.', 'airplane', 'purple'],
  ['Airport Pickup', 'Comfortable and reliable airport pickup services.', 'caroutline', 'cyan'],
  ['Accommodation', 'Safe and comfortable stay arrangements.', 'carebed', 'amber'],
  ['Treatment Support', 'End-to-end support during your medical treatment.', 'careheart', 'pink'],
  ['Follow-up Care', 'Continuous care and assistance after treatment.', 'calendar', 'green'],
  ['Return & Beyond', 'Guidance and support even after you return home.', 'shield', 'blue']
];

const AVATARS = ['/img/avatar-1.png', '/img/avatar-2.png', '/img/avatar-3.png'];

const JOUR_PAGES = 5;

export default function Home() {
  usePageMeta(
    'CareBridge: Medical travel from Bangladesh to India',
    "End-to-end medical travel facilitation for Bangladeshi patients. Free medical opinions, written cost estimates, visa support and 24/7 care coordinators at India's top accredited hospitals."
  );
  const open = useModal();
  const partRef = useRef(null);
  const partHover = useRef(false);
  const jourRef = useRef(null);
  const [jourPage, setJourPage] = useState(0);
  const jourScroll = () => {
    const el = jourRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setJourPage(Math.round((max > 0 ? el.scrollLeft / max : 0) * (JOUR_PAGES - 1)));
  };
  const jourGo = (dir) => {
    const el = jourRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  };

  useEffect(() => {
    const id = setInterval(() => {
      const el = partRef.current;
      if (!el || partHover.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: 246, behavior: 'smooth' });
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="h2hero">
        <div className="wrap h2hero__grid">
          <div>
            <span className="h2eye">Medical travel to India</span>
            <h1>Your Trusted Partner for Treatment in <span>India</span></h1>
            <p className="h2hero__lead">High-quality medical care, world-class hospitals and personalised support, all in one place.</p>
            <div className="h2chips">
              <span className="h2chip"><Icon k="hospital" />World-Class Hospitals</span>
              <span className="h2chip"><Icon k="users" />Personalised Assistance</span>
              <span className="h2chip"><Icon k="shield" />End-to-End Support</span>
            </div>
            <div className="h2hero__cta">
              <button className="btn btn--solid" type="button" onClick={open}>Get Free Consultation</button>
              <L className="h2play" href="stories.html"><i><Icon k="play" /></i>Watch Our Story</L>
            </div>
          </div>
          <div className="h2hero__vis">
            <div className="h2hero__photo">
              <img src="/img/photo-consult.png" alt="An Indian doctor consulting a patient" />
            </div>
            <div className="h2stats">
              <div className="h2stat"><i><Icon k="users" /></i><div><b>3,000+</b><small>Patients Assisted</small></div></div>
              <div className="h2stat"><i><Icon k="shield" /></i><div><b>Trusted Hospitals</b><small>Across India</small></div></div>
              <div className="h2stat"><i><Icon k="headset" /></i><div><b>Dedicated Care</b><small>Coordinator</small></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- partner logos ---------- */}
      <section className="h2part">
        <div className="h2part__head">
          <p className="h2part__eye">
            <span className="h2part__line" aria-hidden="true" />
            Patients travel with
            <span className="h2part__line" aria-hidden="true" />
          </p>
          <h2 className="h2part__title">India&rsquo;s Most <span>Trusted Hospitals</span></h2>
        </div>
        <div
          className="h2part__row"
          onMouseEnter={() => { partHover.current = true; }}
          onMouseLeave={() => { partHover.current = false; }}
        >
          <button className="h2arrow" type="button" aria-label="Previous hospitals" onClick={() => { const el = partRef.current; el && el.scrollBy({ left: -492, behavior: 'smooth' }); }}>
            <svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="h2part__rail" ref={partRef}>
            <div className="h2part__track">
              {SITE.hospitals.map((h) => (
                <L className="h2plogo" key={h.slug} href={'hospitals/' + h.slug + '.html'}>
                  <img src={'/img/logos/' + HOSP_LOGOS[h.slug]} alt={h.name} loading="lazy" />
                </L>
              ))}
              {SITE.hospitals.map((h) => (
                <L className="h2plogo" key={'b-' + h.slug} href={'hospitals/' + h.slug + '.html'} tabIndex={-1}>
                  <img src={'/img/logos/' + HOSP_LOGOS[h.slug]} alt="" loading="lazy" />
                </L>
              ))}
            </div>
          </div>
          <button className="h2arrow" type="button" aria-label="Next hospitals" onClick={() => { const el = partRef.current; el && el.scrollBy({ left: 492, behavior: 'smooth' }); }}>
            <svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </section>

      <section className="h4care" aria-labelledby="care-heading">
        <div className="h4care__head">
          <span className="h4pill">Complete care. Zero guesswork.</span>
          <h2 id="care-heading">We Take Care of <span>Everything</span></h2>
          <p>From your first consultation to your safe return home.</p>
        </div>
        <ol className="h4care__grid">
          {CARE_STEPS.map(([label, desc, ic, tone], i) => (
            <li className={'h4care__item h4care__item--' + tone} key={label} style={{ '--i': i }}>
              {i < CARE_STEPS.length - 1 && (
                <svg className="h4care__link" viewBox="0 0 140 90" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 18C48 18 76 72 140 72" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="12 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              )}
              <div className="h4care__paper">
                <svg className="h4care__pin" viewBox="0 0 28 44" aria-hidden="true">
                  <path d="M14 29v11" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M7 8h14l-1.5 14c0 2.2 5.5 2.5 5.5 5.5S20 32 14 32 3 30.5 3 27.5s5.5-3.3 5.5-5.5Z" fill="currentColor" />
                  <path d="m18 9-1 13c0 4 5 4 5 7" fill="none" stroke="#000" strokeOpacity=".1" strokeWidth="2" />
                  <ellipse cx="14" cy="7" rx="10" ry="3" fill="currentColor" />
                  <path d="M7 6.5c3-1.2 9-1.2 13 0" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="h4care__body">
                  <div className="h4care__top">
                    <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <Icon k={ic} />
                  </div>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- specialties ---------- */}
      <section className="h2spec">
        <div className="wrap">
          <p className="h2spec__eye">Care for the cases that matter most</p>
          <h2>Our Treatment Specialties</h2>
          <div className="h2spec__grid">
            {SITE.treatments.map((t) => (
              <L className={'h2speccard' + (['heart', 'organ', 'spine'].includes(t.icon) ? ' h2speccard--cy' : '')} key={t.slug} href={'treatments/' + t.slug + '.html'}>
                <i><Icon k={t.icon} /></i>
                <div><b>{t.name}</b><p>{t.desc}</p></div>
                <span className="h2speccard__c">
                  <svg className="ic ic--xs" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </L>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- journey cards slider ---------- */}
      <section className="h3jour">
        <svg className="h3jour__deco2" viewBox="0 0 1440 620" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M1080 130c90-30 160-10 260-52" stroke="#B9CFE4" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
          <path d="M-10 110c80-26 130 6 200-16" stroke="#B9CFE4" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
          <path d="M1200 60c0 11-10 21-10 21s-10-10-10-21a10 10 0 1 1 20 0Z" fill="#A9C6E2" />
          <path d="M1392 170c0 11-10 21-10 21s-10-10-10-21a10 10 0 1 1 20 0Z" fill="#A9C6E2" />
          <path d="M338 80c0 9-8 17-8 17s-8-8-8-17a8 8 0 1 1 16 0Z" fill="#C4D8EC" />
          <g fill="#B9CFE4" transform="translate(1250 30) rotate(-12)">
            <rect x="0" y="10" width="88" height="11" rx="5.5" />
            <path d="M40 13 20 36h11l22-21Z" />
            <path d="M70 13 60 28h8l11-13Z" />
            <path d="M78 12 71-2h9l9 12Z" />
          </g>
        </svg>
        <div className="wrap h2c h3jour__head">
          <span className="h4pill"><i aria-hidden="true" />Your journey, simplified<i aria-hidden="true" /></span>
          <h2>A Journey Designed <span>Around You</span></h2>
          <p>A seamless 12-step process designed around your comfort and care.</p>
        </div>
        <div className="h3jour__row">
          <button className="h2arrow" type="button" aria-label="Previous steps" onClick={() => jourGo(-1)}>
            <svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="h3jour__rail" ref={jourRef} onScroll={jourScroll}>
            <div className="h3jour__track">
              {SITE.steps.map(([label, ic], i) => (
                i % 2 === 1 ? (
                  <div className="h3jcard h3jcard--nv" key={label}>
                    <span className="h3j__n h3j__n--red">{i + 1}</span>
                    <div className="h3j__ctop">
                      <i><Icon k={ic} /></i>
                      <b>{label}</b>
                    </div>
                    <div className="h3j__cbody"><small>{STEP_DESC[label]}</small></div>
                  </div>
                ) : (
                  <div className="h3jcard" key={label}>
                    <span className="h3j__n">{i + 1}</span>
                    <i><Icon k={ic} /></i>
                    <b>{label}</b>
                    <small>{STEP_DESC[label]}</small>
                  </div>
                )
              ))}
            </div>
          </div>
          <button className="h2arrow" type="button" aria-label="Next steps" onClick={() => jourGo(1)}>
            <svg className="ic ic--sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="h2dots">
          {Array.from({ length: JOUR_PAGES }, (_, i) => (
            <button key={i} type="button" aria-label={'Go to slide ' + (i + 1)} className={i === jourPage ? 'is-on' : ''} onClick={() => { const el = jourRef.current; if (el) el.scrollTo({ left: (el.scrollWidth - el.clientWidth) * (i / (JOUR_PAGES - 1)), behavior: 'smooth' }); }} />
          ))}
        </div>
      </section>

      {/* ---------- hospitals split ---------- */}
      <section className="h2hosp">
        <div className="wrap h2hosp__grid">
          <div className="h2hosp__photo">
            <img src="/img/hospital-building.png" alt="A modern partner hospital building in India" loading="lazy" />
          </div>
          <div>
            <span className="h2eye">World-class care</span>
            <h2>India&rsquo;s Leading Hospitals, Global Standards</h2>
            <p className="h2hosp__lead">Access to internationally accredited hospitals, experienced doctors and advanced technology, ensuring you receive the best possible care.</p>
            <div className="h2checks">
              <span className="h2check"><i><Icon k="check" /></i>JCI &amp; NABH Accredited Hospitals</span>
              <span className="h2check"><i><Icon k="check" /></i>Advanced Medical Technology</span>
              <span className="h2check"><i><Icon k="check" /></i>Renowned &amp; Experienced Doctors</span>
              <span className="h2check"><i><Icon k="check" /></i>High Success Rates</span>
            </div>
            <L className="btn btn--solid" href="hospitals.html">Explore Our Partner Hospitals</L>
          </div>
        </div>
      </section>

      {/* ---------- testimonials ---------- */}
      <section className="h2testi" aria-labelledby="testimonials-heading" aria-describedby="testimonials-note">
        <div className="h2testi__wrap">
          <h2 id="testimonials-heading">Trusted by Patients &amp; Families</h2>
          <div className="h2testi__grid">
            {SITE.testimonials.map((t, i) => (
              <figure className="h2tcard" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="h2tcard__ft">
                  <img src={AVATARS[i % AVATARS.length]} alt="" width="48" height="48" loading="lazy" />
                  <div><b>{t.name}</b><small>{t.place}</small></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="testimonials-note" id="testimonials-note">{SITE.testimonialNotice}</p>
        </div>
      </section>

      {/* ---------- dual cta ---------- */}
      <section className="h2dual">
        <div className="wrap h2dual__grid">
          <div className="h2dcard">
            <span className="h2dcard__ic"><Icon k="doc" /></span>
            <h3>Get a Free Consultation</h3>
            <p>Talk to our experts and get a personalized treatment plan for your needs.</p>
            <div className="h2dchecks">
              <span className="h2dcheck"><i><Icon k="check" /></i>No obligation</span>
              <span className="h2dcheck"><i><Icon k="check" /></i>Quick response</span>
              <span className="h2dcheck"><i><Icon k="check" /></i>Personalized guidance</span>
            </div>
            <button className="btn btn--solid" type="button" onClick={open}>Get Free Consultation</button>
          </div>
          <div className="h2dcard h2dcard--nv">
            <span className="h2dcard__ic"><Icon k="clipboard" /></span>
            <h3>Request a Treatment Plan</h3>
            <p>Share your medical details and receive a customized plan with estimated cost.</p>
            <div className="h2dchecks">
              <span className="h2dcheck"><i><Icon k="check" /></i>Detailed treatment plan</span>
              <span className="h2dcheck"><i><Icon k="check" /></i>Hospital options</span>
              <span className="h2dcheck"><i><Icon k="check" /></i>Cost estimate</span>
            </div>
            <button className="btn btn--white" type="button" onClick={open}>Request Plan</button>
          </div>
        </div>
      </section>
    </>
  );
}
