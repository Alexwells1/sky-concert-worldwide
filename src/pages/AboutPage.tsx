import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE_NAME, ABOUT_HERO } from "../constants";
import HeroSection from "../components/common/HeroSection";
import OurStory from "../components/sections/about/OurStory";
import WhoWeAre from "../components/sections/about/WhoWeAre";
import MissionVision from "../components/sections/about/MissionVision";
import BuildingTheFuture from "../components/sections/about/BuildingTheFuture";
import LeadershipPhilosophy from "../components/sections/about/LeadershipPhilosophy";

export default function AboutPage() {
  useEffect(() => {
    document.title = `About Us | ${SITE_NAME}`;
  }, []);

  return (
    <>
      {/* 1. HERO */}
      <HeroSection
        headline={ABOUT_HERO.headline}
        subheadline={ABOUT_HERO.subheadline}
        supporting={ABOUT_HERO.supporting}
        overlayIntensity="heavy"
      />

      {/* 2. OUR STORY cinematic split layout */}
      <OurStory />

      {/* 3. WHO WE ARE editorial, no checklist */}
      <WhoWeAre />

      {/* 4. MISSION / VISION / GOALS oversized editorial typography */}
      <MissionVision />

      {/* 5. BUILDING THE FUTURE replaces any timeline */}
      <BuildingTheFuture />

      {/* 6. LEADERSHIP PHILOSOPHY replaces fake team */}
      <LeadershipPhilosophy />

      {/* 7. FINAL CTA */}
      <section
        style={{
          background: "var(--color-surface-3)",
          padding: "var(--space-8) var(--space-6)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Atmospheric background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(var(--primary-rgb), 0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Slow pulse ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "var(--radius-full)",
            border: "1px solid rgba(var(--primary-rgb), 0.04)",
            pointerEvents: "none",
            animation: "pulsRing 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            height: "900px",
            borderRadius: "var(--radius-full)",
            border: "1px solid rgba(var(--primary-rgb), 0.02)",
            pointerEvents: "none",
            animation: "pulsRing 6s ease-in-out 2s infinite",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              color: "var(--primary)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              marginBottom: "var(--space-10)",
              animation: "fadeUp 0.8s ease forwards",
              opacity: 0,
            }}
          >
            Ready to Begin
          </p>

          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--foreground)",
              lineHeight: 0.88,
              letterSpacing: "var(--tracking-normal)",
              marginBottom: "var(--space-10)",
              animation: "fadeUp 0.8s ease 0.15s forwards",
              opacity: 0,
            }}
          >
            The Sky Is Your Biggest Stage
          </h2>

          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.7)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              lineHeight: 1.85,
              marginBottom: "var(--space-14)",
              animation: "fadeUp 0.8s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            Let us bring your vision to life with a custom aerial experience
            designed around your goals.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              animation: "fadeUp 0.8s ease 0.45s forwards",
              opacity: 0,
            }}
          >
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              Book a Show <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulsRing {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.2; transform: translate(-50%, -50%) scale(1.04); }
        }
      `}</style>
    </>
  );
}
