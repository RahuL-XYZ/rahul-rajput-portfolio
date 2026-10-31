export const skillCategories = [
  {
    id: 'mobile',
    title: 'MOBILE DEVELOPMENT',
    subtitle: 'Primary Domain Superpower',
    accent: '#00D9FF',
    skills: [
      { name: 'Flutter', isPrimary: true, level: 'Expert', desc: 'Core framework for cross-platform Android & iOS engineering with 60fps native feel' },
      { name: 'Dart', isPrimary: true, level: 'Advanced', desc: 'Strong typed asynchronous programming, isolates, custom rendering' }
    ]
  },
  {
    id: 'state',
    title: 'STATE MANAGEMENT',
    subtitle: 'Reactive Architecture',
    accent: '#E62429',
    skills: [
      { name: 'Riverpod', isPrimary: false, level: 'Advanced', desc: 'Compile-safe, decoupled state management and dependency injection' },
      { name: 'Provider', isPrimary: false, level: 'Advanced', desc: 'Scoped model and inherited widget architectures' },
      { name: 'GetX', isPrimary: false, level: 'Proficient', desc: 'Lightweight reactive route and state controller flows' }
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND & INTEGRATION',
    subtitle: 'Cloud & Network Mesh',
    accent: '#1464F4',
    skills: [
      { name: 'Firebase', isPrimary: false, level: 'Advanced', desc: 'Auth, Firestore, Cloud Functions, FCM Push Notifications, Analytics' },
      { name: 'REST APIs', isPrimary: false, level: 'Advanced', desc: 'High-throughput contract consumption, serialization, error interceptors' },
      { name: 'Dio', isPrimary: false, level: 'Advanced', desc: 'Custom interceptors, token refresh queues, caching policies' },
      { name: 'WebSockets', isPrimary: false, level: 'Proficient', desc: 'Real-time bidirectional event streaming and instant chat' }
    ]
  },
  {
    id: 'payments',
    title: 'PAYMENTS & MONETIZATION',
    subtitle: 'Transactional Pipelines',
    accent: '#FFE600',
    skills: [
      { name: 'Stripe', isPrimary: false, level: 'Advanced', desc: 'Custom payment sheets, webhook verification, customer escrow' },
      { name: 'RevenueCat', isPrimary: false, level: 'Proficient', desc: 'Cross-platform subscriptions, paywalls, entitlement sync' },
      { name: 'In-App Purchases', isPrimary: false, level: 'Advanced', desc: 'Native Apple StoreKit and Google Play Billing flows' }
    ]
  },
  {
    id: 'tools',
    title: 'ENGINEERING TOOLS',
    subtitle: 'Battle-Tested Workflows',
    accent: '#00D9FF',
    skills: [
      { name: 'Git & GitHub', isPrimary: false, level: 'Advanced', desc: 'Gitflow, semantic commits, PR reviews, CI/CD pipelines' },
      { name: 'Android Studio', isPrimary: false, level: 'Advanced', desc: 'Native debugging, memory profiling, AVD configuration' },
      { name: 'Postman', isPrimary: false, level: 'Advanced', desc: 'API testing, mock servers, automated environment scripts' },
      { name: 'VS Code', isPrimary: false, level: 'Advanced', desc: 'Custom snippet suites, Dart devtools, Flutter inspector' }
    ]
  },
  {
    id: 'additional',
    title: 'ADDITIONAL TECHNOLOGIES',
    subtitle: 'Multiverse Capabilities',
    accent: '#E62429',
    skills: [
      { name: 'React', isPrimary: false, level: 'Proficient', desc: 'Interactive SPA development, hooks, state synchronization' },
      { name: 'JavaScript', isPrimary: false, level: 'Proficient', desc: 'Modern ES6+, DOM manipulation, asynchronous event handling' },
      { name: 'Python', isPrimary: false, level: 'Proficient', desc: 'Scripting, automated data transformations, tooling' },
      { name: 'Django / FastAPI', isPrimary: false, level: 'Proficient', desc: 'Backend service scaffolding, ORM, secure REST endpoints' }
    ]
  }
];

// Preserved backwards compatibility
export const skillGroups = skillCategories.map(cat => ({
  title: cat.title,
  items: cat.skills.map(s => s.name)
}));
