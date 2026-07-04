import { ABOUT_WHO_WE_ARE } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function WhoWeAre() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "transparent",
        padding: "0 1.5rem 7rem",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }} ref={ref}>
        {/* Oversize intro statement */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(2rem)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "4rem",
            marginBottom: "5rem",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.72rem",
              color: "#C9A84C",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            {ABOUT_WHO_WE_ARE.sectionLabel}
          </p>

          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3.5rem, 8vw, 8rem)",
              color: "white",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              maxWidth: "900px",
              marginBottom: "0",
            }}
          >
            {ABOUT_WHO_WE_ARE.intro}
          </h2>
        </div>

        {/* Body + Pillars as editorial columns */}
        <div
          className="who-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left body and founder note */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(1.5rem)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                lineHeight: 1.9,
                marginBottom: "3rem",
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
              }}
            >
              {ABOUT_WHO_WE_ARE.body}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .pillar-item:hover .pillar-text {
          color: rgba(255, 255, 255, 0.85);
        }
        @media (max-width: 768px) {
          .who-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
