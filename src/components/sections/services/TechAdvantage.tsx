import { Check } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { SERVICES_TECH } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function TechAdvantage() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#0A0F1E', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            background: '#0D1426',
            border: '1px solid rgba(0,229,255,0.1)',
            borderRadius: '2px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <SectionLabel text={SERVICES_TECH.sectionLabel} />
          </div>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '2rem',
            maxWidth: '600px',
          }}>
            {SERVICES_TECH.headline}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {SERVICES_TECH.bullets.map((b) => (
              <li key={b} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                color: '#CCCCCC', fontSize: '0.95rem', lineHeight: 1.6,
                padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}>
                <Check size={16} style={{ color: '#00E5FF', marginTop: '3px', flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
          <p style={{
            fontFamily: '"Space Mono", monospace', fontSize: '0.7rem',
            color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>
            {SERVICES_TECH.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
