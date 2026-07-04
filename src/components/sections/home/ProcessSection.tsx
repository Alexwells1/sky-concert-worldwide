import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_PROCESS_STEPS, HOME_PROCESS_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function ProcessSection() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsLarge(e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .process-section {
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
        }
        .process-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 50% 70% at 70% 50%, rgba(0,40,100,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .process-header {
          padding: 0 1.5rem;
          max-width: 80rem;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .process-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--primary);
          display: block;
          margin-bottom: 1.25rem;
        }
        .process-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(1.75rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(var(--foreground-rgb), 0.92);
          margin: 0;
        }
        .process-header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .process-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(var(--foreground-rgb), 0.12);
          background: transparent;
          color: rgba(var(--foreground-rgb), 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, background 0.25s;
          flex-shrink: 0;
        }
        .process-arrow-btn:hover:not(:disabled) {
          border-color: rgba(var(--foreground-rgb), 0.4);
          color: rgba(var(--foreground-rgb), 0.9);
          background: rgba(var(--foreground-rgb), 0.4);
        }
        .process-arrow-btn:disabled { opacity: 0.25; cursor: default; }

        /* Mobile/tablet: horizontal scroll cards */
        .process-scroll-outer {
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 0 1.5rem;
        }
        .process-scroll-outer::-webkit-scrollbar { display: none; }
        .process-cards-track {
          display: flex;
          gap: 2px;
          min-width: max-content;
        }
        .process-card {
          flex-shrink: 0;
          width: 260px;
          padding: 2rem 1.75rem;
          background: rgba(var(--foreground-rgb), 0.01);
          border: 1px solid rgba(var(--foreground-rgb), 0.09);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .process-card-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(var(--foreground-rgb), 0.7);
          letter-spacing: 0.18em;
        }
        .process-card-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 1.05rem;
          color: rgba(var(--foreground-rgb), 0.95);
          line-height: 1.35;
          margin: 0;
        }
        .process-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(var(--foreground-rgb), 0.7);
          line-height: 1.75;
          margin: 0;
        }

        /* Large: vertical timeline */
        @media (min-width: 900px) {
          .process-scroll-outer {
            overflow: visible;
            padding: 0 1.5rem;
            max-width: 80rem;
            margin: 0 auto;
          }
          .process-cards-track {
            display: block;
            min-width: auto;
          }
          .process-card {
            width: auto;
            display: grid;
            grid-template-columns: 7rem 1fr;
            gap: 0 2rem;
            align-items: start;
            background: transparent;
            border: none;
            border-top: 1px solid rgba(var(--foreground-rgb), 0.05);
            border-radius: 0;
            padding: 2.75rem 0 2.75rem 2rem;
            transition: background 0.3s ease;
          }
          .process-card:last-child {
            border-bottom: 1px solid rgba(var(--foreground-rgb), 0.05);
          }
          .process-card:hover {
            background: rgba(var(--foreground-rgb), 0.015);
          }
          .process-card-title { font-size: clamp(1.05rem, 1.8vw, 1.3rem); }
          .process-arrow-btn { display: none !important; }
        }

        .process-footer {
          padding: 2rem 1.5rem 0;
          max-width: 80rem;
          margin: 0 auto;
        }
      `}</style>

      <section className="process-section">
        <div className="process-glow" />

        <div
          ref={ref}
          className="process-header"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.5rem)",
            transition: "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <div>
            <span className="process-label">
              {HOME_PROCESS_META.sectionLabel}
            </span>
            <h2 className="process-headline">{HOME_PROCESS_META.headline}</h2>
          </div>
          <div className="process-header-right">
            {!isLarge && (
              <>
                <button
                  className="process-arrow-btn"
                  onClick={() => scroll("left")}
                  disabled={!canLeft}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="process-arrow-btn"
                  onClick={() => scroll("right")}
                  disabled={!canRight}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}
            <Link to="/process" className="btn-ghost" style={{ flexShrink: 0 }}>
              How It Works <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div
          className="process-scroll-outer"
          ref={scrollRef}
          onScroll={updateArrows}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity var(--duration-slowest) var(--ease-default) 0.15s",
          }}
        >
          <div className="process-cards-track">
            {HOME_PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="process-card"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(1.25rem)",
                  transition: `opacity 0.7s ease ${
                    0.1 + i * 0.07
                  }s, transform 0.7s ease ${0.1 + i * 0.07}s`,
                }}
              >
                <span className="process-card-num">{step.number}</span>
                <div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p
                    className="process-card-desc"
                    style={{ marginTop: "var(--space-1-5)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
