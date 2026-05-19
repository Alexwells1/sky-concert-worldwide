import { Check } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { HOME_GLOBAL } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function GlobalReach() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div>
            <SectionLabel text={HOME_GLOBAL.sectionLabel} />
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              {HOME_GLOBAL.headline}
            </h2>
            <p style={{ color: '#AAAAAA', lineHeight: 1.8, marginBottom: '2rem' }}>
              {HOME_GLOBAL.body}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {HOME_GLOBAL.bullets.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#CCCCCC', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: '#00E5FF', marginTop: '2px', flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
}
