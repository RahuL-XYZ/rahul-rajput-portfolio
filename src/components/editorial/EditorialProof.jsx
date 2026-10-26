import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Smartphone, ExternalLink } from 'lucide-react';

export default function EditorialProof() {
  return (
    <section className="ed-proof-band" id="proof">
      <div className="proof-inner">
        <div className="proof-head">
          <span className="proof-kicker">PUBLIC PROOF</span>
          <h2>This work is measured in production, not Figma mockups.</h2>
          <p className="proof-dek">
            Every application listed in this portfolio is accessible directly through official store listings, verifiable by bundle package ID, and running in production.
          </p>
        </div>

        <div className="proof-metrics-grid">
          <div className="proof-card">
            <strong className="proof-number">17</strong>
            <span className="proof-label">Store Releases</span>
            <p className="proof-sub">9 on Google Play Store, 8 on Apple App Store</p>
          </div>

          <div className="proof-card">
            <strong className="proof-number">3.8+</strong>
            <span className="proof-label">Years of Dart Craft</span>
            <p className="proof-sub">Hands-on production Flutter architecture since 2022</p>
          </div>

          <div className="proof-card">
            <strong className="proof-number">100%</strong>
            <span className="proof-label">Native Uniformity</span>
            <p className="proof-sub">Unified state, routing & assets with zero platform drift</p>
          </div>

          <div className="proof-card">
            <strong className="proof-number">&lt; 300 KB</strong>
            <span className="proof-label">Web Bundle Weight</span>
            <p className="proof-sub">Instant load time on any mobile device or weak 3G</p>
          </div>
        </div>

        <div className="proof-verifications">
          <div className="verify-pill">
            <CheckCircle2 size={16} />
            <span>Google Play Store Verified</span>
          </div>
          <div className="verify-pill">
            <CheckCircle2 size={16} />
            <span>Apple App Store Verified</span>
          </div>
          <div className="verify-pill">
            <CheckCircle2 size={16} />
            <span>Stripe Payments Production Ready</span>
          </div>
          <div className="verify-pill">
            <CheckCircle2 size={16} />
            <span>Firebase Real-time Sync Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
