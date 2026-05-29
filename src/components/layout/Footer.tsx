import { Link } from "react-router-dom";
import {
  LOGO_TEXT,
  FOOTER_TAGLINE,
  NAV_LINKS,
  LEGAL_TEXT,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from "../../constants";

const InstagramIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const socialIconMap: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  Linkedin: <LinkedInIcon />,
  Youtube: <YouTubeIcon />,
};

const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, "")}`;

export default function Footer() {
  return (
    <footer
      style={{
        background: "#01020A",
        borderTop: "1px solid rgba(0,229,255,0.12)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ghost wordmark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: '"Bebas Neue", cursive',
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "rgba(0,229,255,0.03)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        SKY CONCERT
      </div>

      {/* Cyan accent line */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, #00E5FF 40%, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "82rem",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3.5rem",
            padding: "4.5rem 0",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="/logo.png"
                alt={`${LOGO_TEXT.prefix}${LOGO_TEXT.highlight}${LOGO_TEXT.suffix}`}
                style={{ height: "64px", width: "auto", objectFit: "contain" }}
              />
              <div
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "1.1rem",
                  letterSpacing: "0.12em",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                {LOGO_TEXT.prefix}
                <span style={{ color: "#00E5FF" }}>{LOGO_TEXT.highlight}</span>
                {LOGO_TEXT.suffix}
              </div>
            </Link>
            <p
              style={{
                color: "#4a4a5a",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: "260px",
              }}
            >
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Navigation + Social */}
          <div>
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.68rem",
                letterSpacing: "0.28em",
                color: "#00E5FF",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              Navigate
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "1.05rem",
                    color: "#555",
                    textDecoration: "none",
                    transition: "color 0.2s, letter-spacing 0.2s",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "white";
                    (e.currentTarget as HTMLAnchorElement).style.letterSpacing =
                      "0.04em";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                    (e.currentTarget as HTMLAnchorElement).style.letterSpacing =
                      "0.01em";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social links directly below nav items */}
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.68rem",
                  letterSpacing: "0.28em",
                  color: "#00E5FF",
                  textTransform: "uppercase",
                  marginBottom: "1.1rem",
                }}
              >
                Follow Us
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "center",
                }}
              >
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    style={{
                      color: "#3a3a4a",
                      transition: "color 0.2s, transform 0.2s",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#00E5FF";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#3a3a4a";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    {socialIconMap[s.iconName]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.68rem",
                letterSpacing: "0.28em",
                color: "#00E5FF",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              Contact
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontFamily: '"DM Sans", sans-serif',
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#00E5FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#555")
                }
              >
                {CONTACT_INFO.email}
              </a>

              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    color: "#888",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.55rem 1rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "white";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#888";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  📞 Call
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    color: "#888",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.55rem 1rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#25D366";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#25D366";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#888";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.68rem",
                  color: "#333",
                  letterSpacing: "0.08em",
                  marginTop: "0.25rem",
                }}
              >
                {CONTACT_INFO.responseTime}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2.25rem 0",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.68rem",
              color: "#2a2a35",
              letterSpacing: "0.1em",
            }}
          >
            {LEGAL_TEXT}
          </p>

          {/* Social icons also in the bottom bar */}
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                style={{
                  color: "#3a3a4a",
                  transition: "color 0.2s, transform 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#00E5FF";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#3a3a4a";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                {socialIconMap[s.iconName]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
