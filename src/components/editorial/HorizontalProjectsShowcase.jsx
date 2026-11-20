import React, { useState, useRef, useEffect } from 'react';
import { 
  Apple, 
  Smartphone, 
  ArrowUpRight, 
  CheckCircle2, 
  Images, 
  Pause, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { projects } from '../../data/projects';
import ScreenshotModal from './ScreenshotModal';

export default function HorizontalProjectsShowcase() {
  const [filter, setFilter] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const trackRef = useRef(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'dual') return p.playStore && p.appStore;
    if (filter === 'ai') return p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'));
    return true;
  });

  // Duplicate items for seamless continuous infinite marquee
  const displayItems = [...filteredProjects, ...filteredProjects];

  const handleOpenModal = (project, idx = 0) => {
    setModalProject(project);
    setModalIndex(idx);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="ed-section horizontal-work-sec" id="work">
      {/* Section Header */}
      <div className="horizontal-work-header">
        <div className="horizontal-header-left">
          <div className="section-eyebrow-pill">
            <Sparkles size={12} />
            <span>THE SHIPPED WORK</span>
            <span className="eyebrow-dot">·</span>
            <span>17 STORE RELEASES</span>
          </div>
          <h2 className="horizontal-main-title">
            Production Mobile Applications.
          </h2>
          <p className="horizontal-main-subtitle">
            Every application below is active in production, verifiable by package ID, and shipped to Google Play and Apple App Store.
          </p>
        </div>

        {/* Controls: Filter Chips + Auto-Scroll Play/Pause & Manual Arrows */}
        <div className="horizontal-header-controls">
          <div className="horizontal-filters" role="group" aria-label="Filter mobile projects">
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Apps ({projects.length})
            </button>
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'dual' ? 'active' : ''}`}
              onClick={() => setFilter('dual')}
            >
              Dual Store (8)
            </button>
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Health (4)
            </button>
          </div>

          <div className="horizontal-action-group">
            <button
              type="button"
              className={`hz-ctrl-btn ${isPaused ? 'paused' : ''}`}
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
              <span>{isPaused ? 'Paused' : 'Auto-Scroll'}</span>
            </button>

            <div className="hz-arrows">
              <button
                type="button"
                className="hz-arrow-btn"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="hz-arrow-btn"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Scroll Notice */}
      <div className="horizontal-scroll-hint">
        <span className="pulse-indicator" />
        <span>Continuous auto-scroll enabled · Hover over any project card to inspect</span>
      </div>

      {/* Infinite Horizontal Carousel Track */}
      <div 
        className="horizontal-marquee-wrapper"
        ref={trackRef}
      >
        <div className={`horizontal-marquee-track ${isPaused ? 'is-paused' : ''}`}>
          {displayItems.map((p, idx) => {
            const primaryScreen = p.screenshots?.[0];
            const isDualStore = p.appStoreUrl && p.playStoreUrl;

            return (
              <div 
                key={`${p.id}-${idx}`}
                className="horizontal-project-card"
                onClick={() => handleOpenModal(p, 0)}
              >
                {/* Card Top Brand Info */}
                <div className="hz-card-head">
                  <div className="hz-brand-group">
                    {p.logo && (
                      <img 
                        src={p.logo} 
                        alt={`${p.name} Logo`} 
                        className="hz-app-logo"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h4 className="hz-app-title">{p.name}</h4>
                      <span className="hz-category-tag">{p.category}</span>
                    </div>
                  </div>

                  <div className="hz-badge-wrap">
                    {isDualStore ? (
                      <span className="hz-verified-badge dual">
                        <CheckCircle2 size={11} /> Dual Store
                      </span>
                    ) : (
                      <span className="hz-verified-badge">
                        <CheckCircle2 size={11} /> Live Store
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Phone Preview */}
                <div className="hz-device-preview-box">
                  <div className="hz-phone-bezel">
                    <div className="hz-phone-island" />
                    {primaryScreen ? (
                      <img 
                        src={primaryScreen.src} 
                        alt={`${p.name} Screen`} 
                        className="hz-screen-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="hz-screen-placeholder">
                        <Smartphone size={32} />
                      </div>
                    )}
                    <div className="hz-hover-overlay">
                      <div className="hz-hover-pill">
                        <Maximize2 size={13} />
                        <span>View Gallery ({p.screenshots?.length || 0})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Description & Meta */}
                <div className="hz-card-content">
                  <p className="hz-card-desc">{p.description}</p>

                  <div className="hz-tags-row">
                    {p.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="hz-tech-chip">{tech}</span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="hz-tech-chip more">+{p.stack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Card Footer Store Actions */}
                <div className="hz-card-footer" onClick={(e) => e.stopPropagation()}>
                  <div className="hz-store-links">
                    {p.appStoreUrl && (
                      <a 
                        href={p.appStoreUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hz-store-btn apple"
                        title="View on Apple App Store"
                      >
                        <Apple size={13} /> <span>iOS</span> <ArrowUpRight size={11} />
                      </a>
                    )}
                    {p.playStoreUrl && (
                      <a 
                        href={p.playStoreUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hz-store-btn google"
                        title="View on Google Play Store"
                      >
                        <Smartphone size={13} /> <span>Android</span> <ArrowUpRight size={11} />
                      </a>
                    )}
                    {!p.appStoreUrl && !p.playStoreUrl && (
                      <span className="hz-enterprise-label">Enterprise Deployment</span>
                    )}
                  </div>

                  {p.screenshots && p.screenshots.length > 0 && (
                    <button
                      type="button"
                      className="hz-gallery-trigger"
                      onClick={() => handleOpenModal(p, 0)}
                      title="View all screenshots"
                    >
                      <Images size={13} />
                      <span>{p.screenshots.length} Screens</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Screenshot Lightbox Modal */}
      {modalProject && (
        <ScreenshotModal
          project={modalProject}
          activeIndex={modalIndex}
          onIndexChange={setModalIndex}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
