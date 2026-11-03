import React from 'react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import { experiences, education } from '../../data/experience';
import { useUniverse } from '../../context/UniverseContext';
import '../../styles/experience.css';

export default function ExperienceSection() {
  const { universe } = useUniverse();
  const isBatman = universe === 'batman';

  return (
    <section className="sv-experience-section" id="experience">
      <div className="sv-experience-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">
            {isBatman ? 'FIELD RECORDS // MISSION CHRONOLOGY' : 'CHAPTER 04 // CHRONICLES'}
          </span>
          <GlitchText 
            text={isBatman ? 'MISSION HISTORY.' : 'THE JOURNEY SO FAR.'} 
            as="h2" 
            className="sv-section-title"
            glow={isBatman ? 'cyan' : 'red'}
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
        <div className="sv-education-card">
          <div className="education-header">
            <div className="education-icon-wrap">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4 className="education-degree">{education.degree}</h4>
              <p className="education-institution">{education.institution} · {education.period}</p>
            </div>
          </div>
          <p className="education-focus">{education.focus}</p>
        </div>
      </div>
    </section>
  );
}
