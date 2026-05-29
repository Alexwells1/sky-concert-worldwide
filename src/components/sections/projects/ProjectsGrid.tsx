import ProjectCard from '../../common/ProjectCard';
import SectionLabel from '../../common/SectionLabel';
import { FEATURED_PROJECTS, PROJECTS_SHOWCASE_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ProjectsGrid() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel text={PROJECTS_SHOWCASE_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {PROJECTS_SHOWCASE_META.headline}
          </h2>
          <p style={{
            color: '#AAAAAA',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontSize: '0.95rem',
          }}>
            {PROJECTS_SHOWCASE_META.subheadline}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        {FEATURED_PROJECTS.length === 0 && (
          <p style={{
            textAlign: 'center', color: '#555', padding: '4rem 0',
            fontFamily: '"Space Mono", monospace', fontSize: '0.7rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            No projects yet.
          </p>
        )}
      </div>
    </section>
  );
}
