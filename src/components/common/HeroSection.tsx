import type { HeroSectionProps } from "../../types";

export default function HeroSection({
  headline,
  subheadline,
  supporting,
}: HeroSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow no opaque background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(var(--primary-rgb), 0.05) 0%, transparent 65%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "860px",
          padding: "0 var(--space-6)",
        }}
      >
        <h1
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            color: "var(--foreground)",
            lineHeight: 0.95,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-6)",
            animation: "fadeUp 0.7s ease forwards",
          }}
        >
          {headline}
        </h1>
        <p
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "rgba(var(--foreground-rgb), 0.85)",
            lineHeight: 1.4,
            marginBottom: supporting ? "1rem" : 0,
            animation: "fadeUp 0.7s ease 0.2s forwards",
            opacity: 0,
          }}
        >
          {subheadline}
        </p>
        {supporting && (
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "var(--text-base)",
              lineHeight: 1.7,
              animation: "fadeUp 0.7s ease 0.4s forwards",
              opacity: 0,
            }}
          >
            {supporting}
          </p>
        )}
      </div>
    </section>
  );
}
