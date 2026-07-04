import { HOME_STATS } from '../../../constants';
import StatCard from '../../common/StatCard';
import { useInView } from '../../../hooks/useInView';

export default function StatsBar() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: 'var(--space-16) var(--space-6)', borderTop: '1px solid rgba(var(--primary-rgb), 0.06)', borderBottom: '1px solid rgba(var(--primary-rgb), 0.06)' }}>
      <div
        ref={ref}
        style={{
          maxWidth: 'var(--container-2xl)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--space-10)',
          transition: 'opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
        }}
      >
        {HOME_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
