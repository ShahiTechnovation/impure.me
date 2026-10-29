# impure.me V2 — Design System Specification

**Design Concept**: **THE EDITORIAL DOSSIER**  
**Aesthetic Blend**: Swiss Editorial Typography + Contemporary Architectural Brutalism + Technical Dossier Documentation  
**Brand**: IMPURE® / PUNIT PAL  

---

## 1. Design Philosophy & Core Principles

1. **Content Over Decoration**: The engineering, ecosystem growth, and compiler architecture are the stars. Visual flourishes exist to give structure, hierarchy, and tactile confidence—not to distract.
2. **Swiss Typographic Discipline**: Asymmetric balance, rigorous baseline rhythm, oversized bold headlines paired with razor-sharp micro-typography and technical labels.
3. **Tactile Brutalism**: Controlled 1px borders, technical index numbers (`PRJ-01`, `ACH-05`), dossier stamps, and monospace data strips evoke precision engineering documentation.
4. **Calibrated Signal Accent**: The signal red (`#D92E32`) is deployed with surgical restraint—used only for active states, key milestone badges, status indicators, and critical CTAs.
5. **Universal Accessibility & Ergonomics**: Meets WCAG AA contrast standards, keyboard navigable, zero scroll-hijacking, and fully honors `prefers-reduced-motion`.

---

## 2. Color System & Design Tokens

The system features two fully considered palettes: **Editorial Light (Tactile Paper)** and **Brutalist Dark (Architectural Night)**. Colors are implemented using CSS Custom Properties on `:root` and `[data-theme="dark"]`.

### 2.1 CSS Custom Properties Token Map

```css
:root {
  /* Editorial Light Theme */
  --color-paper: #F4F1EB;       /* Warm archival paper background */
  --color-ink: #171717;         /* Deep typographic black */
  --color-signal: #D92E32;      /* Swiss signal red accent */
  --color-signal-hover: #B52226;/* Deep signal red for hover states */
  --color-signal-subtle: rgba(217, 46, 50, 0.08); /* Transparent signal wash */
  --color-muted: #67645F;       /* Editorial secondary text */
  --color-line: #D5D0C9;        /* 1px architectural grid border */
  --color-surface: #FFFFFF;     /* Pure surface card background */
  --color-surface-dim: #ECE8E0; /* Subtle inset container tone */
  --color-night: #101114;       /* Night contrast tone */
  
  /* Semantic Tokens */
  --color-bg: var(--color-paper);
  --color-text: var(--color-ink);
  --color-text-muted: var(--color-muted);
  --color-border: var(--color-line);
  --color-card: var(--color-surface);
  
  /* Typography Families */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, Menlo, monospace;

  /* Spacing Scale (4px Base Unit) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Layout Boundaries */
  --max-width: 1440px;
  --reading-width: 760px;
  --header-height: 72px;
  
  /* Motion & Easing */
  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 150ms var(--ease-editorial);
  --transition-base: 250ms var(--ease-editorial);
  --transition-slow: 400ms var(--ease-editorial);
}

[data-theme="dark"] {
  /* Brutalist Dark Theme */
  --color-paper: #101114;       /* Deep slate night background */
  --color-ink: #F4F1EB;         /* Clean archival text */
  --color-signal: #FF464B;      /* Calibrated vibrant signal red for dark contrast */
  --color-signal-hover: #FF666A;/* Lighter red hover */
  --color-signal-subtle: rgba(255, 70, 75, 0.12);
  --color-muted: #A4A29F;       /* High-legibility muted gray */
  --color-line: #2C2E33;        /* Architectural grid borders in night mode */
  --color-surface: #18191E;     /* Elevated dark surface */
  --color-surface-dim: #131417; /* Inset dark container */
  --color-night: #090A0C;       /* Deepest contrast black */
}
```

---

## 3. Typography Scale & Hierarchy

| Role | Font Family | Weight | Size (Desktop / Fluid) | Tracking / Line-Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Space Grotesk | 700 Bold | `clamp(4.25rem, 11vw, 10.5rem)` | `-0.04em` / `0.9` | Hero name `PUNIT PAL` |
| **Section Title** | Space Grotesk | 700 Bold | `clamp(2rem, 5vw, 3.75rem)` | `-0.03em` / `1.05` | Major section headlines |
| **Project Title** | Space Grotesk | 700 Bold | `clamp(1.5rem, 2.5vw, 2.25rem)` | `-0.02em` / `1.15` | Project cards & case study headers |
| **Subheading / Lead** | Inter | 500 Medium | `1.25rem` – `1.5rem` | `-0.01em` / `1.4` | Narrative introductions & hero subtitles |
| **Body Copy** | Inter | 400 Regular | `1rem` – `1.0625rem` | `0` / `1.65` | Project descriptions, case study paragraphs |
| **Technical Label** | JetBrains Mono | 600 SemiBold | `0.75rem` – `0.8125rem` | `+0.06em` / `1.2` uppercase | Index tags (`PRJ-01`), status indicators |
| **Micro Metadata** | JetBrains Mono | 500 Regular | `0.6875rem` – `0.75rem` | `+0.04em` / `1.3` | Timestamps, coordinates, license markers |

---

## 4. Grid System & Container Architecture

- **Desktop (≥ 1024px)**: 12-column grid, 24px column gap, 1440px maximum width with 32px padding edges.
- **Tablet (640px – 1023px)**: 6 or 8-column adaptive grid, 16px column gap, 24px padding edges.
- **Mobile (< 640px)**: 4-column grid, 12px gap, 16px padding edges.
- **Reading Container**: Fixed `max-width: 760px` centered column for long-form case study narratives, ensuring optimal line length (60–75 characters per line).
- **Asymmetric Offsets**: Select project showcase layouts utilize 7/5 or 8/4 grid splits to break visual monotony while preserving grid discipline.

---

## 5. Component Library Specifications

### 5.1 Global Navigation (`Navbar.astro`)
- Sticky top banner with subtle backdrop blur and 1px bottom border.
- Left: Wordmark `PUNIT PAL` with badge `// IMPURE®`.
- Center: Route links (`/build`, `/grow`, `/story`, `/contact`) with active state indicator (signal red underline and dot).
- Right: Quick trigger pill for Command Palette (`⌘K` / `Ctrl+K`), Theme Switcher toggle (light/dark), and Mobile Hamburger trigger.
- Full keyboard trap and focus restoration when mobile menu opens.

### 5.2 Command Palette (`CommandPalette.astro`)
- Activated by `Ctrl+K`, `Cmd+K`, or UI button click.
- Accessible modal dialog (`role="dialog"`, `aria-modal="true"`).
- Real-time instant search input filtering:
  - 18 projects across all categories
  - 5 primary routes
  - 7 verified hackathons & recognitions
  - Direct contact actions (Email, GitHub, X, LinkedIn)
- Keyboard arrow navigation (`Up`, `Down`, `Enter`, `Escape`).

### 5.3 Project Dossier Card (`ProjectCard.astro`)
- 1px architectural border with top technical metadata bar:
  - Project Index number (`PRJ-01` to `PRJ-08`)
  - Target Blockchain / Environment (`AVALANCHE C-CHAIN`, `ARBITRUM STYLUS`, `MONAD EVM`)
  - Status or Award badge (`1ST PLACE`, `1ST RUNNER-UP`, `PRODUCTION`)
- High-contrast title and concise, punchy engineering summary.
- Tech Stack badge pills in monospace font.
- Direct link to deep-dive case study (`/build/[slug]`) and secondary direct link to GitHub repository.
- Smooth scale-up and subtle border tint on hover without layout reflow.

### 5.4 Recognition & Hackathon Explorer (`HackathonRecord.astro`)
- Strict distinction between:
  - **1st Place**: Gold border & signal red badge
  - **1st Runner-Up**: Silver border & bold technical badge
  - **2nd Runner-Up**: Bronze border & clear placement badge
  - **Top 15 Finalist**: Editorial badge with applicant scale (e.g. `Top 15 / 900+`)
- Each row links directly to verified external proof (Luma, Unstop, Devfolio).

### 5.5 DevRel & GTM Case Study Card (`GtmCaseCard.astro`)
- Structured according to the technical GTM framework:
  - **Objective & Developer Persona**
  - **Distribution Channels & Activation Strategy**
  - **Punit's Individual Contribution & Leadership Role**
  - **Verified Metrics & Quantifiable Outcomes**
  - **Key Retrospective Learnings**

### 5.6 Tactile Dossier Banner & Marquee (`DossierTape.astro`)
- Architectural ribbon running across sections with monospace ticker items:
  `COMPILERS // AI AGENTS // WEB3 INFRASTRUCTURE // BUILDER BASE // 5X PODIUM FINISHER //`

---

## 6. Motion & Interaction Guidelines

1. **Native Performance**: 100% powered by CSS transitions, CSS transforms, and the native `IntersectionObserver` API. No bloated animation runtimes.
2. **Text & Section Reveals**: Elements slide in with 16px translateY and opacity transition over 300ms using `--ease-editorial`.
3. **Prefers-Reduced-Motion**: Fully enforced via media query:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
4. **No Scroll Hijacking**: Native window scrolling is preserved unconditionally. Smooth anchor scrolling uses CSS `scroll-behavior: smooth`.

---

## 7. Accessibility Checklist (WCAG 2.1 AA)

- [x] All text-to-background contrast ratios ≥ 4.5:1 (Normal) and ≥ 3:1 (Large/Bold).
- [x] Visible focus rings on all interactive elements (`:focus-visible { outline: 2px solid var(--color-signal); outline-offset: 2px; }`).
- [x] Skip to main content link provided at the very top of DOM.
- [x] Semantic HTML5 landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, `<footer>`.
- [x] Only one `<h1>` per page.
- [x] Alt text on all meaningful images; decorative elements marked with `aria-hidden="true"`.
- [x] Modals trap keyboard focus and dismiss on `Escape`.

