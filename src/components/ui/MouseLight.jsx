import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function MouseLight() {
  const { x, y } = useMousePosition();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(
          circle, 
          rgba(230, 36, 41, 0.07) 0%, 
          rgba(20, 100, 244, 0.05) 35%, 
          transparent 70%
        )`,
        pointerEvents: 'none',
        zIndex: 1,
        borderRadius: '50%',
        willChange: 'transform'
      }}
      aria-hidden="true"
    />
  );
}

