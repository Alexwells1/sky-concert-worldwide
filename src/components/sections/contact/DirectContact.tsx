import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { DIRECT_CONTACT_META, CONTACT_INFO } from '../../../constants';

export default function DirectContact() {
  const items = [
    {
      icon: <Mail size={18} style={{ color: 'var(--primary)' }} />,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Phone size={18} style={{ color: 'var(--primary)' }} />,
      label: 'Phone / WhatsApp',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: <MessageCircle size={18} style={{ color: 'var(--primary)' }} />,
      label: 'Emergency Inquiries',
      value: CONTACT_INFO.emergencyEmail,
      href: `mailto:${CONTACT_INFO.emergencyEmail}`,
    },
    {
      icon: <Clock size={18} style={{ color: 'var(--secondary)' }} />,
      label: 'Response Time',
      value: CONTACT_INFO.responseTime,
      href: null,
    },
  ];

  return (
    <section style={{ background: 'transparent', padding: 'var(--space-4) var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--container-2xl)', margin: '0 auto' }}>
        <SectionLabel text={DIRECT_CONTACT_META.headline} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: '440px' }}>
          {items.map((item) => {
            const inner = (
              <div
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
                  padding: 'var(--space-5)',
                  background: 'rgba(var(--color-surface-17-rgb), 0.55)',
                  border: `1px solid ${item.href ? 'rgba(var(--primary-rgb), 0.12)' : 'rgba(var(--primary-rgb), 0.06)'}`,
                  borderRadius: 'var(--radius-xs)',
                  transition: item.href ? 'border-color 0.2s, background 0.2s' : undefined,
                }}
                className={item.href ? 'contact-card-link' : undefined}
              >
                <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{
                    fontFamily: '"Space Mono", monospace', fontSize: 'var(--text-2xs)',
                    color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 'var(--space-1)',
                  }}>
                    {item.label}
                  </p>
                  <p style={{ color: item.href ? 'var(--primary)' : 'var(--muted-foreground-2)', fontSize: 'var(--text-md)', margin: 0 }}>
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
          border-color: rgba(var(--primary-rgb), 0.35) !important;
          background: rgba(var(--primary-rgb), 0.05) !important;
        }
      `}</style>
    </section>
  );
}
