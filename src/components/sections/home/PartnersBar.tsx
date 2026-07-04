import { ABOUT_PARTNERS, ABOUT_PARTNERS_META } from "../../../constants";
import { useInView } from "../../../hooks/useInView";

export default function PartnersBar() {
  const { ref, inView } = useInView();

  const isSingle = ABOUT_PARTNERS.length === 1;

  const loopedPartners = isSingle
    ? ABOUT_PARTNERS
    : [
        ...ABOUT_PARTNERS,
        ...ABOUT_PARTNERS,
        ...ABOUT_PARTNERS,
        ...ABOUT_PARTNERS,
      ];

  return (
    <>
      <style>{`
  .partners-bar {
    border-top: 1px solid rgba(var(--foreground-rgb), 0.10);
    border-bottom: 1px solid rgba(var(--foreground-rgb), 0.10);
    padding: 3rem 0;
    background: rgba(var(--foreground-rgb), 0.04);
    overflow: hidden;
    width: 100%;
  }

  .partners-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--primary);
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
    background: linear-gradient(
      to right,
      rgba(var(--overlay-rgb), 0.7),
      transparent
    );
  }

  .partners-track-wrapper::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(var(--overlay-rgb), 0.7),
      transparent
    );
  }

  .partners-scroll-row {
    display: flex;
    align-items: center;
    width: max-content;
    animation: marquee-scroll 50s linear infinite;
    will-change: transform;
  }

  /* Single partner layout */
  .partners-single-row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
  }

  .partners-single-row .partner-tile {
    border-right: none;
    padding: 0;
    height: auto;
  }

  @keyframes marquee-scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .partner-tile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.5rem;
    border-right: 1px solid rgba(var(--foreground-rgb), 0.5);
    flex-shrink: 0;
    height: 90px;
  }

  /* Default logo sizing, preserve brand colors */
  .partner-tile img {
    height: 56px;
    width: auto;
    max-width: none;
    object-fit: contain;
    opacity: 1;
    display: block;
  }

  /* Single partner logo sizing */
  .partners-single-row .partner-tile img {
    height: clamp(36px, 8vw, 80px);
    width: auto;
    max-width: min(80vw, 600px);
  }

  .partner-name {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: rgb(var(--foreground-rgb));
    white-space: nowrap;
    letter-spacing: 0.04em;
  }

  /* Tablet */
  @media (max-width: 768px) {
    .partners-bar {
      padding: 2.5rem 0;
    }

    .partner-tile {
      padding: 0 2rem;
      height: 72px;
    }

    .partner-tile img {
      height: 44px;
    }

    .partners-single-row .partner-tile img {
      height: 48px;
      max-width: 75vw;
    }

    .partner-name {
      font-size: 1.05rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .partner-tile {
      padding: 0 1.5rem;
      height: 60px;
    }

    .partner-tile img {
      height: 36px;
    }

    .partners-single-row .partner-tile img {
      height: 36px;
      max-width: 70vw;
    }

    .partner-name {
      font-size: 0.95rem;
    }
  }
`}</style>

      <div
        ref={ref}
        className="partners-bar"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(1rem)",
          transition:
            "opacity var(--duration-slower) var(--ease-default), transform var(--duration-slower) var(--ease-default)",
        }}
      >
        <p className="partners-label">{ABOUT_PARTNERS_META.sectionLabel}</p>

        <div className="partners-track-wrapper">
          <div
            className={isSingle ? "partners-single-row" : "partners-scroll-row"}
          >
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
