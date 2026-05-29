import type { ServiceItem, ProcessStepItem } from '../types';

export const SERVICES_HERO = {
  headline:    'Our Services',
  subheadline: 'We Craft Unforgettable Experiences in the Sky',
  supporting:  'From breathtaking synchronized light shows to powerful aerial storytelling and branded spectacles, we deliver custom drone experiences that captivate audiences and elevate brands across Nigeria and beyond.',
} as const;

export const SERVICES_INTRO = {
  paragraphs: [
    'At Sky Concert Worldwide, we combine cutting-edge drone technology, creative storytelling, precision engineering, and strategic insight to create sky experiences tailored to your exact objectives.',
    'Whether you want to launch a product, celebrate a nation, energize a concert crowd, or create an unforgettable luxury brand moment, we transform your vision into spectacular aerial reality.',
  ],
} as const;

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'wedding-drone-shows',
    number: '01',
    title: 'Wedding Drone Shows',
    description: 'Make your most important day truly unforgettable. We create intimate and breathtaking aerial displays choreographed to your love story, spelling names, forming hearts, and painting the night sky with formations that your guests will talk about for years.',
 },
  {
    id: 'concert-drone-displays',
    number: '02',
    title: 'Concert Drone Displays',
    description: 'Transform a great concert into a legendary one. Our drone displays synchronize with live music, amplifying the emotional energy of performances with sky-scale visual storytelling that extends the spectacle far beyond the stage.',
 },
  {
    id: 'festival-entertainment',
    number: '03',
    title: 'Festival Entertainment',
    description: 'Give festival audiences a closing moment they will never forget. We design large-scale drone light shows that serve as the crown jewel of any festival program, combining formation art, animations, and synchronized music into a multi-sensory finale.',
 },
  {
    id: 'corporate-branding-events',
    number: '04',
    title: 'Corporate Branding Events',
    description: 'Put your brand in the sky and make it impossible to ignore. We create aerial logo displays, animated brand narratives, and product reveal formations visible from kilometres away, delivering a marketing impact that no billboard or screen can match.',
 },
  {
    id: 'stadium-experiences',
    number: '05',
    title: 'Stadium Experiences',
    description: 'Elevate the energy of your stadium event with a pre-show or halftime drone spectacle that fills the entire sky above the crowd. We design performances that match the scale and intensity of the moment, creating content that drives massive broadcast and social media coverage.',
 },
  {
    id: 'product-launch-activations',
    number: '06',
    title: 'Product Launch Activations',
    description: 'Launch your product in the most dramatic way possible. We design fully customized aerial activations that reveal your product, communicate your brand identity, and generate the kind of press and social buzz that money alone cannot buy.',
 },
];

export const SERVICES_TECH = {
  sectionLabel: 'Technology Advantage',
  headline:     "Built on the World's Most Advanced Drone Show Technology",
  bullets: [
    'Precision RTK-GPS and swarm intelligence software for flawless synchronization',
    'High-brightness, energy-efficient LED payloads visible from kilometers away',
    'Advanced 3D simulation and real-time mission control systems',
    'Redundant safety systems and triple-layered geofencing',
    'Scalable solutions from intimate shows to record-breaking large fleet productions',
  ],
  closing: 'Every performance is engineered for reliability, visual impact, and safety.',
} as const;

export const SERVICES_PROCESS_STEPS: ProcessStepItem[] = [
  { number: '01', title: 'Discovery',          description: 'Understanding your goals, audience, venue, and event objectives in detail.' },
  { number: '02', title: 'Creative Concept',   description: 'Story development, formation design, and stunning visual concept presentation.' },
  { number: '03', title: 'Technical Planning', description: 'Precise choreography, 3D simulations, and regulatory approvals handled in-house.' },
  { number: '04', title: 'Production',         description: 'Building, programming, testing, and fully rehearsing the show before live day.' },
  { number: '05', title: 'Live Execution',     description: 'Flawless delivery by our expert ground crew and flight operations team.' },
  { number: '06', title: 'Content Delivery',   description: 'Professional aerial footage and highlight content ready for your marketing campaigns.' },
];

export const SERVICES_PROCESS_META = {
  sectionLabel: 'Our Process',
  headline:     'From Vision to Sky',
} as const;

export const SERVICES_SUSTAINABILITY = {
  sectionLabel: 'Sustainable by Design',
  intro:        'We are committed to responsible innovation. Our drone experiences offer a cleaner, quieter, and more sustainable alternative to traditional fireworks and heavy staging setups.',
  bullets: [
    'Zero ground waste generated during or after shows',
    'Significantly reduced noise pollution compared to fireworks',
    'Fully reusable technology with minimal environmental footprint',
    'Aligned with modern sustainable event standards and smart city initiatives',
  ],
  closing: 'Create spectacular moments responsibly.',
} as const;

export const SERVICES_FAQ_ITEMS = [
  {
    question: 'How many drones are used?',
    answer: 'The number of drones depends on the scope and ambition of your event. Smaller events typically use between 100 and 500 drones, while large concerts, stadium shows, and major brand activations can deploy a thousand drones or more for advanced aerial animations and storytelling. We recommend the right fleet size during the discovery phase based on your creative brief and budget.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup typically takes between 4 and 12 hours depending on event location, the number of drones, weather conditions, and site preparation requirements. For larger Nigerian outdoor venues and events, setup may begin a full day before the event to allow adequate time for safety checks, technical calibration, and rehearsal flights.',
  },
  {
    question: 'Is it safe?',
    answer: 'Yes. Drone shows are designed with multiple layers of safety protocols including controlled flight systems, pre-programmed flight paths, restricted audience distance zones, emergency landing procedures, and trained on-site operators. We comply with Nigerian Civil Aviation Authority guidelines and international safety standards at every event.',
  },
  {
    question: 'What locations are supported?',
    answer: 'Drone shows can be organized across all major Nigerian cities including Lagos, Abuja, Port Harcourt, Ibadan, Enugu, Calabar, and other approved outdoor venues nationwide. Location suitability is assessed based on airspace regulations, weather conditions, available open space, and safety clearance. Our team conducts a full site assessment for every event.',
  },
  {
    question: 'What happens during bad weather?',
    answer: 'Drone shows may be delayed, rescheduled, or adjusted in the event of heavy rain, thunderstorms, strong winds, or poor visibility conditions. Safety is always the highest priority, and no show will proceed if conditions pose any risk to guests, equipment, or surrounding property. We monitor weather conditions in detail during event planning and on the day itself.',
  },
  {
    question: 'Are permits required?',
    answer: 'Yes. Drone operations in Nigeria require approvals that vary depending on event size, location, altitude, and proximity to restricted airspace. Necessary permissions may involve the Nigerian Civil Aviation Authority, local security agencies, event venue approvals, and state or local government coordination where applicable. Our team actively assists clients through the full approval process from start to finish.',
  },
] as const;

export const SERVICES_FAQ_META = {
  sectionLabel: 'Frequently Asked Questions',
  headline:     'Everything You Need to Know',
  subheadline:  'Get clear answers to the questions our clients ask most before booking a drone show.',
} as const;

export const SERVICES_CTA = {
  headline:    'Ready to Elevate Your Next Moment?',
  subheadline: 'Let Sky Concert Worldwide design a custom aerial experience that matches your ambition and moves your audience.',
  cta1:        'Request a Custom Proposal',
  cta2:        'Discuss Your Project',
} as const;
