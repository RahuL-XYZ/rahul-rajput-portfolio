import React from 'react';
import { Smartphone, Zap, Sparkles, CheckCircle2, Flame, ShieldAlert } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import HolographicCard from '../ui/HolographicCard';
import FlutterLogo from '../common/FlutterLogo';
import { skillCategories } from '../../data/skills';
import { useUniverse } from '../../context/UniverseContext';
import '../../styles/skills.css';

export default function SkillsSection() {
  const { universe } = useUniverse();
  const isBatman = universe === 'batman';

  return (
    <section className="sv-skills-section" id="skills">
      <div className="sv-skills-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">
            {isBatman ? 'WAYNETECH INVENTORY // TECHNICAL ARSENAL' : 'CHAPTER 02 // MULTIVERSE CAPABILITIES'}
          </span>
          <GlitchText 
            text={isBatman ? 'MY TECHNOLOGY ARSENAL.' : 'MY SUPERPOWERS.'} 
            as="h2" 
            className="sv-section-title"
            glow={isBatman ? 'cyan' : 'cyan'}
          />
        </div>

        {/* PRIMARY HERO SKILL: FLUTTER CENTERPIECE (Dominant Visual) */}
        <div className="sv-flutter-centerpiece">
          <HolographicCard 
            isFeatured={true}
            glowColor={isBatman ? 'cyan' : 'cyan'}
          >
            <div className="flutter-feature-card">
              <div className="flutter-feature-left">
                <span className="flutter-badge">
                  {isBatman ? <ShieldAlert size={13} /> : <Flame size={13} />}
                  <span>{isBatman ? 'PRIMARY TACTICAL ASSET' : 'PRIMARY DOMAIN SPECIALIZATION'}</span>
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
                    <span>Isolates & Background Threading</span>
                  </span>
                </div>
              </div>

              <div className="flutter-feature-right">
                <div className="flutter-metrics-box">
                  <div className="metric-cell">
                    <span className="metric-val">3.5+</span>
                    <span className="metric-lbl">Years Full-Time</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">17+</span>
                    <span className="metric-lbl">Total Stores Live</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">60</span>
                    <span className="metric-lbl">Target FPS</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">100%</span>
                    <span className="metric-lbl">Native Polish</span>
                  </div>
                </div>
              </div>
            </div>
          </HolographicCard>
        </div>

        {/* Secondary Skills Holographic Grid */}
        <div className="sv-skills-grid">
          {skillCategories.map((category) => (
            <HolographicCard 
              key={category.id}
              className="skill-category-card"
            >
              <div className="category-header">
                <span className="category-kicker">{category.kicker}</span>
                <h4 className="category-title">{category.title}</h4>
              </div>

              <div className="skills-badge-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge-item">
                    <div className="skill-badge-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-tag">{skill.level}</span>
                    </div>
                    {skill.desc && (
                      <span className="skill-badge-desc">{skill.desc}</span>
                    )}
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
