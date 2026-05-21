import ProjectCard from '../../common/ProjectCard';
import SectionLabel from '../../common/SectionLabel';
import { FEATURED_PROJECTS } from '../../../constants';

export default function ProjectsGrid() {
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionLabel text="Watch Our Work" />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Sky-Defining Moments
          </h2>
          <p style={{
            color: '#AAAAAA',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontSize: '0.95rem',
          }}>
            Click any video below to watch the full performance.
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
