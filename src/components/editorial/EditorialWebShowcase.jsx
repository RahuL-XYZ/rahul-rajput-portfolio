import React, { useState } from 'react';
import { 
  Globe, 
  ExternalLink, 
  ArrowUpRight, 
  Github, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Maximize2,
  LayoutDashboard
} from 'lucide-react';
import kharchaPaaniLogo from '../../assets/projects/kharcha_paani_logo.png';
import kharchaPaaniScreen from '../../assets/projects/kharcha_paani_admin_screen.png';
import { webApplications } from '../../data/webProjects';
import ScreenshotModal from './ScreenshotModal';

export default function EditorialWebShowcase() {
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const kharchaAdmin = webApplications.find(w => w.id === 'kharcha-paani-admin') || {
    name: 'Kharcha Paani — Web Admin Portal',
    tagline: 'Shared Household Expense & Settlement Administration System',
    category: 'React 19 & Cloud Firestore',
    browserUrl: 'kharchapaani-890b8.web.app/login',
    liveUrl: 'https://kharchapaani-890b8.web.app/login',
    githubUrl: 'https://github.com/RahuL-XYZ/Kharcha-Paani-Admin',
    description: 'A modern, production-grade administration panel built for Kharcha Paani. Deployed on Firebase Hosting, it provides administrators with cross-household auditing, collectionGroup expense querying, user management, and real-time financial settlement ledgers.',
    stack: ['React 19', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'Recharts', 'Zod'],
    screenshots: [
      { src: kharchaPaaniScreen, title: 'Kharcha Paani Web Admin Portal', caption: 'Administrative authentication, household auditing, and cross-group settlement management' }
    ]
  };

  const companionWebApps = webApplications.filter(w => w.id !== 'kharcha-paani-admin');

  const handleOpenScreens = (project, idx = 0) => {
    setModalProject(project);
    setModalIndex(idx);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  return (
    <section className="ed-section web-showcase-sec" id="web-projects">
      <div className="web-showcase-inner">
        {/* Section Header */}
        <div className="web-section-head">
          <div className="section-eyebrow-pill">
            <Globe size={12} />
            <span>WEB ARCHITECTURE & ADMIN SYSTEMS</span>
          </div>
          <h2>Production Web Applications & Portals.</h2>
          <p className="web-section-subtitle">
            Companion administrative dashboards, candidate evaluation portals, and web analytics platforms built with modern React ecosystems.
          </p>
        </div>

        {/* Featured Flagship Web Application: Kharcha Paani Web Admin */}
        <div className="featured-web-card">
          <div className="featured-web-header">
            <div className="web-brand-group">
              <img 
                src={kharchaPaaniLogo} 
                alt="Kharcha Paani Logo" 
                className="web-brand-logo"
                loading="lazy"
              />
              <div>
                <div className="web-meta-row">
                  <span className="web-flagship-tag">FEATURED WEB PORTAL</span>
                  <span className="web-verified-pill">
                    <CheckCircle2 size={11} /> Live on Firebase Hosting
                  </span>
                </div>
                <h3 className="web-app-title">Kharcha Paani — Web Admin Portal</h3>
                <p className="web-app-tagline">Shared Household Expense & Settlement Administration System</p>
              </div>
            </div>

            <div className="web-action-links">
              <a 
                href="https://kharchapaani-890b8.web.app/login" 
                target="_blank" 
                rel="noreferrer" 
                className="web-primary-btn"
                title="Open Live Web Application"
              >
                <ExternalLink size={14} /> <span>Open Live Admin Portal</span> <ArrowUpRight size={13} />
              </a>

              <a 
                href="https://github.com/RahuL-XYZ/Kharcha-Paani-Admin" 
                target="_blank" 
                rel="noreferrer" 
                className="web-secondary-btn"
                title="View Source Code on GitHub"
              >
                <Github size={14} /> <span>Source Code</span> <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="featured-web-body">
            {/* Left Column: Architecture & Details */}
            <div className="featured-web-info">
              <p className="featured-web-desc">
                A modern, production-grade web administration portal engineered for Kharcha Paani. Deployed on Firebase Hosting, it provides system administrators with cross-household auditing, collectionGroup expense querying, user account management, and real-time financial settlement ledgers.
              </p>

              <div className="web-architecture-box">
                <div className="arch-tag">
                  <Sparkles size={12} />
                  <span>Key Architecture & Features</span>
                </div>
                <ul className="web-arch-list">
                  <li><strong>Cross-Household Auditing:</strong> Firestore <code>collectionGroup</code> queries monitoring multi-room expenses.</li>
                  <li><strong>Real-Time Synchronization:</strong> Live balance recalculation with sub-second data streaming.</li>
                  <li><strong>Financial Analytics:</strong> Interactive Recharts expense velocity and category trends.</li>
                  <li><strong>Security & Authentication:</strong> Role-based Firebase Authentication with secure route guards.</li>
                </ul>
              </div>

              <div className="web-stack-pills">
                {['React 19', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'Recharts', 'Zod', 'React Router v7'].map(tech => (
                  <span key={tech} className="modern-stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Right Column: Desktop Browser Frame Mockup */}
            <div className="featured-web-browser">
              <div 
                className="browser-window-frame"
                onClick={() => handleOpenScreens(kharchaAdmin, 0)}
                title="Click to view full-resolution screenshot"
              >
                {/* Browser Top Navigation Bar */}
                <div className="browser-topbar">
                  <div className="browser-window-dots">
                    <span className="b-dot red" />
                    <span className="b-dot yellow" />
                    <span className="b-dot green" />
                  </div>
                  <div className="browser-url-bar">
                    <Lock size={11} color="#10B981" />
                    <span>kharchapaani-890b8.web.app/login</span>
                  </div>
                  <div className="browser-actions-hint">
                    <Maximize2 size={12} />
                  </div>
                </div>

                {/* Browser Screen Capture */}
                <div className="browser-screen-wrap">
                  <img 
                    src={kharchaPaaniScreen} 
                    alt="Kharcha Paani Web Admin Portal Interface" 
                    className="browser-screen-img"
                    loading="lazy"
                  />
                  <div className="browser-hover-glass">
                    <div className="hover-pill">
                      <Maximize2 size={13} />
                      <span>View Full Resolution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Companion Web Portals */}
        {companionWebApps.length > 0 && (
          <div className="companion-web-section">
            <h4 className="companion-web-title">Companion Web Portals & Analytics Dashboards</h4>
            <div className="companion-web-grid">
              {companionWebApps.map((app) => (
                <div key={app.id} className="companion-web-card">
                  <div className="comp-card-head">
                    <div>
                      <h5>{app.name}</h5>
                      <span className="comp-category">{app.category}</span>
                    </div>
                    {app.liveUrl && (
                      <a href={app.liveUrl} target="_blank" rel="noreferrer" className="comp-link-icon" title="View Portal">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="comp-card-desc">{app.description}</p>

                  <div className="comp-stack-row">
                    {app.stack.slice(0, 4).map(tech => (
                      <span key={tech} className="comp-tech-chip">{tech}</span>
                    ))}
                  </div>

                  <div className="comp-card-foot">
                    <span className="comp-status-dot">●</span>
                    <span className="comp-status-text">{app.status || 'Live Production'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Screenshot Lightbox Modal */}
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
