import { useInView } from "../../../hooks/useInView";

const PRINCIPLES = [
  {
    title: "Zero Waste, Every Show",
    body: "No pyrotechnic residue, no ground debris, no chemical fallout. Our drones land exactly where they launched and are recharged for the next performance.",
  },
  {
    title: "Silent Spectacle",
    body: "A thousand drones produce a fraction of the noise of a single firework. We let the sky speak without disturbing the communities beneath it.",
  },
  {
    title: "Technology That Respects Tomorrow",
    body: "Reusable, rechargeable, and engineered to last. Every component is designed for repeated use, not single-event consumption.",
  },
];

export default function SustainableDesign() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "var(--color-surface-7)",
        padding: "var(--space-8) var(--space-6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(78,205,130,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          position: "relative",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "var(--space-24)" }}>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-xs)",
              letterSpacing: "0.3em",
              color: "var(--success)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-6)",
            }}
          >
            Sustainable by Design
          </span>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "var(--foreground)",
              lineHeight: 0.9,
              letterSpacing: "var(--tracking-normal)",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            The Future of Spectacle
            <br />
            <span style={{ color: "rgba(var(--success-rgb), 0.5)" }}>
              Should Respect the Environment.
            </span>
          </h2>
        </div>

        {/* Principles */}
        <div className="sustainable-grid">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className="sustainable-card"
              style={{
                padding: "var(--space-12)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ${
                  0.2 + i * 0.15
                }s ease, transform 0.7s ${0.2 + i * 0.15}s ease`,
              }}
            >
              <div
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "5rem",
                  color: "rgba(var(--success-rgb), 0.06)",
                  lineHeight: 0.8,
                  marginBottom: "var(--space-8)",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "var(--text-md-lg)",
                  color: "var(--foreground)",
                  marginBottom: "var(--space-4)",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: "rgba(140,140,140,0.8)",
                  fontSize: "var(--text-md)",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          style={{
            marginTop: "var(--space-20)",
            paddingTop: "var(--space-12)",
            borderTop: "1px solid rgba(var(--success-rgb), 0.08)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontSize: "1.4rem",
              color: "rgba(var(--success-rgb), 0.7)",
            }}
          >
            Create spectacular moments responsibly.
          </p>
        </div>
      </div>

      <style>{`
        /* ── Desktop: 3-column bordered grid ── */
        .sustainable-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
        }
        .sustainable-card:first-child {
          border-left: 1px solid rgba(var(--success-rgb), 0.1);
          border-right: 1px solid rgba(var(--success-rgb), 0.1);
        }
        .sustainable-card:not(:first-child) {
          border-right: 1px solid rgba(var(--success-rgb), 0.1);
        }

        /* ── Mobile: single column, horizontal dividers ── */
        @media (max-width: 768px) {
          .sustainable-grid {
            grid-template-columns: 1fr !important;
          }
          .sustainable-card {
            padding: 2.5rem 0 !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(var(--success-rgb), 0.1);
          }
          .sustainable-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
