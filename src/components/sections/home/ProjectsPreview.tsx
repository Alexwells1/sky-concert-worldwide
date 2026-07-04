import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, X, ArrowRight } from "lucide-react";
import { HOME_PROJECTS, HOME_PROJECTS_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

function VideoThumbnail({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      v.currentTime = 1;
    };
    v.addEventListener("loadedmetadata", onLoaded);
    return () => v.removeEventListener("loadedmetadata", onLoaded);
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="metadata"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

export default function ProjectsPreview() {
  const { ref, inView } = useInView();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [activeVideo]);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const [hero, second, third] = HOME_PROJECTS;

  return (
    <>
      <style>{`
        .showcase-section { padding: 5rem 1.5rem;}
        .showcase-header {
          max-width: 80rem;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .showcase-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--primary);
          display: block;
          margin-bottom: 1.25rem;
        }
        .showcase-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(var(--foreground-rgb), 0.92);
          margin: 0;
        }
        .showcase-mosaic {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.65fr 1fr;
          grid-template-rows: 340px 260px;
          gap: 2px;
        }
        .showcase-hero-cell { grid-row: 1 / 3; }
        @media (max-width: 640px) {
          .showcase-mosaic {
            grid-template-columns: 1fr;
            grid-template-rows: 260px 200px;
          }
          .showcase-hero-cell { grid-row: auto; }
          .showcase-mosaic > *:nth-child(3) { display: none; }
        }
        .showcase-tile {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #070a12;
          border: none;
          padding: 0;
          text-align: left;
          display: block;
          width: 100%;
        }
        .showcase-tile-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }
        .showcase-tile:hover .showcase-tile-bg { transform: scale(1.05); }
        .showcase-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(var(--color-surface-11-rgb), 0.9) 0%, rgba(var(--color-surface-11-rgb), 0.2) 40%, transparent 100%);
          z-index: 2;
        }
        .showcase-tile-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          z-index: 3;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(var(--foreground-rgb), 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1);
          background: rgba(var(--foreground-rgb), 0.06);
          backdrop-filter: blur(8px);
        }
        .showcase-tile:hover .showcase-tile-play {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .showcase-tile-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .showcase-tile-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(var(--foreground-rgb), 0.65);
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .showcase-tile-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: rgba(var(--foreground-rgb), 0.9);
          line-height: 1.25;
          font-size: clamp(0.9rem, 1.8vw, 1.35rem);
        }
        .showcase-banner {
          max-width: 80rem;
          margin: 2px auto 0;
          position: relative;
          height: 180px;
          overflow: hidden;
          cursor: pointer;
          background: #07090f;
          border: none;
          width: 100%;
          text-align: left;
          display: block;
        }
        @media (max-width: 640px) {
          .showcase-banner { height: 140px; }
        }
        .showcase-banner-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .showcase-banner:hover .showcase-banner-bg { transform: scale(1.03); }
        .showcase-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(var(--color-surface-11-rgb), 0.85) 0%, rgba(var(--color-surface-11-rgb), 0.2) 60%, transparent 100%);
          z-index: 2;
        }
        .showcase-banner-content {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          gap: 1.5rem;
        }
        .showcase-banner-play {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(var(--foreground-rgb), 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(var(--foreground-rgb), 0.4);
          transition: border-color 0.3s, background 0.3s;
        }
        .showcase-banner:hover .showcase-banner-play {
          border-color: rgba(var(--foreground-rgb), 0.7);
          background: rgba(var(--foreground-rgb), 0.5);
        }
        .showcase-banner-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.5rem;
          color: rgba(var(--foreground-rgb), 0.35);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.35rem;
        }
        .showcase-banner-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(0.95rem, 1.8vw, 1.25rem);
          color: rgba(var(--foreground-rgb), 0.88);
          margin: 0;
          line-height: 1.25;
        }
        .showcase-footer {
          max-width: 80rem;
          margin: 2rem auto 0;
        }
      `}</style>

      <section className="showcase-section">
        <div
          ref={ref}
          className="showcase-header"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.5rem)",
            transition:
              "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <div>
            <span className="showcase-label">
              {HOME_PROJECTS_META.sectionLabel}
            </span>
            <h2 className="showcase-headline">{HOME_PROJECTS_META.headline}</h2>
          </div>
          <Link to="/projects" className="btn-ghost" style={{ flexShrink: 0 }}>
            All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className="showcase-mosaic"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          {hero && (
            <button
              className="showcase-tile showcase-hero-cell"
              onClick={() => hero.videoUrl && setActiveVideo(hero.videoUrl)}
              aria-label={`Play ${hero.title}`}
            >
              <div className="showcase-tile-bg">
                {hero.videoUrl && <VideoThumbnail src={hero.videoUrl} />}
              </div>
              <div className="showcase-tile-overlay" />
              {hero.videoUrl && (
                <div className="showcase-tile-play">
                  <Play
                    size={16}
                    fill="white"
                    color="white"
                    style={{ marginLeft: "2px" }}
                  />
                </div>
              )}
              <div className="showcase-tile-info">
                <span className="showcase-tile-tag">{hero.tag}</span>
                <span className="showcase-tile-title">
                  {hero.subtitle ?? hero.title}
                </span>
              </div>
            </button>
          )}

          {[second, third].filter(Boolean).map((project) => (
            <button
              key={project!.id}
              className="showcase-tile"
              onClick={() =>
                project!.videoUrl && setActiveVideo(project!.videoUrl)
              }
              aria-label={`Play ${project!.title}`}
            >
              <div className="showcase-tile-bg">
                {project!.videoUrl && (
                  <VideoThumbnail src={project!.videoUrl} />
                )}
              </div>
              <div className="showcase-tile-overlay" />
              {project!.videoUrl && (
                <div
                  className="showcase-tile-play"
                  style={{ width: 48, height: 48 }}
                >
                  <Play
                    size={13}
                    fill="white"
                    color="white"
                    style={{ marginLeft: "2px" }}
                  />
                </div>
              )}
              <div className="showcase-tile-info">
                <span className="showcase-tile-tag">{project!.tag}</span>
                <span
                  className="showcase-tile-title"
                  style={{ fontSize: "var(--text-md)" }}
                >
                  {project!.subtitle ?? project!.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {HOME_PROJECTS[3] && (
          <button
            className="showcase-banner"
            onClick={() =>
              HOME_PROJECTS[3].videoUrl &&
              setActiveVideo(HOME_PROJECTS[3].videoUrl)
            }
            aria-label={`Play ${HOME_PROJECTS[3].title}`}
          >
            <div className="showcase-banner-bg">
              {HOME_PROJECTS[3].videoUrl && (
                <VideoThumbnail src={HOME_PROJECTS[3].videoUrl} />
              )}
            </div>
            <div className="showcase-banner-overlay" />
            <div className="showcase-banner-content">
              {HOME_PROJECTS[3].videoUrl && (
                <div className="showcase-banner-play">
                  <Play
                    size={14}
                    fill="white"
                    color="white"
                    style={{ marginLeft: "2px" }}
                  />
                </div>
              )}
              <div>
                <span className="showcase-banner-tag">
                  {HOME_PROJECTS[3].tag}
                </span>
                <p className="showcase-banner-title">
                  {HOME_PROJECTS[3].subtitle ?? HOME_PROJECTS[3].title}
                </p>
              </div>
            </div>
          </button>
        )}

        <div className="showcase-footer">
          <Link to="/projects" className="btn-ghost">
            {HOME_PROJECTS_META.cta} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: "var(--z-modal)",
            background: "rgba(var(--overlay-rgb), 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-6)",
            backdropFilter: "blur(12px)",
          }}
        >
          <button
            onClick={() => setActiveVideo(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(var(--foreground-rgb), 0.07)",
              border: "1px solid rgba(var(--foreground-rgb), 0.12)",
              borderRadius: "var(--radius-full)",
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--foreground)",
            }}
            aria-label="Close video"
          >
            <X size={17} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "920px" }}
          >
            <video
              src={activeVideo}
              autoPlay
              controls
              style={{
                width: "100%",
                display: "block",
                background: "var(--overlay)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
