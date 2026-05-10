import { Shield, Globe, Leaf, Users } from 'lucide-react';
import { TRUST_BADGES } from '../../../constants';

const icons = [
  <Shield size={18} style={{ color: '#00E5FF' }} />,
  <Globe size={18} style={{ color: '#00E5FF' }} />,
  <Leaf size={18} style={{ color: '#4ade80' }} />,
  <Users size={18} style={{ color: '#00E5FF' }} />,
];

export default function TrustBadges() {
  return (
    <section style={{
      background: '#040810',
      padding: '2.5rem 1.5rem',
      borderTop: '1px solid rgba(0,229,255,0.06)',
      borderBottom: '1px solid rgba(0,229,255,0.06)',
    }}>
      <div style={{
        maxWidth: '80rem', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {TRUST_BADGES.map((badge, i) => (
          <div key={badge} style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(0,229,255,0.04)',
            border: '1px solid rgba(0,229,255,0.12)',
            borderRadius: '2px', padding: '0.75rem 1.25rem',
          }}>
            {icons[i]}
            <span style={{
              fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
              color: '#AAAAAA', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
