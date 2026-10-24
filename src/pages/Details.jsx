import { useParams } from 'react-router-dom';
import { SITE } from '../data/content.js';
import { usePageMeta } from '../lib/util.js';
import { Crumbs, PageHead, CtaRow, TickList, L } from '../components/Ui.jsx';

function Missing() {
  return (
    <div className="wrap wrap--narrow">
      <PageHead pill="Not found" title="We could not find that page" lead="The item you followed no longer exists." />
      <CtaRow />
    </div>
  );
}

export function TreatmentDetail() {
  const { slug } = useParams();
  const t = SITE.treatments.find((x) => x.slug === slug);
  usePageMeta(
    t ? `${t.name} treatment in India: CareBridge` : 'Treatment not found: CareBridge',
    t ? `${t.name} for Bangladeshi patients: what we arrange, typical stay and indicative costs at JCI and NABH accredited hospitals in India.` : ''
  );
  if (!t) return <Missing />;
  return (
    <div className="wrap wrap--narrow">
      <Crumbs items={[['Home', 'index.html'], ['Treatments', 'treatments.html'], [t.name, 'treatments/' + t.slug + '.html']]} />
      <PageHead pill="Treatment" title={t.name} lead={t.desc} icon={t.icon} />
      <div className="pbody">
        <p className="lead2">{t.overview}</p>
        <h2>What we arrange for you</h2>
        <TickList items={t.includes} />
        <div className="specrow">
          <div className="card spec"><span>Typical stay</span><b>{t.stay}</b></div>
          <div className="card spec"><span>Indicative cost</span><b>{t.cost}</b></div>
          <div className="card spec"><span>Hospitals</span><b><L href="hospitals.html">All partner hospitals</L></b></div>
        </div>
        <h2>Other treatments</h2>
        <ul className="chips chips--link">
          {SITE.treatments.filter((x) => x.slug !== slug).map((x) => (
            <li key={x.slug}><L href={'treatments/' + x.slug + '.html'}>{x.name}</L></li>
          ))}
        </ul>
        <CtaRow />
      </div>
    </div>
  );
}

export function HospitalDetail() {
  const { slug } = useParams();
  const h = SITE.hospitals.find((x) => x.slug === slug);
  usePageMeta(
    h ? `${h.name}: CareBridge partner hospital` : 'Hospital not found: CareBridge',
    h ? `${h.name}: accreditation, size, what the hospital is known for and the treatments available for Bangladeshi patients.` : ''
  );
  if (!h) return <Missing />;
  return (
    <div className="wrap wrap--narrow">
      <Crumbs items={[['Home', 'index.html'], ['Hospitals', 'hospitals.html'], [h.name, 'hospitals/' + h.slug + '.html']]} />
      <PageHead pill="Hospital" title={h.name} lead={h.city + ', India'} icon="hospital" />
      <div className="pbody">
        <div className="specrow">
          <div className="card spec"><span>City</span><b>{h.city}, India</b></div>
          <div className="card spec"><span>Accreditation</span><b>{h.acc} accredited</b></div>
          <div className="card spec"><span>Size</span><b>{h.beds}</b></div>
        </div>
        <p className="lead2">{h.overview}</p>
        <h2>Known for</h2>
        <TickList items={h.known} />
        <h2>Treatments available here</h2>
        <ul className="chips chips--link">
          {SITE.treatments.map((x) => (
            <li key={x.slug}><L href={'treatments/' + x.slug + '.html'}>{x.name}</L></li>
          ))}
        </ul>
        <CtaRow />
      </div>
    </div>
  );
}

export function ResourceDetail() {
  const { slug } = useParams();
  const r = SITE.resources.find((x) => x.slug === slug);
  usePageMeta(
    r ? `${r.name}: CareBridge resources` : 'Resource not found: CareBridge',
    r ? `${r.name}: plain-language guidance for Bangladeshi patients travelling to India for treatment.` : ''
  );
  if (!r) return <Missing />;
  return (
    <div className="wrap wrap--narrow">
      <Crumbs items={[['Home', 'index.html'], ['Resources', 'resources.html'], [r.name, 'resources/' + r.slug + '.html']]} />
      <PageHead pill="Resource" title={r.name} lead={r.intro} icon={r.icon} />
      <div className="pbody">
        {r.faqs && r.faqs.length > 0 && (
          <div className="faq">
            {r.faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        )}
        {r.sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
            {s.b && s.b.length > 0 && <TickList items={s.b} />}
          </div>
        ))}
        <CtaRow />
      </div>
    </div>
  );
}
