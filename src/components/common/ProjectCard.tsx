import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import type { ProjectItem } from "../../types";

interface ProjectCardProps {
  item: ProjectItem;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  government: "linear-gradient(135deg, #0A1535 0%, #1a2a4a 50%, #0A0F1E 100%)",
  corporate: "linear-gradient(135deg, #1a1020 0%, #2a1535 50%, #0A0F1E 100%)",
  sports: "linear-gradient(135deg, #0a1520 0%, #102535 50%, #0A0F1E 100%)",
  tourism: "linear-gradient(135deg, #0a1520 0%, #0a2520 50%, #0A0F1E 100%)",
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

  // Play/pause preview on hover — no currentTime reset so frame stays visible on leave
  useEffect(() => {
    const vid = previewRef.current;
    if (!vid) return;
    if (isHovered) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      // intentionally NOT resetting currentTime — keeps last frame visible instead of going black
    }
  }, [isHovered]);

  return (
    <>
      <div
        className="card-base"
        style={{
          borderRadius: "2px",
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
          {/* Video — always mounted; first frame shows via preload="metadata", plays on hover */}
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
                transition: "opacity 0.4s ease",
              }}
            />
          )}

          {/* Gradient overlay — fades out once video thumbnail is ready */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(0,229,255,0.08) 0%, transparent 70%)",
              opacity: previewReady ? 0 : 1,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          />

          {/* Dark scrim on hover so play button stays readable over the video */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              opacity: isHovered && previewReady ? 1 : 0,
              transition: "opacity 0.3s ease",
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
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(0,229,255,0.15)",
                  border: "2px solid rgba(0,229,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 32px rgba(0,229,255,0.3)",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                <Play
                  size={22}
                  fill="#00E5FF"
                  color="#00E5FF"
                  style={{ marginLeft: "3px" }}
                />
              </div>
              <span
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "#00E5FF",
                }}
              >
                WATCH VIDEO
              </span>
            </div>
          ) : (
            <div
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "1rem",
                color: "rgba(0,229,255,0.3)",
                letterSpacing: "0.3em",
                textAlign: "center",
                padding: "0 1rem",
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
                background: "rgba(201, 168, 76, 0.15)",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                color: "#C9A84C",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                padding: "0.3rem 0.6rem",
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
              background: "rgba(0,229,255,0.1)",
              border: "1px solid rgba(0,229,255,0.25)",
              color: "#00E5FF",
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              padding: "0.3rem 0.6rem",
              textTransform: "uppercase",
              zIndex: 3,
            }}
          >
            {item.tag}
          </div>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "1.125rem",
              color: "white",
              marginBottom: "0.4rem",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>
          {item.subtitle && (
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                color: "#C9A84C",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
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
                fontSize: "0.6rem",
                color: "#00E5FF",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              {item.stats}
            </p>
          )}
          <p
            style={{ color: "#AAAAAA", fontSize: "0.85rem", lineHeight: 1.65 }}
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
              background: "#0A0F1E",
              border: "1px solid rgba(0,229,255,0.2)",
              boxShadow: "0 0 80px rgba(0,229,255,0.12)",
              borderRadius: "2px",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
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
                {item.title}
              </p>
              {item.subtitle && (
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
                  background: "#000",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .play-btn-group:hover > div:first-child {
          background: rgba(0,229,255,0.25) !important;
          box-shadow: 0 0 48px rgba(0,229,255,0.5) !important;
        }
      `}</style>
    </>
  );
}
