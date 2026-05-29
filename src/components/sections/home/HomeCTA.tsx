import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HOME_CTA } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function HomeCTA() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        .cta-section {
          padding: 14rem 1.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-ambient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,50,120,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 30% 20%, rgba(80,0,150,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 70% 20%, rgba(0,80,180,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .cta-divider-line {
          width: 1px;
          height: 5rem;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent);
          margin: 0 auto 4rem;
        }
        .cta-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          display: block;
          margin-bottom: 2rem;
        }
        .cta-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(3rem, 8vw, 6.5rem);
          color: rgba(255,255,255,0.92);
          line-height: 0.98;
          letter-spacing: -0.04em;
          margin: 0 0 2.5rem;
        }
        .cta-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          line-height: 1.75;
          max-width: 440px;
          margin: 0 auto 3.5rem;
        }
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          justify-content: center;
        }
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2.25rem;
          background: rgba(255,255,255,0.94);
          color: #040609;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .cta-primary:hover {
          background: white;
          transform: translateY(-1px);
        }
        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2.25rem;
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.14);
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .cta-secondary:hover {
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.32);
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-ambient" />

        <div
          ref={ref}
          style={{
            position: "relative",
            zIndex: 1,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(2.5rem)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <div className="cta-divider-line" />
          <span className="cta-eyebrow">{HOME_CTA.sectionLabel}</span>
          <h2 className="cta-headline">
            Ready to Light<br />Up the Sky?
          </h2>
          <p className="cta-sub">{HOME_CTA.subheadline}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary">
              {HOME_CTA.cta1} <ArrowRight size={13} />
            </Link>
            <Link to="/contact" className="cta-secondary">
              {HOME_CTA.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
