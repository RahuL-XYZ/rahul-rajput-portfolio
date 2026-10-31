import React from 'react';
import './GlitchText.css';

export default function GlitchText({ 
  text, 
  as: Component = 'span', 
  className = '', 
  glow = 'red',
  intensity = 'normal'
}) {
  return (
    <Component 
      className={`glitch-text glow-${glow} intensity-${intensity} ${className}`}
      data-text={text}
    >
      <span className="glitch-text-base">{text}</span>
      <span className="glitch-text-glitch red" aria-hidden="true">{text}</span>
      <span className="glitch-text-glitch blue" aria-hidden="true">{text}</span>
      <span className="glitch-text-glitch cyan" aria-hidden="true">{text}</span>
    </Component>
  );
}

