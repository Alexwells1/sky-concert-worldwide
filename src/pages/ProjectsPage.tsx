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

// ─── Impact metrics strip ──────────────────────────────────────────────────────
function ImpactStrip() {
  const { ref, inView } = useInView();

  const metrics = [
    { value: "50,000+", label: "Live Spectators" },
    { value: "300+", label: "Drone Formations" },
    { value: "Millions", label: "Social Impressions" },
    { value: "National", label: "Scale Productions" },
  ];

  return (
    <section
      style={{
        background: "rgba(6,10,20,0.8)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "5rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
        className="impact-strip-grid"
      >
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            style={{
              textAlign: "center",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(2rem)",
              transition: `opacity 0.7s ease ${
                i * 0.12
              }s, transform 0.7s ease ${i * 0.12}s`,
              padding: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "white",
                letterSpacing: "0.02em",
                lineHeight: 1,
                margin: "0 0 0.75rem",
              }}
            >
              {metric.value}
            </p>
            <div
              style={{
                width: "24px",
                height: "1px",
                background: "rgba(0,229,255,0.4)",
                margin: "0 auto 0.75rem",
              }}
            />
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
            transition: "opacity 0.8s ease",
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
            "linear-gradient(to bottom, rgba(6,10,20,0.55) 0%, rgba(6,10,20,0.35) 50%, rgba(6,10,20,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1.5rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.5rem)",
          transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        }}
      >
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Sky Concert Worldwide
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "white",
            fontStyle: "italic",
            lineHeight: 1.15,
            maxWidth: "680px",
            margin: "0 auto",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
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
        background: "#060A14",
        padding: "10rem 1.5rem",
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
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
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
          borderTop: "1px solid rgba(0,229,255,0.15)",
          borderLeft: "1px solid rgba(0,229,255,0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "3rem",
          right: "3rem",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(0,229,255,0.15)",
          borderRight: "1px solid rgba(0,229,255,0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(0,229,255,0.15)",
          borderLeft: "1px solid rgba(0,229,255,0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          right: "3rem",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(0,229,255,0.15)",
          borderRight: "1px solid rgba(0,229,255,0.15)",
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
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Pre-label */}
        <p
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            color: "rgba(0,229,255,0.5)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Begin Your Production
        </p>

        {/* Giant headline */}
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "white",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            marginBottom: "2.5rem",
          }}
        >
          {PROJECTS_CTA.headline}
        </h2>

        {/* Subheadline */}
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "3.5rem",
            maxWidth: "520px",
            margin: "0 auto 3.5rem",
          }}
        >
          {PROJECTS_CTA.subheadline}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link to="/contact" className="btn-primary projects-cta-primary">
            {PROJECTS_CTA.cta1} <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-secondary">
            {PROJECTS_CTA.cta2}
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

      {/* 2. Impact metrics */}
      <ImpactStrip />

      {/* 3. Alternating project storytelling sections */}
      <ProjectsShowcase />

      {/* 4. Cinematic video break */}
      <VideoBreak />

      {/* 5. Why our shows feel different — editorial rows */}
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
