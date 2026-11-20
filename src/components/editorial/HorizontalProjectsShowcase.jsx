import React, { useState } from 'react';
import { 
  Apple, 
  Smartphone, 
  ArrowUpRight, 
  CheckCircle2, 
  Images, 
  Pause, 
  Play, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { projects } from '../../data/projects';
import ScreenshotModal from './ScreenshotModal';

export default function HorizontalProjectsShowcase() {
  const [filter, setFilter] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  // Exclude Kharcha Paani (displayed exclusively in the dedicated Web Projects / Admin section)
  const mobileProjects = projects.filter((p) => p.id !== 'kharcha-paani');

  const dualCount = mobileProjects.filter(p => p.playStore && p.appStore).length;
  const aiCount = mobileProjects.filter(p => p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'))).length;

  const filteredProjects = mobileProjects.filter((p) => {
    if (filter === 'dual') return p.playStore && p.appStore;
    if (filter === 'ai') return p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'));
    return true;
  });

  // Ensure each track has enough cards to cleanly fill any screen resolution before looping
  const displayProjects = filteredProjects.length > 0 && filteredProjects.length < 6
    ? [...filteredProjects, ...filteredProjects]
    : filteredProjects;

  const handleOpenModal = (project, idx = 0) => {
    setModalProject(project);
    setModalIndex(idx);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const renderProjectCard = (p, uniqueKey) => {
    const primaryScreen = p.screenshots?.[0];
    const isDualStore = p.appStoreUrl && p.playStoreUrl;

    return (
      <div 
        key={uniqueKey}
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
            Continuous showcase of shipped Flutter applications across Apple App Store and Google Play Console.
          </p>
        </div>

        {/* Controls: Filter Chips + Auto-Scroll Pause/Resume */}
        <div className="horizontal-header-controls">
          <div className="horizontal-filters" role="group" aria-label="Filter mobile projects">
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Apps ({mobileProjects.length})
            </button>
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'dual' ? 'active' : ''}`}
              onClick={() => setFilter('dual')}
            >
              Dual Store ({dualCount})
            </button>
            <button
              type="button"
              className={`hz-filter-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Health ({aiCount})
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
              <span>{isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Scroll Indicator */}
      <div className="horizontal-scroll-hint">
        <span className={`pulse-indicator ${isPaused || isHovered ? 'paused' : ''}`} />
        <span>
          {isPaused 
            ? 'Auto-scroll is paused · Click resume to start looping' 
            : isHovered 
              ? 'Hovering card: auto-scroll paused for inspection' 
              : 'Infinite continuous loop active · Hover over any card to inspect'}
        </span>
      </div>

      {/* Infinite Seamless Two-Track Marquee Wrapper */}
      <div 
        className="horizontal-marquee-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`horizontal-marquee-row ${isPaused || isHovered ? 'is-paused' : ''}`}>
          {/* Track 1 */}
          <div className="horizontal-marquee-track">
            {displayProjects.map((p, idx) => renderProjectCard(p, `t1-${p.id}-${idx}`))}
          </div>

          {/* Track 2 (Seamless Infinite Clone: Immediately follows Track 1) */}
          <div className="horizontal-marquee-track" aria-hidden="true">
            {displayProjects.map((p, idx) => renderProjectCard(p, `t2-${p.id}-${idx}`))}
          </div>
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
