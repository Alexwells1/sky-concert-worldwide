import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "../../../hooks/useInView";

const FAQ_ITEMS = [
  {
    question: "How many drones does a show require?",
    answer:
      "Fleet size scales with your ambition. Intimate shows begin with 100–300 drones; large concerts and national events deploy a thousand or more. During discovery, we recommend the fleet size that best serves your creative vision and venue scale.",
  },
  {
    question: "How far in advance do we need to begin planning?",
    answer:
      "For most events, we recommend beginning creative conversations at least 8–12 weeks before your event date. This allows adequate time for concept development, 3D simulation, airspace regulatory approvals, rehearsal flights, and logistics coordination.",
  },
  {
    question: "What safety systems are in place?",
    answer:
      "Every show operates with multiple redundant safety layers pre-programmed flight paths, triple-layered geofencing, emergency return-to-home protocols, minimum audience distance zones, and trained on-site flight safety officers. We comply with Nigerian Civil Aviation Authority guidelines and international safety standards at every event.",
  },
  {
    question: "Do you handle regulatory approvals?",
    answer:
      "Yes. Our team manages the full regulatory process from start to finish, including Nigerian Civil Aviation Authority applications, local security coordination, venue airspace assessment, and any state or government approvals required for your specific location.",
  },
  {
    question: "What happens if weather conditions are unfavorable?",
    answer:
      "Drone shows may be delayed or rescheduled if conditions heavy rain, storm, strong winds, or poor visibility pose any risk to guests or equipment. We conduct detailed weather monitoring throughout planning and on event day, and work with clients on contingency scheduling where needed.",
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "var(--color-surface-3)",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-16)",
            alignItems: "end",
            marginBottom: "var(--space-24)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <div>
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
              Questions
            </span>
            <h2
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 6vw, 6rem)",
                color: "var(--foreground)",
                lineHeight: 0.9,
                letterSpacing: "var(--tracking-normal)",
                margin: 0,
              }}
            >
              Everything
              <br />
              <span style={{ color: "rgba(var(--primary-rgb), 0.5)" }}>
                You Need
              </span>
              <br />
              to Know
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div
          style={{
            borderTop: "1px solid rgba(var(--foreground-rgb), 0.07)",
          }}
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s ${
                    0.1 + i * 0.08
                  }s ease, transform 0.7s ${0.1 + i * 0.08}s ease`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--space-8)",
                    padding: "var(--space-10) 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-8)",
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: "var(--text-3xs)",
                        letterSpacing: "0.2em",
                        color: isOpen
                          ? "var(--primary)"
                          : "rgba(var(--primary-rgb), 0.55)",
                        textTransform: "uppercase",
                        flexShrink: 0,
                        transition: "color var(--duration-normal)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                        color: isOpen ? "white" : "rgba(220,220,220,0.8)",
                        lineHeight: 1.3,
                        transition: "color var(--duration-normal)",
                      }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--radius-full)",
                      border: `1px solid ${
                        isOpen
                          ? "rgba(var(--primary-rgb), 0.4)"
                          : "rgba(var(--foreground-rgb), 0.7)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "border-color 0.25s",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} style={{ color: "var(--primary)" }} />
                    ) : (
                      <Plus
                        size={14}
                        style={{ color: "rgba(var(--foreground-rgb), 0.4)" }}
                      />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "var(--space-10)",
                      paddingLeft: "calc(0.55rem * 2 + var(--space-8) + 1px)",
                      opacity: isOpen ? 1 : 0,
                      transition: "opacity 0.35s 0.1s ease",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(150,150,150,0.85)",
                        fontSize: "var(--text-body-lg)",
                        lineHeight: 1.9,
                        margin: 0,
                        maxWidth: "720px",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
