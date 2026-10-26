import React from 'react';
import { Briefcase, GraduationCap, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { experiences, education } from '../../data/experience';
import rahulImg from '../../assets/rahul_rajput.jpg';

export default function EditorialPerson() {
  return (
    <section className="ed-section person-sec" id="person">
      <div className="section-head">
        <span className="section-kicker">THE PERSON</span>
        <h2>Engineering by discipline, mobile craft by habit.</h2>
      </div>

      <div className="person-grid">
        <div className="person-bio-col">
          <div className="person-profile-card">
            <div className="person-photo-frame">
              <img src={rahulImg} alt="Rahul Rajput - Flutter Developer" className="person-photo" />
              <div className="portrait-badge">
                <span className="portrait-dot"></span> 3.8+ Yrs Dart Craft
              </div>
            </div>
            <div className="person-profile-intro">
              <p className="person-lead">
                Based in Korba, Chhattisgarh. I’ve spent the past 3.8+ years turning sprawling mobile requirements into clean, predictable Dart code that passes Apple App Store and Google Play Console review without friction.
              </p>
              <p className="person-callout-note">
                Full-lifecycle delivery: From Figma specs to App Store Connect, Play Console internal tracks, and production rollouts.
              </p>
            </div>
          </div>

          <p className="person-philosophy">
            <strong>Working with me looks like this:</strong> I don’t treat cross-platform development as a shortcut. I write strict Dart type definitions, isolate business logic with Riverpod, and build defensive network handlers so your mobile app never crashes on real-world networks.
          </p>

          <div className="person-principles">
            <div className="principle-item">
              <CheckCircle2 size={16} />
              <span><strong>Clean Architecture:</strong> Separation of domain, data, and presentation layers.</span>
            </div>
            <div className="principle-item">
              <CheckCircle2 size={16} />
              <span><strong>Predictable State:</strong> Riverpod providers without race conditions or memory leaks.</span>
            </div>
            <div className="principle-item">
              <CheckCircle2 size={16} />
              <span><strong>Defensive Offline Caching:</strong> Local SQLite/Hive so screens render instantly.</span>
            </div>
          </div>
        </div>

        <div className="person-timeline-col">
          <h3 className="subhead-title">
            <Briefcase size={16} /> Career History
          </h3>
          <div className="career-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="career-item">
                <span className="career-period">{exp.period}</span>
                <h4 className="career-role">{exp.role} · {exp.level}</h4>
                <p className="career-company">{exp.company}</p>
                <ul className="career-points">
                  {exp.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="subhead-title edu-head">
            <GraduationCap size={16} /> Education
          </h3>
          <div className="edu-list">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-item">
                <span className="edu-period">{edu.period}</span>
                <strong>{edu.degree}</strong>
                <p>{edu.field} — {edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
