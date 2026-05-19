import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import ProjectCard from '../../common/ProjectCard';
import { HOME_PROJECTS, HOME_PROJECTS_META } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function ProjectsPreview() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div ref={ref} style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(1.75rem)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <SectionLabel text={HOME_PROJECTS_META.sectionLabel} />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {HOME_PROJECTS_META.headline}
          </h2>
          <p style={{ color: '#AAAAAA', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
            {HOME_PROJECTS_META.subheadline}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {HOME_PROJECTS.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/projects" className="btn-primary">
            {HOME_PROJECTS_META.cta} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
