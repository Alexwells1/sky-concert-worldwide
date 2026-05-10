import type { ApproachItem } from '../types';

export const ABOUT_HERO = {
  headline:    'We Are Sky Concert Worldwide',
  subheadline: 'Architects of Attention. Creators of Wonder.',
  supporting:  'We turn the sky into the most powerful storytelling canvas on Earth.',
} as const;

export const ABOUT_STORY = {
  sectionLabel: 'Our Story',
  headline:     'Our Story',
  paragraphs: [
    'Sky Concert Worldwide is an advanced-thinking global drone technology company dedicated to transforming the future of publicity, entertainment, and brand communication.',
    'We specialize in creating breathtaking aerial experiences that captivate audiences across the world — using advanced drone systems to deliver large-scale visual campaigns, promotional activations, and unforgettable sky-based storytelling.',
    "Founded on a powerful belief — that attention is the new currency — we help ambitious brands, governments, corporations, event organizers, and visionary leaders rise above traditional marketing. We create moments that don't just get noticed — they inspire, engage, and are remembered long after the lights fade.",
    'From product launches and luxury brand showcases to concerts, political rallies, sports events, tourism campaigns, and national celebrations, we bring bold imagination to life in the skies.',
  ],
} as const;

export const ABOUT_WHO_WE_ARE = {
  sectionLabel: 'Who We Are',
  intro: 'We are more than a drone company.',
  body: 'We are a fusion of cutting-edge technology, creative excellence, and strategic vision. Our team combines world-class drone engineers, creative storytellers, precision flight directors, and marketing strategists who work together to craft experiences that are technically flawless and emotionally powerful.',
  commitments: [
    {
      title: 'Global Excellence',
      description: 'We operate with international standards while maintaining deep respect for local cultures, regulations, and audience preferences. Our global mindset allows us to deliver seamless experiences anywhere in the world.',
    },
    {
      title: 'Sustainable Innovation',
      description: 'We are deeply committed to environmental responsibility. Our drone solutions provide a cleaner, quieter, reusable, and more eco-conscious alternative to traditional fireworks and heavy staging systems.',
    },
    {
      title: 'Safety, Precision & Professionalism',
      description: 'Every operation is guided by strict technical standards, rigorous risk management, full regulatory compliance, and highly trained personnel. Safety and flawless execution are non-negotiable.',
    },
  ],
} as const;

export const ABOUT_PHILOSOPHY = {
  sectionLabel: 'Our Philosophy',
  headline:     'Attention is the New Currency',
  paragraphs: [
    "In today's world, visibility is everything. We help our clients command it boldly and beautifully.",
    "We don't just fly drones — we design emotional connections between brands and audiences. We create shareable wonder. We build sky experiences that spark conversations, drive engagement, and leave lasting impressions.",
    'We are Architects of Attention, Creators of Wonder, and trusted Partners in Global Brand Elevation.',
  ],
} as const;

export const ABOUT_APPROACH_ITEMS: ApproachItem[] = [
  { title: 'Cutting-Edge Drone Technology', description: 'Advanced swarm systems with precision control and intelligent formation programming.' },
  { title: 'Creative Storytelling',         description: 'Turning ideas into emotional sky narratives that audiences connect with and share.'   },
  { title: 'Precision Engineering',         description: 'Millimeter-accurate execution and absolute reliability from rehearsal to live show.'  },
  { title: 'Strategic Insight',             description: 'Campaigns designed to achieve real business and brand objectives — not just visual spectacle.' },
];

export const ABOUT_APPROACH_META = {
  sectionLabel: 'Our Approach',
  headline:     'Four Elements. One Extraordinary Result.',
  closing:      "From concept development to final execution and content delivery, we provide a complete turnkey experience tailored to each client's unique goals.",
} as const;

export const ABOUT_VISION = {
  sectionLabel: 'Our Vision',
  headline:     "We Don't Follow the Future — We Help Shape It.",
  body:         'As technology evolves and audiences become more difficult to reach, Sky Concert Worldwide remains committed to pushing boundaries, setting new standards in aerial innovation, and helping our clients own the sky.',
} as const;

export const ABOUT_CTA = {
  headline:    'Ready to Create a Sky-Defining Moment?',
  subheadline: "Let's bring your vision to life with a custom aerial experience.",
  cta1:        'Start a Conversation',
  cta2:        'Request a Proposal',
} as const;
