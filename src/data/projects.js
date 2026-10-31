import baurowLogo from '../assets/projects/baurow_logo.png';
import calcountsProLogo from '../assets/projects/calcounts_pro_logo.png';
import calcountsLogo from '../assets/projects/calcounts_logo.png';
import dineVisualsLogo from '../assets/projects/dine_visuals_logo.png';
import scribefloLogo from '../assets/projects/scribeflo_logo.png';
import jainmatriLogo from '../assets/projects/jainmatri_logo.png';
import hiregrowwLogo from '../assets/projects/hiregroww_logo.png';
import fitterloopLogo from '../assets/projects/fitterloop_logo.png';
import glowpeerLogo from '../assets/projects/glowpeer_logo.png';
import kharchaPaaniLogo from '../assets/projects/kharcha_paani_logo.png';

// Screenshots
import baurow1 from '../assets/projects/baurow_screen_1.png';
import baurow2 from '../assets/projects/baurow_screen_2.png';
import baurow3 from '../assets/projects/baurow_screen_3.png';
import baurow4 from '../assets/projects/baurow_screen_4.png';
import baurow5 from '../assets/projects/baurow_screen_5.png';

import calcounts1 from '../assets/projects/calcounts_screen_1.png';
import calcounts2 from '../assets/projects/calcounts_screen_2.png';
import calcounts3 from '../assets/projects/calcounts_screen_3.png';
import calcounts4 from '../assets/projects/calcounts_screen_4.png';

import calcountsPro1 from '../assets/projects/calcounts_pro_screen_1.png';
import calcountsPro2 from '../assets/projects/calcounts_pro_screen_2.png';
import calcountsPro3 from '../assets/projects/calcounts_pro_screen_3.png';
import calcountsPro4 from '../assets/projects/calcounts_pro_screen_4.png';

import dineVisuals1 from '../assets/projects/dine_visuals_screen_1.png';
import dineVisuals2 from '../assets/projects/dine_visuals_screen_2.png';
import dineVisuals3 from '../assets/projects/dine_visuals_screen_3.png';
import dineVisuals4 from '../assets/projects/dine_visuals_screen_4.png';
import dineVisuals5 from '../assets/projects/dine_visuals_screen_5.png';

import scribeflo1 from '../assets/projects/scribeflo_screen_1.png';
import scribeflo2 from '../assets/projects/scribeflo_screen_2.png';
import scribeflo3 from '../assets/projects/scribeflo_screen_3.png';
import scribeflo4 from '../assets/projects/scribeflo_screen_4.png';
import scribeflo5 from '../assets/projects/scribeflo_screen_5.png';

import jainmatri1 from '../assets/projects/jainmatri_screen_1.jpg';
import jainmatri2 from '../assets/projects/jainmatri_screen_2.png';
import jainmatri3 from '../assets/projects/jainmatri_screen_3.png';
import jainmatri4 from '../assets/projects/jainmatri_screen_4.png';
import jainmatri5 from '../assets/projects/jainmatri_screen_5.png';

import hiregroww1 from '../assets/projects/hiregroww_screen_1.png';
import hiregroww2 from '../assets/projects/hiregroww_screen_2.png';
import hiregroww3 from '../assets/projects/hiregroww_screen_3.png';
import hiregroww4 from '../assets/projects/hiregroww_screen_4.png';
import hiregroww5 from '../assets/projects/hiregroww_screen_5.png';

import fitterloop1 from '../assets/projects/fitterloop_screen_1.png';
import fitterloop2 from '../assets/projects/fitterloop_screen_2.png';
import fitterloop3 from '../assets/projects/fitterloop_screen_3.png';
import fitterloop4 from '../assets/projects/fitterloop_screen_4.png';
import fitterloop5 from '../assets/projects/fitterloop_screen_5.png';

import glowpeer1 from '../assets/projects/glowpeer_screen_1.png';
import glowpeer2 from '../assets/projects/glowpeer_screen_2.png';
import glowpeer3 from '../assets/projects/glowpeer_screen_3.png';
import glowpeer4 from '../assets/projects/glowpeer_screen_4.png';
import glowpeer5 from '../assets/projects/glowpeer_screen_5.png';
import kharchaPaaniScreen from '../assets/projects/kharcha_paani_admin_screen.png';
import kharcha1 from '../assets/projects/kharcha_paani_screen_1.jpg';
import kharcha2 from '../assets/projects/kharcha_paani_screen_2.jpg';
import kharcha3 from '../assets/projects/kharcha_paani_screen_3.jpg';
import kharcha4 from '../assets/projects/kharcha_paani_screen_4.jpg';
import kharcha5 from '../assets/projects/kharcha_paani_screen_5.jpg';

export const projects = [
  {
    id: 'baurow',
    name: 'Baurow',
    category: 'Marketplace',
    type: 'Mobile App · Peer-to-Peer Rental',
    number: '01',
    color: '#40C4FF',
    accent: '#0175C2',
    logo: baurowLogo,
    screenshots: [
      { src: baurow1, title: 'Rent Anything Nearby', caption: 'Peer-to-peer equipment and tool rental onboarding' },
      { src: baurow2, title: 'Item Listing & Pricing', caption: 'Tiered daily/monthly rates and deposit protection' },
      { src: baurow3, title: 'Date Booking Calendar', caption: 'Live availability schedule and instant cost calculator' },
      { src: baurow4, title: 'Map Radius & Reviews', caption: 'Location privacy circle and 5-star verified renter feedback' },
      { src: baurow5, title: 'Category Marketplace Grid', caption: 'Fast searchable camera and gear listings across cities' }
    ],
    role: 'Lead Flutter Developer — End-to-end mobile architecture, Firebase real-time sync, and Stripe payments integration.',
    impact: 'Live in production on both Google Play & Apple App Store, handling peer-to-peer item listings, instant chat, and secure bookings.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.info.baurow.app&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/baurow/id6478005152',
    packageId: 'com.info.baurow.app',
    description: 'Built a peer-to-peer rental marketplace application using Flutter and Firebase. Implemented item listings, booking workflows, real-time chat, push notifications, and Stripe payment integration.',
    stack: ['Flutter', 'Firebase', 'Stripe', 'Push Notifications', 'Real-time Chat'],
    icon: 'B',
    metrics: 'Live on Google Play & Apple App Store · Real-time Chat & Stripe Payments',
    playStore: true,
    appStore: true
  },
  {
    id: 'calcounts-app',
    name: 'CalCounts',
    category: 'Health & Nutrition',
    type: 'AI Food Scanner & Macro Tracker',
    number: '02',
    color: '#38BDF8',
    accent: '#0284C7',
    logo: calcountsLogo,
    screenshots: [
      { src: calcounts1, title: 'Daily Calorie Progress', caption: 'Log meals in seconds with live macro breakdown & wellness score' },
      { src: calcounts2, title: 'AI Food Camera Scanner', caption: 'Real-time computer vision recognition for food items' },
      { src: calcounts3, title: 'Full Nutrition Breakdown', caption: 'Detailed calorie, carb, protein, and fat cards' },
      { src: calcounts4, title: 'Weekly Analytics Dashboard', caption: 'Interactive stacked macro chart and weight progress tracker' }
    ],
    role: 'Mobile Engineer — Food camera scanner integration, macro calculations, and Apple Watch / health sync modules.',
    impact: 'Shipped to both stores with sub-second food barcode lookup, meal logging, and responsive macro breakdown visualizations.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.codiant.calcounts&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/calcounts-ai-food-scanner/id6739880587',
    packageId: 'com.codiant.calcounts',
    description: 'Track smarter, eat better, live healthier. CalCounts is an AI-powered companion for smart calorie tracking and goal-crushing health habits. Log meals in seconds, scan food photos or barcodes for macro insights, and sync progress with Apple Watch/wearables.',
    stack: ['Flutter', 'AI Food Recognition', 'Barcode Scanning', 'Macro Tracking', 'Apple Watch Sync'],
    icon: 'C',
    metrics: 'Live on Google Play & Apple App Store · AI Vision & Wearable Sync',
    playStore: true,
    appStore: true
  },
  {
    id: 'scribeflo',
    name: 'Scribeflo',
    category: 'HealthTech & AI',
    type: 'AI Clinical Scribe for Healthcare',
    number: '03',
    color: '#2DD4BF',
    accent: '#0D9488',
    logo: scribefloLogo,
    screenshots: [
      { src: scribeflo1, title: 'Streaming Audio Encounter', caption: 'Effortless voice recording and structured template selection' },
      { src: scribeflo2, title: 'Custom Note Formatting', caption: 'Concise, standard, or elaborate clinical documentation' },
      { src: scribeflo3, title: 'Structured SOAP Notes', caption: 'Subjective, Objective, Assessment, and Plan accordions' },
      { src: scribeflo4, title: 'Organized Patient History', caption: 'Filterable clinical timeline with date tags' },
      { src: scribeflo5, title: 'Magic Edit AI Assistant', caption: 'Voice and text prompts to refine medical notes on the fly' }
    ],
    role: 'Lead Mobile Developer — Implemented streaming audio recording, real-time transcription status, and structured clinical summary views.',
    impact: 'Deployed on iOS & Android for clinical practitioners, drastically reducing doctor charting time per patient encounter.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.codiant.scribeflo&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/scribeflo-ai-medical-scribe/id6749059072',
    packageId: 'com.codiant.scribeflo',
    description: 'AI-powered scribe designed for healthcare providers. Records patient encounters, transcribes conversations in real-time, and automatically generates structured clinical notes and documentation with full compliance and accuracy.',
    stack: ['Flutter', 'Speech-to-Text', 'Generative Clinical AI', 'Audio Recording', 'HIPAA Ready'],
    icon: 'S',
    metrics: 'Live on Google Play & Apple App Store · Real-Time Clinical Scribe',
    playStore: true,
    appStore: true
  },
  {
    id: 'calcounts-pro',
    name: 'CalCounts Pro',
    category: 'Fitness & Health',
    type: 'Tablet-Optimized Instructor Dashboard',
    number: '04',
    color: '#29B6F6',
    accent: '#02569B',
    logo: calcountsProLogo,
    screenshots: [
      { src: calcountsPro1, title: 'Instructor Day Dashboard', caption: 'Manage active, pending, and accepted client training requests' },
      { src: calcountsPro2, title: 'Client Intake & Burn Table', caption: 'Weekly calories burned vs intake balance matrix' },
      { src: calcountsPro3, title: 'Member Nutrition Insights', caption: 'Daily target vs intake comparison for protein, carbs, and fats' },
      { src: calcountsPro4, title: 'Tablet Sign-In Experience', caption: 'Landscape-optimized split layout for fitness professionals' }
    ],
    role: 'Flutter Developer — Designed tablet-first adaptive layouts and high-performance interactive client progress charts.',
    impact: 'Published on Google Play Store for fitness instructors to seamlessly manage multiple clients across Android tablets and phones.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.codiant.calcountsinstructor&hl=en_IN',
    appStoreUrl: null,
    packageId: 'com.codiant.calcountsinstructor',
    description: 'Engineered a tablet-optimized instructor dashboard enabling trainers to monitor client performance, nutrition metrics, and progress insights through responsive data visualizations.',
    stack: ['Flutter', 'Tablet Optimization', 'Data Visualizations', 'Firebase', 'State Management'],
    icon: 'C',
    metrics: 'Published on Google Play Store · Tablet Responsive Charts',
    playStore: true,
    appStore: false
  },
  {
    id: 'dine-visuals',
    name: 'Dine Visuals',
    category: 'AI & Food Media',
    type: 'AI Food Studio & Photography',
    number: '05',
    color: '#FB923C',
    accent: '#EA580C',
    logo: dineVisualsLogo,
    screenshots: [
      { src: dineVisuals1, title: 'Food Studio Splash', caption: 'Studio setup and on-demand AI food enhancement' },
      { src: dineVisuals2, title: 'Reference Image Upload', caption: 'Choose composition, 45° angle, and custom aspect ratio' },
      { src: dineVisuals3, title: 'Visual Creation Catalog', caption: 'Grid of generated restaurant-quality dish photos' },
      { src: dineVisuals4, title: 'Interactive Before & After', caption: 'Direct comparison between raw phone snap and enhanced studio render' },
      { src: dineVisuals5, title: 'Food Creator Account', caption: 'Profile and cloud sync management for food brands' }
    ],
    role: 'Flutter Developer — Built dynamic camera UI, image manipulation pipelines, and REST API integration with AI image generation endpoints.',
    impact: 'Live on Google Play & App Store, empowering restaurants and food creators to generate studio-grade menu photos without camera gear.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.codiant.dineVisual&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/dine-visuals-ai-food-studio/id6756426080',
    packageId: 'com.codiant.dineVisual',
    description: 'Transforms simple food snapshots into scroll-stopping, restaurant-quality images using advanced AI photography styling. Designed for creators, chefs, restaurants, and food delivery brands to create studio-grade menu visuals without professional gear.',
    stack: ['Flutter', 'Generative AI APIs', 'Image Processing', 'Riverpod', 'Camera Integration'],
    icon: 'D',
    metrics: 'Live on Google Play & Apple App Store · Generative AI Food Studio',
    playStore: true,
    appStore: true
  },
  {
    id: 'jainmatri',
    name: 'Jainmatri',
    category: 'Matrimony & Social',
    type: 'Matchmaking & Community Platform',
    number: '06',
    color: '#F472B6',
    accent: '#DB2777',
    logo: jainmatriLogo,
    screenshots: [
      { src: jainmatri1, title: 'Cultural Onboarding', caption: 'Verified matrimonial networking built for the Jain community' },
      { src: jainmatri2, title: 'Profile Completeness Engine', caption: 'Score algorithm boosting discovery and matching rate' },
      { src: jainmatri3, title: 'Real-Time Message Alerts', caption: 'Instant push notifications for mutual interests' },
      { src: jainmatri4, title: 'Encrypted Chat Flow', caption: 'Secure messaging with photo sharing and privacy rules' },
      { src: jainmatri5, title: 'ID-Verified Profiles', caption: 'Trust badges, Kundali Milan, and direct interest sending' }
    ],
    role: 'Mobile Engineer — Built complex verification flows, Kundali astrological matchmaking views, and in-app subscription paywalls.',
    impact: 'Shipped to App Store and Play Store, providing privacy-first matchmaking and verified family profile networking.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jainmatri&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/jainmatri/id6766850191',
    packageId: 'com.jainmatri',
    description: 'A Jain matrimony app designed to help brides, grooms, and families discover suitable matrimonial profiles with privacy and control. Features partner matching, Kundali Milan, messaging, profile score, and premium membership tiers.',
    stack: ['Flutter', 'Matchmaking Algorithms', 'Kundali Milan', 'Chat & Messaging', 'In-App Memberships'],
    icon: 'J',
    metrics: 'Live on Google Play & Apple App Store · Matchmaking & Kundali Milan',
    playStore: true,
    appStore: true
  },
  {
    id: 'hiregroww',
    name: 'HireGroww',
    category: 'Recruitment',
    type: 'Multilingual Talent Platform',
    number: '07',
    color: '#00B4AB',
    accent: '#02569B',
    logo: hiregrowwLogo,
    screenshots: [
      { src: hiregroww1, title: 'Recruitment Hub Launch', caption: 'Next-generation talent screening and interview hub' },
      { src: hiregroww2, title: 'Fast Biometric & Email Login', caption: 'Secure authentication for HR and candidates' },
      { src: hiregroww3, title: 'All Interviews at a Glance', caption: 'Upcoming video and face-to-face candidate pipeline' },
      { src: hiregroww4, title: 'One-Tap Video Recording', caption: 'Async candidate interview questions and video capture' },
      { src: hiregroww5, title: 'Cloud Interview Storage', caption: 'Automated upload and evaluation report generation' }
    ],
    role: 'Flutter Developer — Created multilingual localization architecture, async video/audio interview recording, and candidate status tracking.',
    impact: 'Live on both app stores; enables fast candidate screening with localized interfaces across regional markets.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.codiant.hiregroww&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/hiregroww-recruit-with-ai/id6748382392',
    packageId: 'com.codiant.hiregroww',
    description: 'Created a multilingual recruitment platform with interview recording and hiring workflow management. Integrated AI-powered candidate evaluation, localization, and scalable REST APIs.',
    stack: ['Flutter', 'AI Candidate Evaluation', 'Interview Recording', 'Localization', 'REST APIs'],
    icon: 'H',
    metrics: 'Live on Google Play & Apple App Store · Multilingual & AI Workflows',
    playStore: true,
    appStore: true
  },
  {
    id: 'fitterloop',
    name: 'Fitterloop',
    category: 'Wellness & Training',
    type: 'Fitness & Food Scanning App',
    number: '08',
    color: '#54C5F8',
    accent: '#0175C2',
    logo: fitterloopLogo,
    screenshots: [
      { src: fitterloop1, title: 'Workout Readiness Feed', caption: 'Interactive tagging for workout equipment and coach programs' },
      { src: fitterloop2, title: 'Sub-Second Meal Logger', caption: 'Daily calorie intake vs target progress circle' },
      { src: fitterloop3, title: 'Coach Matching System', caption: 'Browse certified trainers and custom coaching plans' },
      { src: fitterloop4, title: 'Unified Health Metrics', caption: 'Single dashboard for BMI, steps, heart rate, and water' },
      { src: fitterloop5, title: 'Custom Diet Plans', caption: 'Weight loss and weight gain macronutrient recipes' }
    ],
    role: 'Mobile Engineer — Implemented custom responsive workout interfaces, nutrition logging, and REST backend synchronizers.',
    impact: 'Dual-platform release on Google Play & iOS App Store offering seamless workout and food calorie tracking.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fitterloop&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/fitterloop-fitness-nutrition/id6745788039',
    packageId: 'com.fitterloop',
    description: 'Designed and implemented UI components, integrated food scanning capabilities, and connected backend APIs to deliver a responsive, smooth user experience.',
    stack: ['Flutter', 'Food Scanning', 'REST APIs', 'Riverpod', 'Custom UI'],
    icon: 'F',
    metrics: 'Live on Google Play & Apple App Store · Food Scanning Camera Integration',
    playStore: true,
    appStore: true
  },
  {
    id: 'glowpeer',
    name: 'Glowpeer',
    category: 'Skincare & Community',
    type: 'Routines & Tracking Platform',
    number: '09',
    color: '#80D8FF',
    accent: '#02569B',
    logo: glowpeerLogo,
    screenshots: [
      { src: glowpeer1, title: 'AI Face & Product Scan', caption: 'Camera analysis measuring product compatibility and UV safety' },
      { src: glowpeer2, title: 'Routine Hub', caption: 'Morning, skin diary, and night routine reminders' },
      { src: glowpeer3, title: 'Step-by-Step Consistency', caption: 'Step tracker for serums, oils, and ceramide barriers' },
      { src: glowpeer4, title: 'Community Social Feed', caption: 'Real user reviews, skincare journeys, and before/after photos' },
      { src: glowpeer5, title: 'Skin Profile & Shelf', caption: 'Diagnostic cards for oiliness, sensitivity, and elasticity' }
    ],
    role: 'Flutter Developer — Designed daily routine streak systems, reminder scheduling, and user community progress sharing feeds.',
    impact: 'Live in production on both stores, driving sustained user habit tracking and skincare routine consistency.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.glowpeer&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/in/app/glowpeer-skincare-tracker/id6758508627',
    packageId: 'com.glowpeer',
    description: 'Developed a skincare tracking and community platform featuring routine management, product tracking, reminders, and social engagement features, helping users organize routines and monitor progress.',
    stack: ['Flutter', 'Routine Management', 'Product Tracking', 'Reminders', 'Social Features'],
    icon: 'G',
    metrics: 'Live on Google Play & Apple App Store · Community & Habit Streaks',
    playStore: true,
    appStore: true
  },
  {
    id: 'foodingram',
    name: 'FoodIngram',
    category: 'Food Delivery',
    type: 'Multi-Role On-Demand App',
    number: '10',
    color: '#FFAB40',
    accent: '#FF6D00',
    logo: null,
    screenshots: [],
    role: 'Mobile UI & API Engineer — Built customer order flows, store management interfaces, and driver delivery routing screens.',
    impact: 'Enterprise multi-tier architecture coordinating real-time orders between customer, merchant, and driver apps.',
    playStoreUrl: null,
    appStoreUrl: null,
    packageId: null,
    description: 'Worked on UI and API integration for a multi-role food delivery app at Imaginar Technologies, including separate modules for customers, shops, and delivery drivers.',
    stack: ['Flutter', 'Multi-Role Architecture', 'REST APIs', 'Customer & Shop Modules', 'Delivery Tracking'],
    icon: '🍽️',
    metrics: 'Multi-Role Architecture (Customer / Merchant / Driver)',
    playStore: false,
    appStore: false
  },
  {
    id: 'kharcha-paani',
    name: 'Kharcha Paani',
    category: 'Fintech & Shared Living',
    type: 'Flutter Mobile App · iOS & Android',
    number: '11',
    color: '#10B981',
    accent: '#059669',
    logo: kharchaPaaniLogo,
    screenshots: [
      { src: kharcha1, title: 'Households & Net Standing', caption: 'Real-time overview of active rooms ("3 Monkeys", "Ham Do"), net balances, and overall debt standing' },
      { src: kharcha2, title: 'Optimal Debt Settlement ("Who Owes Whom")', caption: 'Graph algorithm minimizing payments needed to settle all group debts' },
      { src: kharcha3, title: 'Add Expense & Multi-Payer Split', caption: 'Categorized expense entry (Grocery, Rent, Wi-Fi, Electricity) with custom share breakdown' },
      { src: kharcha4, title: 'Searchable Expense Ledger', caption: 'Chronological activity stream tracking who paid and exact debt shares' },
      { src: kharcha5, title: 'Visual Expense Report & Donut Chart', caption: 'Interactive breakdown charts displaying total group expenditure by member' }
    ],
    role: 'Lead Flutter Developer — Built the complete mobile application in Dart & Flutter with Riverpod state management, offline-first Cloud Firestore local caching, debt optimization graph solver, and custom dark UI.',
    impact: 'Engineered a standalone cross-platform mobile client enabling roommates to eliminate ledger disputes through automated minimum-transaction settlement calculation and real-time synchronization.',
    playStoreUrl: null,
    appStoreUrl: null,
    packageId: null,
    liveUrl: null,
    adminUrl: null,
    githubUrl: null,
    description: 'A dedicated cross-platform Flutter mobile application designed for roommates and shared households to manage collective living expenses. Features real-time multi-household rooms, automatic debt minimization calculating the fewest transactions needed to settle all balances ("Who Owes Whom"), split categorization (Grocery, Rent, Wi-Fi, Electricity), and interactive donut chart financial reports.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Cloud Firestore', 'Debt Minimization Algorithm', 'Firebase Auth', 'Charts & Analytics'],
    icon: '💰',
    metrics: 'Cloud Firestore Real-Time Sync · Minimum Debt Settlement Algorithm',
    playStore: false,
    appStore: false
  },
  {
    id: 'kharcha-paani-admin',
    name: 'Kharcha Paani — Web Admin Portal',
    category: 'Web Platform & Cloud Operations',
    type: 'React 19 & Tailwind Web Admin Dashboard',
    number: '12',
    color: '#059669',
    accent: '#10B981',
    logo: kharchaPaaniLogo,
    isWeb: true,
    browserUrl: 'https://kharchapaani-890b8.web.app/login',
    liveUrl: 'https://kharchapaani-890b8.web.app/login',
    githubUrl: 'https://github.com/RahuL-XYZ/Kharcha-Paani-Admin',
    screenshots: [
      { src: kharchaPaaniScreen, title: 'Kharcha Paani Web Admin Portal', caption: 'Administrative authentication, household auditing, and cross-group settlement management' }
    ],
    role: 'Full-Stack Web Engineer — Engineered the companion web administration portal for auditing household rooms, managing collectionGroup Firestore queries, and monitoring cross-group settlements.',
    impact: 'Live production admin portal deployed on Firebase Hosting, actively managing shared household expense collections, user accounts, and financial settlement ledgers.',
    description: 'A separate web administration portal built specifically to oversee and manage the Kharcha Paani ecosystem. Deployed on Firebase Hosting, it provides administrators with cross-household auditing, user account controls, and financial settlement ledgers.',
    stack: ['React 19', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'Recharts', 'React Router'],
    icon: '📊',
    metrics: 'Live on Firebase Hosting · Real-Time Firestore Sync & Analytics',
    playStore: false,
    appStore: false
  }
];
