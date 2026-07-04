import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQItem } from '../../../types';

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="card-base"
            style={{
              borderRadius: 'var(--radius-xs)',
              borderColor: isOpen ? 'rgba(var(--primary-rgb), 0.28)' : 'rgba(var(--primary-rgb), 0.08)',
              overflow: 'hidden',
              transition: 'border-color var(--duration-normal-alt) var(--ease-default)',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--space-6) var(--space-8)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--space-4)',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'var(--text-base)',
                color: isOpen ? 'var(--primary)' : 'white',
                lineHeight: 1.4,
                transition: 'color var(--duration-normal-alt) var(--ease-default)',
              }}>
                {item.question}
              </span>
              <span style={{ color: 'var(--primary)', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div style={{
              maxHeight: isOpen ? '600px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}>
              <p style={{
                color: 'var(--muted-foreground)',
                fontSize: 'var(--text-md)',
                lineHeight: 1.85,
                padding: '0 var(--space-8) var(--space-7)',
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
