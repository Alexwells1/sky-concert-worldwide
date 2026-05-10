import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

interface PageCTAProps {
  headline: string;
  subheadline: string;
  cta1: string;
  cta2?: string;
  cta1Href?: string;
  cta2Href?: string;
  closing?: string;
  bg?: string;
}

export default function PageCTA({
  headline, subheadline, cta1, cta2,
  cta1Href = '/contact', cta2Href = '/contact',
  closing, bg = '#060A14',
}: PageCTAProps) {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: bg, padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div
        ref={ref}
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          marginBottom: '1.25rem',
          textShadow: '0 0 60px rgba(0,229,255,0.12)',
        }}>
          {headline}
        </h2>
        <p style={{
          color: '#AAAAAA',
          fontSize: '1rem',
          lineHeight: 1.75,
          marginBottom: '2.5rem',
        }}>
          {subheadline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: closing ? '1.5rem' : 0 }}>
          <Link to={cta1Href} className="btn-primary">
            {cta1} <ArrowRight size={14} />
          </Link>
          {cta2 && (
            <Link to={cta2Href} className="btn-secondary">
              {cta2}
            </Link>
          )}
        </div>
        {closing && (
          <p style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            color: '#555',
            fontSize: '0.95rem',
          }}>
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}
