import React from 'react';
import './ComicPanel.css';

export default function ComicPanel({
  children,
  className = '',
  kicker,
  title,
  issueNo,
  variant = 'default', // 'default' | 'red-accent' | 'blue-accent' | 'cyan-accent'
  angle = 'none', // 'none' | 'left' | 'right'
  style = {}
}) {
  return (
    <div 
      className={`comic-panel-wrapper comic-angle-${angle} comic-variant-${variant} ${className}`}
      style={style}
    >
      <div className="comic-panel-inner">
        {/* Comic Panel Header Badge */}
        {(kicker || issueNo) && (
          <div className="comic-panel-header">
            {kicker && <span className="comic-badge-kicker">{kicker}</span>}
            {issueNo && <span className="comic-badge-issue">ISSUE #{issueNo}</span>}
          </div>
        )}

        {title && <h3 className="comic-panel-title">{title}</h3>}

        <div className="comic-panel-content">
          {children}
        </div>

        {/* Comic Halftone Dot Accent */}
        <div className="comic-panel-halftone" aria-hidden="true" />
        {/* Panel Corner Accent Screws */}
        <span className="panel-corner corner-tl" aria-hidden="true" />
        <span className="panel-corner corner-tr" aria-hidden="true" />
        <span className="panel-corner corner-bl" aria-hidden="true" />
        <span className="panel-corner corner-br" aria-hidden="true" />
      </div>
    </div>
  );
}

