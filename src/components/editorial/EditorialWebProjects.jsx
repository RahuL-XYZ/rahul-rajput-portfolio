import React, { useState } from 'react';
import { 
  Globe, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Server, 
  Terminal, 
  Images, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  Cpu,
  Github
} from 'lucide-react';
import { webApplications, toolsAndOther } from '../../data/webProjects';
import ScreenshotModal from './ScreenshotModal';

export default function EditorialWebProjects() {
  const [filter, setFilter] = useState('all'); // 'all' | 'web' | 'tools'
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpenScreens = (project, idx = 0) => {
    setModalProject(project);
    setModalIndex(idx);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const showWeb = filter === 'all' || filter === 'web';
  const showTools = filter === 'all' || filter === 'tools';

  return (
    <section className="ed-section web-sec" id="web-projects">
      <div className="secgrid">
        {/* Left Sticky Rail */}
        <aside className="ed-rail">
          <div className="rail-sticky-wrap">
            <span className="section-kicker">WEB & CLOUD CRAFT</span>
            <h2>Web apps, dashboards & systems.</h2>
            <p className="rail-note">
              Modern web engineering, responsive tablet dashboards, cloud serverless microservices, and reusable architecture tools built alongside mobile releases.
            </p>

            <div className="rail-filters" role="group" aria-label="Filter web & other projects">
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects ({webApplications.length + toolsAndOther.length})
              </button>
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'web' ? 'active' : ''}`}
                onClick={() => setFilter('web')}
              >
                Web Applications ({webApplications.length})
              </button>
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'tools' ? 'active' : ''}`}
                onClick={() => setFilter('tools')}
              >
                Tools & Cloud ({toolsAndOther.length})
              </button>
            </div>

            <div className="rail-metric-box">
              <div className="rail-metric-label">PARALLEL WORKFLOWS</div>
              <div className="rail-metric-value">Full-Stack Capability</div>
              <p className="rail-metric-desc">
                From responsive web dashboards and REST APIs to serverless push notification microservices.
              </p>
            </div>
          </div>
        </aside>

        {/* Right Content Area: Split Layout */}
        <div className="ed-bodyr">
          
          {/* SECTION 1: Web Applications & Dashboards */}
          {showWeb && (
            <div className="web-group-block">
              <div className="group-header">
                <div className="group-header-text">
                  <span className="group-kicker"><Globe size={13} /> PRODUCTION WEB APPS & DASHBOARDS</span>
                  <h3 className="group-title">Responsive Web & Admin Portals</h3>
                </div>
                <span className="group-count">{webApplications.length} Projects</span>
              </div>

              <div className="web-cards-stack">
                {webApplications.map((app) => (
                  <article key={app.id} className="web-project-card">
                    {/* Simulated Browser Top Bar */}
                    <div className="browser-mockup-bar">
                      <div className="browser-dots" aria-hidden="true">
                        <span className="dot dot-close" />
                        <span className="dot dot-minimize" />
                        <span className="dot dot-maximize" />
                      </div>
                      <div className="browser-address-bar">
                        <span className="browser-lock">🔒 https://</span>
                        <span className="browser-url-text">{app.browserUrl}</span>
                      </div>
                      <div className="browser-badge">{app.status}</div>
                    </div>

                    <div className="web-card-content">
                      <div className="web-card-top">
                        <div className="web-title-wrap">
                          <span className="item-number">{app.number}</span>
                          <div>
                            <h4 className="web-project-name">{app.name}</h4>
                            <span className="web-project-tagline">{app.tagline}</span>
                          </div>
                        </div>
                        <span className="web-category-tag">{app.category}</span>
                      </div>

                      <p className="web-description">{app.description}</p>

                      <div className="web-receipt-box">
                        <div className="receipt-tag">The impact</div>
                        <p className="receipt-detail">{app.impact}</p>
                      </div>

                      {/* CalCounts Pro or image preview */}
                      {app.screenshots && app.screenshots.length > 0 && (
                        <div className="web-preview-showcase">
                          <div className="web-preview-header">
                            <span className="preview-label">
                              <LayoutDashboard size={14} /> Production Dashboard Views
                            </span>
                            <button
                              type="button"
                              className="view-screens-pill-btn"
                              onClick={() => handleOpenScreens(app, 0)}
                            >
                              <Images size={13} /> View All 4 High-Res Screens
                            </button>
                          </div>
                          
                          <div className="web-preview-grid">
                            {app.screenshots.slice(0, 2).map((s, idx) => (
                              <div 
                                key={idx} 
                                className="web-preview-thumb"
                                onClick={() => handleOpenScreens(app, idx)}
                                title={`Click to view: ${s.title}`}
                              >
                                <img src={s.src} alt={s.title} loading="lazy" />
                                <div className="thumb-overlay">
                                  <span className="thumb-caption">{s.title}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="web-footer-row">
                        <div className="work-tags">
                          {app.stack.map(stk => (
                            <span key={stk}>{stk}</span>
                          ))}
                        </div>

                        <div className="web-actions">
                          {app.githubUrl && (
                            <a
                              href={app.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="action-pill"
                            >
                              <Github size={13} /> Source Code <ArrowUpRight size={13} />
                            </a>
                          )}
                          {app.liveUrl && (
                            <a
                              href={app.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="action-pill action-pill-primary"
                            >
                              <ExternalLink size={13} /> View Deployment <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: Tools, Cloud & Other Projects */}
          {showTools && (
            <div className="tools-group-block">
              <div className="group-header">
                <div className="group-header-text">
                  <span className="group-kicker"><Cpu size={13} /> ARCHITECTURE, CLOUD & TOOLS</span>
                  <h3 className="group-title">Tools & Other Systems</h3>
                </div>
                <span className="group-count">{toolsAndOther.length} Projects</span>
              </div>

              <div className="tools-grid">
                {toolsAndOther.map((tool) => (
                  <div key={tool.id} className="tool-card">
                    <div className="tool-card-top">
                      <span className="tool-number">{tool.number}</span>
                      <span className="tool-badge">{tool.badge}</span>
                    </div>

                    <h4 className="tool-name">{tool.name}</h4>
                    <span className="tool-tagline">{tool.tagline}</span>

                    <p className="tool-desc">{tool.description}</p>

                    <div className="work-tags">
                      {tool.stack.map(s => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Screenshot Lightbox Modal for Web/Dashboard Previews */}
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
