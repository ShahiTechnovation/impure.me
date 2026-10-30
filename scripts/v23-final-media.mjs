import {chromium} from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs/promises';
const source=JSON.parse(await fs.readFile('artifacts/v23/sources/events-blocks.json','utf8'));
const photos=[];
let data=await fs.readFile('src/data/programs.ts','utf8');
for(const [index,name] of [[29,'claude-bhopal'],[7,'monad-delhi'],[19,'metamask-delhi']]){
 const path=`public/images/work/${name}.webp`;
 const info=await sharp(`artifacts/v23/sources/archive-${index}.webp`).resize({width:1280,withoutEnlargement:true}).webp({quality:86}).toFile(path);
 data=data.replace(`image: '/images/work/${name}.webp', width: 1280, height: 960`, `image: '/images/work/${name}.webp', width: ${info.width}, height: ${info.height}`);
 photos.push({file:path,width:info.width,height:info.height,source:source.images[index].src,archive:'https://builderbase.notion.site/',retrieved:'2026-10-29'});
}
await fs.writeFile('src/data/programs.ts',data);
await fs.writeFile('artifacts/v23/sources/published-photos.json',JSON.stringify(photos,null,2));
// Render the display-only local source in an isolated canvas. No source-site UI is captured.
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1200,height:900}});
await page.goto('http://127.0.0.1:4323/');
await page.evaluate(async()=>{
 const {createFlag}=await import('/src/scripts/builder-flag.js');
 const canvas=document.createElement('canvas');canvas.style='width:1200px;height:900px;display:block';
 document.body.replaceChildren(canvas);
 const style=document.createElement('style');style.textContent='body{margin:0}body::before{display:none}';document.head.append(style);
 window.posterFlag=createFlag(canvas);await window.posterFlag.ready;window.posterFlag.play();
});
await page.waitForTimeout(1600);
await page.evaluate(()=>window.posterFlag.pause());
const shot=await page.locator('canvas').screenshot();
await sharp(shot).webp({quality:85}).toFile('public/images/work/builder-base-flag.webp');
await fs.writeFile('artifacts/v23/sources/native-flag-poster.png',shot);
await browser.close();
console.log({photos,poster:'Generated from local display-only renderer, 1200×900'});
