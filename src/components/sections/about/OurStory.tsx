import SectionLabel from '../../common/SectionLabel';
import { ABOUT_STORY } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function OurStory() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <SectionLabel text={ABOUT_STORY.sectionLabel} />
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'white',
          marginBottom: '2rem',
          lineHeight: 1.2,
        }}>
          {ABOUT_STORY.headline}
        </h2>
        {ABOUT_STORY.paragraphs.map((p, i) => (
          <p key={i} style={{
            color: i === 0 ? '#CCCCCC' : '#AAAAAA',
            fontSize: '1rem',
            lineHeight: 1.85,
            marginBottom: '1.5rem',
          }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
