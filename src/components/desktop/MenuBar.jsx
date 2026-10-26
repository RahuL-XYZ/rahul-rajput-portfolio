import React from 'react';
import { Search, Zap, Sun, Moon } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';

export default function MenuBar({
  clock,
  onOpenSearch,
  onHotReload,
  isHotReloading,
  theme,
  isDark,
  onToggleTheme
}) {
  return (
    <header className="menu-bar">
      <div className="menu-brand">
        <FlutterLogo size={18} className="brand-flutter-logo" />
        <span className="brand-mark">rr.</span>
        <span className="brand-title">Rahul OS</span>
        <span className="flutter-pill">FLUTTER 3.24</span>
      </div>

      <div className="menu-center">
        <button
          type="button"
          className={`hot-reload-nav-btn ${isHotReloading ? 'reloading' : ''}`}
          onClick={onHotReload}
          title="Trigger Flutter Hot Reload (R)"
          aria-label="Trigger Flutter Hot Reload"
        >
          <Zap size={13} className="reload-icon" />
          <span>HOT RELOAD</span>
        </button>

        <span className="menu-divider" />
        <span className="nav-item">Finder</span>
        <span className="nav-item">Widgets</span>
        <span className="nav-item">Dart VM</span>
        <span className="nav-item">Window</span>
      </div>

      <div className="menu-right">
        {/* Unique Flutter Light / Dark Theme Mode Toggle */}
        <button
          type="button"
          className={`theme-toggle-nav-btn ${isDark ? 'is-dark' : 'is-light'}`}
          onClick={onToggleTheme}
          title={isDark ? "Switch to Flutter Daybreak (Light Mode) [T]" : "Switch to Flutter Midnight (Dark Mode) [T]"}
          aria-label="Toggle Flutter Light/Dark theme"
        >
          <div className="theme-toggle-thumb">
            {isDark ? (
              <Sun size={12} className="theme-icon sun-icon" />
            ) : (
              <Moon size={12} className="theme-icon moon-icon" />
            )}
          </div>
          <span className="theme-label">{isDark ? 'LIGHT' : 'DARK'}</span>
          <kbd className="theme-kbd">T</kbd>
        </button>

        <div className="online-label">
          <span className="status-dot" />
          <span>AVAILABLE FOR HIRE</span>
        </div>
        <span className="menu-date">
          {clock.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' })}
        </span>
        <span className="menu-time">
          {clock.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
        </span>
        <button
          type="button"
          className="search-button"
          onClick={onOpenSearch}
          aria-label="Open Launchpad search"
          title="Search apps (Ctrl + K)"
        >
          <Search size={15} />
        </button>
      </div>
    </header>
  );
}
