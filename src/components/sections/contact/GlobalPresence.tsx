import SectionLabel from "../../common/SectionLabel";
import { GLOBAL_PRESENCE_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function GlobalPresence() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition:
              "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          }}
        >
          <SectionLabel text={GLOBAL_PRESENCE_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--foreground)",
              lineHeight: 1.2,
              marginBottom: "var(--space-4)",
            }}
          >
            {GLOBAL_PRESENCE_META.headline}
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginBottom: "var(--space-8)",
            }}
          >
            {GLOBAL_PRESENCE_META.body}
          </p>
        </div>
      </div>
    </section>
  );
}
