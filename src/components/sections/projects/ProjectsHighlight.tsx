import { Check } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { PROJECTS_HIGHLIGHT } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ProjectsHighlight() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#0A0F1E', padding: '5rem 1.5rem' }}>
      <div ref={ref} style={{
        maxWidth: '80rem', margin: '0 auto',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <SectionLabel text={PROJECTS_HIGHLIGHT.sectionLabel} />
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem',
        }}>
          {PROJECTS_HIGHLIGHT.bullets.map((b) => (
            <div key={b} style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              flex: '1 1 280px',
              padding: '1.25rem',
              background: '#0D1426',
              border: '1px solid rgba(0,229,255,0.06)',
              borderRadius: '2px',
            }}>
              <Check size={16} style={{ color: '#00E5FF', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: '#CCCCCC', fontSize: '0.9rem', lineHeight: 1.6 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
