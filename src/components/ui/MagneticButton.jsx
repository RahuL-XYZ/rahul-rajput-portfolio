import React, { useRef, useState } from 'react';
import './MagneticButton.css';

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick, 
  href, 
  variant = 'primary', // 'primary' | 'secondary' | 'cyan' | 'ghost'
  target,
  rel,
  download
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const pullStrength = 0.28;
    const deltaX = (clientX - centerX) * pullStrength;
    const deltaY = (clientY - centerY) * pullStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      className={`sv-magnetic-btn sv-btn-${variant} ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      download={download}
    >
      <span className="sv-btn-backdrop" />
      <span className="sv-btn-content">{children}</span>
      <span className="sv-btn-scanner" />
    </Component>
  );
}

