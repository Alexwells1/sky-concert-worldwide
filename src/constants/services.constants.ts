import type { ServiceItem, ProcessStepItem } from '../types';

export const SERVICES_HERO = {
  headline:    'Services',
  subheadline: 'We Craft Unforgettable Experiences in the Sky',
  supporting:  'From breathtaking synchronized light shows to powerful aerial storytelling and branded spectacles, we deliver custom drone experiences that captivate audiences and elevate brands.',
} as const;

export const SERVICES_INTRO = {
  paragraphs: [
    'At Sky Concert Worldwide, we combine cutting-edge drone technology, creative storytelling, precision engineering, and strategic insight to create sky experiences tailored to your exact objectives.',
    'Whether you want to launch a product, celebrate a nation, energize a concert, or create a luxury brand moment, we transform your vision into spectacular aerial reality.',
  ],
} as const;

export const CORE_SERVICES: ServiceItem[] = [
  { id: 'light-shows',      number: '01', title: 'Synchronized Drone Light Shows',       description: 'We orchestrate hundreds to thousands of intelligent drones to create mesmerizing, perfectly timed performances set to music. From elegant flowing patterns to high-energy animations, our light shows turn the night sky into a breathtaking canvas.', idealFor: "Concerts, festivals, New Year's Eve, national celebrations, and large public events." },
  { id: 'aerial-branding',  number: '02', title: 'Aerial Logo Displays & Branding',      description: 'Make your brand impossible to ignore. We create massive, crystal-clear aerial logos, animated visuals, and product representations visible from kilometers away. Our high-resolution LED systems ensure sharp, vibrant branding even in challenging environments.', idealFor: 'Product launches, corporate activations, sponsorships, and major campaigns.' },
  { id: '3d-storytelling',  number: '03', title: '3D Storytelling Formations',           description: 'Bring your story to life in three dimensions. Using advanced choreography, our drones form dynamic shapes, transforming scenes, and emotional narratives that move across the sky — creating powerful, memorable storytelling experiences.', idealFor: 'Brand campaigns, tourism promotion, historical tributes, and luxury showcases.' },
  { id: 'nighttime',        number: '04', title: 'Nighttime Spectacles & Hybrid Experiences', description: 'Deliver jaw-dropping multi-sensory shows by combining drone swarms with lasers, music, fireworks, ground lighting, and live performances. These large-scale productions create magical moments that audiences will talk about for years.', idealFor: 'Stadium events, festivals, and grand celebrations.' },
  { id: 'live-events',      number: '05', title: 'Branded Live Event Experiences',       description: 'Seamlessly integrate drones into live events for maximum impact. From stadium half-time shows and arena openings to private luxury events and corporate galas — we enhance the atmosphere and amplify your message.', idealFor: undefined },
  { id: 'custom-campaigns', number: '06', title: 'Fully Custom Campaign Solutions',      description: 'Every challenge is unique. We design completely bespoke drone experiences from concept to execution, carefully aligned with your marketing goals, audience, and desired outcomes.', idealFor: undefined },
];

export const SERVICES_TECH = {
  sectionLabel: 'Technology Advantage',
  headline:     "Built on the World's Most Advanced Drone Show Technology",
  bullets: [
    'Precision RTK-GPS and swarm intelligence software for flawless synchronization',
    'High-brightness, energy-efficient LED payloads',
    'Advanced 3D simulation and real-time mission control',
    'Redundant safety systems and triple-layered geofencing',
    'Scalable solutions — from intimate shows to record-breaking large fleets',
  ],
  closing: 'Every performance is engineered for reliability, visual impact, and safety.',
} as const;

export const SERVICES_PROCESS_STEPS: ProcessStepItem[] = [
  { number: '01', title: 'Discovery',          description: 'Understanding your goals, audience, and event objectives.' },
  { number: '02', title: 'Creative Concept',   description: 'Story development and stunning visual design.' },
  { number: '03', title: 'Technical Planning', description: 'Precise choreography, simulations, and regulatory approvals.' },
  { number: '04', title: 'Production',         description: 'Building, testing, and rehearsing the show.' },
  { number: '05', title: 'Live Execution',     description: 'Flawless delivery by our expert team.' },
  { number: '06', title: 'Content Delivery',  description: 'Professional footage and highlights for your marketing.' },
];

export const SERVICES_PROCESS_META = {
  sectionLabel: 'Our Process',
  headline:     'From Vision to Sky',
} as const;

export const SERVICES_SUSTAINABILITY = {
  sectionLabel: 'Sustainable by Design',
  intro:        'We are committed to responsible innovation. Our drone experiences offer a cleaner, quieter, and more sustainable alternative to traditional fireworks and heavy staging.',
  bullets: [
    'Zero ground waste',
    'Significantly reduced noise pollution',
    'Reusable technology',
    'Lower environmental impact',
  ],
  closing: 'Create spectacular moments — responsibly.',
} as const;

export const SERVICES_CTA = {
  headline:    'Ready to Elevate Your Next Moment?',
  subheadline: 'Let Sky Concert Worldwide design a custom aerial experience that matches your ambition.',
  cta1:        'Request a Custom Proposal',
  cta2:        'Discuss Your Project',
} as const;
