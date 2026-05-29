import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; pulse: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;
    let rafId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      frame++;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const opacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${opacity})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, #020510 0%, #040D20 40%, #060A1A 70%, #020510 100%)',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Animated grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 80%)',
      }} />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Label */}
        <div style={{
          display: 'inline-block',
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#00E5FF',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          padding: '0.5rem 1.25rem',
          border: '1px solid rgba(0,229,255,0.2)',
          borderRadius: '100px',
          animation: 'heroFadeUp 0.8s ease forwards',
          opacity: 0,
        }}>
          Aerial Experiences
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: '"Bebas Neue", cursive',
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          color: 'white',
          lineHeight: 0.9,
          letterSpacing: '0.02em',
          marginBottom: '2rem',
          animation: 'heroFadeUp 0.9s 0.15s ease forwards',
          opacity: 0,
        }}>
          We Design<br />
          <span style={{
            WebkitTextStroke: '1px rgba(0,229,255,0.6)',
            color: 'transparent',
          }}>
            Spectacles
          </span>
          <br />
          for the Sky
        </h1>

        {/* Supporting line */}
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'rgba(200,200,200,0.85)',
          lineHeight: 1.5,
          marginBottom: '3.5rem',
          animation: 'heroFadeUp 1s 0.3s ease forwards',
          opacity: 0,
        }}>
          Where precision engineering meets emotional storytelling.
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'heroFadeUp 1s 0.45s ease forwards',
          opacity: 0,
        }}>
          <Link to="/contact" className="btn-primary" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            Commission a Show <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent, #060A14)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
