import React from 'react';
import { MapPin, CheckCircle, GraduationCap, Phone, Mail, Award } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';
import FlutterLogo from '../common/FlutterLogo';
import { education } from '../../data/experience';

export default function AboutWindow({ onClose, onMinimize }) {
  return (
    <WindowFrame
      title="About Rahul Rajput — Flutter Developer"
      badge="BIO & CRAFT"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="notes-window">
        <div className="notes-top">
          <span>FLUTTER DEVELOPER / PROFILE</span>
          <span>KORBA, CHHATTISGARH · INDIA</span>
        </div>

        <h2>
          Hey, I’m Rahul
          <span className="cyan-dot">.</span>
        </h2>

        <p className="notes-lead">
          Flutter Developer with <strong>3.8+ years of experience</strong> building and shipping scalable, cross-platform mobile applications for Android and iOS.
        </p>

        <p className="notes-body">
          Delivered <strong>9 live apps on the Google Play Store</strong> and <strong>8 on the Apple App Store</strong>, from UI development through backend integration, payments, and real-time features. Skilled in Flutter, Dart, REST API integration, Firebase, and modern state management with Riverpod and Provider.
        </p>

        <p className="notes-body">
          Known for strong problem-solving skills with a relentless focus on clean architecture, smooth user-friendly experiences, and robust offline capabilities.
        </p>

        <div className="about-stat-grid">
          <div>
            <strong>
              3.8<span>+</span>
            </strong>
            <small>YEARS FLUTTER EXPERIENCE</small>
          </div>
          <div>
            <strong>09</strong>
            <small>GOOGLE PLAY STORE APPS</small>
          </div>
          <div>
            <strong>08</strong>
            <small>APPLE APP STORE RELEASES</small>
          </div>
        </div>

        <div className="quote-card">
          “Strong problem-solving skills with a focus on clean architecture and smooth, user-friendly experiences.”
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <CheckCircle size={15} />
            <span>State Management & Architecture: Provider, Riverpod, MVC, MVVM, Clean Architecture</span>
          </div>
          <div className="highlight-item">
            <CheckCircle size={15} />
            <span>Backend & APIs: Firebase (Auth, Firestore, Messaging), REST API Integration, HTTP, Dio</span>
          </div>
          <div className="highlight-item">
            <CheckCircle size={15} />
            <span>Payments & Monetization: Stripe, In-App Purchase (IAP), RevenueCat</span>
          </div>
          <div className="highlight-item">
            <CheckCircle size={15} />
            <span>Development Tools: Android Studio, Antigravity, VS Code, Git, GitHub, Postman</span>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div className="education-title">
            <GraduationCap size={16} />
            <span>EDUCATION</span>
          </div>
          <div className="education-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <span className="edu-period">{edu.period}</span>
                <strong>{edu.degree}</strong>
                <p className="edu-field">{edu.field}</p>
                <span className="edu-inst">{edu.institution}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="location-line">
          <MapPin size={14} />
          <span>Korba, Chhattisgarh – 495447, India · rahul77478@gmail.com · +91 7000036929</span>
        </div>
      </div>
    </WindowFrame>
  );
}
