import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  SITE_NAME,
  PROJECTS_HERO,
  PROJECTS_CTA,
  FEATURED_PROJECTS,
} from "../constants";
import HeroSection from "../components/common/HeroSection";
import FeaturedProjects from "../components/sections/projects/FeaturedProjects";
import ProjectsHighlight from "../components/sections/projects/ProjectsHighlight";
import { useInView } from "../hooks/useInView";
import ProjectsShowcase from "../components/sections/projects/ProjectsShowcase";

// ─── Immersive video break ─────────────────────────────────────────────────────
function VideoBreak() {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Use the third video as the showreel break visual
  const breakVideo = FEATURED_PROJECTS[2]?.videoUrl;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (inView) vid.play().catch(() => {});
    else vid.pause();
  }, [inView]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "clamp(380px, 50vw, 620px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background video */}
      {breakVideo && (
        <video
          ref={videoRef}
          src={`${breakVideo}#t=2`}
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
            transform: "scale(1.04)",
          }}
        />
      )}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(var(--color-surface-3-rgb), 0.55) 0%, rgba(var(--color-surface-3-rgb), 0.35) 50%, rgba(var(--color-surface-3-rgb), 0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 var(--space-6)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.5rem)",
          transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        }}
      >
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-xs)",
            letterSpacing: "0.35em",
            color: "rgba(var(--foreground-rgb), 0.4)",
            textTransform: "uppercase",
            marginBottom: "var(--space-6)",
          }}
        >
          Sky Concert Worldwide
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "var(--foreground)",
            fontStyle: "italic",
            lineHeight: 1.15,
            maxWidth: "680px",
            margin: "0 auto",
            textShadow: "0 2px 40px rgba(var(--overlay-rgb), 0.6)",
          }}
        >
          Every formation tells a story.
        </h2>
      </div>
    </section>
  );
}

// ─── Cinematic CTA section ─────────────────────────────────────────────────────
function ProjectsCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "var(--color-surface-3)",
        padding: "var(--space-8) var(--space-6)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--primary-rgb), 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative corner lines */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(var(--primary-rgb), 0.15)",
          borderLeft: "1px solid rgba(var(--primary-rgb), 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "3rem",
          right: "3rem",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(var(--primary-rgb), 0.15)",
          borderRight: "1px solid rgba(var(--primary-rgb), 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(var(--primary-rgb), 0.15)",
          borderLeft: "1px solid rgba(var(--primary-rgb), 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          right: "3rem",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(var(--primary-rgb), 0.15)",
          borderRight: "1px solid rgba(var(--primary-rgb), 0.15)",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(2rem)",
          transition:
            "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
        }}
      >
        {/* Pre-label */}
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-xs)",
            letterSpacing: "0.35em",
            color: "rgba(var(--primary-rgb), 0.5)",
            textTransform: "uppercase",
            marginBottom: "var(--space-8)",
          }}
        >
          Begin Your Production
        </p>

        {/* Giant headline */}
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "var(--foreground)",
            lineHeight: 0.9,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-10)",
          }}
        >
          {PROJECTS_CTA.headline}
        </h2>

        {/* Subheadline */}
        <p
          style={{
            color: "rgba(var(--foreground-rgb), 0.4)",
            fontSize: "var(--text-base)",
            lineHeight: 1.85,
            marginBottom: "var(--space-14)",
            maxWidth: "520px",
            margin: "0 auto var(--space-14)",
          }}
        >
          {PROJECTS_CTA.subheadline}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            justifyContent: "center",
          }}
        >
          <Link to="/contact" className="btn-primary projects-cta-primary">
            Book a Show <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page assembly ─────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  useEffect(() => {
    document.title = `Our Drone Shows and Aerial Projects | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <HeroSection
        headline={PROJECTS_HERO.headline}
        subheadline={PROJECTS_HERO.subheadline}
        supporting={PROJECTS_HERO.supporting}
        overlayIntensity="medium"
      />

      {/* 1. Featured centerpiece project */}
      <FeaturedProjects />

      {/* 3. Alternating project storytelling sections */}
      <ProjectsShowcase />

      {/* 4. Cinematic video break */}
      <VideoBreak />

      {/* 5. Why our shows feel different editorial rows */}
      <ProjectsHighlight />

      {/* 6. Massive cinematic CTA */}
      <ProjectsCTA />

      <style>{`
        .projects-cta-primary {
          font-size: 0.9rem !important;
          padding: 1rem 2.25rem !important;
          letter-spacing: 0.2em !important;
        }
        @media (max-width: 768px) {
          .impact-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .impact-strip-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
