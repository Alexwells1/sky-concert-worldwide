import SectionLabel from "../../common/SectionLabel";
import { WHATS_NEXT_STEPS, WHATS_NEXT_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function WhatsNext() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <SectionLabel text={WHATS_NEXT_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--foreground)",
              lineHeight: 1.2,
            }}
          >
            {WHATS_NEXT_META.headline}
          </h2>
        </div>
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition:
              "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          }}
        >
          {WHATS_NEXT_STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "var(--space-6)",
                paddingBottom: i < WHATS_NEXT_STEPS.length - 1 ? "2rem" : 0,
                position: "relative",
              }}
            >
              {/* Connector line */}
              {i < WHATS_NEXT_STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: "19px",
                    top: "40px",
                    bottom: 0,
                    width: "1px",
                    background:
                      "linear-gradient(to bottom, rgba(var(--primary-rgb), 0.3), transparent)",
                  }}
                />
              )}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(var(--primary-rgb), 0.3)",
                  borderRadius: "var(--radius-full)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(var(--color-surface-3-rgb), 0.45)",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "var(--text-xs)",
                    color: "var(--primary)",
                    fontWeight: "var(--font-bold)",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <div style={{ paddingTop: "var(--space-2)" }}>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "var(--text-md)",
                    color: "var(--foreground)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
