import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME, SERVICES_FAQ_ITEMS, SERVICES_FAQ_META } from '../constants';
import HeroSection from '../components/common/HeroSection';
import FAQAccordion from '../components/sections/faq/FAQAccordion';
import SectionLabel from '../components/common/SectionLabel';
import { useInView } from '../hooks/useInView';

export default function FAQPage() {
  useEffect(() => {
    document.title = `Frequently Asked Questions | ${SITE_NAME}`;
  }, []);

  const { ref, inView } = useInView();

  return (
    <>
      <HeroSection
        headline="Frequently Asked Questions"
        subheadline="Clear Answers Before You Book"
        supporting="Everything you need to know about planning, pricing, safety, logistics, and the drone show experience before your event."
        overlayIntensity="heavy"
      />

      <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
        <div
          ref={ref}
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel text={SERVICES_FAQ_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'white',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}>
            {SERVICES_FAQ_META.headline}
          </h2>
          <p style={{
            color: '#AAAAAA',
            fontSize: '1rem',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            {SERVICES_FAQ_META.subheadline}
          </p>

          <FAQAccordion items={SERVICES_FAQ_ITEMS} />
        </div>
      </section>

      {/* Still have questions section */}
      <section style={{
        background: 'transparent',
        padding: '2rem 1.5rem 6rem',
      }}>
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
        }}>
          <div className="card-base" style={{
            padding: '2.5rem',
            borderRadius: '2px',
            borderColor: 'rgba(0,229,255,0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.25rem',
                color: 'white',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}>
                Still have questions?
              </p>
              <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Our team is available to walk you through every detail of your event, from logistics to creative concept and regulatory requirements.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', flexShrink: 0 }}>
              <Link to="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Get in Touch <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
