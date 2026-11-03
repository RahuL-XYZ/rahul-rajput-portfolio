import React from 'react';
import { ArrowRight, Download, ShieldCheck, Activity, Smartphone, Cpu, CheckCircle2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import GlitchText from '../ui/GlitchText';
import FlutterLogo from '../common/FlutterLogo';
import { useUniverse } from '../../context/UniverseContext';
import { downloadResume } from '../../utils/downloadResume';
import rahulPortrait from '../../assets/rahul_rajput.jpg';
import '../../styles/hero.css';

export default function HeroSection() {
  const { universe } = useUniverse();
  const isBatman = universe === 'batman';

  return (
    <section className="sv-hero-section" id="hero">
      <div className="sv-hero-inner">
        {/* Left Column: Mission Brief & Story Reveal */}
        <div className="sv-hero-copy">
          <div className="sv-hero-badge">
            <ShieldCheck size={14} />
            <span>
              {isBatman ? 'WAYNETECH PROTOCOL // PRODUCTION ENGINEER' : 'ORIGINAL PROTOCOL // PRODUCTION ENGINEER'}
            </span>
          </div>

          <h1 className="sv-hero-quote">
            {isBatman ? (
              <>
                <span>IT'S NOT WHO I AM</span><br />
                <span className="accent-red">UNDERNEATH THE CODE,</span><br />
                <span className="accent-blue">BUT WHAT I BUILD DEFINES ME.</span>
              </>
            ) : (
              <>
                <span>WITH GREAT CODE</span><br />
                <span className="accent-red">COMES GREAT</span><br />
                <span className="accent-blue">APPLICATIONS.</span>
              </>
            )}
          </h1>

          <div className="sv-hero-bio-strip">
            <img 
              src={rahulPortrait} 
              alt="Rahul Rajput" 
              className="sv-hero-portrait" 
            />
            <div className="sv-hero-name-block">
              <GlitchText 
                text="RAHUL RAJPUT" 
                as="span" 
                className="sv-hero-name" 
                glow={isBatman ? 'cyan' : 'red'} 
              />
              <span className="sv-hero-title">FLUTTER DEVELOPER | MOBILE APP ENGINEER</span>
            </div>
          </div>

          <p className="sv-hero-desc">
            {isBatman ? (
              <>
                Mobile engineer specializing in <strong>production Flutter architectures</strong> for Android and iOS. 3.8+ years building clean, resilient codebases with 60fps native rendering, offline-first caching, and zero tolerance for dropped frames.
              </>
            ) : (
              <>
                Flutter developer specializing in <strong>production Android and iOS applications</strong>. 3.8+ years building reactive architectures with Riverpod, real-time Firebase sync, smooth animations, and clean, maintainable code.
              </>
            )}
          </p>

          <div className="sv-hero-ctas">
            <MagneticButton 
              href="#projects" 
              variant="primary"
            >
              <span>{isBatman ? 'EXPLORE CASE FILES' : 'EXPLORE MY UNIVERSE'}</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton 
              onClick={downloadResume}
              variant="secondary"
            >
              <span>{isBatman ? 'DOWNLOAD DOSSIER' : 'DOWNLOAD RESUME'}</span>
              <Download size={16} />
            </MagneticButton>
          </div>

          {/* Quick Stats Grid */}
          <div className="sv-hero-stats">
            <div className="sv-hero-stat-item">
              <span className="sv-stat-num">3.8+</span>
              <span className="sv-stat-lbl">{isBatman ? 'Years Field Ops' : 'Years Experience'}</span>
            </div>
            <div className="sv-hero-stat-item">
              <span className="sv-stat-num">09</span>
              <span className="sv-stat-lbl">Play Store Apps</span>
            </div>
            <div className="sv-hero-stat-item">
              <span className="sv-stat-num">08</span>
              <span className="sv-stat-lbl">App Store Apps</span>
            </div>
            <div className="sv-hero-stat-item">
              <span className="sv-stat-num">60fps</span>
              <span className="sv-stat-lbl">Native Polish</span>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Developer Dossier Card */}
        <div className="sv-hero-dossier-card">
          {/* Tactical Corner Crosshairs */}
          <span className="dossier-bracket top-left">+</span>
          <span className="dossier-bracket top-right">+</span>
          <span className="dossier-bracket bottom-left">+</span>
          <span className="dossier-bracket bottom-right">+</span>

          {/* Top HUD Status Bar */}
          <div className="dossier-header">
            <div className="dossier-status-pill">
              <span className="status-dot-pulse" />
              <span>{isBatman ? 'WAYNETECH // DETECTIVE LINK' : 'SPIDER-LINK // ACTIVE ONLINE'}</span>
            </div>
            <span className="dossier-sector-tag">
              {isBatman ? 'SECTOR: GOTHAM CENTRAL' : 'DIMENSION: EARTH-616'}
            </span>
          </div>

          {/* Central Portrait Frame with Hologram Scan Beam */}
          <div className="dossier-portrait-frame">
            <img 
              src={rahulPortrait} 
              alt="Rahul Rajput" 
              className="dossier-portrait-img"
            />
            <div className="dossier-scan-beam" />
            <div className="dossier-portrait-overlay" />
            
            {/* Floating Flutter Hologram Badge */}
            <div className="dossier-floating-badge">
              <div className="floating-badge-icon">
                <FlutterLogo size={24} />
              </div>
              <div className="floating-badge-text">
                <span className="badge-name">FLUTTER SPECIALIST</span>
                <span className="badge-sub">ANDROID & IOS EXPERT</span>
              </div>
            </div>
          </div>

          {/* Metric Matrix Row */}
          <div className="dossier-metrics-grid">
            <div className="dossier-metric-box">
              <span className="dossier-metric-num">3.8+</span>
              <span className="dossier-metric-label">Years Experience</span>
            </div>
            <div className="dossier-metric-box">
              <span className="dossier-metric-num">17+</span>
              <span className="dossier-metric-label">Store Releases</span>
            </div>
            <div className="dossier-metric-box">
              <span className="dossier-metric-num">60</span>
              <span className="dossier-metric-label">FPS Target</span>
            </div>
          </div>

          {/* Capability Tech Chips */}
          <div className="dossier-tech-strip">
            <span className="tech-chip">Flutter</span>
            <span className="tech-chip">Dart</span>
            <span className="tech-chip">Riverpod</span>
            <span className="tech-chip">Firebase</span>
            <span className="tech-chip">REST APIs</span>
            <span className="tech-chip">Stripe</span>
          </div>

          {/* Bottom Terminal Status Line */}
          <div className="dossier-footer">
            <span className="dossier-footer-code">
              {isBatman ? '/// SYSTEM: WAYNETECH OS // RUNTIME: OPTIMAL ///' : '/// SYSTEM: SPIDER-VERSE OS // RUNTIME: OPTIMAL ///'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
