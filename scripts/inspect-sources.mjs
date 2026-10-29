import { chromium } from "playwright";
import fs from "node:fs/promises";
await fs.mkdir("artifacts/design/sources", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = await Promise.all(
  [
    "https://impureme-coral.vercel.app/",
    "https://pyvax.xyz",
    "https://sol2rust.vercel.app",
    "https://flow-mon.vercel.app",
    "https://www.builderbase.xyz",
  ].map(async (url, i) => {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
      colorScheme: "light",
      reducedMotion: "reduce",
    });
    try {
      const response = await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 45000,
      });
      await page.screenshot({
        path: `artifacts/design/sources/source-${i}.png`,
      });
      const text = await page.locator("body").innerText();
      await fs.writeFile(`artifacts/design/sources/source-${i}.txt`, text);
      return {
        url,
        status: response.status(),
        title: await page.title(),
        words: text.split(/\s+/).length,
        text: text.slice(0, 900),
      };
    } catch (e) {
      return { url, error: e.message };
    } finally {
      await page.close();
    }
  }),
);
await fs.writeFile(
  "artifacts/design/sources/results.json",
  JSON.stringify(results, null, 2),
);
console.log(results);
await browser.close();
