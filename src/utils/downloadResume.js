export const RESUME_TEXT = `RAHUL RAJPUT
Flutter Developer | Mobile Application Engineer
Korba, Chhattisgarh, India | +91 7000036929 | rahul77478@gmail.com
LinkedIn: https://www.linkedin.com/in/rahul-rajput-155616188
GitHub: https://github.com/RahuL-XYZ

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Flutter Developer with 3.8+ years of production experience building and shipping
scalable, high-performance cross-platform mobile applications for Android & iOS.
Delivered 9 published apps on the Google Play Store and 8 on Apple App Store.
Deep expertise in Dart, Riverpod, Provider, Clean Architecture, REST APIs,
Firebase backend synchronization, and native 60fps compilation.

================================================================================
TECHNICAL SKILLS
================================================================================
- Languages & Frameworks: Flutter, Dart, React.js, JavaScript, Python
- State Management: Riverpod, Provider, GetX, Clean Architecture, MVVM
- Backend & Cloud: Firebase (Auth, Firestore, Messaging), REST APIs, Dio, WebSockets
- Payments: Stripe, In-App Purchases (IAP), RevenueCat
- Tools: Android Studio, Git, GitHub, Postman, VS Code, CI/CD

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
Codiant — A YASH Technologies Company
Associate Software Engineer | Apr 2023 – Jun 2026
- Baurow: Built peer-to-peer rental marketplace with item listings, chat, push notifications, Stripe payments.
- CalCounts Pro: Built tablet-optimized 10.5" instructor dashboard for client progress and nutrition tracking.
- HireGroww: Scaled multilingual hiring platform with video recording, candidate assessment, and REST APIs.
- Fitterloop: Engineered responsive nutrition tracking, AI food scanning, and zero-jank 60fps Flutter UI.
- Glowpeer: Implemented skincare routine tracker, social feed, product logging, and local push notifications.

Imaginar Technologies
Associate Software Engineer | May 2022 – Nov 2022
- FoodIngram: Engineered multi-role food delivery platform for customers, restaurants, and delivery drivers.
- Integrated Google Maps navigation, live order tracking, and dynamic cart state management.

================================================================================
NOTABLE PRODUCTION PROJECTS
================================================================================
- Kharcha Paani (Mobile App & Web Admin): Expense tracker and settlement system with live web admin portal.
  Live Portal: https://kharchapaani-890b8.web.app/login
  Admin Repo: https://github.com/RahuL-XYZ/Kharcha-Paani-Admin
- Dine Visuals: Digital interactive restaurant ordering and visual table management experience.
- Scribeflo: Doctor encounter assistant and voice-to-text medical transcription tool.

================================================================================
EDUCATION
================================================================================
- Master of Business Administration (MBA) — HR & Finance
  RKDF University, Bhopal (M.P) | Aug 2020 – Jul 2022
- Bachelor of Engineering (B.E.) — Computer Science
  SISTec, Bhopal (M.P) | Aug 2016 – Jul 2020
`;

/**
 * Trigger immediate download of Rahul Rajput's official resume PDF
 */
export function downloadResume() {
  const link = document.createElement('a');
  link.href = '/Rahul_Rajput_Resume.pdf';
  link.download = 'Rahul_Rajput_Flutter_Developer_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
