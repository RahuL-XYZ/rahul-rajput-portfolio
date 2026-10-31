import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isHoveringInteractive: false,
    isMouseDown: false
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const normalizedX = (clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(clientY / window.innerHeight) * 2 + 1;

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target && (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive')
        )
      );

      setMousePosition(prev => ({
        ...prev,
        x: clientX,
        y: clientY,
        normalizedX,
        normalizedY,
        isHoveringInteractive: isInteractive
      }));
    };

    const handleMouseDown = () => {
      setMousePosition(prev => ({ ...prev, isMouseDown: true }));
    };

    const handleMouseUp = () => {
      setMousePosition(prev => ({ ...prev, isMouseDown: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return mousePosition;
}

