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

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (inView) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [inView]);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.muted = muted;
  }, [muted]);

  if (!featured) return null;

  return (
    <>
      <section
        style={{
          background: "transparent",
          padding: "8rem 0",
          overflow: "hidden",
        }}
      >
        {/* Section label + heading — padded */}
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            marginBottom: "4rem",
          }}
        >
          <SectionLabel text="Featured Work" />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Centerpiece Production
          </h2>
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "white",
              lineHeight: 1.1,
              maxWidth: "700px",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            One Event. Thousands of Witnesses. No One Forgets.
          </p>
        </div>

        {/* Cinematic split: large video left, narrative right */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "580px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-3rem)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Left: video panel — goes edge to edge */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "520px",
            }}
          >
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
                  transition: "opacity 0.8s ease",
                  transform: "scale(1.03)",
                }}
              />
            )}

            {/* Loading placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(5,12,30,0.9) 0%, rgba(0,20,40,0.85) 100%)",
                opacity: videoReady ? 0 : 1,
                transition: "opacity 0.8s ease",
                pointerEvents: "none",
              }}
            />

            {/* Right-side fade for seamless blend into narrative column */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(6,10,20,0.95) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />

            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(6,10,20,0.6) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />

            {/* Controls overlay */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                zIndex: 3,
              }}
            >
              <button
                onClick={() => setMuted((m) => !m)}
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  cursor: "pointer",
                  padding: "0.45rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "background 0.2s",
                }}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              {/* LIVE dot */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
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
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  Preview
                </span>
              </div>
            </div>

            {/* Tag badge */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.25)",
                color: "#00E5FF",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                padding: "0.4rem 0.8rem",
                textTransform: "uppercase",
                zIndex: 3,
              }}
            >
              {featured.tag}
            </div>
          </div>

          {/* Right: narrative panel */}
          <div
            style={{
              background: "rgba(6,10,20,0.97)",
              padding: "4rem 3.5rem 4rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid rgba(0,229,255,0.06)",
            }}
          >
            {/* Event type label */}
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#C9A84C",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              {featured.subtitle}
            </p>

            {/* Project name */}
            <h3
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 3vw, 3rem)",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              {featured.title}
            </h3>

            {/* Story */}
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
                maxWidth: "420px",
              }}
            >
              {featured.description}
            </p>

            {/* Stats strip */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "3rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {[
                { value: "500+", label: "Drones" },
                { value: "Millions", label: "Impressions" },
                { value: "Live", label: "Broadcast" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: '"Bebas Neue", cursive',
                      fontSize: "1.75rem",
                      color: "#00E5FF",
                      letterSpacing: "0.04em",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.55rem",
                      letterSpacing: "0.18em",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      margin: "0.35rem 0 0",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            {featured.videoUrl && (
              <button
                onClick={() => setModalVideo(featured.videoUrl!)}
                className="featured-watch-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "transparent",
                  border: "1px solid rgba(0,229,255,0.5)",
                  color: "#00E5FF",
                  cursor: "pointer",
                  padding: "1rem 2rem",
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "1rem",
                  letterSpacing: "0.3em",
                  transition: "background 0.25s, box-shadow 0.25s",
                  alignSelf: "flex-start",
                }}
              >
                <Play size={14} fill="#00E5FF" color="#00E5FF" />
                WATCH SHOWREEL
              </button>
            )}
          </div>
        </div>

        {/* Mobile fallback styles */}
        <style>{`
          .featured-watch-btn:hover {
            background: rgba(0,229,255,0.1) !important;
            box-shadow: 0 0 40px rgba(0,229,255,0.2);
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.75); }
          }
          @media (max-width: 768px) {
            .featured-split-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
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
            background: "rgba(2,5,8,0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              background: "rgba(8,15,35,0.95)",
              border: "1px solid rgba(0,229,255,0.15)",
              boxShadow: "0 0 100px rgba(0,229,255,0.08)",
            }}
          >
            <button
              onClick={() => setModalVideo(null)}
              style={{
                position: "absolute",
                top: "-3.25rem",
                right: 0,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                padding: "0.4rem 0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
              }}
            >
              <X size={12} /> CLOSE
            </button>
            <div
              style={{
                padding: "1.25rem 1.5rem 0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
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
    </>
  );
}