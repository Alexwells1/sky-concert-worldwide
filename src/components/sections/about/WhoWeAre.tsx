import SectionLabel from '../../common/SectionLabel';
import { ABOUT_WHO_WE_ARE } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function WhoWeAre() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#060A14', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel text={ABOUT_WHO_WE_ARE.sectionLabel} />
          <p style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: 'white',
            fontStyle: 'italic',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}>
            {ABOUT_WHO_WE_ARE.intro}
          </p>
          <p style={{
            color: '#AAAAAA',
            fontSize: '1rem',
            lineHeight: 1.85,
            maxWidth: '800px',
            marginBottom: '3rem',
          }}>
            {ABOUT_WHO_WE_ARE.body}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {ABOUT_WHO_WE_ARE.commitments.map((c) => (
              <div key={c.title} className="card-base" style={{ padding: '2rem', borderRadius: '2px' }}>
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.2rem',
                  color: '#00E5FF',
                  marginBottom: '0.75rem',
                }}>
                  {c.title}
                </h3>
                <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
