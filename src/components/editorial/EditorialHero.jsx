import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin, Sparkles, Smartphone, Layers } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';

export default function EditorialHero() {
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
          <span>I build cross-platform</span>
          <span>mobile apps that <span className="accent-text">survive the real world.</span></span>
        </h1>

        <p className="hero-sub">
          Flutter Developer with <strong>3.8+ years of production experience</strong>. Delivered 9 live releases on Google Play and 8 on the Apple App Store with Clean Architecture, Riverpod state management, and real-time Firebase backends.
        </p>

        <div className="hero-ctas">
          <a href="#demo" className="btn-primary">
            Try the decision simulator <ArrowDown size={15} />
          </a>
          <a href="#work" className="btn-secondary">
            See the shipped work
          </a>
        </div>
      </div>

      <div className="ed-hero-aside">
        <div className="credential-card">
          <div className="card-topline">
            <span className="card-badge">VERIFIED PRODUCTION ENGINEER</span>
            <span className="status-live">● Available for hire</span>
          </div>

          <div className="card-bio">
            <h3>Rahul Rajput</h3>
            <p className="card-role">Specialized Flutter & Mobile Developer</p>
            <div className="card-loc">
              <MapPin size={13} />
              <span>Korba, Chhattisgarh · Remote & Relocation Ready</span>
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
