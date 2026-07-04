import { useInView } from "../../../hooks/useInView";
import { WHYUS_INTRO } from "../../../constants";

export default function OurDifference() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "var(--color-surface-3)",
        padding: "var(--space-8) var(--space-6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .our-difference-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .our-difference-section {
            padding: 6rem 1.5rem !important;
          }
          .our-difference-headline {
            font-size: clamp(2.5rem, 12vw, 4rem) !important;
          }
        }
      `}</style>

      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(var(--secondary-rgb), 0.2), transparent)",
        }}
      />

      <div
        ref={ref}
        className="our-difference-grid"
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-24)",
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(35px)",
          transition:
            "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
        }}
      >
        {/* Left: large label + headline */}
        <div>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-xs)",
              letterSpacing: "0.3em",
              color: "var(--secondary)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-8)",
            }}
          >
            {WHYUS_INTRO.sectionLabel}
          </span>
          <h2
            className="our-difference-headline"
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 6vw, 6.5rem)",
              color: "var(--foreground)",
              lineHeight: 0.88,
              letterSpacing: "var(--tracking-normal)",
              margin: 0,
            }}
          >
            Why Visionary
            <br />
            Brands Choose
            <br />
            <span style={{ color: "rgba(var(--secondary-rgb), 0.55)" }}>
              Sky Concert
            </span>
          </h2>
        </div>

        {/* Right: text + decorative rule */}
        <div>
          <div
            style={{
              width: "40px",
              height: "2px",
              background:
                "linear-gradient(to right, var(--secondary), transparent)",
              marginBottom: "var(--space-8)",
            }}
          />
          {WHYUS_INTRO.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color:
                  i === 0 ? "rgba(220,220,220,0.95)" : "rgba(170,170,170,0.85)",
                fontSize: i === 0 ? "1.1rem" : "1rem",
                lineHeight: 1.9,
                marginBottom:
                  i < WHYUS_INTRO.paragraphs.length - 1 ? "1.5rem" : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
