import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WhyUsHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Slow drifting light orbs different feel from Services particles
    type Orb = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      hue: number;
      alpha: number;
    };
    const orbs: Orb[] = [];
    for (let i = 0; i < 6; i++) {
      orbs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 150 + Math.random() * 250,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        hue: i % 2 === 0 ? 190 : 45, // cyan vs gold
        alpha: 0.03 + Math.random() * 0.04,
      });
    }

    // Sparse star field
    type Star = {
      x: number;
      y: number;
      size: number;
      flicker: number;
      speed: number;
    };
    const stars: Star[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.3,
        flicker: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.015,
      });
    }

    let rafId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = w + orb.r;
        if (orb.x > w + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = h + orb.r;
        if (orb.y > h + orb.r) orb.y = -orb.r;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        grad.addColorStop(0, `hsla(${orb.hue}, 100%, 65%, ${orb.alpha})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stars
      stars.forEach((s) => {
        s.flicker += s.speed;
        const opacity = 0.25 + 0.55 * Math.abs(Math.sin(s.flicker));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 235, 255, ${opacity})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Deep space background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(145deg, var(--color-surface-9) 0%, #030B1A 45%, #05091A 75%, var(--color-surface-9) 100%)",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-surface-3))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Content left-aligned for variety vs Services centered hero */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "var(--container-2xl)",
          width: "100%",
          margin: "0 auto",
          padding: "0 var(--space-6)",
        }}
      >
        <div style={{ maxWidth: "750px" }}>
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-3)",
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--secondary)",
              textTransform: "uppercase",
              marginBottom: "var(--space-10)",
              animation: "whyFadeUp 0.8s ease forwards",
              opacity: 0,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, var(--secondary))",
              }}
            />
            The Standard We Set
          </div>

          {/* Headline two-tone split */}
          <h1
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              lineHeight: 0.88,
              letterSpacing: "var(--tracking-normal)",
              marginBottom: "var(--space-10)",
              animation: "whyFadeUp 0.9s 0.12s ease forwards",
              opacity: 0,
            }}
          >
            <span style={{ color: "var(--foreground)", display: "block" }}>
              Because Your
            </span>
            <span style={{ color: "var(--foreground)", display: "block" }}>
              Event Deserves
            </span>
            <span
              style={{
                display: "block",
                WebkitTextStroke: "1px rgba(var(--secondary-rgb), 0.7)",
                color: "transparent",
              }}
            >
              to Own the Sky.
            </span>
          </h1>

          {/* Supporting */}
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
              color: "rgba(190,190,190,0.8)",
              lineHeight: 1.65,
              maxWidth: "520px",
              marginBottom: "var(--space-14)",
              animation: "whyFadeUp 1s 0.25s ease forwards",
              opacity: 0,
            }}
          >
            In a world where attention is hard to capture, we give you an unfair
            advantage the sky itself.
          </p>

          <div
            style={{
              animation: "whyFadeUp 1s 0.38s ease forwards",
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
              Book a Show <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes whyFadeUp {
          from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
