import SectionLabel from '../../common/SectionLabel';
import { ABOUT_APPROACH_ITEMS, ABOUT_APPROACH_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function OurApproach() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel text={ABOUT_APPROACH_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white',
            lineHeight: 1.2,
          }}>
            {ABOUT_APPROACH_META.headline}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {ABOUT_APPROACH_ITEMS.map((item, i) => (
            <div key={item.title} className="card-base" style={{ padding: '2rem', borderRadius: '2px' }}>
              <div style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: '3rem',
                color: 'rgba(0,229,255,0.15)',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.15rem',
                color: 'white',
                marginBottom: '0.75rem',
              }}>
                {item.title}
              </h3>
              <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          color: '#888',
          fontSize: '0.95rem',
          lineHeight: 1.75,
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          fontStyle: 'italic',
        }}>
          {ABOUT_APPROACH_META.closing}
        </p>
      </div>
    </section>
  );
}
