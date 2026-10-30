# V2.3 QA report — 29 October 2026

## Result and release status

Implementation is complete on `codex/impure-v2.3`. The local production build passes the checks below and is ready for deployment review. No production push, preview publication or live deployment was performed. Review locally at http://127.0.0.1:4322/ while the existing preview server is running.

The site has 23 static routes and preserves all 18 projects. Disputed role dates, reach totals and unsupported individual event duties are not published. Remaining content confirmations are listed in [the evidence matrix](V23_CONTENT_EVIDENCE.md); they do not block the current conservative wording.

## Functional and responsive checks

| Check | Result | Evidence |
| --- | --- | --- |
| `npm run build` | Pass; 23 pages | Final production build completed |
| `npm run check` | Pass; 24 files, zero errors/warnings/hints | Astro diagnostics |
| `npm run lint` | Pass | TypeScript noEmit |
| `npm test` | 53 passed, zero failed | Existing build/route/asset/SEO tests |
| Layout | 322 checks passed: 23 routes × 7 widths × 2 themes | [Browser results](artifacts/v23/qa/results.json) |
| Widths | 320, 375, 390, 430, 768, 1024, 1440px | No settled horizontal overflow, offscreen main-content offenders or broken loaded images |
| Route structure | All 23 return 200 and have one H1; all 18 projects reachable | Browser results |
| Axe | 41 scans, zero reported violations | Desktop/mobile light/dark representative pages plus interaction states |
| JavaScript | Zero browser page/console errors in the route matrix | Browser results |
| Internal links | No broken links in collected internal destinations | Browser results |
| External links | 34 collected links returned 200 | [External link results](artifacts/v23/qa/external-links.json) |
| Interactions | Passed | Skip link, focus visibility, mobile menu/trap/Escape, persistent theme, command search/keyboard navigation, project search/filter/reset, disclosure keyboard activation, copy email |
| Contact | One main contact section; addresses retained | Footer and hidden command entries account for repeated extracted content; no email was sent |

The initial axe run identified a Python keyword contrast ratio of 4.27:1; its color was darkened and the final scans pass. Inline-code font scaling was removed from the code plates to improve readability.

The initial immediate-after-resize check reported one-frame overflow. A focused reproduction showed Chrome already reporting the new viewport while computed font sizes still reflected the previous desktop layout; after the next layout frame the overflow disappeared. The harness now waits two animation frames after a viewport change. All final measurements use settled responsive styles, rather than silently suppressing overflow. The narrow hero was also made more resilient with a shrinkable grid child and smaller font-size floor.

## Flag runtime and fallback checks

[Measured results](artifacts/v23/qa/flag-results.json), Chrome headless on Intel UHD Graphics via ANGLE/D3D11. Three-second windows:

| State | Draw calls | Main-thread task time | Script time |
| --- | ---: | ---: | ---: |
| Visible, playing | 87 (~29 fps) | 241ms (~8% of the window) | 124ms |
| User paused | 0 | 1ms | 0ms |
| Offscreen | 0 | 1ms | 0ms |
| Reduced motion | 0 | 1ms | 0ms |
| Mobile viewport | 0 | 1ms | 0ms |

Also passed: no above-fold initialization on the homepage; frame-to-frame visual change; pause/play; live preference and viewport changes; initial Save-Data; no WebGL; no JavaScript; WebGL context loss and subsequent viewport re-entry preserve the poster. Screenshots are in `artifacts/v23/qa/flag-*.png`. Visibility/pagehide pause handlers were code-reviewed; an actual OS background-tab/battery-drain test was not performed.

The native flag JavaScript transferred about 4.6KB in the desktop Grow Lighthouse run; its poster is about 20.8KB on disk. The renderer was not requested in either mobile run or the homepage's initial desktop viewport. The poster has a stable 4:3 allocation. This measures browser/main-thread behavior, not GPU wattage, VRAM or universal low-end-device performance. Reported CPU concurrency is only a conservative eligibility heuristic.

## Performance

Lighthouse 13.6, local built site, Chrome headless. Mobile uses Lighthouse's standard simulated mobile throttling; desktop uses 1440 × 900 with 40ms RTT, 10Mbps and no CPU slowdown. One run per scenario; no median or field telemetry claim. Full JSON/HTML reports are under `artifacts/v23/qa/lighthouse-*` and [the summary](artifacts/v23/qa/performance-summary.json).

| Page / mode | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home mobile | 97 | 100 | 100 | 100 | 2.597s | 0ms | 0.0019 |
| Home desktop | 100 | 100 | 100 | 100 | 0.447s | 0ms | 0.0039 |
| Grow mobile | 97 | 100 | 100 | 100 | 2.561s | 0ms | 0.0012 |
| Grow desktop, native flag eligible | 99 | 100 | 100 | 100 | 0.449s | 0ms | 0.0678 |

No Lighthouse run warnings. Mobile LCP is slightly above the 2.5-second “good” boundary in these single local simulations. Google Fonts remain an external dependency from V2.1; font loading contributes to rendering variability. Do not describe these results as a field Core Web Vitals pass: INP and real-user percentiles were not measured. The measured flag has no initial homepage rendering cost and no mobile renderer cost; Grow's desktop lab result remained high with zero measured blocking time.

## SEO

Production and `VERCEL_ENV=preview` builds each generated 23 pages. Production metadata uses `index, follow`; preview metadata uses `noindex, nofollow`; both retain canonical URLs under `https://impure.me/`. The sitemap contains 23 URLs. The existing V2.1 Vercel alias returns `X-Robots-Tag: noindex, nofollow`. [SEO results](artifacts/v23/qa/seo-results.json).

Social-image tags and alt descriptions are present; the existing image is retained. The erroneous alumni relationship was removed from Person structured data. Production-domain behavior after a future deployment still needs its normal post-deploy smoke check.

## Visual evidence

Baseline: 48 full-page captures, eight representative routes at six requested widths. Final: 56 full-page captures across the same routes at all seven requested widths, plus 15 homepage section captures. The browser QA run also saved light/dark desktop/mobile screenshots. Final captures use reduced motion to keep comparisons stable; a separate native flag screenshot shows the live implementation.

Manually inspected: baseline desktop/mobile homepage and desktop Grow; final desktop homepage and Grow, mobile Grow and dark homepage, PyVax at 320px, Sol2Rust at 390px and 1440px, founder composition, native poster and archive photo contact sheet. Automated capture/layout checks cover additional pages and widths; every screenshot was not separately inspected pixel by pixel.

- [Homepage desktop before / after](artifacts/v23/comparisons/home-desktop.webp)
- [Homepage mobile before / after](artifacts/v23/comparisons/home-mobile.webp)
- [Grow desktop before / after](artifacts/v23/comparisons/grow-desktop.webp)
- [Grow mobile before / after](artifacts/v23/comparisons/grow-mobile.webp)
- [Final 1440px homepage](artifacts/v23/after/_-1440.png)
- [Final 390px homepage](artifacts/v23/after/_-390.png)
- [Final 320px homepage](artifacts/v23/after/_-320.png)
- [Final 1440px Grow](artifacts/v23/after/_grow-1440.png)
- [Final 390px Story](artifacts/v23/after/_story-390.png)
- [Live native flag](artifacts/v23/qa/native-flag-desktop.png)

Visual assessment: the editorial identity remains intact; the three flagship treatments are distinct; real project and event evidence is integrated; the flag supports the founder composition. FlowMon's dense application screenshot is readable at full resolution through its explicit link, rather than claiming every control is legible in a mobile thumbnail. Event images preserve their full content, including the portrait-oriented Monad banner, instead of cropping away identifying evidence.

## Reproduction and limitations

Use `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 4322`. Run `QA_DIR=artifacts/v23/qa node scripts/qa-design.mjs` with the equivalent environment assignment for your shell. `scripts/v23-capture.mjs`, `scripts/v23-flag-qa.mjs`, `scripts/v23-performance.mjs` and `scripts/v23-comparisons.mjs` reproduce the browser evidence. Run performance checks separately from other browser suites. The media-authoring helper expects the dev server on 4323 and the saved source images; it is not part of the production build.

The final code-only cleanup replaced unused legacy flagship diagram branches with the shared truthful visual component. Build, Astro check and TypeScript were rerun afterward; current pages do not render those legacy branches, so the preceding browser/performance captures remain representative.

No Safari, Firefox, physical-phone, screen-reader or real-user performance session was performed. Axe and keyboard testing support accessibility review but do not certify complete WCAG compliance. HTTP 200 confirms link availability, not the truth of linked content or future uptime. No wallet was connected, workflow executed, mail sent or production deployment changed.
