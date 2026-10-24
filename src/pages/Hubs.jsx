import { SITE } from '../data/content.js';
import { usePageMeta } from '../lib/util.js';
import { Crumbs, PageHead, CtaRow, L } from '../components/Ui.jsx';
import Icon from '../components/Icon.jsx';

function HubShell({ crumbs, head, cards }) {
  return (
    <div className="wrap">
      <Crumbs items={crumbs} />
      {head}
      <ul className="pgcards">{cards}</ul>
      <CtaRow />
    </div>
  );
}

export function TreatmentsHub() {
  usePageMeta(
    'Treatments in India: CareBridge',
    "Cardiac, oncology, orthopaedic, neuro, transplant, IVF, spine and bariatric treatment at India's top accredited hospitals, with written cost estimates."
  );
  return (
    <HubShell
      crumbs={[['Home', 'index.html'], ['Treatments', 'treatments.html']]}
      head={<PageHead pill="Treatments" title="Specialities we arrange every week" lead="Every case is matched to a high-volume team at a JCI or NABH accredited hospital, with a written cost estimate before you fly." />}
      cards={SITE.treatments.map((t) => (
        <li key={t.slug}>
          <L className="pgcard" href={'treatments/' + t.slug + '.html'}>
            <Icon k={t.icon} />
            <h3>{t.name}</h3>
            <p>{t.desc}</p>
            <span className="pgcard__more">View details</span>
          </L>
        </li>
      ))}
    />
  );
}

export function HospitalsHub() {
  usePageMeta(
    'Partner hospitals in India: CareBridge',
    'JCI and NABH accredited partner hospitals in New Delhi, Gurugram, Faridabad and Bengaluru with international patient desks.'
  );
  return (
    <HubShell
      crumbs={[['Home', 'index.html'], ['Hospitals', 'hospitals.html']]}
      head={<PageHead pill="Hospitals" title="Our partner hospital network" lead="JCI and NABH accredited hospitals with international patient desks we work with every week." />}
      cards={SITE.hospitals.map((h) => (
        <li key={h.slug}>
          <L className="pgcard" href={'hospitals/' + h.slug + '.html'}>
            <Icon k="hospital" />
            <h3>{h.name}</h3>
            <p>{h.city}, India, {h.acc} accredited, {h.beds}</p>
            <span className="pgcard__more">View hospital</span>
          </L>
        </li>
      ))}
    />
  );
}

export function ResourcesHub() {
  usePageMeta(
    'Resources for medical travellers: CareBridge',
    'Guides on the patient journey, Indian medical visas from Bangladesh, insurance and payments, comparing treatment options, and FAQs.'
  );
  return (
    <HubShell
      crumbs={[['Home', 'index.html'], ['Resources', 'resources.html']]}
      head={<PageHead pill="Resources" title="Guides for families travelling for treatment" lead="Plain-language answers on visas, costs, insurance and what the journey actually looks like." />}
      cards={SITE.resources.map((r) => (
        <li key={r.slug}>
          <L className="pgcard" href={'resources/' + r.slug + '.html'}>
            <Icon k={r.icon} />
            <h3>{r.name}</h3>
            <p>{r.desc}</p>
            <span className="pgcard__more">Read the guide</span>
          </L>
        </li>
      ))}
    />
  );
}
