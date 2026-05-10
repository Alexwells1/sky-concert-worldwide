import SectionLabel from '../../common/SectionLabel';
import ProcessStep from '../../common/ProcessStep';
import { SERVICES_PROCESS_STEPS, SERVICES_PROCESS_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ServiceProcess() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#060A14', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center', marginBottom: '3.5rem',
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <SectionLabel text={SERVICES_PROCESS_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white', lineHeight: 1.2,
          }}>
            {SERVICES_PROCESS_META.headline}
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '0.5rem',
        }}>
          {SERVICES_PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.number} item={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
