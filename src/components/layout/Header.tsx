import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { LOGO_TEXT, NAV_LINKS, NAV_CTA } from "../../constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    height: "72px",
    transition:
      "background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
    background: scrolled ? "rgba(4,8,16,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(0,229,255,0.08)"
      : "1px solid transparent",
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "1.3rem",
              letterSpacing: "0.08em",
              color: "white",
            }}
          >
            {LOGO_TEXT.prefix}
            <span style={{ color: "#00E5FF" }}>{LOGO_TEXT.highlight}</span>
            {LOGO_TEXT.suffix}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:
                  pathname === link.href ? "#00E5FF" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s",
                borderBottom:
                  pathname === link.href
                    ? "1px solid #00E5FF"
                    : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={NAV_CTA.href}
            className="btn-primary"
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.6rem" }}
          >
            {NAV_CTA.label} <ArrowRight size={12} />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Overlay — tap the dark backdrop anywhere to close */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(4,8,16,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close menu"
        >
          {/* Close button — still there for muscle memory */}
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/*
            Inner card: stopPropagation so tapping a link or the CTA
            does NOT bubble to the backdrop and close the menu by accident.
            The generous padding above and below the links means the user
            has a big tap-to-close zone without stretching to the top bar.
          */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2.5rem",
              padding: "3rem 4rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "3rem",
                  letterSpacing: "0.1em",
                  color: pathname === link.href ? "#00E5FF" : "white",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to={NAV_CTA.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ marginTop: "1rem" }}
            >
              {NAV_CTA.label} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Subtle hint at the bottom so it's discoverable */}
          <span
            style={{
              position: "absolute",
              bottom: "2rem",
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              pointerEvents: "none",
            }}
          >
            Tap anywhere to close
          </span>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
