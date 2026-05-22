import { Link } from 'react-router-dom';
import { Share2, Film, Video, Radio } from 'lucide-react';
import { LOGO_TEXT, FOOTER_TAGLINE, NAV_LINKS, LEGAL_TEXT } from '../../constants';

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Share2 size={18} />,
  Linkedin:  <Radio size={18} />,
  Youtube:   <Film size={18} />,
  Video:     <Video size={18} />,
};

const SOCIAL_ITEMS = [
  { platform: 'Instagram', url: '#', iconName: 'Instagram' },
  { platform: 'LinkedIn',  url: '#', iconName: 'Linkedin'  },
  { platform: 'YouTube',   url: '#', iconName: 'Youtube'   },
  { platform: 'Vimeo',     url: '#', iconName: 'Video'     },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(1,2,10,0.75)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(0,229,255,0.08)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "1.5rem",
                  letterSpacing: "0.08em",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                {LOGO_TEXT.prefix}
                <span style={{ color: "#00E5FF" }}>{LOGO_TEXT.highlight}</span>
                {LOGO_TEXT.suffix}
              </div>
            </Link>
            <p
              style={{
                color: "#555",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#00E5FF",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Navigation
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.875rem",
                    color: "#666",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#00E5FF",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Contact
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              skyconcertworldwide@gmail.com
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "0.6rem",
                display: "inline-flex",
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              color: "#333",
              letterSpacing: "0.1em",
            }}
          >
            {LEGAL_TEXT}
          </p>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {SOCIAL_ITEMS.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                aria-label={s.platform}
                style={{
                  color: "#444",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                {socialIcons[s.iconName]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
