import { useState } from 'react';
import { Send } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { CONTACT_FORM_META, PROJECT_TYPE_OPTIONS } from '../../../constants';

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  projectType: string;
  message: string;
}

const INITIAL: FormState = {
  fullName: '', company: '', email: '', phone: '',
  eventDate: '', location: '', projectType: '', message: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(8,15,35,0.7)',
  border: '1px solid rgba(0,229,255,0.15)',
  color: 'white',
  padding: '0.875rem 1rem',
  fontSize: '0.9rem',
  fontFamily: '"DM Sans", sans-serif',
  outline: 'none',
  borderRadius: '2px',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.6rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: '#888',
  display: 'block',
  marginBottom: '0.4rem',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.company || !form.email || !form.message) return;
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm(INITIAL);
  };

  const getFocusStyle = (name: string): React.CSSProperties =>
    focusedField === name
      ? { ...inputStyle, borderColor: 'rgba(0,229,255,0.6)', boxShadow: '0 0 0 3px rgba(0,229,255,0.06)' }
      : inputStyle;

  if (submitted) {
    return (
      <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
        <div style={{
          maxWidth: '560px', margin: '0 auto', textAlign: 'center',
          padding: '4rem 2rem',
          background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '2px',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✦</div>
          <h3 style={{
            fontFamily: '"Playfair Display", serif', fontSize: '1.75rem',
            color: 'white', marginBottom: '1rem',
          }}>
            Message Sent.
          </h3>
          <p style={{ color: '#AAAAAA', lineHeight: 1.75, marginBottom: '2rem' }}>
            Thank you for reaching out. Our team will be in touch within 24 business hours.
          </p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <SectionLabel text={CONTACT_FORM_META.headline} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '680px' }}>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                name="fullName" value={form.fullName} onChange={handleChange}
                placeholder="Your full name"
                style={getFocusStyle('fullName')}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField('')}
              />
            </div>
            <div>
              <label style={labelStyle}>Company / Organization *</label>
              <input
                name="company" value={form.company} onChange={handleChange}
                placeholder="Your company"
                style={getFocusStyle('company')}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField('')}
              />
            </div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Email Address *</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="you@company.com"
                style={getFocusStyle('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone / WhatsApp</label>
              <input
                name="phone" value={form.phone} onChange={handleChange}
                placeholder="+1 000 000 0000"
                style={getFocusStyle('phone')}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
              />
            </div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Event / Project Date</label>
              <input
                name="eventDate" type="date" value={form.eventDate} onChange={handleChange}
                style={{ ...getFocusStyle('eventDate'), colorScheme: 'dark' }}
                onFocus={() => setFocusedField('eventDate')}
                onBlur={() => setFocusedField('')}
              />
            </div>
            <div>
              <label style={labelStyle}>Approximate Location</label>
              <input
                name="location" value={form.location} onChange={handleChange}
                placeholder="City, Country"
                style={getFocusStyle('location')}
                onFocus={() => setFocusedField('location')}
                onBlur={() => setFocusedField('')}
              />
            </div>
          </div>
          {/* Project type */}
          <div>
            <label style={labelStyle}>Type of Project</label>
            <select
              name="projectType" value={form.projectType} onChange={handleChange}
              style={{ ...getFocusStyle('projectType'), appearance: 'none' }}
              onFocus={() => setFocusedField('projectType')}
              onBlur={() => setFocusedField('')}
            >
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} style={{ background: '#0D1426' }}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {/* Message */}
          <div>
            <label style={labelStyle}>Message / Project Brief *</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell us about your vision, event goals, timeline, and anything else we should know..."
              rows={6}
              style={{
                ...getFocusStyle('message'),
                resize: 'vertical', minHeight: '140px',
              }}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
            />
          </div>

          {/* Submit */}
          <button type="button" className="btn-primary" onClick={handleSubmit} style={{ alignSelf: 'flex-start' }}>
            {CONTACT_FORM_META.submitLabel} <Send size={14} />
          </button>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
            {CONTACT_FORM_META.trustItems.map((t) => (
              <span key={t} style={{
                fontFamily: '"Space Mono", monospace', fontSize: '0.55rem',
                color: '#555', letterSpacing: '0.1em',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
