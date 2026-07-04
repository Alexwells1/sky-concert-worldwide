import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="card-base" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-xs)' }}>
      <div style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.6875rem',
        color: 'var(--primary)',
        letterSpacing: '0.2em',
        marginBottom: 'var(--space-4)',
      }}>
        {item.number}
      </div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 'var(--text-lg)',
        color: 'var(--foreground)',
        marginBottom: 'var(--space-3)',
        lineHeight: 1.3,
      }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-md)', lineHeight: 1.7, marginBottom: item.idealFor ? '1rem' : 0 }}>
        {item.description}
      </p>
      {item.idealFor && (
        <p style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: 'var(--text-3xs)',
          color: 'var(--secondary)',
          letterSpacing: '0.1em',
          lineHeight: 1.6,
        }}>
          <span style={{ opacity: 0.6 }}>Ideal for: </span>{item.idealFor}
        </p>
      )}
    </div>
  );
}
