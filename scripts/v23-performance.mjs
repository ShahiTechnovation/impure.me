import {chromium} from 'playwright';
import lighthouse from 'lighthouse';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--remote-debugging-port=9227']});
const results=[];
for(const route of ['/','/grow'])for(const mode of ['mobile','desktop']){
 const options={port:9227,output:['json','html'],onlyCategories:['performance','accessibility','best-practices','seo'],logLevel:'error',...(mode==='desktop'?{formFactor:'desktop',screenEmulation:{mobile:false,width:1440,height:900,deviceScaleFactor:1,disabled:false},throttling:{rttMs:40,throughputKbps:10240,cpuSlowdownMultiplier:1,requestLatencyMs:0,downloadThroughputKbps:0,uploadThroughputKbps:0}}:{})};
 const run=await lighthouse(`http://127.0.0.1:4322${route}`,options);
 const name=`${route==='/'?'home':'grow'}-${mode}`;
 await fs.writeFile(`artifacts/v23/qa/lighthouse-${name}.json`,run.report[0]);
 await fs.writeFile(`artifacts/v23/qa/lighthouse-${name}.html`,run.report[1]);
 const {lhr}=run;const result={route,mode,scores:Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)])),metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(k=>[k,lhr.audits[k].numericValue])),warnings:lhr.runWarnings};
 results.push(result);console.log(result);
}
await fs.writeFile('artifacts/v23/qa/performance-summary.json',JSON.stringify(results,null,2));await browser.close();
