import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Apple, Smartphone, Sparkles, ShieldCheck, CheckCircle2, Eye, Images } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectDevicePreview from './ProjectDevicePreview';
import ScreenshotModal from './ScreenshotModal';

export default function EditorialWork() {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpenModal = (project, index = 0) => {
    setModalProject(project);
    setModalIndex(index);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === 'dual') return p.playStore && p.appStore;
    if (filter === 'ai') return p.category.includes('AI') || p.stack.some(s => s.toLowerCase().includes('ai'));
    return true;
  });

  // Featured 3 flagship case studies
  const baurow = projects.find(p => p.id === 'baurow');
  const calcounts = projects.find(p => p.id === 'calcounts-app');
  const scribeflo = projects.find(p => p.id === 'scribeflo');

  // Secondary project archive
  const secondaryProjects = projects.filter(p => !['baurow', 'calcounts-app', 'scribeflo'].includes(p.id));

  return (
    <section className="ed-section work-sec" id="work">
      <div className="secgrid">
        {/* Left Sticky Rail */}
        <aside className="ed-rail">
          <div className="rail-sticky-wrap">
            <span className="section-kicker">THE WORK</span>
            <h2>Shipped to both stores.</h2>
            <p className="rail-note">
              10 mobile applications. 9 published on the Google Play Store and 8 on the Apple App Store. Every app engineered with Flutter & Clean Architecture.
            </p>

            <div className="rail-filters" role="group" aria-label="Filter projects">
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects ({projects.length})
              </button>
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'dual' ? 'active' : ''}`}
                onClick={() => setFilter('dual')}
              >
                Dual Store Releases (8)
              </button>
              <button
                type="button"
                className={`rail-filter-btn ${filter === 'ai' ? 'active' : ''}`}
                onClick={() => setFilter('ai')}
              >
                AI & HealthTech (4)
              </button>
            </div>
          </div>
        </aside>

        {/* Right Body with Modern Case Studies */}
        <div className="ed-bodyr">
          {/* Flagship Case Study 1: Baurow */}
          {baurow && (
            <article className="modern-work-card">
              <div className="work-card-header">
                <div className="work-card-brand">
                  {baurow.logo && (
                    <img 
                      src={baurow.logo} 
                      alt={`${baurow.name} Logo`} 
                      className="work-app-logo"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <div className="work-meta-row">
                      <span className="work-index-num">01</span>
                      <span className="work-category-pill">{baurow.category}</span>
                      <span className="work-verified-pill">
                        <CheckCircle2 size={11} /> Dual Store Live
                      </span>
                    </div>
                    <h3 className="work-app-title">{baurow.name}</h3>
                  </div>
                </div>

                <div className="work-store-badges">
                  {baurow.appStoreUrl && (
                    <a href={baurow.appStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn apple">
                      <Apple size={15} /> <span>App Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                  {baurow.playStoreUrl && (
                    <a href={baurow.playStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn google">
                      <Smartphone size={15} /> <span>Play Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="work-card-grid">
                {/* Left Info Column */}
                <div className="work-info-col">
                  <p className="work-card-desc">
                    Peer-to-peer equipment rental marketplace engineered with Flutter and Firebase. Features dynamic item cataloging, date conflict scheduling, real-time messaging, and secure Stripe escrow checkout.
                  </p>

                  <div className="arch-highlight-box">
                    <div className="arch-tag">
                      <Sparkles size={12} />
                      <span>Architecture & Impact</span>
                    </div>
                    <div className="arch-stat-title">Stripe Escrow & Live Chat</div>
                    <p className="arch-stat-desc">
                      Full-lifecycle production deployment on iOS and Android. Handles instant messaging, push notifications, and verified payment transfers.
                    </p>
                  </div>

                  <div className="work-tags-list">
                    {baurow.stack.map(s => (
                      <span key={s} className="modern-stack-tag">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right Device Showcase Column */}
                <div className="work-device-col">
                  <ProjectDevicePreview project={baurow} onOpenModal={handleOpenModal} />
                </div>
              </div>
            </article>
          )}

          {/* Flagship Case Study 2: CalCounts */}
          {calcounts && (
            <article className="modern-work-card">
              <div className="work-card-header">
                <div className="work-card-brand">
                  {calcounts.logo && (
                    <img 
                      src={calcounts.logo} 
                      alt={`${calcounts.name} Logo`} 
                      className="work-app-logo"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <div className="work-meta-row">
                      <span className="work-index-num">02</span>
                      <span className="work-category-pill">{calcounts.category}</span>
                      <span className="work-verified-pill">
                        <CheckCircle2 size={11} /> Dual Store Live
                      </span>
                    </div>
                    <h3 className="work-app-title">{calcounts.name}</h3>
                  </div>
                </div>

                <div className="work-store-badges">
                  {calcounts.appStoreUrl && (
                    <a href={calcounts.appStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn apple">
                      <Apple size={15} /> <span>App Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                  {calcounts.playStoreUrl && (
                    <a href={calcounts.playStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn google">
                      <Smartphone size={15} /> <span>Play Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="work-card-grid">
                {/* Left Info Column */}
                <div className="work-info-col">
                  <p className="work-card-desc">
                    AI-powered nutrition and macro tracker with sub-second camera food recognition and barcode lookup. Features detailed macronutrient breakdowns and Apple Health synchronization.
                  </p>

                  <div className="arch-highlight-box">
                    <div className="arch-tag">
                      <Sparkles size={12} />
                      <span>Architecture & Impact</span>
                    </div>
                    <div className="arch-stat-title">Sub-Second AI Vision Scanner</div>
                    <p className="arch-stat-desc">
                      Recognizes complex food plates in real time with interactive calorie and macronutrient goal adherence charts.
                    </p>
                  </div>

                  <div className="work-tags-list">
                    {calcounts.stack.map(s => (
                      <span key={s} className="modern-stack-tag">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right Device Showcase Column */}
                <div className="work-device-col">
                  <ProjectDevicePreview project={calcounts} onOpenModal={handleOpenModal} />
                </div>
              </div>
            </article>
          )}

          {/* Flagship Case Study 3: Scribeflo */}
          {scribeflo && (
            <article className="modern-work-card">
              <div className="work-card-header">
                <div className="work-card-brand">
                  {scribeflo.logo && (
                    <img 
                      src={scribeflo.logo} 
                      alt={`${scribeflo.name} Logo`} 
                      className="work-app-logo"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <div className="work-meta-row">
                      <span className="work-index-num">03</span>
                      <span className="work-category-pill">{scribeflo.category}</span>
                      <span className="work-verified-pill">
                        <CheckCircle2 size={11} /> Dual Store Live
                      </span>
                    </div>
                    <h3 className="work-app-title">{scribeflo.name}</h3>
                  </div>
                </div>

                <div className="work-store-badges">
                  {scribeflo.appStoreUrl && (
                    <a href={scribeflo.appStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn apple">
                      <Apple size={15} /> <span>App Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                  {scribeflo.playStoreUrl && (
                    <a href={scribeflo.playStoreUrl} target="_blank" rel="noreferrer" className="store-badge-btn google">
                      <Smartphone size={15} /> <span>Play Store</span> <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="work-card-grid">
                {/* Left Info Column */}
                <div className="work-info-col">
                  <p className="work-card-desc">
                    Streaming audio capture and automated clinical encounter documentation. Engineered real-time transcription status, multi-role SOAP note generation, and secure data pipelines.
                  </p>

                  <div className="arch-highlight-box">
                    <div className="arch-tag">
                      <Sparkles size={12} />
                      <span>Architecture & Impact</span>
                    </div>
                    <div className="arch-stat-title">Zero-Latency Audio Scribe</div>
                    <p className="arch-stat-desc">
                      Converts live patient encounters into formatted medical documentation in under 15 seconds across iOS and Android.
                    </p>
                  </div>

                  <div className="work-tags-list">
                    {scribeflo.stack.map(s => (
                      <span key={s} className="modern-stack-tag">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right Device Showcase Column */}
                <div className="work-device-col">
                  <ProjectDevicePreview project={scribeflo} onOpenModal={handleOpenModal} />
                </div>
              </div>
            </article>
          )}

          {/* Secondary Shipped Production Apps Grid */}
          <div className="archive-block">
            <div className="archive-header-row">
              <div>
                <h4 className="archive-title">Additional Shipped Mobile Applications</h4>
                <p className="archive-subtitle">Production Flutter releases across healthcare, logistics, and social platforms.</p>
              </div>
            </div>

            <div className="archive-grid">
              {secondaryProjects.map((p) => (
                <div key={p.id} className="modern-archive-card">
                  <div className="archive-card-top">
                    {p.logo && (
                      <img 
                        src={p.logo} 
                        alt={`${p.name} Logo`} 
                        className="archive-app-logo"
                        loading="lazy"
                      />
                    )}
                    <div className="archive-card-meta">
                      <h5>{p.name}</h5>
                      <span className="archive-type">{p.category}</span>
                    </div>
                  </div>

                  <p className="archive-desc">{p.description}</p>

                  <div className="archive-card-footer">
                    {p.screenshots && p.screenshots.length > 0 && (
                      <button
                        type="button"
                        className="archive-screens-btn"
                        onClick={() => handleOpenModal(p, 0)}
                        title="Click to view all production screens"
                      >
                        <Images size={13} />
                        <span>Screens ({p.screenshots.length})</span>
                      </button>
                    )}

                    <div className="archive-store-links">
                      {p.appStoreUrl && (
                        <a href={p.appStoreUrl} target="_blank" rel="noreferrer" title="Apple App Store">
                          <Apple size={13} /> <span>iOS</span>
                        </a>
                      )}
                      {p.playStoreUrl && (
                        <a href={p.playStoreUrl} target="_blank" rel="noreferrer" title="Google Play Store">
                          <Smartphone size={13} /> <span>Android</span>
                        </a>
                      )}
                      {!p.appStoreUrl && !p.playStoreUrl && (
                        <span className="archive-enterprise">Enterprise Release</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
