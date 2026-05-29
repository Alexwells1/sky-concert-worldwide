import { useInView } from "../../../hooks/useInView";

export default function ExperiencePhilosophy() {
  const { ref, inView } = useInView();

  return (
    <section
      className="philosophy-section"
      style={{
        background: "#060A14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background word */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: '"Bebas Neue", cursive',
          fontSize: "clamp(12rem, 30vw, 30rem)",
          color: "rgba(0,229,255,0.02)",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        EMOTION
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "3rem",
          }}
        >
          Our Philosophy
        </span>

        <blockquote
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
            color: "white",
            lineHeight: 1.15,
            margin: "0 0 3rem",
            letterSpacing: "-0.01em",
          }}
        >
          "Every formation is designed
          <br />
          <span style={{ color: "rgba(0,229,255,0.8)" }}>
            to make people feel
          </span>
          <br />
          something."
        </blockquote>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #C9A84C, transparent)",
            margin: "0 auto 3rem",
          }}
        />

        <p
          style={{
            color: "rgba(160,160,160,0.85)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            lineHeight: 1.9,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          We do not simply program drones to fly in patterns. We design
          emotional experiences from the audience's perspective — backward from
          the feeling we want to create, forward to the formations that deliver
          it.
        </p>
      </div>

      <style>{`
        .philosophy-section {
          padding: 12rem 1.5rem;
        }
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 6rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
