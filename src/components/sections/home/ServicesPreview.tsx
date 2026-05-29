import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { HOME_SERVICES, HOME_SERVICES_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

const SERVICE_VISUALS = [
  {
    gradient: "linear-gradient(160deg, #0a1535 0%, #0d2040 60%, #080d1c 100%)",
    accent: "rgba(80,160,255,0.18)",
  },
  {
    gradient: "linear-gradient(160deg, #150a35 0%, #1e0d3a 60%, #0d0818 100%)",
    accent: "rgba(140,80,255,0.18)",
  },
  {
    gradient: "linear-gradient(160deg, #0a2520 0%, #0d3028 60%, #070f0e 100%)",
    accent: "rgba(60,200,160,0.15)",
  },
  {
    gradient: "linear-gradient(160deg, #251500 0%, #301a0a 60%, #100900 100%)",
    accent: "rgba(220,150,50,0.15)",
  },
  {
    gradient: "linear-gradient(160deg, #200a15 0%, #2a0d1a 60%, #0e0709 100%)",
    accent: "rgba(255,80,120,0.15)",
  },
];

// Detect if a URL points to a video by its extension
function isVideo(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

function ServiceMedia({ url }: { url: string; gradient: string }) {
  if (isVideo(url)) {
    return (
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="service-panel-media"
      />
    );
  }
  return (
    <img
      src={url}
      alt=""
      loading="lazy"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
      className="service-panel-media"
    />
  );
}

export default function ServicesPreview() {
  const { ref, inView } = useInView();
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const SPEED = 0.6;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const touchStartX = useRef(0);
  const touchStartPos = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    pause();
    touchStartX.current = e.touches[0].clientX;
    touchStartPos.current = posRef.current;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.touches[0].clientX;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    let next = touchStartPos.current + dx;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    posRef.current = next;
    track.style.transform = `translateX(-${posRef.current}px)`;
  };
  const onTouchEnd = () => {
    setTimeout(resume, 1200);
  };

  const doubled = [...HOME_SERVICES, ...HOME_SERVICES];

  return (
    <>
      <style>{`
        .services-cinema-section {
          padding: 8rem 0 8rem;
          position: relative;
          overflow: hidden;
        }
        .services-cinema-header {
          padding: 0 1.5rem;
          max-width: 80rem;
          margin: 0 auto 3.5rem;
        }
        .services-cinema-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          display: block;
          margin-bottom: 1.25rem;
        }
        .services-cinema-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(2rem, 5vw, 3.75rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.92);
          margin: 0 0 1.5rem;
        }
        .services-scroll-outer {
          overflow: hidden;
          width: 100%;
          cursor: grab;
          user-select: none;
        }
        .services-scroll-outer:active { cursor: grabbing; }
        .services-scroll-track {
          display: flex;
          gap: 2px;
          will-change: transform;
        }
        .service-panel {
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          width: 300px;
          height: 420px;
          cursor: pointer;
          border: none;
          padding: 0;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: transparent;
        }
        @media (min-width: 900px) {
          .service-panel { width: 340px; height: 460px; }
        }
        .service-panel-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        /* Scale media on hover just like the bg */
        .service-panel:hover .service-panel-media {
          transform: scale(1.04);
        }
        .service-panel-accent {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        .service-panel:hover .service-panel-accent { opacity: 1; }
        .service-panel-content {
          position: relative;
          z-index: 2;
          padding: 1.5rem 1.5rem;
          background: linear-gradient(to top, rgba(4,6,14,0.95) 0%, rgba(4,6,14,0.3) 70%, transparent 100%);
        }
        .service-panel-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.5rem;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.6rem;
        }
        .service-panel-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.4;
          margin: 0 0 0.75rem;
          display: block;
        }
        .service-panel-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0);
          line-height: 1.7;
          margin: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16,1,0.3,1) 0.05s, color 0.4s ease 0.1s;
        }
        .service-panel:hover .service-panel-desc {
          max-height: 6rem;
          color: rgba(255,255,255,0.45);
        }
        .services-footer {
          padding: 2.5rem 1.5rem 0;
          max-width: 80rem;
          margin: 0 auto;
        }
      `}</style>

      <section className="services-cinema-section">
        <div
          ref={ref}
          className="services-cinema-header"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.5rem)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span className="services-cinema-label">
            {HOME_SERVICES_META.sectionLabel}
          </span>
          <h2 className="services-cinema-title">
            {HOME_SERVICES_META.headline}
          </h2>
        </div>

        <div
          className="services-scroll-outer"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="services-scroll-track" ref={trackRef}>
            {doubled.map((service, i) => {
              const visualIdx =
                HOME_SERVICES.findIndex((s) => s.id === service.id) %
                SERVICE_VISUALS.length;
              const visual =
                SERVICE_VISUALS[
                  visualIdx < 0 ? i % SERVICE_VISUALS.length : visualIdx
                ];
              return (
                <div key={`${service.id}-${i}`} className="service-panel">
                  {/* Fallback gradient bg — always present behind media */}
                  <div
                    className="service-panel-bg"
                    style={{ background: visual.gradient }}
                  />

                  {/* Media layer: image or autoplay video */}
                  {service.media && (
                    <ServiceMedia
                      url={service.media}
                      gradient={visual.gradient}
                    />
                  )}

                  {/* Hover colour accent overlay */}
                  <div
                    className="service-panel-accent"
                    style={{
                      background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${visual.accent} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="service-panel-content">
                    <span className="service-panel-num">{service.number}</span>
                    <span className="service-panel-title">{service.title}</span>
                    <p className="service-panel-desc">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="services-footer">
          <Link to="/services" className="btn-ghost">
            Explore All Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
