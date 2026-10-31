# 🕷️ Rahul Rajput — Spider-Verse Interactive Developer Portfolio

An award-winning, cinematic Spider-Verse-inspired developer portfolio designed and engineered for **Rahul Rajput** — **Flutter Developer & Mobile Application Engineer**.

Built with **React, Vite, Three.js / React Three Fiber, GSAP, Framer Motion, Lenis Smooth Scroll**, and custom WebGL shaders.

---

## 🚀 Key Features

- **Spider-Verse Cinematic Visuals**: Halftone comic-book overlays, chromatic glitch effects, dynamic neon lighting in Spider-Red (`#E62429`), Electric Blue (`#1464F4`), and Neon Cyan (`#00D9FF`).
- **Intro Sequence**: Procedurally animated spider-web canvas, glowing particle birth, superhero silhouette reveal, and session-remembered skip controls (`sessionStorage`).
- **Interactive 3D Night City Hero**: Three.js procedural skyscrapers with illuminated windows, floating holographic Flutter logo, interactive web particles, and a stylized superhero avatar on a high-rise ledge (ready for personal GLB drop-in).
- **Comic-Panel Origin Story**: Manga/comic angled panels with halftone dot gradients, highlighting 3.5+ years of Flutter engineering, clean architecture, and reactive state management.
- **Holographic 3D Skill Superpowers**: 6 specialized multiverse categories featuring 3D tilt, magnetic hover physics, and Flutter as the dominant centerpiece.
- **Multiverse Missions (Projects)**: 5 featured flagship apps (Baurow, CalCounts Pro, HireGroww, Fitterloop, Glowpeer) displayed in mobile device mockups with real store links, plus an expandable archive for remaining production releases (Dine Visuals, Scribeflo, Jainmatri, etc.) and deep case-study modals.
- **Chronicle Timeline**: Animated vertical neon spine with milestone nodes detailing professional experience at Codiant (A YASH Technologies Company) and Imaginar Technologies.
- **Spider-Verse Terminal**: Interactive hacker terminal with live commands (`help`, `about`, `skills`, `projects`, `experience`, `spider-sense`, `clear`), command history, and audio clicks.
- **Ambient Audio Engine**: Zero-asset Web Audio API atmospheric drone and sound effects (web-thwip, glitch pulse, click) with instant mute controls and tab-visibility auto-pause.
- **Performance & Accessibility**: Respects `prefers-reduced-motion`, WebGL fallback support, Lenis smooth scrolling, DPR capping, and full touch responsiveness.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Animations**: GSAP + Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Audio**: Web Audio API (Synthesized Superhero Drone & FX)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Customizing & Replacing 3D Model

To replace the procedural superhero character with your own 3D avatar:
1. Place your model file at `public/models/avatar.glb`
2. Open `src/components/three/SuperheroAvatar.jsx`
3. Uncomment the `useGLTF` lines as documented in the file.

---

## 🌐 Deployment Instructions

### Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`

### Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
