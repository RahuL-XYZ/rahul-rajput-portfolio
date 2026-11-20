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
  Smartphone, 
  Tablet, 
  Images 
} from 'lucide-react';
import kharchaPaaniLogo from '../../assets/projects/kharcha_paani_logo.png';
import kharchaPaaniScreen from '../../assets/projects/kharcha_paani_admin_screen.png';
import calcountsProLogo from '../../assets/projects/calcounts_pro_logo.png';
import calcountsPro1 from '../../assets/projects/calcounts_pro_screen_1.png';
import calcountsPro2 from '../../assets/projects/calcounts_pro_screen_2.png';
import calcountsPro3 from '../../assets/projects/calcounts_pro_screen_3.png';
import calcountsPro4 from '../../assets/projects/calcounts_pro_screen_4.png';
import { webApplications } from '../../data/webProjects';
import ScreenshotModal from './ScreenshotModal';

export default function EditorialWebShowcase() {
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [activeTabletThumb, setActiveTabletThumb] = useState(0);

  const tabletScreens = [
    { src: calcountsPro1, title: 'Instructor Day Dashboard', caption: 'Manage active, pending, and accepted client training requests in a tablet-optimized grid' },
    { src: calcountsPro2, title: 'Client Intake & Burn Table', caption: 'Weekly calories burned vs intake balance matrix with data visualizers' },
    { src: calcountsPro3, title: 'Member Nutrition Insights', caption: 'Target vs actual intake comparison for protein, carbs, and fats' },
    { src: calcountsPro4, title: 'Tablet Sign-In Experience', caption: 'Split landscape-optimized interface designed for fitness professionals' }
  ];

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

  const calcountsPro = webApplications.find(w => w.id === 'calcounts-pro-web') || {
    name: 'CalCounts Pro — Tablet Instructor Application',
    tagline: 'Tablet-Optimized Client Analytics & Macro Tracking System',
    category: 'Tablet Application & Dashboard',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor&hl=en_IN',
    description: 'Engineered an adaptive, tablet-first instructor dashboard enabling certified fitness coaches to manage client rosters, evaluate intake vs expenditure balance matrices, and inspect macro adherence charts on high-resolution tablet screens.',
    stack: ['Flutter', 'Tablet Optimization', 'Data Visualizations', 'Firebase Firestore', 'State Management', 'Interactive Charts'],
    screenshots: tabletScreens
  };

  const companionWebApps = webApplications.filter(w => w.id !== 'kharcha-paani-admin' && w.id !== 'calcounts-pro-web');

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
            <span>WEB ARCHITECTURE & TABLET SYSTEMS</span>
          </div>
          <h2>Production Web Applications & Tablet Systems.</h2>
          <p className="web-section-subtitle">
            Companion administrative dashboards, tablet-optimized fitness systems, and cloud management platforms built with modern React and Flutter ecosystems.
          </p>
        </div>

        {/* 1. Featured Flagship Web Application: Kharcha Paani Web Admin */}
        <div className="featured-web-card" id="kharcha-admin-card">
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

        {/* 2. Featured Tablet Application: CalCounts Pro */}
        <div className="featured-web-card tablet-featured" id="calcounts-tablet-card">
          <div className="featured-web-header">
            <div className="web-brand-group">
              <img 
                src={calcountsProLogo} 
                alt="CalCounts Pro Logo" 
                className="web-brand-logo"
                loading="lazy"
              />
              <div>
                <div className="web-meta-row">
                  <span className="web-flagship-tag tablet-tag">
                    <Tablet size={11} /> FEATURED TABLET SYSTEM
                  </span>
                  <span className="web-verified-pill play">
                    <CheckCircle2 size={11} /> Live on Google Play Store
                  </span>
                </div>
                <h3 className="web-app-title">CalCounts Pro — Tablet Instructor Application</h3>
                <p className="web-app-tagline">Tablet-Optimized Client Analytics & Macro Tracking System</p>
              </div>
            </div>

            <div className="web-action-links">
              <a 
                href="https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor&hl=en_IN" 
                target="_blank" 
                rel="noreferrer" 
                className="web-primary-btn play-btn"
                title="View on Google Play Store"
              >
                <Smartphone size={14} /> <span>View on Google Play</span> <ArrowUpRight size={13} />
              </a>

              <button 
                type="button" 
                onClick={() => handleOpenScreens(calcountsPro, activeTabletThumb)}
                className="web-secondary-btn"
                title="View all 4 tablet screenshots in full resolution"
              >
                <Images size={14} /> <span>View 4 Tablet Screens</span>
              </button>
            </div>
          </div>

          <div className="featured-web-body">
            {/* Left Column: Tablet Architecture & Details */}
            <div className="featured-web-info">
              <p className="featured-web-desc">
                Engineered an adaptive, tablet-first instructor dashboard enabling certified fitness coaches and dieticians to monitor multi-client macro intake vs expenditure balance matrices, review daily workout adherence, and manage active training queues in real time.
              </p>

              <div className="web-architecture-box tablet-arch">
                <div className="arch-tag">
                  <Sparkles size={12} />
                  <span>Tablet Architecture & Features</span>
                </div>
                <ul className="web-arch-list">
                  <li><strong>Tablet-First Responsive Grid:</strong> Custom multi-column landscape layout designed for high productivity on 10"+ screens.</li>
                  <li><strong>Intake vs. Burn Matrix:</strong> Interactive caloric expenditure vs dietary intake data visualization tables.</li>
                  <li><strong>Nutrition Adherence:</strong> Deep-dive macro analytics tracking protein, carbohydrate, and fat targets.</li>
                  <li><strong>Client Training Queue:</strong> Real-time status workflow for active, pending, and accepted member requests.</li>
                </ul>
              </div>

              <div className="web-stack-pills">
                {['Flutter', 'Tablet Optimization', 'Data Visualizations', 'Firebase Firestore', 'State Management', 'Interactive Charts'].map(tech => (
                  <span key={tech} className="modern-stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Right Column: Tablet Frame Mockup with Interactive Screen Switcher */}
            <div className="featured-web-browser">
              <div 
                className="tablet-window-frame"
                onClick={() => handleOpenScreens(calcountsPro, activeTabletThumb)}
                title="Click to view full-resolution tablet screenshot"
              >
                {/* Tablet Hardware Top Bezel */}
                <div className="tablet-hardware-top">
                  <span className="tablet-camera-dot" />
                </div>

                {/* Tablet Screen Capture */}
                <div className="tablet-screen-wrap">
                  <img 
                    src={tabletScreens[activeTabletThumb].src} 
                    alt={tabletScreens[activeTabletThumb].title} 
                    className="tablet-screen-img"
                    loading="lazy"
                  />
                  <div className="browser-hover-glass">
                    <div className="hover-pill">
                      <Maximize2 size={13} />
                      <span>{tabletScreens[activeTabletThumb].title} (Click to expand)</span>
                    </div>
                  </div>
                </div>

                {/* Tablet Quick Switcher Thumbnails */}
                <div className="tablet-screen-strip" onClick={(e) => e.stopPropagation()}>
                  {tabletScreens.map((screen, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`tablet-thumb-btn ${activeTabletThumb === idx ? 'active' : ''}`}
                      onClick={() => setActiveTabletThumb(idx)}
                      title={`Preview: ${screen.title}`}
                    >
                      <img src={screen.src} alt={screen.title} />
                    </button>
                  ))}
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