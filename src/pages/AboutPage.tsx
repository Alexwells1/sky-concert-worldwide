import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME, ABOUT_HERO, ABOUT_CTA } from '../constants';
import HeroSection from '../components/common/HeroSection';
import OurStory from '../components/sections/about/OurStory';
import WhoWeAre from '../components/sections/about/WhoWeAre';
import OurPhilosophy from '../components/sections/about/OurPhilosophy';
import OurApproach from '../components/sections/about/OurApproach';
import OurVision from '../components/sections/about/OurVision';

export default function AboutPage() {
  useEffect(() => {
    document.title = `About Us | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <HeroSection
        headline={ABOUT_HERO.headline}
        subheadline={ABOUT_HERO.subheadline}
        supporting={ABOUT_HERO.supporting}
        overlayIntensity="heavy"
      />
      <OurStory />
      <WhoWeAre />
      <OurPhilosophy />
      <OurApproach />
      <OurVision />

      {/* About CTA */}
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
            {ABOUT_CTA.headline}
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {ABOUT_CTA.subheadline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">
              {ABOUT_CTA.cta1} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {ABOUT_CTA.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
