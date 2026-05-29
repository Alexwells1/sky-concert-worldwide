import { useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT_FORM_META, PROJECT_TYPE_OPTIONS } from "../../../constants";

// ─── EmailJS config ────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_2403c9b";
const EMAILJS_TEMPLATE_ID = "template_lxte7lh";
const EMAILJS_PUBLIC_KEY = "7xcXI8PWC0S21WK5H";
// ───────────────────────────────────────────────────────────────────

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  projectType: string;
  message: string;
}

const INITIAL: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  eventDate: "",
  location: "",
  projectType: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

// ─── Field wrapper ─────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        width: "100%",
      }}
    >
      <label
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#00E5FF", marginLeft: "0.3rem" }}>*</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.fullName || !form.company || !form.email || !form.message) return;
    setStatus("sending");

    const formattedDate = form.eventDate
      ? new Date(form.eventDate).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not specified";

    const templateParams = {
      from_name: form.fullName,
      company: form.company,
      reply_to: form.email,
      phone: form.phone || "Not provided",
      event_date: formattedDate,
      location: form.location || "Not specified",
      project_type: form.projectType || "Not specified",
      message: form.message,
      sent_at: new Date().toLocaleString("en-GB", { timeZone: "UTC" }) + " UTC",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // Shared input style
  const inp = (name: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${
      focused === name ? "rgba(0,229,255,0.8)" : "rgba(255,255,255,0.25)"
    }`,
    borderRadius: 0,
    color: "white",
    padding: "0.85rem 0",
    fontSize: "1.15rem",
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  const focus = (name: string) => () => setFocused(name);
  const blur = () => setFocused("");

  // ── Success ────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <section
        id="contact-form"
        style={{
          padding: "7rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          overflow: "hidden", // Prevent success message overflow
        }}
      >
        <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: "1.5rem",
              color: "#00E5FF",
              marginBottom: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            ✦
          </p>
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "2.8rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Message Sent.
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.9,
              fontSize: "1.1rem",
              fontWeight: 500,
              marginBottom: "2.5rem",
            }}
          >
            Thank you for reaching out. Our team will be in touch within 24
            business hours.
          </p>
          <button
            className="btn-primary"
            onClick={() => setStatus("idle")}
            style={{ margin: "0 auto" }}
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────
  return (
    <>
      <section
        id="contact-form"
        style={{
          padding: "6rem 1.5rem 5rem",
          position: "relative",
          overflow: "hidden", // CRITICAL FIX: Stops the absolute background glow from causing horizontal scrollbars
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Atmospheric glow */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // Changed from fixed 800px to avoid breaking small widths
            maxWidth: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(0,229,255,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Heading */}
          <div
            style={{
              marginBottom: "5rem",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "rgba(0,229,255,0.85)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Start a Conversation
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Tell Us About Your Vision
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                fontWeight: 500,
                lineHeight: 1.9,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Share your project and we'll craft a bespoke concept around your
              event, audience, and goals.
            </p>
          </div>

          {/* Fields */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              width: "100%",
            }}
          >
            {/* Section label */}
            <p style={sectionLabel}>Your Details</p>

            {/* Row 1 — Name + Company */}
            <div style={twoCol} className="form-two-col">
              <Field label="Full Name" required>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inp("fullName")}
                  onFocus={focus("fullName")}
                  onBlur={blur}
                />
              </Field>
              <Field label="Company / Organization" required>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  style={inp("company")}
                  onFocus={focus("company")}
                  onBlur={blur}
                />
              </Field>
            </div>

            {/* Row 2 — Email + Phone */}
            <div
              style={{ ...twoCol, marginTop: "2.75rem" }}
              className="form-two-col"
            >
              <Field label="Email Address" required>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  style={inp("email")}
                  onFocus={focus("email")}
                  onBlur={blur}
                />
              </Field>
              <Field label="Phone / WhatsApp">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 000 000 0000"
                  style={inp("phone")}
                  onFocus={focus("phone")}
                  onBlur={blur}
                />
              </Field>
            </div>

            {/* Spacer + section label */}
            <p style={{ ...sectionLabel, marginTop: "3.5rem" }}>
              Event Details
            </p>

            {/* Row 3 — Date + Location */}
            <div style={twoCol} className="form-two-col">
              <Field label="Event / Project Date">
                <input
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  style={{ ...inp("eventDate"), colorScheme: "dark" }}
                  onFocus={focus("eventDate")}
                  onBlur={blur}
                />
              </Field>
              <Field label="Approximate Location">
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  style={inp("location")}
                  onFocus={focus("location")}
                  onBlur={blur}
                />
              </Field>
            </div>

            {/* Project type */}
            <div
              style={{ marginTop: "2.75rem", maxWidth: "460px", width: "100%" }}
            >
              <Field label="Type of Project">
                <div style={{ position: "relative", width: "100%" }}>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    style={{
                      ...inp("projectType"),
                      appearance: "none",
                      cursor: "pointer",
                      paddingRight: "2rem",
                    }}
                    onFocus={focus("projectType")}
                    onBlur={blur}
                  >
                    {PROJECT_TYPE_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        style={{ background: "#0D1426", color: "white" }}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div
                    style={{
                      position: "absolute",
                      right: "0.5rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.9rem",
                    }}
                  >
                    ▾
                  </div>
                </div>
              </Field>
            </div>

            {/* Spacer + section label */}
            <p style={{ ...sectionLabel, marginTop: "3.5rem" }}>Your Message</p>

            {/* Message — full width */}
            <Field label="Project Brief" required>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your vision, event goals, timeline, and anything else we should know…"
                rows={7}
                style={{
                  ...inp("message"),
                  resize: "vertical",
                  minHeight: "160px",
                  lineHeight: 1.8,
                  borderBottom: `2px solid ${
                    focused === "message"
                      ? "rgba(0,229,255,0.8)"
                      : "rgba(255,255,255,0.25)"
                  }`,
                  paddingBottom: "1rem",
                }}
                onFocus={focus("message")}
                onBlur={blur}
              />
            </Field>

            {/* Error */}
            {status === "error" && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginTop: "1.5rem",
                }}
              >
                ✕ Something went wrong. Please try again or email us directly.
              </p>
            )}

            {/* Submit row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.25rem",
                paddingTop: "3rem",
                marginTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                width: "100%",
              }}
            >
              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {CONTACT_FORM_META.trustItems?.map((t: string) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="contact-submit-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background:
                    status === "sending"
                      ? "rgba(0,229,255,0.06)"
                      : "rgba(0,229,255,0.1)",
                  border: "1px solid rgba(0,229,255,0.55)",
                  color: "#00E5FF",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  padding: "1.1rem 2.8rem",
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: "1.25rem",
                  letterSpacing: "0.28em",
                  transition: "background 0.2s, box-shadow 0.2s",
                  opacity: status === "sending" ? 0.6 : 1,
                  whiteSpace: "nowrap",
                }}
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    {CONTACT_FORM_META.submitLabel ?? "Send Enquiry"}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Below note */}
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.95rem",
                marginTop: "1.75rem",
                lineHeight: 1.7,
                textAlign: "right",
                width: "100%",
              }}
            >
              We respond to every serious enquiry within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .contact-submit-btn:hover:not(:disabled) {
          background: rgba(0,229,255,0.18) !important;
          box-shadow: 0 0 32px rgba(0,229,255,0.15);
        }
        @media (max-width: 600px) {
          .form-two-col {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }
        ::placeholder {
          color: rgba(255,255,255,0.35) !important;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────
const sectionLabel: React.CSSProperties = {
  fontFamily: '"Space Mono", monospace',
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  color: "rgba(0,229,255,0.7)",
  textTransform: "uppercase",
  marginBottom: "2rem",
  width: "100%",
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3rem",
  width: "100%",
};
