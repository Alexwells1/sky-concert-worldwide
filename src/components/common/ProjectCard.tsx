import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import type { ProjectItem } from "../../types";

interface ProjectCardProps {
  item: ProjectItem;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  government:
    "linear-gradient(135deg, var(--color-surface-12) 0%, #1a2a4a 50%, var(--color-surface-2) 100%)",
  corporate:
    "linear-gradient(135deg, #1a1020 0%, #2a1535 50%, var(--color-surface-2) 100%)",
  sports:
    "linear-gradient(135deg, var(--color-surface-15) 0%, #102535 50%, var(--color-surface-2) 100%)",
  tourism:
    "linear-gradient(135deg, var(--color-surface-15) 0%, var(--color-surface-13) 50%, var(--color-surface-2) 100%)",
};

export default function ProjectCard({ item }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(item.videoUrl);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [modalOpen]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Play/pause preview on hover no currentTime reset so frame stays visible on leave
  useEffect(() => {
    const vid = previewRef.current;
    if (!vid) return;
    if (isHovered) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      // intentionally NOT resetting currentTime keeps last frame visible instead of going black
    }
  }, [isHovered]);

  return (
    <>
      <div
        className="card-base"
        style={{
          borderRadius: "var(--radius-xs)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          onClick={() => hasVideo && setModalOpen(true)}
          onMouseEnter={() => hasVideo && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            height: "220px",
            background:
              CATEGORY_GRADIENTS[item.category] ||
              CATEGORY_GRADIENTS.government,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            cursor: hasVideo ? "pointer" : "default",
          }}
        >
          {/* Video always mounted; first frame shows via preload="metadata", plays on hover */}
          {hasVideo && (
            <video
              ref={previewRef}
              src={`${item.videoUrl}#t=0.5`}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={() => setPreviewReady(true)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: previewReady ? 1 : 0,
                transition:
                  "opacity var(--duration-moderate-alt) var(--ease-default)",
              }}
            />
          )}

          {/* Gradient overlay fades out once video thumbnail is ready */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(var(--primary-rgb), 0.08) 0%, transparent 70%)",
              opacity: previewReady ? 0 : 1,
              transition:
                "opacity var(--duration-moderate-alt) var(--ease-default)",
              pointerEvents: "none",
            }}
          />

          {/* Dark scrim on hover so play button stays readable over the video */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(var(--overlay-rgb), 0.35)",
              opacity: isHovered && previewReady ? 1 : 0,
              transition:
                "opacity var(--duration-normal-alt) var(--ease-default)",
              pointerEvents: "none",
            }}
          />

          {hasVideo ? (
            <div
              className="play-btn-group"
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(var(--primary-rgb), 0.15)",
                  border: "2px solid rgba(var(--primary-rgb), 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-sm)",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                <Play
                  size={22}
                  fill="var(--primary)"
                  color="var(--primary)"
                  style={{ marginLeft: "3px" }}
                />
              </div>
              <span
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.2em",
                  color: "var(--primary)",
                }}
              >
                WATCH VIDEO
              </span>
            </div>
          ) : (
            <div
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "var(--text-base)",
                color: "rgba(var(--primary-rgb), 0.3)",
                letterSpacing: "0.3em",
                textAlign: "center",
                padding: "0 var(--space-4)",
              }}
            >
              SKY CONCERT WORLDWIDE
            </div>
          )}

          {item.isConceptOnly && (
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                background: "rgba(var(--secondary-rgb), 0.15)",
                border: "1px solid rgba(var(--secondary-rgb), 0.4)",
                color: "var(--secondary)",
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-2xs)",
                letterSpacing: "0.2em",
                padding: "0.3rem var(--space-1-5)",
                textTransform: "uppercase",
                zIndex: 3,
              }}
            >
              Concept
            </div>
          )}

          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(var(--primary-rgb), 0.1)",
              border: "1px solid rgba(var(--primary-rgb), 0.25)",
              color: "var(--primary)",
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-2xs)",
              letterSpacing: "0.15em",
              padding: "0.3rem var(--space-1-5)",
              textTransform: "uppercase",
              zIndex: 3,
            }}
          >
            {item.tag}
          </div>
        </div>

        <div style={{ padding: "var(--space-6)" }}>
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "1.125rem",
              color: "var(--foreground)",
              marginBottom: "var(--space-0-5)",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>
          {item.subtitle && (
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                color: "var(--secondary)",
                letterSpacing: "0.15em",
                marginBottom: "var(--space-3)",
                textTransform: "uppercase",
              }}
            >
              {item.subtitle}
            </p>
          )}
          {item.stats && (
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                color: "var(--primary)",
                letterSpacing: "0.1em",
                marginBottom: "var(--space-3)",
              }}
            >
              {item.stats}
            </p>
          )}
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "var(--text-sm-alt)",
              lineHeight: 1.65,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {modalOpen && item.videoUrl && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "var(--z-modal)",
            background: "rgba(2,5,8,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-6)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              background: "var(--color-surface-2)",
              border: "1px solid rgba(var(--primary-rgb), 0.2)",
              boxShadow: "var(--shadow-lg)",
              borderRadius: "var(--radius-xs)",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: "-3rem",
                right: 0,
                background: "transparent",
                border: "1px solid rgba(var(--foreground-rgb), 0.2)",
                color: "var(--foreground)",
                cursor: "pointer",
                padding: "var(--space-0-5)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-0-5)",
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.15em",
              }}
            >
              <X size={14} /> CLOSE
            </button>

            <div
              style={{
                padding: "var(--space-4) var(--space-5) var(--space-3)",
                borderBottom: "1px solid rgba(var(--foreground-rgb), 0.06)",
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
                {item.title}
              </p>
              {item.subtitle && (
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
                  {item.subtitle}
                </p>
              )}
            </div>

            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <video
                src={item.videoUrl}
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

      <style>{`
        .play-btn-group:hover > div:first-child {
          background: rgba(var(--primary-rgb), 0.25) !important;
          box-shadow: 0 0 48px rgba(var(--primary-rgb), 0.5) !important;
        }
      `}</style>
    </>
  );
}
