import SectionLabel from "../../common/SectionLabel";
import { useInView } from "../../../hooks/useInView";
import { ABOUT_VISION } from "../../../constants/about.constants";

export default function OurVision() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(var(--primary-rgb), 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.75rem)",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
        }}
      >
        <SectionLabel text={ABOUT_VISION.sectionLabel} />
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "var(--foreground)",
            lineHeight: 0.95,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-6)",
          }}
        >
          {ABOUT_VISION.headline}
        </h2>
        <p
          style={{
            color: "var(--muted-foreground)",
            fontSize: "var(--text-md-alt)",
            lineHeight: 1.85,
          }}
        >
          {ABOUT_VISION.body}
        </p>
      </div>
    </section>
  );
}
