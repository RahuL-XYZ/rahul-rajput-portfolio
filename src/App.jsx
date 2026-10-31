import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Layout & Core UI
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import MouseLight from './components/ui/MouseLight';
import WebCanvas from './components/ui/WebCanvas';

// Sections
import IntroSequence from './components/sections/IntroSequence';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TerminalSection from './components/sections/TerminalSection';
import ContactSection from './components/sections/ContactSection';

// Hooks
import { useAudio } from './hooks/useAudio';
import { useReducedMotion } from './hooks/useReducedMotion';

// Styles
import './styles/base.css';
import './styles/responsive.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return sessionStorage.getItem('spiderverse_intro_seen') !== 'true';
    } catch {
      return true;
    }
  });

  const [activeSection, setActiveSection] = useState('hero');
  const { isMuted, toggleMute, playSound } = useAudio();
  const prefersReduced = useReducedMotion();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [prefersReduced]);

  // Track active section for navigation
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'terminal', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="spiderverse-app">
      {/* Intro sequence overlay (Session-based, skippable) */}
      {showIntro && (
        <IntroSequence 
          onComplete={() => setShowIntro(false)}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
        />
      )}

      {/* Spider-Verse Ambience & Reactive Layers */}
      <CustomCursor />
      <MouseLight />
      <WebCanvas />

      {/* Main Navigation */}
      <Navigation 
        activeSection={activeSection}
        isMuted={isMuted}
        onToggleAudio={toggleMute}
      />

      {/* Cinematic Main Flow */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TerminalSection onPlaySound={playSound} />
        <ContactSection onPlaySound={playSound} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
