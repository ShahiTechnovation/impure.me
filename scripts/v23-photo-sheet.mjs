import fs from 'node:fs/promises';
import sharp from 'sharp';
const {images}=JSON.parse(await fs.readFile('artifacts/v23/sources/events-blocks.json','utf8'));
const tiles=[];
for(let i=1;i<images.length;i++){
 const response=await fetch(images[i].src);if(!response.ok)continue;
 const file=`artifacts/v23/sources/archive-${i}.webp`;
 await sharp(Buffer.from(await response.arrayBuffer())).webp({quality:85}).toFile(file);
 const thumb=await sharp(file).resize(240,160,{fit:'contain',background:'#eee'}).png().toBuffer();
 tiles.push({input:thumb,left:((i-1)%5)*250,top:Math.floor((i-1)/5)*190+24});
 tiles.push({input:Buffer.from(`<svg width="240" height="24"><rect width="240" height="24" fill="white"/><text x="8" y="17" font-size="16">Archive photo ${i}</text></svg>`),left:((i-1)%5)*250,top:Math.floor((i-1)/5)*190});
}
await sharp({create:{width:1250,height:Math.ceil((images.length-1)/5)*190,channels:3,background:'#ddd'}}).composite(tiles).png().toFile('artifacts/v23/sources/photo-contact-sheet.png');
console.log('Photo sheet ready');
