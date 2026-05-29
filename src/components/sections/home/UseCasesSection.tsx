import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_USE_CASES, HOME_USE_CASES_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function UseCasesSection() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsLarge(e.matches);
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
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .usecases-section {
          padding: 8rem 0;
          position: relative;
        }
        .usecases-header {
          padding: 0 1.5rem;
          max-width: 80rem;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .usecases-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          display: block;
          margin-bottom: 1.25rem;
        }
        .usecases-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(1.75rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.92);
          margin: 0;
        }
        .usecases-arrows {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .usecase-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, background 0.25s;
          flex-shrink: 0;
        }
        .usecase-arrow-btn:hover:not(:disabled) {
          border-color: rgba(255,255,255,0.4);
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.05);
        }
        .usecase-arrow-btn:disabled {
          opacity: 0.25;
          cursor: default;
        }
        /* Grid on large, scroll on small/medium */
        .usecases-scroll-outer {
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 0 1.5rem;
        }
        .usecases-scroll-outer::-webkit-scrollbar { display: none; }
        .usecases-track {
          display: grid;
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        /* Mobile/tablet: horizontal scroll */
        @media (max-width: 1023px) {
          .usecases-track {
            display: flex;
            background: transparent;
            gap: 2px;
            min-width: max-content;
          }
          .usecase-tile {
            width: 280px !important;
            flex-shrink: 0;
          }
        }
        /* Desktop grid: 3 cols */
        @media (min-width: 1024px) {
          .usecases-scroll-outer {
            overflow-x: visible;
            padding: 0 1.5rem;
            max-width: 80rem;
            margin: 0 auto;
          }
          .usecases-track {
            grid-template-columns: repeat(3, 1fr);
          }
          .usecases-arrows { display: none !important; }
        }
        .usecase-tile {
          background: #040609;
          padding: 2.25rem 1.75rem;
          position: relative;
          transition: background 0.4s ease;
          cursor: default;
        }
        .usecase-tile:hover { background: rgba(255,255,255,0.02); }
        .usecase-idx {
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          color: rgba(201,168,76,0.45);
          letter-spacing: 0.18em;
          display: block;
          margin-bottom: 1rem;
        }
        .usecase-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          color: rgba(255,255,255,0.82);
          line-height: 1.4;
          margin: 0 0 0.75rem;
        }
        .usecase-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.7;
          margin: 0;
        }
      `}</style>

      <section className="usecases-section">
        <div ref={ref} className="usecases-header"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.5rem)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div>
            <span className="usecases-label">{HOME_USE_CASES_META.sectionLabel}</span>
            <h2 className="usecases-headline">{HOME_USE_CASES_META.headline}</h2>
          </div>
          {!isLarge && (
            <div className="usecases-arrows">
              <button className="usecase-arrow-btn" onClick={() => scroll("left")} disabled={!canLeft} aria-label="Scroll left">
                <ChevronLeft size={16} />
              </button>
              <button className="usecase-arrow-btn" onClick={() => scroll("right")} disabled={!canRight} aria-label="Scroll right">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div
          className="usecases-scroll-outer"
          ref={scrollRef}
          onScroll={updateArrows}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.15s",
          }}
        >
          <div className="usecases-track">
            {HOME_USE_CASES.map((item, i) => (
              <div
                key={item.title}
                className="usecase-tile"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(1.25rem)",
                  transition: `opacity 0.7s ease ${0.12 + i * 0.07}s, transform 0.7s ease ${0.12 + i * 0.07}s`,
                }}
              >
                <span className="usecase-idx">{String(i + 1).padStart(2, "0")}</span>
                <p className="usecase-title">{item.title}</p>
                <p className="usecase-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
