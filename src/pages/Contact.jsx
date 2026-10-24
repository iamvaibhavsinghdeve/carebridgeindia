import { SITE } from '../data/content.js';
import { waUrl, usePageMeta } from '../lib/util.js';
import { Crumbs, PageHead } from '../components/Ui.jsx';
import ConsultForm from '../components/ConsultForm.jsx';

export default function Contact() {
  usePageMeta(
    'Contact CareBridge: free consultation',
    'Call, WhatsApp or send the form. A Bangla-speaking coordinator calls you back within one working day.'
  );
  return (
    <div className="wrap wrap--narrow">
      <Crumbs items={[['Home', 'index.html'], ['Contact', 'contact.html']]} />
      <PageHead pill="Contact" title="Talk to a coordinator today" lead="Call, WhatsApp or send the form. A coordinator calls you back within one working day, in Bangla or English." />
      <div className="ctcards">
        <div className="card ctcard"><span>Phone</span><b><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></b></div>
        <div className="card ctcard"><span>WhatsApp</span><b><a href={waUrl} rel="noopener">Message us now</a></b></div>
        <div className="card ctcard"><span>Email</span><b><a href={'mailto:' + SITE.email}>{SITE.email}</a></b></div>
        <div className="card ctcard"><span>Office</span><b>{SITE.address.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</b></div>
      </div>
      <div className="pbody">
        <h2>Send your details</h2>
        <ConsultForm variant="inline" />
      </div>
    </div>
  );
}
