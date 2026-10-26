import React from 'react';
import { Code2 } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';
import FlutterLogo from '../common/FlutterLogo';
import { skillGroups } from '../../data/skills';

export default function SkillsWindow({ onClose, onMinimize }) {
  return (
    <WindowFrame
      title="Tech Stack & Architecture — System Info"
      badge="DART ECOSYSTEM"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="skills-window">
        <div className="skills-head">
          <div className="skills-orb">
            <FlutterLogo size={34} />
          </div>
          <div>
            <span className="eyebrow">DEVELOPER ARSENAL</span>
            <h2>
              Flutter & Mobile<br />Engineering Stack.
            </h2>
          </div>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-title">
                <span>0{index + 1}</span>
                {group.title}
              </div>
              <div className="skill-chips">
                {group.items.map((skill) => {
                  const isPrimary =
                    skill.includes('Flutter') ||
                    skill === 'Dart' ||
                    skill === 'Riverpod' ||
                    skill.includes('Clean Architecture');
                  return (
                    <span
                      key={skill}
                      className={isPrimary ? 'primary-skill' : ''}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <span className="status-dot" />
          <span>Flutter is my primary specialization · Committed to continuous mobile innovation</span>
        </div>
      </div>
    </WindowFrame>
  );
}
