import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const dir='artifacts/v23/after';await fs.mkdir(dir,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({reducedMotion:'reduce',colorScheme:'light'});
const results=[];
for(const route of ['/','/grow','/story','/contact','/build','/build/pyvax','/build/sol2rust','/build/flowmon']){
 await page.goto(`http://127.0.0.1:4322${route}`,{waitUntil:'networkidle'});
 for(const width of [1440,1024,768,430,390,375,320]){
  await page.setViewportSize({width,height:900});await page.evaluate(()=>document.fonts.ready);
  for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(25);}
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:`${dir}/${route.replaceAll('/','_')}-${width}.png`,fullPage:true});
  results.push({route,width,...await page.evaluate(()=>({words:document.querySelector('main').innerText.split(/\s+/).length,overflow:document.documentElement.scrollWidth>innerWidth}))});
  if(route==='/'&&[1440,390,320].includes(width)){
   for(const selector of ['.identity','.flagship-pyvax','.flagship-sol2rust','.flagship-flowmon','.community-section'])await page.locator(selector).screenshot({path:`${dir}/${selector.slice(1)}-${width}.png`});
  }
 }
}
await fs.writeFile(`${dir}/metrics.json`,JSON.stringify(results,null,2));console.log(results);await browser.close();
