import { useRef, useEffect } from "react";
import { HOME_STATS } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function StatsStrip() {
  const { ref, inView } = useInView();
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const isLargeRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    isLargeRef.current = mq.matches;
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      isLargeRef.current = e.matches;
    };
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scroll on small/medium, static on large
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const SPEED = 0.5;
    const step = () => {
      if (!isLargeRef.current && !pausedRef.current) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      } else if (isLargeRef.current) {
        posRef.current = 0;
        track.style.transform = "translateX(0)";
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const touchStartX = useRef(0);
  const touchStartPos = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchStartPos.current = posRef.current;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.touches[0].clientX;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    let next = touchStartPos.current + dx;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    posRef.current = next;
    track.style.transform = `translateX(-${posRef.current}px)`;
  };
  const onTouchEnd = () => {
    setTimeout(() => {
      pausedRef.current = false;
    }, 1200);
  };

  const doubled = [...HOME_STATS, ...HOME_STATS];

  return (
    <>
      <style>{`
        .stats-section {
          position: relative;
          border-top: 1px solid rgba(var(--foreground-rgb), 0.4);
          border-bottom: 1px solid rgba(var(--foreground-rgb), 0.07);
          background: rgba(var(--foreground-rgb), 0.012);
          overflow: hidden;
        }
        /* Large: static grid */
        @media (min-width: 900px) {
          .stats-scroll-outer { overflow: visible; }
          .stats-track {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr);
            transform: none !important;
            max-width: 80rem;
            margin: 0 auto;
          }
          .stats-track-doubled .stat-item:nth-child(n+5) { display: none; }
          .stat-item {
            border-right: 1px solid rgba(var(--foreground-rgb), 0.06);
            padding: 3.5rem 2.5rem !important;
          }
          .stat-item:last-child { border-right: none; }
        }
        /* Small/medium: auto-scroll strip */
        @media (max-width: 899px) {
          .stats-scroll-outer {
            overflow: hidden;
            width: 100%;
            cursor: grab;
          }
          .stats-scroll-outer:active { cursor: grabbing; }
          .stats-track {
            display: flex !important;
            will-change: transform;
          }
        }
        .stat-item {
          flex-shrink: 0;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 200px;
        }
        .stat-value {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(2rem, 4vw, 3.25rem);
          letter-spacing: -0.04em;
          color: rgba(var(--foreground-rgb), 0.9);
          line-height: 1;
        }
        .stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(var(--foreground-rgb), 0.7);
          line-height: 1.5;
        }
      `}</style>

      <section className="stats-section">
        <div
          ref={ref}
          className="stats-scroll-outer"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity var(--duration-slowest) var(--ease-default)",
          }}
        >
          <div className="stats-track stats-track-doubled" ref={trackRef}>
            {doubled.map((stat, i) => (
              <div key={`${stat.label}-${i}`} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
