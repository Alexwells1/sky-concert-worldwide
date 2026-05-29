import type { AdvantageItem, ComparisonRow } from '../types';

export const WHYUS_HERO = {
  headline:    'Why Sky Concert Worldwide?',
  subheadline: 'Because your event deserves more than ordinary.',
  supporting:  'It deserves to own the sky.',
} as const;

export const WHYUS_INTRO = {
  sectionLabel: 'Our Difference',
  paragraphs: [
    'In a world where attention is harder to capture than ever before, we give our clients a powerful and unfair advantage: the sky itself.',
    'Here is why visionary brands, governments, corporations, and event organizers choose Sky Concert Worldwide.',
  ],
} as const;

export const ADVANTAGE_POINTS: AdvantageItem[] = [
  {
    number: '01',
    title:   'True Global Capability',
    intro:   'We are not a regional player. Sky Concert Worldwide operates with a genuinely international mindset and standards. We have successfully delivered shows across continents while adapting to different cultures, local regulations, audience behaviors, and event requirements. Our strategic partnership with BotLab Dynamics ensures we have direct access to world-class drone infrastructure and expertise.',
    bullets: [],
    closing: 'Global Reach. Local Precision.',
    hasMap:  false,
  },
  {
    number: '02',
    title:   'Sustainable Innovation',
    intro:   'We believe spectacular moments should not harm the planet. Unlike traditional fireworks and heavy staging systems that create waste, noise, and pollution, our drone solutions are built differently.',
    bullets: [
      'Cleaner, producing zero ground debris after shows',
      'Significantly quieter with no noise complaints or disruption to surrounding areas',
      'Fully reusable and energy-efficient across events',
      'Aligned with modern sustainable event standards and smart city initiatives',
    ],
    closing: 'We deliver wonder responsibly.',
  },
  {
    number: '03',
    title:   'Uncompromising Safety and Professionalism',
    intro:   'Safety is at the core of every operation we undertake. Our team does not cut corners.',
    bullets: [
      'Highly trained and certified drone pilots and technicians',
      'Strict technical standards and rigorous risk management at every stage',
      'Full regulatory compliance in every market we operate in',
      'Redundant systems and real-time monitoring throughout all shows',
      'Triple-layered geofencing and emergency response protocols',
    ],
    closing: 'You can trust us with your most important events.',
  },
  {
    number: '04',
    title:   'Creative Storytelling and Technical Mastery',
    intro:   'We do not just fly drones. We create emotional experiences. Our strength lies in the perfect fusion of technology, creativity, engineering, and strategy.',
    bullets: [
      'Cutting-edge drone technology and swarm intelligence systems',
      'World-class creative direction and aerial storytelling',
      'Precision engineering and flawless show execution',
      'Strategic marketing insight that connects shows to real business outcomes',
    ],
    closing: 'This combination allows us to deliver shows that are not only visually stunning but meaningful and commercially impactful.',
  },
  {
    number: '05',
    title:   'End-to-End Turnkey Excellence',
    intro:   'From the first idea to the final content delivery, we manage the entire production process under one roof. No outsourcing. No gaps in quality.',
    bullets: [
      'Concept and Creative Development',
      'Technical Choreography and 3D Simulation',
      'Regulatory Approvals and Permit Processing',
      'On-site Production and Live Execution',
      'Professional Aerial Footage and Marketing Content',
    ],
    closing: 'You focus on the vision. We bring it to life flawlessly.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { category: 'Environmental Impact', skyConcert: 'Clean, reusable, zero ground waste',     traditional: 'High waste and pollution'     },
  { category: 'Audience Reach',       skyConcert: 'Massive sky visibility seen for miles',   traditional: 'Limited to ground level only' },
  { category: 'Memorability',         skyConcert: 'Highly emotional and socially shareable', traditional: 'Often forgettable'            },
  { category: 'Customization',        skyConcert: 'Fully bespoke storytelling',              traditional: 'Limited options'              },
  { category: 'Safety Standards',     skyConcert: 'Highest international protocols',         traditional: 'Varies significantly'         },
  { category: 'Global Delivery',      skyConcert: 'True multi-continent expertise',          traditional: 'Usually regional only'        },
];

export const COMPARISON_META = {
  sectionLabel: 'The Sky Concert Advantage',
  headline:     'How We Compare',
  ourLabel:     'Sky Concert Worldwide',
  theirLabel:   'Traditional Methods',
} as const;

export const TRUST_BADGES = [
  'Fully Insured and Compliant',
  'International Safety Standards',
  'Eco-Conscious Operations',
  'End-to-End In-House Team',
] as const;

export const WHYUS_CTA = {
  headline:    'Ready to Rise Above the Competition?',
  subheadline: 'Let us create an aerial experience that sets a new standard for your brand or event.',
  cta1:        'Request a Custom Proposal',
  cta2:        'Book a Consultation',
} as const;
