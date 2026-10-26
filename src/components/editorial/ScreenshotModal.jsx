import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Apple, Smartphone, ExternalLink } from 'lucide-react';

export default function ScreenshotModal({ project, activeIndex, onClose, onIndexChange }) {
  if (!project || !project.screenshots || project.screenshots.length === 0) return null;

  const currentScreen = project.screenshots[activeIndex] || project.screenshots[0];
  const total = project.screenshots.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndexChange((activeIndex + 1) % total);
      if (e.key === 'ArrowLeft') onIndexChange((activeIndex - 1 + total) % total);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total, onClose, onIndexChange]);

  return (
    <div className="shot-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="shot-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="shot-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="shot-modal-header">
          <div>
            <span className="shot-modal-kicker">{project.type} · {project.name}</span>
            <h3 className="shot-modal-title">{currentScreen.title}</h3>
            <p className="shot-modal-caption">{currentScreen.caption}</p>
          </div>
          <div className="shot-modal-counter">
            {activeIndex + 1} / {total}
          </div>
        </div>

        <div className="shot-modal-viewer">
          {total > 1 && (
            <button
              type="button"
              className="shot-nav-btn prev"
              onClick={() => onIndexChange((activeIndex - 1 + total) % total)}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="shot-img-container">
            <img
              src={currentScreen.src}
              alt={`${project.name} - ${currentScreen.title}`}
              className="shot-modal-img"
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              className="shot-nav-btn next"
              onClick={() => onIndexChange((activeIndex + 1) % total)}
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Thumbnail Strip */}
        <div className="shot-thumb-strip">
          {project.screenshots.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`shot-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => onIndexChange(idx)}
            >
              <img src={s.src} alt="" />
              <span>{idx + 1}</span>
            </button>
          ))}
        </div>

        <div className="shot-modal-footer">
          <div className="shot-store-links">
            {project.appStoreUrl && (
              <a href={project.appStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                <Apple size={14} /> App Store <ExternalLink size={12} />
              </a>
            )}
            {project.playStoreUrl && (
              <a href={project.playStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                <Smartphone size={14} /> Google Play <ExternalLink size={12} />
              </a>
            )}
          </div>
          <span className="shot-package-id">Package: {project.packageId || 'Enterprise proprietary'}</span>
        </div>
      </div>
    </div>
  );
}
