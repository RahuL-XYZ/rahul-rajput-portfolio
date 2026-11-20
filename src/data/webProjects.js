import calcountsProLogo from '../assets/projects/calcounts_pro_logo.png';
import hiregrowwLogo from '../assets/projects/hiregroww_logo.png';
import baurowLogo from '../assets/projects/baurow_logo.png';

import kharchaPaaniScreen from '../assets/projects/kharcha_paani_admin_screen.png';
import calcountsPro1 from '../assets/projects/calcounts_pro_screen_1.png';
import calcountsPro2 from '../assets/projects/calcounts_pro_screen_2.png';
import calcountsPro3 from '../assets/projects/calcounts_pro_screen_3.png';
import calcountsPro4 from '../assets/projects/calcounts_pro_screen_4.png';

export const webApplications = [
  {
    id: 'kharcha-paani-admin',
    name: 'Kharcha Paani — React Admin Portal',
    tagline: 'Shared Household Expense & Settlement Administration System',
    category: 'React 19 & Cloud Firestore',
    number: 'W-01',
    color: '#10B981',
    accent: '#059669',
    logo: null,
    browserUrl: 'kharchapaani-890b8.web.app',
    role: 'Lead Full-Stack Web Engineer — Architecture, Firestore schema & rules, Recharts analytics, and Firebase deployment.',
    impact: 'Live production admin panel deployed on Firebase Hosting, directly monitoring household expense collections, user accounts, and real-time financial settlement ledgers.',
    description: 'A modern, production-grade admin panel for Kharcha Paani, the shared household expense and settlement platform. Features Firebase Authentication, real-time Cloud Firestore synchronization with collectionGroup expense querying, Recharts financial trends, React Hook Form validation, and Tailwind CSS v4 design.',
    stack: ['React 19', 'Vite 8', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS v4', 'Recharts', 'React Router v7', 'Zod'],
    metrics: 'Live on Firebase Hosting · Cross-Household CollectionGroup Auditing · Recharts Analytics',
    screenshots: [
      { src: kharchaPaaniScreen, title: 'Kharcha Paani Admin Portal', caption: 'Authentication, household auditing, and cross-group settlement management' }
    ],
    liveUrl: 'https://kharchapaani-890b8.web.app/',
    githubUrl: 'https://github.com/RahuL-XYZ/Kharcha-Paani-Admin',
    status: 'Live on Firebase'
  },
  {
    id: 'calcounts-pro-web',
    name: 'CalCounts Pro — Tablet Instructor Application',
    tagline: 'Tablet-Optimized Client Analytics & Macro Tracking System',
    category: 'Tablet Application & Dashboard',
    number: 'W-02',
    color: '#0284C7',
    accent: '#02569B',
    logo: calcountsProLogo,
    browserUrl: 'play.google.com/store/apps/details?id=com.codiant.calcountsinstructor',
    role: 'Flutter Developer — Designed tablet-first adaptive layouts, macro balance matrices, and high-performance interactive client progress charts.',
    impact: 'Published on Google Play Store for fitness coaches and dieticians to monitor multi-client macro intake vs expenditure balance matrices on 10"+ Android tablets.',
    description: 'Engineered an adaptive, tablet-first instructor dashboard enabling certified fitness coaches to manage client rosters, evaluate intake vs expenditure balance matrices, and inspect macro adherence charts on high-resolution tablet screens.',
    stack: ['Flutter', 'Tablet Optimization', 'Data Visualizations', 'Firebase Firestore', 'State Management', 'Interactive Charts'],
    metrics: 'Live on Google Play Store · Multi-Client Roster Management · Interactive Macro Visualizations',
    screenshots: [
      { src: calcountsPro1, title: 'Instructor Day Dashboard', caption: 'Manage active, pending, and accepted client training requests in a tablet-optimized grid' },
      { src: calcountsPro2, title: 'Client Intake & Burn Table', caption: 'Weekly calories burned vs intake balance matrix with data visualizers' },
      { src: calcountsPro3, title: 'Member Nutrition Insights', caption: 'Target vs actual intake comparison for protein, carbs, and fats' },
      { src: calcountsPro4, title: 'Tablet Sign-In Experience', caption: 'Split landscape-optimized interface designed for fitness professionals' }
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor&hl=en_IN',
    githubUrl: null,
    status: 'Live on Google Play'
  },
  {
    id: 'hiregroww-portal',
    name: 'HireGroww — Multilingual Recruitment Portal',
    tagline: 'Enterprise Candidate Evaluation & Hiring Workflows',
    category: 'Web Application & HR Portal',
    number: 'W-03',
    color: '#10B981',
    accent: '#047857',
    logo: hiregrowwLogo,
    browserUrl: 'portal.hiregroww.com/recruiter/candidates',
    role: 'Frontend & API Integration Engineer',
    impact: 'Automated candidate screening workflows and structured video interview reviews across multiple regional Indian languages.',
    description: 'Built scalable web portal interfaces and RESTful data pipelines for recruiter management, candidate video interview recording reviews, localized language selection, and status progression stages from applicant to hire.',
    stack: ['Web Application', 'RESTful APIs', 'Video Capture Workflows', 'i18n Localization', 'JWT Auth', 'State Management'],
    metrics: 'Multilingual i18n · End-to-End Candidate Tracking Pipeline',
    screenshots: [],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.app.hiregroww&hl=en_IN',
    githubUrl: null,
    status: 'Live Production'
  },
  {
    id: 'baurow-portal',
    name: 'Baurow — Marketplace Web & Ops Platform',
    tagline: 'Item Catalog, Conflict Resolution & Stripe Escrow Oversight',
    category: 'Marketplace Operations',
    number: 'W-04',
    color: '#06B6D4',
    accent: '#0E7490',
    logo: baurowLogo,
    browserUrl: 'ops.baurow.com/rentals/escrow-ledger',
    role: 'Web Operations & Payments Integration',
    impact: 'Administered peer-to-peer equipment rental inventory, escrow deposit protection, date conflict resolution, and Stripe payments verification.',
    description: 'Developed administrative operations and companion web workflows for peer-to-peer equipment rental management. Integrated Stripe escrow payments ledger, real-time booking scheduling conflict checks, and renter verification audits.',
    stack: ['Web Platform', 'Firebase Cloud Functions', 'Stripe Connect', 'Escrow Ledger', 'Real-Time Sync'],
    metrics: 'Stripe Escrow Workflows · Live Booking Conflict Checks',
    screenshots: [],
    liveUrl: 'https://apps.apple.com/in/app/baurow/id6478005152',
    githubUrl: null,
    status: 'Live Production'
  },
  {
    id: 'rahul-portfolio-web',
    name: 'Rahul Rajput — Editorial Portfolio Engine',
    tagline: 'High-Performance React & CSS Design System Portfolio',
    category: 'Modern Web Application',
    number: 'W-05',
    color: '#38BDF8',
    accent: '#0284C7',
    logo: null,
    browserUrl: 'rahulrajput.dev',
    role: 'Creator & UI Architect',
    impact: 'Built a responsive portfolio featuring dual presentation modes, theme switching, interactive previews, and lightweight assets.',
    description: 'Designed and engineered this portfolio web app utilizing modern React 18, Vite, and a custom Vanilla CSS design system. Features dark obsidian and light linen themes, interactive mobile frame emulator, lightbox gallery, and responsive layout.',
    stack: ['React 18', 'Vite', 'Vanilla CSS Tokens', 'Responsive UI', 'Sub-second Lighthouse'],
    metrics: 'Custom CSS Design Tokens · Modular Component Architecture',
    screenshots: [],
    liveUrl: 'https://github.com/RahuL-XYZ/rahul-rajput-portfolio',
    githubUrl: 'https://github.com/RahuL-XYZ/rahul-rajput-portfolio',
    status: 'Active / Shipped'
  }
];

export const toolsAndOther = [
  {
    id: 'decision-simulator',
    name: 'Mobile Decision Simulator',
    tagline: 'Interactive Architectural Evaluation Tool',
    category: 'Interactive Web Tool',
    number: 'T-01',
    description: 'In-browser interactive simulator embedded in the portfolio demonstrating real-time trade-off matrix evaluation between Riverpod vs BLoC, Clean Architecture vs MVC, and offline SQLite synchronization.',
    stack: ['React State Machine', 'Interactive DOM', 'Algorithm Engine', 'Micro-Animations'],
    badge: 'Interactive Demo Below'
  },
  {
    id: 'cloud-functions-pipeline',
    name: 'Cloud Functions & FCM Dispatch Engine',
    tagline: 'Serverless Automation & Webhook Ingestion',
    category: 'Backend & Cloud Services',
    number: 'T-02',
    description: 'Serverless backend microservices running on Firebase Cloud Functions and Node.js. Dispatches high-throughput FCM push notifications, schedules daily routine reminders, and handles Stripe payment webhooks with idempotency.',
    stack: ['Node.js', 'Firebase Cloud Functions', 'FCM Push API', 'Stripe Webhooks', 'NoSQL Firestore'],
    badge: 'Production Backend'
  },

  {
    id: 'clean-arch-boilerplate',
    name: 'Flutter Clean Architecture & Riverpod Starter Kit',
    tagline: 'Production Architecture Template for Flutter',
    category: 'Developer Tooling / Starter Kit',
    number: 'T-04',
    description: 'A modular starter template with clear layer separation (Domain, Data, Presentation), Dio network interceptors, and Riverpod dependency injection with code generation.',
    stack: ['Clean Architecture', 'Riverpod 2.x', 'Dio Interceptors', 'Freezed', 'AutoRoute'],
    badge: 'Developer Tool'
  }
];
