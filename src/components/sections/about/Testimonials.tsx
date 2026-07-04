import SectionLabel from "../../common/SectionLabel";
import { ABOUT_TESTIMONIALS } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function Testimonials() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.75rem)",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
        }}
      >
        <SectionLabel text={ABOUT_TESTIMONIALS.sectionLabel} />
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            color: "var(--foreground)",
            marginBottom: "var(--space-12)",
            lineHeight: 1.2,
          }}
        >
          {ABOUT_TESTIMONIALS.headline}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {ABOUT_TESTIMONIALS.items.map((item, i) => (
            <div
              key={i}
              className="card-base"
              style={{
                padding: "var(--space-8)",
                borderRadius: "var(--radius-xs)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
              }}
            >
              <div
                style={{
                  fontSize: "var(--text-3xl)",
                  color: "var(--primary)",
                  fontFamily: '"Playfair Display", serif',
                  lineHeight: 1,
                  opacity: 0.4,
                }}
              >
                "
              </div>
              <p
                style={{
                  color: "var(--muted-foreground-2)",
                  fontSize: "var(--text-body-lg)",
                  lineHeight: 1.85,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                {item.quote}
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(var(--primary-rgb), 0.1)",
                  paddingTop: "var(--space-5)",
                }}
              >
                <div
                  style={{
                    color: "var(--foreground)",
                    fontWeight: "var(--font-medium)",
                    fontSize: "var(--text-md)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "var(--text-xs)",
                    color: "var(--secondary)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.role} &nbsp;·&nbsp; {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
