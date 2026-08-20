import React, { useEffect, useRef } from 'react';

export const BlossomFallingLeaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Blossom Petal class
    const petalCount = 45;
    const petals = [];

    const petalColors = [
      'rgba(255, 183, 197, 0.85)',
      'rgba(255, 209, 220, 0.9)',
      'rgba(255, 192, 203, 0.8)',
      'rgba(254, 219, 228, 0.95)',
      'rgba(244, 166, 186, 0.75)',
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20 - Math.random() * 50;
        this.size = 8 + Math.random() * 14;
        this.speedY = 1.2 + Math.random() * 1.8;
        this.speedX = -0.5 + Math.random() * 1.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.swaySpeed = 0.02 + Math.random() * 0.02;
        this.swayMagnitude = 0.8 + Math.random() * 1.2;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.opacity = 0.6 + Math.random() * 0.4;
      }

      update() {
        this.y += this.speedY;
        this.swayAngle += this.swaySpeed;
        this.x += this.speedX + Math.sin(this.swayAngle) * this.swayMagnitude;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;

        // Draw curved organic petal shape
        context.beginPath();
        context.moveTo(0, -this.size);
        context.bezierCurveTo(
          this.size * 0.75, -this.size * 0.5,
          this.size * 0.75, this.size * 0.5,
          0, this.size
        );
        context.bezierCurveTo(
          -this.size * 0.75, this.size * 0.5,
          -this.size * 0.75, -this.size * 0.5,
          0, -this.size
        );
        context.fill();

        // Subtle center petal vein
        context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        context.lineWidth = 0.8;
        context.beginPath();
        context.moveTo(0, -this.size * 0.7);
        context.lineTo(0, this.size * 0.7);
        context.stroke();

        context.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[140] pointer-events-none w-full h-full"
    />
  );
};
