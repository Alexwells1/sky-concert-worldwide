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
        padding: "4rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "0.58rem",
          color: labelColor ?? "#00E5FF",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        {label}
      </p>
      {statement && (
        <h2
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            color: "white",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            marginBottom: "1.75rem",
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
          color: "#999",
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
    <section style={{ background: "transparent", padding: "2rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* VISION — oversized, left */}
        <EditorialBlock
          label="Our Vision"
          labelColor="#00E5FF"
          statement={vision.body.split("—")[0].trim()}
          body={vision.body}
          delay={0}
          align="left"
        />

        {/* MISSION — oversized, pushed right */}
        <EditorialBlock
          label="Our Mission"
          labelColor="#C9A84C"
          statement="Command Attention."
          body={mission.body}
          delay={100}
          align="right"
        />

        {/* PURPOSE — centered */}
        <EditorialBlock
          label="Company Purpose"
          labelColor="#00E5FF"
          statement="Attention Is the New Currency."
          body={purpose.body}
          delay={0}
          align="center"
        />

        {/* GOALS — editorial list */}
        <div
          ref={goalsRef}
          style={{
            paddingTop: "4rem",
            opacity: goalsInView ? 1 : 0,
            transform: goalsInView ? "translateY(0)" : "translateY(2rem)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.58rem",
              color: "#C9A84C",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "3rem",
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
                  gap: "2rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  cursor: "default",
                  transition: "background 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    flexShrink: 0,
                    width: "3rem",
                    transition: "color 0.3s ease",
                  }}
                  className="goal-num"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                    color: "#888",
                    lineHeight: 1.5,
                    transition: "color 0.3s ease",
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
          color: rgba(0, 229, 255, 0.3);
        }
        .goal-row:hover .goal-text {
          color: #cccccc;
        }
      `}</style>
    </section>
  );
}
