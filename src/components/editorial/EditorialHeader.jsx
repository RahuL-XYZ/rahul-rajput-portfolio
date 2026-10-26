import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import FlutterLogo from '../common/FlutterLogo';

export default function EditorialHeader({ theme, isDark, onToggleTheme }) {
  return (
    <header className="ed-header">
      <div className="ed-header-inner">
        <a href="#hero" className="ed-brand">
          <FlutterLogo size={18} />
          <span className="brand-name">Rahul Rajput</span>
          <span className="brand-sep">·</span>
          <span className="brand-handle">rahulrajput</span>
        </a>

        <nav className="ed-nav" aria-label="Main Navigation">
          <a href="#work" className="nav-link">Work</a>
          <a href="#idea" className="nav-link">Philosophy</a>
          <a href="#demo" className="nav-link">App Demo</a>
          <a href="#proof" className="nav-link">Proof</a>
          <a href="#person" className="nav-link">About</a>
          <a href="#contact" className="nav-cta">Work with me</a>

          <button
            type="button"
            className="theme-switch"
            onClick={onToggleTheme}
            title={isDark ? "Switch to Editorial Linen Mode" : "Switch to Midnight Obsidian Mode"}
            aria-label="Toggle light and dark theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
