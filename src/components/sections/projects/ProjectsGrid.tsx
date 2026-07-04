import ProjectCard from "../../common/ProjectCard";
import SectionLabel from "../../common/SectionLabel";
import { FEATURED_PROJECTS, PROJECTS_SHOWCASE_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function ProjectsGrid() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{
        background: "transparent",
        padding: "var(--space-8) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "var(--space-14)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition:
              "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          }}
        >
          <SectionLabel text={PROJECTS_SHOWCASE_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--foreground)",
              lineHeight: 1.2,
              marginBottom: "var(--space-4)",
            }}
          >
            {PROJECTS_SHOWCASE_META.headline}
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.75,
              fontSize: "var(--text-body-lg)",
            }}
          >
            {PROJECTS_SHOWCASE_META.subheadline}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "var(--space-5)",
          }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        {FEATURED_PROJECTS.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              padding: "var(--space-16) 0",
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-button)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            No projects yet.
          </p>
        )}
      </div>
    </section>
  );
}
