import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { HOME_WHY_US_PILLARS, HOME_WHY_US_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function WhyUsPreview() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-16) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.25rem)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionLabel text={HOME_WHY_US_META.sectionLabel} />

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "var(--foreground)",
              lineHeight: 1.2,
              marginBottom: "var(--space-3)",
            }}
          >
            {HOME_WHY_US_META.headline}
          </h2>

          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.45)",
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              marginBottom: "var(--space-8)",
            }}
          >
            {HOME_WHY_US_META.subheadline}
          </p>

          {/* Inline pill list no cards, no descriptions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--space-1-5)",
              marginBottom: "var(--space-8)",
            }}
          >
            {HOME_WHY_US_PILLARS.map((pillar) => (
              <span
                key={pillar.id}
                style={{
                  padding: "0.45rem var(--space-4)",
                  border: "1px solid rgba(var(--foreground-rgb), 0.12)",
                  borderRadius: "var(--radius-lg)",
                  color: "rgba(var(--foreground-rgb), 0.75)",
                  fontSize: "0.8rem",
                  letterSpacing: "var(--tracking-normal)",
                  background: "rgba(var(--foreground-rgb), 0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                {pillar.title}
              </span>
            ))}
          </div>

          <Link to="/why-us" className="btn-ghost">
            Why Visionaries Choose Us <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
