import { useInView } from "../../../hooks/useInView";
import ife from "../../../assets/images/ife.avif";
import jayjay from "../../../assets/images/JayJay.jpg.avif";

const TEAM_MEMBERS: {
  name: string;
  role: string;
  imageUrl: string;
  note?: string;
}[] = [
  {
    name: "Oyelude Olujimi Julius",
    role: "CEO",
    imageUrl: jayjay,
  },
  {
    name: "Ifeoluwa Emmanuel Omowunmi",
    role: "Executive Administrative Lead",
    imageUrl: ife,
  },
];

function MemberCard({
  member,
  index,
  inView,
}: {
  member: (typeof TEAM_MEMBERS)[0];
  index: number;
  inView: boolean;
}) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="member-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(2rem)",
        transition: `opacity 0.8s ease ${index * 120}ms, transform 0.8s ease ${
          index * 120
        }ms`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo frame */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #0d1828 0%, var(--color-surface-14) 100%)",
          marginBottom: "var(--space-6)",
        }}
      >
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              filter: "grayscale(20%)",
              transition: "transform 0.6s ease, filter 0.4s ease",
            }}
            className="member-photo"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-2)",
            }}
          >
            <span
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "rgba(var(--foreground-rgb), 0.06)",
                letterSpacing: "0.1em",
              }}
            >
              {initials}
            </span>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.48rem",
                color: "rgba(var(--foreground-rgb), 0.12)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Photo Coming Soon
            </span>
          </div>
        )}

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(var(--color-surface-3-rgb), 0.7) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            width: "24px",
            height: "24px",
            borderTop: "1px solid rgba(var(--primary-rgb), 0.3)",
            borderLeft: "1px solid rgba(var(--primary-rgb), 0.3)",
            pointerEvents: "none",
            transition:
              "border-color var(--duration-normal-alt) var(--ease-default)",
          }}
          className="member-corner"
        />
      </div>

      {/* Info */}
      <p
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "0.62rem",
          color: "var(--secondary)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          marginBottom: "var(--space-2)",
        }}
      >
        {member.role}
      </p>
      <h3
        style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
          color: "var(--foreground)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          marginBottom: "var(--space-3)",
        }}
      >
        {member.name}
      </h3>
    </div>
  );
}

export default function LeadershipPhilosophy() {
  const { ref, inView } = useInView();

  return (
    <section
      style={{
        background: "transparent",
        padding: "0 var(--space-6) var(--space-32)",
      }}
    >
      <div style={{ maxWidth: "var(--container-2xl)", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            borderTop: "1px solid rgba(var(--foreground-rgb), 0.06)",
            paddingTop: "var(--space-20)",
            marginBottom: "var(--space-16)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(2rem)",
            transition:
              "opacity var(--duration-crawl) var(--ease-default), transform var(--duration-crawl) var(--ease-default)",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.58rem",
              color: "var(--primary)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "var(--space-8)",
            }}
          >
            The People Behind It
          </p>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              color: "var(--foreground)",
              lineHeight: 0.9,
              letterSpacing: "var(--tracking-normal)",
              maxWidth: "820px",
              marginBottom: 0,
            }}
          >
            Built by Engineers, Creatives, and Storytellers.
          </h2>
        </div>

        {/* Team grid 4 cols desktop → 2 cols tablet/mobile */}
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-6)",
          }}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <MemberCard key={i} member={member} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        .member-card:hover .member-photo {
          transform: scale(1.04);
          filter: grayscale(0%);
        }
        .member-card:hover .member-corner {
          border-color: rgba(var(--primary-rgb), 0.7);
        }
        .member-card:hover .member-note {
          color: var(--muted-foreground-4);
        }
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
