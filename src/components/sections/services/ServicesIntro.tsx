import { SERVICES_INTRO } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ServicesIntro() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '5rem 1.5rem' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {SERVICES_INTRO.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 0 ? '#CCCCCC' : '#AAAAAA',
            fontSize: i === 0 ? '1.1rem' : '1rem',
            lineHeight: 1.85,
            marginBottom: '1.25rem',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
