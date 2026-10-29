# Content density audit — October 29, 2026

## Rendered baseline, before implementation

Inspected local V2 and https://impureme-coral.vercel.app/ in Chrome at 1440 × 900 and 390 × 900. Both have identical main-content counts: **1,726 words**, measured from rendered `main.innerText`, split on whitespace. This includes labels and actions, excludes navigation/footer, and is repeated unchanged for the final comparison. Screenshots and measurements are in `artifacts/design/before` and `artifacts/design/deployed-before`.

| Section | Words | Decision |
|---|---:|---|
| Identity | 80 | Remove dossier stamps, status, serial number, duplicate socials and search action. Keep portrait and identity. |
| Evidence strip | 65 | Merge awards into Recognition and channel reach into Builder Base. |
| Selected engineering | 838 | Three flagships, three supporting rows; complete architecture and stacks remain on project pages. |
| Three pillars | 136 | Merge with founder story. |
| Builder Base | 126 | One personal narrative and one explicitly owner-reported proof strip. |
| Recognition | 290 | Five compact podium rows, two finalist records, evidence qualification. |
| Field notes | 143 | Replace duplicated project dispatches with sourced community photography if usable. |
| Contact | 48 | Short invitation and email. |

## Findings

1. Founder/DevRel/GTM descriptions recur in the hero, pillars, Builder Base, contact and footer.
2. Podium counts, 64K event reach and 70K newsletter reach recur, sometimes without owner-reporting qualifications.
3. Repeated VM, AST, opcode, protocol-agent and performance language makes browsing feel like reading documentation.
4. Dossier IDs, section stamps, subject labels and action labels compete with actual project names.
5. Academic, online, serial number and location metadata crowd the hero. `5X-HACK-WINNER` is inaccurate shorthand.
6. Eight repeated architecture previews belong in the existing project detail pages.
7. Full summaries and stacks duplicate the archive and case studies. Field notes repeat the three flagships.
8. The header ticker, heavy paper texture, portrait scanlines, nested borders and footer marquee add visual noise.
9. Selected work alone accounts for almost half of homepage copy. Page height is 9,851px desktop / 19,682px mobile including footer.
10. Repeated cards with meta bar, prose, schematic, chips and boxed actions create little variation despite different project scales.

Mobile screenshot inspection also shows a wrapping navigation wordmark and horizontal document overflow. New layouts must resolve this at all seven requested widths.

## Scope and preservation

Retain the existing Astro implementation, data model, 18 archive routes, theme switch, command palette and filtering. Make the homepage quieter through actual markup/copy restructuring. Simplify internal overviews and use native accessible disclosures for longer ecosystem and biographical details. No production deployment.

## Asset and accuracy notes

Existing portrait is authentic. Sol2Rust and FlowMon public demos respond; Builder Base has real event photographs. PyVax's domain fails DNS. Exact agent counts on FlowMon differ from existing copy; avoid promoting an unverified count. Mumbai Devcon Week incorrectly appears as completed in 2025: change to upcoming November 2026, remove claimed outcomes. Older verification reports are historical assertions, not independent evidence of awards or reach.

## Final comparison

Rendered main content is **661 words** at both 1440px and 390px: **1,065 fewer words (61.7%)**. The same extraction method was used before and after. All 18 projects and 23 site routes remain. The homepage now has six sections: Identity (39), Selected work (306), Beyond engineering (111), Recognition (103), Field notes (71), Contact (31).

Full results and screenshots: [DESIGN_REFINEMENT_REPORT.md](DESIGN_REFINEMENT_REPORT.md). Current source/asset checks: [CONTENT_VERIFICATION_V2_2.md](CONTENT_VERIFICATION_V2_2.md).
