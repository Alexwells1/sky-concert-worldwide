import { useInView } from "../../../hooks/useInView";

const TECH_HIGHLIGHTS = [
  {
    title: "Precision Swarm Synchronization",
    detail:
      "RTK-GPS positioning with centimeter-level accuracy across hundreds of simultaneous flight paths.",
    accent: "#00E5FF",
  },
  {
    title: "Military-Grade Positioning Systems",
    detail:
      "Redundant telemetry and real-time correction ensure every drone is exactly where it must be.",
    accent: "#C9A84C",
  },
  {
    title: "Large-Scale Formation Control",
    detail:
      "Proprietary swarm intelligence enables complex animated formations at any fleet size.",
    accent: "#00E5FF",
  },
  {
    title: "Environmentally Responsible Operations",
    detail:
      "Zero pyrotechnics. Zero waste. Fully reusable systems designed for responsible spectacle.",
    accent: "#C9A84C",
  },
];

export default function TechAdvantage() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "#020810",
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
            "linear-gradient(to right, transparent, rgba(0,229,255,0.2), transparent)",
        }}
      />

      <div
        ref={ref}
        className="tech-grid"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 1s ease",
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
            background: "#020810",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "#00E5FF",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Technology Advantage
          </span>

          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "white",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              marginBottom: "3.5rem",
            }}
          >
            The World's Most Advanced
            <br />
            <span style={{ color: "rgba(0,229,255,0.6)" }}>
              Drone Show Technology
            </span>
          </h2>

          {/* Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TECH_HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: "2rem 0",
                  borderBottom:
                    i < TECH_HIGHLIGHTS.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
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
                    gap: "1.25rem",
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
                        fontSize: "1.05rem",
                        color: "white",
                        marginBottom: "0.5rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(140,140,140,0.8)",
                        fontSize: "0.85rem",
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
              marginTop: "3rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(0,229,255,0.1)",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "#C9A84C",
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
            "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)",
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
          background: linear-gradient(to right, rgba(2,8,16,0.3) 0%, rgba(2,8,16,0.7) 80%, rgba(2,8,16,1) 100%);
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
              rgba(2,8,16,0.2) 0%,
              rgba(2,8,16,0.5) 60%,
              rgba(2,8,16,1) 100%
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
