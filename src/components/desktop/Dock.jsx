import React from 'react';
import { apps } from '../../data/apps';
import FlutterLogo from '../common/FlutterLogo';
import { IconFor } from '../common/AppIcon';

export default function Dock({ openWindows, minimized, onHome, onToggleApp, onOpenSearch }) {
  return (
    <div className="dock-wrap">
      <div className="dock">
        {/* Home / Reset view */}
        <button
          type="button"
          className="dock-home"
          onClick={onHome}
          title="Return to Desktop"
          aria-label="Return to Desktop"
        >
          <FlutterLogo size={20} />
        </button>

        <span className="dock-divider" />

        {/* System Apps */}
        {apps.slice(0, 6).map((app) => {
          const isRunning = openWindows.includes(app.id);
          const isMinimized = minimized.includes(app.id);
          return (
            <button
              key={app.id}
              type="button"
              className={`dock-item ${isRunning ? 'running' : ''} ${isRunning && !isMinimized ? 'focused' : ''}`}
              onClick={() => onToggleApp(app.id)}
              title={app.name}
              aria-label={`${app.name} app`}
            >
              <span style={{ '--app-color': app.color || '#40C4FF' }}>
                <IconFor name={app.icon} size={19} />
              </span>
              <i className="dock-indicator" />
            </button>
          );
        })}

        <span className="dock-divider" />

        {/* Launchpad Grid Trigger */}
        <button
          type="button"
          className="dock-item launchpad-trigger"
          onClick={onOpenSearch}
          title="App Launchpad (Ctrl + K)"
          aria-label="App Launchpad"
        >
          <span className="launchpad-dots">
            <i />
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </div>
  );
}
