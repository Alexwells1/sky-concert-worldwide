export const CONTACT_HERO = {
  headline:    "Let's Create Something Extraordinary Together",
  subheadline: 'Ready to own the sky? Tell us about your vision, event, or campaign. Our team will get back to you within 24 hours.',
} as const;

export const CONTACT_FORM_META = {
  headline:    'Get In Touch',
  submitLabel: 'Send Message',
  trustItems: [
    'Response Within 24 Hours',
    'We Respect Your Time',
  ],
} as const;

export const PROJECT_TYPE_OPTIONS = [
  { value: '',                 label: 'Type of Project'           },
  { value: 'drone-light-show', label: 'Drone Light Show'          },
  { value: 'aerial-branding',  label: 'Aerial Branding'           },
  { value: '3d-storytelling',  label: '3D Storytelling'           },
  { value: 'government-event', label: 'National / Government Event' },
  { value: 'corporate',        label: 'Corporate Activation'      },
  { value: 'other',            label: 'Other'                     },
] as const;

export const DIRECT_CONTACT_META = {
  headline: "Let's Talk",
} as const;

export const GLOBAL_PRESENCE_META = {
  sectionLabel: 'Global Operations',
  headline:     'We Operate Worldwide',
  body:         'Sky Concert Worldwide is positioned to serve clients across continents with full international standards and local expertise.',
  headOffice:   'Lagos, Nigeria',
  regions:      'Europe  •  Middle East  •  Africa  •  Asia  •  Americas',
  note:         'We adapt seamlessly to different time zones, regulations, and cultural expectations.',
} as const;

export const WHATS_NEXT_STEPS = [
  { number: '01', title: 'Initial Consultation',  description: 'We listen to your goals and vision.'                                          },
  { number: '02', title: 'Custom Proposal',        description: 'We prepare a tailored concept, scale, and investment overview.'               },
  { number: '03', title: 'Creative Presentation',  description: 'Storyboard and 3D simulation (if required).'                                  },
  { number: '04', title: 'Contract & Planning',    description: 'Clear timelines and execution plan.'                                          },
  { number: '05', title: 'Sky Delivery',           description: 'Flawless show and content delivery.'                                          },
] as const;

export const WHATS_NEXT_META = {
  sectionLabel: 'What Happens Next',
  headline:     'What Happens After You Reach Out',
} as const;

export const CONTACT_CTA = {
  headline:    'Ready to Light Up the Sky?',
  subheadline: "Don't wait. The best moments are created by those who dare to dream big.",
  cta:         'Send Your Inquiry',
  closing:     "We can't wait to bring your vision to life.",
} as const;
