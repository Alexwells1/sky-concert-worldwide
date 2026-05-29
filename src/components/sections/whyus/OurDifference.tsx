import { useInView } from "../../../hooks/useInView";
import { WHYUS_INTRO } from "../../../constants";

export default function OurDifference() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "#060A14",
        padding: "10rem 1.5rem",
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
            "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
        }}
      />

      <div
        ref={ref}
        className="our-difference-grid"
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(35px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Left: large label + headline */}
        <div>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "#C9A84C",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "2rem",
            }}
          >
            {WHYUS_INTRO.sectionLabel}
          </span>
          <h2
            className="our-difference-headline"
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 6vw, 6.5rem)",
              color: "white",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            Why Visionary
            <br />
            Brands Choose
            <br />
            <span style={{ color: "rgba(201,168,76,0.55)" }}>Sky Concert</span>
          </h2>
        </div>

        {/* Right: text + decorative rule */}
        <div>
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "linear-gradient(to right, #C9A84C, transparent)",
              marginBottom: "2rem",
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
