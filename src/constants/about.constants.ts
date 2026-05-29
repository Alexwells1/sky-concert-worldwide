import type { ApproachItem } from '../types';

export const ABOUT_HERO = {
  headline:    'We Are Sky Concert Worldwide',
  subheadline: 'Architects of Attention. Creators of Wonder.',
  supporting:  'We turn the sky into the most powerful storytelling canvas on Earth.',
} as const;

export const ABOUT_STORY = {
  sectionLabel: 'Our Story',
  headline:     'Born From a Bold Idea',
  paragraphs: [
    'Sky Concert Worldwide was founded on a single, powerful conviction: that the sky is the most underutilized canvas in the world of brand communication and live entertainment.',
    'Today we stand as a pioneer in aerial entertainment across Nigeria and the African continent — combining drone engineering, creative direction, marketing strategy, and live event production to craft sky experiences that captivate audiences at scale.',
  ],
} as const;

export const ABOUT_WHO_WE_ARE = {
  sectionLabel: 'Who We Are',
  intro: 'We are more than a drone company.',
  body: 'A fusion of cutting-edge technology, creative excellence, and strategic vision — our team brings together world-class drone engineers, creative storytellers, precision flight directors, and marketing strategists who collaborate to deliver technically flawless, emotionally powerful experiences.',
  pillars: [
    'Drone technology and precision swarm engineering',
    'Creative storytelling and sky-based brand narratives',
    'Full regulatory compliance and safety-first operations',
    'Sustainable, eco-conscious alternatives to traditional fireworks',
  ],
  founderNote: 'Founded and led by a team of technology and entertainment professionals committed to putting Africa on the global aerial entertainment map.',
} as const;



export const ABOUT_VISION = {
  sectionLabel: "Our Vision",
  headline: "Shaping the Future of African Skies",
  body: "We envision a Nigeria and an Africa where world-class aerial entertainment is no longer a rarity, but a defining feature of the continent's creative and commercial identity. We do not just follow the future — we help shape it.",
} as const;

export const ABOUT_PHILOSOPHY = {
  sectionLabel: "Our Philosophy",
  headline: "Where Infinite Scale Meets Flawless Precision",
  paragraphs: [
    "At Sky Concert Worldwide, we believe that the grander the canvas, the greater the responsibility for precision. Every pixel in the sky represents a deliberate intersection of cutting-edge engineering and emotional resonance, ensuring our spectacles are as reliable as they are breathtaking.",
    "We treat attention not merely as something to grab, but as a currency to respect. By replacing traditional explosive entertainment with sustainable, data-driven light formations, we prove that the most powerful statements on Earth can be made while leaving the environment unharmed.",
  ],
} as const;

export const ABOUT_MISSION_VISION = {
  sectionLabel: 'Purpose and Direction',
  mission: {
    label: 'Our Mission',
    body: 'To help brands, governments, and event organizers command attention boldly and beautifully — transforming the sky into a powerful platform for stories that move audiences and are remembered long after the moment ends.',
  },
  vision: {
    label: 'Our Vision',
    body: 'A Nigeria and an Africa where world-class aerial entertainment is no longer a rarity but a defining feature of the continent\'s creative and commercial identity. We do not follow the future — we help shape it.',
  },
  purpose: {
    label: 'Company Purpose',
    body: 'Attention is the new currency. We exist to help visionary organizations earn it — by creating sky experiences that spark conversations, drive engagement, and deliver measurable brand impact.',
  },
  longTermGoals: [
    'Establish Sky Concert Worldwide as the leading aerial entertainment company across Africa',
    'Build a continent-wide network of certified drone show operators and creative partners',
    'Develop proprietary sky storytelling formats for African cultural and national moments',
    'Set the regional benchmark for drone show safety, regulation, and sustainability standards',
  ],
} as const;

export const ABOUT_APPROACH_ITEMS: ApproachItem[] = [
  { title: 'Cutting-Edge Drone Technology', description: 'Advanced swarm systems with precision control and intelligent formation programming.' },
  { title: 'Creative Storytelling',         description: 'Turning ideas into emotional sky narratives that audiences connect with and share.'   },
  { title: 'Precision Engineering',         description: 'Millimeter-accurate execution and absolute reliability from rehearsal to live show.'  },
  { title: 'Strategic Insight',             description: 'Campaigns designed to achieve real business and brand objectives, not just visual spectacle.' },
];

export const ABOUT_APPROACH_META = {
  sectionLabel: 'Our Approach',
  headline:     'Four Elements. One Extraordinary Result.',
  closing:      'From concept development to final execution and content delivery, we provide a complete turnkey experience tailored to each client\'s unique goals.',
} as const;

export interface PartnerItem {
  name: string;
  logoUrl: string;
}

export const ABOUT_PARTNERS: PartnerItem[] = [
  {
    name: "BotLab Dynamics",
    logoUrl:
      "https://www.botlabdynamics.com/sites/default/files/2022-11/BL%20Botlab%20Dynamics%20%281%29.avif",
  }
];

export const ABOUT_PARTNERS_META = {
  sectionLabel: "Strategic Partnerships",
  headline: "Trusted by the Best",
} as const;

export const ABOUT_TRUST = {
  sectionLabel: 'Trust and Credibility',
  headline:     'Built on Integrity. Backed by Standards.',
  items: [
    { title: 'Registered Company'       },
    { title: 'NCAA Safety Compliance'   },
    { title: 'Fully Insured Operations' },
    { title: 'International Standards'  },
  ],
} as const;

export const ABOUT_TESTIMONIALS = {
  sectionLabel: 'Client Testimonials',
  headline:     'What Our Clients Say',
  items: [
    {
      quote: 'The aerial display at our product launch was unlike anything our guests had ever experienced. The precision, the creativity, and the sheer scale of it left everyone speechless. Sky Concert Worldwide delivered something truly world-class.',
      name: 'Adaeze Okonkwo',
      role: 'Head of Brand Marketing',
      company: 'Lagos',
    },
    {
      quote: 'We needed something that would define our national celebration and set a new benchmark for event entertainment in Nigeria. Sky Concert Worldwide exceeded every expectation. The coordination was flawless and the visual storytelling was deeply moving.',
      name: 'Emeka Nwosu',
      role: 'Director of Events',
      company: 'Abuja',
    },
    {
      quote: 'From the initial brief to the final execution, the professionalism of the Sky Concert team was outstanding. They understood our brand story and translated it into a sky experience that drove massive social media coverage for three days straight.',
      name: 'Tunde Adeyemi',
      role: 'Chief Executive Officer',
      company: 'Lagos',
    },
  ],
} as const;

export const ABOUT_CTA = {
  headline:    'Ready to Create a Sky-Defining Moment?',
  subheadline: 'Let us bring your vision to life with a custom aerial experience designed around your goals.',
  cta1:        'Start a Conversation',
  cta2:        'Request a Proposal',
} as const;
