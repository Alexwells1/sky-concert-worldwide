import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { HOME_WHY_US_PILLARS, HOME_WHY_US_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function WhyUsPreview() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "transparent", padding: "4rem 1.5rem" }}>
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
              color: "white",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            {HOME_WHY_US_META.headline}
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            {HOME_WHY_US_META.subheadline}
          </p>

          {/* Inline pill list — no cards, no descriptions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "2rem",
            }}
          >
            {HOME_WHY_US_PILLARS.map((pillar) => (
              <span
                key={pillar.id}
                style={{
                  padding: "0.45rem 1rem",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.02em",
                  background: "rgba(255,255,255,0.03)",
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
