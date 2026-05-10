import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME, WHYUS_HERO, WHYUS_CTA } from '../constants';
import HeroSection from '../components/common/HeroSection';
import OurDifference from '../components/sections/whyus/OurDifference';
import AdvantagePoints from '../components/sections/whyus/AdvantagePoints';
import ComparisonTable from '../components/sections/whyus/ComparisonTable';

export default function WhyUsPage() {
  useEffect(() => {
    document.title = `Why Choose Sky Concert Worldwide | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <HeroSection
        headline={WHYUS_HERO.headline}
        subheadline={WHYUS_HERO.subheadline}
        supporting={WHYUS_HERO.supporting}
        overlayIntensity="light"
      />
      <OurDifference />
      <AdvantagePoints />
      <ComparisonTable />

      {/* Why Us CTA */}
      <section style={{
        background: '#0A0F1E',
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
            {WHYUS_CTA.headline}
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {WHYUS_CTA.subheadline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">
              {WHYUS_CTA.cta1} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {WHYUS_CTA.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
