import React, { useState } from 'react';
import { Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectDevicePreview({ project, onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!project || !project.screenshots || project.screenshots.length === 0) return null;

  const current = project.screenshots[activeIdx] || project.screenshots[0];
  const isTablet = project.id === 'calcounts-pro';

  return (
    <div className={`modern-project-preview ${isTablet ? 'is-tablet-preview' : ''}`}>
      {/* Phone / Tablet Bezel Frame */}
      <div className="preview-device-container">
        <div
          className={`modern-device-frame ${isTablet ? 'modern-tablet-frame' : 'modern-phone-frame'}`}
          onClick={() => onOpenModal(project, activeIdx)}
          title="Click to view full-resolution screenshot"
        >
          {/* Dynamic Island / Camera Notch */}
          {!isTablet && <div className="device-dynamic-island" />}
          {isTablet && <div className="tablet-camera-notch" />}

          {/* Screen Content */}
          <div className="device-screen-viewport">
            <img
              src={current.src}
              alt={`${project.name} — ${current.title}`}
              className="device-active-screen"
              loading="lazy"
              decoding="async"
            />
            {/* Hover overlay hint */}
            <div className="device-hover-glass">
              <div className="hover-pill">
                <Maximize2 size={14} />
                <span>Enlarge Full Resolution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Title & Interactive Screen Switcher Pills (Replaces clunky < > buttons) */}
      <div className="preview-navigation-dock">
        <div className="preview-caption-headline">
          <span className="caption-screen-title">{current.title}</span>
          <span className="caption-screen-desc">{current.caption}</span>
        </div>

        {/* Thumbnail Selector Pills */}
        <div className="preview-pills-row" role="tablist" aria-label="Select screen preview">
          {project.screenshots.map((s, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`preview-selector-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                title={`Switch to screen ${idx + 1}: ${s.title}`}
              >
                <span className="pill-dot" />
                <span className="pill-label">{s.title || `Screen ${idx + 1}`}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
