import SectionLabel from '../../common/SectionLabel';
import { WHATS_NEXT_STEPS, WHATS_NEXT_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function WhatsNext() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#0A0F1E', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionLabel text={WHATS_NEXT_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: 'white',
            lineHeight: 1.2,
          }}>
            {WHATS_NEXT_META.headline}
          </h2>
        </div>
        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {WHATS_NEXT_STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                gap: '1.5rem',
                paddingBottom: i < WHATS_NEXT_STEPS.length - 1 ? '2rem' : 0,
                position: 'relative',
              }}
            >
              {/* Connector line */}
              {i < WHATS_NEXT_STEPS.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '19px',
                  top: '40px',
                  bottom: 0,
                  width: '1px',
                  background: 'linear-gradient(to bottom, rgba(0,229,255,0.3), transparent)',
                }} />
              )}
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(0,229,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: '#060A14',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.6rem',
                  color: '#00E5FF',
                  fontWeight: 700,
                }}>
                  {step.number}
                </span>
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.1rem',
                  color: 'white',
                  marginBottom: '0.35rem',
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#AAAAAA', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
