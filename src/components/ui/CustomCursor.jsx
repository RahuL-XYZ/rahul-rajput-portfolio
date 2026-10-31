import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import '../../styles/cursor.css';

export default function CustomCursor() {
  const { x, y, isHoveringInteractive, isMouseDown } = useMousePosition();
  const ringRef = useRef(null);
  const ringPosRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  // Smooth lerp for outer crosshair ring
  useEffect(() => {
    const follow = () => {
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x}px`;
        ringRef.current.style.top = `${ringPosRef.current.y}px`;
      }

      animFrameRef.current = requestAnimationFrame(follow);
    };

    animFrameRef.current = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [x, y]);

  return (
    <div 
      className={`custom-cursor-container ${isHoveringInteractive ? 'is-hovering' : ''} ${isMouseDown ? 'is-down' : ''}`}
      aria-hidden="true"
    >
      <div 
        className="custom-cursor-dot" 
        style={{ left: `${x}px`, top: `${y}px` }} 
      />
      <div 
        ref={ringRef} 
        className="custom-cursor-ring" 
      />
    </div>
  );
}

