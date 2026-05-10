import type { SectionLabelProps } from '../../types';

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.6875rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: '#00E5FF',
        marginBottom: '1rem',
      }}
    >
      [ {text} ]
    </p>
  );
}
