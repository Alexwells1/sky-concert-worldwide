import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import SectionLabel from '../../common/SectionLabel';
import { FEATURED_PROJECTS } from '../../../constants';
import { useInView } from '../../../hooks/useInView';

export default function FeaturedProjects() {
  const { ref, inView } = useInView();
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const featured = FEATURED_PROJECTS[0];

  useEffect(() => {
    if (!modalVideo) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalVideo(null); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [modalVideo]);

  useEffect(() => {
    document.body.style.overflow = modalVideo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalVideo]);

  if (!featured) return null;

  return (
    <>
      <section style={{ background: 'transparent', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <SectionLabel text="Featured Work" />
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'white', lineHeight: 1.2, marginBottom: '3rem',
          }}>
            Sky Moments in Detail
          </h2>

          {/* Large featured video card */}
          <div
            ref={ref}
            onClick={() => featured.videoUrl && setModalVideo(featured.videoUrl)}
            style={{
              position: 'relative',
              height: 'clamp(280px, 45vw, 520px)',
              background: 'rgba(5,12,30,0.55)',
              backdropFilter: 'blur(8px)',
              borderRadius: '2px',
              overflow: 'hidden',
              cursor: featured.videoUrl ? 'pointer' : 'default',
              border: '1px solid rgba(0,229,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
            className="featured-video-card"
          >
            {/* Ambient glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.1) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />

            {/* Tag */}
            <div style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)',
              color: '#00E5FF', fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
              letterSpacing: '0.18em', padding: '0.4rem 0.8rem', textTransform: 'uppercase',
            }}>
              {featured.tag}
            </div>

            {/* Play button */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
              position: 'relative', zIndex: 2,
            }}
              className="featured-play-group"
            >
              <div style={{
                width: '88px', height: '88px', borderRadius: '50%',
                background: 'rgba(0,229,255,0.12)',
                border: '2px solid rgba(0,229,255,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 48px rgba(0,229,255,0.25)',
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
              }}>
                <Play size={32} fill="#00E5FF" color="#00E5FF" style={{ marginLeft: '4px' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: '"Bebas Neue", cursive', fontSize: '0.85rem',
                  letterSpacing: '0.25em', color: '#00E5FF', margin: '0 0 0.5rem',
                }}>
                  WATCH FEATURED SHOWREEL
                </p>
                <p style={{
                  fontFamily: '"Playfair Display", serif', fontSize: '1.35rem',
                  color: 'white', margin: 0, lineHeight: 1.3,
                }}>
                  {featured.title}
                </p>
                {featured.subtitle && (
                  <p style={{
                    fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                    color: '#C9A84C', letterSpacing: '0.15em',
                    textTransform: 'uppercase', margin: '0.5rem 0 0',
                  }}>
                    {featured.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Description strip at bottom */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '1.25rem 1.75rem',
              background: 'linear-gradient(to top, rgba(6,10,20,0.9) 0%, transparent 100%)',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                {featured.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalVideo && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setModalVideo(null); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(2,5,8,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', backdropFilter: 'blur(6px)',
          }}
        >
          <div style={{
            position: 'relative', width: '100%', maxWidth: '900px',
            background: 'rgba(8,15,35,0.92)', border: '1px solid rgba(0,229,255,0.2)',
            boxShadow: '0 0 80px rgba(0,229,255,0.12)', borderRadius: '2px',
          }}>
            <button
              onClick={() => setModalVideo(null)}
              style={{
                position: 'absolute', top: '-3rem', right: 0,
                background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', cursor: 'pointer', padding: '0.4rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: '"Space Mono", monospace', fontSize: '0.6rem',
                letterSpacing: '0.15em',
              }}
            >
              <X size={14} /> CLOSE
            </button>
            <div style={{
              padding: '1rem 1.25rem 0.75rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{
                fontFamily: '"Bebas Neue", cursive', fontSize: '1.1rem',
                letterSpacing: '0.08em', color: 'white', margin: 0,
              }}>
                {featured.title}
              </p>
              {featured.subtitle && (
                <p style={{
                  fontFamily: '"Space Mono", monospace', fontSize: '0.55rem',
                  color: '#C9A84C', letterSpacing: '0.15em',
                  textTransform: 'uppercase', margin: '0.25rem 0 0',
                }}>
                  {featured.subtitle}
                </p>
              )}
            </div>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <video
                src={modalVideo}
                controls
                autoPlay
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  display: 'block', background: '#000',
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .featured-video-card:hover .featured-play-group > div:first-child {
          background: rgba(0,229,255,0.22) !important;
          box-shadow: 0 0 64px rgba(0,229,255,0.45) !important;
          transform: scale(1.06);
        }
      `}</style>
    </>
  );
}
