import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowRight, Download, Sparkles, ShieldCheck } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import GlitchText from '../ui/GlitchText';
import CityScene from '../three/CityScene';
import GothamCityScene from '../three/GothamCityScene';
import WebParticles from '../three/WebParticles';
import FloatingLogo from '../three/FloatingLogo';
import SuperheroAvatar from '../three/SuperheroAvatar';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';
import { useUniverse } from '../../context/UniverseContext';
import rahulPortrait from '../../assets/rahul_rajput.jpg';
import '../../styles/hero.css';

export default function HeroSection() {
  const mouse = useMousePosition();
  const hasWebGL = useWebGLSupport();
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
                I engineer <strong>powerful, scalable, and beautifully crafted mobile experiences</strong> for Android and iOS. 3.5+ years of Flutter mastery, clean detective-grade architectures, and uncompromising 60fps performance across the enterprise.
              </>
            ) : (
              <>
                I build <strong>powerful, scalable, and beautifully crafted mobile experiences</strong> for Android and iOS. Specializing in high-performance Flutter architectures, real-time Firebase sync, and intuitive UI interactions.
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
              href="#contact" 
              variant="secondary"
            >
              <span>{isBatman ? 'DOWNLOAD DOSSIER' : 'DOWNLOAD RESUME'}</span>
              <Download size={16} />
            </MagneticButton>
          </div>

          {/* Quick Stats Grid */}
          <div className="sv-hero-stats">
            <div className="sv-hero-stat-item">
              <span className="sv-stat-num">3.5+</span>
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

        {/* Right Column: 3D Superhero City Viewport */}
        <div className="sv-hero-viewport">
          <span className="sv-hud-tag-tl">
            {isBatman ? 'WAYNETECH // GOTHAM 3D CAM' : 'SPIDER-OPTIC // 3D CITY CAM'}
          </span>
          <span className="sv-hud-tag-br">
            {isBatman ? 'DRAG TO SCAN GOTHAM SKYLINE // 60 FPS' : 'DRAG TO LOOK AROUND // 60 FPS'}
          </span>

          <div className="sv-hero-canvas-frame">
            {hasWebGL ? (
              <Canvas
                camera={{ position: [0, 4.5, 9.5], fov: 48 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  {isBatman ? (
                    <>
                      <GothamCityScene mouse={mouse} />
                      <FloatingLogo position={[2.0, 3.2, 1.5]} />
                    </>
                  ) : (
                    <>
                      <CityScene mouse={mouse} />
                      <WebParticles count={140} />
                      <FloatingLogo position={[2.0, 3.2, 1.5]} />
                      <SuperheroAvatar mouse={mouse} />
                    </>
                  )}
                </Suspense>
              </Canvas>
            ) : (
              <div className="sv-hero-fallback">
                <img 
                  src={rahulPortrait} 
                  alt="Rahul Rajput" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
