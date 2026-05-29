export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  media?: string; 
  idealFor?: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  wide?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  stats: string;
  description: string;
  tag: string;
  category: string;
  isConceptOnly: boolean;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface UseCaseItem {
  emoji: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  number: string;
  title: string;
  intro: string;
  bullets: string[];
  closing?: string;
  hasMap?: boolean;
}

export interface ComparisonRow {
  category: string;
  skyConcert: string;
  traditional: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  emergencyEmail: string;
  responseTime: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export interface SectionLabelProps {
  text: string;
  className?: string;
}

export interface HeroSectionProps {
  headline: string;
  subheadline: string;
  supporting?: string;
  overlayIntensity?: 'light' | 'medium' | 'heavy';
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
