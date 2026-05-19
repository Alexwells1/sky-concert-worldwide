import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "../../common/SectionLabel";
import ServiceCard from "../../common/ServiceCard";
import { HOME_SERVICES, HOME_SERVICES_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function ServicesPreview() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "transparent", padding: "4rem 1.5rem" }}>
      <style>{`
        @media (max-width: 640px) {
          .service-card-description {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <SectionLabel text={HOME_SERVICES_META.sectionLabel} />
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(1.25rem)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            {HOME_SERVICES_META.headline}
          </h2>
          <p
            style={{
              color: "#AAAAAA",
              maxWidth: "560px",
              margin: "0 auto",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease 0.2s",
            }}
          >
            {HOME_SERVICES_META.subheadline}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {HOME_SERVICES.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/services" className="btn-ghost">
            Explore All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
