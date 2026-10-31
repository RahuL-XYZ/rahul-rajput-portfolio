import React, { useState } from 'react';
import { ExternalLink, Smartphone, Tablet, Globe, Lock, X, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import MagneticButton from '../ui/MagneticButton';
import { projects } from '../../data/projects';
import '../../styles/projects.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeScreens, setActiveScreens] = useState({});

  // Featured 5 according to spec: Baurow, CalCounts Pro, HireGroww, Fitterloop, Glowpeer
  const featuredIds = ['baurow', 'calcounts-pro', 'hiregroww', 'fitterloop', 'glowpeer'];
  
  const featuredProjects = projects.filter(p => featuredIds.includes(p.id));
  const otherProjects = projects.filter(p => !featuredIds.includes(p.id));

  const setProjectScreen = (projectId, screenIdx) => {
    setActiveScreens(prev => ({ ...prev, [projectId]: screenIdx }));
  };

  const renderDeviceMockup = (proj) => {
    const isTablet = proj.id === 'calcounts-pro' || (proj.type && proj.type.toLowerCase().includes('tablet'));
    const isWeb = proj.isWeb || (proj.type && proj.type.toLowerCase().includes('admin'));
    const currentScreenIdx = activeScreens[proj.id] || 0;
    const currentScreenshot = (proj.screenshots && proj.screenshots[currentScreenIdx]) || (proj.screenshots && proj.screenshots[0]);

    if (isWeb) {
      return (
        <div className="mission-browser-wrapper">
          <div 
            className="mission-browser-frame"
            onClick={() => setSelectedProject(proj)}
            style={{ cursor: 'pointer' }}
            title="Click to view full resolution"
          >
            <div className="browser-topbar">
              <div className="browser-dots">
                <span className="browser-dot red" />
                <span className="browser-dot yellow" />
                <span className="browser-dot green" />
              </div>
              <div className="browser-address-bar">
                <Lock size={11} color="#10B981" />
                <span>{proj.browserUrl || 'https://kharchapaani-890b8.web.app/login'}</span>
              </div>
            </div>
            {currentScreenshot ? (
              <img 
                src={currentScreenshot.src} 
                alt={currentScreenshot.title || proj.name} 
                className="mission-browser-screen" 
                loading="lazy"
              />
            ) : (
              <div style={{ display: 'grid', placeItems: 'center', height: '240px', color: 'var(--sv-gray-muted)' }}>
                <Globe size={48} />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (isTablet) {
      return (
        <div className="mission-tablet-wrapper">
          <div 
            className="mission-tablet-frame"
            onClick={() => setSelectedProject(proj)}
            style={{ cursor: 'pointer' }}
            title="Click to view full resolution"
          >
            <div className="mission-tablet-camera" />
            <div className="tablet-hud-badge">
              TABLET 10.5" · LANDSCAPE OPTIMIZED
            </div>
            {currentScreenshot ? (
              <img 
                src={currentScreenshot.src} 
                alt={currentScreenshot.title || proj.name} 
                className="mission-tablet-screen" 
                loading="lazy"
              />
            ) : (
              <div style={{ display: 'grid', placeItems: 'center', height: '100%', color: 'var(--sv-gray-muted)' }}>
                <Tablet size={48} />
              </div>
            )}
          </div>

          {/* Interactive Screen Selector Pills */}
          {proj.screenshots && proj.screenshots.length > 1 && (
            <div className="tablet-screens-selector">
              {proj.screenshots.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`tablet-thumb-btn ${idx === currentScreenIdx ? 'active' : ''}`}
                  onClick={() => setProjectScreen(proj.id, idx)}
                  title={s.title}
                >
                  0{idx + 1} {s.title.split(' ')[0]}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Default Smartphone Mockup with Interactive Screen Selector
    return (
      <div className="mission-phone-wrapper">
        <div 
          className="mission-phone-frame"
          onClick={() => setSelectedProject(proj)}
          style={{ cursor: 'pointer' }}
          title="Click to view full resolution"
        >
          <div className="mission-phone-notch" />
          {currentScreenshot ? (
            <img 
              src={currentScreenshot.src} 
              alt={currentScreenshot.title || proj.name} 
              className="mission-phone-screen" 
              loading="lazy"
            />
          ) : (
            <div style={{ display: 'grid', placeItems: 'center', height: '100%', color: 'var(--sv-gray-muted)' }}>
              <Smartphone size={40} />
            </div>
          )}
        </div>

        {/* Interactive Screen Selector Pills for Mobile Apps */}
        {proj.screenshots && proj.screenshots.length > 1 && (
          <div className="tablet-screens-selector">
            {proj.screenshots.map((s, idx) => (
              <button
                key={idx}
                type="button"
                className={`tablet-thumb-btn ${idx === currentScreenIdx ? 'active' : ''}`}
                onClick={() => setProjectScreen(proj.id, idx)}
                title={s.title}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="sv-projects-section" id="projects">
      <div className="sv-projects-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">CHAPTER 03 // MULTIVERSE MISSIONS</span>
          <GlitchText 
            text="DIFFERENT MISSIONS. ONE DEVELOPER." 
            as="h2" 
            className="sv-section-title"
            glow="red"
          />
        </div>

        {/* Featured 5 Projects Big Universe Cards */}
        <div className="sv-featured-missions-grid">
          {featuredProjects.map((proj) => {
            const isTablet = proj.id === 'calcounts-pro' || (proj.type && proj.type.toLowerCase().includes('tablet'));
            const isWeb = proj.isWeb || (proj.type && proj.type.toLowerCase().includes('admin'));
            return (
              <div 
                key={proj.id} 
                className={`mission-universe-card ${isTablet ? 'is-tablet' : ''} ${isWeb ? 'is-web' : ''}`}
              >
                {/* Left Column: Mission Brief */}
                <div className="mission-left">
                  <div className="mission-top-badge">
                    <span className="mission-num">{proj.number}</span>
                    <span className="mission-category">{proj.category} · {proj.type}</span>
                  </div>

                  <div className="mission-title-row">
                    {proj.logo && (
                      <img 
                        src={proj.logo} 
                        alt={`${proj.name} Logo`} 
                        className="mission-app-logo" 
                      />
                    )}
                    <h3 className="mission-title">{proj.name}</h3>
                  </div>

                  <p className="mission-desc">{proj.description}</p>

                  <div className="mission-role-highlight">
                    <strong>Role & Architecture:</strong> {proj.role}
                  </div>

                  <div className="mission-stack-tags">
                    {proj.stack.map(tech => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="mission-actions">
                    <MagneticButton
                      onClick={() => setSelectedProject(proj)}
                      variant="cyan"
                    >
                      <span>INSPECT CASE STUDY</span>
                      <ChevronRight size={15} />
                    </MagneticButton>

                    {proj.liveUrl && (
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="store-pill-btn live-web"
                      >
                        <span>LIVE PORTAL</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {proj.playStoreUrl && (
                      <a 
                        href={proj.playStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="store-pill-btn"
                      >
                        <span>GOOGLE PLAY</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {proj.appStoreUrl && (
                      <a 
                        href={proj.appStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="store-pill-btn app-store"
                      >
                        <span>APP STORE</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Mobile or Tablet Device Mockup */}
                <div className="mission-right">
                  {renderDeviceMockup(proj)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle to view remaining published missions */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <MagneticButton
            onClick={() => setShowAll(!showAll)}
            variant="secondary"
          >
            <span>{showAll ? 'COLLAPSE ARCHIVE' : 'ACCESS REMAINING MULTIVERSE MISSIONS (Kharcha Paani Admin, Dine Visuals, Scribeflo, Jainmatri...)'}</span>
          </MagneticButton>
        </div>

        {/* Secondary Projects Grid */}
        {showAll && (
          <div className="sv-featured-missions-grid" style={{ marginTop: '20px' }}>
            {otherProjects.map((proj) => {
              const isTablet = proj.id === 'calcounts-pro' || (proj.type && proj.type.toLowerCase().includes('tablet'));
              const isWeb = proj.isWeb || (proj.type && proj.type.toLowerCase().includes('admin'));
              return (
                <div 
                  key={proj.id} 
                  className={`mission-universe-card ${isTablet ? 'is-tablet' : ''} ${isWeb ? 'is-web' : ''}`} 
                  style={{ opacity: 0.95 }}
                >
                  <div className="mission-left">
                    <div className="mission-top-badge">
                      <span className="mission-num">{proj.number}</span>
                      <span className="mission-category">{proj.category} · {proj.type}</span>
                    </div>
                    <div className="mission-title-row">
                    {proj.logo && (
                      <img 
                        src={proj.logo} 
                        alt={`${proj.name} Logo`} 
                        className="mission-app-logo" 
                      />
                    )}
                    <h3 className="mission-title">{proj.name}</h3>
                  </div>
                    <p className="mission-desc">{proj.description}</p>
                    <div className="mission-role-highlight">
                      <strong>Role & Impact:</strong> {proj.role}
                    </div>
                    <div className="mission-stack-tags">
                      {proj.stack.map(tech => (
                        <span key={tech} className="stack-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="mission-actions">
                      <MagneticButton
                        onClick={() => setSelectedProject(proj)}
                        variant="cyan"
                      >
                        <span>INSPECT CASE STUDY</span>
                        <ChevronRight size={15} />
                      </MagneticButton>
                      
                      {proj.liveUrl && (
                        <a 
                          href={proj.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="store-pill-btn live-web"
                        >
                          <span>LIVE PORTAL</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {proj.githubUrl && (
                        <a 
                          href={proj.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="store-pill-btn github-btn"
                        >
                          <span>GITHUB</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {proj.playStoreUrl && (
                        <a href={proj.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-pill-btn">
                          <span>GOOGLE PLAY</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {proj.appStoreUrl && (
                        <a href={proj.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-pill-btn app-store">
                          <span>APP STORE</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mission-right">
                    {renderDeviceMockup(proj)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Case Study Deep Inspection Modal */}
        {selectedProject && (
          <div className="sv-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="sv-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button 
                className="sv-modal-close" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="mission-top-badge">
                <span className="mission-num">{selectedProject.number}</span>
                <span className="mission-category">{selectedProject.category} · {selectedProject.type}</span>
              </div>

              <div className="mission-title-row" style={{ marginTop: '6px' }}>
                {selectedProject.logo && (
                  <img 
                    src={selectedProject.logo} 
                    alt={`${selectedProject.name} Logo`} 
                    className="mission-app-logo in-modal" 
                  />
                )}
                <h2 className="mission-title" style={{ fontSize: '36px' }}>{selectedProject.name}</h2>
              </div>
              <p className="mission-desc">{selectedProject.description}</p>

              <div className="mission-role-highlight" style={{ marginTop: '16px' }}>
                <strong>Engineering Impact:</strong> {selectedProject.impact}
              </div>

              {/* Screenshots Gallery Carousel */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--sv-cyan)', marginTop: '20px' }}>
                    PRODUCTION SCREENSHOTS ({selectedProject.screenshots.length} CAPTURES)
                  </h4>
                  <div className="modal-screenshots-carousel">
                    {selectedProject.screenshots.map((s, i) => {
                      const isModalTablet = selectedProject.id === 'calcounts-pro' || (selectedProject.type && selectedProject.type.toLowerCase().includes('tablet'));
                      const isModalWeb = selectedProject.isWeb || (selectedProject.type && selectedProject.type.toLowerCase().includes('admin'));
                      return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <img 
                            src={s.src} 
                            alt={s.title} 
                            className={`modal-screen-thumb ${isModalTablet ? 'is-tablet' : ''} ${isModalWeb ? 'is-web' : ''}`} 
                          />
                          <span style={{ fontSize: '11px', color: 'var(--sv-gray-muted)', maxWidth: isModalTablet || isModalWeb ? '500px' : '200px' }}>
                            {s.title} — {s.caption}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mission-actions" style={{ marginTop: '24px' }}>
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="store-pill-btn live-web"
                  >
                    <span>OPEN LIVE PORTAL</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="store-pill-btn github-btn"
                  >
                    <span>GITHUB REPO</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {selectedProject.playStoreUrl && (
                  <a href={selectedProject.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-pill-btn">
                    <span>GOOGLE PLAY STORE</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {selectedProject.appStoreUrl && (
                  <a href={selectedProject.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-pill-btn app-store">
                    <span>APPLE APP STORE</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
