import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";
const base = process.env.QA_URL || "http://127.0.0.1:4322";
const dir = "artifacts/design/qa";
await fs.mkdir(dir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
  colorScheme: "light",
});
const page = await context.newPage();
const errors = [],
  layout = [],
  accessibility = [],
  routes = [],
  internalLinks = new Set();
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
await page.goto(`${base}/build`);
const projectPaths = await page
  .locator(".project-card h3 a")
  .evaluateAll((xs) => xs.map((x) => new URL(x.href).pathname));
assert.equal(projectPaths.length, 18);
assert.equal(new Set(projectPaths).size, 18);
for (const route of [
  "/",
  "/build",
  "/grow",
  "/story",
  "/contact",
  ...projectPaths,
]) {
  const response = await page.goto(`${base}${route}`, {
    waitUntil: "networkidle",
  });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(response.status(), 200, route);
  assert.equal(await page.locator("h1").count(), 1, route);
  routes.push(route);
  for (const href of await page
    .locator("a[href]")
    .evaluateAll((xs) =>
      xs.map((x) => x.getAttribute("href")).filter((x) => x.startsWith("/")),
    ))
    internalLinks.add(href);
  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ["light", "dark"]) {
      await page.evaluate(
        (t) => (document.documentElement.dataset.theme = t),
        theme,
      );
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        offenders: [...document.querySelectorAll("main *")]
          .filter(
            (e) =>
              e.getBoundingClientRect().width > 0 &&
              !e.closest("pre") &&
              e.getBoundingClientRect().right > innerWidth + 1,
          )
          .slice(0, 5)
          .map((e) => ({
            tag: e.tagName,
            class: e.className,
            text: e.textContent.slice(0, 50),
          })),
        brokenImages: [...document.images]
          .filter((i) => i.complete && !i.naturalWidth)
          .map((i) => i.src),
      }));
      if (
        result.overflow ||
        result.offenders.length ||
        result.brokenImages.length
      )
        layout.push({ route, width, theme, ...result });
    }
  }
  if (
    [
      "/",
      "/build",
      "/grow",
      "/story",
      "/contact",
      "/build/pyvax",
      "/build/flowmon",
      "/build/x402",
    ].includes(route)
  ) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ["light", "dark"]) {
        await page.evaluate(
          (t) => (document.documentElement.dataset.theme = t),
          theme,
        );
        for (
          let y = 0;
          y < (await page.evaluate(() => document.body.scrollHeight));
          y += 800
        ) {
          await page.evaluate((y) => scrollTo(0, y), y);
          await page.waitForTimeout(10);
        }
        await page.evaluate(() => scrollTo(0, 0));
        const axe = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        accessibility.push({
          route,
          width,
          theme,
          violations: axe.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.map((n) => ({
              target: n.target,
              summary: n.failureSummary,
            })),
          })),
        });
        await page.screenshot({
          path: `${dir}/${route.replaceAll("/", "_") || "home"}-${width}-${theme}.png`,
          fullPage: true,
        });
      }
    }
  }
}
const links = [];
for (const href of internalLinks) {
  const response = await page.request.get(`${base}${href}`);
  if (response.status() !== 200)
    links.push({ href, status: response.status() });
}
await page.setViewportSize({ width: 390, height: 900 });
await page.goto(base);
await page.keyboard.press("Tab");
assert.equal(
  (await page.locator(":focus").textContent()).trim(),
  "Skip to main content",
);
assert.notEqual(
  await page
    .locator(":focus")
    .evaluate((e) => getComputedStyle(e).outlineStyle),
  "none",
);
await page.locator("#mobile-menu-btn").click();
assert.equal(
  await page.locator("#mobile-menu-btn").getAttribute("aria-expanded"),
  "true",
);
assert.equal(
  await page.locator(":focus").getAttribute("id"),
  "mobile-close-btn",
);
await page.keyboard.press("Shift+Tab");
assert(await page.locator("#mobile-nav-drawer :focus").count());
await page.keyboard.press("Escape");
assert.equal(
  await page.locator("#mobile-menu-btn").getAttribute("aria-expanded"),
  "false",
);
await page.locator("#theme-toggle").click();
const theme = await page.locator("html").getAttribute("data-theme");
await page.reload();
assert.equal(await page.locator("html").getAttribute("data-theme"), theme);
await page.keyboard.press("Control+k");
assert(await page.locator("#cmd-palette-modal").isVisible());
await page.locator('#cmd-close-btn').focus();
await page.keyboard.press('Shift+Tab');
assert(await page.locator('#cmd-palette-modal :focus').count());
await page.keyboard.press('Escape');
assert(await page.locator('#cmd-palette-modal').isHidden());
await page.keyboard.press('Control+k');
await page.locator("#cmd-search-input").fill("RustAG");
const commandAxe = await new AxeBuilder({ page })
  .include("#cmd-palette-modal")
  .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
  .analyze();
accessibility.push({
  route: "command-palette",
  violations: commandAxe.violations.map((v) => ({
    id: v.id,
    nodes: v.nodes.map((n) => ({
      target: n.target,
      summary: n.failureSummary,
    })),
  })),
});
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");
await page.waitForURL("**/build/rustag");
await page.goto(`${base}/build`);
await page.locator("#project-search-input").fill("with claude");
assert.equal(await page.locator(".project-wrapper:visible").count(), 1);
await page.locator("#project-search-input").fill("unmatched-project");
assert(await page.locator("#empty-state").isVisible());
await page.locator("#reset-filter-btn").click();
assert.equal(await page.locator(".project-wrapper:visible").count(), 18);
await page.locator('[data-category="Experiments"]').first().click();
assert.equal(
  await page
    .locator('.filter-pill[aria-pressed="true"]')
    .getAttribute("data-category"),
  "Experiments",
);
assert((await page.locator(".project-wrapper:visible").count()) < 18);
await page.goto(`${base}/grow`);
await page.locator("#gtm-04 summary").focus();
await page.keyboard.press("Enter");
assert((await page.locator("#gtm-04").getAttribute("open")) !== null);
assert((await page.locator("#gtm-04").innerText()).includes("November 2026"));
assert(!(await page.locator("#gtm-04").innerText()).includes("500+"));
await page.screenshot({
  path: `${dir}/grow-expanded-mobile.png`,
  fullPage: true,
});
// Disclosure contents must remain readable and accessible when opened.
for (const route of ['/grow','/story']) {
  await page.goto(`${base}${route}`);
  await page.locator('main details').evaluateAll(xs=>xs.forEach(x=>x.open=true));
  await page.setViewportSize({width:320,height:900});
  for (const theme of ['light','dark']) {
    await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);
    const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    accessibility.push({route:`${route} expanded`,width:320,theme,violations:axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))layout.push({route:`${route} expanded`,width:320,theme,overflow:true});
  }
}
await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
await page.goto(`${base}/contact`);
await page.locator(".copy-email").click();
assert.equal(
  await page.evaluate(() => navigator.clipboard.readText()),
  "punit@builderbase.xyz",
);
const report = {
  routes: routes.length,
  projects: projectPaths.length,
  layoutChecks: routes.length * 7 * 2,
  accessibilityChecks: accessibility.length,
  layout,
  accessibility: accessibility.filter((x) => x.violations.length),
  consoleErrors: [...new Set(errors)],
  brokenInternalLinks: links,
  interactions:
    "passed: skip link, focus, mobile menu/trap/Escape, theme persistence, command search/keyboard navigation, archive search/filter/reset, disclosure keyboard activation, copy email",
};
await fs.writeFile(`${dir}/results.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (
  layout.length ||
  report.accessibility.length ||
  errors.length ||
  links.length
)
  process.exitCode = 1;
