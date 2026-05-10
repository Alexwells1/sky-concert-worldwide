import { Check, X } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { COMPARISON_ROWS, COMPARISON_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ComparisonTable() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#060A14', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionLabel text={COMPARISON_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', lineHeight: 1.2,
          }}>
            {COMPARISON_META.headline}
          </h2>
        </div>

        {/* Desktop table */}
        <div ref={ref} style={{
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          overflowX: 'auto',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#0A1A2E' }}>
                <th style={{
                  padding: '1.25rem 1.5rem', textAlign: 'left',
                  fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666',
                  borderBottom: '1px solid rgba(0,229,255,0.1)',
                }}>
                  Category
                </th>
                <th style={{
                  padding: '1.25rem 1.5rem', textAlign: 'left',
                  fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00E5FF',
                  borderBottom: '1px solid rgba(0,229,255,0.1)',
                }}>
                  {COMPARISON_META.ourLabel}
                </th>
                <th style={{
                  padding: '1.25rem 1.5rem', textAlign: 'left',
                  fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555',
                  borderBottom: '1px solid rgba(0,229,255,0.1)',
                }}>
                  {COMPARISON_META.theirLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.category} style={{ background: i % 2 === 0 ? '#0D1426' : '#0A0F1E' }}>
                  <td style={{
                    padding: '1.1rem 1.5rem',
                    fontFamily: '"Space Mono", monospace', fontSize: '0.65rem',
                    color: '#888', borderBottom: '1px solid rgba(255,255,255,0.03)',
                    letterSpacing: '0.05em',
                  }}>
                    {row.category}
                  </td>
                  <td style={{
                    padding: '1.1rem 1.5rem',
                    background: 'rgba(0,229,255,0.03)',
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                    borderLeft: '1px solid rgba(0,229,255,0.08)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} style={{ color: '#00E5FF', flexShrink: 0 }} />
                      <span style={{ color: '#CCCCCC', fontSize: '0.85rem' }}>{row.skyConcert}</span>
                    </div>
                  </td>
                  <td style={{
                    padding: '1.1rem 1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <X size={14} style={{ color: '#555', flexShrink: 0 }} />
                      <span style={{ color: '#555', fontSize: '0.85rem' }}>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
