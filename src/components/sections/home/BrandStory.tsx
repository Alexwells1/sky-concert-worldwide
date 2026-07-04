import { useInView } from "../../../hooks/useInView";

const PILLARS = [
  {
    word: "STORYTELLERS.",
    sub: "Every show is a narrative written in light emotion, scale, and wonder choreographed to make audiences hold their breath.",
  },
  {
    word: "ENGINEERS.",
    sub: "Precision-synchronized fleets of 500+ drones executing in perfect formation, underpinned by military-grade reliability.",
  },
  {
    word: "DREAMBUILDERS.",
    sub: "We transform impossible ideas into sky-defining moments that brands, governments, and people carry with them forever.",
  },
];

export default function BrandStory() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @keyframes brandReveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .brand-story-section {
          padding: 5rem 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .brand-story-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,60,120,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse 60% 80% at 80% 50%, rgba(60,0,120,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .brand-pillar {
          padding: 5rem 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .brand-pillar:last-child {
          border-bottom: 1px solid rgba(var(--foreground-rgb), 0.02);
        }
        .brand-pillar-word {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: rgba(var(--foreground-rgb), 0.92);
          margin: 0;
        }
        .brand-pillar-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.8;
          color: rgba(var(--foreground-rgb), 0.65);
          margin: 0;
          max-width: 400px;
        }
        .brand-pillar:nth-child(even) .brand-pillar-word {
          order: 2;
          text-align: right;
        }
        .brand-pillar:nth-child(even) .brand-pillar-sub {
          order: 1;
          margin-left: auto;
        }
        @media (max-width: 700px) {
          .brand-pillar {
            grid-template-columns: 1fr;
            padding: 3.5rem 0;
            gap: 1.25rem;
          }
          .brand-pillar:nth-child(even) .brand-pillar-word {
            order: 0;
            text-align: left;
          }
          .brand-pillar:nth-child(even) .brand-pillar-sub {
            order: 1;
            margin-left: 0;
          }
        }
      `}</style>

      <section className="brand-story-section">
        <div className="brand-story-bg" />
        <div
          ref={ref}
          style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}
        >
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.word}
              className="brand-pillar"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(2rem)",
                transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${
                  0.15 + i * 0.18
                }s, transform 1s cubic-bezier(0.16,1,0.3,1) ${
                  0.15 + i * 0.18
                }s`,
              }}
            >
              <h2 className="brand-pillar-word">{pillar.word}</h2>
              <p className="brand-pillar-sub">{pillar.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
