import { HOME_STATS } from '../../../constants';
import StatCard from '../../common/StatCard';
import { useInView } from '../../../hooks/useInView';

export default function StatsBar() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '4rem 1.5rem', borderTop: '1px solid rgba(0,229,255,0.06)', borderBottom: '1px solid rgba(0,229,255,0.06)' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
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
