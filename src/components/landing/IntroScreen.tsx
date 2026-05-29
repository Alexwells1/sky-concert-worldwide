import { useState, useEffect, useRef, useCallback } from "react";

interface IntroScreenProps {
  gifSrc: string;
  onComplete?: () => void;
}

export default function IntroScreen({ gifSrc, onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");
  const [scrollY, setScrollY] = useState(0);
  const triggered = useRef(false);

  const dismiss = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;
    setPhase("fading");
    setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 900);
  }, [onComplete]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      // Trigger dismiss once user scrolls past 80px
      if (y > 80) dismiss();
    };

    const onKey = (e: KeyboardEvent) => {
      if (["Space", "ArrowDown", "Enter"].includes(e.code)) dismiss();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [dismiss]);

  if (phase === "done") return null;

  // Parallax: gif slides up at 0.4x scroll speed, overlay at 0.2x
  const gifTranslate = scrollY * 0.4;
  const overlayOpacity = Math.max(0, 1 - scrollY / 60);

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        cursor: "pointer",
        overflow: "hidden",
        opacity: phase === "fading" ? 0 : 1,
        transition:
          phase === "fading"
            ? "opacity 0.9s cubic-bezier(0.4,0,0.2,1)"
            : "none",
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      {/* Fullscreen gif — moves up on scroll (parallax) */}
      <img
        src={gifSrc}
        alt="Intro"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translateY(-${gifTranslate}px)`,
          transition: "transform 0.05s linear",
          willChange: "transform",
        }}
      />

      {/* Dark gradient at bottom for hint legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Scroll hint — fades as user scrolls */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: overlayOpacity,
          transition: "opacity 0.15s",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Scroll or tap to enter
        </span>

        {/* Bouncing chevron */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ animation: "bounce 1.4s ease-in-out infinite" }}
        >
          <polyline
            points="4,7 10,13 16,7"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0);   opacity: 0.5; }
          50%       { transform: translateY(6px); opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
