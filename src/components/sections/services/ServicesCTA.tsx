import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../../hooks/useInView";

export default function ServicesCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--color-surface-8)",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(var(--color-surface-8-rgb), 0.85) 0%, rgba(var(--color-surface-8-rgb), 0.7) 50%, rgba(var(--color-surface-8-rgb), 0.95) 100%)",
        }}
      />

      {/* Radial atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(var(--primary-rgb), 0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "var(--space-3) var(--space-6)",
          maxWidth: "900px",
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity var(--duration-crawl-alt) var(--ease-default), transform var(--duration-crawl-alt) var(--ease-default)",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-xs)",
            letterSpacing: "0.3em",
            color: "var(--secondary)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "var(--space-10)",
          }}
        >
          Commission Your Experience
        </span>

        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(4rem, 10vw, 10rem)",
            color: "var(--foreground)",
            lineHeight: 0.85,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-10)",
          }}
        >
          Let the Sky
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(var(--primary-rgb), 0.5)",
              color: "transparent",
            }}
          >
            Tell Your Story
          </span>
        </h2>

        <p
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "rgba(190,190,190,0.8)",
            lineHeight: 1.7,
            marginBottom: "var(--space-16)",
            maxWidth: "540px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Design an experience bigger than the stage. Create a moment people
          never forget.
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/contact"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              fontSize: "var(--text-sm-alt)",
              padding: "var(--space-4) var(--space-10)",
            }}
          >
            Book a Show <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
