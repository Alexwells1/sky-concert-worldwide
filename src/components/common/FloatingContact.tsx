import { useState } from "react";
import { Mail } from "lucide-react";
import { CONTACT_INFO } from "../../constants";

// WhatsApp SVG icon (official brand shape)
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingContact() {
  const [hovered, setHovered] = useState<"whatsapp" | "email" | null>(null);

  const whatsappNumber = CONTACT_INFO.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Sky%20Concert%20Worldwide%2C%20I%27d%20like%20to%20enquire%20about%20a%20drone%20show.`;
  const emailUrl = `mailto:${CONTACT_INFO.email}`;

  const btnBase: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "var(--radius-full)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    position: "relative",
    flexShrink: 0,
  };

  const labelBase: React.CSSProperties = {
    position: "absolute",
    right: "calc(100% + 12px)",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(10,10,10,0.9)",
    border: "1px solid rgba(var(--foreground-rgb), 0.7)",
    color: "var(--foreground)",
    fontFamily: '"Space Mono", monospace',
    fontSize: "var(--text-2xs)",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    padding: "var(--space-0-5) var(--space-3)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    backdropFilter: "blur(8px)",
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "1.5rem",
          bottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered("whatsapp")}
          onMouseLeave={() => setHovered(null)}
          style={{ textDecoration: "none", position: "relative" }}
        >
          <div
            style={{
              ...btnBase,
              background: "var(--whatsapp)",
              boxShadow:
                hovered === "whatsapp"
                  ? "0 0 0 4px rgba(var(--whatsapp-rgb), 0.2), 0 8px 24px rgba(var(--whatsapp-rgb), 0.35)"
                  : "0 4px 16px rgba(var(--overlay-rgb), 0.4)",
              transform: hovered === "whatsapp" ? "scale(1.1)" : "scale(1)",
            }}
          >
            <WhatsAppIcon size={22} />
          </div>
          {/* Tooltip */}
          <span
            style={{
              ...labelBase,
              opacity: hovered === "whatsapp" ? 1 : 0,
              transition: "opacity var(--duration-fast) var(--ease-default)",
            }}
          >
            WhatsApp
          </span>
        </a>

        {/* Email */}
        <a
          href={emailUrl}
          aria-label="Send us an email"
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
          style={{ textDecoration: "none", position: "relative" }}
        >
          <div
            style={{
              ...btnBase,
              background: "rgba(20,28,55,0.95)",
              border: "1px solid rgba(var(--primary-rgb), 0.35)",
              color: "var(--primary)",
              boxShadow:
                hovered === "email"
                  ? "0 0 0 4px rgba(var(--primary-rgb), 0.1), 0 8px 24px rgba(var(--primary-rgb), 0.2)"
                  : "0 4px 16px rgba(var(--overlay-rgb), 0.4)",
              transform: hovered === "email" ? "scale(1.1)" : "scale(1)",
            }}
          >
            <Mail size={18} />
          </div>
          {/* Tooltip */}
          <span
            style={{
              ...labelBase,
              opacity: hovered === "email" ? 1 : 0,
              transition: "opacity var(--duration-fast) var(--ease-default)",
            }}
          >
            Email Us
          </span>
        </a>
      </div>

      {/* Pulse ring on WhatsApp to draw subtle attention */}
      <style>{`
        @keyframes float-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(var(--whatsapp-rgb), 0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(var(--whatsapp-rgb), 0); }
          100% { box-shadow: 0 0 0 0 rgba(var(--whatsapp-rgb), 0); }
        }
      `}</style>
    </>
  );
}
