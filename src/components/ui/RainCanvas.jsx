import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function RainCanvas() {
  const canvasRef = useRef(null);
  const mouse = useMousePosition();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Gotham Rain Drops
    const DROP_COUNT = Math.min(Math.floor((width * height) / 10000), 160);
    const drops = [];

    for (let i = 0; i < DROP_COUNT; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 12,
        speed: Math.random() * 10 + 14,
        slant: -2.5, // Wind slant from right
        opacity: Math.random() * 0.35 + 0.15,
        width: Math.random() * 1.2 + 0.6
      });
    }

    // Splash particles
    const splashes = [];
    const createSplash = (x, y) => {
      if (splashes.length > 50) return;
      for (let s = 0; s < 3; s++) {
        splashes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: -Math.random() * 3 - 1,
          radius: Math.random() * 1.5 + 0.5,
          life: 1,
          decay: Math.random() * 0.08 + 0.05
        });
      }
    };

    // Lightning Flash State
    let lightningOpacity = 0;
    let nextLightningTime = Date.now() + 4000 + Math.random() * 6000;

    let animationId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check lightning trigger
      const now = Date.now();
      if (now > nextLightningTime) {
        lightningOpacity = 0.55;
        nextLightningTime = now + 5000 + Math.random() * 7000;
      }

      // Draw lightning flash background if active
      if (lightningOpacity > 0.01) {
        ctx.fillStyle = `rgba(180, 210, 245, ${lightningOpacity * 0.35})`;
        ctx.fillRect(0, 0, width, height);
        lightningOpacity *= 0.88; // decay
      }

      // Draw & update rain drops
      ctx.lineCap = 'round';
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        // Draw raindrop streak
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.slant * (d.length / 10), d.y + d.length);
        ctx.strokeStyle = `rgba(160, 195, 235, ${d.opacity})`;
        ctx.lineWidth = d.width;
        ctx.stroke();

        // Advance raindrop
        d.x += d.slant;
        d.y += d.speed;

        // Mouse umbrella / particle deflection
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90 && dist > 0) {
          d.x -= (dx / dist) * 6;
          if (Math.random() < 0.2) {
            createSplash(d.x, d.y);
          }
        }

        // Reset if offscreen
        if (d.y > height) {
          if (Math.random() < 0.4) {
            createSplash(d.x, height - 2);
          }
          d.y = -20;
          d.x = Math.random() * (width + 100);
        }
        if (d.x < -50) {
          d.x = width + 50;
        }
      }

      // Draw splashes
      for (let i = splashes.length - 1; i >= 0; i--) {
        const sp = splashes[i];
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 225, 255, ${sp.life * 0.5})`;
        ctx.fill();

        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vy += 0.2; // gravity
        sp.life -= sp.decay;

        if (sp.life <= 0) {
          splashes.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [mouse.x, mouse.y, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
      aria-hidden="true"
    />
  );
}
