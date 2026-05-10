import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { DIRECT_CONTACT_META, CONTACT_INFO } from '../../../constants';

export default function DirectContact() {
  return (
    <section style={{ background: '#060A14', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <SectionLabel text={DIRECT_CONTACT_META.headline} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '440px' }}>
          {[
            { icon: <Mail size={18} style={{ color: '#00E5FF' }} />, label: 'Email', value: CONTACT_INFO.email },
            { icon: <Phone size={18} style={{ color: '#00E5FF' }} />, label: 'Phone / WhatsApp', value: CONTACT_INFO.phone },
            { icon: <MessageCircle size={18} style={{ color: '#00E5FF' }} />, label: 'Emergency Inquiries', value: CONTACT_INFO.emergencyEmail },
            { icon: <Clock size={18} style={{ color: '#C9A84C' }} />, label: 'Response Time', value: CONTACT_INFO.responseTime },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '1.25rem',
              background: '#0D1426', border: '1px solid rgba(0,229,255,0.06)',
              borderRadius: '2px',
            }}>
              <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <p style={{
                  fontFamily: '"Space Mono", monospace', fontSize: '0.55rem',
                  color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem',
                }}>
                  {item.label}
                </p>
                <p style={{ color: '#CCCCCC', fontSize: '0.9rem' }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
