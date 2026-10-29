# impure.me V2 — Production Website for Punit Pal (IMPURE®)

> **"I build products. I build communities. I bring them together."**  
> The personal portfolio, engineering archive, and ecosystem distribution dossier of **Punit Pal** — Technical Founder, Systems & Web3 Developer, and Ecosystem GTM Strategist.

---

## 🏛️ Architecture & Tech Stack

impure.me V2 is engineered with an uncompromising focus on **performance, typography, developer credibility, and accessible ergonomics**:

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **Language**: TypeScript in strict mode
- **Design System**: *The Editorial Dossier* (Swiss Typography + Contemporary Architectural Brutalism)
- **Styling**: Native CSS Custom Properties with zero runtime overhead
- **Typography**: Space Grotesk (Display), Inter (Body), JetBrains Mono (Technical Metadata)
- **Asset Pipeline**: Static image optimization, preconnected fonts, tactile paper grain texture
- **SEO & Social**: Automated dynamic sitemap, Schema.org Person JSON-LD, OpenGraph & Twitter Cards
- **Accessibility**: WCAG 2.1 AA contrast compliance, keyboard-trapped Command Palette (`Ctrl+K`), visible focus rings, single `<h1>` hierarchy, skip-to-content navigation

---

## 📁 Repository Structure

```
p:\impur\impure.me/
├── archive-v1/                 # Safely preserved legacy V1 files (index.html, main.js, style.css)
├── public/
│   ├── favicon.svg             # Brand vector icon
│   ├── robots.txt              # Crawler instructions with sitemap reference
│   └── images/
│       ├── punit-pal.jpg       # Authentic portrait of Punit Pal (1995x1995)
│       ├── paper-texture.png   # Tactile paper grain overlay
│       └── og-image.png        # Social share card
├── scripts/
│   └── test-build.js           # Automated test suite (routes, meta, assets, HTML integrity)
├── src/
│   ├── components/
│   │   ├── achievements/
│   │   │   └── HackathonRecord.astro   # Verified 5x podium finishes & proof links
│   │   ├── ecosystems/
│   │   │   └── GtmCaseCard.astro       # Structured GTM case studies
│   │   ├── layout/
│   │   │   ├── Footer.astro            # Marquee tape, specs & terminal easter egg
│   │   │   └── Navbar.astro            # Status bar, nav links, theme toggle, mobile drawer
│   │   ├── projects/
│   │   │   └── ProjectCard.astro       # Dossier cards with index numbers & tech tags
│   │   └── ui/
│   │       ├── CommandPalette.astro    # Accessible Ctrl/Cmd+K instant search modal
│   │       └── ThemeToggle.astro       # Persisted light/dark theme switcher
│   ├── data/
│   │   ├── achievements.ts     # Verified hackathon records (1st place, runner-ups, finalists)
│   │   ├── ecosystems.ts       # Builder Base stats & GTM case study data
│   │   ├── projects.ts         # 18 projects catalog (8 featured + 10 archive)
│   │   └── story.ts            # Personal narrative, RGPV education, principles & milestones
│   ├── layouts/
│   │   └── BaseLayout.astro    # Root HTML layout with zero-FOUC theme script
│   ├── pages/
│   │   ├── index.astro         # Homepage (8 curated sections)
│   │   ├── grow.astro          # Developer Relations & Ecosystem GTM
│   │   ├── story.astro         # Personal story, academic background & operating principles
│   │   ├── contact.astro       # Direct conversion & transmission channels
│   │   └── build/
│   │       ├── index.astro     # Filterable project archive (18 systems across 5 categories)
│   │       └── [slug].astro    # Deep architectural case studies for featured projects
│   └── styles/
│       ├── global.css          # Reset, layout framework, buttons, and animations
│       ├── tokens.css          # Light & dark theme CSS variables, spacing scale
│       └── typography.css      # Fluid clamps, Swiss headings, and monospaced labels
├── astro.config.mjs            # Astro configuration with sitemap integration
├── package.json                # Scripts and modern dependencies
├── tsconfig.json               # Strict TypeScript configuration
├── vercel.json                 # Vercel static deployment configuration
├── AUDIT.md                    # Initial audit report of previous repositories
├── DESIGN_SYSTEM.md            # Comprehensive design system tokens and guidelines
└── CONTENT_INVENTORY.md        # Master verified content, hackathons, and channel stats
```

---

## ⚡ Quick Start & Local Development

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation
```bash
# Clone and checkout the impure-v2 branch
git checkout impure-v2

# Install dependencies
npm install
```

### Local Dev Server
```bash
npm run dev
# Server runs at http://localhost:4321
```

### Type Checking & Diagnostics
```bash
npm run check
# Validates Astro components and strict TypeScript types
```

### Production Build
```bash
npm run build
# Generates 23 static pages into the dist/ directory
```

### Automated Acceptance & Quality Verification
```bash
npm test
# Runs scripts/test-build.js (verifies 23 routes, SEO meta, single H1s, assets)
```

---

## 🧭 Page Architecture & Routes

| Route | Purpose & Key Features |
| :--- | :--- |
| **`/`** | **The Curated Dossier Overview**: Typographic hero, authentic portrait of Punit Pal, 4-stat evidence strip, 8 selected projects, Three Pillars breakdown, Builder Base founder case study, verified hackathon records, field notes, and contact CTA. |
| **`/build`** | **Engineering Archive**: Interactive category filtering (All, Compilers, AI & Agents, Blockchain Infra, Full-Stack, Experiments), instant search input, and access to all 18 documented systems. |
| **`/build/[slug]`** | **Architectural Deep Dives**: Individual case studies for PyVax, Sol2Rust, FlowMon, RustAG, RxGR, Bloopa, APV3RSE, and With Claude. Includes problem motivation, individual contribution, technical pipeline, code snippets, engineering roadblocks solved, and verified links. |
| **`/grow`** | **Developer Relations & Ecosystem GTM**: Builder Base distribution engine (64K+ Luma event audience, 70K+ newsletter reach, 2K+ vetted builders), contributor roles (Claude Community, TigerGraph, Avalanche, BNB), and 4 structured GTM case studies (Hack in Hills 2026, Claude Workshops, Builder Base Expansion, Mumbai Devcon Week). |
| **`/story`** | **The Builder Dossier**: Restrained biographical narrative (Origins, Hackathon Crucible, Distribution Realization, The Frontier), formal academic background (BTech CS AI & DS at RGPV 2024–2028), operating principles, and chronological milestones timeline (2024–2026). |
| **`/contact`** | **Secure Comms & Transmission**: Distinct collaboration opportunities, direct verified channels (Email, GitHub, X, LinkedIn, Farcaster), and an interactive client-validated transmission form with zero-loss `mailto:` fallback. |

---

## 🏆 Verified Hackathon Record

- 🏆 **Sol2Rust** — **1st Place Champion** @ Core Nexus (Arbitrum Hackathon) — [Proof on Luma](https://luma.com/ozoqjknu)
- 🥈 **PyVax** — **1st Runner-Up** @ AVAX Kolkata (Avalanche Team1 Hack25) — [Proof on Luma](https://luma.com/T1-Hack25-Kolkata)
- 🥈 **PyMon** — **1st Runner-Up** @ Monad Delhi V2 — [Proof on Luma](https://luma.com/zzogo8yu)
- 🥈 **FlowMon** — **1st Runner-Up** @ Monad Blitz V3 — [Proof on Luma](https://luma.com/blitz-delhi-mar-2026)
- 🥉 **NeuroFit** — **2nd Runner-Up** @ BrahmaX 1.0 — [Proof on Unstop](https://unstop.com/o/Ch1wQ9l)
- ⭐ **APV3RSE** — **Top 15 Finalist** @ Aptos Winter School 2025 (IIT Delhi, ~900 applicants)
- ⭐ **Bloopa** — **Top 15 Finalist** @ Algorand Hack Series 3.0

---

## ⌨️ Signature Interactions

1. **Command Palette (`Ctrl+K` / `⌘K`)**: Desktop and mobile accessible search modal allowing immediate navigation across all 18 projects, routes, achievements, and contact actions with full keyboard arrow controls.
2. **Tactile Theme Switching**: Full light and dark themes using CSS Custom Properties. Persisted via `localStorage` and synchronized with `prefers-color-scheme`, with zero flash of unstyled content (FOUC).
3. **Interactive Project Exploration**: Client-side category filtering and real-time substring search with immediate URL parameter alignment.
4. **Retro Dossier Easter Egg**: Non-intrusive diagnostic telemetry drawer in the footer paying homage to the original dossier identity without interrupting navigation.

---

## 🚀 Deployment (Vercel)

The repository is configured for zero-configuration static deployment on Vercel:

```bash
# Build command:
npm run build

# Output directory:
dist
```

`vercel.json` is configured to serve clean URLs with static caching headers.

---

*Authored with precision for Punit Pal (IMPURE®).*
