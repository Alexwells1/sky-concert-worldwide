import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { HOME_CTA } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function HomeCTA() {
  const { ref, inView } = useInView();
  return (
    <section style={{
      background: 'transparent',
      padding: '7rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div
        ref={ref}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <SectionLabel text={HOME_CTA.sectionLabel} />
        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          marginBottom: '1.25rem',
          textShadow: '0 0 80px rgba(0,229,255,0.15)',
        }}>
          {HOME_CTA.headline}
        </h2>
        <p style={{
          color: '#AAAAAA',
          fontSize: '1.05rem',
          lineHeight: 1.75,
          marginBottom: '2.5rem',
          maxWidth: '560px',
          margin: '0 auto 2.5rem',
        }}>
          {HOME_CTA.subheadline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link to="/contact" className="btn-primary">
            {HOME_CTA.cta1} <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-secondary">
            {HOME_CTA.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
