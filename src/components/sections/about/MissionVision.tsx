import { ABOUT_MISSION_VISION } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

function EditorialBlock({
  label,
  labelColor,
  statement,
  body,
  delay = 0,
  align = "left",
}: {
  label: string;
  labelColor?: string;
  statement?: string;
  body: string;
  delay?: number;
  align?: "left" | "right" | "center";
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(2rem)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        textAlign: align,
        padding: "var(--space-16) 0",
      }}
    >
      <p
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "var(--text-label)",
          color: labelColor ?? "var(--primary)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: "var(--space-6)",
        }}
      >
        {label}
      </p>
      {statement && (
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            color: "var(--foreground)",
            lineHeight: 0.9,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-7)",
            maxWidth: "900px",
            marginLeft: align === "right" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {statement}
        </h2>
      )}
      <p
        style={{
          color: "var(--muted-foreground-3)",
          fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
          lineHeight: 1.85,
          maxWidth: "640px",
          marginLeft:
            align === "right"
              ? "auto"
              : align === "center"
              ? "auto"
              : undefined,
          marginRight: align === "center" ? "auto" : undefined,
        }}
      >
        {body}
      </p>
    </div>
  );
}

export default function MissionVision() {
  const { ref: goalsRef, inView: goalsInView } = useInView();
  const { mission, vision, purpose, longTermGoals } = ABOUT_MISSION_VISION;

  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6) var(--space-24)",
      }}
    >
      <div style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}>
        {/* VISION oversized, left */}
        <EditorialBlock
          label="Our Vision"
          labelColor="var(--primary)"
          statement={vision.body.split("—")[0].trim()}
          body={vision.body}
          delay={0}
          align="left"
        />

        {/* MISSION oversized, pushed right */}
        <EditorialBlock
          label="Our Mission"
          labelColor="var(--secondary)"
          statement="Command Attention."
          body={mission.body}
          delay={100}
          align="right"
        />

        {/* PURPOSE centered */}
        <EditorialBlock
          label="Company Purpose"
          labelColor="var(--primary)"
          statement="Attention Is the New Currency."
          body={purpose.body}
          delay={0}
          align="center"
        />

        {/* GOALS editorial list */}
        <div
          ref={goalsRef}
          style={{
            paddingTop: "var(--space-16)",
            opacity: goalsInView ? 1 : 0,
            transform: goalsInView ? "translateY(0)" : "translateY(2rem)",
            transition:
              "opacity var(--duration-slowest) var(--ease-default), transform var(--duration-slowest) var(--ease-default)",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-label)",
              color: "var(--secondary)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "var(--space-12)",
            }}
          >
            Goals
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {longTermGoals.map((goal, i) => (
              <div
                key={i}
                className="goal-row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "var(--space-8)",
                  padding: "var(--space-7) 0",
                  borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
                  cursor: "default",
                  transition: "background 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "rgba(var(--foreground-rgb), 0.5)",
                    lineHeight: 1,
                    flexShrink: 0,
                    width: "3rem",
                    transition:
                      "color var(--duration-normal-alt) var(--ease-default)",
                  }}
                  className="goal-num"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                    color: "#d8d8d8",
                    lineHeight: 1.5,
                    transition:
                      "color var(--duration-normal-alt) var(--ease-default)",
                  }}
                  className="goal-text"
                >
                  {goal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .goal-row:hover .goal-num {
          color: rgba(var(--primary-rgb), 0.3);
        }
        .goal-row:hover .goal-text {
          color: var(--muted-foreground-2);
        }
      `}</style>
    </section>
  );
}
