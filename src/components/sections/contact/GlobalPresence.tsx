import SectionLabel from '../../common/SectionLabel';
import { GLOBAL_PRESENCE_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function GlobalPresence() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div ref={ref} style={{
          opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <SectionLabel text={GLOBAL_PRESENCE_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'white', lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {GLOBAL_PRESENCE_META.headline}
          </h2>
          <p style={{ color: '#AAAAAA', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            {GLOBAL_PRESENCE_META.body}
          </p>
        </div>
      </div>
    </section>
  );
}
