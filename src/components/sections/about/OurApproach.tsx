import SectionLabel from '../../common/SectionLabel';
import { ABOUT_APPROACH_ITEMS, ABOUT_APPROACH_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function OurApproach() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: 'var(--space-8) var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--container-2xl)', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-14)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)',
          }}
        >
          <SectionLabel text={ABOUT_APPROACH_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'var(--foreground)',
            lineHeight: 1.2,
          }}>
            {ABOUT_APPROACH_META.headline}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 'var(--space-5)',
          marginBottom: 'var(--space-10)',
        }}>
          {ABOUT_APPROACH_ITEMS.map((item, i) => (
            <div key={item.title} className="card-base" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-xs)' }}>
              <div style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: '3rem',
                color: 'rgba(var(--primary-rgb), 0.15)',
                lineHeight: 1,
                marginBottom: 'var(--space-3)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'var(--text-md-lg)',
                color: 'var(--foreground)',
                marginBottom: 'var(--space-3)',
              }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-md)', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          color: 'var(--muted-foreground-4)',
          fontSize: 'var(--text-body-lg)',
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
