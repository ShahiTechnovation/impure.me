import { chromium } from "playwright";
import fs from "node:fs/promises";
const phase = process.argv[2] || "before";
const base = process.argv[3] || "http://localhost:4321";
const dir = `artifacts/design/${phase}`;
await fs.mkdir(dir, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: "chrome" });
const report = [];
for (const width of [1440, 390]) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    colorScheme: "light",
    reducedMotion: "reduce",
  });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  for (
    let y = 0;
    y < (await page.evaluate(() => document.body.scrollHeight));
    y += 700
  ) {
    await page.evaluate((y) => scrollTo(0, y), y);
    await page.waitForTimeout(50);
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${dir}/home-${width}-full.png`,
    fullPage: true,
  });
  await page.screenshot({ path: `${dir}/home-${width}.png` });
  report.push(
    await page.evaluate(() => ({
      width: innerWidth,
      height: document.body.scrollHeight,
      words: document.querySelector("main").innerText.trim().split(/\s+/)
        .length,
      bodyWords: document.body.innerText.trim().split(/\s+/).length,
      sections: [...document.querySelectorAll("main section")].map((s) => ({
        name: s.getAttribute("aria-label"),
        words: s.innerText.trim().split(/\s+/).length,
      })),
      overflow: document.documentElement.scrollWidth > innerWidth,
    })),
  );
  await fs.writeFile(
    `${dir}/home-${width}.txt`,
    await page.locator("main").innerText(),
  );
  await page.close();
}
await fs.writeFile(`${dir}/metrics.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
