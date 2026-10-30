import fs from 'node:fs';
const html=fs.readFileSync('artifacts/v23/sources/flag.html','utf8');
const logo=html.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)[1];
fs.writeFileSync('public/images/work/builder-base-mark.png',Buffer.from(logo,'base64'));
let source=html.match(/<script>([\s\S]*?)<\/script>/)[1];
source=source.replace('(() => {','export function createFlag(cv) {').replace(/\}\)\(\);\s*$/,'}');
source=source.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/,'/images/work/builder-base-mark.webp');
source=source.replace(/\/\/ URL params:[\s\S]*?document.body.style.background = CONFIG.colors.stage;/,'');
source=source.replace('const cv = document.getElementById("c");','');
source=source.replace('grid: [44, 32]','grid: [28, 20]');
source=source.replace('iterations: 5','iterations: 3');
source=source.replace('introRipple: true','introRipple: false');
source=source.replace('wind: 66','wind: 32');
source=source.replace('Math.min(2048,','Math.min(1024,');
source=source.replace(/function setArtwork\(src\)[\s\S]*?\n\}/,'');
source=source.replace('let prog, U = {},','if (!gl) throw new Error("WebGL2 unavailable");\nconst sheen = rgb(CONFIG.colors.sheen), sheenAccent = rgb(CONFIG.colors.sheenAccent);\nlet prog, U = {},');
source=source.replace('rgb(CONFIG.colors.sheen));','sheen);').replace('rgb(CONFIG.colors.sheenAccent));','sheenAccent);');
source=source.slice(0,source.indexOf('function drawFallback()'))+`
// V2.3 display-only lifecycle. No pointer, upload, drag/drop or document handlers.
let raf = 0, last = 0, active = false, ready = false, disposed = false;
function frame(now) {
  if (!active || disposed) return;
  raf = requestAnimationFrame(frame);
  if (now - last < 1000 / 30) return;
  last = now;
  step(); step(); normals(); draw();
}
function resize() {
  const rect = cv.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  vw = rect.width; vh = rect.height;
  S = Math.min(vw * .84 / CONFIG.aspect, vh * .76); SW = S * CONFIG.aspect;
  cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr);
  gl.viewport(0, 0, cv.width, cv.height);
  init(); paint(); normals(); draw();
}
const observer = new ResizeObserver(() => { if (ready && !disposed) resize(); });
observer.observe(cv);
const readyPromise = new Promise((resolve, reject) => {
  loadImg(CONFIG.logo.src, im => {
    if (disposed) return;
    if (!im) { reject(new Error('Flag artwork unavailable')); return; }
    art.logo = im; ready = true; resize(); resolve();
  });
});
return {
  ready: readyPromise,
  play() { if (!ready || disposed || active) return; active = true; last = performance.now(); raf = requestAnimationFrame(frame); },
  pause() { active = false; cancelAnimationFrame(raf); },
  destroy() {
    disposed = true; active = false; cancelAnimationFrame(raf); observer.disconnect();
    [bufP, bufN, bufUV, bufI].forEach(b => gl.deleteBuffer(b));
    gl.deleteTexture(glTex); gl.deleteVertexArray(vao); gl.deleteProgram(prog);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
};
}
`;
fs.mkdirSync('src/scripts',{recursive:true});
fs.writeFileSync('src/scripts/builder-flag.js','// Adapted from the owner-provided https://builderbaseflag.vercel.app/ (29 Oct 2026).\n// Owner explicitly authorized code and artwork reuse in this sprint.\n'+source);
