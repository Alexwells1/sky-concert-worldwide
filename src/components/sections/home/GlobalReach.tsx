import { Check } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { HOME_GLOBAL } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function GlobalReach() {
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
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-12)",
            alignItems: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition:
              "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          }}
        >
          <div>
            <SectionLabel text={HOME_GLOBAL.sectionLabel} />
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--foreground)",
                lineHeight: 1.2,
                marginBottom: "var(--space-6)",
              }}
            >
              {HOME_GLOBAL.headline}
            </h2>
            <p
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
                marginBottom: "var(--space-8)",
              }}
            >
              {HOME_GLOBAL.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              {HOME_GLOBAL.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-3)",
                    color: "var(--muted-foreground-2)",
                    fontSize: "var(--text-md)",
                    lineHeight: 1.6,
                  }}
                >
                  <Check
                    size={16}
                    style={{
                      color: "var(--primary)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
