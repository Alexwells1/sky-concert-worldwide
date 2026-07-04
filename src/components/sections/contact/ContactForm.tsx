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
          fontWeight: "var(--font-bold)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(var(--foreground-rgb), 0.9)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--primary)", marginLeft: "0.3rem" }}>
            *
          </span>
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
      focused === name
        ? "rgba(var(--primary-rgb), 0.8)"
        : "rgba(var(--foreground-rgb), 0.6)"
    }`,
    borderRadius: 0,
    color: "var(--foreground)",
    padding: "0.85rem 0",
    fontSize: "var(--text-md-lg)",
    fontWeight: "var(--font-semibold)",
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
          padding: "var(--space-8) var(--space-6)",
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
              color: "var(--primary)",
              marginBottom: "var(--space-6)",
              letterSpacing: "0.1em",
            }}
          >
            ✦
          </p>
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "2.8rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "var(--space-4)",
              lineHeight: 1.15,
            }}
          >
            Message Sent.
          </h3>
          <p
            style={{
              color: "rgba(var(--foreground-rgb), 0.7)",
              lineHeight: 1.9,
              fontSize: "var(--text-md)",
              fontWeight: "var(--font-medium)",
              marginBottom: "var(--space-10)",
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
          padding: "var(--space-8) var(--space-6) var(--space-20)",
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
              "radial-gradient(ellipse, rgba(var(--primary-rgb), 0.03) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="contact-form-inner"
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
              marginBottom: "var(--space-12)",
              textAlign: "center",
              padding: "0 var(--space-4)",
            }}
          >
            <p
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-bold)",
                letterSpacing: "var(--tracking-wide)",
                color: "rgba(var(--primary-rgb), 0.85)",
                textTransform: "uppercase",
                marginBottom: "var(--space-3)",
              }}
            >
              Start a Conversation
            </p>
            <h2
              className="contact-heading"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(1.75rem, 5vw, 4rem)",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                lineHeight: 1.1,
                marginBottom: "var(--space-4)",
              }}
            >
              Tell Us About Your Vision
            </h2>
            <p
              className="contact-sub"
              style={{
                color: "rgba(var(--foreground-rgb), 0.65)",
                fontSize: "var(--text-md-alt)",
                fontWeight: "var(--font-medium)",
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

            {/* Row 1 Name + Company */}
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

            {/* Row 2 Email + Phone */}
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
            <p style={{ ...sectionLabel, marginTop: "var(--space-14)" }}>
              Event Details
            </p>

            {/* Row 3 Date + Location */}
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
                      paddingRight: "var(--space-8)",
                    }}
                    onFocus={focus("projectType")}
                    onBlur={blur}
                  >
                    {PROJECT_TYPE_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        style={{
                          background: "var(--card)",
                          color: "var(--foreground)",
                        }}
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
                      color: "rgba(var(--foreground-rgb), 0.7)",
                      fontSize: "var(--text-md)",
                    }}
                  >
                    ▾
                  </div>
                </div>
              </Field>
            </div>

            {/* Spacer + section label */}
            <p style={{ ...sectionLabel, marginTop: "var(--space-14)" }}>
              Your Message
            </p>

            {/* Message full width */}
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
                      ? "rgba(var(--primary-rgb), 0.8)"
                      : "rgba(var(--foreground-rgb), 0.6)"
                  }`,
                  paddingBottom: "var(--space-4)",
                }}
                onFocus={focus("message")}
                onBlur={blur}
              />
            </Field>

            {/* Error */}
            {status === "error" && (
              <p
                style={{
                  color: "var(--destructive-strong)",
                  fontFamily: '"Space Mono", monospace',
                  fontSize: "var(--text-sm-alt)",
                  fontWeight: "var(--font-bold)",
                  letterSpacing: "0.05em",
                  marginTop: "var(--space-6)",
                }}
              >
                ✕ Something went wrong. Please try again or email us directly.
              </p>
            )}

            {/* Submit button centered, above trust items */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "var(--space-12)",
                marginTop: "var(--space-4)",
                borderTop: "1px solid rgba(var(--foreground-rgb), 0.7)",
                width: "100%",
              }}
            >
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="btn-primary contact-submit-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-1-5)",
                  opacity: status === "sending" ? 0.6 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    {CONTACT_FORM_META.submitLabel ?? "Send Enquiry"}
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>

            {/* Trust badges below button */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-6)",
                justifyContent: "center",
                paddingTop: "var(--space-8)",
                width: "100%",
              }}
            >
              {CONTACT_FORM_META.trustItems?.map((t: string) => (
                <span
                  key={t}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "var(--text-3xs)",
                    fontWeight: "var(--font-bold)",
                    color: "rgba(var(--foreground-rgb), 0.45)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Below note */}
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: "italic",
                color: "rgba(var(--foreground-rgb), 0.4)",
                fontSize: "var(--text-body-lg)",
                marginTop: "var(--space-6)",
                lineHeight: 1.7,
                textAlign: "center",
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
          opacity: 0.85 !important;
        }
        @media (max-width: 600px) {
          .form-two-col {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .contact-form-inner {
            background: rgba(var(--color-surface-3-rgb), 0.75) !important;
            border: 1px solid rgba(var(--foreground-rgb), 0.06) !important;
            border-radius: 4px !important;
            padding: 2rem 1.25rem !important;
          }
          .contact-sub {
            display: none !important;
          }
          .contact-heading {
            margin-bottom: 0 !important;
          }
        }
        ::placeholder {
          color: rgba(var(--foreground-rgb), 0.35) !important;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────
const sectionLabel: React.CSSProperties = {
  fontFamily: '"Space Mono", monospace',
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-bold)",
  letterSpacing: "0.22em",
  color: "rgba(var(--primary-rgb), 0.7)",
  textTransform: "uppercase",
  marginBottom: "var(--space-8)",
  width: "100%",
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "var(--space-12)",
  width: "100%",
};
