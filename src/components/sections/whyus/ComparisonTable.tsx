import { useInView } from "../../../hooks/useInView";
import { COMPARISON_ROWS, COMPARISON_META } from "../../../constants";

export default function ComparisonTable() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: tableRef, inView: tableInView } = useInView();

  return (
    <section
      style={{
        background: "var(--color-surface-8)",
        padding: "var(--space-8) var(--space-6)",
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
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(var(--primary-rgb), 0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className="comparison-header-grid"
          style={{
            marginBottom: "var(--space-24)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-16)",
            alignItems: "end",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-label)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--primary)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "var(--space-6)",
              }}
            >
              {COMPARISON_META.sectionLabel}
            </span>
            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 6vw, 6rem)",
                color: "var(--foreground)",
                lineHeight: 0.88,
                letterSpacing: "var(--tracking-normal)",
                margin: 0,
              }}
            >
              {COMPARISON_META.headline}
            </h2>
          </div>
          <p
            style={{
              color: "rgba(200,200,200,0.85)",
              fontSize: "var(--text-base)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            See exactly how drone light shows compare to conventional event
            entertainment across every dimension that matters.
          </p>
        </div>

        {/* Column headers */}
        <div
          ref={tableRef}
          style={{
            opacity: tableInView ? 1 : 0,
            transform: tableInView ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
          }}
        >
          <div
            className="comparison-col-headers"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "0",
              borderBottom: "1px solid rgba(var(--foreground-rgb), 0.7)",
              paddingBottom: "var(--space-6)",
            }}
          >
            <div
              className="comparison-col-category-header"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                color: "rgba(var(--color-gray-160-rgb), 0.9)",
                textTransform: "uppercase",
              }}
            >
              Category
            </div>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                color: "var(--primary)",
                textTransform: "uppercase",
                padding: "0 var(--space-6)",
              }}
            >
              {COMPARISON_META.ourLabel}
            </div>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                color: "rgba(var(--color-gray-160-rgb), 0.7)",
                textTransform: "uppercase",
                padding: "0 var(--space-6)",
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
                borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
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
                  padding: "var(--space-8) 0",
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-3xs)",
                  letterSpacing: "0.1em",
                  color: "rgba(var(--color-gray-180-rgb), 0.9)",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "var(--font-semibold)",
                }}
              >
                {row.category}
              </div>

              {/* Sky Concert value */}
              <div
                className="comparison-value-cell"
                style={{
                  padding: "var(--space-8) var(--space-6)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                  borderLeft: "1px solid rgba(var(--primary-rgb), 0.12)",
                  background: "rgba(var(--primary-rgb), 0.03)",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "var(--radius-full)",
                    background: "var(--primary)",
                    flexShrink: 0,
                    marginTop: "5px",
                    boxShadow: "var(--shadow-xs)",
                  }}
                />
                <div>
                  {/* Category label shown only on mobile above the value */}
                  <span
                    className="comparison-value-text"
                    style={{
                      display: "block",
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "var(--text-label)",
                      letterSpacing: "0.15em",
                      color: "rgba(var(--primary-rgb), 0.6)",
                      textTransform: "uppercase",
                      marginBottom: "var(--space-0-5)",
                    }}
                  >
                    {/* Category shown inline on mobile */}
                  </span>
                  <span
                    className="comparison-value-text"
                    style={{
                      color: "var(--foreground)",
                      fontSize: "var(--text-base)",
                      lineHeight: 1.5,
                      fontWeight: "var(--font-medium)",
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
                  padding: "var(--space-8) var(--space-6)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                  borderLeft: "1px solid rgba(var(--foreground-rgb), 0.06)",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(100,100,100,0.5)",
                    flexShrink: 0,
                    marginTop: "5px",
                  }}
                />
                <span
                  className="comparison-value-text"
                  style={{
                    color: "rgba(var(--color-gray-160-rgb), 0.85)",
                    fontSize: "var(--text-base)",
                    lineHeight: 1.5,
                  }}
                >
                  {row.traditional}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
