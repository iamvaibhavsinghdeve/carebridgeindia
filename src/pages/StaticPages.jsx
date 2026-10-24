import { Link } from 'react-router-dom';
import { SITE } from '../data/content.js';
import { usePageMeta } from '../lib/util.js';
import {
  Crumbs, PageHead, ServicesRow, JourneyRail, StatRow, StoriesGrid,
  PlansGrid, IndiaSection, PcardSection, TickList
} from '../components/Ui.jsx';

export function HowItWorks() {
  usePageMeta(
    'How it works: CareBridge',
    'The 12-step patient journey: from sharing reports to returning home, with one coordinator and written costs at every step.'
  );
  return (
    <>
      <div className="wrap wrap--narrow">
        <Crumbs items={[['Home', 'index.html'], ['How it works', 'how-it-works.html']]} />
        <PageHead pill="How it works" title="Twelve steps. One coordinator. Zero surprises." lead="From your first WhatsApp message to your flight home, the same Bangla-speaking coordinator owns your case end to end." />
      </div>
      <div className="wrap">
        <div className="card card--soft services__in">
          <h2 className="services__t">We Take Care of Everything</h2>
          <ServicesRow />
        </div>
      </div>
      <section className="tl">
        <div className="wrap">
          <div className="tl__head">
            <span className="pill2">Your journey, simplified</span>
            <h2>A Journey Designed Around You</h2>
            <p>A seamless 12-step process designed around your comfort and care.</p>
          </div>
        </div>
        <div className="wrap wrap--wide"><JourneyRail /></div>
      </section>
      <div className="wrap wrap--narrow">
        <div className="pbody">
          <h2>What it costs</h2>
          <p>The first medical opinion is free, always. If you decide to travel, our facilitation fee is quoted once, up front. Hospitals bill you directly at their own tariffs, and your written estimate is honoured at discharge.</p>
          <h2>Two ways to start</h2>
        </div>
        <PlansGrid />
      </div>
    </>
  );
}

export function WhyIndia() {
  usePageMeta(
    'Why India: CareBridge',
    'World-class accredited hospitals two hours from Dhaka, at a fraction of the cost of Singapore or Bangkok, with appointments in days.'
  );
  return (
    <>
      <div className="wrap wrap--narrow">
        <Crumbs items={[['Home', 'index.html'], ['Why India', 'why-india.html']]} />
        <PageHead pill="Why India" title="World-class care, two hours from Dhaka" lead="A short flight puts you in front of surgeons who handle thousands of cases a year, at a fraction of the cost of Singapore or Bangkok." />
      </div>
      <IndiaSection />
      <section className="why">
        <div className="wrap">
          <h2 className="h2c">Why families choose CareBridge</h2>
          <StatRow />
        </div>
      </section>
    </>
  );
}

export function About() {
  usePageMeta(
    'About CareBridge',
    'CareBridge is a medical travel facilitation team for Bangladeshi patients: one point of contact, an accredited hospital network and complete support.'
  );
  return (
    <>
      <div className="wrap wrap--narrow">
        <Crumbs items={[['Home', 'index.html'], ['About', 'about.html']]} />
        <PageHead pill="About us" title="A bridge between patients and the care they need" lead="CareBridge exists so that no family in Bangladesh has to navigate Indian healthcare alone or pay a rupee more than they were quoted." />
      </div>
      <PcardSection />
      <div className="wrap wrap--narrow">
        <a className="abt__call" href={SITE.phoneHref}>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
          <div>
            <small>Call our care coordinators 24/7</small>
            <b>{SITE.phoneDisplay}</b>
          </div>
        </a>
      </div>
      <div className="wrap wrap--narrow">
        <div className="pbody">
          <h2>Why we exist</h2>
          <p>Every year, thousands of Bangladeshi families travel to India for treatment that is faster, cheaper or simply unavailable at home. Most arrive with no plan: no appointment, no estimate, no one who speaks their language at the hospital.</p>
          <p>We built CareBridge to fix that. One coordinator, one written plan, one honest price, from the first report you WhatsApp us to the follow-up consultation after you return.</p>
          <h2>What we promise</h2>
          <TickList items={[
            'Transparent and ethical: hospitals bill you directly, we add no commission',
            'No hidden fees: our facilitation fee is quoted once, up front',
            'Patient first: we shortlist hospitals for your case, not for their margin',
            '24/7 expert support: a Bangla-speaking coordinator through your stay'
          ]} />
        </div>
      </div>
      <section className="stories">
        <div className="wrap">
          <h2 className="h2c">Families who went first</h2>
          <StoriesGrid />
        </div>
      </section>
    </>
  );
}

export function Stories() {
  usePageMeta(
    'Patient stories: CareBridge',
    'What families from Dhaka, Chattogram and Sylhet say about their treatment journey in India with CareBridge.'
  );
  return (
    <>
      <div className="wrap wrap--narrow">
        <Crumbs items={[['Home', 'index.html'], ['Patient stories', 'stories.html']]} />
        <PageHead pill="Patient stories" title="Families who went first" lead="Real journeys from Bangladeshi patients we have assisted, in their own words." />
      </div>
      <section className="stories">
        <div className="wrap"><StoriesGrid /></div>
      </section>
    </>
  );
}

const PRIVACY = [
  ['1. Who we are', 'CareBridge ("we", "us") is a medical travel facilitation service connecting patients from Bangladesh with accredited hospitals in India. We are a data controller for the personal information described in this policy.', []],
  ['2. What we collect', 'We collect only what we need to arrange your care:', [
    'Contact details: name, phone or WhatsApp number, email address',
    'Medical information you choose to share: reports, scans, diagnosis, age',
    'Journey details: travel dates, attendant information, accommodation needs',
    'Website usage data: pages visited, submitted forms, basic analytics'
  ]],
  ['3. How we use it', 'Your information is used to obtain medical opinions, prepare cost estimates, book appointments, support visa applications and coordinate your stay. Medical information is shared only with the hospitals and doctors reviewing your case, and only with your approval.', []],
  ['4. Who we share it with', 'We never sell your data. We share it only with: the hospital or specialist reviewing your case (with your approval), visa processing authorities where required by law, and service providers who run our website and communication tools under confidentiality obligations.', []],
  ['5. How long we keep it', 'Enquiry records are kept for 24 months after your last contact so we can support follow-up care. Medical reports are deleted on request at any time, and automatically 12 months after your treatment concludes unless you ask us to keep them for follow-up.', []],
  ['6. Your rights', 'You may request a copy of your data, correct it, or ask us to delete it at any time by emailing us or messaging on WhatsApp. We respond within 14 days.', []],
  ['7. Security', 'Reports are transferred over encrypted connections (WhatsApp or email TLS) and stored with access limited to the coordinator handling your case. No payment card data is stored on our systems.', []],
  ['8. Cookies and analytics', 'This website uses no advertising cookies. We may collect anonymous, aggregated usage statistics (pages viewed, form submissions) to improve the site.', []],
  ['9. Children', "Where the patient is a minor, we collect a parent or guardian's contact details and process the child's medical information only with guardian consent.", []],
  ['10. Changes and contact', 'If this policy changes, the new version will be posted on this page with an updated date. Questions: email or WhatsApp the coordinator team using the contact page.', []]
];

const TERMS = [
  ['1. What these terms cover', 'These terms govern your use of the CareBridge website and our medical travel facilitation services between Bangladesh and India. By submitting an enquiry or accepting a plan, you agree to these terms.', []],
  ['2. What we do', 'We facilitate: medical opinion collection, hospital shortlisting and appointments, written cost estimates, visa documentation support, travel and accommodation arrangement, in-hospital coordination and post-return follow-up support. We act as your coordinator and advocate throughout.', []],
  ['3. What we are not', 'We are not a hospital, clinic or medical provider. We do not diagnose, treat or give medical advice; all clinical decisions are made by licensed doctors at the treating hospital. We do not guarantee clinical outcomes.', []],
  ['4. Fees and payment', 'The first medical opinion is free. Facilitation fees for full journey care are quoted once, in writing, before you commit. Hospital bills are payable by you directly to the hospital at their own tariffs. Cost estimates are given in good faith on the clinical information available; if your clinical needs change during treatment, the hospital will explain and seek your approval for any variation before it is incurred.', []],
  ['5. Your responsibilities', '', [
    'Provide accurate medical reports and personal information',
    'Hold a passport valid for at least six months and obtain the required visa',
    "Follow the treating hospital's clinical and administrative instructions",
    'Settle hospital bills per the hospital\'s own payment schedule'
  ]],
  ['6. Bookings and cancellations', 'Appointments and travel are booked only after your written approval of a plan. If you cancel, third-party costs already incurred (visa fees, non-refundable travel, hospital deposits) are payable; our facilitation fee is refunded pro-rata for services not yet delivered.', []],
  ['7. Liability', 'Our liability is limited to the facilitation fees paid to us. We are not liable for clinical outcomes, hospital pricing decisions, visa decisions by authorities, or events outside our reasonable control.', []],
  ['8. Website use', 'Content on this website is general information, not medical advice. You may not misuse the site, submit false enquiries, or attempt to access data of others. Indicative costs shown are ranges for planning only.', []],
  ['9. Privacy', 'Our handling of personal and medical data is described in the privacy policy, which forms part of these terms.', []],
  ['10. Governing law and contact', "These terms are governed by the laws of the People's Republic of Bangladesh. Questions about these terms can be sent to us via the contact page; we reply within one working day.", []]
];

function LegalPage({ crumbLabel, title, lead, sections, pageTitle, desc }) {
  usePageMeta(pageTitle, desc);
  return (
    <div className="wrap wrap--narrow">
      <Crumbs items={[['Home', 'index.html'], [crumbLabel, crumbLabel === 'Privacy policy' ? 'privacy-policy.html' : 'terms-of-service.html']]} />
      <PageHead pill="Legal" title={title} lead={lead} />
      <div className="pbody">
        {sections.map(([h, p, b]) => (
          <div key={h}>
            <h2>{h}</h2>
            {p && <p>{p}</p>}
            {b.length > 0 && <TickList items={b} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <LegalPage
      crumbLabel="Privacy policy"
      title="Privacy policy"
      lead="Last updated: 18 October 2026. This policy explains what we collect, why we collect it, and the control you have over it."
      sections={PRIVACY}
      pageTitle="Privacy policy: CareBridge"
      desc="How CareBridge collects, uses and protects your medical reports and contact details when you enquire about treatment in India."
    />
  );
}

export function Terms() {
  return (
    <LegalPage
      crumbLabel="Terms of service"
      title="Terms of service"
      lead="Last updated: 18 October 2026. Please read these terms before using our services or website."
      sections={TERMS}
      pageTitle="Terms of service: CareBridge"
      desc="The terms on which CareBridge provides medical travel facilitation: what we do, what we do not do, fees, and your responsibilities."
    />
  );
}

export function NotFound() {
  usePageMeta(
    'Page not found: CareBridge',
    'The page you were looking for does not exist. Find treatments, hospitals, resources or contact a coordinator.'
  );
  return (
    <div className="wrap nf">
      <div>
        <div className="nf__code">404</div>
        <h1>This page took a wrong turn</h1>
        <p>The page you were looking for does not exist or has moved. Your journey does not have to. Here are the places families usually need.</p>
        <div className="nf__links">
          <Link className="btn btn--solid" to="/">Back to home</Link>
          <Link className="btn btn--ghost" to="/treatments">Treatments</Link>
          <Link className="btn btn--ghost" to="/hospitals">Hospitals</Link>
          <Link className="btn btn--ghost" to="/resources">Resources</Link>
          <Link className="btn btn--ghost" to="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export function Sitemap() {
  usePageMeta('Sitemap: CareBridge', 'Every page of the CareBridge medical travel website.');
  const groups = [
    ['Main', [['Home', '/'], ['About Us', '/about'], ['How It Works', '/how-it-works'], ['Why India', '/why-india'], ['Patient Stories', '/stories'], ['Contact', '/contact']]],
    ['Treatments', SITE.treatments.map((t) => [t.name, '/treatments/' + t.slug])],
    ['Hospitals', SITE.hospitals.map((h) => [h.name, '/hospitals/' + h.slug])],
    ['Legal', [['Privacy Policy', '/privacy-policy'], ['Terms of Service', '/terms-of-service']]]
  ];
  return (
    <div className="wrap" style={{ padding: '46px 24px 76px' }}>
      <Crumbs items={[['Home', 'index.html'], ['Sitemap']]} />
      <PageHead pill="Sitemap" title="Every page, one list" lead="A complete index of the CareBridge website." />
      <div className="h2spec__grid">
        {groups.map(([title, links]) => (
          <div className="card" key={title}>
            <h3 style={{ marginBottom: 10, color: 'var(--nv)' }}>{title}</h3>
            <ul>
              {links.map(([label, to]) => (
                <li key={to}><Link to={to} style={{ color: 'var(--mut-2)', fontSize: 13.5, lineHeight: 2.1 }}>{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
