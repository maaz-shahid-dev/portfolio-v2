# Muhammad Maaz Shahid — Portfolio V2

**Muhammad Maaz Shahid**  
**Software Developer | Technical Team Lead | IT Operations & AI Automation**  
**4.5+ years of hands-on experience**

**Live portfolio:** [https://portfolio-4bdf2.web.app/](https://portfolio-4bdf2.web.app/)

## Portfolio overview

Portfolio V2 is a premium, responsive 3D developer portfolio showcasing Muhammad Maaz Shahid’s professional profile, technical work, and digital growth capabilities. The site combines a cinematic interactive hero experience with clear sections for projects, professional experience, SEO/AI automation focus, and contact.

## Tech stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Three.js**
- **React Three Fiber** (`@react-three/fiber`, `@react-three/drei`)
- **GSAP**
- **Motion**
- **Firebase Hosting** (configuration included for SPA hosting)

## Features

- **Interactive 3D hero** with React Three Fiber/Three.js, graceful fallback handling, and reduced-motion-aware behavior
- **Responsive design** across mobile, tablet, and desktop layouts
- **Projects** showcase with detailed cards/modals and documented highlights
- **Professional experience** timeline with verified roles and dates
- **SEO, AI & Digital Growth** section, including iSkills NEXT learning and digital entrepreneurship highlights
- **Contact section** with verified links, CV download, and client-side validated mailto draft form
- Performance-conscious loading, accessible navigation patterns, and structured content architecture

## Installation and local development

### Prerequisites
- Node.js
- npm

### Install dependencies
```bash
npm install
```

### Start local development server
```bash
npm run dev
```
Vite will print the local development URL (typically `http://localhost:5173`).

## Production build

### Create production build
```bash
npm run build
```
This runs TypeScript project checks (`tsc -b`) and generates the production bundle in `dist/`.

### Preview production build locally
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project notes

- Firebase Hosting is configured for project `portfolio-4bdf2` (`firebase.json`, `.firebaserc`) with SPA rewrites to `dist/index.html`. Do not deploy to production without explicit approval.
- The contact form opens a prepared email draft via `mailto:` (no backend submission service is configured).
- Portfolio content is maintained in `src/data/` (profile, projects, experience, skills, services, SEO/learning data) to keep information consistent and verifiable.

## Repository

Target repository: [https://github.com/maaz-shahid-dev/portfolio-v2](https://github.com/maaz-shahid-dev/portfolio-v2)  
Live site: [https://portfolio-4bdf2.web.app/](https://portfolio-4bdf2.web.app/)


