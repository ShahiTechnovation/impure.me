import sharp from 'sharp';
import fs from 'node:fs/promises';
await fs.mkdir('artifacts/v23/comparisons',{recursive:true});
for(const [name,route,width,thumb] of [['home-desktop','_',1440,720],['home-mobile','_',390,390],['grow-desktop','_grow',1440,720],['grow-mobile','_grow',390,390]]){
 const tiles=[];let height=0;
 for(const [i,state] of ['before','after'].entries()){
  const image=await sharp(`artifacts/v23/${state}/${route}-${width}.png`).resize({width:thumb}).png().toBuffer();
  const meta=await sharp(image).metadata();height=Math.max(height,meta.height+44);
  tiles.push({input:image,left:i*(thumb+20),top:44});
  tiles.push({input:Buffer.from(`<svg width="${thumb}" height="44"><rect width="100%" height="100%" fill="#171717"/><text x="16" y="28" fill="#f4f1e9" font-family="Arial" font-size="17">${state==='before'?'V2.1 / Before':'V2.3 / After'} · ${width}px</text></svg>`),left:i*(thumb+20),top:0});
 }
 await sharp({create:{width:thumb*2+20,height,channels:3,background:'#e6e2da'}}).composite(tiles).webp({quality:86}).toFile(`artifacts/v23/comparisons/${name}.webp`);
}
console.log('Four before/after comparisons created from full-page captures.');
