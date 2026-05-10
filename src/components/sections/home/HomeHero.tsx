import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { HOME_HERO } from "../../../constants";

const HEADER_HEIGHT = 72;

const STARS = [
  { top: "8%", left: "12%", size: 1, color: "white", opacity: 0.35 },
  { top: "14%", left: "78%", size: 2, color: "#00E5FF", opacity: 0.5 },
  { top: "22%", left: "34%", size: 1, color: "white", opacity: 0.25 },
  { top: "6%", left: "55%", size: 1, color: "white", opacity: 0.3 },
  { top: "31%", left: "90%", size: 1, color: "white", opacity: 0.2 },
  { top: "18%", left: "5%", size: 1, color: "white", opacity: 0.4 },
  { top: "45%", left: "3%", size: 2, color: "white", opacity: 0.15 },
  { top: "38%", left: "96%", size: 1, color: "#00E5FF", opacity: 0.35 },
  { top: "55%", left: "88%", size: 1, color: "white", opacity: 0.2 },
  { top: "62%", left: "15%", size: 1, color: "white", opacity: 0.25 },
  { top: "72%", left: "72%", size: 2, color: "white", opacity: 0.3 },
  { top: "80%", left: "42%", size: 1, color: "#00E5FF", opacity: 0.4 },
  { top: "88%", left: "25%", size: 1, color: "white", opacity: 0.2 },
  { top: "92%", left: "65%", size: 1, color: "white", opacity: 0.15 },
  { top: "75%", left: "8%", size: 2, color: "white", opacity: 0.25 },
  { top: "25%", left: "62%", size: 1, color: "white", opacity: 0.3 },
  { top: "10%", left: "40%", size: 2, color: "#00E5FF", opacity: 0.45 },
  { top: "95%", left: "82%", size: 1, color: "white", opacity: 0.2 },
  { top: "3%", left: "88%", size: 1, color: "white", opacity: 0.35 },
];

// ─── Shape point generators (normalized 0-1 coords) ──────────────────────────

function getFishPoints() {
  const pts = [];
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    pts.push({
      x: 0.36 + Math.cos(a) * 0.34 * (1 + 0.2 * Math.cos(2 * a)),
      y: 0.5 + Math.sin(a) * 0.21,
    });
  }
  for (let i = 0; i < 14; i++) {
    const t = i / 13;
    pts.push({
      x: 0.86 + t * 0.2,
      y: 0.5 + (t - 0.5) * 0.5 * Math.sign(t - 0.5),
    });
  }
  pts.push({ x: 0.17, y: 0.44 }, { x: 0.18, y: 0.44 }, { x: 0.17, y: 0.45 });
  return pts;
}

function getBalloonPoints() {
  const pts = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    pts.push({
      x: 0.5 + Math.cos(a) * (0.34 + 0.04 * Math.cos(2 * a)),
      y: 0.36 + Math.sin(a) * (0.34 + 0.02 * Math.sin(a)),
    });
  }
  for (let i = 0; i < 12; i++) {
    const t = i / 11;
    pts.push({
      x: 0.5 + Math.sin(t * Math.PI * 3.5) * 0.08,
      y: 0.71 + t * 0.25,
    });
  }
  return pts;
}

function getBirdPoints() {
  const pts = [];
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    pts.push({ x: t * 0.44, y: 0.5 - Math.sin(t * Math.PI) * 0.3 });
  }
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    pts.push({
      x: 0.56 + t * 0.44,
      y: 0.5 - Math.sin((1 - t) * Math.PI) * 0.3,
    });
  }
  for (let i = 0; i < 6; i++) {
    pts.push({
      x: 0.44 + (i / 5) * 0.12,
      y: 0.5 + Math.sin((i / 5) * Math.PI) * 0.07,
    });
  }
  return pts;
}

function getStarPoints() {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const oa = (i / 5) * Math.PI * 2 - Math.PI / 2;
    const ia = oa + Math.PI / 5;
    for (let r = 0.08; r <= 0.46; r += 0.09) {
      pts.push({ x: 0.5 + Math.cos(oa) * r, y: 0.5 + Math.sin(oa) * r });
    }
    pts.push({ x: 0.5 + Math.cos(ia) * 0.18, y: 0.5 + Math.sin(ia) * 0.18 });
  }
  return pts;
}

function getButterflyPoints() {
  const pts = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 22; i++) {
      const a = (i / 21) * Math.PI;
      pts.push({
        x: 0.5 + side * (0.08 + Math.abs(Math.sin(a)) * 0.38),
        y: 0.3 + Math.sin(a) * 0.28,
      });
    }
    for (let i = 0; i < 14; i++) {
      const a = (i / 13) * Math.PI;
      pts.push({
        x: 0.5 + side * (0.06 + Math.abs(Math.sin(a)) * 0.25),
        y: 0.62 + Math.sin(a) * 0.2,
      });
    }
  }
  for (let i = 0; i < 9; i++) pts.push({ x: 0.5, y: 0.22 + i * 0.065 });
  for (let i = 0; i < 6; i++) {
    const t = i / 5;
    pts.push({ x: 0.5 - 0.08 - t * 0.1, y: 0.2 - t * 0.14 });
    pts.push({ x: 0.5 + 0.08 + t * 0.1, y: 0.2 - t * 0.14 });
  }
  return pts;
}

const SHAPES = [
  { pts: getFishPoints(), color: "#00E5FF", w: 150, h: 85, count: 5, dir: 1 },
  {
    pts: getBalloonPoints(),
    color: "#FF6BDB",
    w: 75,
    h: 135,
    count: 4,
    dir: 0,
  },
  { pts: getBirdPoints(), color: "#FFFFFF", w: 160, h: 75, count: 6, dir: 1 },
  { pts: getStarPoints(), color: "#FFD166", w: 95, h: 95, count: 4, dir: -1 },
  {
    pts: getButterflyPoints(),
    color: "#A78BFA",
    w: 115,
    h: 105,
    count: 5,
    dir: 1,
  },
];

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}


class Performer {
  canvas: HTMLCanvasElement;
  si: number;
  wobble: number;
  wobbleSpeed: number;
  scale: number;
  rotSpeed: number;
  rot: number;
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  opacity: number = 0;
  targetOpacity: number = 0;
  dead: boolean = false;

  constructor(
    canvas: HTMLCanvasElement,
    shapeIdx: number,
    initRandom: boolean
  ) {
    this.canvas = canvas;
    this.si = shapeIdx;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.013 + Math.random() * 0.017;
    this.scale = 0.65 + Math.random() * 0.65;
    this.rotSpeed = (Math.random() - 0.5) * 0.005;
    this.rot = (Math.random() - 0.5) * 0.4;
    this._spawn(initRandom);
  }
  _spawn(initRandom: boolean): void {
    const { width, height } = this.canvas;
    const shape = SHAPES[this.si];
    const dir = shape.dir;

    if (initRandom) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.opacity = Math.random() * 0.5;
    } else {
      if (dir === 0) {
        // balloons float up from bottom
        this.x = width * (0.05 + Math.random() * 0.9);
        this.y = height + shape.h * this.scale + 20;
      } else if (dir === 1) {
        this.x = -shape.w * this.scale - 20;
        this.y = height * (0.08 + Math.random() * 0.84);
      } else {
        this.x = width + shape.w * this.scale + 20;
        this.y = height * (0.08 + Math.random() * 0.84);
      }
      this.opacity = 0;
    }

    const speed = 0.3 + Math.random() * 0.5;
    if (dir === 0) {
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(speed * 0.6);
    } else {
      this.vx = dir * speed;
      this.vy = (Math.random() - 0.5) * 0.2;
    }

    this.targetOpacity = 0.45 + Math.random() * 0.4;
    this.dead = false;
  }

  update(): void {
    const { width, height } = this.canvas;
    const shape = SHAPES[this.si];

    this.wobble += this.wobbleSpeed;
    this.rot += this.rotSpeed;
    this.x += this.vx;
    this.y += this.vy + Math.sin(this.wobble) * 0.45;

    if (this.opacity < this.targetOpacity) this.opacity += 0.007;

    const pad = Math.max(shape.w, shape.h) * this.scale + 80;
    if (
      this.x < -pad ||
      this.x > width + pad ||
      this.y < -pad ||
      this.y > height + pad
    ) {
      this._spawn(false);
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const shape = SHAPES[this.si];
    const w = shape.w * this.scale;
    const h = shape.h * this.scale;
    const [r, g, b] = hexToRgb(shape.color);

    ctx.save();
    ctx.translate(this.x, this.y);
    // flip fish/birds to face direction of travel
    const flipX = shape.dir === -1 ? -1 : 1;
    ctx.scale(flipX, 1);
    ctx.rotate(this.rot);
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

    shape.pts.forEach((pt, i) => {
      const px = (pt.x - 0.5) * w;
      const py = (pt.y - 0.5) * h;
      const flicker = 0.55 + 0.45 * Math.sin(this.wobble * 1.9 + i * 0.5);
      const ps = (0.9 + Math.random() * 0.5) * this.scale;

      // glow halo
      const grd = ctx.createRadialGradient(px, py, 0, px, py, ps * 4);
      grd.addColorStop(0, `rgba(${r},${g},${b},${flicker * 0.8})`);
      grd.addColorStop(0.5, `rgba(${r},${g},${b},${flicker * 0.25})`);
      grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(px, py, ps * 4, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // bright core dot
      ctx.beginPath();
      ctx.arc(px, py, ps * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${flicker * 0.9})`;
      ctx.fill();
    });

    ctx.restore();
  }
}

function usePerformanceCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const performers = SHAPES.flatMap((_, si) =>
      Array.from(
        { length: SHAPES[si].count },
        () => new Performer(canvas, si, true)
      )
    );

    let raf: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      performers.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [canvasRef]);
}

export default function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  usePerformanceCanvas(canvasRef);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; background: #00E5FF; color: #020508;
          font-family: 'Bebas Neue', cursive; font-size: 1rem;
          letter-spacing: 0.08em; border: none; cursor: pointer;
          text-decoration: none; transition: background 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .hero-cta-primary:hover { background: #33ECFF; box-shadow: 0 0 28px rgba(0,229,255,0.45); }
        .hero-cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; background: transparent; color: rgba(255,255,255,0.88);
          font-family: 'Bebas Neue', cursive; font-size: 1rem;
          letter-spacing: 0.08em; border: 1px solid rgba(255,255,255,0.28);
          cursor: pointer; transition: border-color 0.2s, color 0.2s; white-space: nowrap;
        }
        .hero-cta-secondary:hover { border-color: rgba(0,229,255,0.6); color: #00E5FF; }
      `}</style>

      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: `${HEADER_HEIGHT}px`,
          paddingBottom: "5rem",
          boxSizing: "border-box",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, #020508 0%, #060A14 35%, #0A0F1E 65%, #040810 100%)",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(0,229,255,0.07) 0%, transparent 65%)",
            }}
          />
          {STARS.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: `${s.size}px`,
                height: `${s.size}px`,
                borderRadius: "50%",
                background: s.color,
                opacity: s.opacity,
                top: s.top,
                left: s.left,
              }}
            />
          ))}
        </div>

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Vignette — keeps text readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 28%, rgba(2,5,8,0.75) 100%)",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "2rem",
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.2s forwards",
            }}
          >
            <div
              style={{ width: "28px", height: "1px", background: "#00E5FF" }}
            />
            <span
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: "0.78rem",
                letterSpacing: "0.22em",
                color: "#00E5FF",
              }}
            >
              SKY CONCERT WORLDWIDE
            </span>
            <div
              style={{ width: "28px", height: "1px", background: "#00E5FF" }}
            />
          </div>

          <h1
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 8.5vw, 6rem)",
              lineHeight: 0.96,
              letterSpacing: "0.02em",
              color: "white",
              margin: "0 0 0.15em",
              opacity: 0,
              animation: "fadeUp 0.65s ease 0.4s forwards",
            }}
          >
            {HOME_HERO.headline1}
          </h1>

          <h1
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: "clamp(3rem, 8.5vw, 6rem)",
              lineHeight: 0.96,
              letterSpacing: "0.02em",
              color: "#00E5FF",
              textShadow: "0 0 50px rgba(0,229,255,0.45)",
              margin: "0 0 2rem",
              opacity: 0,
              animation: "fadeUp 0.65s ease 0.55s forwards",
            }}
          >
            {HOME_HERO.headline2}
          </h1>

          <div
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(0,229,255,0.4)",
              marginBottom: "1.75rem",
              opacity: 0,
              animation: "fadeIn 0.5s ease 0.75s forwards",
            }}
          />

          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
              maxWidth: "580px",
              margin: "0 0 2.5rem",
              opacity: 0,
              animation: "fadeUp 0.65s ease 0.85s forwards",
            }}
          >
            {HOME_HERO.subheadline}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              justifyContent: "center",
              opacity: 0,
              animation: "fadeUp 0.65s ease 1.05s forwards",
            }}
          >
            <Link to="/contact" className="hero-cta-primary">
              {HOME_HERO.cta1} <ArrowRight size={13} />
            </Link>
            <button className="hero-cta-secondary">
              <Play size={13} /> {HOME_HERO.cta2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
