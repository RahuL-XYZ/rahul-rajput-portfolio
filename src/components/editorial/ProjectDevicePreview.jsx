import React, { useState, useEffect } from 'react';
import { Maximize2, Pause, Play } from 'lucide-react';

export default function ProjectDevicePreview({ project, onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const screenshots = project?.screenshots || [];
  const hasScreenshots = screenshots.length > 0;
  const isTablet = project?.id === 'calcounts-pro';

  // Auto-swipe timer (cycles every 3.2 seconds when not paused or hovered)
  useEffect(() => {
    if (!hasScreenshots || screenshots.length <= 1 || isHovered || isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % screenshots.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [hasScreenshots, screenshots.length, isHovered, isPaused, activeIdx]);

  if (!hasScreenshots) return null;

  const current = screenshots[activeIdx] || screenshots[0];

  const handleSelectScreen = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <div 
      className={`modern-project-preview ${isTablet ? 'is-tablet-preview' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

          {/* Screen Content with Key for smooth fade transition */}
          <div className="device-screen-viewport">
            <img
              key={current.src}
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

      {/* Screen Title & Interactive Screen Switcher Pills */}
      <div className="preview-navigation-dock">
        <div className="preview-caption-headline">
          <div className="caption-headline-row">
            <span className="caption-screen-title">{current.title}</span>
            <button
              type="button"
              className="auto-swipe-pause-btn"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume auto-swipe" : "Pause auto-swipe"}
              aria-label={isPaused ? "Resume auto-swipe" : "Pause auto-swipe"}
            >
              {isPaused ? <Play size={10} /> : <Pause size={10} />}
              <span>{isPaused ? 'Paused' : 'Auto'}</span>
            </button>
          </div>
          <span className="caption-screen-desc">{current.caption}</span>
        </div>

        {/* Thumbnail Selector Pills with Auto-Swipe Progress Indicator */}
        <div className="preview-pills-row" role="tablist" aria-label="Select screen preview">
          {screenshots.map((s, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`preview-selector-pill ${isActive ? 'is-active' : ''} ${isPaused || isHovered ? 'is-paused' : ''}`}
                onClick={() => handleSelectScreen(idx)}
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
