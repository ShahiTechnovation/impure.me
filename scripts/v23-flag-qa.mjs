import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const dir='artifacts/v23/qa';await fs.mkdir(dir,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'no-preference'});
await context.addInitScript(()=>{
 window.flagDraws=0;
 const draw=WebGL2RenderingContext.prototype.drawElements;
 WebGL2RenderingContext.prototype.drawElements=function(...args){window.flagDraws++;return draw.apply(this,args)};
});
const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:4322/',{waitUntil:'networkidle'});
assert.equal(await page.evaluate(()=>window.flagDraws),0,'No initialization above fold');
const flag=page.locator('[data-builder-flag]');await flag.scrollIntoViewIfNeeded();
await page.waitForFunction(()=>document.querySelector('[data-builder-flag]').hasAttribute('data-ready'));
await page.waitForTimeout(700);
const a=await flag.locator('canvas').screenshot();await page.waitForTimeout(500);
const b=await flag.locator('canvas').screenshot();assert(!a.equals(b),'Animation changes frames');
const cdp=await context.newCDPSession(page);await cdp.send('Performance.enable');
async function sample(name){
 const before=await cdp.send('Performance.getMetrics');const draws=await page.evaluate(()=>window.flagDraws);const start=Date.now();
 await page.waitForTimeout(3000);
 const after=await cdp.send('Performance.getMetrics');const metric=(xs,k)=>xs.metrics.find(x=>x.name===k)?.value||0;
 return {name,wallMs:Date.now()-start,draws:await page.evaluate(()=>window.flagDraws)-draws,taskMs:Math.round((metric(after,'TaskDuration')-metric(before,'TaskDuration'))*1000),scriptMs:Math.round((metric(after,'ScriptDuration')-metric(before,'ScriptDuration'))*1000)};
}
const samples=[await sample('visible-playing')];
await flag.getByRole('button',{name:'Pause flag'}).click();await page.waitForTimeout(200);
samples.push(await sample('user-paused'));assert.equal(samples.at(-1).draws,0);
await flag.getByRole('button',{name:'Play flag'}).click();await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(200);
samples.push(await sample('offscreen'));assert.equal(samples.at(-1).draws,0);
await flag.scrollIntoViewIfNeeded();await page.waitForTimeout(200);
await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(200);
samples.push(await sample('reduced-motion'));assert.equal(samples.at(-1).draws,0);assert.equal(await flag.getAttribute('data-ready'),null);
await page.emulateMedia({reducedMotion:'no-preference'});await page.setViewportSize({width:390,height:844});await page.waitForTimeout(200);
samples.push(await sample('mobile'));assert.equal(samples.at(-1).draws,0);assert.equal(await flag.getAttribute('data-ready'),null);
await page.setViewportSize({width:1440,height:900});await flag.scrollIntoViewIfNeeded();await page.waitForTimeout(250);
const renderer=await page.evaluate(()=>{const gl=document.querySelector('[data-builder-flag] canvas').getContext('webgl2');const ext=gl.getExtension('WEBGL_debug_renderer_info');return ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):'unavailable'});
await flag.screenshot({path:`${dir}/native-flag-desktop.png`});
await page.evaluate(()=>document.querySelector('[data-builder-flag] canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
await page.waitForTimeout(100);assert.equal(await flag.getAttribute('data-ready'),null);
await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await flag.scrollIntoViewIfNeeded();await page.waitForTimeout(100);assert.equal(await flag.getAttribute('data-ready'),null,'Lost context keeps fallback after re-entry');
for(const scenario of ['mobile','reduced','save-data','no-webgl','no-js']){
 const ctx=await browser.newContext({viewport:{width:scenario==='mobile'?390:1440,height:900},reducedMotion:scenario==='reduced'?'reduce':'no-preference',javaScriptEnabled:scenario!=='no-js'});
 if(scenario==='save-data')await ctx.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true}}));
 if(scenario==='no-webgl')await ctx.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return type==='webgl2'?null:original.call(this,type,...args)}});
 const p=await ctx.newPage();await p.goto('http://127.0.0.1:4322/grow',{waitUntil:'networkidle'});
 const f=p.locator('[data-builder-flag]');await f.scrollIntoViewIfNeeded();await p.waitForTimeout(250);
 assert.equal(await f.getAttribute('data-ready'),null,scenario);assert(await f.locator('img').evaluate(i=>i.complete&&i.naturalWidth>0),scenario);
 await f.screenshot({path:`${dir}/flag-${scenario}.png`});await ctx.close();
}
assert.deepEqual(errors,[]);
const result={samples,renderer,errors,checks:'Lazy initialization; changing frames; user pause; offscreen pause; reduced motion; mobile; save-data; no WebGL; no JS; context loss and re-entry fallback',scope:'Chrome headless lab; TaskDuration is main-thread work, not GPU energy or field Core Web Vitals'};
await fs.writeFile(`${dir}/flag-results.json`,JSON.stringify(result,null,2));console.log(result);await browser.close();
