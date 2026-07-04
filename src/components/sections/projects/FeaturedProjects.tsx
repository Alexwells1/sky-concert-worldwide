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
          padding: "var(--space-32) 0",
          overflow: "hidden",
        }}
      >
        {/* Section label + heading padded */}
        <div
          style={{
            maxWidth: "var(--container-2xl)",
            margin: "0 auto",
            padding: "0 var(--space-6)",
            marginBottom: "var(--space-16)",
          }}
        >
          <SectionLabel text="Featured Work" />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "rgba(var(--foreground-rgb), 0.45)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: "var(--font-normal)",
              marginBottom: "var(--space-4)",
            }}
          >
            Centerpiece Production
          </h2>
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "var(--foreground)",
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
            transition:
              "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
          }}
        >
          {/* Left: video panel goes edge to edge */}
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
                  transition:
                    "opacity var(--duration-slowest) var(--ease-default)",
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
                transition:
                  "opacity var(--duration-slowest) var(--ease-default)",
                pointerEvents: "none",
              }}
            />

            {/* Right-side fade for seamless blend into narrative column */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(var(--color-surface-3-rgb), 0.95) 100%)",
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
                  "linear-gradient(to bottom, transparent 50%, rgba(var(--color-surface-3-rgb), 0.6) 100%)",
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
                gap: "var(--space-3)",
                zIndex: 3,
              }}
            >
              <button
                onClick={() => setMuted((m) => !m)}
                style={{
                  background: "rgba(var(--overlay-rgb), 0.5)",
                  border: "1px solid rgba(var(--foreground-rgb), 0.2)",
                  color: "var(--foreground)",
                  cursor: "pointer",
                  padding: "0.45rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-full)",
                  transition: "background 0.2s",
                }}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              {/* LIVE dot */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-0-5)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "var(--radius-full)",
                    background: "var(--destructive)",
                    boxShadow: "var(--shadow-destructive)",
                    display: "inline-block",
                    animation: "pulse-dot 1.8s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    color: "rgba(var(--foreground-rgb), 0.7)",
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
                background: "rgba(var(--primary-rgb), 0.08)",
                border: "1px solid rgba(var(--primary-rgb), 0.25)",
                color: "var(--primary)",
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-2xs)",
                letterSpacing: "0.18em",
                padding: "var(--space-0-5) 0.8rem",
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
              background: "rgba(var(--color-surface-3-rgb), 0.97)",
              padding:
                "var(--space-16) var(--space-14) var(--space-16) var(--space-16)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid rgba(var(--primary-rgb), 0.06)",
            }}
          >
            {/* Event type label */}
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--secondary)",
                textTransform: "uppercase",
                marginBottom: "var(--space-5)",
              }}
            >
              {featured.subtitle}
            </p>

            {/* Project name */}
            <h3
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 3vw, 3rem)",
                color: "var(--foreground)",
                lineHeight: 1.1,
                marginBottom: "var(--space-8)",
              }}
            >
              {featured.title}
            </h3>

            {/* Story */}
            <p
              style={{
                color: "rgba(var(--foreground-rgb), 0.7)",
                fontSize: "var(--text-base)",
                lineHeight: 1.85,
                marginBottom: "var(--space-10)",
                maxWidth: "420px",
              }}
            >
              {featured.description}
            </p>

            {/* CTA */}
            {featured.videoUrl && (
              <button
                onClick={() => setModalVideo(featured.videoUrl!)}
                className="featured-watch-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  background: "transparent",
                  border: "1px solid rgba(var(--primary-rgb), 0.5)",
                  color: "var(--primary)",
                  cursor: "pointer",
                  padding: "var(--space-4) var(--space-8)",
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "var(--text-base)",
                  letterSpacing: "0.3em",
                  transition: "background 0.25s, box-shadow 0.25s",
                  alignSelf: "flex-start",
                }}
              >
                <Play size={14} fill="var(--primary)" color="var(--primary)" />
                WATCH SHOWREEL
              </button>
            )}
          </div>
        </div>

        {/* Mobile fallback styles */}
        <style>{`
          .featured-watch-btn:hover {
            background: rgba(var(--primary-rgb), 0.1) !important;
            box-shadow: 0 0 40px rgba(var(--primary-rgb), 0.2);
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
            zIndex: "var(--z-modal)",
            background: "rgba(2,5,8,0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-6)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              background: "rgba(var(--color-surface-17-rgb), 0.95)",
              border: "1px solid rgba(var(--primary-rgb), 0.15)",
              boxShadow: "var(--shadow-2xl)",
            }}
          >
            <button
              onClick={() => setModalVideo(null)}
              style={{
                position: "absolute",
                top: "-3.25rem",
                right: 0,
                background: "transparent",
                border: "1px solid rgba(var(--foreground-rgb), 0.15)",
                color: "var(--foreground)",
                cursor: "pointer",
                padding: "var(--space-0-5) var(--space-3)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-0-5)",
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-2xs)",
                letterSpacing: "0.18em",
              }}
            >
              <X size={12} /> CLOSE
            </button>
            <div
              style={{
                padding: "var(--space-5) var(--space-6) var(--space-3)",
                borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
              }}
            >
              <p
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "var(--text-md)",
                  letterSpacing: "0.08em",
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                {featured.title}
              </p>
              {featured.subtitle && (
                <p
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "var(--text-2xs)",
                    color: "var(--secondary)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    margin: "var(--space-1) 0 0",
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
                  background: "var(--overlay)",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
