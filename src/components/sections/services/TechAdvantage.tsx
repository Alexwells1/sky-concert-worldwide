import { useInView } from "../../../hooks/useInView";

const TECH_HIGHLIGHTS = [
  {
    title: "Precision Swarm Synchronization",
    detail:
      "RTK-GPS positioning with centimeter-level accuracy across hundreds of simultaneous flight paths.",
    accent: "var(--primary)",
  },
  {
    title: "Military-Grade Positioning Systems",
    detail:
      "Redundant telemetry and real-time correction ensure every drone is exactly where it must be.",
    accent: "var(--secondary)",
  },
  {
    title: "Large-Scale Formation Control",
    detail:
      "Proprietary swarm intelligence enables complex animated formations at any fleet size.",
    accent: "var(--primary)",
  },
  {
    title: "Environmentally Responsible Operations",
    detail:
      "Zero pyrotechnics. Zero waste. Fully reusable systems designed for responsible spectacle.",
    accent: "var(--secondary)",
  },
];

export default function TechAdvantage() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "var(--color-surface-8)",
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Top separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(var(--primary-rgb), 0.2), transparent)",
        }}
      />

      <div
        ref={ref}
        className="tech-grid"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity var(--duration-crawl-alt) var(--ease-default)",
        }}
      >
        {/* Image panel */}
        <div
          className="tech-image-panel"
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="tech-image-overlay"
            style={{
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        {/* Text panel */}
        <div
          className="tech-text-panel"
          style={{
            background: "var(--color-surface-8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--primary)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-6)",
            }}
          >
            Technology Advantage
          </span>

          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "var(--foreground)",
              lineHeight: 0.95,
              letterSpacing: "var(--tracking-normal)",
              marginBottom: "var(--space-14)",
            }}
          >
            The World's Most Advanced
            <br />
            <span style={{ color: "rgba(var(--primary-rgb), 0.6)" }}>
              Drone Show Technology
            </span>
          </h2>

          {/* Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TECH_HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: "var(--space-8) 0",
                  borderBottom:
                    i < TECH_HIGHLIGHTS.length - 1
                      ? "1px solid rgba(var(--foreground-rgb), 0.4)"
                      : "none",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(30px)",
                  transition: `opacity 0.7s ${
                    0.2 + i * 0.1
                  }s ease, transform 0.7s ${0.2 + i * 0.1}s ease`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-5)",
                  }}
                >
                  <div
                    style={{
                      width: "2px",
                      minHeight: "40px",
                      background: `linear-gradient(to bottom, ${item.accent}, transparent)`,
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "var(--text-md-alt)",
                        color: "var(--foreground)",
                        marginBottom: "var(--space-2)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(140,140,140,0.8)",
                        fontSize: "var(--text-sm-alt)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div
            style={{
              marginTop: "var(--space-12)",
              paddingTop: "var(--space-10)",
              borderTop: "1px solid rgba(var(--primary-rgb), 0.1)",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-3xs)",
                letterSpacing: "0.15em",
                color: "var(--secondary)",
                textTransform: "uppercase",
              }}
            >
              Every performance engineered for reliability, visual impact, and
              safety.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(var(--secondary-rgb), 0.15), transparent)",
        }}
      />

      <style>{`
        /* ── Desktop ── */
        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 80vh;
        }
        .tech-image-panel {
          min-height: 500px;
        }
        .tech-image-overlay {
          background: linear-gradient(to right, rgba(var(--color-surface-8-rgb), 0.3) 0%, rgba(var(--color-surface-8-rgb), 0.7) 80%, rgba(var(--color-surface-8-rgb), 1) 100%);
        }
        .tech-text-panel {
          padding: clamp(3rem, 6vw, 7rem) clamp(2.5rem, 5vw, 6rem);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .tech-grid {
            display: block;
            min-height: unset;
          }
          /* Image becomes a tall cinematic banner on top */
          .tech-image-panel {
            height: 55vw;
            min-height: 240px;
            max-height: 360px;
          }
          /* Overlay fades to bottom so it blends into the dark section below */
          .tech-image-overlay {
            background: linear-gradient(
              to bottom,
              rgba(var(--color-surface-8-rgb), 0.2) 0%,
              rgba(var(--color-surface-8-rgb), 0.5) 60%,
              rgba(var(--color-surface-8-rgb), 1) 100%
            );
          }
          .tech-text-panel {
            padding: 2.5rem 1.5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
