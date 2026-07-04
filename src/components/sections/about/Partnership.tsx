import { ABOUT_PARTNERS, ABOUT_PARTNERS_META } from "../../../constants";

export default function Partnership() {
  // Duplicate array for seamless loop
  const doubled = [...ABOUT_PARTNERS, ...ABOUT_PARTNERS];

  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-20) 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "var(--space-12)",
          padding: "0 var(--space-6)",
        }}
      >
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-label)",
            color: "var(--primary)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            marginBottom: "var(--space-3)",
          }}
        >
          {ABOUT_PARTNERS_META.sectionLabel}
        </p>
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--foreground)",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          {ABOUT_PARTNERS_META.headline}
        </h2>
      </div>

      {/* Marquee track */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, var(--color-surface-3), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, var(--color-surface-3), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
            width: "max-content",
            animation: "marquee 28s linear infinite",
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "var(--space-5) var(--space-12)",
                borderRight: "1px solid rgba(var(--foreground-rgb), 0.06)",
                flexShrink: 0,
                transition: "opacity var(--duration-normal-alt) var(--ease-default)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
              }}
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  style={{
                    height: "36px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.6,
                    transition: "opacity var(--duration-normal-alt) var(--ease-default)",
                    display: "block",
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "var(--text-sm)",
                    color: "rgba(var(--foreground-rgb), 0.4)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
