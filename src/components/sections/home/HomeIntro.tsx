import SectionLabel from "../../common/SectionLabel";
import { HOME_INTRO } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function HomeIntro() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1.75rem)",
        }}
      >
        <SectionLabel text={HOME_INTRO.sectionLabel} />
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "var(--foreground)",
            lineHeight: 1.2,
            marginBottom: "var(--space-8)",
          }}
        >
          {HOME_INTRO.headline}
        </h2>
        {HOME_INTRO.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              color:
                i === 0
                  ? "var(--muted-foreground-2)"
                  : "var(--muted-foreground)",
              fontSize: "var(--text-base)",
              lineHeight: 1.8,
              marginBottom: "var(--space-5)",
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
