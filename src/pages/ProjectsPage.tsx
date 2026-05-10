import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME, PROJECTS_HERO, PROJECTS_CTA } from '../constants';
import HeroSection from '../components/common/HeroSection';
import FeaturedProjects from '../components/sections/projects/FeaturedProjects';
import ProjectsGrid from '../components/sections/projects/ProjectsGrid';
import ProjectsHighlight from '../components/sections/projects/ProjectsHighlight';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = `Our Drone Shows & Aerial Projects | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <HeroSection
        headline={PROJECTS_HERO.headline}
        subheadline={PROJECTS_HERO.subheadline}
        supporting={PROJECTS_HERO.supporting}
        overlayIntensity="medium"
      />
      <FeaturedProjects />
      <ProjectsGrid />
      <ProjectsHighlight />

      {/* Projects CTA */}
      <section style={{
        background: '#060A14',
        padding: '6rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'white',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            marginBottom: '1rem',
          }}>
            {PROJECTS_CTA.headline}
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {PROJECTS_CTA.subheadline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">
              {PROJECTS_CTA.cta1} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {PROJECTS_CTA.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
