import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { HOME_HERO, FEATURED_PROJECTS } from "../../../constants";

const HERO_VIDEO_URL =
  "https://res.cloudinary.com/dqp54assh/video/upload/v1778690969/Africa_Wedding_Storyboard_3_inscn0.mp4";

const SHOWREEL_URL = FEATURED_PROJECTS.find((p) => p.videoUrl)?.videoUrl ?? "";

const HEADER_HEIGHT = 72;

export default function HomeHero() {
  const [showreel, setShowreel] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Escape to close
  useEffect(() => {
    if (!showreel) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowreel(false);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [showreel]);

  useEffect(() => {
    document.body.style.overflow = showreel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showreel]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {});
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;1,9..40,200&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0) translateX(-50%); }
          50%       { opacity: 0.8; transform: translateY(5px) translateX(-50%); }
        }

        .hero-watch-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.75);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 0.4s ease;
        }
        .hero-watch-btn:hover {
          color: rgba(255,255,255,1);
        }
        .hero-watch-btn .play-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.4s ease, background 0.4s ease;
        }
        .hero-watch-btn:hover .play-ring {
          border-color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.07);
        }
        .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 1.8s ease;
        }
        .scroll-cue {
          position: absolute;
          bottom: 2.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          animation: fadeIn 1s ease 2.4s both, scrollPulse 3s ease 3.4s infinite;
        }
        .scroll-cue span {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }
        .scroll-cue-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.35), transparent);
        }
      `}</style>

      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingTop: `${HEADER_HEIGHT}px`,
          paddingBottom: "12vh",
          boxSizing: "border-box",
        }}
      >
        {/* ── Dark fallback ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#080a0e",
            zIndex: 0,
          }}
        />

        {/* ── Background video ── */}
        <video
          ref={videoRef}
          className="hero-video-bg"
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          disableRemotePlayback
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          style={{
            zIndex: 1,
            opacity: videoLoaded ? 1 : 0,
          }}
        />

        {/* ── Overlay: light vignette only ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.38) 0%,
              rgba(0,0,0,0.10) 35%,
              rgba(0,0,0,0.10) 55%,
              rgba(0,0,0,0.55) 100%
            )`,
            zIndex: 2,
          }}
        />

        {/* ── Radial edge vignette ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
            zIndex: 3,
          }}
        />

        {/* ── Hero content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 6,
            width: "100%",
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              opacity: 0,
              animation: "fadeUp 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s forwards",
            }}
          >
            Sky Concert Worldwide
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2rem, 4vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.92)",
              margin: 0,
              opacity: 0,
              animation:
                "fadeUp 1.6s cubic-bezier(0.16,1,0.3,1) 0.55s forwards",
            }}
          >
            {HOME_HERO.headline1}
            <br />
            <span style={{ fontWeight: 200, color: "rgba(255,255,255,0.6)" }}>
              {HOME_HERO.headline2}
            </span>
          </h1>

          {/* Watch Showreel */}
          <div
            style={{
              opacity: 0,
              animation: "fadeUp 1.6s cubic-bezier(0.16,1,0.3,1) 0.9s forwards",
            }}
          >
            <button
              className="hero-watch-btn"
              onClick={() => setShowreel(true)}
              aria-label="Watch Showreel"
            >
              <span className="play-ring">
                <Play
                  size={11}
                  fill="currentColor"
                  style={{ marginLeft: "2px" }}
                />
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <button
          className="scroll-cue"
          onClick={() => {
            const target = document.getElementById("scrolTo");
            if (target) target.scrollIntoView({ behavior: "smooth" });
            else
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          }}
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <div className="scroll-cue-line" />
        </button>
      </section>

      {/* ── Showreel modal ── */}
      {showreel && SHOWREEL_URL && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowreel(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              background: "#0a0c10",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowreel(false)}
              style={{
                position: "absolute",
                top: "-2.75rem",
                right: 0,
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.9)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
            >
              <X size={13} />
              Close
            </button>

            {/* Video */}
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <video
                src={SHOWREEL_URL}
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
