import {chromium} from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs/promises';
const dir='artifacts/design/review';await fs.mkdir(dir,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({reducedMotion:'reduce'});
for(const width of [390,1440]) {
 await page.setViewportSize({width,height:900});await page.goto('http://127.0.0.1:4322/');
 for(const name of ['Selected work','Beyond engineering','Recognition','Field notes'])await page.locator(`section[aria-label="${name}"]`).screenshot({path:`${dir}/${name.replaceAll(' ','-')}-${width}.png`});
}
await browser.close();
for(const width of [1440,390]) {
 const scaled=width===1440?720:390;
 const label=Buffer.from(`<svg width="${scaled*2}" height="42"><rect width="100%" height="100%" fill="#f6f4ee"/><g font-family="Arial" font-size="14" fill="#111"><text x="18" y="27">BEFORE / ${width}px</text><text x="${scaled+18}" y="27">AFTER / ${width}px</text></g></svg>`);
 const imgs=await Promise.all(['deployed-before','after'].map(phase=>sharp(`artifacts/design/${phase}/home-${width}.png`).resize(scaled).toBuffer()));
 const height=width===1440?450:900;
 await sharp({create:{width:scaled*2,height:height+42,channels:3,background:'#f6f4ee'}}).composite([{input:label,left:0,top:0},...imgs.map((input,i)=>({input,left:i*scaled,top:42}))]).png().toFile(`${dir}/comparison-${width}.png`);
}
for(const theme of ['light','dark']){
 const routes=['build','grow','story','contact'];
 const desktop=await Promise.all(routes.map(route=>sharp(`artifacts/design/qa/_${route}-1440-${theme}.png`).extract({left:0,top:0,width:1440,height:900}).resize(720).toBuffer()));
 await sharp({create:{width:1440,height:900,channels:3,background:'#f6f4ee'}}).composite(desktop.map((input,i)=>({input,left:(i%2)*720,top:Math.floor(i/2)*450}))).png().toFile(`${dir}/internal-desktop-${theme}.png`);
 const mobile=await Promise.all(routes.map(route=>sharp(`artifacts/design/qa/_${route}-390-${theme}.png`).extract({left:0,top:0,width:390,height:900}).toBuffer()));
 await sharp({create:{width:780,height:1800,channels:3,background:'#f6f4ee'}}).composite(mobile.map((input,i)=>({input,left:(i%2)*390,top:Math.floor(i/2)*900}))).png().toFile(`${dir}/internal-mobile-${theme}.png`);
}
