import React, { useState } from 'react';
import { FolderKanban, Smartphone, Globe2, ArrowUpRight, Sparkles, Layers, ExternalLink, Bot, Apple, ChevronLeft, ChevronRight } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';
import FlutterLogo from '../common/FlutterLogo';
import { projects } from '../../data/projects';

export default function ProjectWindow({ onClose, onMinimize }) {
  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(projects[0].id);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  // Filter projects according to sidebar selection
  const displayedProjects = projects.filter((p) => {
    if (filter === 'appstore') return p.appStore;
    if (filter === 'playstore') return p.playStore;
    if (filter === 'ai') return p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'));
    return true;
  });

  // Keep active project valid
  const currentProject = displayedProjects.find(p => p.id === activeId) || displayedProjects[0] || projects[0];
  const activeIndex = displayedProjects.findIndex(p => p.id === currentProject.id);

  const handleSelectProject = (id) => {
    setActiveId(id);
    setScreenshotIndex(0);
  };

  const getPlatformLabel = () => {
    if (currentProject.playStore && currentProject.appStore) return 'DUAL STORE (iOS & ANDROID)';
    if (currentProject.appStore) return 'APPLE APP STORE (iOS)';
    if (currentProject.playStore) return 'GOOGLE PLAY STORE (ANDROID)';
    return 'PRODUCTION ARCHITECTURE';
  };

  const hasScreenshots = currentProject.screenshots && currentProject.screenshots.length > 0;

  return (
    <WindowFrame
      title="Flutter Projects — iOS & Android Store Releases"
      badge="9 ON PLAY STORE · 8 ON APP STORE"
      onClose={onClose}
      onMinimize={onMinimize}
      className="projects-window"
    >
      <div className="project-layout">
        {/* Finder Sidebar */}
        <aside className="project-sidebar">
          <div className="sidebar-label">WORKSPACE</div>
          <button
            type="button"
            className={`side-link ${filter === 'all' ? 'selected' : ''}`}
            onClick={() => setFilter('all')}
          >
            <FolderKanban size={14} /> All Apps ({projects.length})
          </button>
          <button
            type="button"
            className={`side-link ${filter === 'appstore' ? 'selected' : ''}`}
            onClick={() => setFilter('appstore')}
          >
            <Apple size={14} /> App Store ({projects.filter(p => p.appStore).length})
          </button>
          <button
            type="button"
            className={`side-link ${filter === 'playstore' ? 'selected' : ''}`}
            onClick={() => setFilter('playstore')}
          >
            <Smartphone size={14} /> Play Store ({projects.filter(p => p.playStore).length})
          </button>
          <button
            type="button"
            className={`side-link ${filter === 'ai' ? 'selected' : ''}`}
            onClick={() => setFilter('ai')}
          >
            <Bot size={14} /> AI Powered ({projects.filter(p => p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'))).length})
          </button>

          <div className="sidebar-label stack-label">CORE CRAFT</div>
          <div className="side-link non-clickable">
            <FlutterLogo size={14} /> Cross-Platform Dart
          </div>
          <div className="side-link non-clickable">
            <Layers size={14} /> Riverpod & Clean Arch
          </div>
        </aside>

        <div className="project-content">
          <div className="project-topline">
            <span>CROSS-PLATFORM ARCHIVE / 2022—2026</span>
            <span>
              {String(activeIndex + 1).padStart(2, '0')} — {String(displayedProjects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Project Tabs with official app logo thumbnails */}
          <div className="project-tabs">
            {displayedProjects.map((p) => {
              const isSelected = p.id === currentProject.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectProject(p.id)}
                  className={`project-tab-btn ${isSelected ? 'active' : ''}`}
                  style={{ '--tab-color': p.color }}
                >
                  {p.logo ? (
                    <img src={p.logo} alt="" className="tab-logo-thumb" />
                  ) : (
                    <span className="tab-logo-fallback">{p.icon}</span>
                  )}
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          <div className="project-feature" style={{ '--project-color': currentProject.color }}>
            {/* Visual Centerpiece with authentic app logo or screenshots */}
            <div className="project-visual">
              {hasScreenshots ? (
                <div className="project-screenshot-carousel">
                  <img
                    src={currentProject.screenshots[screenshotIndex]}
                    alt={`${currentProject.name} screenshot ${screenshotIndex + 1}`}
                    className="carousel-main-img"
                  />
                  {currentProject.screenshots.length > 1 && (
                    <div className="carousel-nav">
                      <button
                        type="button"
                        aria-label="Previous screenshot"
                        onClick={() => setScreenshotIndex((prev) => (prev > 0 ? prev - 1 : currentProject.screenshots.length - 1))}
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <span>{screenshotIndex + 1} / {currentProject.screenshots.length}</span>
                      <button
                        type="button"
                        aria-label="Next screenshot"
                        onClick={() => setScreenshotIndex((prev) => (prev < currentProject.screenshots.length - 1 ? prev + 1 : 0))}
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="project-logo-card">
                  {currentProject.logo ? (
                    <img
                      src={currentProject.logo}
                      alt={`${currentProject.name} app logo`}
                      className="project-brand-img"
                    />
                  ) : (
                    <span className="project-brand-fallback">{currentProject.icon}</span>
                  )}
                </div>
              )}
              <span className="project-visual-label">
                {getPlatformLabel()} / {currentProject.number}
              </span>
            </div>

            {/* Detailed Metadata & Store Actions */}
            <div className="project-detail">
              <div className="eyebrow">
                {currentProject.category} <span>·</span> {currentProject.type}
              </div>
              <h2>
                {currentProject.name}
                <span className="cyan-dot">.</span>
              </h2>
              <p>{currentProject.description}</p>

              {currentProject.role && (
                <div className="project-role-badge">
                  <strong>Role:</strong> {currentProject.role}
                </div>
              )}

              <div className="project-meta-row">
                <div className="project-metrics-badge">
                  <Sparkles size={13} />
                  <span>{currentProject.metrics}</span>
                </div>

                {currentProject.packageId && (
                  <span className="package-id-tag">{currentProject.packageId}</span>
                )}
              </div>

              {/* Dual Store Action Buttons: Google Play & Apple App Store */}
              <div className="store-cta-group">
                {currentProject.appStoreUrl && (
                  <a
                    href={currentProject.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="app-store-action-btn"
                    title={`Download ${currentProject.name} on the Apple App Store`}
                  >
                    <svg className="apple-icon" viewBox="0 0 170 170" width="15" height="15" fill="currentColor">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.43-5.65-8.6-10.15-18.7-13.5-30.29-3.35-11.59-5.03-22.68-5.03-33.28 0-14.68 3.73-26.68 11.19-36 7.46-9.32 16.92-14.07 28.38-14.25 4.89 0 10.45 1.25 16.69 3.74 6.24 2.49 10.17 3.79 11.8 3.9 1.63-.11 5.75-1.46 12.37-4.04 6.62-2.58 12.06-3.79 16.32-3.63 12.92.65 23.01 5.48 30.27 14.51-11.3 6.85-16.84 16.29-16.62 28.32.22 9.57 3.86 17.58 10.92 24.03 7.07 6.45 15.42 10.05 25.07 10.79-2.07 6.19-4.57 12.63-7.51 19.32zM119.22 31.84c0-7.29 2.66-14.04 7.98-20.26 5.33-6.22 11.95-10.44 19.86-12.68 1.09 7.72-1.36 14.73-7.35 21.03-5.99 6.3-12.82 10.48-20.49 12.54v-.63z" />
                    </svg>
                    <span>Apple App Store</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {currentProject.playStoreUrl && (
                  <a
                    href={currentProject.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="play-store-action-btn"
                    title={`View ${currentProject.name} on Google Play Store`}
                  >
                    <svg className="play-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-.925V2.739c.07-.36.27-.68.609-.925zm11.24 11.24l2.585 2.586-11.87 6.853 9.285-9.439zm0-2.108L5.564 1.507l11.87 6.853-2.585 2.586zm1.484 1.054l3.82 2.206a1.272 1.272 0 0 1 0 2.206l-3.82 2.206-2.532-2.532 2.532-2.532v.446z" />
                    </svg>
                    <span>Google Play</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                <span className="verified-badge">
                  {currentProject.playStoreUrl && currentProject.appStoreUrl
                    ? '✓ Dual Store Live (iOS & Android)'
                    : currentProject.appStoreUrl
                    ? '✓ Verified Apple App Store'
                    : currentProject.playStoreUrl
                    ? '✓ Verified Google Play Store'
                    : '✓ Enterprise Mobile Release'}
                </span>
              </div>

              <div className="stack-pills">
                {currentProject.stack.map((s) => (
                  <span
                    key={s}
                    className={
                      s.includes('Flutter') ||
                      s.includes('Dart') ||
                      s.includes('Riverpod') ||
                      s.includes('AI') ||
                      s.includes('Firebase') ||
                      s.includes('Apple')
                        ? 'highlight-pill'
                        : ''
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>

              {currentProject.impact && (
                <div className="project-impact-note">
                  <span className="impact-check">✓</span>
                  <span>{currentProject.impact}</span>
                </div>
              )}
            </div>
          </div>

          <div className="project-bottom">
            <span>RAHUL RAJPUT / CROSS-PLATFORM MOBILE WORK</span>
            <div className="project-arrows">
              <button
                type="button"
                onClick={() => {
                  const prevIdx = (activeIndex + displayedProjects.length - 1) % displayedProjects.length;
                  handleSelectProject(displayedProjects[prevIdx].id);
                }}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => {
                  const nextIdx = (activeIndex + 1) % displayedProjects.length;
                  handleSelectProject(displayedProjects[nextIdx].id);
                }}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
