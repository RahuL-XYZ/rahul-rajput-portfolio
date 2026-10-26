import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Apple, Smartphone, Sparkles, ShieldCheck, Eye, Images } from 'lucide-react';
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
              10 mobile applications. 9 published on the Google Play Store and 8 on the Apple App Store. Every app built for real users on real devices.
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

        {/* Right Body with Case Studies */}
        <div className="ed-bodyr">
          {/* Flagship Case Study 1: Baurow */}
          {baurow && (
            <article className="work-item">
              <div className="work-item-head">
                <div className="item-title-row">
                  <span className="item-number">01</span>
                  <h3>{baurow.name}</h3>
                </div>
                <p className="item-timespan">2023 to Present · Dual Store Marketplace</p>
              </div>

              <div className="work-item-body">
                <p className="work-description">
                  Built a peer-to-peer rental marketplace application using Flutter and Firebase. Engineered product listings, booking workflows, real-time messaging, push notifications, and Stripe payment integration.
                </p>

                <div className="receipt-box">
                  <span className="receipt-tag">The receipt</span>
                  <div className="receipt-stat">Dual Store Live</div>
                  <p className="receipt-detail">
                    Handling peer-to-peer item listings, live instant chat, and secure Stripe checkout across iOS and Android.
                  </p>
                </div>

                <div className="work-links-row">
                  {baurow.appStoreUrl && (
                    <a href={baurow.appStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Apple size={14} /> Apple App Store <ArrowUpRight size={13} />
                    </a>
                  )}
                  {baurow.playStoreUrl && (
                    <a href={baurow.playStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Smartphone size={14} /> Google Play Store <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                {/* Interactive Phone Screenshot Showcase */}
                <ProjectDevicePreview project={baurow} onOpenModal={handleOpenModal} />

                <div className="work-tags">
                  {baurow.stack.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Flagship Case Study 2: CalCounts */}
          {calcounts && (
            <article className="work-item">
              <div className="work-item-head">
                <div className="item-title-row">
                  <span className="item-number">02</span>
                  <h3>{calcounts.name}</h3>
                </div>
                <p className="item-timespan">2024 to Present · AI Food Scanner & Macro Tracker</p>
              </div>

              <div className="work-item-body">
                <p className="work-description">
                  Sub-second camera-based food recognition and barcode macro lookup. Engineered meal logging, nutritional breakdown charts, and synchronized progress with Apple Watch and wearable devices.
                </p>

                <div className="receipt-box">
                  <span className="receipt-tag">The receipt</span>
                  <div className="receipt-stat">Sub-second AI Vision</div>
                  <p className="receipt-detail">
                    Live on both stores. AI food camera scanner recognizes meals in seconds with sub-second barcode macro lookup.
                  </p>
                </div>

                <div className="work-links-row">
                  {calcounts.appStoreUrl && (
                    <a href={calcounts.appStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Apple size={14} /> Apple App Store <ArrowUpRight size={13} />
                    </a>
                  )}
                  {calcounts.playStoreUrl && (
                    <a href={calcounts.playStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Smartphone size={14} /> Google Play Store <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                {/* Interactive Phone Screenshot Showcase */}
                <ProjectDevicePreview project={calcounts} onOpenModal={handleOpenModal} />

                <div className="work-tags">
                  {calcounts.stack.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Flagship Case Study 3: Scribeflo */}
          {scribeflo && (
            <article className="work-item">
              <div className="work-item-head">
                <div className="item-title-row">
                  <span className="item-number">03</span>
                  <h3>{scribeflo.name}</h3>
                </div>
                <p className="item-timespan">2024 to Present · Generative Clinical Scribe</p>
              </div>

              <div className="work-item-body">
                <p className="work-description">
                  Streaming audio capture and automated clinical encounter documentation. Engineered real-time transcription status, multi-role SOAP note generation, and HIPAA-compliant data pipelines.
                </p>

                <div className="receipt-box">
                  <span className="receipt-tag">The receipt</span>
                  <div className="receipt-stat">Zero-Latency Audio Scribe</div>
                  <p className="receipt-detail">
                    Active clinical deployment on iOS and Android. Converts live patient visits into formatted medical notes in under 15 seconds.
                  </p>
                </div>

                <div className="work-links-row">
                  {scribeflo.appStoreUrl && (
                    <a href={scribeflo.appStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Apple size={14} /> Apple App Store <ArrowUpRight size={13} />
                    </a>
                  )}
                  {scribeflo.playStoreUrl && (
                    <a href={scribeflo.playStoreUrl} target="_blank" rel="noreferrer" className="action-pill">
                      <Smartphone size={14} /> Google Play Store <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                {/* Interactive Phone Screenshot Showcase */}
                <ProjectDevicePreview project={scribeflo} onOpenModal={handleOpenModal} />

                <div className="work-tags">
                  {scribeflo.stack.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Secondary Shipped Production Apps Grid */}
          <div className="archive-block">
            <h4 className="archive-title">Additional Shipped Production Applications</h4>
            <div className="archive-grid">
              {secondaryProjects.map((p) => (
                <div key={p.id} className="archive-card">
                  <div className="archive-card-top">
                    <span className="archive-num">{p.number}</span>
                    <h5>{p.name}</h5>
                    <span className="archive-type">{p.category}</span>
                  </div>
                  <p className="archive-desc">{p.description}</p>

                  {p.screenshots && p.screenshots.length > 0 && (
                    <button
                      type="button"
                      className="archive-screens-btn"
                      onClick={() => handleOpenModal(p, 0)}
                    >
                      <Images size={13} />
                      <span>View Production Screens ({p.screenshots.length})</span>
                    </button>
                  )}

                  <div className="archive-store-links">
                    {p.appStoreUrl && (
                      <a href={p.appStoreUrl} target="_blank" rel="noreferrer">
                        App Store <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.playStoreUrl && (
                      <a href={p.playStoreUrl} target="_blank" rel="noreferrer">
                        Play Store <ArrowUpRight size={12} />
                      </a>
                    )}
                    {!p.appStoreUrl && !p.playStoreUrl && (
                      <span className="archive-enterprise">Enterprise Release</span>
                    )}
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
