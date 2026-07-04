import type { UseCaseItem } from '../../types';

interface UseCaseTileProps {
  item: UseCaseItem;
}

export default function UseCaseTile({ item }: UseCaseTileProps) {
  return (
    <div className="card-base" style={{ padding: 'var(--space-7)', borderRadius: 'var(--radius-xs)' }}>
      <div style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>{item.emoji}</div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 'var(--text-md-alt)',
        color: 'var(--foreground)',
        marginBottom: 'var(--space-2)',
        fontStyle: 'italic',
      }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm-alt)', lineHeight: 1.65 }}>
        {item.description}
      </p>
    </div>
  );
}
