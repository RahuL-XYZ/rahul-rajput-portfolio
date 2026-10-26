import React from 'react';
import { Smartphone, Layers3, Activity } from 'lucide-react';

export default function QuickStats() {
  return (
    <div className="quick-stats">
      <div className="stat-card">
        <span className="stat-icon cyan">
          <Smartphone size={17} />
        </span>
        <div>
          <strong>3.8+ Years</strong>
          <small>Flutter Mobile Dev</small>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon blue">
          <Layers3 size={17} />
        </span>
        <div>
          <strong>9 Play Store · 8 App Store</strong>
          <small>Verified Dual-Platform Apps</small>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon teal">
          <Activity size={17} />
        </span>
        <div>
          <strong>Clean Architecture</strong>
          <small>Riverpod & Provider</small>
        </div>
      </div>
    </div>
  );
}
