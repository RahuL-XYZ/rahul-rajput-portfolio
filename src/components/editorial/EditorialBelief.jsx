import React from 'react';
import MobileDecisionSimulator from './MobileDecisionSimulator';

export default function EditorialBelief() {
  return (
    <section className="ed-section belief-sec" id="idea">
      <div className="section-head">
        <h2 className="section-kicker">WHAT I BELIEVE</h2>
      </div>

      <div className="belief-row">
        <p className="belief-manifesto">
          Every line of Dart quietly decides who can use your product. If an application crashes on flaky 2G, freezes during a checkout modal, or burns battery on budget phones, it has decided that those users don’t matter. Most teams never notice they made that choice. <strong>I build on purpose, so the answer is everyone.</strong>
        </p>
        <p className="belief-sidebar-note">
          The code architecture decides whether a user gets their service or gets locked out.
        </p>
      </div>

      <div id="demo" className="belief-simulator-wrap">
        <MobileDecisionSimulator />
      </div>
    </section>
  );
}
