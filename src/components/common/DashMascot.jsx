import React, { useState } from 'react';
import { Sparkles, Zap, Heart } from 'lucide-react';

const DASH_QUOTES = [
  "Hot Reload Ready! ⚡ Reassembled in 84ms",
  "9 Apps on Play Store · 8 on App Store! 🚀",
  "True Cross-Platform iOS & Android Delivery! 📱",
  "3.8+ Years of Flutter & Dart Craft! 💙",
  "Everything in Flutter is a Widget! 🧱",
  "Riverpod + Clean Architecture = Perfection 🎯",
  "Production-ready apps with robust state management 📱"
];

export default function DashMascot({ onHotReload, className = '' }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [isWaving, setIsWaving] = useState(false);

  const handleDashClick = () => {
    setIsWaving(true);
    setQuoteIndex((prev) => (prev + 1) % DASH_QUOTES.length);
    setShowBubble(true);
    if (onHotReload) onHotReload();
    setTimeout(() => setIsWaving(false), 800);
  };

  return (
    <div className={`dash-mascot-container ${className}`}>
      {showBubble && (
        <div className="dash-speech-bubble" onClick={() => setShowBubble(false)}>
          <div className="bubble-text">{DASH_QUOTES[quoteIndex]}</div>
          <div className="bubble-arrow" />
        </div>
      )}

      <button
        type="button"
        className={`dash-avatar-btn ${isWaving ? 'is-excited' : ''}`}
        onClick={handleDashClick}
        title="Hi! I'm Dash, the Flutter Hummingbird. Click me for Flutter insights & hot-reload!"
        aria-label="Dash the Flutter Mascot"
      >
        <svg
          viewBox="0 0 160 160"
          className="dash-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dash-belly" x1="40" y1="50" x2="120" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#40C4FF" />
              <stop offset="0.6" stopColor="#0175C2" />
              <stop offset="1" stopColor="#02569B" />
            </linearGradient>
            <linearGradient id="dash-wing-front" x1="20" y1="60" x2="110" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#80D8FF" />
              <stop offset="0.7" stopColor="#0175C2" />
              <stop offset="1" stopColor="#02569B" />
            </linearGradient>
            <linearGradient id="dash-beak" x1="120" y1="55" x2="160" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD54F" />
              <stop offset="1" stopColor="#FF9800" />
            </linearGradient>
            <linearGradient id="dash-tail" x1="20" y1="100" x2="5" y2="145" gradientUnits="userSpaceOnUse">
              <stop stopColor="#02569B" />
              <stop offset="1" stopColor="#004D40" />
            </linearGradient>
            <filter id="dash-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#40C4FF" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Tail Feathers (Origami-style) */}
          <g className="dash-tail">
            <polygon points="45,105 10,135 32,108" fill="url(#dash-tail)" />
            <polygon points="40,112 5,145 28,118" fill="#01579B" />
            <polygon points="35,118 15,152 30,122" fill="#004D40" />
          </g>

          {/* Back Wing */}
          <polygon
            className="dash-wing back"
            points="70,55 35,15 88,48"
            fill="#02569B"
            opacity="0.85"
          />

          {/* Body / Head / Chest (Origami Geometric Hummingbird) */}
          <g filter="url(#dash-glow)">
            {/* Main torso */}
            <polygon points="65,45 118,52 108,118 55,115" fill="url(#dash-belly)" />
            {/* Chest contour */}
            <polygon points="108,52 135,78 108,118" fill="#0175C2" />
            {/* Crown / Head top */}
            <polygon points="75,25 112,28 126,52 65,45" fill="#40C4FF" />
            {/* Chin / throat */}
            <polygon points="126,52 135,78 118,72" fill="#80D8FF" opacity="0.9" />
          </g>

          {/* Sharp Beak */}
          <polygon
            points="126,52 158,64 125,66"
            fill="url(#dash-beak)"
            filter="drop-shadow(0 2px 4px rgba(255,152,0,0.5))"
          />

          {/* Big Dash Eye with Flutter Sparkle */}
          <circle cx="106" cy="46" r="8.5" fill="#0F172A" />
          <circle cx="109" cy="43" r="3.2" fill="#FFFFFF" />
          <circle cx="104" cy="48" r="1.4" fill="#80D8FF" />

          {/* Front Layered Origami Wing (Animated) */}
          <g className="dash-wing front">
            <polygon points="72,62 30,85 78,115" fill="url(#dash-wing-front)" />
            <polygon points="72,62 20,102 58,112" fill="#02569B" opacity="0.65" />
            <polygon points="72,62 48,125 78,115" fill="#0175C2" opacity="0.45" />
          </g>

          {/* Cheek Blush */}
          <ellipse cx="118" cy="62" rx="5" ry="3" fill="#FFAB91" opacity="0.5" />
        </svg>

        <span className="dash-badge">
          <Zap size={11} className="dash-badge-icon" />
          <span>DASH</span>
        </span>
      </button>
    </div>
  );
}
