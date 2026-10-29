import { chromium } from "playwright";
import fs from "node:fs/promises";
import sharp from "sharp";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
await page.goto("https://www.builderbase.xyz", { waitUntil: "networkidle" });
console.log(
  "PHOTOS",
  await page
    .locator("img")
    .evaluateAll((xs) =>
      xs.map((x) => ({
        src: x.currentSrc,
        alt: x.alt,
        width: x.naturalWidth,
        height: x.naturalHeight,
      })),
    ),
);
await page.goto("https://flow-mon.vercel.app", { waitUntil: "networkidle" });
console.log(
  "FLOW LINKS",
  await page
    .locator("a")
    .evaluateAll((xs) => xs.map((x) => ({ text: x.innerText, href: x.href }))),
);
await fs.mkdir("public/images/work", { recursive: true });
await page.goto("https://flow-mon.vercel.app/app", {
  waitUntil: "networkidle",
});
await page.getByRole("button", { name: "Load Monad demo flow" }).click();
await page.waitForTimeout(800);
await page.screenshot({ path: "artifacts/design/sources/flowmon-app.png" });
await sharp(await page.screenshot())
  .resize(1440)
  .webp({ quality: 82 })
  .toFile("public/images/work/flowmon.webp");
await sharp("artifacts/design/sources/source-2.png")
  .extract({ left: 110, top: 80, width: 1220, height: 685 })
  .resize(1220)
  .webp({ quality: 82 })
  .toFile("public/images/work/sol2rust.webp");
const photos = [
  "https://res.cloudinary.com/yic4m8kq/image/upload/v1793103970/20260405_185344.jpg",
  "https://res.cloudinary.com/yic4m8kq/image/upload/v1793104868/6161153281179194441.jpg",
];
for (const [i, url] of photos.entries()) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Photo ${response.status}`);
  await sharp(Buffer.from(await response.arrayBuffer()))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`public/images/work/community-${i + 1}.webp`);
}
await sharp("public/images/punit-pal.jpg")
  .resize(700)
  .webp({ quality: 82 })
  .toFile("public/images/punit-pal.webp");
await browser.close();
