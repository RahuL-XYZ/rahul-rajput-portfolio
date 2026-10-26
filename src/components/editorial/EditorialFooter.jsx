import React from 'react';
import FlutterLogo from '../common/FlutterLogo';

export default function EditorialFooter() {
  return (
    <footer className="ed-footer">
      <div className="footer-flag">
        <a href="#idea">
          The codebase decides who a mobile product is actually for.
        </a>
      </div>

      <div className="footer-meta-row">
        <span>© 2026 Rahul Rajput</span>
        <span>
          <a href="https://github.com/RahuL-XYZ" target="_blank" rel="noreferrer" className="footer-meta-link">
            GitHub / RahuL-XYZ
          </a>
        </span>
        <span>
          Built with <FlutterLogo size={12} className="inline-logo" /> Flutter & Dart Craft
        </span>
        <span>9 Play Store Releases · 8 App Store Releases</span>
        <span>Small, fast, and measured in public.</span>
      </div>
    </footer>
  );
}
