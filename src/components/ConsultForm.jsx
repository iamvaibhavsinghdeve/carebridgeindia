import { useState } from 'react';
import { SITE } from '../data/content.js';
import { isHosted } from '../lib/util.js';

/* Consultation form. On Netlify it posts to the static form named
   "consultation" (declared in index.html so Netlify detects it at deploy);
   locally it just shows the thank-you message. */
export default function ConsultForm({ variant = 'modal' }) {
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const finish = () => {
      setDone(true);
      setTimeout(() => setDone(false), 6000);
      form.reset();
    };
    if (isHosted()) {
      data.append('form-name', 'consultation');
      fetch('/', { method: 'POST', body: data }).then(finish).catch(finish);
    } else {
      setTimeout(finish, 400);
    }
  }

  const doneCls = variant === 'modal' ? 'modal__done' : 'form__done';

  return (
    <form
      className={variant === 'inline' ? 'fform' : undefined}
      name="consultation"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
    >
      <div className="hp" aria-hidden="true"><label>Company<input name="company" tabIndex="-1" autoComplete="off" /></label></div>
      <label>Patient name<input name="name" required autoComplete="name" placeholder="Full name" /></label>
      <label>Phone or WhatsApp<input name="phone" required type="tel" autoComplete="tel" placeholder="+880 1XXX XXXXXX" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
      <label>Treatment needed
        <select name="treatment">
          {SITE.formTreatments.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label>Anything we should know<textarea name="message" rows="3" placeholder="Age, diagnosis, reports you already have"></textarea></label>
      <button className="btn btn--solid btn--wide" type="submit">Request a call back</button>
      <p className="modal__note">We never share your reports or contact details with anyone outside your care team.</p>
      <p className={doneCls} hidden={!done}>Thank you. Your request is with our coordinators. Expect a call within one working day.</p>
    </form>
  );
}
