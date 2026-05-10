import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="card-base" style={{ padding: '2rem', borderRadius: '2px' }}>
      <div style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.6875rem',
        color: '#00E5FF',
        letterSpacing: '0.2em',
        marginBottom: '1rem',
      }}>
        {item.number}
      </div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: '0.75rem',
        lineHeight: 1.3,
      }}>
        {item.title}
      </h3>
      <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: item.idealFor ? '1rem' : 0 }}>
        {item.description}
      </p>
      {item.idealFor && (
        <p style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.65rem',
          color: '#C9A84C',
          letterSpacing: '0.1em',
          lineHeight: 1.6,
        }}>
          <span style={{ opacity: 0.6 }}>Ideal for: </span>{item.idealFor}
        </p>
      )}
    </div>
  );
}
