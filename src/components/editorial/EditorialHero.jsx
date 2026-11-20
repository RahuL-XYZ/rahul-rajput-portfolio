import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin, Sparkles, Smartphone, Layers } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';
import rahulImg from '../../assets/rahul_rajput.jpg';
import { usePortfolioMode } from '../../context/PortfolioModeContext';

export default function EditorialHero() {
  const { switchToSpiderVerse } = usePortfolioMode();
  return (
    <section className="ed-hero" id="hero">
      <div className="ed-hero-copy">
        <div className="ed-eyebrow">
          <FlutterLogo size={14} />
          <span>FLUTTER & MOBILE CRAFT / 2022 — 2026</span>
          <span className="eyebrow-dot">·</span>
          <span>9 PLAY STORE · 8 APP STORE RELEASES</span>
        </div>

        <h1 className="hero-disp">
          <span>Cross-platform mobile apps</span>
          <span>engineered for <span className="accent-text">production stability.</span></span>
        </h1>

        <p className="hero-sub">
          Flutter Developer with <strong>3.8+ years of production experience</strong>. Delivered 9 live releases on Google Play and 8 on the Apple App Store with Clean Architecture, Riverpod state management, and real-time Firebase backends.
        </p>

        <div className="hero-ctas">
          <a href="#work" className="btn-primary">
            Explore Shipped Apps <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="ed-hero-aside">
        <div className="credential-card">
          <div className="card-topline">
            <span className="card-badge">PRODUCTION MOBILE ENGINEER</span>
            <span className="status-live">● Available for hire</span>
          </div>

          <div className="card-profile-header">
            <img 
              src={rahulImg}
              alt="Rahul Rajput - Flutter Developer"
              className="card-avatar-img"
              onClick={switchToSpiderVerse}
              style={{ cursor: 'pointer' }}
              title="Click avatar to explore interactive Multiverse Mode"
              role="button"
              tabIndex={0}
              aria-label="Toggle interactive Multiverse Mode"
            />
            <div className="card-bio">
              <h3>Rahul Rajput</h3>
              <p className="card-role">Specialized Flutter & Mobile Developer</p>
              <div className="card-loc">
                <MapPin size={13} />
                <span>Korba, Chhattisgarh · Remote & Relocation Ready</span>
              </div>
            </div>
          </div>

          <div className="card-stats-grid">
            <div className="stat-box">
              <strong className="stat-val">09</strong>
              <span className="stat-lbl">Play Store Apps</span>
            </div>
            <div className="stat-box">
              <strong className="stat-val">08</strong>
              <span className="stat-lbl">App Store Releases</span>
            </div>
            <div className="stat-box">
              <strong className="stat-val">3.8+</strong>
              <span className="stat-lbl">Years In Dart</span>
            </div>
          </div>

          <div className="card-footer-chips">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Riverpod</span>
            <span>Firebase</span>
            <span>Stripe</span>
            <span>Clean Arch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
