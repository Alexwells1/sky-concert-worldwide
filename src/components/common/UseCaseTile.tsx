import type { UseCaseItem } from '../../types';

interface UseCaseTileProps {
  item: UseCaseItem;
}

export default function UseCaseTile({ item }: UseCaseTileProps) {
  return (
    <div className="card-base" style={{ padding: '1.75rem', borderRadius: '2px' }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '1.05rem',
        color: 'white',
        marginBottom: '0.5rem',
        fontStyle: 'italic',
      }}>
        {item.title}
      </h3>
      <p style={{ color: '#AAAAAA', fontSize: '0.85rem', lineHeight: 1.65 }}>
        {item.description}
      </p>
    </div>
  );
}
