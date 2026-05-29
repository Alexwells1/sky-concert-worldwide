import SectionLabel from '../../common/SectionLabel';
import { ABOUT_TESTIMONIALS } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function Testimonials() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <SectionLabel text={ABOUT_TESTIMONIALS.sectionLabel} />
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          color: 'white',
          marginBottom: '3rem',
          lineHeight: 1.2,
        }}>
          {ABOUT_TESTIMONIALS.headline}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {ABOUT_TESTIMONIALS.items.map((item, i) => (
            <div key={i} className="card-base" style={{ padding: '2rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                fontSize: '2.5rem',
                color: '#00E5FF',
                fontFamily: '"Playfair Display", serif',
                lineHeight: 1,
                opacity: 0.4,
              }}>
                "
              </div>
              <p style={{
                color: '#CCCCCC',
                fontSize: '0.95rem',
                lineHeight: 1.85,
                fontStyle: 'italic',
                flex: 1,
              }}>
                {item.quote}
              </p>
              <div style={{ borderTop: '1px solid rgba(0,229,255,0.1)', paddingTop: '1.25rem' }}>
                <div style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  {item.name}
                </div>
                <div style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.6rem',
                  color: '#C9A84C',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  {item.role} &nbsp;·&nbsp; {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
