import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME, SERVICES_HERO, SERVICES_CTA } from '../constants';
import HeroSection from '../components/common/HeroSection';
import ServicesIntro from '../components/sections/services/ServicesIntro';
import CoreServices from '../components/sections/services/CoreServices';
import TechAdvantage from '../components/sections/services/TechAdvantage';
import ServiceProcess from '../components/sections/services/ServiceProcess';
import SustainableDesign from '../components/sections/services/SustainableDesign';

export default function ServicesPage() {
  useEffect(() => {
    document.title = `Drone Light Show Services | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <HeroSection
        headline={SERVICES_HERO.headline}
        subheadline={SERVICES_HERO.subheadline}
        supporting={SERVICES_HERO.supporting}
        overlayIntensity="medium"
      />
      <ServicesIntro />
      <CoreServices />
      <TechAdvantage />
      <ServiceProcess />
      <SustainableDesign />

      {/* Services CTA */}
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
            {SERVICES_CTA.headline}
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {SERVICES_CTA.subheadline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">
              {SERVICES_CTA.cta1} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              {SERVICES_CTA.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
