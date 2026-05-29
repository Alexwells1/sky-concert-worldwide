import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { LOGO_TEXT, NAV_CTA } from "../../constants";

// Primary nav: 4 top-level items
const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
];

// Grouped under "More" dropdown
const MORE_NAV = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// All links for mobile (flat list)
const ALL_NAV = [...PRIMARY_NAV, ...MORE_NAV];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isMoreActive = MORE_NAV.some((l) => pathname === l.href);

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
    height: "80px",
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
        {/* ── Logo: image only ── */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/drone_logo.avif"
            alt={`${LOGO_TEXT.prefix}${LOGO_TEXT.highlight}${LOGO_TEXT.suffix}`}
            style={{ height: "64px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="hidden-mobile"
        >
          {PRIMARY_NAV.map((link) => (
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

          {/* More dropdown */}
          <div ref={moreRef} style={{ position: "relative" }}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: isMoreActive ? "#00E5FF" : "rgba(255,255,255,0.75)",
                borderBottom: isMoreActive
                  ? "1px solid #00E5FF"
                  : "1px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
            >
              More
              <ChevronDown
                size={11}
                style={{
                  transition: "transform 0.2s",
                  transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {moreOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 1rem)",
                  right: 0,
                  background: "rgba(4,8,20,0.97)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  borderRadius: "4px",
                  padding: "0.75rem 0",
                  minWidth: "160px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {MORE_NAV.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMoreOpen(false)}
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color:
                        pathname === link.href
                          ? "#00E5FF"
                          : "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      padding: "0.6rem 1.25rem",
                      transition: "color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.background = "rgba(0,229,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        pathname === link.href
                          ? "#00E5FF"
                          : "rgba(255,255,255,0.65)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to={NAV_CTA.href}
            className="btn-primary"
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.6rem" }}
          >
            {NAV_CTA.label} <ArrowRight size={12} />
          </Link>
        </div>

        {/* ── Hamburger ── */}
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

      {/* ── Mobile Overlay ── */}
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
            overflowY: "auto",
          }}
          aria-label="Close menu"
        >
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

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "5rem 2rem 4rem",
              gap: 0,
            }}
          >
            {ALL_NAV.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "clamp(2rem, 8vw, 2.8rem)",
                  letterSpacing: "0.1em",
                  color: pathname === link.href ? "#00E5FF" : "white",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  width: "100%",
                  textAlign: "center",
                  borderBottom:
                    i < ALL_NAV.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to={NAV_CTA.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ marginTop: "2rem", fontSize: "0.7rem" }}
            >
              {NAV_CTA.label} <ArrowRight size={14} />
            </Link>
          </div>

          <span
            style={{
              position: "absolute",
              bottom: "2rem",
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.2)",
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
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </>
  );
}
