import { useInView } from "../../../hooks/useInView";

const FUTURE_PILLARS = [
  {
    label: "Expansion",
    heading: "Continent-Wide Reach",
    body: "From Lagos to Nairobi, Accra to Johannesburg we are building the infrastructure to deliver world-class aerial experiences across every major African market.",
  },
  {
    label: "Innovation",
    heading: "Proprietary Sky Formats",
    body: "We are developing original sky storytelling formats built specifically for African cultural identity, national moments, and brand narratives.",
  },
  {
    label: "Technology",
    heading: "Next-Generation Swarm Systems",
    body: "Pushing the frontier of drone intelligence more drones, tighter formations, richer colour palettes, and real-time adaptive choreography.",
  },
];

// Extracted into its own component so useInView is called at the top level
function PillarRow({
  pillar,
  index,
}: {
  pillar: (typeof FUTURE_PILLARS)[number];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="future-row"
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1.5fr",
        gap: "var(--space-12)",
        padding: "var(--space-14) 0",
        borderTop: "1px solid rgba(var(--foreground-rgb), 0.07)",
        alignItems: "start",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(1.5rem)",
        transition: `opacity 0.8s ease ${index * 100}ms, transform 0.8s ease ${
          index * 100
        }ms`,
      }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          color: "rgba(var(--foreground-rgb), 0.4)",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Heading */}
      <div>
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-label)",
            color: "var(--secondary)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            marginBottom: "var(--space-3)",
          }}
        >
          {pillar.label}
        </p>
        <h3
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "var(--foreground)",
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
          color: "#aaa",
          fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
          lineHeight: 1.85,
          margin: 0,
          paddingTop: "var(--space-1)",
        }}
      >
        {pillar.body}
      </p>
    </div>
  );
}

export default function BuildingTheFuture() {
  const { ref: headRef, inView: headInView } = useInView();

  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-4) var(--space-6)",
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
          borderRadius: "var(--radius-full)",
          background:
            "radial-gradient(ellipse, rgba(var(--primary-rgb), 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Large heading */}
        <div
          ref={headRef}
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? "translateY(0)" : "translateY(2.5rem)",
            transition:
              "opacity var(--duration-crawl-alt) var(--ease-default), transform var(--duration-crawl-alt) var(--ease-default)",
            marginBottom: "var(--space-24)",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              color: "var(--primary)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              marginBottom: "var(--space-8)",
            }}
          >
            What We're Building
          </p>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "var(--foreground)",
              lineHeight: 0.88,
              letterSpacing: "var(--tracking-normal)",
              maxWidth: "880px",
              margin: 0,
            }}
          >
            Building the Future of Aerial Entertainment
          </h2>
        </div>

        {/* Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FUTURE_PILLARS.map((pillar, i) => (
            <PillarRow key={pillar.label} pillar={pillar} index={i} />
          ))}
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
