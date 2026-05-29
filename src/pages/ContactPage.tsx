import { useEffect } from "react";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import {
  CONTACT_INFO,
  WHATS_NEXT_STEPS,
  WHATS_NEXT_META,
  GLOBAL_PRESENCE_META,
} from "../constants";
import { useInView } from "../hooks/useInView";
import ContactForm from "../components/sections/contact/ContactForm";

// ─── Supporting info row beneath form ──────────────────────────────
function SupportingInfo() {
  const { ref, inView } = useInView();

  const contactItems = [
    {
      icon: <Mail size={18} style={{ color: "#00E5FF", flexShrink: 0 }} />,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Phone size={18} style={{ color: "#00E5FF", flexShrink: 0 }} />,
      label: "Phone / WhatsApp",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: (
        <MessageCircle size={18} style={{ color: "#00E5FF", flexShrink: 0 }} />
      ),
      label: "Emergency Enquiries",
      value: CONTACT_INFO.emergencyEmail,
      href: `mailto:${CONTACT_INFO.emergencyEmail}`,
    },
    {
      icon: <Clock size={18} style={{ color: "#C9A84C", flexShrink: 0 }} />,
      label: "Response Time",
      value: CONTACT_INFO.responseTime,
      href: null,
    },
  ];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(1.5rem)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "0 1.5rem 8rem",
      }}
    >
      {/* Thin top divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
          marginBottom: "4rem",
        }}
      />

      {/* Two-column layout: contact info + what's next */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="supporting-info-grid"
      >
        {/* Left — Direct contact */}
        <div>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.75rem", // was 0.55rem
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "rgba(0,229,255,0.75)", // was 0.4
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}
          >
            Reach Us Directly
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {contactItems.map((item, i) => {
              const inner = (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.1rem 0",
                    borderBottom:
                      i < contactItems.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                  }}
                >
                  <div style={{ marginTop: "3px" }}>{item.icon}</div>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: "0.65rem", // was 0.5rem
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.55)", // was 0.25
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: item.href ? "#00E5FF" : "rgba(255,255,255,0.85)", // brighter
                        fontSize: "1rem", // was 0.85rem
                        fontWeight: 600,
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none", display: "block" }}
                  className="contact-direct-link"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>

        {/* Right — What's next */}
        <div>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "0.75rem", // was 0.55rem
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "rgba(0,229,255,0.75)", // was 0.4
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}
          >
            {WHATS_NEXT_META?.sectionLabel ?? "What Happens Next"}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {WHATS_NEXT_STEPS.map((step, i) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingBottom:
                    i < WHATS_NEXT_STEPS.length - 1 ? "1.75rem" : 0,
                  position: "relative",
                }}
              >
                {i < WHATS_NEXT_STEPS.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "17px",
                      top: "37px",
                      bottom: 0,
                      width: "1px",
                      background:
                        "linear-gradient(to bottom, rgba(0,229,255,0.25), transparent)",
                    }}
                  />
                )}
                <div
                  style={{
                    width: "36px", // was 32px
                    height: "36px",
                    border: "1px solid rgba(0,229,255,0.35)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: "rgba(6,10,20,0.6)",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.65rem", // was 0.5rem
                      fontWeight: 700,
                      color: "#00E5FF",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div style={{ paddingTop: "0.4rem" }}>
                  <h4
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "1.1rem", // was 0.95rem
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "0.3rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)", // was 0.35
                      fontSize: "0.9rem", // was 0.8rem
                      fontWeight: 400,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global presence note */}
      {GLOBAL_PRESENCE_META?.body && (
        <>
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              margin: "3.5rem 0 2rem",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.45)", // was 0.2
              fontSize: "0.95rem", // was 0.8rem
              fontWeight: 400,
              lineHeight: 1.85,
              fontFamily: '"DM Sans", sans-serif',
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {GLOBAL_PRESENCE_META.body}
          </p>
        </>
      )}

      <style>{`
        .contact-direct-link:hover p:last-child {
          color: white !important;
        }
        @media (max-width: 760px) {
          .supporting-info-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────
export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact Sky Concert Worldwide | Drone Light Show Enquiries`;
  }, []);

  return (
    <>
      {/* Full-width form — no sidebar */}
      <ContactForm />

      {/* Supporting info underneath */}
      <SupportingInfo />
    </>
  );
}
