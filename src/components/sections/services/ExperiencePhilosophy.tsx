import { useInView } from "../../../hooks/useInView";

export default function ExperiencePhilosophy() {
  const { ref, inView } = useInView();

  return (
    <section
      className="philosophy-section"
      style={{
        background: "var(--color-surface-3)",
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
          color: "rgba(var(--primary-rgb), 0.02)",
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
          transition:
            "opacity var(--duration-crawl-alt) var(--ease-default), transform var(--duration-crawl-alt) var(--ease-default)",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-label)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--secondary)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "var(--space-12)",
          }}
        >
          Our Philosophy
        </span>

        <blockquote
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
            color: "var(--foreground)",
            lineHeight: 1.15,
            margin: "0 0 var(--space-12)",
            letterSpacing: "-0.01em",
          }}
        >
          "Every formation is designed
          <br />
          <span style={{ color: "rgba(var(--primary-rgb), 0.8)" }}>
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
              "linear-gradient(to right, transparent, var(--secondary), transparent)",
            margin: "0 auto var(--space-12)",
          }}
        />

        <p
          style={{
            color: "rgba(var(--color-gray-160-rgb), 0.85)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            lineHeight: 1.9,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          We do not simply program drones to fly in patterns. We design
          emotional experiences from the audience's perspective backward from
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
