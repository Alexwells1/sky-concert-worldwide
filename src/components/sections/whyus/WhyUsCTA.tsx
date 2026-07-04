import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { WHYUS_CTA } from "../../../constants";

export default function WhyUsCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--color-surface-8)",
      }}
    >
      {/* Atmospheric background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(var(--color-surface-8-rgb), 0.88) 0%, rgba(var(--color-surface-8-rgb), 0.72) 50%, rgba(var(--color-surface-8-rgb), 0.96) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(var(--secondary-rgb), 0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "var(--space-6) var(--space-6)",
          maxWidth: "860px",
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity var(--duration-crawl-alt) var(--ease-default), transform var(--duration-crawl-alt) var(--ease-default)",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "var(--text-label)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--secondary)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "var(--space-10)",
          }}
        >
          Rise Above
        </span>

        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3.5rem, 9vw, 9.5rem)",
            color: "var(--foreground)",
            lineHeight: 0.85,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-10)",
          }}
        >
          Ready to Rise
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(var(--secondary-rgb), 0.55)",
              color: "transparent",
            }}
          >
            Above the Rest?
          </span>
        </h2>

        <p
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(185,185,185,0.8)",
            lineHeight: 1.75,
            marginBottom: "var(--space-16)",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {WHYUS_CTA.subheadline}
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
