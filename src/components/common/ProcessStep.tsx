import type { ProcessStepItem } from '../../types';

interface ProcessStepProps {
  item: ProcessStepItem;
  index: number;
}

export default function ProcessStep({ item, index }: ProcessStepProps) {
  return (
    <div style={{
      padding: '1.5rem',
      borderLeft: '1px solid rgba(0,229,255,0.15)',
      position: 'relative',
      animationDelay: `${index * 0.1}s`,
    }}>
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        left: '-1px',
        width: '8px',
        height: '8px',
        background: '#00E5FF',
        borderRadius: '50%',
        transform: 'translateX(-50%)',
      }} />
      <div style={{
        fontFamily: '"Bebas Neue", cursive',
        fontSize: '2.5rem',
        color: '#C9A84C',
        lineHeight: 1,
        marginBottom: '0.5rem',
        opacity: 0.7,
      }}>
        {item.number}
      </div>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '1.1rem',
        color: 'white',
        marginBottom: '0.5rem',
      }}>
        {item.title}
      </h3>
      <p style={{ color: '#AAAAAA', fontSize: '0.85rem', lineHeight: 1.65 }}>
        {item.description}
      </p>
    </div>
  );
}
