import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CONTACT_HERO, CONTACT_CTA } from '../constants';
import HeroSection from '../components/common/HeroSection';
import ContactForm from '../components/sections/contact/ContactForm';
import DirectContact from '../components/sections/contact/DirectContact';
import GlobalPresence from '../components/sections/contact/GlobalPresence';
import WhatsNext from '../components/sections/contact/WhatsNext';

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact Sky Concert Worldwide | Drone Light Show Enquiries`;
  }, []);

  return (
    <>
      <HeroSection
        headline={CONTACT_HERO.headline}
        subheadline={CONTACT_HERO.subheadline}
        overlayIntensity="medium"
      />
      <ContactForm />
      <DirectContact />
      <GlobalPresence />
      <WhatsNext />

      {/* Contact page final CTA strip */}
      <section style={{
        background: '#0A0F1E',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,229,255,0.06)',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'white',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            marginBottom: '0.75rem',
          }}>
            {CONTACT_CTA.headline}
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            {CONTACT_CTA.subheadline}
          </p>
          <Link to="#contact-form" className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {CONTACT_CTA.cta} <ArrowRight size={14} />
          </Link>
          <p style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            color: '#666',
            fontSize: '0.875rem',
            marginTop: '1.5rem',
          }}>
            {CONTACT_CTA.closing}
          </p>
        </div>
      </section>
    </>
  );
}
