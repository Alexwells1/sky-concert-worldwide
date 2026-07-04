import { useInView } from "../../../hooks/useInView";
import { useRef, useState, useEffect, useCallback } from "react";

const SERVICES = [
  {
    id: "wedding-drone-shows",
    number: "01",
    tag: "Romance & Celebration",
    title: "Wedding Drone Experiences",
    emotion: "Transform Celebrations into Sky Poetry",
    description:
      "Your love story deserves a canvas bigger than any stage. We choreograph synchronized aerial formations to your music, your names in light, your narrative written across the night sky giving your guests a moment that outlasts memory.",
    atmosphere: "Intimate. Breathtaking. Once in a lifetime.",
    eventType: "Private ceremonies, destination weddings, luxury receptions",
    accentColor: "var(--secondary)",
    imageUrl:
      "https://i.pinimg.com/736x/de/27/22/de27225b8bf63e900d1928f2e953c2f5.jpg",
    layout: "image-left" as const,
  },
  {
    id: "concert-drone-displays",
    number: "02",
    tag: "Live Performance",
    title: "Concert Sky Experiences",
    emotion: "Turn a Great Concert Into a Legend",
    description:
      "When the music peaks and the sky ignites in synchronized light, something irreversible happens to the audience. We synchronize drone formations with live performance, extending the emotional arc of the music into the atmosphere above.",
    atmosphere: "Electric. Transcendent. Unmissable.",
    eventType: "Live concerts, music festivals, artist tours",
    accentColor: "var(--primary)",
    imageUrl:
      "https://i.pinimg.com/736x/7d/a3/4a/7da34abbbe824fc83a97f56109d79064.jpg",
    layout: "image-right" as const,
  },
  {
    id: "corporate-branding",
    number: "03",
    tag: "Brand Power",
    title: "Corporate Sky Branding",
    emotion: "Put Your Brand Where No Billboard Can Reach",
    description:
      "Your logo visible for kilometers. Your product reveal choreographed across the night sky. Your brand narrative told through a hundred drones moving in perfect unison. This is marketing that becomes the story itself.",
    atmosphere: "Commanding. Unforgettable. Unprecedented.",
    eventType: "Product launches, brand activations, corporate galas",
    accentColor: "var(--secondary)",
    imageUrl:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&q=80",
    layout: "fullscreen-banner" as const,
  },
  {
    id: "stadium-experiences",
    number: "04",
    tag: "Mass Spectacle",
    title: "Stadium Sky Spectacles",
    emotion: "Fill the Sky Above 50,000 People",
    description:
      "Stadium shows demand a scale most productions cannot deliver. We design pre-show and halftime drone spectacles that match the intensity of the moment generating broadcast content and social media moments that extend the event far beyond the venue.",
    atmosphere: "Massive. High-energy. Broadcast-worthy.",
    eventType: "Stadium events, sports halftimes, national celebrations",
    accentColor: "var(--primary)",
    imageUrl:
      "https://i.pinimg.com/736x/96/74/5d/96745db985ad5960526b616e2421a8a6.jpg",
    layout: "image-left" as const,
  },
  {
    id: "festival-entertainment",
    number: "05",
    tag: "Festival Crown",
    title: "Festival Finales",
    emotion: "The Closing Moment That Defines Everything",
    description:
      "Every great festival needs a finale that makes the entire experience feel complete. We design large-scale drone light shows that serve as the crown jewel an ending so spectacular that the audience leaves already planning to return.",
    atmosphere: "Epic. Communal. Unforgettable.",
    eventType: "Multi-day festivals, cultural events, national celebrations",
    accentColor: "var(--secondary)",
    imageUrl:
      "https://i.pinimg.com/736x/56/76/00/567600679d8deb29c3dccf277f85c7dc.jpg",
    layout: "image-right" as const,
  },
  {
    id: "product-launch-activations",
    number: "06",
    tag: "Activation",
    title: "Product Launch Activations",
    emotion: "Launch in the Most Dramatic Way Possible",
    description:
      "A product reveal is only as powerful as the moment of surprise. We design aerial activations that make your launch the only story in the room the kind of press moment that cannot be bought, only experienced.",
    atmosphere: "Dramatic. Viral. Impossible to ignore.",
    eventType: "Product reveals, brand launches, investor events",
    accentColor: "var(--primary)",
    imageUrl:
      "https://i.pinimg.com/736x/cf/4d/70/cf4d70f80af8c7434ff48d4d930cdedb.jpg",
    layout: "split-cinematic" as const,
  },
];

// ── Mobile carousel ──────────────────────────────────────────────────────────

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = SERVICES.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(Math.max(0, Math.min(total - 1, idx)));
      setDragDeltaX(0);
    },
    [total]
  );

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    resetAuto();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [current, resetAuto]);

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDeltaX(0);
    if (autoRef.current) clearTimeout(autoRef.current);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    setDragDeltaX(e.touches[0].clientX - dragStartX);
  };
  const onTouchEnd = () => {
    setDragging(false);
    if (dragDeltaX < -50 && current < total - 1) goTo(current + 1);
    else if (dragDeltaX > 50 && current > 0) goTo(current - 1);
    else {
      setDragDeltaX(0);
      resetAuto();
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
    if (autoRef.current) clearTimeout(autoRef.current);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragDeltaX(e.clientX - dragStartX);
  };
  const onMouseUp = () => {
    setDragging(false);
    if (dragDeltaX < -50 && current < total - 1) goTo(current + 1);
    else if (dragDeltaX > 50 && current > 0) goTo(current - 1);
    else {
      setDragDeltaX(0);
      resetAuto();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "rgba(var(--foreground-rgb), 0.06)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            background: SERVICES[current].accentColor,
            width: `${((current + 1) / total) * 100}%`,
            transition:
              "width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s",
          }}
        />
      </div>

      {/* Slide track */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: "flex",
          transform: `translateX(calc(${-current * 100}% + ${dragDeltaX}px))`,
          transition: dragging
            ? "none"
            : "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
          cursor: dragging ? "grabbing" : "grab",
          willChange: "transform",
        }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.id}
            style={{
              flexShrink: 0,
              width: "100%",
              position: "relative",
              height: "88svh",
              minHeight: "560px",
              backgroundImage: `url(${service.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(var(--color-surface-16-rgb), 0.97) 0%, rgba(var(--color-surface-16-rgb), 0.75) 45%, rgba(var(--color-surface-16-rgb), 0.25) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "var(--space-10) var(--space-7) 5.5rem",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-2xs)",
                  letterSpacing: "0.28em",
                  color: service.accentColor,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "var(--space-3)",
                }}
              >
                {service.number} {service.tag}
              </span>
              <h2
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "clamp(2.4rem, 10vw, 3.5rem)",
                  color: "var(--foreground)",
                  lineHeight: 0.9,
                  letterSpacing: "var(--tracking-normal)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: "italic",
                  fontSize: "var(--text-base)",
                  color: service.accentColor,
                  lineHeight: 1.45,
                  marginBottom: "1.1rem",
                }}
              >
                {service.emotion}
              </p>
              <p
                style={{
                  color: "rgba(195,195,195,0.82)",
                  fontSize: "var(--text-sm-alt)",
                  lineHeight: 1.85,
                  marginBottom: "var(--space-6)",
                  maxWidth: "360px",
                }}
              >
                {service.description}
              </p>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-2xs)",
                  letterSpacing: "0.15em",
                  color: "rgba(130,130,130,0.7)",
                  textTransform: "uppercase",
                }}
              >
                {service.eventType}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav row */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--space-7)",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => {
            goTo(current - 1);
            resetAuto();
          }}
          disabled={current === 0}
          aria-label="Previous"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "var(--radius-full)",
            border: `1px solid ${
              current === 0
                ? "rgba(var(--foreground-rgb), 0.7)"
                : "rgba(var(--foreground-rgb), 0.7)"
            }`,
            background: "rgba(var(--color-surface-16-rgb), 0.6)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === 0 ? "not-allowed" : "pointer",
            opacity: current === 0 ? 0.35 : 1,
            transition:
              "opacity var(--duration-fast-alt), border-color var(--duration-fast-alt)",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7L9 12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                goTo(i);
                resetAuto();
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "var(--radius-sm)",
                background:
                  i === current
                    ? SERVICES[current].accentColor
                    : "rgba(var(--foreground-rgb), 0.6)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => {
            goTo(current + 1);
            resetAuto();
          }}
          disabled={current === total - 1}
          aria-label="Next"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "var(--radius-full)",
            border: `1px solid ${
              current === total - 1
                ? "rgba(var(--foreground-rgb), 0.7)"
                : "rgba(var(--foreground-rgb), 0.7)"
            }`,
            background: "rgba(var(--color-surface-16-rgb), 0.6)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            opacity: current === total - 1 ? 0.35 : 1,
            transition:
              "opacity var(--duration-fast-alt), border-color var(--duration-fast-alt)",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5 2L10 7L5 12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Desktop section layouts ──────────────────────────────────────────────────

function ServiceSection({
  service,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const { ref, inView } = useInView();

  if (service.layout === "fullscreen-banner") {
    return (
      <section
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          opacity: inView ? 1 : 0,
          transition: "opacity var(--duration-crawl-alt) var(--ease-default)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${service.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(var(--color-surface-16-rgb), 0.92) 0%, rgba(var(--color-surface-16-rgb), 0.7) 50%, rgba(var(--color-surface-16-rgb), 0.4) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "var(--container-2xl)",
            margin: "0 auto",
            padding: "var(--space-4) var(--space-6)",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wide)",
                color: service.accentColor,
                textTransform: "uppercase",
                display: "block",
                marginBottom: "var(--space-4)",
              }}
            >
              {service.number} {service.tag}
            </span>
            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 7vw, 7rem)",
                color: "var(--foreground)",
                lineHeight: 0.9,
                letterSpacing: "var(--tracking-normal)",
                marginBottom: "var(--space-6)",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                color: service.accentColor,
                lineHeight: 1.5,
                marginBottom: "var(--space-6)",
              }}
            >
              {service.emotion}
            </p>
            <p
              style={{
                color: "rgba(200,200,200,0.85)",
                fontSize: "var(--text-base)",
                lineHeight: 1.9,
                marginBottom: "var(--space-8)",
                maxWidth: "520px",
              }}
            >
              {service.description}
            </p>
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.15em",
                color: "rgba(150,150,150,0.7)",
                textTransform: "uppercase",
              }}
            >
              {service.eventType}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (service.layout === "split-cinematic") {
    return (
      <section
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "80vh",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${service.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
          }}
        />
        <div
          style={{
            background: "var(--color-surface-7)",
            display: "flex",
            alignItems: "center",
            padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wide)",
                color: service.accentColor,
                textTransform: "uppercase",
                display: "block",
                marginBottom: "var(--space-4)",
              }}
            >
              {service.number} {service.tag}
            </span>
            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--foreground)",
                lineHeight: 0.9,
                letterSpacing: "var(--tracking-normal)",
                marginBottom: "var(--space-6)",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontSize: "var(--text-md-lg)",
                color: service.accentColor,
                lineHeight: 1.5,
                marginBottom: "var(--space-6)",
              }}
            >
              {service.emotion}
            </p>
            <p
              style={{
                color: "rgba(var(--color-gray-180-rgb), 0.85)",
                fontSize: "var(--text-body-lg)",
                lineHeight: 1.9,
                marginBottom: "var(--space-7)",
              }}
            >
              {service.description}
            </p>
            <div
              style={{
                borderTop: `1px solid rgba(${
                  service.accentColor === "var(--primary)"
                    ? "0,229,255"
                    : "201,168,76"
                },0.15)`,
                paddingTop: "var(--space-5)",
              }}
            >
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.15em",
                  color: "rgba(130,130,130,0.7)",
                  textTransform: "uppercase",
                  lineHeight: 1.8,
                }}
              >
                Ideal for
                <br />
                <span style={{ color: "rgba(var(--color-gray-180-rgb), 0.7)" }}>
                  {service.eventType}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isImageLeft = service.layout === "image-left";
  return (
    <section
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "75vh",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
      }}
    >
      {isImageLeft && (
        <div
          style={{
            backgroundImage: `url(${service.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, transparent 60%, var(--color-surface-7) 100%)",
            }}
          />
        </div>
      )}
      <div
        style={{
          background: "var(--color-surface-7)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
          order: isImageLeft ? 2 : 1,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tracking-wide)",
              color: service.accentColor,
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-4)",
            }}
          >
            {service.number} {service.tag}
          </span>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "var(--foreground)",
              lineHeight: 0.9,
              letterSpacing: "var(--tracking-normal)",
              marginBottom: "var(--space-6)",
            }}
          >
            {service.title}
          </h2>
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontSize: "var(--text-md-lg)",
              color: service.accentColor,
              lineHeight: 1.5,
              marginBottom: "var(--space-6)",
            }}
          >
            {service.emotion}
          </p>
          <p
            style={{
              color: "rgba(var(--color-gray-180-rgb), 0.85)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.9,
              marginBottom: "var(--space-7)",
            }}
          >
            {service.description}
          </p>
          <div
            style={{
              borderTop: `1px solid rgba(${
                service.accentColor === "var(--primary)"
                  ? "0,229,255"
                  : "201,168,76"
              },0.15)`,
              paddingTop: "var(--space-5)",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-xs)",
                letterSpacing: "0.15em",
                color: "rgba(130,130,130,0.7)",
                textTransform: "uppercase",
                lineHeight: 1.8,
              }}
            >
              Ideal for
              <br />
              <span style={{ color: "rgba(var(--color-gray-180-rgb), 0.7)" }}>
                {service.eventType}
              </span>
            </p>
          </div>
        </div>
      </div>
      {!isImageLeft && (
        <div
          style={{
            backgroundImage: `url(${service.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
            order: 2,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to left, transparent 60%, var(--color-surface-7) 100%)",
            }}
          />
        </div>
      )}
    </section>
  );
}

// ── Root export ──────────────────────────────────────────────────────────────

export default function CoreServices() {
  const { ref, inView } = useInView();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "var(--color-surface-3)" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "var(--container-2xl)",
          margin: "0 auto",
          padding: isMobile ? "5rem 1.5rem 3rem" : "8rem 1.5rem 4rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition:
            "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-xs)",
            letterSpacing: "0.3em",
            color: "var(--primary)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "var(--space-6)",
          }}
        >
          What We Create
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1.25rem" : "4rem",
            alignItems: "end",
          }}
        >
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "var(--foreground)",
              lineHeight: 0.9,
              letterSpacing: "var(--tracking-normal)",
              margin: 0,
            }}
          >
            Sky Experiences
            <br />
            <span style={{ color: "rgba(var(--primary-rgb), 0.5)" }}>
              Without Limits
            </span>
          </h2>
          <p
            style={{
              color: "rgba(var(--color-gray-160-rgb), 0.85)",
              fontSize: "var(--text-md-alt)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Every event is a different emotional canvas. We design aerial
            experiences that match the scale of your ambition and the depth of
            the moment you're creating.
          </p>
        </div>

        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
              marginTop: "var(--space-7)",
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path
                d="M1 6H19M14 1L19 6L14 11"
                stroke="rgba(var(--primary-rgb), 0.5)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-2xs)",
                letterSpacing: "0.2em",
                color: "rgba(var(--primary-rgb), 0.45)",
                textTransform: "uppercase",
              }}
            >
              Swipe to explore
            </span>
          </div>
        )}
      </div>

      {isMobile ? (
        <MobileCarousel />
      ) : (
        SERVICES.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))
      )}
    </section>
  );
}
