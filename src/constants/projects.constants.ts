import type { ProjectItem } from '../types';

export const PROJECTS_HERO = {
  headline:    'Our Projects',
  subheadline: "Sky-defining moments we've created around the world.",
  supporting:  'From grand national celebrations to luxury brand launches and unforgettable live events — each project is a unique masterpiece painted in the sky.',
  cta:         'View All Work',
} as const;

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id:            'nye-city',
    title:         "New Year's Eve Celebration",
    subtitle:      'Major International City',
    stats:         '1,800 Drones  •  15-Minute Spectacle  •  Millions Reached',
    description:   'A breathtaking synchronized light show that told the story of hope and unity. The performance broke local records and became a global social media phenomenon.',
    tag:           'Light Show',
    category:      'government',
    isConceptOnly: true,
  },
  {
    id:            'luxury-launch',
    title:         'Luxury Brand Product Launch',
    subtitle:      'European Capital',
    stats:         '800 Drones  •  3D Storytelling Formation',
    description:   "We brought the brand's new flagship collection to life in the sky with dynamic 3D formations and smooth transitions, creating massive media coverage and exclusive brand moments.",
    tag:           'Aerial Branding',
    category:      'corporate',
    isConceptOnly: true,
  },
  {
    id:            'sports-halftime',
    title:         'National Sports Event Half-Time Show',
    subtitle:      '',
    stats:         '1,200 Drones  •  Live Integration with Stadium Lighting & Music',
    description:   'High-energy drone performance synchronized perfectly with live music and crowd cheers, delivering an unforgettable experience for 50,000+ fans in the stadium and millions watching on television.',
    tag:           'Hybrid Experience',
    category:      'sports',
    isConceptOnly: true,
  },
  {
    id:            'tourism-heritage',
    title:         'Government Tourism Campaign',
    subtitle:      'Cultural Heritage',
    stats:         '900 Drones  •  Emotional Storytelling',
    description:   "Beautiful aerial formations celebrated the nation's rich history and natural beauty, significantly boosting international tourism interest.",
    tag:           '3D Storytelling',
    category:      'tourism',
    isConceptOnly: true,
  },
];

export const PROJECT_FILTER_CATEGORIES = [
  { id: 'all',        label: 'All Projects'          },
  { id: 'light-show', label: 'Light Shows'            },
  { id: 'branding',   label: 'Aerial Branding'        },
  { id: '3d',         label: '3D Storytelling'        },
  { id: 'government', label: 'National & Government'  },
  { id: 'corporate',  label: 'Corporate & Luxury'     },
  { id: 'sports',     label: 'Sports & Entertainment' },
  { id: 'tourism',    label: 'Tourism Campaigns'      },
] as const;

export const PROJECTS_HIGHLIGHT = {
  sectionLabel: 'Why Our Projects Stand Out',
  bullets: [
    'Fully customized to client goals — no two shows are the same',
    'Seamless blend of technology and storytelling',
    'Exceptional visual quality and precision execution',
    'Strong emphasis on sustainability and safety',
    'High shareability and media impact — built for press and social amplification',
  ],
} as const;

export const PROJECTS_CTA = {
  headline:    'Ready to Add Your Story to Our Sky?',
  subheadline: "Let's create your own legendary aerial moment.",
  cta1:        'Start Your Project',
  cta2:        'Request a Custom Concept',
} as const;
