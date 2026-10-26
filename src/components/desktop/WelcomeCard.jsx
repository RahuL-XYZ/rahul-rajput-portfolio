import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PhoneMockup from '../common/PhoneMockup';
import FlutterLogo from '../common/FlutterLogo';

export default function WelcomeCard({ welcomeRef, onOpenApp, onHotReload, isDark = true }) {
  return (
    <div className="welcome-card" ref={welcomeRef}>
      <div className="welcome-copy">
        <div className="eyebrow">
          <FlutterLogo size={14} />
          <span>FLUTTER & MOBILE CRAFT</span>
          <span className="eyebrow-sep">/</span>
          <span className="eyebrow-tech">9 ON PLAY STORE · 8 ON APP STORE</span>
        </div>

        <h1>
          Flutter Developer.<br />
          iOS & Android Apps<br />
          <em>Shipped to Production.</em>
        </h1>

        <p>
          Specialized in cross-platform mobile engineering with <strong>3.8+ years of production experience</strong>. Shipped 9 live applications on Google Play and 8 on the Apple App Store using Riverpod, Clean Architecture, and robust Firebase backends.
        </p>

        <div className="welcome-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onOpenApp('projects')}
          >
            Explore iOS & Android Apps <ArrowUpRight size={15} />
          </button>
          <button
            type="button"
            className="text-button"
            onClick={() => onOpenApp('about')}
          >
            About my journey <ArrowDownRight size={15} />
          </button>
        </div>
      </div>

      <div className="hero-mockup-stage">
        <PhoneMockup onOpenApp={onOpenApp} />
      </div>

      <div className="welcome-bottom">
        <span>BUILT WITH FLUTTER & DART · 2022—2026</span>
        <span className="bottom-tech">
          ENGINEERED WITH <FlutterLogo size={12} className="inline-flutter-icon" /> FLUTTER & DART
        </span>
      </div>
    </div>
  );
}
