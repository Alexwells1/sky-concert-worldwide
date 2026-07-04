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
  closing, bg = 'var(--color-surface-3)',
}: PageCTAProps) {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: bg, padding: 'var(--space-8) var(--space-6)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 60%)',
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
          transition: 'opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)',
        }}
      >
        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          color: 'var(--foreground)',
          lineHeight: 0.95,
          letterSpacing: 'var(--tracking-normal)',
          marginBottom: 'var(--space-5)',
          textShadow: '0 0 60px rgba(var(--primary-rgb), 0.12)',
        }}>
          {headline}
        </h2>
        <p style={{
          color: 'var(--muted-foreground)',
          fontSize: 'var(--text-base)',
          lineHeight: 1.75,
          marginBottom: 'var(--space-10)',
        }}>
          {subheadline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'center', marginBottom: closing ? '1.5rem' : 0 }}>
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
            color: 'var(--muted)',
            fontSize: 'var(--text-body-lg)',
          }}>
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}
