import SectionLabel from "../../common/SectionLabel";
import { PROJECTS_HIGHLIGHT } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

// ─── Individual editorial feature row ─────────────────────────────────────────
const FEATURE_ICONS = ["01", "02", "03", "04", "05"];

function FeatureRow({
  text,
  index,
  parentInView,
}: {
  text: string;
  index: number;
  parentInView: boolean;
}) {
  // Pull a short "title" from the first 4-5 words, rest is body
  const words = text.split(" ");
  const titleWords = words.slice(0, 4).join(" ");
  const bodyWords = words.slice(4).join(" ");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3rem 1fr 2fr",
        alignItems: "start",
        gap: "var(--space-8)",
        padding: "var(--space-10) 0",
        borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
        opacity: parentInView ? 1 : 0,
        transform: parentInView ? "translateY(0)" : "translateY(1.25rem)",
        transition: `opacity 0.7s ease ${
          index * 0.1 + 0.15
        }s, transform 0.7s ease ${index * 0.1 + 0.15}s`,
      }}
      className="feature-row"
    >
      {/* Index number */}
      <span
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "var(--text-xs)",
          letterSpacing: "0.15em",
          color: "rgba(var(--primary-rgb), 0.35)",
          paddingTop: "0.15rem",
        }}
      >
        {FEATURE_ICONS[index]}
      </span>

      {/* Feature title */}
      <p
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          color: "var(--foreground)",
          lineHeight: 1.35,
          margin: 0,
          paddingRight: "var(--space-4)",
        }}
      >
        {titleWords}
      </p>

      {/* Feature description */}
      <p
        style={{
          color: "rgba(var(--foreground-rgb), 0.45)",
          fontSize: "var(--text-md)",
          lineHeight: 1.85,
          margin: 0,
        }}
      >
        {bodyWords || text}
      </p>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
export default function ProjectsHighlight() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-4) var(--space-6)",
        position: "relative",
      }}
    >
      {/* Subtle top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "1.5rem",
          right: "1.5rem",
          height: "1px",
          background:
            "linear-gradient(to right, transparent 0%, rgba(var(--primary-rgb), 0.2) 30%, rgba(var(--primary-rgb), 0.2) 70%, transparent 100%)",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}
      >
        {/* Section header two-column editorial layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "var(--space-12)",
            alignItems: "end",
            marginBottom: "var(--space-16)",
          }}
          className="highlight-header-grid"
        >
          <div>
            <SectionLabel text={PROJECTS_HIGHLIGHT.sectionLabel} />
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--foreground)",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {PROJECTS_HIGHLIGHT.headline}
            </h2>
          </div>
          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.35)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.9,
              margin: 0,
              maxWidth: "480px",
            }}
          >
            Every production we deliver carries our full creative, technical,
            and logistical commitment. These are the principles that separate a
            Sky Concert Worldwide show from anything else in the sky.
          </p>
        </div>

        {/* Editorial feature rows */}
        <div>
          {/* Top border of rows */}
          <div
            style={{
              height: "1px",
              background: "rgba(var(--foreground-rgb), 0.06)",
              marginBottom: 0,
            }}
          />
          {PROJECTS_HIGHLIGHT.bullets.map((bullet, i) => (
            <FeatureRow
              key={bullet}
              text={bullet}
              index={i}
              parentInView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .highlight-header-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .feature-row {
            grid-template-columns: 2.5rem 1fr !important;
            grid-template-rows: auto auto !important;
          }
          .feature-row > p:last-child {
            grid-column: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
