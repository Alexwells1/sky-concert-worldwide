import { useState, useEffect, useRef } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { FEATURED_PROJECTS } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function FeaturedProjects() {
  const { ref, inView } = useInView();
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = FEATURED_PROJECTS[0];

  useEffect(() => {
    if (!modalVideo) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalVideo(null);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [modalVideo]);

  useEffect(() => {
    document.body.style.overflow = modalVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVideo]);

  // Play when in view
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (inView) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [inView]);

  // Sync muted state
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.muted = muted;
  }, [muted]);

  if (!featured) return null;

  return (
    <>
      <section style={{ background: "transparent", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <SectionLabel text="Featured Work" />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "3rem",
            }}
          >
            Sky Moments in Detail
          </h2>

          {/* Featured video card */}
          <div
            ref={ref}
            style={{
              position: "relative",
              height: "clamp(280px, 45vw, 520px)",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid rgba(0,229,255,0.12)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(2rem)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Background video — autoplays muted, loops */}
            {featured.videoUrl && (
              <video
                ref={videoRef}
                src={`${featured.videoUrl}#t=0.5`}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={() => setVideoReady(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: videoReady ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              />
            )}

            {/* Gradient fallback before video loads */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(5,12,30,0.55)",
                backdropFilter: "blur(8px)",
                opacity: videoReady ? 0 : 1,
                transition: "opacity 0.6s ease",
                pointerEvents: "none",
              }}
            />

            {/* Subtle dark overlay over video for text readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Tag */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(0,229,255,0.1)",
                border: "1px solid rgba(0,229,255,0.3)",
                color: "#00E5FF",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                padding: "0.4rem 0.8rem",
                textTransform: "uppercase",
                zIndex: 2,
              }}
            >
              {featured.tag}
            </div>

            {/* Mute toggle */}
            <button
              onClick={() => setMuted((m) => !m)}
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                padding: "0.45rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                zIndex: 2,
                transition: "background 0.2s",
              }}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* LIVE indicator */}
            <div
              style={{
                position: "absolute",
                top: "1.55rem",
                left: "4rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ff4444",
                  boxShadow: "0 0 6px #ff4444",
                  display: "inline-block",
                  animation: "pulse-dot 1.8s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                }}
              >
                Preview
              </span>
            </div>

            {/* Bottom bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                zIndex: 2,
              }}
            >
              {/* Left: title + description */}
              <div style={{ flex: "1 1 260px" }}>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "1.25rem",
                    color: "white",
                    margin: "0 0 0.35rem",
                    lineHeight: 1.3,
                  }}
                >
                  {featured.title}
                </p>
                {featured.subtitle && (
                  <p
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.55rem",
                      color: "#C9A84C",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {featured.subtitle}
                  </p>
                )}
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {featured.description}
                </p>
              </div>

              {/* Right: CTA button */}
              {featured.videoUrl && (
                <button
                  onClick={() => setModalVideo(featured.videoUrl!)}
                  className="featured-watch-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: "rgba(0,229,255,0.12)",
                    border: "1px solid rgba(0,229,255,0.55)",
                    color: "#00E5FF",
                    cursor: "pointer",
                    padding: "0.75rem 1.4rem",
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: "0.85rem",
                    letterSpacing: "0.25em",
                    transition: "background 0.2s, box-shadow 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <Play size={14} fill="#00E5FF" color="#00E5FF" />
                  WATCH SHOWREEL
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalVideo && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalVideo(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(2,5,8,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              background: "rgba(8,15,35,0.92)",
              border: "1px solid rgba(0,229,255,0.2)",
              boxShadow: "0 0 80px rgba(0,229,255,0.12)",
              borderRadius: "2px",
            }}
          >
            <button
              onClick={() => setModalVideo(null)}
              style={{
                position: "absolute",
                top: "-3rem",
                right: 0,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                cursor: "pointer",
                padding: "0.4rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
              }}
            >
              <X size={14} /> CLOSE
            </button>
            <div
              style={{
                padding: "1rem 1.25rem 0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  color: "white",
                  margin: 0,
                }}
              >
                {featured.title}
              </p>
              {featured.subtitle && (
                <p
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.55rem",
                    color: "#C9A84C",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    margin: "0.25rem 0 0",
                  }}
                >
                  {featured.subtitle}
                </p>
              )}
            </div>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <video
                src={modalVideo}
                controls
                autoPlay
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  display: "block",
                  background: "#000",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .featured-watch-btn:hover {
          background: rgba(0,229,255,0.22) !important;
          box-shadow: 0 0 32px rgba(0,229,255,0.3);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </>
  );
}
