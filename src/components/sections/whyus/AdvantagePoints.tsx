import { useInView } from "../../../hooks/useInView";
import { ADVANTAGE_POINTS } from "../../../constants";

const IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
];

const ACCENTS = [
  "var(--primary)",
  "var(--success)",
  "var(--primary)",
  "var(--secondary)",
  "var(--primary)",
];

function AdvantageBlock({
  item,
  index,
}: {
  item: (typeof ADVANTAGE_POINTS)[number];
  index: number;
}) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;
  const accent = ACCENTS[index] ?? "var(--primary)";
  const imgUrl = IMAGES[index];

  return (
    <>
      <style>{`
        .advantage-desktop {
          display: grid;
        }
        .advantage-mobile-card {
          display: none;
        }
        @media (max-width: 768px) {
          .advantage-desktop {
            display: none !important;
          }
          .advantage-mobile-card {
            display: flex !important;
          }
        }
      `}</style>

      {/* Desktop layout unchanged */}
      <div
        ref={ref}
        className="advantage-desktop"
        style={{
          gridTemplateColumns: "1fr 1fr",
          minHeight: "70vh",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
        }}
      >
        {isEven && (
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 55%, var(--color-surface-7) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "8rem",
                color: "rgba(var(--foreground-rgb), 0.4)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {item.number}
            </div>
          </div>
        )}

        <div
          style={{
            background: "var(--color-surface-7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(3rem, 6vw, 6rem) clamp(2.5rem, 5vw, 5.5rem)",
            order: isEven ? 2 : 1,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "2px",
              background: `linear-gradient(to right, ${accent}, transparent)`,
              marginBottom: "var(--space-8)",
            }}
          />
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "var(--text-3xs)",
              letterSpacing: "var(--tracking-wide)",
              color: accent,
              textTransform: "uppercase",
              display: "block",
              marginBottom: "var(--space-5)",
            }}
          >
            {item.number} Advantage
          </span>
          <h3
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "var(--foreground)",
              lineHeight: 0.9,
              letterSpacing: "var(--tracking-normal)",
              marginBottom: "var(--space-7)",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "rgba(var(--color-gray-180-rgb), 0.85)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.9,
              marginBottom: item.bullets.length > 0 ? "2rem" : "1.75rem",
              maxWidth: "480px",
            }}
          >
            {item.intro}
          </p>
          {item.bullets.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-1-5)",
                marginBottom: "var(--space-8)",
              }}
            >
              {item.bullets.map((b) => (
                <div
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "var(--radius-full)",
                      background: accent,
                      flexShrink: 0,
                      marginTop: "7px",
                      opacity: 0.7,
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(150,150,150,0.85)",
                      fontSize: "0.87rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          )}
          {item.closing && (
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                fontSize: "var(--text-md-alt)",
                color: accent,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {item.closing}
            </p>
          )}
        </div>

        {!isEven && (
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px",
              order: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, transparent 55%, var(--color-surface-7) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "8rem",
                color: "rgba(var(--foreground-rgb), 0.4)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {item.number}
            </div>
          </div>
        )}
      </div>

      {/* Mobile card compact, no image */}
      <div
        ref={ref}
        className="advantage-mobile-card"
        style={{
          flexDirection: "column",
          background: "var(--color-surface-7)",
          borderTop: `1px solid rgba(var(--foreground-rgb), 0.4)`,
          padding: "var(--space-10) var(--space-6)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
        }}
      >
        {/* Number + accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-4)",
            marginBottom: "var(--space-5)",
          }}
        >
          <span
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "var(--text-3xl)",
              color: accent,
              lineHeight: 1,
              opacity: 0.4,
            }}
          >
            {item.number}
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(to right, ${accent}44, transparent)`,
            }}
          />
        </div>

        <h3
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: "var(--text-2xl)",
            color: "var(--foreground)",
            lineHeight: 0.95,
            letterSpacing: "var(--tracking-normal)",
            marginBottom: "var(--space-4)",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "rgba(175,175,175,0.85)",
            fontSize: "var(--text-md)",
            lineHeight: 1.75,
            marginBottom: item.bullets.length > 0 ? "1.25rem" : 0,
          }}
        >
          {item.intro}
        </p>

        {item.bullets.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              marginBottom: "var(--space-5)",
            }}
          >
            {item.bullets.map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.7rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "var(--radius-full)",
                    background: accent,
                    flexShrink: 0,
                    marginTop: "7px",
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    color: "rgba(140,140,140,0.85)",
                    fontSize: "0.84rem",
                    lineHeight: 1.65,
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}

        {item.closing && (
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontSize: "var(--text-body-lg)",
              color: accent,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {item.closing}
          </p>
        )}
      </div>
    </>
  );
}

export default function AdvantagePoints() {
  return (
    <section style={{ background: "var(--color-surface-3)" }}>
      <div
        style={{
          borderTop: "1px solid rgba(var(--foreground-rgb), 0.07)",
          borderBottom: "1px solid rgba(var(--foreground-rgb), 0.07)",
        }}
      />
      {ADVANTAGE_POINTS.map((item, i) => (
        <AdvantageBlock key={item.number} item={item} index={i} />
      ))}
    </section>
  );
}
