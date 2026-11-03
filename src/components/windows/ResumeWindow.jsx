import React from 'react';
import { FileText, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import WindowFrame from '../common/WindowFrame';

export default function ResumeWindow({ onClose, onMinimize }) {
  const resumeText = `RAHUL RAJPUT
Flutter Developer
Korba, Chhattisgarh – 495447 | rahul77478@gmail.com | +91 7000036929
LinkedIn: https://www.linkedin.com/in/rahul-rajput-155616188

PROFESSIONAL SUMMARY
Flutter Developer with 3.8+ years of experience building and shipping scalable, cross-platform mobile applications for Android and iOS. Skilled in Flutter, Dart, REST API integration, Firebase, and modern state management (Riverpod, Provider). Delivered 9 apps published on the Google Play Store and 8 on the Apple App Store, with a focus on clean architecture, responsive 60fps UI, and robust offline caching.

SKILLS
- Languages & Frameworks: Flutter, Dart
- State Management & Architecture: Provider, Riverpod, MVC, MVVM, Clean Architecture
- Backend & APIs: Firebase (Auth, Firestore, Messaging), REST API Integration, HTTP, Dio
- Payments & Monetization: Stripe, In-App Purchase (IAP), RevenueCat
- Tools & Version Control: Android Studio, Antigravity, Visual Studio Code, Git, GitHub, Postman

EXPERIENCE
Codiant — A YASH Technologies Company
Associate Software Engineer | Apr 2023 – Jun 2026
- Baurow: Architected cross-platform rental marketplace in Flutter and Firebase; engineered calendar availability booking, in-app messaging, push notifications, and native Stripe payment sheet checkout.
- CalCounts Pro: Developed tablet-responsive instructor dashboards featuring multi-client nutrition analytics, calorie burn matrices, and offline-first Firestore data caching.
- HireGroww: Built multilingual recruitment client with localized UI strings, in-app video interview recording, and asynchronous cloud upload queues.
- Fitterloop: Engineered workout logging flows and camera food scanning with Riverpod state management, connected to REST APIs for live trainer synchronizations.
- Glowpeer: Implemented multi-step routine tracking, local push notification scheduling, shelf inventory management, and community progress feeds.

Imaginar Technologies
Associate Software Engineer | May 2022 – Nov 2022
- FoodIngram: Implemented mobile UI flows and REST API integrations for a multi-role on-demand food delivery system spanning customer ordering, merchant management, and driver dispatch views.

EDUCATION
- Master of Business Administration (MBA) — Human Resources and Financial Management
  RKDF University, Bhopal (M.P) | Aug 2020 – Jul 2022
- Bachelor of Engineering — Computer Science
  SISTec, Bhopal, M.P | Aug 2016 – Jul 2020
- Higher Secondary Certificate (HSC) — Science
  Hr. Sec. School Ghordeva, Korba, Chhattisgarh | 2016
- Secondary School Certificate (SSC)
  Gyanoday Hr. Sec. School, Korba, Chhattisgarh | 2014`;

  const download = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rahul_Rajput_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <WindowFrame
      title="Resume — Rahul Rajput (Flutter Developer)"
      badge="VERIFIED RESUME"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="resume-window">
        <div className="resume-toolbar">
          <span>
            <FileText size={14} /> OFFICIAL RESUME · LATEST VERSION
          </span>
          <button type="button" className="mini-action" onClick={download}>
            <Download size={13} /> Download Resume (.txt)
          </button>
        </div>

        <div className="resume-paper">
          <div className="resume-kicker">CROSS-PLATFORM MOBILE ENGINEER</div>
          <h2>
            Rahul Rajput<span>.</span>
          </h2>
          <h3>Flutter Developer · 3.8+ Years Experience</h3>
          <div className="resume-contact-bar">
            <span><MapPin size={12} /> Korba, Chhattisgarh – 495447</span>
            <span><Mail size={12} /> rahul77478@gmail.com</span>
            <span><Phone size={12} /> +91 7000036929</span>
            <a href="https://www.linkedin.com/in/rahul-rajput-155616188" target="_blank" rel="noreferrer">
              <ExternalLink size={12} /> LinkedIn Profile
            </a>
          </div>

          <div className="resume-rule" />

          {/* Professional Summary */}
          <div className="resume-section">
            <h4>PROFESSIONAL SUMMARY</h4>
            <p>
              Flutter Developer with <strong>3.8+ years of experience</strong> building and shipping scalable, cross-platform mobile applications for Android and iOS. Skilled in Flutter, Dart, REST API integration, Firebase, and modern state management (Riverpod, Provider). Delivered <strong>9 apps published on the Google Play Store</strong> and <strong>8 on the Apple App Store</strong>, with a focus on clean architecture, responsive 60fps UI, and robust offline caching.
            </p>
          </div>

          {/* Core Technical Skills */}
          <div className="resume-section">
            <h4>TECHNICAL SKILLS</h4>
            <div className="resume-skill-item">
              <strong>Languages & Frameworks:</strong>
              <span>Flutter, Dart</span>
            </div>
            <div className="resume-skill-item">
              <strong>State Management & Architecture:</strong>
              <span>Provider, Riverpod, MVC, MVVM, Clean Architecture</span>
            </div>
            <div className="resume-skill-item">
              <strong>Backend & APIs:</strong>
              <span>Firebase (Auth, Firestore, Messaging), REST API Integration, HTTP, Dio</span>
            </div>
            <div className="resume-skill-item">
              <strong>Payments & Monetization:</strong>
              <span>Stripe, In-App Purchase (IAP), RevenueCat</span>
            </div>
            <div className="resume-skill-item">
              <strong>Tools & Version Control:</strong>
              <span>Android Studio, Antigravity, Visual Studio Code, Git, GitHub, Postman</span>
            </div>
          </div>

          <div className="resume-rule" />

          {/* Professional Experience */}
          <div className="resume-section">
            <h4>EXPERIENCE</h4>
            
            <div className="resume-exp-block">
              <strong>Codiant — A YASH Technologies Company</strong>
              <div className="resume-exp-meta">Associate Software Engineer | Apr 2023 – Jun 2026</div>
              <ul className="resume-bullets">
                <li><strong>Baurow:</strong> Architected cross-platform rental marketplace in Flutter and Firebase; engineered calendar availability booking, in-app messaging, push notifications, and native Stripe payment sheet checkout.</li>
                <li><strong>CalCounts Pro:</strong> Developed tablet-responsive instructor dashboards featuring multi-client nutrition analytics, calorie burn matrices, and offline-first Firestore data caching.</li>
                <li><strong>HireGroww:</strong> Built multilingual recruitment client with localized UI strings, in-app video interview recording, and asynchronous cloud upload queues.</li>
                <li><strong>Fitterloop:</strong> Engineered workout logging flows and camera food scanning with Riverpod state management, connected to REST APIs for live trainer synchronizations.</li>
                <li><strong>Glowpeer:</strong> Implemented multi-step routine tracking, local push notification scheduling, shelf inventory management, and community progress feeds.</li>
              </ul>
            </div>

            <div className="resume-exp-block">
              <strong>Imaginar Technologies</strong>
              <div className="resume-exp-meta">Associate Software Engineer | May 2022 – Nov 2022</div>
              <ul className="resume-bullets">
                <li><strong>FoodIngram:</strong> Implemented mobile UI flows and REST API integrations for a multi-role on-demand food delivery system spanning customer ordering, merchant management, and driver dispatch views.</li>
              </ul>
            </div>
          </div>

          <div className="resume-rule" />

          {/* Education */}
          <div className="resume-section">
            <h4>EDUCATION</h4>
            <div className="resume-edu-item">
              <strong>Master of Business Administration (MBA) — Human Resources and Financial Management</strong>
              <span>RKDF University, Bhopal (M.P) | Aug 2020 – Jul 2022</span>
            </div>
            <div className="resume-edu-item">
              <strong>Bachelor of Engineering — Computer Science</strong>
              <span>SISTec, Bhopal, M.P | Aug 2016 – Jul 2020</span>
            </div>
            <div className="resume-edu-item">
              <strong>Higher Secondary Certificate (HSC) — Science</strong>
              <span>Hr. Sec. School Ghordeva, Korba, Chhattisgarh | 2016</span>
            </div>
            <div className="resume-edu-item">
              <strong>Secondary School Certificate (SSC)</strong>
              <span>Gyanoday Hr. Sec. School, Korba, Chhattisgarh | 2014</span>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
