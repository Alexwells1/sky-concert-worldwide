import type { ProjectItem } from "../types";

export const PROJECTS_HERO = {
  headline: "Our Projects",
  subheadline: "Sky-Defining Moments Created Around the World",
  supporting:
    "From grand national celebrations and luxury brand launches to unforgettable live events and sports spectacles, each project is a unique masterpiece painted in the sky.",
} as const;

const VIDEO_1 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690984/Sports_Showreel_Lowress_wokg96.mp4";
const VIDEO_2 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690969/Africa_Wedding_Storyboard_3_inscn0.mp4";
const VIDEO_3 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690965/Nigeria_Bld_h9m1jr.mp4";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Sky Concert",
    subtitle: "Aerial Drone Light Show",
    stats: "500+ Drones",
    description:
      "Large-scale synchronized drone light show painting formations and brand narratives across the night sky.",
    tag: "Light Show",
    category: "government",
    isConceptOnly: false,
    videoUrl: VIDEO_1,
  },
  {
    id: "project-2",
    title: "Sky Concert",
    subtitle: "Aerial Wedding Experience",
    stats: "Custom Formation",
    description:
      "A personal aerial performance choreographed around a couple's love story forming hearts and sky moments guests remember forever.",
    tag: "Wedding Experience",
    category: "corporate",
    isConceptOnly: false,
    videoUrl: VIDEO_2,
  },
  {
    id: "project-3",
    title: "Sky Concert",
    subtitle: "National Showcase",
    stats: "National Scale",
    description:
      "High-energy drone performance fusing precision formation flying, patriotic color storytelling, and iconic skyline backdrops.",
    tag: "National Event",
    category: "sports",
    isConceptOnly: false,
    videoUrl: VIDEO_3,
  },
];

export const PROJECT_FILTER_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "light-show", label: "Light Shows" },
  { id: "branding", label: "Aerial Branding" },
  { id: "3d", label: "3D Storytelling" },
  { id: "government", label: "National and Government" },
  { id: "corporate", label: "Corporate and Luxury" },
  { id: "sports", label: "Sports and Entertainment" },
  { id: "tourism", label: "Tourism Campaigns" },
] as const;

export const PROJECTS_SHOWCASE_META = {
  sectionLabel: "Event Showcase",
  headline: "Experience the Work",
  subheadline:
    "Every project we deliver is a fully bespoke production designed around the client's vision, audience, and goals. Browse our showcase below.",
} as const;

export const PROJECTS_HIGHLIGHT = {
  sectionLabel: "Why Our Projects Stand Out",
  headline: "Every Show Is a World-Class Production",
  bullets: [
    "Fully customized to each client's vision and goals. No two shows are ever the same.",
    "Seamless blend of advanced drone technology and world-class creative storytelling.",
    "Exceptional visual quality, precision execution, and flawless live delivery.",
    "Strong sustainability standards with zero ground waste and minimal environmental impact.",
    "High shareability and media impact built for press coverage and social media amplification.",
  ],
} as const;

export const PROJECTS_CTA = {
  headline: "Ready to Add Your Story to Our Sky?",
  subheadline:
    "Let us create a bespoke aerial experience designed around your vision, your audience, and your goals.",
  cta1: "Start Your Project",
  cta2: "Request a Custom Concept",
} as const;
