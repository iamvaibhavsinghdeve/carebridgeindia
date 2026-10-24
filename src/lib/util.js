import { useEffect } from 'react';
import { SITE } from '../data/content.js';

/* "treatments/cardiac-sciences.html" -> "/treatments/cardiac-sciences" */
export const route = (href) =>
  href === 'index.html' ? '/' : '/' + String(href).replace(/\.html$/, '');

/* "assets/img/photo-surgery.png" -> "/img/photo-surgery.png" (served from public/) */
export const img = (p) => '/' + String(p).replace(/^assets\//, '');

export const waUrl =
  'https://wa.me/' + SITE.whatsapp + '?text=' +
  encodeURIComponent('Hello CareBridge, I would like a free consultation.');

export const isHosted = () => /netlify\.app$|netlify\.com$/.test(window.location.hostname);

export function usePageMeta(title, desc) {
  useEffect(() => {
    document.title = title;
    if (!desc) return;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement('meta');
      m.name = 'description';
      document.head.appendChild(m);
    }
    m.setAttribute('content', desc);
  }, [title, desc]);
}
