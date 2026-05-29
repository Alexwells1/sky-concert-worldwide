import { ABOUT_STORY } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

/**
 * Drop your cinematic video URL here.
 * Recommended: slow aerial / drone footage, dark exposure, no sound needed.
 */
const STORY_VIDEO_URL =
  "https://v1.pinimg.com/videos/mc/720p/dc/e7/16/dce7168d129f4a881b310984e736d114.mp4";

export default function OurStory() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "transparent", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }} ref={ref}>
        <div
          className="story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — Video */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-2rem)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
              position: "relative",
              aspectRatio: "4 / 5",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "2px",
                overflow: "hidden",
                background: "#060c18", // fallback while video loads
              }}
            >
              {STORY_VIDEO_URL ? (
                <video
                  src={STORY_VIDEO_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              ) : (
                /* Placeholder shown until a video URL is provided */
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    background:
                      "linear-gradient(160deg, #0a1628 0%, #061020 40%, #030810 100%)",
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="19"
                      stroke="rgba(0,229,255,0.2)"
                      strokeWidth="1"
                    />
                    <polygon
                      points="16,13 30,20 16,27"
                      fill="rgba(0,229,255,0.3)"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.48rem",
                      color: "rgba(255,255,255,0.2)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    Video Coming Soon
                  </span>
                </div>
              )}

              {/* Dark overlay — keeps text readable and exposure cinematic */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Corner accents */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  width: "36px",
                  height: "36px",
                  borderTop: "1px solid rgba(0,229,255,0.4)",
                  borderLeft: "1px solid rgba(0,229,255,0.4)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  right: "1.5rem",
                  width: "36px",
                  height: "36px",
                  borderBottom: "1px solid rgba(0,229,255,0.4)",
                  borderRight: "1px solid rgba(0,229,255,0.4)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Offset label tag */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                background: "#060A14",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "0.75rem 1.25rem",
                zIndex: 2,
              }}
            >
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.55rem",
                  color: "#00E5FF",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Sky Concert Worldwide
              </p>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.5rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.15em",
                  margin: "0.2rem 0 0",
                }}
              >
                Nigeria · Africa · Global
              </p>
            </div>
          </div>

          {/* RIGHT — Narrative text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(2rem)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.58rem",
                color: "#00E5FF",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              {ABOUT_STORY.sectionLabel}
            </p>

            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 5vw, 5rem)",
                color: "white",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                marginBottom: "2.5rem",
              }}
            >
              {ABOUT_STORY.headline}
            </h2>

            {ABOUT_STORY.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: i === 0 ? "rgba(255,255,255,0.75)" : "#888",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                  fontFamily: i === 0 ? '"Playfair Display", serif' : "inherit",
                  fontStyle: i === 0 ? "italic" : "normal",
                }}
              >
                {p}
              </p>
            ))}

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(0,229,255,0.4)",
                marginTop: "2rem",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
