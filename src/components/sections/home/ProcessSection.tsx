import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { HOME_PROCESS_STEPS, HOME_PROCESS_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function ProcessSection() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "#060A14", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.25rem)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionLabel text={HOME_PROCESS_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "white",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {HOME_PROCESS_META.headline}
          </h2>
        </div>

        {/* Compact step strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0",
          }}
        >
          {HOME_PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: "1.25rem 1rem",
                borderLeft:
                  i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <span
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.12em",
                }}
              >
                {step.number}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/process" className="btn-ghost">
            See How It Works <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
