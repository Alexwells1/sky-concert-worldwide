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
    note: "Visionary behind Africa's leading aerial entertainment company.",
  },
  {
    name: "Ifeoluwa Emmanuel Omowunmi",
    role: "Executive Administrative Lead",
    imageUrl: ife,
    note: "Translating brand stories into unforgettable sky narratives.",
  }
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
          background: "linear-gradient(160deg, #0d1828 0%, #060c18 100%)",
          marginBottom: "1.5rem",
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
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "rgba(255,255,255,0.06)",
                letterSpacing: "0.1em",
              }}
            >
              {initials}
            </span>
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.48rem",
                color: "rgba(255,255,255,0.12)",
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
              "linear-gradient(to top, rgba(6,10,20,0.7) 0%, transparent 100%)",
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
            borderTop: "1px solid rgba(0,229,255,0.3)",
            borderLeft: "1px solid rgba(0,229,255,0.3)",
            pointerEvents: "none",
            transition: "border-color 0.3s ease",
          }}
          className="member-corner"
        />
      </div>

      {/* Info */}
      <p
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "0.52rem",
          color: "#C9A84C",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {member.role}
      </p>
      <h3
        style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
          color: "white",
          letterSpacing: "0.04em",
          lineHeight: 1,
          marginBottom: "0.75rem",
        }}
      >
        {member.name}
      </h3>
      {member.note && (
        <p
          className="member-note"
          style={{
            color: "#555",
            fontSize: "0.8rem",
            lineHeight: 1.75,
            margin: 0,
            transition: "color 0.3s ease",
          }}
        >
          {member.note}
        </p>
      )}
    </div>
  );
}

export default function LeadershipPhilosophy() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "transparent", padding: "0 1.5rem 8rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "5rem",
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(2rem)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.58rem",
              color: "#00E5FF",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            The People Behind It
          </p>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              color: "white",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              maxWidth: "820px",
              marginBottom: 0,
            }}
          >
            Built by Engineers, Creatives, and Storytellers.
          </h2>
        </div>

        {/* Team grid — 4 cols desktop → 2 cols tablet/mobile */}
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
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
          border-color: rgba(0, 229, 255, 0.7);
        }
        .member-card:hover .member-note {
          color: #888;
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
