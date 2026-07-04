import type { StatItem } from '../../types';

interface StatCardProps extends StatItem {
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div style={{
        fontFamily: '"Bebas Neue", cursive',
        fontSize: '3.5rem',
        color: 'var(--secondary)',
        lineHeight: 1,
        marginBottom: 'var(--space-2)',
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.6875rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--muted-foreground)',
      }}>
        {label}
      </div>
    </div>
  );
}
