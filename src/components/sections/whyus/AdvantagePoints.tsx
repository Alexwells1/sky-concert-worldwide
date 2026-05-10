import { Check, Globe } from 'lucide-react';
import { ADVANTAGE_POINTS } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

function AdvantageBlock({ item, index }: { item: typeof ADVANTAGE_POINTS[number]; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;
  return (
    <div ref={ref} style={{
      padding: '4rem 1.5rem',
      background: isEven ? '#060A14' : '#0A0F1E',
      borderTop: '1px solid rgba(0,229,255,0.06)',
      opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
          <span style={{
            fontFamily: '"Bebas Neue", cursive', fontSize: '3.5rem',
            color: 'rgba(201,168,76,0.3)', lineHeight: 1,
          }}>
            {item.number}
          </span>
          <h3 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'white', lineHeight: 1.2,
          }}>
            {item.title}
          </h3>
        </div>
        <p style={{ color: '#CCCCCC', fontSize: '1rem', lineHeight: 1.85, marginBottom: item.bullets.length ? '1.5rem' : 0, maxWidth: '720px' }}>
          {item.intro}
        </p>
        {item.bullets.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {item.bullets.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <Check size={15} style={{ color: '#00E5FF', marginTop: '2px', flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
        )}
        {item.closing && (
          <p style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontSize: '1.05rem', color: '#C9A84C',
          }}>
            {item.closing}
          </p>
        )}
        {item.hasMap && (
          <div style={{
            marginTop: '2rem', background: '#0D1426',
            border: '1px solid rgba(0,229,255,0.1)', borderRadius: '2px',
            padding: '2rem', textAlign: 'center', maxWidth: '500px',
          }}>
            {/* IMAGE PLACEHOLDER: World map with glowing regional dots */}
            <Globe size={60} style={{ color: 'rgba(0,229,255,0.15)', margin: '0 auto 1rem' }} />
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.55rem', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Europe • Middle East • Africa • Asia • Americas • Oceania
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdvantagePoints() {
  return (
    <div>
      {ADVANTAGE_POINTS.map((item, i) => (
        <AdvantageBlock key={item.number} item={item} index={i} />
      ))}
    </div>
  );
}
