import type { ProjectItem } from "../types";

export const PROJECTS_HERO = {
  headline: "Our Projects",
  subheadline: "Sky-defining moments we've created around the world.",
  supporting:
    "From grand national celebrations to luxury brand launches and unforgettable live events — each project is a unique masterpiece painted in the sky.",
  cta: "View All Work",
} as const;


const VIDEO_1 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690984/Sports_Showreel_Lowress_wokg96.mp4";
const VIDEO_2 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690969/Africa_Wedding_Storyboard_3_inscn0.mp4";
const VIDEO_3 =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690965/Nigeria_Bld_h9m1jr.mp4";
// ─────────────────────────────────────────────────────────────────────────────

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Sky Concert — Project 1",
    subtitle: "Aerial Drone Experience",
    stats: "",
    description:
      "A stunning synchronized drone light show painting breathtaking formations across the night sky.",
    tag: "Light Show",
    category: "government",
    isConceptOnly: false,
    videoUrl: VIDEO_1,
  },
  {
    id: "project-2",
    title: "Sky Concert — Project 2",
    subtitle: "Brand Aerial Activation",
    stats: "",
    description:
      "A cinematic aerial performance bringing a brand story to life with precision and visual impact.",
    tag: "Aerial Branding",
    category: "corporate",
    isConceptOnly: false,
    videoUrl: VIDEO_2,
  },
  {
    id: "project-3",
    title: "Sky Concert — Project 3",
    subtitle: "Live Entertainment Experience",
    stats: "",
    description:
      "High-energy drone performance fused with live music delivering an unforgettable multi-sensory experience.",
    tag: "Hybrid Experience",
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
  { id: "government", label: "National & Government" },
  { id: "corporate", label: "Corporate & Luxury" },
  { id: "sports", label: "Sports & Entertainment" },
  { id: "tourism", label: "Tourism Campaigns" },
] as const;

export const PROJECTS_HIGHLIGHT = {
  sectionLabel: "Why Our Projects Stand Out",
  bullets: [
    "Fully customized to client goals — no two shows are the same",
    "Seamless blend of technology and storytelling",
    "Exceptional visual quality and precision execution",
    "Strong emphasis on sustainability and safety",
    "High shareability and media impact — built for press and social amplification",
  ],
} as const;

export const PROJECTS_CTA = {
  headline: "Ready to Add Your Story to Our Sky?",
  subheadline: "Let's create your own legendary aerial moment.",
  cta1: "Start Your Project",
  cta2: "Request a Custom Concept",
} as const;
