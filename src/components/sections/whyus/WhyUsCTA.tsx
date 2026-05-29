import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { WHYUS_CTA } from '../../../constants';

export default function WhyUsCTA() {
  const { ref, inView } = useInView();

  return (
    <section style={{
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#020810',
    }}>
      {/* Atmospheric background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(2,8,16,0.88) 0%, rgba(2,8,16,0.72) 50%, rgba(2,8,16,0.96) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div
        ref={ref}
        style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center',
          padding: '4rem 1.5rem',
          maxWidth: '860px',
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <span style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: '#C9A84C',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '2.5rem',
        }}>
          Rise Above
        </span>

        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(3.5rem, 9vw, 9.5rem)',
          color: 'white',
          lineHeight: 0.85,
          letterSpacing: '0.02em',
          marginBottom: '2.5rem',
        }}>
          Ready to Rise<br />
          <span style={{
            WebkitTextStroke: '1px rgba(201,168,76,0.55)',
            color: 'transparent',
          }}>
            Above the Rest?
          </span>
        </h2>

        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(185,185,185,0.8)',
          lineHeight: 1.75,
          marginBottom: '4rem',
          maxWidth: '520px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {WHYUS_CTA.subheadline}
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link
            to="/contact"
            className="btn-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.85rem', padding: '1rem 2.5rem',
            }}
          >
            {WHYUS_CTA.cta1} <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="btn-secondary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.85rem', padding: '1rem 2.5rem',
            }}
          >
            {WHYUS_CTA.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
