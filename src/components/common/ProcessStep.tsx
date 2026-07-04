import type { ProcessStepItem } from '../../types';

interface ProcessStepProps {
  item: ProcessStepItem;
  index: number;
}

export default function ProcessStep({ item, index }: ProcessStepProps) {
  return (
    <div style={{
      padding: 'var(--space-6)',
      borderLeft: '1px solid rgba(var(--primary-rgb), 0.15)',
      position: 'relative',
      animationDelay: `${index * 0.1}s`,
    }}>
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        left: '-1px',
        width: '8px',
        height: '8px',
        background: 'var(--primary)',
        borderRadius: 'var(--radius-full)',
        transform: 'translateX(-50%)',
      }} />
      <div style={{
        fontFamily: '"Bebas Neue", cursive',
        fontSize: 'var(--text-3xl)',
        color: 'var(--secondary)',
        lineHeight: 1,
        marginBottom: 'var(--space-2)',
        opacity: 0.7,
      }}>
        {item.number}
      </div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: 'var(--text-md)',
        color: 'var(--foreground)',
        marginBottom: 'var(--space-2)',
      }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm-alt)', lineHeight: 1.65 }}>
        {item.description}
      </p>
    </div>
  );
}
