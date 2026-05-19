import SectionLabel from "../../common/SectionLabel";
import { HOME_USE_CASES, HOME_USE_CASES_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function UseCasesSection() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "transparent", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.25rem)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionLabel text={HOME_USE_CASES_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "white",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {HOME_USE_CASES_META.headline}
          </h2>
        </div>

        {/* Elegant numbered grid — 2 columns on desktop, 1 on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {HOME_USE_CASES.map((item, i) => {
            const isRightCol = i % 2 !== 0;
            const isLastRow = i >= HOME_USE_CASES.length - 2;
            return (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.1rem",
                  padding: "1.6rem 1.75rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: isRightCol
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                  borderBottom: isLastRow
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                }}
              >
                {/* Gold ordinal number */}
                <span
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "0.68rem",
                    color: "#C9A84C",
                    letterSpacing: "0.18em",
                    lineHeight: 1,
                    paddingTop: "0.35rem",
                    minWidth: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Text content */}
                <div>
                  <p
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 500,
                      margin: "0 0 0.35rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
