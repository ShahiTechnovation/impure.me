import { chromium } from "playwright";
import fs from "node:fs/promises";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage();
await page.goto("http://127.0.0.1:4322/build");
const routes = await page
  .locator(".project-card h3 a")
  .evaluateAll((xs) => xs.map((x) => x.href));
const urls = new Set();
for (const route of ["http://127.0.0.1:4322/", ...routes]) {
  await page.goto(route);
  for (const href of await page
    .locator('main a[href^="https://"]')
    .evaluateAll((xs) => xs.map((x) => x.href)))
    urls.add(href);
}
await browser.close();
const results = [];
const queue = [...urls];
await Promise.all(
  Array.from({ length: 5 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(15000),
        });
        results.push({ url, status: response.status, finalUrl: response.url });
        await response.body?.cancel();
      } catch (e) {
        results.push({ url, error: e.cause?.code || e.message });
      }
    }
  }),
);
await fs.writeFile(
  "artifacts/design/external-links.json",
  JSON.stringify(results, null, 2),
);
console.log(
  JSON.stringify(
    {
      checked: results.length,
      problems: results.filter((r) => r.status !== 200),
    },
    null,
    2,
  ),
);
