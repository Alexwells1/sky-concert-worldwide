import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  twinkleOffset: number;
  layer: 0 | 1 | 2; // depth layer for parallax
}

const STAR_COUNT = 280;
const LAYERS = [0, 1, 2] as const;
// layer 0 = far/slow/small, layer 1 = mid, layer 2 = near/fast/large

function createStar(canvasWidth: number, canvasHeight: number, randomY = true): Star {
  const layer = LAYERS[Math.floor(Math.random() * 3)] as 0 | 1 | 2;
  const sizeByLayer = [0.5, 1.0, 1.6];
  const speedByLayer = [0.08, 0.16, 0.28];
  const opacityByLayer = [0.25, 0.5, 0.75];

  return {
    x: Math.random() * canvasWidth,
    y: randomY ? Math.random() * canvasHeight : canvasHeight + Math.random() * 20,
    size: sizeByLayer[layer] + Math.random() * 0.5,
    opacity: opacityByLayer[layer] * (0.6 + Math.random() * 0.4),
    speed: speedByLayer[layer] + Math.random() * 0.06,
    drift: (Math.random() - 0.5) * 0.015,
    twinkleOffset: Math.random() * Math.PI * 2,
    layer,
  };
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const scrollYRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);

  const initStars = useCallback((w: number, h: number) => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      createStar(w, h, true)
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
      // Re-init stars on first mount or large resize
      if (starsRef.current.length === 0) {
        initStars(w, h);
      }
    }

    resize();

    // Throttled scroll handler
    let scrollTicking = false;
    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          scrollYRef.current = window.scrollY;
          scrollTicking = false;
        });
      }
    }

    // ResizeObserver for canvas sizing
    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(document.documentElement);

    window.addEventListener('scroll', onScroll, { passive: true });

    function draw(timestamp: number) {
      if (!ctx || !canvas) return;

      const dt = Math.min(timestamp - timeRef.current, 32); // cap delta at ~30fps equivalent
      timeRef.current = timestamp;

      // Subtle parallax offset from scroll delta
      const scrollDelta = scrollYRef.current - lastScrollYRef.current;
      lastScrollYRef.current = scrollYRef.current;

      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      const len = stars.length;

      for (let i = 0; i < len; i++) {
        const s = stars[i];

        // Move upward
        s.y -= s.speed * (dt / 16);

        // Horizontal drift
        s.x += s.drift;

        // Parallax: nearer layers react slightly more to scroll
        const parallaxFactor = s.layer === 2 ? 0.018 : s.layer === 1 ? 0.01 : 0.005;
        s.y -= scrollDelta * parallaxFactor;

        // Wrap horizontally
        if (s.x < -2) s.x = w + 2;
        if (s.x > w + 2) s.x = -2;

        // Reset when off top
        if (s.y < -2) {
          const fresh = createStar(w, h, false);
          stars[i] = fresh;
          continue;
        }

        // Twinkle: very subtle opacity oscillation
        const twinkle = 1 + 0.18 * Math.sin(timestamp * 0.0008 + s.twinkleOffset);
        const finalOpacity = Math.min(1, s.opacity * twinkle);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);

        // Slight color variation: mostly white, hints of cyan/gold on near-layer stars
        let color = '255,255,255';
        if (s.layer === 2) {
          const roll = (s.twinkleOffset % (Math.PI * 2)) / (Math.PI * 2);
          if (roll < 0.2) color = '180,230,255'; // cool blue-white
          else if (roll < 0.28) color = '220,200,140'; // warm gold-white
        }

        ctx.fillStyle = `rgba(${color},${finalOpacity})`;
        ctx.fill();

        // Soft glow on larger near-layer stars
        if (s.layer === 2 && s.size > 1.4) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color},${finalOpacity * 0.08})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame((ts) => {
      timeRef.current = ts;
      rafRef.current = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        // Deep space gradient as canvas background via CSS (no overdraw)
        background:
          'radial-gradient(ellipse 120% 80% at 30% 20%, rgba(0,40,80,0.18) 0%, transparent 55%),' +
          'radial-gradient(ellipse 80% 60% at 80% 70%, rgba(0,15,40,0.12) 0%, transparent 50%),' +
          'linear-gradient(170deg, var(--background) 0%, #030712 35%, #020508 65%, var(--background) 100%)',
      }}
    />
  );
}
