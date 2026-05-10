import SectionLabel from '../../common/SectionLabel';
import { HOME_INTRO } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function HomeIntro() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#0A0F1E', padding: '6rem 1.5rem' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          textAlign: 'center',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
        }}
      >
        <SectionLabel text={HOME_INTRO.sectionLabel} />
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          color: 'white',
          lineHeight: 1.2,
          marginBottom: '2rem',
        }}>
          {HOME_INTRO.headline}
        </h2>
        {HOME_INTRO.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 0 ? '#CCCCCC' : '#AAAAAA',
            fontSize: '1rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
