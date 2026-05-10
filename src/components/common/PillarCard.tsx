import type { PillarItem } from '../../types';

interface PillarCardProps {
  item: PillarItem;
}

export default function PillarCard({ item }: PillarCardProps) {
  return (
    <div
      className="card-base"
      style={{
        padding: '2rem',
        borderRadius: '2px',
        gridColumn: item.wide ? 'span 2' : 'span 1',
      }}
    >
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: '0.75rem',
      }}>
        {item.title}
      </h3>
      <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.75 }}>
        {item.description}
      </p>
    </div>
  );
}
