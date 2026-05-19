import SectionLabel from '../../common/SectionLabel';
import { WHYUS_INTRO } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function OurDifference() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div ref={ref} style={{
        maxWidth: '760px', margin: '0 auto',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <SectionLabel text={WHYUS_INTRO.sectionLabel} />
        {WHYUS_INTRO.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 0 ? '#CCCCCC' : '#AAAAAA',
            fontSize: i === 0 ? '1.15rem' : '1rem',
            lineHeight: 1.85, marginBottom: '1.25rem',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
