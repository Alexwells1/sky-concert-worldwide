import { ABOUT_PARTNERS, ABOUT_PARTNERS_META } from "../../../constants";

export default function Partnership() {
  // Duplicate array for seamless loop
  const doubled = [...ABOUT_PARTNERS, ...ABOUT_PARTNERS];

  return (
    <section
      style={{
        background: "transparent",
        padding: "5rem 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "0 1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            color: "#00E5FF",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {ABOUT_PARTNERS_META.sectionLabel}
        </p>
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "white",
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
            background: "linear-gradient(to right, #060A14, transparent)",
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
            background: "linear-gradient(to left, #060A14, transparent)",
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
                padding: "1.25rem 3rem",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
                transition: "opacity 0.3s ease",
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
                    transition: "opacity 0.3s ease",
                    display: "block",
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
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
