import ServiceCard from '../../common/ServiceCard';
import { CORE_SERVICES } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function CoreServices() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {CORE_SERVICES.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
    </section>
  );
}
