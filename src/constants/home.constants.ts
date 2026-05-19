import type { StatItem, ServiceItem, UseCaseItem, ProcessStepItem, PillarItem } from '../types';
import { FEATURED_PROJECTS } from './projects.constants';

// HOME_PROJECTS now reuses the same 3 real video projects defined in projects.constants.ts
export { FEATURED_PROJECTS as HOME_PROJECTS };

export const HOME_HERO = {
  headline1:   "We Don't Just Light Up the Sky.",
  headline2:   'We Own It.',
  subheadline: 'Sky Concert Worldwide crafts breathtaking aerial experiences that captivate millions, elevate brands, and create moments the world stops to watch.',
  supporting:  'Attention is the new currency. We help visionary leaders, brands, governments, and event organizers command it — boldly, beautifully, and unforgettably — from the skies above.',
  cta1:        'Start Your Sky Campaign',
  cta2:        'Watch the Showreel',
} as const;

export const HOME_STATS: StatItem[] = [
  { value: '500+', label: 'Drone Fleet Capacity'       },
  { value: '6',    label: 'Continents Ready to Deploy' },
  { value: '360°', label: 'In-House End-to-End Team'   },
  { value: '100%', label: 'Regulatory Compliant'       },
];

export const HOME_INTRO = {
  sectionLabel: "Who We Are",
  headline: "Architects of Attention. Creators of Wonder.",
  paragraphs: [
    "Sky Concert Worldwide is a global drone technology company redefining publicity, entertainment, and brand experiences through large scale aerial storytelling.",
    "We transform the night sky into a powerful visual platform for campaigns, celebrations, and live experiences designed to captivate audiences worldwide.",
    "Our team combines drone engineering, creative direction, marketing strategy, and live event production to create unforgettable sky based moments.",
  ],
} as const;

export const HOME_SERVICES: ServiceItem[] = [
  { id: 'light-shows',       number: '01', title: 'Synchronized Drone Light Shows',         description: 'Thousands of drones. Flawless precision. Sky-scale visual performances choreographed to music, narrative, and brand identity.' },
  { id: 'aerial-branding',   number: '02', title: 'Aerial Logo Displays & Dynamic Branding', description: 'Your brand logo, colors, and message written across the sky in real time — visible for miles, impossible to ignore.' },
  { id: '3d-storytelling',   number: '03', title: '3D Storytelling Formations',              description: 'Dimensional aerial shapes that evolve, transform, and narrate — turning the sky into a live animated story.' },
  { id: 'nighttime-spectacles', number: '04', title: 'Nighttime Spectacles & Hybrid Experiences', description: 'Drone shows combined with pyrotechnics, live music, laser mapping, or stadium lighting for maximum sensory impact.' },
  { id: 'live-activations',  number: '05', title: 'Branded Live Event Activations',          description: 'Sky-based activations integrated with live broadcast, social media, and press moments — built for amplification.' },
];

export const HOME_SERVICES_META = {
  sectionLabel: 'Our Services',
  headline:     'We Bring Imagination to Life in the Skies',
  subheadline:  'Our customized drone experiences combine cutting-edge technology with masterful storytelling — producing moments people remember and content the world shares.',
  closing:      'From product launches and luxury showcases to concerts, political rallies, sports events, tourism campaigns, and national celebrations — we create sky experiences tailored to your exact vision and goals.',
} as const;

export const HOME_USE_CASES: UseCaseItem[] = [
  { emoji: '🏛', title: 'Governments & National Events', description: 'Independence days, national celebrations, state summits, diplomatic milestones, and cultural heritage moments.' },
  { emoji: '🎵', title: 'Entertainment & Concerts',      description: 'Festival closers, halftime spectacles, album drop activations, award show moments, and live tour experiences.' },
  { emoji: '🏷', title: 'Brand & Product Launches',      description: 'Luxury product reveals, flagship campaign launches, brand anniversaries, and experiential marketing activations.' },
  { emoji: '🏟', title: 'Sports Events',                 description: 'Opening ceremonies, championship nights, stadium spectacles, and sports tourism campaigns.' },
  { emoji: '🌍', title: 'Tourism & Cultural Campaigns',  description: 'Destination storytelling, heritage formation displays, and international tourism visibility campaigns.' },
  { emoji: '🏙', title: 'Smart Cities & Tech Summits',   description: 'Future-forward aerial activations for tech conferences, smart city unveilings, and innovation showcases.' },
];

export const HOME_USE_CASES_META = {
  sectionLabel: 'Sky Experiences Built for Every Stage',
  headline:     'Whatever the Occasion, We Command the Sky Above It',
} as const;

export const HOME_PROCESS_STEPS: ProcessStepItem[] = [
  { number: '01', title: 'Discovery & Brief',       description: 'We begin by deeply understanding your goals, audience, venue, timeline, and message. No two briefs are the same — and no two shows should be either.' },
  { number: '02', title: 'Creative Concept',        description: 'Our creative team designs your sky story — formations, color palette, narrative arc, musical integration, and emotional journey from first drone to final frame.' },
  { number: '03', title: 'Technical Planning',      description: 'Flight paths, drone count, airspace permissions, regulatory filings, safety protocols, and site assessments — all handled in-house by our technical operations team.' },
  { number: '04', title: 'Simulation & Approval',   description: 'Before a single drone lifts off, you see a full 3D simulation of your show. We refine until every detail matches your vision — then you sign off.' },
  { number: '05', title: 'Flawless Live Execution', description: 'Our trained ground crew deploys and orchestrates your show live. Precision choreography, real-time monitoring, and contingency protocols for flawless delivery.' },
  { number: '06', title: 'Content & Amplification', description: 'We capture professional aerial footage and production content from the show — ready for your marketing campaigns, press coverage, and social media amplification.' },
];

export const HOME_PROCESS_META = {
  sectionLabel: 'Our Process',
  headline:     'From Vision to the Sky — In Six Steps',
  subheadline:  "Every Sky Concert experience is a precision-engineered production. Here's how we bring your vision to life, from first conversation to live execution.",
} as const;


export const HOME_PROJECTS_META = {
  sectionLabel: 'Our Work',
  headline:     'The Sky Has No Limits. Neither Do We.',
  subheadline:  'Three sky-defining moments we created — bold, breathtaking, and built to be remembered.',
  cta:          'Watch All Projects',
} as const;

export const HOME_WHY_US_PILLARS: PillarItem[] = [
  { id: 'global',      title: 'Global Expertise',              description: 'We operate with true international standards while adapting to local cultures, markets, regulatory environments, and audience behaviors across continents.' },
  { id: 'sustainable', title: 'Sustainable Innovation',        description: 'Our drone solutions are a cleaner, quieter, and more responsible alternative to traditional fireworks. Reusable, energy-efficient, and eco-conscious — built for the future.' },
  { id: 'safety',      title: 'Unmatched Safety & Excellence', description: 'Every operation is guided by strict technical standards, rigorous risk management, regulatory compliance, and highly trained professionals.' },
  { id: 'mastery',     title: 'Creative & Technical Mastery',  description: 'We blend drone technology, precision engineering, creative design, and strategic marketing insight to produce powerful, shareable brand moments.' },
  { id: 'inhouse',     title: 'In-House End-to-End Team',      description: 'From creative concept to technical flight operations, everything is handled under one roof. No outsourcing. No compromises.', wide: true },
];

export const HOME_WHY_US_META = {
  sectionLabel: 'Why Visionaries Choose Us',
  headline:     'We Are More Than a Drone Company.',
  subheadline:  'We are architects of attention, creators of wonder, and committed partners in global brand elevation.',
} as const;

export const HOME_GLOBAL = {
  sectionLabel: 'Global Operations',
  headline:     'Designed for Global Deployment. Ready to Operate Wherever Your Audience Is.',
  body:         'Sky Concert Worldwide is built from the ground up to operate internationally — adapting our creative approach, technical logistics, and regulatory expertise to any market, any continent, any stage.',
  bullets: [
    'Capable of deployment across all 6 inhabited continents',
    'Full regulatory navigation and airspace compliance in international markets',
    'Culturally adaptive creative direction for diverse audiences and occasions',
    'Scalable fleet operations — from intimate brand activations to massive national spectacles',
  ],
  stats: [
    { value: '6',    label: 'Continents'    },
    { value: '∞',    label: 'Markets Ready' },
    { value: '100%', label: 'Compliant'      },
  ],
} as const;

export const HOME_CTA = {
  sectionLabel: "Let's Build Something Legendary",
  headline:     'Ready to Own the Sky?',
  subheadline:  "Let's transform your next event, campaign, or celebration into a legendary aerial experience — seen by millions, remembered forever.",
  cta1:         'Request a Custom Proposal',
  cta2:         'Book a Consultation',
  softCta:      'Download Our Capabilities Deck',
} as const;
