import React from 'react';
import { Search, X, Command } from 'lucide-react';
import AppIcon from '../common/AppIcon';
import FlutterLogo from '../common/FlutterLogo';

export default function Launchpad({
  show,
  onClose,
  search,
  setSearch,
  apps,
  onOpenApp
}) {
  if (!show) return null;

  const filteredApps = apps.filter((a) =>
    `${a.name} ${a.subtitle}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="launchpad-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="launchpad-panel">
        <div className="launchpad-top">
          <div>
            <div className="eyebrow">
              <FlutterLogo size={13} />
              <span>FLUTTER RUNTIME / APP DRAWER</span>
            </div>
            <h2>Where to?</h2>
          </div>
          <button
            type="button"
            className="close-launchpad"
            onClick={onClose}
            aria-label="Close Launchpad"
          >
            <X size={18} />
          </button>
        </div>

        <div className="launch-search">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Flutter apps and system windows..."
            autoFocus
          />
          <kbd>ESC</kbd>
        </div>

        <div className="launch-app-grid">
          {filteredApps.map((a) => (
            <AppIcon key={a.id} app={a} onOpen={onOpenApp} />
          ))}
        </div>

        <div className="launchpad-hint">
          <Command size={13} /> Press <strong>Ctrl + K</strong> or <strong>⌘ + K</strong> anytime to toggle Launchpad
        </div>
      </div>
    </div>
  );
}
