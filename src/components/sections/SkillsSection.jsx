import React from 'react';
import { Smartphone, Zap, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import HolographicCard from '../ui/HolographicCard';
import FlutterLogo from '../common/FlutterLogo';
import { skillCategories } from '../../data/skills';
import '../../styles/skills.css';

export default function SkillsSection() {
  return (
    <section className="sv-skills-section" id="skills">
      <div className="sv-skills-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">CHAPTER 02 // MULTIVERSE CAPABILITIES</span>
          <GlitchText 
            text="MY SUPERPOWERS." 
            as="h2" 
            className="sv-section-title"
            glow="cyan"
          />
        </div>

        {/* PRIMARY HERO SKILL: FLUTTER CENTERPIECE (Dominant Visual) */}
        <div className="sv-flutter-centerpiece">
          <HolographicCard 
            isFeatured={true}
            glowColor="cyan"
          >
            <div className="flutter-feature-card">
              <div className="flutter-feature-left">
                <span className="flutter-badge">
                  <Flame size={13} />
                  <span>PRIMARY DOMAIN SPECIALIZATION</span>
                </span>
                <div className="flutter-title-row">
                  <div className="flutter-logo-icon">
                    <FlutterLogo size={48} />
                  </div>
                  <div>
                    <h3 className="flutter-heading">FLUTTER & DART</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--sv-cyan)' }}>
                      60FPS NATIVE COMPILATION · ANDROID & IOS
                    </p>
                  </div>
                </div>
                <p className="flutter-desc">
                  Flutter is my <strong>core professional identity and engineering home</strong>. With 3.5+ years of dedicated production work, I build apps featuring custom render objects, complex gesture arenas, isolate threading, and deep platform channel bridges.
                </p>
                <div className="flutter-highlights">
                  <span className="flutter-highlight-chip">
                    <CheckCircle2 size={13} color="var(--sv-cyan)" />
                    <span>Riverpod & Clean Architecture</span>
                  </span>
                  <span className="flutter-highlight-chip">
                    <CheckCircle2 size={13} color="var(--sv-cyan)" />
                    <span>9 Play Store Releases</span>
                  </span>
                  <span className="flutter-highlight-chip">
                    <CheckCircle2 size={13} color="var(--sv-cyan)" />
                    <span>8 App Store Releases</span>
                  </span>
                  <span className="flutter-highlight-chip">
                    <CheckCircle2 size={13} color="var(--sv-cyan)" />
                    <span>Zero-Jank Profiling</span>
                  </span>
                </div>
              </div>

              <div className="flutter-feature-right">
                <div className="spec-item">
                  <span className="label">Framework Level:</span>
                  <span className="val">Flutter 3.x Engine</span>
                </div>
                <div className="spec-item">
                  <span className="label">Language Mastery:</span>
                  <span className="val">Dart 3.x Sound Typing</span>
                </div>
                <div className="spec-item">
                  <span className="label">UI Design Systems:</span>
                  <span className="val">Material 3 & Cupertino</span>
                </div>
                <div className="spec-item">
                  <span className="label">Target Environments:</span>
                  <span className="val">Android, iOS, Wearables</span>
                </div>
                <div className="spec-item">
                  <span className="label">Build Orchestration:</span>
                  <span className="val">Fastlane, Gradle, Xcode</span>
                </div>
              </div>
            </div>
          </HolographicCard>
        </div>

        {/* 6 Category Holographic Grid */}
        <div className="sv-categories-grid">
          {skillCategories.map((cat, idx) => (
            <HolographicCard 
              key={cat.id} 
              glowColor={idx % 2 === 0 ? 'red' : 'blue'}
            >
              <div className="category-header">
                <h4 className="category-title">{cat.title}</h4>
                <span className="category-subtitle">{cat.subtitle}</span>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-card-item">
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-tag">{skill.level}</span>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

