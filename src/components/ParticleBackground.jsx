import { useEffect, useRef, useCallback } from 'react';

const PARTICLE_COUNT = 120;
const BASE_SPEED = 0.4;
const CONNECTION_DIST = 120;
const CURSOR_RADIUS = 180;
const COLORS = [
  [139, 92, 246],   // violet
  [6, 182, 212],    // cyan
  [99, 102, 241],   // indigo
  [232, 121, 249],  // fuchsia
  [34, 211, 238],   // sky
];

function makeParticle(W, H) {
  const col = COLORS[Math.floor(Math.random() * COLORS.length)];
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * BASE_SPEED,
    vy: (Math.random() - 0.5) * BASE_SPEED,
    r: Math.random() * 2 + 1,
    col,
    phase: Math.random() * Math.PI * 2,  // for wavy movement
    waveAmp: Math.random() * 0.6 + 0.2,
    waveFreq: Math.random() * 0.02 + 0.008,
    baseVx: (Math.random() - 0.5) * BASE_SPEED,
    baseVy: (Math.random() - 0.5) * BASE_SPEED,
  };
}

export function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const particles = useRef([]);
  const tick = useRef(0);

  const init = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const W = c.width = window.innerWidth;
    const H = c.height = window.innerHeight;
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => makeParticle(W, H));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    init();

    const onResize = () => init();
    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onTouch = (e) => {
      if (e.touches[0]) mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchmove', onTouch, { passive: true });

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      tick.current++;

      // Dark bg fill
      ctx.fillStyle = '#08080B';
      ctx.fillRect(0, 0, W, H);

      const pts = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const t = tick.current;

      // Update
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.phase += 0.018;

        // Wave motion: sine offset on velocity
        const waveX = Math.sin(p.phase + t * p.waveFreq) * p.waveAmp;
        const waveY = Math.cos(p.phase * 0.7 + t * p.waveFreq) * p.waveAmp;

        // Cursor repel/attract
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let cx = 0, cy = 0;
        if (dist < CURSOR_RADIUS && dist > 0) {
          // Gently push particles away from cursor (repel)
          const force = ((CURSOR_RADIUS - dist) / CURSOR_RADIUS) * 0.025;
          cx = -(dx / dist) * force;
          cy = -(dy / dist) * force;
        }

        p.vx = p.baseVx + waveX + cx;
        p.vy = p.baseVy + waveY + cy;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      }

      // Draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.22;
            const [r, g, b] = pts[i].col;
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Cursor ripple glow
      if (mx > 0 && mx < W && my > 0 && my < H) {
        // Outer soft glow
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, CURSOR_RADIUS);
        grd.addColorStop(0, 'rgba(6,182,212,0.07)');
        grd.addColorStop(0.5, 'rgba(139,92,246,0.03)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(mx, my, CURSOR_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Lines from nearby particles to cursor
        for (let i = 0; i < pts.length; i++) {
          const dx = pts[i].x - mx;
          const dy = pts[i].y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CURSOR_RADIUS * 0.65) {
            const alpha = (1 - d / (CURSOR_RADIUS * 0.65)) * 0.4;
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const [r, g, b] = p.col;
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < CURSOR_RADIUS;
        const radius = near ? p.r * 1.8 : p.r;
        const alpha = near ? 0.9 : 0.55;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.shadowBlur = near ? 16 : 6;
        ctx.shadowColor = `rgba(${r},${g},${b},0.7)`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchmove', onTouch);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
