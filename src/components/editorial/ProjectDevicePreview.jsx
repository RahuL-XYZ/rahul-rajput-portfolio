import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function ProjectDevicePreview({ project, onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!project || !project.screenshots || project.screenshots.length === 0) return null;

  const current = project.screenshots[activeIdx] || project.screenshots[0];
  const isTablet = project.id === 'calcounts-pro';

  return (
    <div className={`project-device-showcase ${isTablet ? 'is-tablet-showcase' : ''}`}>
      <div className="showcase-header">
        <div className="showcase-tabs" role="tablist">
          {project.screenshots.map((s, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === activeIdx}
              className={`showcase-tab ${idx === activeIdx ? 'active' : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="tab-idx">0{idx + 1}</span>
              <span className="tab-name">{s.title}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="showcase-expand-btn"
          onClick={() => onOpenModal(project, activeIdx)}
          title="Open high-resolution gallery"
        >
          <Eye size={14} />
          <span>View All ({project.screenshots.length})</span>
        </button>
      </div>

      <div className="showcase-screen-wrap">
        <div
          className={`device-mockup ${isTablet ? 'tablet-mockup' : 'phone-mockup'}`}
          onClick={() => onOpenModal(project, activeIdx)}
        >
          <div className="device-screen-glass">
            <img
              src={current.src}
              alt={`${project.name} - ${current.title}`}
              className="device-screenshot-img"
              loading="lazy"
            />
            <div className="device-overlay-hint">
              <Maximize2 size={18} />
              <span>Click to view full screen</span>
            </div>
          </div>
        </div>

        <div className="showcase-caption-bar">
          <div className="caption-text">
            <strong>{current.title}</strong>
            <p>{current.caption}</p>
          </div>
          <div className="caption-nav">
            <button
              type="button"
              className="cap-nav-btn"
              onClick={() => setActiveIdx((activeIdx - 1 + project.screenshots.length) % project.screenshots.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="cap-counter">{activeIdx + 1} / {project.screenshots.length}</span>
            <button
              type="button"
              className="cap-nav-btn"
              onClick={() => setActiveIdx((activeIdx + 1) % project.screenshots.length)}
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
