import SectionLabel from '../../common/SectionLabel';
import { useInView } from '../../../hooks/useInView';
import { ABOUT_PHILOSOPHY } from '../../../constants/about.constants';

export default function OurPhilosophy() {
  const { ref, inView } = useInView();
  return (
    <section style={{
      background: 'transparent',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div
        ref={ref}
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <SectionLabel text={ABOUT_PHILOSOPHY.sectionLabel} />
        <h2 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          color: '#C9A84C',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          marginBottom: '2rem',
        }}>
          {ABOUT_PHILOSOPHY.headline}
        </h2>
        {ABOUT_PHILOSOPHY.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 2 ? '#CCCCCC' : '#AAAAAA',
            fontSize: i === 2 ? '1.05rem' : '1rem',
            lineHeight: 1.85,
            marginBottom: '1.25rem',
            fontStyle: i === 2 ? 'italic' : 'normal',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
