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
        background: "var(--color-surface-3)",
        padding: "var(--space-8) var(--space-6)",
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
            "radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(var(--secondary-rgb), 0.03) 0%, transparent 50%)",
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
            marginBottom: "var(--space-28)",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--primary)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-6)",
            }}
          >
            {SERVICES_PROCESS_META.sectionLabel}
          </span>
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
                marginBottom: "var(--space-16)",
                height: "1px",
                background: "rgba(var(--foreground-rgb), 0.06)",
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
                  background:
                    "linear-gradient(to right, var(--primary), var(--secondary))",
                  transition: "width 0.1s linear",
                }}
              />
            </div>

            {/* Steps grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${SERVICES_PROCESS_STEPS.length}, 1fr)`,
                gap: "var(--space-4)",
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
                        borderRadius: "var(--radius-full)",
                        background: isCurrent
                          ? "var(--primary)"
                          : isActive
                          ? "rgba(var(--primary-rgb), 0.5)"
                          : "rgba(var(--foreground-rgb), 0.15)",
                        marginBottom: "var(--space-8)",
                        transition:
                          "all var(--duration-moderate-alt) var(--ease-default)",
                        boxShadow: isCurrent
                          ? "0 0 20px rgba(var(--primary-rgb), 0.6)"
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
                          ? "rgba(var(--primary-rgb), 0.12)"
                          : "rgba(var(--foreground-rgb), 0.4)",
                        letterSpacing: "var(--tracking-tight)",
                        marginBottom: "var(--space-5)",
                        transition:
                          "color var(--duration-medium-alt) var(--ease-default)",
                        userSelect: "none",
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "var(--text-md-alt)",
                        color: isActive
                          ? "white"
                          : "rgba(var(--foreground-rgb), 0.4)",
                        marginBottom: "var(--space-3)",
                        transition:
                          "color var(--duration-medium-alt) var(--ease-default)",
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: isActive
                          ? "rgba(var(--color-gray-160-rgb), 0.85)"
                          : "rgba(100,100,100,0.5)",
                        fontSize: "0.82rem",
                        lineHeight: 1.75,
                        transition:
                          "color var(--duration-medium-alt) var(--ease-default)",
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
              paddingLeft: "var(--space-10)",
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
                background: "rgba(var(--foreground-rgb), 0.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: `${lineProgress * 100}%`,
                  background:
                    "linear-gradient(to bottom, var(--primary), var(--secondary))",
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
                      borderRadius: "var(--radius-full)",
                      background: isCurrent
                        ? "var(--primary)"
                        : isActive
                        ? "rgba(var(--primary-rgb), 0.5)"
                        : "rgba(var(--foreground-rgb), 0.15)",
                      marginLeft: isCurrent ? "-2px" : "0",
                      transition:
                        "all var(--duration-moderate-alt) var(--ease-default)",
                      boxShadow: isCurrent
                        ? "0 0 16px rgba(var(--primary-rgb), 0.6)"
                        : "none",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "var(--space-3)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: "var(--text-label)",
                        letterSpacing: "0.15em",
                        color: isActive
                          ? "rgba(var(--primary-rgb), 0.6)"
                          : "rgba(var(--foreground-rgb), 0.2)",
                        flexShrink: 0,
                        transition:
                          "color var(--duration-medium-alt) var(--ease-default)",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "var(--text-base)",
                        color: isActive
                          ? "white"
                          : "rgba(var(--foreground-rgb), 0.35)",
                        margin: 0,
                        lineHeight: 1.3,
                        transition:
                          "color var(--duration-medium-alt) var(--ease-default)",
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
