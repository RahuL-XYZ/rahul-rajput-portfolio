import React, { useState, useEffect, useRef } from 'react';
import { FastForward } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import SoundToggle from '../ui/SoundToggle';
import '../../styles/intro.css';

export default function IntroSequence({ onComplete, isMuted, onToggleAudio }) {
  const [stage, setStage] = useState(0); // 0: initial dark/particle, 1: web spreading, 2: developer story, 3: welcome rahul, 4: complete
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Progressive timer sequence
  useEffect(() => {
    const startTime = Date.now();
    const DURATION = 6200; // 6.2s total cinematic sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(currentProgress);

      if (elapsed > 700 && stage === 0) setStage(1); // particle & web spread
      if (elapsed > 2000 && stage === 1) setStage(2); // "EVERY DEVELOPER HAS A STORY"
      if (elapsed > 4000 && stage === 2) setStage(3); // "WELCOME TO THE WORLD OF RAHUL RAJPUT"
      if (elapsed >= DURATION) {
        clearInterval(interval);
        handleFinish();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [stage]);

  // Procedural Spider-Web animation on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cx = width / 2;
    const cy = height / 2;

    const spokes = 14;
    const rings = 12;
    let growth = 0;

    const drawWeb = () => {
      ctx.clearRect(0, 0, width, height);

      if (stage >= 1) {
        growth = Math.min(growth + 0.03, 1);
        const maxRadius = Math.max(width, height) * 0.75 * growth;

        // Draw radial spokes
        ctx.strokeStyle = 'rgba(230, 36, 41, 0.35)';
        ctx.lineWidth = 1.2;

        for (let i = 0; i < spokes; i++) {
          const angle = (i * 2 * Math.PI) / spokes;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(angle) * maxRadius, cy + Math.sin(angle) * maxRadius);
          ctx.stroke();
        }

        // Draw connecting web rings
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.28)';
        ctx.lineWidth = 1;

        for (let r = 1; r <= rings; r++) {
          const currentR = (r / rings) * maxRadius;
          ctx.beginPath();
          for (let i = 0; i <= spokes; i++) {
            const angle = (i * 2 * Math.PI) / spokes;
            const x = cx + Math.cos(angle) * currentR;
            const y = cy + Math.sin(angle) * currentR;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(drawWeb);
    };

    animationFrameRef.current = requestAnimationFrame(drawWeb);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [stage]);

  const handleFinish = () => {
    setIsExiting(true);
    try {
      sessionStorage.setItem('spiderverse_intro_seen', 'true');
    } catch {}
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  // Keyboard shortcut: Escape or Space to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`sv-intro-overlay ${isExiting ? 'is-exiting' : ''}`}>
      {/* Spider-Web Canvas */}
      <canvas ref={canvasRef} className="sv-intro-canvas" />

      {/* Red Glowing Center Particle */}
      <div className="sv-intro-particle" />

      {/* Lighting Backdrop with City & Superhero Silhouette */}
      <div className={`sv-intro-backdrop ${stage >= 1 ? 'is-revealed' : ''}`}>
        <div className="sv-intro-glow-red" />
        <div className="sv-intro-glow-blue" />
        
        {/* Original Superhero Silhouette SVG */}
        <svg 
          className="sv-intro-silhouette" 
          viewBox="0 0 400 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized arachnid vigilante crouching on skyscraper spire */}
          <path 
            d="M200 120 C185 120 170 135 170 155 C170 170 180 185 190 190 C160 210 140 245 135 290 L120 330 L105 320 L95 350 L125 365 L145 340 C150 380 160 420 185 450 L160 520 L130 525 L125 560 L180 550 L200 480 L220 550 L275 560 L270 525 L240 520 L215 450 C240 420 250 380 255 340 L275 365 L305 350 L295 320 L280 330 L265 290 C260 245 240 210 210 190 C220 185 230 170 230 155 C230 135 215 120 200 120 Z" 
            fill="#080c16" 
            stroke="#1464F4" 
            strokeWidth="2"
          />
          {/* Electric Eye slits */}
          <polygon points="188,148 198,154 186,155" fill="#00D9FF" />
          <polygon points="212,148 202,154 214,155" fill="#00D9FF" />
          {/* Skyscraper Spire Platform */}
          <polygon points="170,490 230,490 220,600 180,600" fill="#05070c" stroke="#E62429" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Dramatic Text Sequencing */}
      <div className="sv-intro-text-container">
        {stage === 2 && (
          <div className="sv-intro-stage-1">
            <p className="sv-intro-sub">EARTH-616 // MISSION LOG</p>
            <GlitchText 
              text="EVERY DEVELOPER HAS A STORY." 
              as="h2" 
              className="sv-intro-headline" 
              glow="red"
              intensity="high"
            />
          </div>
        )}

        {stage >= 3 && (
          <div className="sv-intro-stage-2">
            <p className="sv-intro-sub">ENTER THE MULTIVERSE</p>
            <GlitchText 
              text="WELCOME TO THE WORLD OF RAHUL RAJPUT." 
              as="h1" 
              className="sv-intro-headline" 
              glow="cyan"
              intensity="high"
            />
          </div>
        )}
      </div>

      {/* Skip Controls & Audio Toggle */}
      <div className="sv-intro-controls">
        <SoundToggle isMuted={isMuted} onToggle={onToggleAudio} />
        <button className="sv-intro-skip" onClick={handleFinish}>
          <span>SKIP INTRO</span>
          <FastForward size={14} />
        </button>
      </div>

      {/* Progress Bar at bottom */}
      <div 
        className="sv-intro-progress-bar" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}

