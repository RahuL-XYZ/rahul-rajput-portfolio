import React from 'react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import { experiences, education } from '../../data/experience';
import '../../styles/experience.css';

export default function ExperienceSection() {
  return (
    <section className="sv-experience-section" id="experience">
      <div className="sv-experience-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">CHAPTER 04 // CHRONICLES</span>
          <GlitchText 
            text="THE JOURNEY SO FAR." 
            as="h2" 
            className="sv-section-title"
            glow="red"
          />
        </div>

        {/* Vertical Timeline */}
        <div className="sv-timeline-container">
          <div className="sv-timeline-spine" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item-card">
              <span className="timeline-node" />

              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.level} · {exp.company}</p>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>

              <div className="timeline-highlights">
                {exp.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="timeline-highlight-point">
                    <span className="timeline-bullet">▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Foundation Dossier */}
        <div style={{ marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <GraduationCap size={20} color="var(--sv-cyan)" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: 'var(--sv-white)', letterSpacing: '0.04em' }}>
              ACADEMIC DOSSIER & CREDENTIALS
            </h3>
          </div>

          <div className="sv-edu-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-institution">{edu.field ? `${edu.field} · ` : ''}{edu.institution}</p>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

