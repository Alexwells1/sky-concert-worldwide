import { useRef, useEffect } from "react";
import { useInView } from "../../../hooks/useInView";

const VIDEO_URL = "PLACEHOLDER_VIDEOBREAK_URL";

interface VideoBreakProps {
  src?: string;
  isPortrait?: boolean;
  videoPosition?: string; // e.g. "center", "top", "50% 20%"
  eyebrow?: string;
  headline?: React.ReactNode;
}

export default function VideoBreak({
  src = VIDEO_URL,
  isPortrait = false,
  videoPosition = "center",
}: VideoBreakProps) {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (inView && !hasStartedRef.current) {
      hasStartedRef.current = true;
      videoRef.current?.play().catch(() => {});
    }
  }, [inView]);

  return (
    <>
      <style>{`
        .video-break {
  position: relative;
  height: 75vh;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .video-break {
    height: 92vh;
  }
}

        /* ── Landscape: standard cover fill ── */
        .video-break video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Portrait: let height drive, stretch width to fill ── */
        .video-break.is-portrait video {
          width: auto;
          height: 100%;
          min-width: 100%;
          /* object-fit:cover alone on portrait causes pillarboxing in some browsers */
          /* so we override with explicit sizing above */
        }

        .video-break-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(var(--color-surface-11-rgb), 0.6) 0%,
            rgba(var(--color-surface-11-rgb), 0.1) 30%,
            rgba(var(--color-surface-11-rgb), 0.1) 70%,
            rgba(var(--color-surface-11-rgb), 0.6) 100%
          );
          z-index: 2;
        }
        .video-break-text {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        }
        .video-break-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .video-break-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(var(--foreground-rgb), 0.92);
          text-align: center;
          margin: 0;
        }
      `}</style>

      <div
        ref={ref}
        className={`video-break${isPortrait ? " is-portrait" : ""}`}
      >
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          style={{ objectPosition: videoPosition }}
        />
      </div>
    </>
  );
}
