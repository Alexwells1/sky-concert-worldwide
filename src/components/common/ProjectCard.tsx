import type { ProjectItem } from '../../types';

interface ProjectCardProps {
  item: ProjectItem;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  government: 'linear-gradient(135deg, #0A1535 0%, #1a2a4a 50%, #0A0F1E 100%)',
  corporate:  'linear-gradient(135deg, #1a1020 0%, #2a1535 50%, #0A0F1E 100%)',
  sports:     'linear-gradient(135deg, #0a1520 0%, #102535 50%, #0A0F1E 100%)',
  tourism:    'linear-gradient(135deg, #0a1520 0%, #0a2520 50%, #0A0F1E 100%)',
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div
      className="card-base"
      style={{ borderRadius: '2px', overflow: 'hidden', position: 'relative' }}
    >
      {/* IMAGE PLACEHOLDER: Project thumbnail — drone show footage */}
      <div style={{
        height: '220px',
        background: CATEGORY_GRADIENTS[item.category] || CATEGORY_GRADIENTS.government,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: '1rem',
          color: 'rgba(0,229,255,0.3)',
          letterSpacing: '0.3em',
          textAlign: 'center',
          padding: '0 1rem',
        }}>
          SKY CONCERT WORLDWIDE
        </div>
        {item.isConceptOnly && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'rgba(201, 168, 76, 0.15)',
            border: '1px solid rgba(201, 168, 76, 0.4)',
            color: '#C9A84C',
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            padding: '0.3rem 0.6rem',
            textTransform: 'uppercase',
          }}>
            Concept
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0,229,255,0.1)',
          border: '1px solid rgba(0,229,255,0.25)',
          color: '#00E5FF',
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.55rem',
          letterSpacing: '0.15em',
          padding: '0.3rem 0.6rem',
          textTransform: 'uppercase',
        }}>
          {item.tag}
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.125rem',
          color: 'white',
          marginBottom: '0.4rem',
          lineHeight: 1.3,
        }}>
          {item.title}
        </h3>
        {item.subtitle && (
          <p style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.6rem',
            color: '#C9A84C',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}>
            {item.subtitle}
          </p>
        )}
        {item.stats && (
          <p style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.6rem',
            color: '#00E5FF',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}>
            {item.stats}
          </p>
        )}
        <p style={{ color: '#AAAAAA', fontSize: '0.85rem', lineHeight: 1.65 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
