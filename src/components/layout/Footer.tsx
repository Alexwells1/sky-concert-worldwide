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
        background: "var(--background)",
        borderTop: "1px solid rgba(var(--primary-rgb), 0.12)",
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
          fontWeight: "var(--font-black)",
          letterSpacing: "var(--tracking-tight)",
          color: "rgba(var(--primary-rgb), 0.03)",
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
            "linear-gradient(90deg, transparent, var(--primary) 40%, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "82rem",
          margin: "0 auto",
          padding: "0 var(--space-8)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-14)",
            padding: "4.5rem 0",
            borderBottom: "1px solid rgba(var(--foreground-rgb), 0.7)",
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
                gap: "var(--space-2)",
                marginBottom: "var(--space-6)",
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
                  fontSize: "var(--text-md)",
                  letterSpacing: "0.12em",
                  color: "var(--foreground)",
                  whiteSpace: "nowrap",
                }}
              >
                {LOGO_TEXT.prefix}
                <span style={{ color: "var(--primary)" }}>
                  {LOGO_TEXT.highlight}
                </span>
                {LOGO_TEXT.suffix}
              </div>
            </Link>
            <p
              style={{
                color: "rgba(var(--foreground-rgb), 0.7)",
                fontSize: "var(--text-body-lg)",
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
                fontSize: "var(--text-label)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--primary)",
                textTransform: "uppercase",
                marginBottom: "var(--space-7)",
              }}
            >
              Navigate
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "var(--text-md-alt)",
                    color: "rgba(var(--foreground-rgb), 0.75)",
                    textDecoration: "none",
                    transition: "color 0.2s, letter-spacing 0.2s",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--foreground)";
                    (e.currentTarget as HTMLAnchorElement).style.letterSpacing =
                      "0.04em";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(var(--foreground-rgb), 0.75)";
                    (e.currentTarget as HTMLAnchorElement).style.letterSpacing =
                      "0.01em";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social links directly below nav items */}
            <div style={{ marginTop: "var(--space-8)" }}>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-label)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  marginBottom: "1.1rem",
                }}
              >
                Follow Us
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-5)",
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
                      color: "rgba(var(--foreground-rgb), 0.55)",
                      transition:
                        "color var(--duration-fast-alt), transform var(--duration-fast-alt)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--primary)";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(var(--foreground-rgb), 0.55)";
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
                fontSize: "var(--text-label)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--primary)",
                textTransform: "uppercase",
                marginBottom: "var(--space-7)",
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
                  color: "rgba(var(--foreground-rgb), 0.8)",
                  fontSize: "var(--text-base)",
                  textDecoration: "none",
                  fontFamily: '"DM Sans", sans-serif',
                  transition: "color var(--duration-fast-alt)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(var(--foreground-rgb), 0.8)")
                }
              >
                {CONTACT_INFO.email}
              </a>

              <div
                style={{
                  display: "flex",
                  gap: "var(--space-3)",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    color: "rgba(var(--foreground-rgb), 0.7)",
                    border: "1px solid rgba(var(--foreground-rgb), 0.6)",
                    padding: "0.55rem var(--space-4)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition:
                      "color var(--duration-fast-alt), border-color var(--duration-fast-alt)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--foreground)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(var(--foreground-rgb), 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(var(--foreground-rgb), 0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(var(--foreground-rgb), 0.6)";
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
                    color: "rgba(var(--foreground-rgb), 0.7)",
                    border: "1px solid rgba(var(--foreground-rgb), 0.6)",
                    padding: "0.55rem var(--space-4)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition:
                      "color var(--duration-fast-alt), border-color var(--duration-fast-alt)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--whatsapp)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--whatsapp)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(var(--foreground-rgb), 0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(var(--foreground-rgb), 0.6)";
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>

              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.68rem",
                  color: "rgba(var(--foreground-rgb), 0.7)",
                  letterSpacing: "0.08em",
                  marginTop: "var(--space-1)",
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
            gap: "var(--space-6)",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.68rem",
              color: "rgba(var(--foreground-rgb), 0.45)",
              letterSpacing: "0.1em",
            }}
          >
            {LEGAL_TEXT}
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-6)",
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
                  color: "rgba(var(--foreground-rgb), 0.45)",
                  transition:
                    "color var(--duration-fast-alt), transform var(--duration-fast-alt)",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--primary)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(var(--foreground-rgb), 0.45)";
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
