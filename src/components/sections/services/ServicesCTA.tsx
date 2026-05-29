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
        background: "#020810",
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
            "linear-gradient(to bottom, rgba(2,8,16,0.85) 0%, rgba(2,8,16,0.7) 50%, rgba(2,8,16,0.95) 100%)",
        }}
      />

      {/* Radial atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,229,255,0.07) 0%, transparent 65%)",
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
          padding: "4rem 1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "2.5rem",
          }}
        >
          Commission Your Experience
        </span>

        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(4rem, 10vw, 10rem)",
            color: "white",
            lineHeight: 0.85,
            letterSpacing: "0.02em",
            marginBottom: "2.5rem",
          }}
        >
          Let the Sky
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(0,229,255,0.5)",
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
            marginBottom: "4rem",
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
            gap: "1rem",
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
              gap: "0.5rem",
              fontSize: "0.85rem",
              padding: "1rem 2.5rem",
            }}
          >
            Request a Custom Proposal <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              padding: "1rem 2.5rem",
            }}
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
