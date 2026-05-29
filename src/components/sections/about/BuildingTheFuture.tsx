import { useInView } from "../../../hooks/useInView";

const FUTURE_PILLARS = [
  {
    label: "Expansion",
    heading: "Continent-Wide Reach",
    body:
      "From Lagos to Nairobi, Accra to Johannesburg — we are building the infrastructure to deliver world-class aerial experiences across every major African market.",
  },
  {
    label: "Innovation",
    heading: "Proprietary Sky Formats",
    body:
      "We are developing original sky storytelling formats built specifically for African cultural identity, national moments, and brand narratives.",
  },
  {
    label: "Technology",
    heading: "Next-Generation Swarm Systems",
    body:
      "Pushing the frontier of drone intelligence — more drones, tighter formations, richer colour palettes, and real-time adaptive choreography.",
  },
];

export default function BuildingTheFuture() {
  const { ref: headRef, inView: headInView } = useInView();

  return (
    <section
      style={{
        background: "transparent",
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
        {/* Large heading */}
        <div
          ref={headRef}
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? "translateY(0)" : "translateY(2.5rem)",
            transition: "opacity 1s ease, transform 1s ease",
            marginBottom: "6rem",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.58rem",
              color: "#00E5FF",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            What We're Building
          </p>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "white",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              maxWidth: "880px",
              margin: "0 0 0 0",
            }}
          >
            Building the Future of Aerial Entertainment
          </h2>
        </div>

        {/* Pillars — large numbered editorial rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FUTURE_PILLARS.map((pillar, i) => {
            const { ref, inView } = useInView();
            return (
              <div
                key={i}
                ref={ref}
                className="future-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1.5fr",
                  gap: "3rem",
                  padding: "3.5rem 0",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  alignItems: "start",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(1.5rem)",
                  transition: `opacity 0.8s ease ${i * 100}ms, transform 0.8s ease ${i * 100}ms`,
                }}
              >
                {/* Index */}
                <span
                  style={{
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Heading */}
                <div>
                  <p
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.5rem",
                      color: "#C9A84C",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {pillar.label}
                  </p>
                  <h3
                    style={{
                      fontFamily: '"Bebas Neue", cursive',
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      color: "white",
                      letterSpacing: "0.03em",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {pillar.heading}
                  </h3>
                </div>

                {/* Body */}
                <p
                  style={{
                    color: "#777",
                    fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                    lineHeight: 1.85,
                    margin: 0,
                    paddingTop: "0.25rem",
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .future-row {
            grid-template-columns: 48px 1fr !important;
            gap: 1.5rem !important;
          }
          .future-row > *:last-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
}
