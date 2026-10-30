import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true});
for(const [name,url] of [['personal','https://impure.notion.site/'],['events','https://builderbase.notion.site/']]){
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto(url,{waitUntil:'domcontentloaded'});await page.locator('.notion-page-content').waitFor({timeout:60000});
 const texts=new Set(),links=new Map(),images=new Map();
 for(let i=0;i<35;i++){
  (await page.locator('body').innerText()).split('\n').forEach(t=>texts.add(t));
  for(const x of await page.locator('a').evaluateAll(xs=>xs.map(x=>({text:x.innerText,href:x.href,context:x.closest('.notion-selectable')?.innerText}))))links.set(x.href,x);
  for(const x of await page.locator('img').evaluateAll(xs=>xs.map(x=>({src:x.currentSrc,alt:x.alt,width:x.naturalWidth,height:x.naturalHeight}))))if(x.src.startsWith('http'))images.set(x.src,x);
  await page.mouse.move(1000,700);await page.mouse.wheel(0,700);await page.waitForTimeout(400);
 }
 await fs.writeFile(`artifacts/v23/sources/${name}-full.txt`,[...texts].join('\n'));
 await fs.writeFile(`artifacts/v23/sources/${name}-full.json`,JSON.stringify({links:[...links.values()],images:[...images.values()]},null,2));
 console.log(name,texts.size,'lines',links.size,'links');await page.close();
}
await browser.close();
