import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SERVICES_FAQ_ITEMS, SERVICES_FAQ_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

// Show only first 4 on home page
const HOME_FAQ_ITEMS = SERVICES_FAQ_ITEMS.slice(0, 4);

export default function HomeFAQ() {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .home-faq-section {
          padding: 3rem 1.5rem;
          position: relative;
        }
        .home-faq-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .home-faq-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--primary);
          display: block;
          margin-bottom: 1.25rem;
        }
        .home-faq-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(2rem, 4.5vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(var(--foreground-rgb), 0.92);
          margin: 0 0 3rem;
        }
        .home-faq-item {
          border-top: 1px solid rgba(var(--foreground-rgb), 0.07);
        }
        .home-faq-item:last-child {
          border-bottom: 1px solid rgba(var(--foreground-rgb), 0.02);
        }
        .home-faq-trigger {
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 1.75rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          text-align: left;
          transition: background 0.25s ease;
        }
        .home-faq-trigger:hover {
          background: rgba(var(--foreground-rgb), 0.015);
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          margin: 0 -0.5rem;
          width: calc(100% + 1rem);
        }
        .home-faq-question {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          color: rgba(var(--foreground-rgb), 0.82);
          line-height: 1.4;
        }
        .home-faq-trigger.open .home-faq-question {
          color: rgba(var(--foreground-rgb), 0.95);
        }
        .home-faq-icon {
          flex-shrink: 0;
          color: rgba(var(--foreground-rgb), 0.7);
          transition: color 0.25s ease;
        }
        .home-faq-trigger:hover .home-faq-icon,
        .home-faq-trigger.open .home-faq-icon {
          color: rgba(var(--foreground-rgb), 0.65);
        }
        .home-faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .home-faq-answer-inner {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.88rem;
          color: rgba(var(--foreground-rgb), 0.4);
          line-height: 1.85;
          padding: 0 0 2rem;
          max-width: 620px;
        }
      `}</style>

      <section className="home-faq-section">
        <div
          ref={ref}
          className="home-faq-inner"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition: "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <span className="home-faq-label">
            {SERVICES_FAQ_META.sectionLabel}
          </span>
          <h2 className="home-faq-headline">{SERVICES_FAQ_META.headline}</h2>

          <div>
            {HOME_FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="home-faq-item">
                  <button
                    className={`home-faq-trigger${isOpen ? " open" : ""}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="home-faq-question">{item.question}</span>
                    <span className="home-faq-icon">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className="home-faq-answer"
                    style={{ maxHeight: isOpen ? "400px" : "0" }}
                  >
                    <p className="home-faq-answer-inner">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
