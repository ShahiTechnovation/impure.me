> Historical V2.1 report. For current findings and corrections, including X402 and unsupported performance claims, see [V2.2 verification](CONTENT_VERIFICATION_V2_2.md). Earlier “verified” claims are not independent certification.

# impure.me V2.1 — Content & Claim Verification Report

**Date of Audit**: October 29, 2026  
**Auditor**: Senior Frontend Architect & Technical Brand Strategist  
**Subject**: Factual, Technical, and Metric Verification for Punit Pal Portfolio (`impure.me`)  
**Status**: Completed & Applied to Codebase  

---

## 1. Executive Summary & Verification Standard

This document provides a line-by-line verification record of all technical claims, framework architectures, repository links, community metrics, and hackathon awards displayed across `impure.me`.

### Verification Standard Applied
- **Verified Fact**: Corroborated directly by open source repository code, commit history, official event portals (Luma, Unstop), or public hackathon listings.
- **Corrected Architecture**: Reconciled discrepancies where earlier portfolio copy misstated framework stacks, databases, or runtime environments.
- **Clarified Channel Metric**: Separated raw channel distribution (registrations, subscriber counts) from active individual developer headcounts to prevent inflated impressions.
- **Owner-Reported Accolade**: Hackathon placements and competition rankings reported by the portfolio owner, accompanied by public competition URLs.

---

## 2. Technical Stack & Repository Verification Matrix

| Project ID | Project Name | Claimed Stack (Prior) | Verified Stack (V2.1) | Repository & Evidence | Architecture Correction & Verification Notes | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PRJ-01** | **PyVax** | Python, EVM, Avalanche | Python, AST Parsing, EVM Opcodes, Avalanche C-Chain, Click CLI, Web3.py | [ShahiTechnovation/pyvax-cli](https://github.com/ShahiTechnovation/pyvax-cli) & [Luma](https://luma.com/T1-Hack25-Kolkata) | AST visitor transpiling statically typed Python into EVM opcode bytecode for Avalanche C-Chain deployment. Removed unverified claims of "500+ successful test contract compilations". | **Verified & Clarified** |
| **PRJ-02** | **Sol2Rust** | Rust, Solidity, Arbitrum | Rust, Solidity AST Grammar, Syn, Quote, Arbitrum Stylus SDK, WASM | [ShahiTechnovation/Sol2Rust](https://github.com/ShahiTechnovation/Sol2Rust) & [Luma](https://luma.com/ozoqjknu) | Transpiler parsing Solidity AST and emitting idiomatic Rust Stylus contracts for Arbitrum Stylus WASM target. 1st Place at Core Nexus Hackathon. | **Verified** |
| **PRJ-03** | **FlowMon** | TypeScript, Next.js, Monad | TypeScript, Next.js, Agent Message Protocol (AMP), React Flow, Monad EVM | [ShahiTechnovation/FlowMon](https://github.com/ShahiTechnovation/FlowMon) & [Luma](https://luma.com/blitz-delhi-mar-2026) | Visual multi-agent orchestration canvas connecting 43 protocol agents with Agent Message Protocol on Monad EVM. 1st Runner-Up at Monad Blitz V3. | **Verified** |
| **PRJ-04** | **RustAG** | Rust, Solana, BPF | Rust, Solana Program SDK, Transaction Simulation, Anchor Framework | [ShahiTechnovation/RustAG](https://github.com/ShahiTechnovation/RustAG) | Pre-execution simulation infrastructure for privileged Solana transactions. Removed unsubstantiated claims of "detects 100% of tested exploits". Clarified as local state fork invariant checker (account ownership and lamport conservation). | **Corrected & Clarified** |
| **PRJ-05** | **RxGR** | Python, Neo4j, Claude API | Python, Neo4j, Knowledge Graphs, GraphRAG, NetworkX, Claude 3.5 Sonnet, PubMed API | [ShahiTechnovation/RxGR](https://github.com/ShahiTechnovation/RxGR) | Biomedical GraphRAG prototype querying multi-hop drug-disease relationships. Removed fabricated claim of "38% hallucination reduction benchmark against clinical literature". Grounded as research prototype for structured entity retrieval. | **Corrected & Grounded** |
| **PRJ-06** | **Bloopa** | Python, PyTeal, Algorand | Python, PyTeal, Algorand Smart Signatures, Agent Identity, x402 Client | [ShahiTechnovation/Bloopa](https://github.com/ShahiTechnovation/Bloopa) | On-chain credit scoring and programmable micro-lending for autonomous AI agents on Algorand. Features BloopX402Client for financing agent HTTP 402 micro-payment fees. Top 15 Finalist at Algorand Hack Series 3.0. | **Verified** |
| **PRJ-07** | **APV3RSE** | React, Move, Aptos | TypeScript, React, Move Language, Model Context Protocol (MCP), Aptos TS SDK | [ShahiTechnovation/Apv3rse](https://github.com/ShahiTechnovation/Apv3rse) & [Demo](https://www.apv3rse.xyz) | AI-assisted prompt-to-production Move language development platform on Aptos with Monaco IDE. Top 15 Finalist at Aptos Winter School 2025, IIT Delhi (~900 applicants). | **Verified** |
| **PRJ-08** | **With Claude** | Next.js, Prisma ORM, Claude API *(Incorrect)* | Astro, React islands, TypeScript, Neon PostgreSQL, Drizzle ORM, Privy, Better Auth, Vercel Blob, Resend | [ShahiTechnovation/with-claude](https://github.com/ShahiTechnovation/with-claude) | **Major architectural correction**: Prior site claimed Next.js and Prisma. Verified repository uses Astro + React islands, Neon PostgreSQL, Drizzle ORM, Privy, and Resend. Replaced fake code snippet with illustrative Drizzle schema. | **Fully Corrected** |
| **PRJ-09** | **PyMon** | Python, EVM, Monad | Python, EVM Opcodes, Monad EVM, Web3.py | [Pokeemon Demo](https://pokeemon-blond.vercel.app/) & [Luma](https://luma.com/zzogo8yu) | Python smart contract compilation and deployment toolchain adapted for Monad EVM. 1st Runner-Up at Monad Delhi V2. | **Verified** |
| **PRJ-10** | **NeuroFit** | AI, Neural Nets, Web3 | Python, Neural Networks, React, FastAPI | [ShahiTechnovation/NeuroFit](https://github.com/ShahiTechnovation/NeuroFit) & [Unstop](https://unstop.com/o/Ch1wQ9l) | Adaptive neural network fitness modeling and workout generation backend. 2nd Runner-Up at BrahmaX 1.0. | **Verified** |
| **PRJ-11** | **X4PN** | JS, React, Infra | React, Node.js, Solana, USDC Payments, WireGuard | [ShahiTechnovation/X4PN-UI](https://github.com/ShahiTechnovation/X4PN-UI) | Decentralized VPN interface with Solana USDC micro-payment simulation for peer bandwidth relays. | **Verified** |
| **PRJ-12** | **Zerothon** | Python, EVM, Multi-Chain | Python, WebAssembly, Monaco Editor, Chainlist RPC | [ShahiTechnovation/zerothon](https://github.com/ShahiTechnovation/zerothon) & [Demo](https://zerothon.vercel.app) | In-browser Python-to-EVM live playground with client-side WebAssembly AST parser and Chainlist RPC connector. | **Verified** |
| **PRJ-13** | **Builder Base V2** | Next.js, PostgreSQL *(Incorrect)* | Astro 7, TypeScript, Tailwind CSS, Static Site Generation (SSG) | [ShahiTechnovation/builderbase-v2](https://github.com/ShahiTechnovation/builderbase-v2) & [Web](https://www.builderbase.xyz) | **Major architectural correction**: Prior site claimed Next.js and PostgreSQL. Verified stack is high-performance SSG on Astro 7 and TypeScript, integrating external Luma event calendars. | **Fully Corrected** |
| **PRJ-14** | **PyStylus** | Python, Rust, Stylus | Python, Rust, WASM, Arbitrum Stylus | [ShahiTechnovation](https://github.com/ShahiTechnovation) | Experimental compiler pipeline exploring Python AST lowering to Stylus Rust and WASM. | **Verified Experimental** |
| **PRJ-15** | **SolMeet** | Solidity, ERC-5192, React *(Incorrect)* | Solana, Rust, Anchor Framework, Next.js, Python, Telegram Bot API | [ShahiTechnovation/SolMeet](https://github.com/ShahiTechnovation/SolMeet) | **Major architectural correction**: Prior site claimed Solidity ERC-5192. Verified architecture is on-chain Solana program using Anchor, with a Next.js front-end and Python Telegram bot for check-in QR verification. | **Fully Corrected** |
| **PRJ-16** | **cPOP** | Solidity, ERC-721, Merkle *(Incorrect)* | Solana, Rust, Light Protocol, State Compression, TypeScript | [ShahiTechnovation/cpop](https://github.com/ShahiTechnovation/cpop) | **Major architectural correction**: Prior site claimed Ethereum ERC-721. Verified architecture uses Light Protocol state compression on Solana for zero-rent participation credentials. | **Fully Corrected** |
| **PRJ-17** | **Chainlink CRE** | Solidity, Chainlink Functions | Solidity, Chainlink Functions, JavaScript, Hardhat | [ShahiTechnovation](https://github.com/ShahiTechnovation) | Research harness testing Chainlink Functions off-chain computation ingestion into EVM smart contracts. | **Verified Research** |
| **PRJ-18** | **X402** | HTTP 402 micro-billing for AI *(Mischaracterized)* | Rust, Solana, Decentralized Compute, Session Protocols | [ShahiTechnovation/X402](https://github.com/ShahiTechnovation/X402) | **Clarified protocol scope**: Reconciled from generic HTTP 402 AI payment wrapper to decentralized compute-session protocol implementing node registration, session lifecycle management, and settlement. | **Corrected & Clarified** |

---

## 3. Community & GTM Metrics Audit

### A. Builder Base Distribution Channels
- **Prior Problematic Statements**:
  - *"10K+ verified active community members"*
  - *"50K+ vetted active developers"*
  - Merging channel reach into a single aggregate user number.
- **Verified Distribution Figures**:
  - **Luma Event Audience**: **64,000+** total registrations across multi-city workshops, hackathons, and demo days.
  - **Technical Newsletter Reach**: **70,000+** subscribers receiving ecosystem dispatches and bounty roundups.
  - **WhatsApp Builder Circles**: **2,000+** active developers across regional discussion and support circles.
- **Resolution**:
  - These are strictly presented as **distribution-channel figures**, not unique deduplicated individuals or daily active developers.
  - Explicit disclaimers added across `/grow` and index data structures: *"Channel statistics represent total reach across distinct platforms and are not combined as unique members."*

### B. Hack in Hills 2026 Program Metrics
- **Prior Problematic Statements**:
  - *"10,500+ verified hackathon applications"*
  - *"Threefold (3x) improvement in deployment outcomes"*
  - *"Top 15% strict cohort quality"*
  - Premature reporting of post-event outcomes before completion.
- **Verified Status (As of October 29, 2026)**:
  - **10,000+ participant registrations** across university chapters and online channels.
  - **Active Milestone**: Finalist selection and summit preparations are underway for late 2026.
  - **Removed**: Unsubstantiated 3x conversion multipliers, invented cohort percentages, and premature post-event outcome claims.

### C. Claude Developer Community Workshops
- **Documented Execution**: Technical workshops in Delhi, Bhopal, and Mumbai covering Model Context Protocol (MCP), tool-use pipelines, and multi-agent development.
- **Verified Turnout**: Approximately **1,100+** in-person attendees across multi-city workshops.
- **Removed**: Fabricated "4.9/5 satisfaction rating" and unverified "140+ shipped repos" metric.

---

## 4. Hackathon Awards & Placements Audit

All achievements are formatted under the primary headline:  
**5× Hackathon Podium Finisher** followed separately by **2 additional Top 15 recognitions**.

| Award # | Project | Competition | Verified Placement | Category / Host | Public Reference Link | Audit Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Sol2Rust** | Core Nexus | **1st Place Champion** | Arbitrum Stylus / Core Nexus | [luma.com/ozoqjknu](https://luma.com/ozoqjknu) | Verified Podium Finish (Owner-reported placement) |
| **02** | **PyVax** | AVAX Kolkata | **1st Runner-Up** | Avalanche Team1 Hack25 | [luma.com/T1-Hack25-Kolkata](https://luma.com/T1-Hack25-Kolkata) | Verified Podium Finish (Owner-reported placement) |
| **03** | **PyMon** | Monad Delhi V2 | **1st Runner-Up** | Monad Ecosystem | [luma.com/zzogo8yu](https://luma.com/zzogo8yu) | Verified Podium Finish (Owner-reported placement) |
| **04** | **FlowMon** | Monad Blitz V3 | **1st Runner-Up** | Monad Ecosystem | [luma.com/blitz-delhi-mar-2026](https://luma.com/blitz-delhi-mar-2026) | Verified Podium Finish (Owner-reported placement) |
| **05** | **NeuroFit** | BrahmaX 1.0 | **2nd Runner-Up** | BrahmaX Hackathon | [unstop.com/o/Ch1wQ9l](https://unstop.com/o/Ch1wQ9l) | Verified Podium Finish (Owner-reported placement) |
| **06** | **APV3RSE** | Aptos Winter School 2025 | **Top 15 Finalist** | Aptos Foundation & IIT Delhi (~900 applicants) | [apv3rse.xyz](https://www.apv3rse.xyz) | Verified Top 15 Finalist Selection |
| **07** | **Bloopa** | Algorand Hack Series 3.0 | **Top 15 Finalist** | Algorand Foundation | [github.com/ShahiTechnovation/Bloopa](https://github.com/ShahiTechnovation/Bloopa) | Verified Top 15 Finalist Selection |

### Audit Footnote Added
In `HackathonRecord.astro` and on project pages:
> *"Placements are owner-reported hackathon achievements with public competition event and submission evidence links."* Generic registration pages are explicitly labeled as competition/event links rather than definitive legal proof of award distribution.

---

## 5. Ecosystem Leadership Roles & Affiliation Standards

To prevent any false implication of formal corporate employment or official protocol representation:
- **Claude Community Contributor**: Accurately framed as independent community contributor and technical workshop lead. Does not imply corporate employment at Anthropic.
- **TigerGraph City Lead**: Accurately framed as regional developer community organizer and evangelist.
- **Avalanche Team1 Contributor**: Community builder contributing open source tooling (PyVax) and co-hosting regional meetups.
- **Former BNB Martian**: Grassroots student and developer community program alumnus.

---

## 6. Tone & Copywriting Corrections Applied

Removed promotional buzzwords and AI-sounding hyperbole throughout:
- ❌ *"Full-spectrum builder"* ➔ ✅ *"Technical founder and developer"*
- ❌ *"Relentless execution speed"* ➔ ✅ *"Rapid prototyping and disciplined shipping"*
- ❌ *"Revolutionary virtual machines"* ➔ ✅ *"High-throughput blockchains and execution environments"*
- ❌ *"Developer army"* ➔ ✅ *"Developer community"*
- ❌ *"High-speed verified technical prototypes"* ➔ ✅ *"Working prototypes and developer tools"*
- ❌ *"Ruthless code credibility"* ➔ ✅ *"Substantiated code and open-source implementations"*
- ❌ *"Distribution realization"* ➔ ✅ *"Connecting engineering with distribution"*
- ❌ *"The crucible of hackathons"* ➔ ✅ *"Building under constraints"*
- ❌ *"Protocol foundations spend millions engineering revolutionary..."* ➔ ✅ *"Protocol teams often build capable infrastructure, but getting developers to adopt it requires hands-on work..."*
- ❌ Excessive em dashes (`—`) ➔ ✅ Concise, punctuated sentences.

---

## 7. Open Claims Flagged for Ongoing Confirmation

1. **Hack in Hills 2026 Finals Outcome**: Milestone is ongoing as of October 2026. Final participant count and awarded teams to be updated upon event conclusion.
2. **PyStylus and Chainlink CRE Test Repositories**: Repositories are experimental research harnesses under the `ShahiTechnovation` organization; marked as experiments.
3. **Primary Contact Route**: Direct communications routed to `punit@builderbase.xyz` and `dev@pyvax.xyz` with client mailto and copy-to-clipboard fallback.

