import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import sharp from 'sharp';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},timezoneId:'Asia/Kolkata'});
const snapshots=[];
for(const [name,url] of [['events','https://builderbase.notion.site/Builder-Base-Events-3376984dfba180b8b003c9d33515327c'],['personal','https://impure.notion.site/Punit-Pal-PoW-0e26984dfba18376bfe601767f03e666']]) {
 await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});
 await page.getByText(name==='events'?'Builder Base Events':'Punit Pal - PoW',{exact:true}).first().waitFor({timeout:45000});
 const blocks=new Map(),images=new Map();
 for(let i=0;i<24;i++){
  for(const b of await page.locator('.notion-selectable').evaluateAll(xs=>xs.map(x=>({id:x.getAttribute('data-block-id'),text:x.innerText,links:[...x.querySelectorAll('a')].map(a=>a.href)}))))if(b.text)blocks.set(b.id,b);
  for(const im of await page.locator('img').evaluateAll(xs=>xs.map(x=>({src:x.currentSrc,context:x.closest('.notion-column-block')?.innerText||x.closest('.notion-image-block')?.innerText||'',width:x.naturalWidth}))))if(im.src.startsWith('http')&&im.width>300)images.set(im.src,im);
  await page.mouse.move(1000,650);await page.mouse.wheel(0,650);await page.waitForTimeout(500);
 }
 await fs.writeFile(`artifacts/v23/sources/${name}-blocks.json`,JSON.stringify({blocks:[...blocks.values()],images:[...images.values()]},null,2));
 console.log(name,blocks.size,'blocks',images.size,'images');
 if(name==='personal')for(const [i,im] of [...images.values()].entries()){
  if(im.src.includes('ChatGPT_Image'))continue;
  const r=await page.request.get(im.src);if(r.ok()){await sharp(await r.body()).webp({quality:84}).toFile(`artifacts/v23/sources/photo-${i}.webp`);snapshots.push({file:`photo-${i}.webp`,...im});}
 }
}
await fs.writeFile('artifacts/v23/sources/photo-index.json',JSON.stringify(snapshots,null,2));await browser.close();
