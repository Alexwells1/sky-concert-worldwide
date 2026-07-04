import { ABOUT_TRUST } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function TrustCredibility() {
  const { ref, inView } = useInView();

  // Triple the items so the marquee loop is seamless at any screen width
  const items = [
    ...ABOUT_TRUST.items,
    ...ABOUT_TRUST.items,
    ...ABOUT_TRUST.items,
  ];

  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-14) 0",
        overflow: "hidden",
      }}
    >
      {/* Fade-in wrapper only the opacity entrance, no translateY to avoid clipping */}
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        {/* Outer container with edge masks */}
        <div style={{ position: "relative" }}>
          {/* Left fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background:
                "linear-gradient(to right, var(--color-surface-3), transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          {/* Right fade */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background:
                "linear-gradient(to left, var(--color-surface-3), transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Border lines full width strip feel */}
          <div
            style={{
              borderTop: "1px solid rgba(var(--foreground-rgb), 0.06)",
              borderBottom: "1px solid rgba(var(--foreground-rgb), 0.06)",
              padding: "0",
            }}
          >
            {/* Marquee track scrolls right to left */}
            <div
              className="trust-track"
              style={{
                display: "flex",
                alignItems: "center",
                width: "max-content",
                animation: "trustMarquee 20s linear infinite",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="trust-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "1.1rem var(--space-10)",
                    borderRight: "1px solid rgba(var(--foreground-rgb), 0.06)",
                    flexShrink: 0,
                    cursor: "default",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "var(--radius-full)",
                      background: "var(--primary)",
                      flexShrink: 0,
                      opacity: 0.6,
                    }}
                  />
                  <span
                    className="trust-label"
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.62rem",
                      color: "rgba(var(--foreground-rgb), 0.45)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trustMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .trust-track:hover {
          animation-play-state: paused;
        }
        .trust-item:hover .trust-label {
          color: rgba(var(--foreground-rgb), 0.85);
        }
        .trust-item:hover span:first-child {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
