import SectionLabel from '../../common/SectionLabel';
import ProjectCard from '../../common/ProjectCard';
import { FEATURED_PROJECTS } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function FeaturedProjects() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#0A0F1E', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <SectionLabel text="Featured Work" />
        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          color: 'white', lineHeight: 1.2, marginBottom: '3rem',
        }}>
          Sky Moments in Detail
        </h2>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
            opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
