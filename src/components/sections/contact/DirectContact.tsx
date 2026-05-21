import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { DIRECT_CONTACT_META, CONTACT_INFO } from '../../../constants';

export default function DirectContact() {
  const items = [
    {
      icon: <Mail size={18} style={{ color: '#00E5FF' }} />,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Phone size={18} style={{ color: '#00E5FF' }} />,
      label: 'Phone / WhatsApp',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: <MessageCircle size={18} style={{ color: '#00E5FF' }} />,
      label: 'Emergency Inquiries',
      value: CONTACT_INFO.emergencyEmail,
      href: `mailto:${CONTACT_INFO.emergencyEmail}`,
    },
    {
      icon: <Clock size={18} style={{ color: '#C9A84C' }} />,
      label: 'Response Time',
      value: CONTACT_INFO.responseTime,
      href: null,
    },
  ];

  return (
    <section style={{ background: 'transparent', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <SectionLabel text={DIRECT_CONTACT_META.headline} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '440px' }}>
          {items.map((item) => {
            const inner = (
              <div
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(8,15,35,0.55)',
                  border: `1px solid ${item.href ? 'rgba(0,229,255,0.12)' : 'rgba(0,229,255,0.06)'}`,
                  borderRadius: '2px',
                  transition: item.href ? 'border-color 0.2s, background 0.2s' : undefined,
                }}
                className={item.href ? 'contact-card-link' : undefined}
              >
                <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{
                    fontFamily: '"Space Mono", monospace', fontSize: '0.55rem',
                    color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{ color: item.href ? '#00E5FF' : '#CCCCCC', fontSize: '0.9rem', margin: 0 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>
      </div>

      <style>{`
        .contact-card-link:hover {
          border-color: rgba(0,229,255,0.35) !important;
          background: rgba(0,229,255,0.05) !important;
        }
      `}</style>
    </section>
  );
}
