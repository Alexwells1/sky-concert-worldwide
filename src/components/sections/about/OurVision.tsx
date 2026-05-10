import SectionLabel from '../../common/SectionLabel';
import { ABOUT_VISION } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function OurVision() {
  const { ref, inView } = useInView();
  return (
    <section style={{
      background: '#0A0F1E',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(0,229,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div
        ref={ref}
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <SectionLabel text={ABOUT_VISION.sectionLabel} />
        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          marginBottom: '1.5rem',
        }}>
          {ABOUT_VISION.headline}
        </h2>
        <p style={{
          color: '#AAAAAA',
          fontSize: '1.05rem',
          lineHeight: 1.85,
        }}>
          {ABOUT_VISION.body}
        </p>
      </div>
    </section>
  );
}
