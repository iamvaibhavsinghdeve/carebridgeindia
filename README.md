# CareBridge — React website

The full CareBridge site (home + every navbar page + privacy, terms, custom 404)
as a **React single-page app**: Vite + React 18 + React Router. No `.html` page
files — every page is a React component, all routes are real URLs.

Your real logo (`src/assets/logo.png`, background removed) is used in the header
and footer; `public/favicon.png` is the bridge mark cropped from the same file.

---

## Run it

```bash
npm install        # once
npm run dev        # local dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build → http://localhost:4173
```

## Deploy to Netlify

Drag the **`dist` folder** (after `npm run build`) into your site's drop zone:
Netlify dashboard → **Site overview → Deploys** → drop zone at the bottom.
`public/_redirects` ships inside `dist` and makes every URL (and bad URLs →
the React 404 page) work on Netlify.

## Folder map

```
carebridge-react/
├── index.html                 Vite entry + hidden Netlify form definition
├── vite.config.js
├── public/
│   ├── _redirects             SPA routing on Netlify (/* → /index.html)
│   ├── favicon.png            bridge mark, cropped from your logo
│   └── img/                   your photos + footer landscape
└── src/
    ├── main.jsx               React root + BrowserRouter
    ├── App.jsx                ALL routes (one per page)
    ├── styles.css             ALL colours, fonts, spacing, responsive rules
    ├── assets/logo.png        YOUR logo (transparent background)
    ├── data/content.js        ALL editable content: phone, menus, hospitals,
    │                          treatments, resources, services, steps, stats,
    │                          testimonials, footer columns
    ├── lib/util.js            route()/img() helpers, WhatsApp link, page titles
    ├── lib/modal.js           modal open/close context
    ├── components/
    │   ├── Layout.jsx         header + mega-menu, CTA band, footer, modal,
    │   │                      reveal-on-scroll + counters (shared by all pages)
    │   ├── Icon.jsx           icon set
    │   ├── Ui.jsx             breadcrumbs, page headers, plans, journey rail…
    │   ├── ConsultForm.jsx    consultation form (modal + contact page)
    │   └── HospRail.jsx       hospital carousel with arrows + drag
    └── pages/
        ├── Home.jsx           home (hero → plans)
        ├── Hubs.jsx           /treatments, /hospitals, /resources
        ├── Details.jsx        /treatments/:slug, /hospitals/:slug, /resources/:slug
        ├── Contact.jsx        /contact
        └── StaticPages.jsx    how-it-works, why-india, about, stories,
                               privacy-policy, terms-of-service, 404
```

## Routes

`/` `/how-it-works` `/why-india` `/about` `/stories` `/contact`
`/treatments` `/treatments/:slug` `/hospitals` `/hospitals/:slug`
`/resources` `/resources/:slug` `/privacy-policy` `/terms-of-service`
anything else → custom 404.

## Where to change what

| You want to change… | Edit |
| --- | --- |
| Phone / WhatsApp / email / address | `src/data/content.js` → top of `SITE` |
| Nav dropdown contents + links | `content.js` → `menus[]` (hrefs auto-convert to routes) |
| Hospital hub + detail pages | `content.js` → `hospitals[]` (`slug` = URL) |
| Treatment hub + detail pages | `content.js` → `treatments[]` (`slug` = URL) |
| Resource/guide pages | `content.js` → `resources[]` (`sections[]`, `faqs[]`) |
| Footer columns | `content.js` → `footer[]` |
| Services strip / journey / stats / testimonials | `content.js` → `services[]` / `steps[]` / `stats[]` / `testimonials[]` |
| Home hero + section prose | `src/pages/Home.jsx` |
| How-it-works / why-india / about / stories prose | `src/pages/StaticPages.jsx` |
| Privacy / terms text | `src/pages/StaticPages.jsx` → `PRIVACY` / `TERMS` arrays |
| Any colour / font / spacing | `src/styles.css` → `:root` variables |
| Logo | replace `src/assets/logo.png` (header + footer pick it up automatically) |
| Photos | replace files in `public/img/` keeping the same names |

### Adding a new treatment / hospital / resource page

1. Add an entry (with a `slug`) in `content.js`.
2. Add its menu link in `content.js` → `menus[]` if it should appear in the navbar.
   The route `/treatments/<slug>` already exists and renders automatically.

## The consultation form

- `index.html` contains a hidden copy of the form so **Netlify detects it at
  deploy time**; the visible forms (header modal + contact page) submit to it
  via `fetch`, so submissions appear in **Netlify → Forms → consultation**.
- Locally, submitting only shows the green "Thank you" message.
- Honeypot field `company` blocks spam bots.

## Still placeholder — replace before going live

- Phone `+880 1234 56789` and WhatsApp `880123456789` (`content.js`)
- Email `info@carebridgeindia.com`
- Stats and testimonials — use real numbers
- Hospital bed counts / "known for" blurbs and treatment stay/cost figures
- Social links in the footer (`Layout.jsx`, currently `#`)

## Not done yet (you said you'd send these later)

Hover effects, entrance/scroll animations and logo animation timing.
Current defaults are subtle fades only; they live in `Layout.jsx`
(reveal-on-scroll effect) and `styles.css`.
