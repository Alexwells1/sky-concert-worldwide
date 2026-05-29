import { useInView } from "../../../hooks/useInView";
import { ADVANTAGE_POINTS } from "../../../constants";

const IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
];

const ACCENTS = ["#00E5FF", "#4ade80", "#00E5FF", "#C9A84C", "#00E5FF"];

function AdvantageBlock({
  item,
  index,
}: {
  item: (typeof ADVANTAGE_POINTS)[number];
  index: number;
}) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;
  const accent = ACCENTS[index] ?? "#00E5FF";
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

      {/* Desktop layout — unchanged */}
      <div
        ref={ref}
        className="advantage-desktop"
        style={{
          gridTemplateColumns: "1fr 1fr",
          minHeight: "70vh",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
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
                  "linear-gradient(to right, transparent 55%, #040D20 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "8rem",
                color: "rgba(255,255,255,0.04)",
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
            background: "#040D20",
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
              marginBottom: "2rem",
            }}
          />
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: accent,
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            {item.number} — Advantage
          </span>
          <h3
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(2rem, 4vw, 4rem)",
              color: "white",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              marginBottom: "1.75rem",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "rgba(180,180,180,0.85)",
              fontSize: "0.95rem",
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
                gap: "0.6rem",
                marginBottom: "2rem",
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
                      borderRadius: "50%",
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
                fontSize: "1.05rem",
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
                  "linear-gradient(to left, transparent 55%, #040D20 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "8rem",
                color: "rgba(255,255,255,0.04)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {item.number}
            </div>
          </div>
        )}
      </div>

      {/* Mobile card — compact, no image */}
      <div
        ref={ref}
        className="advantage-mobile-card"
        style={{
          flexDirection: "column",
          background: "#040D20",
          borderTop: `1px solid rgba(255,255,255,0.05)`,
          padding: "2.5rem 1.5rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Number + accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.25rem",
          }}
        >
          <span
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "2.5rem",
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
            fontSize: "2rem",
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: "1rem",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "rgba(175,175,175,0.85)",
            fontSize: "0.9rem",
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
              gap: "0.5rem",
              marginBottom: "1.25rem",
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
                    borderRadius: "50%",
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
              fontSize: "0.95rem",
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
    <section style={{ background: "#060A14" }}>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      />
      {ADVANTAGE_POINTS.map((item, i) => (
        <AdvantageBlock key={item.number} item={item} index={i} />
      ))}
    </section>
  );
}
