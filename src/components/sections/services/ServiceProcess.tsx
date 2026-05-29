import { useRef, useEffect, useState } from "react";
import { useInView } from "../../../hooks/useInView";
import {
  SERVICES_PROCESS_STEPS,
  SERVICES_PROCESS_META,
} from "../../../constants";

export default function ServiceProcess() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.8;
      const end = windowH * 0.2;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end))
      );
      setLineProgress(progress);
      setActiveStep(Math.floor(progress * SERVICES_PROCESS_STEPS.length) - 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#060A14",
        padding: "10rem 1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,229,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "90rem", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: "7rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "#00E5FF",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            {SERVICES_PROCESS_META.sectionLabel}
          </span>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "white",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            {SERVICES_PROCESS_META.headline}
          </h2>
        </div>

        {/* ── DESKTOP layout ── */}
        {!isMobile && (
          <>
            {/* Horizontal progress line */}
            <div
              style={{
                position: "relative",
                marginBottom: "4rem",
                height: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                ref={lineRef}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${lineProgress * 100}%`,
                  background: "linear-gradient(to right, #00E5FF, #C9A84C)",
                  transition: "width 0.1s linear",
                }}
              />
            </div>

            {/* Steps grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${SERVICES_PROCESS_STEPS.length}, 1fr)`,
                gap: "1rem",
              }}
            >
              {SERVICES_PROCESS_STEPS.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;

                return (
                  <div
                    key={step.number}
                    style={{
                      opacity: isActive ? 1 : 0.35,
                      transform: isCurrent
                        ? "translateY(-8px)"
                        : "translateY(0)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    {/* Dot on line */}
                    <div
                      style={{
                        width: isCurrent ? "12px" : "8px",
                        height: isCurrent ? "12px" : "8px",
                        borderRadius: "50%",
                        background: isCurrent
                          ? "#00E5FF"
                          : isActive
                          ? "rgba(0,229,255,0.5)"
                          : "rgba(255,255,255,0.15)",
                        marginBottom: "2rem",
                        transition: "all 0.4s ease",
                        boxShadow: isCurrent
                          ? "0 0 20px rgba(0,229,255,0.6)"
                          : "none",
                        marginTop: "-10px",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Bebas Neue", cursive',
                        fontSize: "4.5rem",
                        lineHeight: 0.85,
                        color: isActive
                          ? "rgba(0,229,255,0.12)"
                          : "rgba(255,255,255,0.04)",
                        letterSpacing: "-0.02em",
                        marginBottom: "1.25rem",
                        transition: "color 0.5s ease",
                        userSelect: "none",
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "1.05rem",
                        color: isActive ? "white" : "rgba(255,255,255,0.4)",
                        marginBottom: "0.75rem",
                        transition: "color 0.5s ease",
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: isActive
                          ? "rgba(160,160,160,0.85)"
                          : "rgba(100,100,100,0.5)",
                        fontSize: "0.82rem",
                        lineHeight: 1.75,
                        transition: "color 0.5s ease",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── MOBILE layout: vertical timeline, title only ── */}
        {isMobile && (
          <div
            style={{
              position: "relative",
              paddingLeft: "2.5rem",
            }}
          >
            {/* Vertical progress line */}
            <div
              style={{
                position: "absolute",
                left: "7px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: `${lineProgress * 100}%`,
                  background: "linear-gradient(to bottom, #00E5FF, #C9A84C)",
                  transition: "height 0.1s linear",
                }}
              />
            </div>

            {SERVICES_PROCESS_STEPS.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;

              return (
                <div
                  key={step.number}
                  style={{
                    position: "relative",
                    paddingBottom:
                      i < SERVICES_PROCESS_STEPS.length - 1 ? "2.5rem" : 0,
                    opacity: isActive ? 1 : 0.3,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {/* Dot on vertical line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-2.5rem",
                      top: "4px",
                      width: isCurrent ? "14px" : "10px",
                      height: isCurrent ? "14px" : "10px",
                      borderRadius: "50%",
                      background: isCurrent
                        ? "#00E5FF"
                        : isActive
                        ? "rgba(0,229,255,0.5)"
                        : "rgba(255,255,255,0.15)",
                      marginLeft: isCurrent ? "-2px" : "0",
                      transition: "all 0.4s ease",
                      boxShadow: isCurrent
                        ? "0 0 16px rgba(0,229,255,0.6)"
                        : "none",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        color: isActive
                          ? "rgba(0,229,255,0.6)"
                          : "rgba(255,255,255,0.2)",
                        flexShrink: 0,
                        transition: "color 0.5s ease",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "1rem",
                        color: isActive ? "white" : "rgba(255,255,255,0.35)",
                        margin: 0,
                        lineHeight: 1.3,
                        transition: "color 0.5s ease",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
