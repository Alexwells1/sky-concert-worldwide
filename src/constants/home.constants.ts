import type { StatItem, ServiceItem, UseCaseItem, ProcessStepItem, PillarItem } from '../types';
import { FEATURED_PROJECTS } from './projects.constants';

export { FEATURED_PROJECTS as HOME_PROJECTS };

export const HOME_HERO = {
  headline1:   "We Don't Just Light Up the Sky.",
  headline2:   'We Own It.',
  subheadline: 'Sky Concert Worldwide crafts breathtaking aerial experiences that captivate millions, elevate brands, and create moments the world stops to watch.',
  supporting:  'Attention is the new currency. We help visionary leaders, brands, governments, and event organizers command it boldly, beautifully, and unforgettably from the skies above.',
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
  sectionLabel: 'Who We Are',
  headline: 'Architects of Attention. Creators of Wonder.',
  paragraphs: [
    'Sky Concert Worldwide is a global drone technology company redefining publicity, entertainment, and brand experiences through large-scale aerial storytelling.',
    'We transform the night sky into a powerful visual platform for campaigns, celebrations, and live experiences designed to captivate audiences worldwide.',
    'Our team combines drone engineering, creative direction, marketing strategy, and live event production to create unforgettable sky-based moments.',
  ],
} as const;

export const HOME_SERVICES: ServiceItem[] = [
  {
    id: "wedding-drone-shows",
    number: "01",
    title: "Wedding Drone Shows",
    description:
      "Make your most important day truly unforgettable with a personalized aerial display choreographed to your love story.",
    media:
      "https://i.pinimg.com/1200x/66/55/80/665580de68ee8ffc5f9ede2992fa8995.jpg",
  },
  {
    id: "concert-drone-displays",
    number: "02",
    title: "Concert Drone Displays",
    description:
      "Transform a great concert into a legendary one with sky-scale visuals that synchronize with live music and amplify the crowd experience.",
    media:
      "https://v1.pinimg.com/videos/iht/expMp4/39/0a/47/390a47b2e4f6f37044fb357af4b8bf95_720w.mp4",
  },
  {
    id: "festival-entertainment",
    number: "03",
    title: "Festival Entertainment",
    description:
      "Give festival audiences a closing moment they will never forget through a large-scale drone light show finale.",
    media:
      "https://v1.pinimg.com/videos/iht/expMp4/fa/70/72/fa70722415a217007904112e5e94596c_720w.mp4",
  },
  {
    id: "corporate-branding",
    number: "04",
    title: "Corporate Branding Events",
    description:
      "Put your brand in the sky and make it impossible to ignore with aerial logo displays and animated brand narratives.",
    media:
      "https://v1.pinimg.com/videos/iht/expMp4/fa/ef/f0/faeff0078b2afa155b1091f9188618a6_720w.mp4",
  },
  {
    id: "stadium-experiences",
    number: "05",
    title: "Stadium Experiences",
    description:
      "Elevate stadium events with a drone spectacle that fills the sky and drives massive broadcast and social media coverage.",
    media:
      "https://v1.pinimg.com/videos/iht/expMp4/e2/8d/b5/e28db53938346f3773550f79d2e462ff_720w.mp4",
  },
];

export const HOME_SERVICES_META = {
  sectionLabel: 'Our Services',
  headline:     'We Bring Imagination to Life in the Skies',
  subheadline:  'Our customized drone experiences combine cutting-edge technology with masterful storytelling, producing moments people remember and content the world shares.',
  closing:      'From product launches and luxury showcases to concerts, political rallies, sports events, tourism campaigns, and national celebrations, we create sky experiences tailored to your exact vision and goals.',
} as const;

export const HOME_USE_CASES: UseCaseItem[] = [
  { emoji: '🏛', title: 'Governments and National Events', description: 'Independence days, national celebrations, state summits, diplomatic milestones, and cultural heritage moments.' },
  { emoji: '🎵', title: 'Entertainment and Concerts',      description: 'Festival closers, halftime spectacles, album drop activations, award show moments, and live tour experiences.' },
  { emoji: '🏷', title: 'Brand and Product Launches',      description: 'Luxury product reveals, flagship campaign launches, brand anniversaries, and experiential marketing activations.' },
  { emoji: '🏟', title: 'Sports Events',                   description: 'Opening ceremonies, championship nights, stadium spectacles, and sports tourism campaigns.' },
  { emoji: '🌍', title: 'Tourism and Cultural Campaigns',  description: 'Destination storytelling, heritage formation displays, and international tourism visibility campaigns.' },
  { emoji: '🏙', title: 'Smart Cities and Tech Summits',   description: 'Future-forward aerial activations for tech conferences, smart city unveilings, and innovation showcases.' },
];

export const HOME_USE_CASES_META = {
  sectionLabel: 'Sky Experiences Built for Every Stage',
  headline:     'Whatever the Occasion, We Command the Sky Above It',
} as const;

export const HOME_PROCESS_STEPS: ProcessStepItem[] = [
  { number: '01', title: 'Discovery and Brief',       description: 'We begin by deeply understanding your goals, audience, venue, timeline, and message. No two briefs are the same and no two shows should be either.' },
  { number: '02', title: 'Creative Concept',          description: 'Our creative team designs your sky story: formations, color palette, narrative arc, musical integration, and emotional journey from first drone to final frame.' },
  { number: '03', title: 'Technical Planning',        description: 'Flight paths, drone count, airspace permissions, regulatory filings, safety protocols, and site assessments are all handled in-house by our technical operations team.' },
  { number: '04', title: 'Simulation and Approval',   description: 'Before a single drone lifts off, you see a full 3D simulation of your show. We refine until every detail matches your vision, then you sign off.' },
  { number: '05', title: 'Flawless Live Execution',   description: 'Our trained ground crew deploys and orchestrates your show live with precision choreography, real-time monitoring, and contingency protocols for flawless delivery.' },
  { number: '06', title: 'Content and Amplification', description: 'We capture professional aerial footage and production content from the show, ready for your marketing campaigns, press coverage, and social media amplification.' },
];

export const HOME_PROCESS_META = {
  sectionLabel: 'Our Process',
  headline:     'From Vision to the Sky in Six Steps',
  subheadline:  'Every Sky Concert experience is a precision-engineered production. Here is how we bring your vision to life, from first conversation to live execution.',
} as const;

export const HOME_PROJECTS_META = {
  sectionLabel: 'Our Work',
  headline:     'The Sky Has No Limits. Neither Do We.',
  subheadline:  'A selection of sky-defining moments we have created: bold, breathtaking, and built to be remembered.',
  cta:          'Watch All Projects',
} as const;

export const HOME_WHY_US_PILLARS: PillarItem[] = [
  { id: 'global',      title: 'Global Expertise',              description: 'We operate with true international standards while adapting to local cultures, markets, regulatory environments, and audience behaviors across continents.' },
  { id: 'sustainable', title: 'Sustainable Innovation',        description: 'Our drone solutions are a cleaner, quieter, and more responsible alternative to traditional fireworks. Reusable, energy-efficient, and eco-conscious, built for the future.' },
  { id: 'safety',      title: 'Unmatched Safety and Excellence', description: 'Every operation is guided by strict technical standards, rigorous risk management, regulatory compliance, and highly trained professionals.' },
  { id: 'mastery',     title: 'Creative and Technical Mastery', description: 'We blend drone technology, precision engineering, creative design, and strategic marketing insight to produce powerful, shareable brand moments.' },
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
  body:         'Sky Concert Worldwide is built from the ground up to operate internationally, adapting our creative approach, technical logistics, and regulatory expertise to any market, any continent, any stage.',
  bullets: [
    'Capable of deployment across all 6 inhabited continents',
    'Full regulatory navigation and airspace compliance in international markets',
    'Culturally adaptive creative direction for diverse audiences and occasions',
    'Scalable fleet operations from intimate brand activations to massive national spectacles',
  ],
  stats: [
    { value: '6',    label: 'Continents'    },
    { value: '∞',    label: 'Markets Ready' },
    { value: '100%', label: 'Compliant'     },
  ],
} as const;

export const HOME_CTA = {
  sectionLabel: "Let's Build Something Legendary",
  headline:     'Ready to Own the Sky?',
  subheadline:  "Let us transform your next event, campaign, or celebration into a legendary aerial experience seen by millions and remembered forever.",
  cta1:         'Request a Custom Proposal',
  cta2:         'Book a Consultation',
  softCta:      'Download Our Capabilities Deck',
} as const;
