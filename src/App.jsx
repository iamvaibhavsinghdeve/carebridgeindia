import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import { TreatmentsHub, HospitalsHub, ResourcesHub } from './pages/Hubs.jsx';
import { TreatmentDetail, HospitalDetail, ResourceDetail } from './pages/Details.jsx';
import { HowItWorks, WhyIndia, About, Stories, Privacy, Terms, NotFound, Sitemap } from './pages/StaticPages.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why-india" element={<WhyIndia />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/treatments" element={<TreatmentsHub />} />
        <Route path="/treatments/:slug" element={<TreatmentDetail />} />
        <Route path="/hospitals" element={<HospitalsHub />} />
        <Route path="/hospitals/:slug" element={<HospitalDetail />} />
        <Route path="/resources" element={<ResourcesHub />} />
        <Route path="/resources/:slug" element={<ResourceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
