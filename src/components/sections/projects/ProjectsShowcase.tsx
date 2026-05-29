import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import { FEATURED_PROJECTS, PROJECTS_SHOWCASE_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

// ─── Single alternating project section ───────────────────────────────────────
function ProjectStorySection({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[number];
  index: number;
}) {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (inView) vid.play().catch(() => {});
    else vid.pause();
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: isEven ? "1.15fr 1fr" : "1fr 1.15fr",
          minHeight: "480px",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(0)"
            : isEven
            ? "translateX(-2.5rem)"
            : "translateX(2.5rem)",
          transition: "opacity 0.85s ease, transform 0.85s ease",
        }}
        className="project-story-grid"
      >
        {/* Visual panel */}
        {isEven && (
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "420px",
            }}
          >
            <VideoPanel
              videoRef={videoRef}
              videoUrl={project.videoUrl}
              videoReady={videoReady}
              setVideoReady={setVideoReady}
              fadeDirection="right"
            />
            <TagBadge tag={project.tag} />
          </div>
        )}

        {/* Text panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: isEven ? "4rem 3.5rem 4rem 5rem" : "4rem 5rem 4rem 3.5rem",
            background: "rgba(6,10,20,0.6)",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Index marker */}
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: "rgba(0,229,255,0.4)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Project {String(index + 1).padStart(2, "0")}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              color: "#C9A84C",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {project.subtitle}
          </p>

          {/* Title */}
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {project.title}
          </h3>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(0,229,255,0.35)",
              marginBottom: "1.5rem",
            }}
          />

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
              maxWidth: "400px",
            }}
          >
            {project.description}
          </p>

          {/* Stat pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "1.4rem",
                color: "white",
                letterSpacing: "0.05em",
              }}
            >
              {project.stats}
            </span>
            <span
              style={{
                width: "1px",
                height: "18px",
                background: "rgba(255,255,255,0.2)",
              }}
            />
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
              }}
            >
              {project.tag}
            </span>
          </div>

          {/* Watch CTA */}
          {project.videoUrl && (
            <button
              onClick={() => setModalVideo(project.videoUrl!)}
              className="story-watch-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(0,229,255,0.4)",
                color: "#00E5FF",
                cursor: "pointer",
                padding: "0 0 0.5rem",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              <Play size={12} fill="#00E5FF" color="#00E5FF" />
              Watch Showreel
            </button>
          )}
        </div>

        {/* Visual panel (odd rows — image on right) */}
        {!isEven && (
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "420px",
            }}
          >
            <VideoPanel
              videoRef={videoRef}
              videoUrl={project.videoUrl}
              videoReady={videoReady}
              setVideoReady={setVideoReady}
              fadeDirection="left"
            />
            <TagBadge tag={project.tag} />
          </div>
        )}
      </div>

      {/* Modal */}
      {modalVideo && (
        <VideoModal
          videoUrl={modalVideo}
          title={project.title}
          subtitle={project.subtitle}
          onClose={() => setModalVideo(null)}
        />
      )}
    </>
  );
}

// ─── Shared: video panel ───────────────────────────────────────────────────────
function VideoPanel({
  videoRef,
  videoUrl,
  videoReady,
  setVideoReady,
  fadeDirection,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  videoUrl?: string;
  videoReady: boolean;
  setVideoReady: (v: boolean) => void;
  fadeDirection: "left" | "right";
}) {
  return (
    <>
      {videoUrl && (
        <video
          ref={videoRef}
          src={`${videoUrl}#t=0.5`}
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
          }}
        />
      )}

      {/* Loading bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(5,12,30,0.9), rgba(0,20,40,0.85))",
          opacity: videoReady ? 0 : 1,
          transition: "opacity 0.8s ease",
          pointerEvents: "none",
        }}
      />

      {/* Fade blend toward text panel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            fadeDirection === "right"
              ? "linear-gradient(to right, transparent 55%, rgba(6,10,20,0.8) 100%)"
              : "linear-gradient(to left, transparent 55%, rgba(6,10,20,0.8) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 60%, rgba(6,10,20,0.55) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </>
  );
}

// ─── Shared: tag badge ─────────────────────────────────────────────────────────
function TagBadge({ tag }: { tag: string }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1.5rem",
        right: "1.5rem",
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(0,229,255,0.2)",
        color: "#00E5FF",
        fontFamily: '"Space Mono", monospace',
        fontSize: "0.5rem",
        letterSpacing: "0.18em",
        padding: "0.35rem 0.7rem",
        textTransform: "uppercase",
        zIndex: 3,
      }}
    >
      {tag}
    </div>
  );
}

// ─── Shared: video modal ───────────────────────────────────────────────────────
function VideoModal({
  videoUrl,
  title,
  subtitle,
  onClose,
}: {
  videoUrl: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", h);
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
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
          border: "1px solid rgba(0,229,255,0.12)",
          boxShadow: "0 0 100px rgba(0,229,255,0.06)",
        }}
      >
        <button
          onClick={onClose}
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
            {title}
          </p>
          {subtitle && (
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
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <video
            src={videoUrl}
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
  );
}

// ─── Immersive quote break between projects ────────────────────────────────────
function QuoteBreak({ quote }: { quote: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{
        padding: "5rem 1.5rem",
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(1.5rem)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <p
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
          color: "rgba(255,255,255,0.25)",
          fontStyle: "italic",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.6,
          letterSpacing: "0.01em",
        }}
      >
        "{quote}"
      </p>
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "rgba(0,229,255,0.3)",
          margin: "2rem auto 0",
        }}
      />
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
export default function ProjectsShowcase() {
  const { ref, inView } = useInView();

  const quotes = [
    "Every formation tells a story only the sky can hold.",
    "Precision at altitude. Emotion at scale.",
  ];

  return (
    <section style={{ background: "transparent", padding: "6rem 0 0" }}>
      {/* Section header */}
      <div
        ref={ref}
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          marginBottom: "5rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.75rem)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <SectionLabel text={PROJECTS_SHOWCASE_META.sectionLabel} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "end",
          }}
          className="showcase-header-grid"
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {PROJECTS_SHOWCASE_META.headline}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
              fontSize: "0.95rem",
              maxWidth: "420px",
              margin: 0,
            }}
          >
            {PROJECTS_SHOWCASE_META.subheadline}
          </p>
        </div>
      </div>

      {/* Alternating project storytelling sections */}
      {FEATURED_PROJECTS.map((project, i) => (
        <div key={project.id}>
          <ProjectStorySection project={project} index={i} />
          {/* Insert quote break between projects (not after last) */}
          {i < FEATURED_PROJECTS.length - 1 && (
            <QuoteBreak quote={quotes[i % quotes.length]} />
          )}
        </div>
      ))}

      <style>{`
        .story-watch-btn:hover {
          color: white !important;
          border-bottom-color: white !important;
        }
        @media (max-width: 768px) {
          .project-story-grid {
            grid-template-columns: 1fr !important;
          }
          .showcase-header-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
