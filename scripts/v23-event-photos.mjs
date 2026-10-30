import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import sharp from 'sharp';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},timezoneId:'Asia/Kolkata'});
await page.goto('https://builderbase.notion.site/Builder-Base-Events-3376984dfba180b8b003c9d33515327c',{waitUntil:'domcontentloaded'});
await page.getByText('Builder Base Events',{exact:true}).first().waitFor({timeout:45000});
const images=new Map();
for(let i=0;i<22;i++){
 for(const x of await page.locator('img').evaluateAll(xs=>xs.map(x=>({src:x.currentSrc,width:x.naturalWidth,preceding:[...document.querySelectorAll('.notion-selectable')].filter(b=>b.innerText?.length>20&&b.innerText?.length<550&&(x.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_PRECEDING)).slice(-4).map(b=>b.innerText)}))))if(x.src.startsWith('http')&&x.width>400)images.set(x.src,x);
 await page.mouse.move(1000,650);await page.mouse.wheel(0,650);await page.waitForTimeout(400);
}
const output=[];
for(const [i,im] of [...images.values()].entries()) {
 if(!im.preceding.join(' ').match(/Claude|Monad Blitz v3|Namaste Arbitrum|MetaMask Community Builder Night|SynergiX|Chainlink 101/))continue;
 const r=await page.request.get(im.src);if(!r.ok())continue;
 const file=`event-${i}.webp`;await sharp(await r.body()).webp({quality:84}).toFile(`artifacts/v23/sources/${file}`);
 output.push({file,...im});
}
await fs.writeFile('artifacts/v23/sources/event-photo-index.json',JSON.stringify(output,null,2));console.log(output.map(x=>({file:x.file,preceding:x.preceding})));
await browser.close();
