import React from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import FlutterLogo from './FlutterLogo';

export default function WindowFrame({ title, children, onClose, onMinimize, className = '', badge = 'LIVE WIDGET' }) {
  return (
    <section className={`window-frame ${className}`}>
      <header className="window-titlebar">
        <div className="window-controls">
          <button className="window-dot close" onClick={onClose} aria-label="Close window">
            <X size={11} />
          </button>
          <button className="window-dot minimize" onClick={onMinimize} aria-label="Minimize window">
            <Minus size={11} />
          </button>
          <span className="window-dot maximize">
            <Maximize2 size={8} />
          </span>
        </div>
        <div className="window-title">
          <FlutterLogo size={13} className="window-title-icon" />
          <span>{title}</span>
        </div>
        <div className="window-title-right">
          <span className="status-dot" />
          <span>{badge}</span>
        </div>
      </header>
      <div className="window-inner-content">
        {children}
      </div>
    </section>
  );
}
