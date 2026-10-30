import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const dir='artifacts/v23';
await fs.mkdir(`${dir}/sources`,{recursive:true});
await fs.mkdir(`${dir}/before`,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=await Promise.all([
 ['preview','https://impure-me-v21.vercel.app/'],
 ['flag','https://builderbaseflag.vercel.app/'],
 ['personal','https://impure.notion.site/'],
 ['events','https://builderbase.notion.site/'],
 ['flowmon','https://flow-mon.vercel.app/app'],
].map(async ([name,url])=>{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const scripts=[];page.on('response',async r=>{if(r.request().resourceType()==='script' && name==='flag') {try{scripts.push({url:r.url(),body:await r.text()});}catch{}}});
 let status,error;
 try{status=(await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000})).status();await page.waitForTimeout(6500);}catch(e){error=e.message;}
 await page.screenshot({path:`${dir}/sources/${name}.png`,fullPage:true});
 const text=await page.locator('body').innerText();
 const links=await page.locator('a').evaluateAll(xs=>xs.map(x=>({text:x.innerText,href:x.href})));
 const images=await page.locator('img').evaluateAll(xs=>xs.map(x=>({src:x.currentSrc,alt:x.alt,width:x.naturalWidth,height:x.naturalHeight})));
 await fs.writeFile(`${dir}/sources/${name}.txt`,text);
 await fs.writeFile(`${dir}/sources/${name}.json`,JSON.stringify({url:page.url(),status,error,links,images},null,2));
 if(name==='flag'){await fs.writeFile(`${dir}/sources/flag-scripts.json`,JSON.stringify(scripts));await page.waitForTimeout(1500);await page.screenshot({path:`${dir}/sources/flag-later.png`});}
 await page.close();return {name,status,error,words:text.split(/\s+/).length,excerpt:text.slice(0,500)};
}));
console.log(results);
const page=await browser.newPage({colorScheme:'light',reducedMotion:'reduce'});
const baseline=[];
for(const route of ['/','/build','/build/pyvax','/build/sol2rust','/build/flowmon','/grow','/story','/contact']){
 await page.goto(`https://impure-me-v21.vercel.app${route}`,{waitUntil:'networkidle'});
 for(const width of [1440,1024,768,390,375,320]){
  await page.setViewportSize({width,height:900});await page.evaluate(()=>document.fonts.ready);
  for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=800){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(25);}
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:`${dir}/before/${route.replaceAll('/','_')||'home'}-${width}.png`,fullPage:true});
  baseline.push({route,width,...await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,words:document.querySelector('main').innerText.split(/\s+/).length,h1:document.querySelectorAll('h1').length,projects:document.querySelectorAll('.flagship').length,brokenImages:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)}))});
 }
}
await fs.writeFile(`${dir}/before/results.json`,JSON.stringify(baseline,null,2));
console.log('Captured',baseline.length,'full-page baselines');await browser.close();
