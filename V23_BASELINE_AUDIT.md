# V2.3 baseline audit — 29 October 2026

## Deployment and branch

- Clean starting checkout: `impure-v2`, `5d56b26927a7e3f49759d0c4dfb57e7aaf0d5b18`.
- Vercel deployment `dpl_3VxyZHXZFHFSoKiHd1JPSB4dotn5` metadata confirms the same Git ref and SHA. Alias: https://impure-me-v21.vercel.app/.
- Work isolated on `codex/impure-v2.3`. No production push or deployment authorized.
- https://impure.me still serves the older dossier, including stale recognition wording. It is not the V2.1 baseline.

## Reproduced observations

Playwright/Chrome captured 48 full-page screenshots: home, build archive, PyVax, Sol2Rust, FlowMon, grow, story and contact at 1440, 1024, 768, 390, 375 and 320px. See `artifacts/v23/before/results.json` and PNGs.

- No page-level horizontal overflow, broken loaded images or duplicate H1 in those captures.
- Three flagship projects and three supporting rows exist. No incomplete project section or conflicting hero reproduced.
- Homepage main text is 661 whitespace-separated words in this browser extraction (not the brief's approximate 520). Preserve/reduce editorial copy rather than add a second biography.
- PyVax is an oversized language arrow; Sol2Rust is an unreadably small editor screenshot; FlowMon shares the same small screenshot treatment. Purpose-specific visual composition is missing.
- `/grow` primarily consists of disclosures with repeated objectives, strategy, responsibilities, outcomes and learnings. Photos are secondary; event-level provenance is missing.
- `/story` tells the same story in its introduction and four longer disclosures. Dated milestones contain conflicts with the public personal archive.
- Contact contains one visible main contact block. Repeated extraction comes from the shared footer and hidden command search entries, not duplicated responsive contact sections. Existing addresses are retained.
- Navigation, mobile menu, theme, archive filtering and command palette already have keyboard/focus implementations; retain them and rerun interaction/axe checks after changes.
- Canonical URLs and sitemap use impure.me; Vercel-host noindex header exists. Preview build metadata must also be tested.
- JSON-LD incorrectly calls a current student an alumnus.

## Evidence requiring correction

- PyVax `contracts/Counter.py` and `avax_cli/transpiler.py` provide real source and AST-to-opcode implementation. Existing portfolio snippet imports an unsubstantiated `pyvax` API.
- Sol2Rust `server/conversion.ts` calls Gemini; `server/gemini.ts` targets ink! and returns fixed bytecode for simulated compilation. Existing claims of syn/quote AST passes, sub-80ms conversion and 40% gas savings are unsupported. Remove them; explain the Stylus intent versus current prototype implementation.
- FlowMon public app exposes a real canvas with both live and stub tools. A demo-loaded screenshot is interface evidence, not execution or transaction proof.
- Public Notion personal archive says six podiums and gives conflicting founding/role dates. The user explicitly corrects five podiums and NeuroFit to second runner-up; retain those corrections.
- Current Builder Base homepage metrics use different definitions from the supplied reach figures. Do not republish them as unique members, verified registrations or active subscribers.

## Source access and media

Public websites inspected through web/browser tools. Notion connector returned 404 for the public pages; browser access exposed public content. The pages virtualize their content, so an initial text extraction is incomplete and requires scrolling. Raw observations are under `artifacts/v23/sources`.

Existing portrait and two community WebPs came from prior source captures (`scripts/collect-media.mjs` records their URLs). Preserve their provenance; do not relabel a photo as a different event.

The supplied flag is a standalone inline WebGL2 cloth simulation, grid 44 × 32, DPR capped at 2, with a permanent animation loop, CPU physics, dynamic GPU buffers and editable artwork. It has a reduced-motion branch but still renders continuously, and only pauses when the entire document is hidden. No license or repository was linked. Native reuse permission requested; static canvas capture is the fallback. Do not iframe or conceal editing controls.

Subsequent owner confirmation: “Yes—reuse the code and artwork.” Native integration is authorized. The final static poster is rendered from the local display-only component, not captured from the original editor UI.

## Implementation direction

Retain Astro, paper/ink/red tokens, typography, portrait, navigation, command palette, theme and 18-project archive. Introduce source-backed compiler compositions, a larger genuine FlowMon interface, a display-only flag presentation, photographic program evidence and a concise chronological Story page. Final verification is recorded separately; baseline screenshots do not constitute final QA.
