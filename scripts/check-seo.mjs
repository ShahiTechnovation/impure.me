import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
async function htmlFiles(dir) {
  const entries=await fs.readdir(dir,{withFileTypes:true});
  return (await Promise.all(entries.map(e=>e.isDirectory()?htmlFiles(`${dir}/${e.name}`):e.name.endsWith('.html')?[`${dir}/${e.name}`]:[]))).flat();
}
const results=[];
for (const [dir,preview] of [['dist',false],['dist-preview',true]]) {
 const files=await htmlFiles(dir);assert.equal(files.length,23);
 for(const file of files){const html=await fs.readFile(file,'utf8');assert(html.includes(preview?'content="noindex, nofollow"':'content="index, follow,'),file);assert(html.includes('rel="canonical" href="https://impure.me/'),file);}
 results.push({build:dir,pages:files.length,robots:preview?'noindex, nofollow':'index, follow',canonical:'https://impure.me/'});
}
const sitemap=await fs.readFile('dist/sitemap-0.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,23);
const preview=await fetch('https://impureme-coral.vercel.app/');
assert.equal(preview.headers.get('x-robots-tag'),'noindex, nofollow');
const report={builds:results,sitemapUrls:23,livePreviewRobotsHeader:preview.headers.get('x-robots-tag')};
await fs.writeFile('artifacts/design/seo-results.json',JSON.stringify(report,null,2));console.log(report);
