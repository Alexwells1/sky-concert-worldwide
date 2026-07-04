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
            background: "rgba(var(--color-surface-3-rgb), 0.6)",
            borderTop: "1px solid rgba(var(--foreground-rgb), 0.07)",
            borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
          }}
        >
          {/* Index marker */}
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-2xs)",
              letterSpacing: "0.3em",
              color: "rgba(var(--primary-rgb), 0.4)",
              textTransform: "uppercase",
              marginBottom: "var(--space-6)",
            }}
          >
            Project {String(index + 1).padStart(2, "0")}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-xs)",
              letterSpacing: "0.22em",
              color: "var(--secondary)",
              textTransform: "uppercase",
              marginBottom: "var(--space-4)",
            }}
          >
            {project.subtitle}
          </p>

          {/* Title */}
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
              color: "var(--foreground)",
              lineHeight: 1.15,
              marginBottom: "var(--space-6)",
            }}
          >
            {project.title}
          </h3>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(var(--primary-rgb), 0.35)",
              marginBottom: "var(--space-6)",
            }}
          />

          {/* Description */}
          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.55)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.9,
              marginBottom: "var(--space-10)",
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
              gap: "var(--space-1-5)",
              marginBottom: "var(--space-10)",
            }}
          >
            <span
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "1.4rem",
                color: "var(--foreground)",
                letterSpacing: "0.05em",
              }}
            >
              {project.stats}
            </span>
            <span
              style={{
                width: "1px",
                height: "18px",
                background: "rgba(var(--foreground-rgb), 0.2)",
              }}
            />
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-2xs)",
                letterSpacing: "0.18em",
                color: "rgba(var(--foreground-rgb), 0.35)",
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
                gap: "var(--space-1-5)",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(var(--primary-rgb), 0.4)",
                color: "var(--primary)",
                cursor: "pointer",
                padding: "0 0 var(--space-2)",
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
                transition:
                  "color var(--duration-fast-alt), border-color var(--duration-fast-alt)",
              }}
            >
              <Play size={12} fill="var(--primary)" color="var(--primary)" />
              Watch Showreel
            </button>
          )}
        </div>

        {/* Visual panel (odd rows image on right) */}
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
            transition: "opacity var(--duration-slowest) var(--ease-default)",
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
          transition: "opacity var(--duration-slowest) var(--ease-default)",
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
              ? "linear-gradient(to right, transparent 55%, rgba(var(--color-surface-3-rgb), 0.8) 100%)"
              : "linear-gradient(to left, transparent 55%, rgba(var(--color-surface-3-rgb), 0.8) 100%)",
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
            "linear-gradient(to bottom, transparent 60%, rgba(var(--color-surface-3-rgb), 0.55) 100%)",
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
        background: "rgba(var(--overlay-rgb), 0.55)",
        border: "1px solid rgba(var(--primary-rgb), 0.2)",
        color: "var(--primary)",
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
          border: "1px solid rgba(var(--primary-rgb), 0.12)",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <button
          onClick={onClose}
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
            {title}
          </p>
          {subtitle && (
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
              background: "var(--overlay)",
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
        padding: "var(--space-4) var(--space-6)",
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(1.5rem)",
        transition:
          "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
      }}
    >
      <p
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
          color: "rgba(var(--foreground-rgb), 0.7)",
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
          background: "rgba(var(--primary-rgb), 0.3)",
          margin: "var(--space-8) auto 0",
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
    <section
      style={{ background: "transparent", padding: "var(--space-24) 0 0" }}
    >
      {/* Section header */}
      <div
        ref={ref}
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          padding: "0 var(--space-6)",
          marginBottom: "var(--space-20)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.75rem)",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
        }}
      >
        <SectionLabel text={PROJECTS_SHOWCASE_META.sectionLabel} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-8)",
            alignItems: "end",
          }}
          className="showcase-header-grid"
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--foreground)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {PROJECTS_SHOWCASE_META.headline}
          </h2>
          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.45)",
              lineHeight: 1.85,
              fontSize: "var(--text-body-lg)",
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
