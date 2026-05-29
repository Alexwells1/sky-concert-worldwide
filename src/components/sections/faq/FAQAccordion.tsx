import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQItem } from '../../../types';

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="card-base"
            style={{
              borderRadius: '2px',
              borderColor: isOpen ? 'rgba(0,229,255,0.28)' : 'rgba(0,229,255,0.08)',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1rem',
                color: isOpen ? '#00E5FF' : 'white',
                lineHeight: 1.4,
                transition: 'color 0.3s ease',
              }}>
                {item.question}
              </span>
              <span style={{ color: '#00E5FF', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div style={{
              maxHeight: isOpen ? '600px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}>
              <p style={{
                color: '#AAAAAA',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                padding: '0 2rem 1.75rem',
              }}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
