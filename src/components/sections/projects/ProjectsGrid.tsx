import { useState } from 'react';
import ProjectCard from '../../common/ProjectCard';
import { FEATURED_PROJECTS, PROJECT_FILTER_CATEGORIES } from '../../../constants';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => {
        if (activeFilter === 'light-show') return p.tag === 'Light Show';
        if (activeFilter === 'branding')   return p.tag === 'Aerial Branding';
        if (activeFilter === '3d')         return p.tag === '3D Storytelling';
        return p.category === activeFilter;
      });

  return (
    <section style={{ background: '#060A14', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Filter bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
          marginBottom: '3rem', overflowX: 'auto', paddingBottom: '0.5rem',
        }}>
          {PROJECT_FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '0.6rem 1.1rem', cursor: 'pointer',
                border: activeFilter === cat.id
                  ? '1px solid #00E5FF'
                  : '1px solid rgba(255,255,255,0.12)',
                background: activeFilter === cat.id
                  ? '#00E5FF'
                  : 'transparent',
                color: activeFilter === cat.id ? '#060A14' : '#888',
                borderRadius: '2px',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{
            textAlign: 'center', color: '#555', padding: '4rem 0',
            fontFamily: '"Space Mono", monospace', fontSize: '0.7rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
