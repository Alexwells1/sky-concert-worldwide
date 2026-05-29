import type { NavLink, SocialLink, ContactInfo } from "../types";

export const SITE_NAME = "Sky Concert Worldwide";
export const SITE_TAGLINE = "Architects of Attention. Creators of Wonder.";
export const SITE_DESCRIPTION =
  "Sky Concert Worldwide crafts breathtaking aerial drone experiences that captivate millions, elevate brands, and create moments the world stops to watch.";

export const LOGO_TEXT = {
  prefix: "SKY ",
  highlight: "CONCERT",
  suffix: " WORLDWIDE",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const NAV_CTA: NavLink = {
  label: "Start Your Campaign",
  href: "/contact",
};

export const FOOTER_TAGLINE =
  "Architects of Attention. Creators of Wonder. Partners in Global Brand Elevation.";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/skyconcertworldwide/",
    iconName: "Instagram",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/sky-concert-worldwide",
    iconName: "Linkedin",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/channel/UCLx-SZ4mCSGTCxMKqeqdUBA",
    iconName: "Youtube",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "skyconcertworldwide@gmail.com",
  phone: "+2348151994696",
  emergencyEmail: "skyconcertworldwide@gmail.com",
  responseTime: "Within 24 business hours",
};

export const LEGAL_TEXT = "© 2026 Sky Concert Worldwide. All rights reserved.";

export const TRUST_LINE =
  "Global Operations  •  Sustainable Innovation  •  Flawless End-to-End Execution";

export const DESIGN_TOKENS = {
  colors: {
    cyan: "#00E5FF",
    gold: "#C9A84C",
    dark: "#0A0F1E",
    darker: "#060A14",
  },
} as const;
