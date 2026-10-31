import React from 'react';
import { Smartphone, Zap, Cpu, Award, Sparkles } from 'lucide-react';
import ComicPanel from '../ui/ComicPanel';
import GlitchText from '../ui/GlitchText';
import rahulPortrait from '../../assets/rahul_rajput.jpg';
import '../../styles/about.css';

export default function AboutSection() {
  return (
    <section className="sv-about-section" id="about">
      <div className="sv-about-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">CHAPTER 01 // THE ORIGIN</span>
          <GlitchText 
            text="EVERY HERO HAS AN ORIGIN STORY." 
            as="h2" 
            className="sv-section-title"
            glow="red"
          />
        </div>

        {/* Comic Book Grid Panels */}
        <div className="sv-comic-grid">
          {/* Panel 1: The Spark & Professional Journey */}
          <ComicPanel 
            className="comic-col-7"
            kicker="GENESIS & CRAFT"
            issueNo="01"
            title="THE PASSION FOR MOBILE RUNTIMES"
            variant="red-accent"
            angle="left"
          >
            <p className="comic-body-text">
              My engineering journey began with an obsession: <strong>how do you craft mobile experiences so smooth, responsive, and seamless that the interface vanishes between the user and their intent?</strong>
            </p>
            <p className="comic-body-text">
              Over the past <strong>3.5+ years</strong>, that obsession evolved into battle-tested production mastery. As an Associate Software Engineer at <strong>Codiant (A YASH Technologies Company)</strong>, I have designed and delivered end-to-end architectures across food delivery, AI health analysis, peer-to-peer marketplaces, and doctor encounter assistants.
            </p>
            <div className="comic-quote-callout">
              "Flutter isn't just a toolkit for me — it's the web-shooter that lets me swing across platforms without sacrificing a single frame of performance."
            </div>
          </ComicPanel>

          {/* Panel 2: The Portrait Dossier */}
          <ComicPanel 
            className="comic-col-5"
            kicker="HERO DOSSIER"
            issueNo="02"
            title="RAHUL RAJPUT"
            variant="cyan-accent"
            angle="right"
          >
            <div className="comic-portrait-wrap">
              <img 
                src={rahulPortrait} 
                alt="Rahul Rajput" 
                className="comic-portrait-img" 
              />
              <div className="comic-portrait-overlay" />
              <span className="comic-portrait-caption">STATUS: 9 PLAY STORE · 8 APP STORE RELEASES</span>
            </div>
            <p className="comic-body-text" style={{ marginTop: '16px' }}>
              Specialized Flutter Developer focused on <strong>Clean Architecture, Riverpod state management, and real-time backend synchronization</strong>.
            </p>
          </ComicPanel>

          {/* Panel 3: Clean Architecture & Engineering Philosophy */}
          <ComicPanel 
            className="comic-col-6"
            kicker="CODE DISCIPLINE"
            issueNo="03"
            title="CLEAN ARCHITECTURE & RUNTIME RIGOR"
            variant="blue-accent"
          >
            <p className="comic-body-text">
              Great mobile apps don't just look visually stunning; they hold up when a network packet drops in an elevator or an unexpected edge-case payload hits the deserializer.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--sv-white)' }}>
                <Cpu size={16} color="var(--sv-cyan)" />
                <span><strong>Predictable State:</strong> Decoupled business logic with Riverpod providers & MVVM separation.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--sv-white)' }}>
                <Zap size={16} color="var(--sv-red-bright)" />
                <span><strong>Zero-Jank 60fps UI:</strong> Aggressive rebuild minimization, RepaintBoundaries, and microtask offloading.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--sv-white)' }}>
                <Smartphone size={16} color="var(--sv-cyan)" />
                <span><strong>Production Resilient:</strong> Offline caching, optimistic updates, and strict token auto-refresh flows.</span>
              </li>
            </ul>
          </ComicPanel>

          {/* Panel 4: Multiverse Toolkit & Mission Philosophy */}
          <ComicPanel 
            className="comic-col-6"
            kicker="SUPERHERO CODE"
            issueNo="04"
            title="THE DEVELOPER PHILOSOPHY"
            variant="red-accent"
          >
            <p className="comic-body-text">
              Every release is a commitment to the user. Whether engineering an AI food scanner or processing secure Stripe deposits, every screen is treated with the precision of a high-stakes mission.
            </p>
            <div className="sv-philosophy-banner">
              <div className="sv-philosophy-icon">
                <Award size={24} />
              </div>
              <div className="sv-philosophy-text">
                <h4>THE GOLDEN RULE</h4>
                <p>"Code as if the next developer to maintain your codebase is a superhero who knows where you live."</p>
              </div>
            </div>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
}

