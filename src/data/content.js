/* ==========================================================================
   CareBridge — all editable content lives here.
   Change text, phone numbers, hospitals, treatments, steps in THIS file.
   Layout / colours live in src/styles.css.
   Every `href` is written as it was on the static site ("treatments/x.html");
   lib/util.js `route()` turns them into React Router paths automatically.
   ========================================================================== */
export const SITE = {
  brand: 'CareBridge',
  tagline: 'Trusted healthcare. Seamless journey.',
  phoneDisplay: '+880 1234 56789',
  phoneHref: 'tel:+880123456789',
  whatsapp: '880123456789',          /* digits only, country code first */
  email: 'info@carebridgeindia.com',
  address: ['House 12, Road 5, Dhanmondi', 'Dhaka-1205, Bangladesh'],

  /* ---------- nav mega-menus ---------- */
  menus: [
    {
      label: 'Treatments',
      href: 'treatments.html',
      groups: [
        {
          title: 'Surgery',
          items: [
            { name: 'Cardiac Sciences', desc: 'Bypass, angioplasty and valve repair.', href: 'treatments/cardiac-sciences.html' },
            { name: 'Orthopaedics', desc: 'Joint replacement and trauma care.', href: 'treatments/orthopaedics.html' },
            { name: 'Spine Surgery', desc: 'Disc, deformity and fusion surgery.', href: 'treatments/spine-surgery.html' },
            { name: 'Bariatric Surgery', desc: 'Weight-loss and metabolic surgery.', href: 'treatments/bariatric-surgery.html' }
          ]
        },
        {
          title: 'Cancer & organs',
          items: [
            { name: 'Oncology', desc: 'Medical, surgical and radiation oncology.', href: 'treatments/oncology.html' },
            { name: 'Organ Transplant', desc: 'Liver, kidney and bone marrow.', href: 'treatments/organ-transplant.html' }
          ]
        },
        {
          title: 'Specialised care',
          items: [
            { name: 'Neurosciences', desc: 'Brain, stroke and epilepsy care.', href: 'treatments/neurosciences.html' },
            { name: 'Fertility & IVF', desc: 'IVF, IUI and reproductive medicine.', href: 'treatments/fertility-ivf.html' }
          ]
        }
      ],
      promo: {
        img: 'assets/img/photo-surgery.png',
        title: 'Not sure what you need?',
        link: 'Get a free medical opinion',
        href: 'contact.html'
      }
    },
    {
      label: 'Hospitals',
      href: 'hospitals.html',
      groups: [
        {
          title: 'New Delhi',
          items: [
            { name: 'Apollo Hospitals', desc: 'JCI accredited, Multi-speciality', href: 'hospitals/apollo-hospitals.html' },
            { name: 'Max Healthcare', desc: 'JCI accredited, Multi-speciality', href: 'hospitals/max-healthcare.html' },
            { name: 'BLK-Max Hospital', desc: 'NABH accredited, Multi-speciality', href: 'hospitals/blk-max-hospital.html' }
          ]
        },
        {
          title: 'Gurugram',
          items: [
            { name: 'Medanta The Medicity', desc: 'NABH accredited, Multi-speciality', href: 'hospitals/medanta-the-medicity.html' },
            { name: 'Fortis Hospitals', desc: 'NABH accredited, Multi-speciality', href: 'hospitals/fortis-hospitals.html' },
            { name: 'Artemis Hospital', desc: 'JCI accredited, Multi-speciality', href: 'hospitals/artemis-hospital.html' }
          ]
        },
        {
          title: 'Across India',
          items: [
            { name: 'Amrita Hospital', desc: 'Faridabad, NABH accredited', href: 'hospitals/amrita-hospital.html' },
            { name: 'Manipal Hospitals', desc: 'Bengaluru, JCI accredited', href: 'hospitals/manipal-hospitals.html' }
          ]
        }
      ],
      promo: {
        img: 'assets/img/photo-surgery.png',
        title: '50+ partner hospitals',
        link: 'See the full network',
        href: 'hospitals.html'
      }
    },
    {
      label: 'Resources',
      href: 'resources.html',
      groups: [
        {
          title: 'Before you travel',
          items: [
            { name: 'Patient Guide', desc: 'Everything, from reports to return.', href: 'resources/patient-guide.html' },
            { name: 'Visa Information', desc: 'Medical visa steps for Bangladesh.', href: 'resources/visa-information.html' },
            { name: 'Insurance & Payments', desc: 'What is covered and how to pay.', href: 'resources/insurance-payments.html' }
          ]
        },
        {
          title: 'Choosing care',
          items: [
            { name: 'Treatment Options', desc: 'Compare hospitals and costs.', href: 'resources/treatment-options.html' },
            { name: 'FAQs', desc: 'Answers families ask us first.', href: 'resources/faqs.html' }
          ]
        }
      ],
      promo: {
        img: 'assets/img/photo-stetho.png',
        title: 'Talk to a coordinator',
        link: 'Book a free call',
        href: 'contact.html'
      }
    }
  ],
  plainLinks: [
    { label: 'How it works', href: 'how-it-works.html' },
    { label: 'Why India', href: 'why-india.html' },
    { label: 'About', href: 'about.html' }
  ],

  /* ---------- hospital logo strip + carousel + hospital pages ---------- */
  hospitals: [
    {
      name: 'Apollo Hospitals', slug: 'apollo-hospitals', city: 'New Delhi', acc: 'JCI', beds: '600+ beds',
      overview: 'Apollo Indraprastha, New Delhi, is one of India’s most experienced multi-speciality hospitals and a pioneer of private healthcare in the country. Its international patient desk handles Bangladeshi patients every day, with Bangla-speaking coordinators on call.',
      known: ['Cardiac sciences and transplants', 'Oncology with tumour boards', 'International patient desk with Bangla support']
    },
    {
      name: 'Fortis Hospitals', slug: 'fortis-hospitals', city: 'Gurugram', acc: 'NABH', beds: '310 beds',
      overview: 'Fortis Memorial Research Institute, Gurugram, is a quaternary-care hospital known for high-volume cardiac, neuro and orthopaedic programmes. Appointment slots for international patients are usually confirmed within two working days.',
      known: ['Minimally invasive cardiac surgery', 'Neurosciences and stroke unit', 'Joint replacement with fast-track rehab']
    },
    {
      name: 'Max Healthcare', slug: 'max-healthcare', city: 'New Delhi', acc: 'JCI', beds: '500+ beds',
      overview: 'Max Super Speciality Hospital, Saket, New Delhi, combines senior consultants with modern infrastructure across more than thirty specialities. Its international centre arranges visas, interpreters and discharge summaries for travelling patients.',
      known: ['Bariatric and metabolic surgery', 'Medical and surgical oncology', 'Dedicated international patient centre']
    },
    {
      name: 'Medanta The Medicity', slug: 'medanta-the-medicity', city: 'Gurugram', acc: 'NABH', beds: '1,250 beds',
      overview: 'Medanta, Gurugram, is one of the largest multi-speciality institutes in India, organised into institutes of cardiac sciences, transplant, oncology and neurosciences under one campus. Complex cases are reviewed by institute-level teams before you travel.',
      known: ['Liver and kidney transplant programmes', 'Robot-assisted surgery', 'Institute-based case review']
    },
    {
      name: 'Artemis Hospital', slug: 'artemis-hospital', city: 'Gurugram', acc: 'JCI', beds: '400+ beds',
      overview: 'Artemis Hospital, Gurugram, was the first hospital in the Gurugram region to receive JCI accreditation. It is a strong choice for cardiac, orthopaedic and fertility treatment with transparent package pricing for international patients.',
      known: ['Fertility and IVF unit', 'Cardiac catheterisation labs', 'Package pricing for international patients']
    },
    {
      name: 'BLK-Max Hospital', slug: 'blk-max-hospital', city: 'New Delhi', acc: 'NABH', beds: '650 beds',
      overview: 'BLK-Max Super Speciality Hospital, Pusa Road, New Delhi, sits minutes from the city centre and offers high-volume bone marrow, oncology and cardiac programmes. Its bone marrow transplant unit is among the busiest in the country.',
      known: ['Bone marrow transplant unit', 'Radiation and medical oncology', 'Central New Delhi location']
    },
    {
      name: 'Amrita Hospital', slug: 'amrita-hospital', city: 'Faridabad', acc: 'NABH', beds: '2,600 beds',
      overview: 'Amrita Hospital, Faridabad, is one of the largest hospital campuses in India, with over 170 specialities and heavily subsidised package costs. It is a popular choice for families seeking world-class care at the lowest total cost.',
      known: ['Very large multi-speciality campus', 'Competitive package pricing', 'High-volume cardiac and transplant surgery']
    },
    {
      name: 'Manipal Hospitals', slug: 'manipal-hospitals', city: 'Bengaluru', acc: 'JCI', beds: '600 beds',
      overview: 'Manipal Hospitals, Bengaluru, brings six decades of clinical heritage with strong oncology, transplant and orthopaedic teams. The city’s climate and direct flights from Dhaka make recovery stays comfortable for Bangladeshi families.',
      known: ['Comprehensive cancer care', 'Kidney and liver transplant', 'Pleasant recovery-stay city with direct Dhaka flights']
    }
  ],

  /* ---------- treatments grid + treatment pages ---------- */
  treatments: [
    {
      icon: 'heart', name: 'Cardiac Sciences', slug: 'cardiac-sciences',
      desc: 'Bypass, angioplasty, valve repair and paediatric cardiology.',
      overview: 'India’s cardiac centres perform some of the highest volumes of bypass, angioplasty and valve surgery in the world, at a fraction of Western cost. Your reports are reviewed by a cardiologist and cardiac surgeon before you fly, so you arrive with a written plan and a confirmed date.',
      includes: ['Cardiologist and cardiac surgeon review of your reports', 'Echo, angiography or CT angiogram scheduled before travel', 'CABG, angioplasty (PCI) and valve repair programmes', 'Cardiac ICU bed reserved for your surgery date', 'Post-op rehabilitation and medication plan for return'],
      stay: '5 to 7 days in hospital, 5 to 7 days recovery stay',
      cost: '$4,800 to $5,600 (CABG)'
    },
    {
      icon: 'ribbon', name: 'Oncology', slug: 'oncology',
      desc: 'Medical, surgical and radiation oncology with tumour boards.',
      overview: 'Cancer care in India is planned by multi-disciplinary tumour boards, the same practice used in Europe and North America. We obtain a written protocol and costed cycle plan before you travel, so there are no mid-treatment surprises.',
      includes: ['Tumour board review of biopsy and imaging reports', 'Written chemotherapy or radiation protocol with costs', 'LINAC radiation and medical oncology scheduling', 'Surgical oncology where operation is the first line', 'Port placement, nutrition and pain management support'],
      stay: 'Depends on protocol; 2 to 4 days per chemo cycle',
      cost: 'From $3,500 per treatment block'
    },
    {
      icon: 'bone', name: 'Orthopaedics', slug: 'orthopaedics',
      desc: 'Knee and hip replacement, arthroscopy and trauma care.',
      overview: 'Joint replacement in India uses the same implant brands as Western hospitals, with fast-track rehab protocols that get patients walking within a day of surgery. Implant choice and cost are confirmed in writing before you fly.',
      includes: ['Surgeon review of X-rays and MRI before travel', 'Implant brand and warranty confirmed in writing', 'Knee, hip and shoulder replacement, arthroscopy', 'Physiotherapy from day one with a home exercise plan', 'Follow-up X-ray schedule shared with your Dhaka doctor'],
      stay: '4 to 6 days in hospital, 10 to 14 days recovery stay',
      cost: '$3,800 to $6,500 per joint'
    },
    {
      icon: 'brain', name: 'Neurosciences', slug: 'neurosciences',
      desc: 'Brain, spine, stroke and epilepsy programmes.',
      overview: 'Neuro teams in India handle high volumes of stroke, epilepsy and brain tumour cases with modern navigation and monitoring. Complex cases get a second read of imaging before any decision is made.',
      includes: ['Neurologist and neurosurgeon review of MRI/CT', 'Epilepsy work-up with video EEG where needed', 'Stroke prevention and carotid programmes', 'Brain and spine tumour surgery with navigation', 'Rehabilitation planning before discharge'],
      stay: '5 to 10 days in hospital depending on procedure',
      cost: 'From $5,000'
    },
    {
      icon: 'organ', name: 'Organ Transplant', slug: 'organ-transplant',
      desc: 'Liver, kidney and bone marrow transplant teams.',
      overview: 'Transplant programmes in India are regulated, high-volume and experienced with international donor-recipient pairs. We coordinate the legal paperwork, donor work-up and surgery schedule as one plan.',
      includes: ['Transplant team review and eligibility assessment', 'Donor work-up scheduling and legal documentation support', 'Liver, kidney and bone marrow transplant programmes', 'Immunosuppression plan with costs for the first year', 'Long-term follow-up protocol shared with your home doctor'],
      stay: '3 to 6 weeks including donor work-up',
      cost: 'From $12,000 (kidney)'
    },
    {
      icon: 'baby', name: 'Fertility & IVF', slug: 'fertility-ivf',
      desc: 'IVF, IUI and reproductive medicine specialists.',
      overview: 'Indian fertility centres report success rates comparable to leading international clinics, with lower medication and cycle costs. Couples get a written cycle plan, including medication protocol and monitoring schedule, before travelling.',
      includes: ['Fertility specialist review of hormone and semen reports', 'Written IVF or IUI cycle plan with success-rate context', 'Embryology lab with vitrification and blastocyst culture', 'Medication protocol and monitoring calendar', 'Freeze-and-return options for surplus embryos'],
      stay: '10 to 14 days per stimulation cycle',
      cost: '$2,800 to $4,500 per cycle'
    },
    {
      icon: 'spine', name: 'Spine Surgery', slug: 'spine-surgery',
      desc: 'Minimally invasive disc and deformity correction.',
      overview: 'Spine teams in India favour minimally invasive techniques wherever clinically safe, meaning smaller incisions and shorter hospital stays. Deformity and fusion cases are planned with 3D imaging reviewed before you fly.',
      includes: ['Spine surgeon review of MRI and dynamic X-rays', 'Minimally invasive discectomy and decompression', 'Deformity correction and fusion with instrumentation', 'Pain-management and physiotherapy protocol', 'Brace and recovery guidance for the flight home'],
      stay: '3 to 7 days in hospital depending on procedure',
      cost: '$4,500 to $9,000'
    },
    {
      icon: 'scale', name: 'Bariatric Surgery', slug: 'bariatric-surgery',
      desc: 'Laparoscopic weight-loss and metabolic surgery.',
      overview: 'Laparoscopic sleeve and bypass surgery in India follows international metabolic-surgery guidelines, with dietitian support that continues after you return. Package prices normally include pre-op work-up and one year of follow-up.',
      includes: ['Surgeon, dietitian and physician pre-op assessment', 'Laparoscopic sleeve gastrectomy or gastric bypass', 'Diabetes and metabolic co-morbidity management', 'Diet progression plan for travel and home', 'One-year virtual follow-up included in most packages'],
      stay: '3 to 4 days in hospital, 7 to 10 days recovery stay',
      cost: '$3,900 to $6,000'
    }
  ],

  /* ---------- resources pages ---------- */
  resources: [
    {
      slug: 'patient-guide', name: 'Patient Guide', icon: 'doc',
      desc: 'Everything, from reports to return.',
      intro: 'A plain-language walkthrough of the whole journey, so nothing about it feels unknown.',
      sections: [
        { h: 'Before you travel', p: 'Send us your reports on WhatsApp or email. Within two working days you receive a doctor-reviewed opinion, a hospital shortlist and a written cost estimate. Nothing is booked until you approve the plan in writing.', b: ['Keep scans and reports as PDF or clear photos', 'Passport valid for at least six months', 'Two passport-size photographs for the visa file'] },
        { h: 'During your stay', p: 'A Bangla-speaking coordinator meets you at the airport, stays in touch daily and is at the hospital on every admission and discharge day. Accommodation for attendants is arranged near the hospital.', b: ['Airport pickup on arrival and discharge day', 'Daily coordinator check-in by phone or in person', 'Billing checked against your written estimate'] },
        { h: 'After you return', p: 'Your discharge summary, prescriptions and follow-up calendar travel with you. We coordinate medicine supply and virtual follow-up consultations with your treating team.', b: ['Discharge summary translated and explained', 'Virtual follow-up appointments arranged', 'Medicine couriered to Dhaka when needed'] }
      ]
    },
    {
      slug: 'visa-information', name: 'Visa Information', icon: 'passport',
      desc: 'Medical visa steps for Bangladesh.',
      intro: 'Bangladeshi patients travel on an Indian Medical visa. Here is exactly how the process works and where we help.',
      sections: [
        { h: 'What you need', p: 'A medical visa requires an invitation or appointment letter from the Indian hospital. Because we book your appointment first, the letter arrives with your treatment plan, not after it.', b: ['Passport with six months validity', 'Hospital appointment / invitation letter', 'Proof of funds for treatment and stay'] },
        { h: 'Application steps', p: 'The online application is filled on the Indian mission portal, followed by biometrics at the designated centre in Dhaka. Processing normally takes five to seven working days once submitted.', b: ['We prepare the hospital letter and supporting documents', 'Online form filled and checked before submission', 'Biometrics appointment scheduled in Dhaka'] },
        { h: 'For attendants', p: 'Up to two attendants can apply for Medical Attendant visas tied to the patient’s visa, with the same validity. We file them together so the family travels on one schedule.', b: ['Attendant visas match the patient’s validity', 'Family members file in the same appointment'] }
      ]
    },
    {
      slug: 'insurance-payments', name: 'Insurance & Payments', icon: 'shield',
      desc: 'What is covered and how to pay.',
      intro: 'Clear answers on money: what insurance covers, how hospitals bill, and how you pay safely.',
      sections: [
        { h: 'Insurance', p: 'Some Bangladeshi insurers and employer plans reimburse treatment abroad with prior approval. We provide the costed treatment plan and hospital credentials your insurer asks for.', b: ['Pre-approval documentation prepared with the hospital', 'Itemised bills and discharge summary for claims'] },
        { h: 'How payment works', p: 'Hospitals bill you directly at their own tariffs. Our facilitation fee is separate and quoted once, up front. Deposits are paid to the hospital account, never to a personal account.', b: ['Written estimate before travel, honoured at discharge', 'Hospital deposit by card or bank transfer', 'No commission added to your hospital bill'] },
        { h: 'Budgeting for the stay', p: 'Beyond the hospital bill, budget for attendant accommodation, local travel and meals. We share realistic weekly figures for each hospital area before you decide.', b: ['Guest-house and hotel options near each hospital', 'Weekly living-cost estimate in writing'] }
      ]
    },
    {
      slug: 'treatment-options', name: 'Treatment Options', icon: 'hospital',
      desc: 'Compare hospitals and costs.',
      intro: 'How we turn your reports into a shortlist you can actually compare.',
      sections: [
        { h: 'The shortlist', p: 'Every case is matched on three things: the team’s volume in your exact procedure, accredited infrastructure, and total cost including stay. You receive two or three hospitals, never a catalogue.', b: ['Procedure-volume matched specialists', 'JCI or NABH accredited facilities only', 'Total-cost comparison, not just surgery price'] },
        { h: 'Second opinions', p: 'If you already have a recommendation, we can obtain an independent read from a different hospital before you commit. Many families use this to confirm a diagnosis or a surgical plan.', b: ['Independent specialist review of existing reports', 'Written comparison of the two opinions'] },
        { h: 'Deciding', p: 'Take the estimates home and discuss them with your family. Your plan and prices stay valid for thirty days, and your coordinator answers questions in Bangla throughout.', b: ['Estimates valid for 30 days', 'No obligation until you approve in writing'] }
      ]
    },
    {
      slug: 'faqs', name: 'FAQs', icon: 'chat',
      desc: 'Answers families ask us first.',
      intro: 'The questions every family asks, answered plainly.',
      sections: [],
      faqs: [
        { q: 'How much does treatment in India cost?', a: 'It depends on the procedure and hospital. Indicative ranges: cardiac bypass $4,800 to $5,600, knee replacement $3,800 to $6,500, IVF $2,800 to $4,500 per cycle. You always receive a written estimate before travelling.' },
        { q: 'Do I need a medical visa?', a: 'Yes. Bangladeshi patients travel on an Indian Medical visa, and up to two attendants on Attendant visas. We arrange the hospital invitation letter and guide the Dhaka application.' },
        { q: 'How fast can I travel after sending reports?', a: 'Most families receive the opinion and estimate within two working days, and travel within one to two weeks once the visa is filed.' },
        { q: 'Will someone speak Bangla with us?', a: 'Yes. Your coordinator speaks Bangla and is reachable 24/7 during your stay, and attends hospital meetings with you.' },
        { q: 'Are the hospitals accredited?', a: 'We work only with JCI or NABH accredited hospitals with active international patient desks.' },
        { q: 'What if my bill changes during treatment?', a: 'Your written estimate is honoured at discharge for the planned procedure. If clinical needs change, any variation is explained and approved by you before it happens.' },
        { q: 'Can my family stay with me?', a: 'Yes. Attendant accommodation is arranged near the hospital, and attendant visas are filed with yours.' },
        { q: 'What happens after I return home?', a: 'Virtual follow-ups with your treating team, medicine supply coordination and help with any further investigations are included, not extra.' }
      ]
    }
  ],

  /* ---------- "we take care of everything" strip ---------- */
  services: [
    { icon: 'steth', name: 'Medical Opinion' },
    { icon: 'passport', name: 'Visa Assistance' },
    { icon: 'plane', name: 'Travel Planning' },
    { icon: 'car', name: 'Airport Pickup' },
    { icon: 'bed', name: 'Accommodation' },
    { icon: 'heartpulse', name: 'Treatment Support' },
    { icon: 'calendar', name: 'Follow-up Care' },
    { icon: 'shield', name: 'Return & Beyond' }
  ],

  /* ---------- 12-step journey (title + icon) ---------- */
  steps: [
    ['Enquiry', 'chat'],
    ['Share Reports', 'doc'],
    ['Medical Review', 'steth'],
    ['Hospital Options', 'hospital'],
    ['Decision & Plan', 'shield'],
    ['Visa Support', 'passport'],
    ['Travel Arranged', 'plane'],
    ['Arrival in India', 'pin'],
    ['Treatment', 'pulse'],
    ['Discharge', 'clipboard'],
    ['Follow-up', 'heartpulse'],
    ['Return Home', 'home']
  ],

  /* ---------- animated stats ---------- */
  stats: [
    { to: 3000, suffix: '+', label: 'Patients assisted' },
    { to: 50, suffix: '+', label: 'Partner hospitals' },
    { to: 98, suffix: '%', label: 'Patient satisfaction' },
    { to: 24, suffix: '/7', label: 'Coordinator support' }
  ],

  /* ---------- testimonials ---------- */
  testimonialNotice: 'Illustrative testimonials: sample names, quotes and portraits for this preview, not verified patient reviews.',
  testimonials: [
    {
      quote: 'CareBridge made treatment in India feel less overwhelming. From finding a hospital to arranging appointments, we had someone guiding us at every step.',
      name: 'Mohammad Rahman', place: 'Dhaka, Bangladesh', initials: 'MR'
    },
    {
      quote: 'We had a doctor’s opinion and a clear cost estimate before travelling. That made planning so much easier.',
      name: 'Fatema Begum', place: 'Chattogram, Bangladesh', initials: 'FB'
    },
    {
      quote: 'From our medical visa documents to airport pickup, everything was explained clearly. Arriving in a new city felt far less stressful.',
      name: 'Saiful Islam', place: 'Sylhet, Bangladesh', initials: 'SI'
    },
    {
      quote: 'CareBridge gave us more than hospital appointments. Having a Bangla-speaking coordinator by our side made us feel supported, even far from home.',
      name: 'Abdul Karim', place: 'Rajshahi, Bangladesh', initials: 'AK'
    },
    {
      quote: 'They helped us find a stay near the hospital and coordinate our appointments. Those small details made a big difference for our family.',
      name: 'Rubina Akter', place: 'Khulna, Bangladesh', initials: 'RA'
    },
    {
      quote: 'CareBridge organised our travel, hospital visits and stay in India. Back home in Bangladesh, we still had help arranging our follow-up care.',
      name: 'Imran Hossain', place: 'Dhaka, Bangladesh', initials: 'IH'
    }
  ],

  /* ---------- consultation form ---------- */
  formTreatments: [
    'Not sure yet', 'Cardiac Sciences', 'Oncology', 'Orthopaedics',
    'Neurosciences', 'Organ Transplant', 'Fertility & IVF',
    'Spine Surgery', 'Bariatric Surgery', 'Other'
  ],

  /* ---------- footer columns ---------- */
  footer: [
    {
      title: 'Services',
      links: [
        { label: 'How it works', href: 'how-it-works.html' },
        { label: 'Treatments', href: 'treatments.html' },
        { label: 'Hospitals', href: 'hospitals.html' },
        { label: 'Why India', href: 'why-india.html' },
        { label: 'Free consultation', href: 'contact.html' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: 'about.html' },
        { label: 'Contact', href: 'contact.html' },
        { label: 'Patient stories', href: 'stories.html' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', href: 'privacy-policy.html' },
        { label: 'Terms of service', href: 'terms-of-service.html' }
      ]
    }
  ]
};
