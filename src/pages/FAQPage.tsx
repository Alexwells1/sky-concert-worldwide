import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE_NAME, SERVICES_FAQ_ITEMS, SERVICES_FAQ_META } from "../constants";
import HeroSection from "../components/common/HeroSection";
import FAQAccordion from "../components/sections/faq/FAQAccordion";
import SectionLabel from "../components/common/SectionLabel";
import { useInView } from "../hooks/useInView";

export default function FAQPage() {
  useEffect(() => {
    document.title = `Frequently Asked Questions | ${SITE_NAME}`;
  }, []);

  const { ref, inView } = useInView();

  return (
    <>
      <HeroSection
        headline="Frequently Asked Questions"
        subheadline="Clear Answers Before You Book"
        supporting="Everything you need to know about planning, pricing, safety, logistics, and the drone show experience before your event."
        overlayIntensity="heavy"
      />

      <section
        style={{
          background: "transparent",
          padding: "var(--space-8) var(--space-6)",
        }}
      >
        <div
          ref={ref}
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1.75rem)",
            transition:
              "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
          }}
        >
          <SectionLabel text={SERVICES_FAQ_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "var(--foreground)",
              marginBottom: "var(--space-3)",
              lineHeight: 1.2,
            }}
          >
            {SERVICES_FAQ_META.headline}
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "var(--text-base)",
              lineHeight: 1.75,
              marginBottom: "var(--space-12)",
            }}
          >
            {SERVICES_FAQ_META.subheadline}
          </p>

          <FAQAccordion items={SERVICES_FAQ_ITEMS} />
        </div>
      </section>

      {/* Still have questions section */}
      <section
        style={{
          background: "transparent",
          padding: "var(--space-8) var(--space-6) var(--space-24)",
        }}
      >
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          <div
            className="card-base"
            style={{
              padding: "var(--space-10)",
              borderRadius: "var(--radius-xs)",
              borderColor: "rgba(var(--primary-rgb), 0.15)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-6)",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "var(--text-lg)",
                  color: "var(--foreground)",
                  marginBottom: "var(--space-2)",
                  lineHeight: 1.3,
                }}
              >
                Still have questions?
              </p>
              <p
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "var(--text-md)",
                  lineHeight: 1.7,
                }}
              >
                Our team is available to walk you through every detail of your
                event, from logistics to creative concept and regulatory
                requirements.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-4)",
                flexShrink: 0,
              }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
