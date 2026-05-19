import type { HeroSectionProps } from '../../types';

export default function HeroSection({ headline, subheadline, supporting }: HeroSectionProps) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow — no opaque background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(0,229,255,0.05) 0%, transparent 65%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '860px',
        padding: '0 1.5rem',
      }}>
        <h1 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.7s ease forwards',
        }}>
          {headline}
        </h1>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.4,
          marginBottom: supporting ? '1rem' : 0,
          animation: 'fadeUp 0.7s ease 0.2s forwards',
          opacity: 0,
        }}>
          {subheadline}
        </p>
        {supporting && (
          <p style={{
            color: '#AAAAAA',
            fontSize: '1rem',
            lineHeight: 1.7,
            animation: 'fadeUp 0.7s ease 0.4s forwards',
            opacity: 0,
          }}>
            {supporting}
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        opacity: 0.5,
      }}>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(0,229,255,0.8), transparent)',
          animation: 'fadeIn 1s ease 1s forwards',
          opacity: 0,
        }} />
      </div>
    </section>
  );
}

