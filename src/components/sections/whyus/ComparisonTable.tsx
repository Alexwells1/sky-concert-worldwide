import { useInView } from "../../../hooks/useInView";
import { COMPARISON_ROWS, COMPARISON_META } from "../../../constants";

export default function ComparisonTable() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: tableRef, inView: tableInView } = useInView();

  return (
    <section
      style={{
        background: "#020810",
        padding: "10rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .comparison-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .comparison-col-headers {
            grid-template-columns: 1fr 1fr !important;
          }
          .comparison-col-category-header {
            display: none !important;
          }
          .comparison-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .comparison-row-category {
            display: none !important;
          }
          .comparison-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .comparison-badges {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .comparison-value-text {
            font-size: 0.9rem !important;
          }
          .comparison-value-cell {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className="comparison-header-grid"
          style={{
            marginBottom: "6rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#00E5FF",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              {COMPARISON_META.sectionLabel}
            </span>
            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 6vw, 6rem)",
                color: "white",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              {COMPARISON_META.headline}
            </h2>
          </div>
          <p
            style={{
              color: "rgba(200,200,200,0.85)",
              fontSize: "1rem",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            See exactly how drone light shows compare to conventional event
            entertainment — across every dimension that matters.
          </p>
        </div>

        {/* Column headers */}
        <div
          ref={tableRef}
          style={{
            opacity: tableInView ? 1 : 0,
            transform: tableInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div
            className="comparison-col-headers"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "0",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "1.5rem",
            }}
          >
            <div
              className="comparison-col-category-header"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(160,160,160,0.9)",
                textTransform: "uppercase",
              }}
            >
              Category
            </div>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#00E5FF",
                textTransform: "uppercase",
                padding: "0 1.5rem",
              }}
            >
              {COMPARISON_META.ourLabel}
            </div>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(160,160,160,0.7)",
                textTransform: "uppercase",
                padding: "0 1.5rem",
              }}
            >
              {COMPARISON_META.theirLabel}
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.category}
              className="comparison-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                opacity: tableInView ? 1 : 0,
                transform: tableInView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s ${
                  0.1 + i * 0.07
                }s ease, transform 0.6s ${0.1 + i * 0.07}s ease`,
              }}
            >
              {/* Category */}
              <div
                className="comparison-row-category"
                style={{
                  padding: "2rem 0",
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "rgba(180,180,180,0.9)",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                }}
              >
                {row.category}
              </div>

              {/* Sky Concert value */}
              <div
                className="comparison-value-cell"
                style={{
                  padding: "2rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                  borderLeft: "1px solid rgba(0,229,255,0.12)",
                  background: "rgba(0,229,255,0.03)",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#00E5FF",
                    flexShrink: 0,
                    marginTop: "5px",
                    boxShadow: "0 0 10px rgba(0,229,255,0.6)",
                  }}
                />
                <div>
                  {/* Category label shown only on mobile above the value */}
                  <span
                    className="comparison-value-text"
                    style={{
                      display: "block",
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.5rem",
                      letterSpacing: "0.15em",
                      color: "rgba(0,229,255,0.6)",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {/* Category shown inline on mobile */}
                  </span>
                  <span
                    className="comparison-value-text"
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {row.skyConcert}
                  </span>
                </div>
              </div>

              {/* Traditional value */}
              <div
                className="comparison-value-cell"
                style={{
                  padding: "2rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "rgba(100,100,100,0.5)",
                    flexShrink: 0,
                    marginTop: "5px",
                  }}
                />
                <span
                  className="comparison-value-text"
                  style={{
                    color: "rgba(160,160,160,0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {row.traditional}
                </span>
              </div>
            </div>
          ))}

          {/* Footer bar */}
          <div
            className="comparison-footer"
            style={{
              marginTop: "4rem",
              padding: "2.5rem 3rem",
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "rgba(0,229,255,0.7)",
                margin: 0,
              }}
            >
              There is no comparison — only a new standard.
            </p>
            <div
              className="comparison-badges"
              style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
            >
              {[
                "Fully Insured",
                "International Safety Standards",
                "Eco-Conscious",
                "End-to-End In-House",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "rgba(160,160,160,0.8)",
                    textTransform: "uppercase",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}