import { SERVICES_INTRO } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ServicesIntro() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: 'var(--space-8) var(--space-6)' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)',
        }}
      >
        {SERVICES_INTRO.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 0 ? 'var(--muted-foreground-2)' : 'var(--muted-foreground)',
            fontSize: i === 0 ? '1.1rem' : '1rem',
            lineHeight: 1.85,
            marginBottom: 'var(--space-5)',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
