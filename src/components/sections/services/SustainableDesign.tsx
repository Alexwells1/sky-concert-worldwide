import { Check } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { SERVICES_SUSTAINABILITY } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function SustainableDesign() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr',
          gap: '3rem', alignItems: 'center',
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
             <SectionLabel text={SERVICES_SUSTAINABILITY.sectionLabel} />
            </div>
            <p style={{ color: '#CCCCCC', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '640px' }}>
              {SERVICES_SUSTAINABILITY.intro}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SERVICES_SUSTAINABILITY.bullets.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#CCCCCC', fontSize: '0.95rem' }}>
                  <Check size={16} style={{ color: '#4ade80', flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>
            <p style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontSize: '1.15rem', color: '#4ade80',
            }}>
              {SERVICES_SUSTAINABILITY.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
