import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function WebCanvas() {
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

    // Generate node web points
    const POINT_COUNT = Math.min(Math.floor((width * height) / 38000), 55);
    const points = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        // Spider-Verse dual color accent
        color: Math.random() > 0.4 ? 'rgba(230, 36, 41,' : 'rgba(0, 217, 255,'
      });
    }

    let animationId;
    const MAX_DISTANCE = 160;
    const MOUSE_RADIUS = 180;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse gravity interaction
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < MOUSE_RADIUS && distMouse > 0) {
          const force = (1 - distMouse / MOUSE_RADIUS) * 0.08;
          p.x += dxMouse * force;
          p.y += dyMouse * force;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} 0.6)`;
        ctx.fill();

        // Connect with other points in web formation
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${p.color} ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close (Spider-web shooter connection)
        if (distMouse < MOUSE_RADIUS) {
          const alpha = (1 - distMouse / MOUSE_RADIUS) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(230, 36, 41, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
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
        opacity: 0.65
      }}
      aria-hidden="true"
    />
  );
}

