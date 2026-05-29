import { ABOUT_PARTNERS, ABOUT_PARTNERS_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function PartnersBar() {
  const { ref, inView } = useInView();

  const loopedPartners = [
    ...ABOUT_PARTNERS,
    ...ABOUT_PARTNERS,
    ...ABOUT_PARTNERS,
    ...ABOUT_PARTNERS,
  ];

  return (
    <>
      <style>{`
        .partners-bar {
          border-top: 1px solid rgba(255,255,255,0.10);
          border-bottom: 1px solid rgba(255,255,255,0.10);
          padding: 3rem 0;
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          width: 100%;
        }

        .partners-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-align: center;
          margin-bottom: 2rem;
          padding: 0 1.5rem;
        }

        .partners-track-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .partners-track-wrapper::before,
        .partners-track-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 5rem;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .partners-track-wrapper::before {
          left: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.7), transparent);
        }
        .partners-track-wrapper::after {
          right: 0;
          background: linear-gradient(to left, rgba(0,0,0,0.7), transparent);
        }

        .partners-scroll-row {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee-scroll 50s linear infinite;
          will-change: transform;
        }

        .partners-scroll-row:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partner-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2.5rem;
          border-right: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
          height: 90px;
        }

        /* Logo: tall, wide, NO max-width restriction */
        .partner-tile img {
          height: 56px;
          width: auto;
          max-width: none;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.55;
          transition: opacity 0.25s ease;
          display: block;
        }
        .partner-tile:hover img {
          opacity: 1;
        }

        .partner-name {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 1.25rem;
          color: rgba(255,255,255,0.55);
          white-space: nowrap;
          letter-spacing: 0.04em;
          transition: color 0.25s ease;
        }
        .partner-tile:hover .partner-name {
          color: rgba(255,255,255,1);
        }

        @media (max-width: 768px) {
          .partners-bar { padding: 2.5rem 0; }
          .partner-tile {
            padding: 0 2rem;
            height: 72px;
          }
          .partner-tile img {
            height: 44px;
          }
          .partner-name { font-size: 1.05rem; }
        }

        @media (max-width: 480px) {
          .partner-tile {
            padding: 0 1.5rem;
            height: 60px;
          }
          .partner-tile img {
            height: 36px;
          }
          .partner-name { font-size: 0.95rem; }
        }
      `}</style>

      <div
        ref={ref}
        className="partners-bar"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1rem)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="partners-label">{ABOUT_PARTNERS_META.sectionLabel}</p>

        <div className="partners-track-wrapper">
          <div className="partners-scroll-row">
            {loopedPartners.map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="partner-tile">
                {partner.logoUrl ? (
                  <img src={partner.logoUrl} alt={partner.name} />
                ) : (
                  <span className="partner-name">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
