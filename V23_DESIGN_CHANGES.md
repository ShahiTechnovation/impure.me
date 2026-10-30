# V2.3 design changes

## Scope and continuity

Developed on `codex/impure-v2.3`, from V2.1 commit `5d56b26927a7e3f49759d0c4dfb57e7aaf0d5b18`. The original Astro architecture, IMPURE identity, warm paper/ink/red palette, typography, portrait, command palette, navigation, themes and all 18 projects remain. No dependency was added. Production was not pushed or deployed.

## Engineering presentation

- **PyVax:** a warm source sheet with an exact repository excerpt, three compiler stages and a clearly labeled opcode key. It illustrates the actual AST-to-EVM approach without pretending to execute code. The narrow layout wraps code instead of forcing horizontal scrolling.
- **Sol2Rust:** a wide, dark green split composition that stacks on mobile. Repository Solidity sits beside an explicitly illustrative Stylus target. Source review changed the description to an AI-assisted prototype and exposed the difference between its intended Stylus target and current ink!/simulated-build implementation.
- **FlowMon:** a large product window containing a real capture of the live demo canvas. A full-resolution link keeps the dense application view inspectable on mobile. No invented activity or transaction confirmations.
- Shared visual components also appear in the three case studies. Unsupported source snippets were removed. RustAG, RxGR and With Claude remain compact homepage rows with technologies and case-study links; the archive keeps every project.

## Founder and programs

Homepage founder composition pairs a concise narrative with the Builder Base satin flag, then an authentic community photograph. The old audience metrics and duplicated field-notes section are removed. Main visible text falls from 661 baseline words to about 540 desktop / 538 mobile under the same extraction method.

Grow now presents five dated program records, led by a large Claude Bhopal photograph, followed by Monad and MetaMask image stories and two compact event records. Detailed provenance/outcomes live in native keyboard-accessible disclosures. Public host and partner credits belong to Builder Base; Punit receives only the separately supported Move co-host credit. Small role and upcoming-program indexes follow. Filters would add friction to five records and were not added.

Story now moves through Building, Beyond Code, three selected milestones, full Proof of Work and Now. It retains authentic portrait/community imagery and removes repeated biography. Contradictory dates are omitted rather than resolved through guesswork.

## Flag integration

Owner authorized source and artwork reuse. The supplied WebGL2 Verlet cloth renderer is adapted directly into a lazy-loaded local module. There is no iframe, artwork upload control, drag/drop or editing UI. The poster is generated from the native display-only source, so it also contains no editing controls.

- Cloth mesh reduced from 44 × 32 to 28 × 20; constraint iterations reduced from five to three.
- Rendering capped at 30 fps and DPR 1.5. The original paired 60 Hz physics steps are retained within each rendered update; fixed-step motion slows under load rather than attempting a large catch-up burst.
- Color conversion is cached instead of creating canvases in each frame. Canvas and texture dimensions are bounded by the component and a 1024px texture cap.
- Starts only when at least 5% visible, viewport is at least 900px, reduced motion is off, Save-Data is off and reported hardware concurrency is at least four.
- Pauses offscreen, when the document is hidden, on pagehide and through its accessible pause/play control. The module isn't fetched for initial mobile/reduced-motion/Save-Data visits.
- Poster remains for no JS, no WebGL, artwork failure or context loss. Preference changes switch to the poster. Fixed 4:3 sizing avoids layout shift.
- Measured main-thread work and lifecycle checks are in `V23_QA_REPORT.md`. No claim of GPU energy measurement or universal low-power detection is made.

## Accessibility, SEO and polish

Syntax colors were checked with axe and the failing Python keyword color darkened. Code no longer inherits the site's smaller inline-code font scale. The narrow hero uses a smaller floor and a shrinkable grid child. Native links/disclosures retain focus states; theme persistence tolerates unavailable localStorage. The contact page has one main contact section; footer and command-palette entries explain repeated extracted text.

Canonical URLs, sitemap and social metadata continue to point to impure.me. Social-image alt text was added, and incorrect alumni structured data removed. Both production and preview builds were checked; preview robots remains noindex. Existing contact addresses were preserved.

## Visual review

Full-page captures cover eight representative routes at 1440, 1024, 768, 430, 390, 375 and 320px. Baseline covers the six originally requested widths. The new visual hierarchy makes engineering first, with a distinct founder section and source-linked photographic evidence. The dense FlowMon interface needs its full-resolution link on a small screen; the code plates stack/wrap and remain text rather than flattened images. No additional animation framework or competing scroll effects were introduced.

See `artifacts/v23/before`, `artifacts/v23/after`, and the comparison images linked from the QA report. Full capture and automated layout coverage are broader than the individual images manually inspected; the QA report distinguishes them.
