import React from 'react';
import { Smartphone, CheckCircle2, Star, ShieldCheck, Layers, ExternalLink } from 'lucide-react';
import FlutterLogo from './FlutterLogo';
import baurowLogo from '../../assets/projects/baurow_logo.png';
import calcountsLogo from '../../assets/projects/calcounts_logo.png';

export default function PhoneMockup({ screenshot = null, onOpenApp }) {
  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-mockup-chassis">
        {/* Dynamic Island / Notch */}
        <div className="phone-island">
          <span className="phone-camera" />
        </div>

        {/* Status Bar */}
        <div className="phone-status-bar">
          <span className="phone-time">9:41</span>
          <div className="phone-status-icons">
            <span className="status-signal">●●●●</span>
            <span className="status-battery">100%</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="phone-screen-content">
          {screenshot ? (
            <img src={screenshot} alt="Flutter App Preview" className="phone-screen-image" />
          ) : (
            <div className="phone-app-preview">
              {/* In-app header */}
              <div className="preview-app-header">
                <div className="preview-logo-badge">
                  <FlutterLogo size={16} />
                </div>
                <div>
                  <h4>Flutter Showcase</h4>
                  <span>Rahul Rajput · 3.8+ Yrs</span>
                </div>
              </div>

              {/* Stat card */}
              <div className="preview-metrics-card">
                <div className="preview-stat-item">
                  <strong>9</strong>
                  <span>Play Store</span>
                </div>
                <div className="preview-stat-divider" />
                <div className="preview-stat-item">
                  <strong>8</strong>
                  <span>App Store</span>
                </div>
                <div className="preview-stat-divider" />
                <div className="preview-stat-item">
                  <strong>100%</strong>
                  <span>Flutter</span>
                </div>
              </div>

              {/* Recent Shipped Apps List */}
              <div className="preview-apps-list">
                <div className="preview-app-row">
                  <img src={baurowLogo} alt="Baurow" className="preview-app-thumb" />
                  <div className="preview-app-info">
                    <strong>Baurow</strong>
                    <span>Rental Marketplace · Stripe</span>
                  </div>
                  <span className="preview-pill">Live</span>
                </div>

                <div className="preview-app-row">
                  <img src={calcountsLogo} alt="CalCounts" className="preview-app-thumb" />
                  <div className="preview-app-info">
                    <strong>CalCounts</strong>
                    <span>AI Nutrition & Macro Tracker</span>
                  </div>
                  <span className="preview-pill">Live</span>
                </div>
              </div>

              {/* Highlight badge */}
              <div className="preview-arch-badge">
                <ShieldCheck size={13} />
                <span>Riverpod + Clean Architecture</span>
              </div>
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="phone-home-indicator" />
      </div>
    </div>
  );
}
