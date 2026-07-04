import { Shield, Globe, Leaf, Users } from 'lucide-react';
import { TRUST_BADGES } from '../../../constants';

const icons = [
  <Shield size={18} style={{ color: 'var(--primary)' }} />,
  <Globe size={18} style={{ color: 'var(--primary)' }} />,
  <Leaf size={18} style={{ color: 'var(--success)' }} />,
  <Users size={18} style={{ color: 'var(--primary)' }} />,
];

export default function TrustBadges() {
  return (
    <section style={{
      background: 'transparent',
      padding: 'var(--space-10) var(--space-6)',
      borderTop: '1px solid rgba(var(--primary-rgb), 0.06)',
      borderBottom: '1px solid rgba(var(--primary-rgb), 0.06)',
    }}>
      <div style={{
        maxWidth: 'var(--container-2xl)', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {TRUST_BADGES.map((badge, i) => (
          <div key={badge} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-1-5)',
            background: 'rgba(var(--primary-rgb), 0.04)',
            border: '1px solid rgba(var(--primary-rgb), 0.12)',
            borderRadius: 'var(--radius-xs)', padding: 'var(--space-3) var(--space-5)',
          }}>
            {icons[i]}
            <span style={{
              fontFamily: '"Space Mono", monospace', fontSize: 'var(--text-xs)',
              color: 'var(--muted-foreground)', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
