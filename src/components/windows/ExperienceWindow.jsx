import React from 'react';
import WindowFrame from '../common/WindowFrame';
import { experiences } from '../../data/experience';

export default function ExperienceWindow({ onClose, onMinimize }) {
  return (
    <WindowFrame
      title="Experience — Mobile Engineering Log"
      badge="CAREER LOG"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="experience-window">
        <div className="eyebrow">PROFESSIONAL TIMELINE / 2022 — PRESENT</div>
        <h2>
          Building Production Apps<br />That Scale With Impact
          <span className="cyan-dot">.</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className={`timeline-marker ${exp.current ? 'current' : ''}`} />
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-main">
                <h3>
                  {exp.role} <span>· {exp.level}</span>
                </h3>
                <p>{exp.company}</p>
                <ul>
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-footnote">
          Timeline covers 9 Google Play and 8 Apple App Store shipped releases across 3.8+ years of professional mobile engineering.
        </div>
      </div>
    </WindowFrame>
  );
}
