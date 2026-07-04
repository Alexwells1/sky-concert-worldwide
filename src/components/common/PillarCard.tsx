import type { PillarItem } from '../../types';

interface PillarCardProps {
  item: PillarItem;
}

export default function PillarCard({ item }: PillarCardProps) {
  return (
    <div
      className="card-base"
      style={{
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-xs)',
        gridColumn: item.wide ? 'span 2' : 'span 1',
      }}
    >
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 'var(--text-lg)',
        color: 'var(--foreground)',
        marginBottom: 'var(--space-3)',
      }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-md)', lineHeight: 1.75 }}>
        {item.description}
      </p>
    </div>
  );
}
