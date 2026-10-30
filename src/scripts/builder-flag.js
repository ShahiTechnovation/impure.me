// Adapted from the owner-provided https://builderbaseflag.vercel.app/ (29 Oct 2026).
// Owner explicitly authorized code and artwork reuse in this sprint.

export function createFlag(cv) {
"use strict";
/* ================= CONFIG — everything customizable lives here ================= */
const CONFIG = {
  // Artwork filling the whole square. type: "image" (uses src; falls back to a procedural landscape),
  // "gradient" (stops + angle) or "solid" (color). Default is soft white satin.
  artwork: { type: "gradient", src: "", fit: "cover", focal: [0.5, 0.5], stops: ["#efeee6", "#dddcd2"], angle: 160, color: "#f1efe8" },
  // Logo drawn on the artwork (src = any image/data URL). Set src to "" for none. width = fraction of the square.
  logo: { src: "/images/work/builder-base-mark.webp", width: 0.45 },
  colors: { stage: "#0a0a0a", sheen: "#fff0cc", sheenAccent: "#ffb8ea", artworkOverlay: "rgba(0,0,0,0)" },
  // wind = amplitude (px) of the constant flowing wave
  physics: { stiffness: 0.014, damping: 0.975, grabRadius: 0.08, lift: [70, 180], iterations: 3, introRipple: false, wind: 32 },
  shading: { glossiness: 38, ambient: 0.42, light: [-0.45, -0.6, 0.75], iridescence: 0.8, perspective: 1300 },
  grid: [28, 20],      // more columns than rows keeps cells roughly square
  aspect: 1.35        // flag width ÷ height (1 = square, 1.5 = 3:2)
};


const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const PH = CONFIG.physics, SH = CONFIG.shading;

const rgb = c => { const x = document.createElement("canvas").getContext("2d"); x.fillStyle = c; x.fillRect(0, 0, 1, 1); return [...x.getImageData(0, 0, 1, 1).data].slice(0, 3).map(v => v / 255); };

/* ================= TEXTURE ================= */
const art = { img: null, logo: null, showLogo: !!CONFIG.logo.src };
const tex = document.createElement("canvas"), tx = tex.getContext("2d");
let vw = 0, vh = 0, S = 0, SW = 0;   // S = flag height, SW = flag width
const grain = (() => {            // tiny noise tile → woven-fabric grain
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d"), d = g.createImageData(128, 128);
  for (let i = 0; i < d.data.length; i += 4) { d.data[i] = d.data[i + 1] = d.data[i + 2] = Math.random() * 255; d.data[i + 3] = 255; }
  g.putImageData(d, 0, 0); return tx.createPattern(c, "repeat");
})();

function loadImg(src, cb) {
  const im = new Image();
  if (!/^data:|^blob:/.test(src)) im.crossOrigin = "anonymous";
  im.onload = () => cb(im); im.onerror = () => cb(null);
  im.src = src;
}
function landscape(W, H) {
  const st = CONFIG.artwork.stops, g = tx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, st[0]); g.addColorStop(1, st[1] || st[0]); tx.fillStyle = g; tx.fillRect(0, 0, W, H);
  tx.fillStyle = "rgba(255,244,214,.85)"; tx.beginPath(); tx.arc(W * .68, H * .36, W * .08, 0, 7); tx.fill();
  [[.58, .05, st[1] || st[0]], [.7, .07, st[2] || st[0]], [.82, .06, st[2] || st[0]]].forEach(([y, a, c], k) => {
    tx.fillStyle = c; tx.globalAlpha = .55 + k * .2; tx.beginPath(); tx.moveTo(0, H);
    for (let x = 0; x <= W; x += 8) tx.lineTo(x, H * (y + a * Math.sin(x / W * (4 + k * 2) + k * 2)));
    tx.lineTo(W, H); tx.fill();
  });
  tx.globalAlpha = 1;
}
function paint() {
  const H = tex.height = Math.max(256, Math.min(1024, Math.round(S * 1.7))), W = tex.width = Math.round(H * CONFIG.aspect), A = CONFIG.artwork;
  if (A.type === "image" && art.img) {
    const im = art.img, s = A.fit === "contain" ? Math.min(W / im.width, H / im.height) : Math.max(W / im.width, H / im.height);
    const dw = im.width * s, dh = im.height * s;
    tx.fillStyle = A.color; tx.fillRect(0, 0, W, H);
    tx.drawImage(im, (W - dw) * A.focal[0], (H - dh) * A.focal[1], dw, dh);
  } else if (A.type === "image") landscape(W, H);
  else if (A.type === "gradient") {
    const a = A.angle * Math.PI / 180, dx = Math.sin(a), dy = -Math.cos(a), h = (Math.abs(dx) + Math.abs(dy)) * W / 2;
    const g = tx.createLinearGradient(W / 2 - dx * h, H / 2 - dy * h, W / 2 + dx * h, H / 2 + dy * h);
    A.stops.forEach((c, i) => g.addColorStop(i / Math.max(1, A.stops.length - 1), c));
    tx.fillStyle = g; tx.fillRect(0, 0, W, H);
  } else { tx.fillStyle = A.color; tx.fillRect(0, 0, W, H); }
  tx.fillStyle = CONFIG.colors.artworkOverlay; tx.fillRect(0, 0, W, H);
  if (art.showLogo && art.logo) {
    const lw = W * CONFIG.logo.width, lh = lw * art.logo.height / art.logo.width;
    tx.drawImage(art.logo, (W - lw) / 2, (H - lh) / 2, lw, lh);
  }
  tx.globalCompositeOperation = "soft-light"; tx.globalAlpha = .45; tx.fillStyle = grain; tx.fillRect(0, 0, W, H);
  tx.globalCompositeOperation = "source-over"; tx.globalAlpha = 1;
  upload();
}


/* ================= PHYSICS (Verlet cloth) ================= */
let cols, rows, n, P, Q, Rs, N, UV, IDX, sp, ox, oy, t = 0;
let cA, cB, cL, cK;                 // constraint arrays
let grab = null;
const hv = { on: false, x: 0, y: 0, vx: 0, vy: 0 };

function init() {
  [cols, rows] = CONFIG.grid; n = cols * rows;
  P = new Float32Array(n * 3); Q = new Float32Array(n * 3); Rs = new Float32Array(n * 3); N = new Float32Array(n * 3); UV = new Float32Array(n * 2);
  sp = SW / (cols - 1); const spy = S / (rows - 1); ox = (vw - SW) / 2; oy = (vh - S) / 2;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const k = j * cols + i; Rs[k * 3] = ox + i * sp; Rs[k * 3 + 1] = oy + j * spy; UV[k * 2] = i / (cols - 1); UV[k * 2 + 1] = j / (rows - 1);
  }
  const a = [], b = [], l = [], kk = [];
  const add = (i, j, i2, j2, s) => {
    if (i2 < 0 || j2 < 0 || i2 >= cols || j2 >= rows) return;
    const p = j * cols + i, q = j2 * cols + i2; a.push(p); b.push(q); kk.push(s);
    l.push(Math.hypot(Rs[p * 3] - Rs[q * 3], Rs[p * 3 + 1] - Rs[q * 3 + 1]));
  };
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    add(i, j, i + 1, j, .9); add(i, j, i, j + 1, .9);
    add(i, j, i + 1, j + 1, .5); add(i, j, i - 1, j + 1, .5);
    add(i, j, i + 2, j, .1); add(i, j, i, j + 2, .1);
  }
  cA = Int32Array.from(a); cB = Int32Array.from(b); cL = Float32Array.from(l); cK = Float32Array.from(kk);
  const idx = [];
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) { const p = j * cols + i; idx.push(p, p + 1, p + cols, p + 1, p + cols + 1, p + cols); }
  IDX = Uint16Array.from(idx);
  t = 0; wind(); P.set(Rs); Q.set(Rs); grab = null;
  if (PH.introRipple && !reduced) for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) Q[(j * cols + i) * 3 + 2] -= 70 / 60 * Math.sin(i * .4 + j * .3);
  glInit();
}
// flowing wind: the rest shape is a travelling wave, so the cloth's shape memory chases it
function wind() {
  const A = PH.wind * S / 300 * (reduced ? .5 : 1);
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const u = i / (cols - 1), v = j / (rows - 1);
    Rs[(j * cols + i) * 3 + 2] = A * (.35 + .65 * u) * (Math.sin(u * 5.6 - t * 4 + v * 3.4) + .45 * Math.sin(u * 14 - t * 3 - v * 2.6 + 1.3));
  }
}
function step() {
  t += 1 / 60; wind();
  const kS = PH.stiffness, d = PH.damping;
  for (let k = 0; k < n * 3; k++) { const p = P[k], v = (p - Q[k]) * d; Q[k] = p; P[k] = p + v + (Rs[k] - p) * kS; }
  if (hv.on) {                                   // soft hover push
    const sp2 = Math.hypot(hv.vx, hv.vy), r = PH.grabRadius * S * .8;
    if (sp2 > .05) for (let k = 0; k < n; k++) {
      const dx = Rs[k * 3] - hv.x, dy = Rs[k * 3 + 1] - hv.y, w = Math.exp(-(dx * dx + dy * dy) / (r * r));
      if (w > .03) { P[k * 3] += hv.vx * w * .1; P[k * 3 + 1] += hv.vy * w * .1; P[k * 3 + 2] += w * Math.min(4, sp2 * .15); }
    }
    hv.vx *= .85; hv.vy *= .85;
  }
  for (let it = 0; it < PH.iterations; it++) {
    if (grab) {
      const lm = reduced ? .5 : 1, dist = Math.hypot(grab.dx, grab.dy);
      const lift = (PH.lift[0] + Math.min(PH.lift[1] - PH.lift[0], dist * .35)) * lm;
      for (let m = 0; m < grab.idx.length; m++) {
        const k = grab.idx[m] * 3, w = grab.w[m];
        P[k] += (grab.bx[m] + grab.dx - P[k]) * w * .4;
        P[k + 1] += (grab.by[m] + grab.dy - P[k + 1]) * w * .4;
        P[k + 2] += (grab.bz[m] + w * lift - P[k + 2]) * w * .4;
      }
    }
    for (let c = 0; c < cA.length; c++) {
      const a = cA[c] * 3, b = cB[c] * 3, dx = P[b] - P[a], dy = P[b + 1] - P[a + 1], dz = P[b + 2] - P[a + 2];
      const len = Math.hypot(dx, dy, dz) || 1e-6, f = (len - cL[c]) / len * cK[c] * .5;
      P[a] += dx * f; P[a + 1] += dy * f; P[a + 2] += dz * f; P[b] -= dx * f; P[b + 1] -= dy * f; P[b + 2] -= dz * f;
    }
  }
}
function normals() {
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const a = j * cols + i, l = (j * cols + Math.max(i - 1, 0)) * 3, r = (j * cols + Math.min(i + 1, cols - 1)) * 3;
    const u = (Math.max(j - 1, 0) * cols + i) * 3, d = (Math.min(j + 1, rows - 1) * cols + i) * 3;
    const ax = P[r] - P[l], ay = P[r + 1] - P[l + 1], az = P[r + 2] - P[l + 2], bx = P[d] - P[u], by = P[d + 1] - P[u + 1], bz = P[d + 2] - P[u + 2];
    const x = ay * bz - az * by, y = az * bx - ax * bz, z = ax * by - ay * bx, m = Math.hypot(x, y, z) || 1;
    N[a * 3] = x / m; N[a * 3 + 1] = y / m; N[a * 3 + 2] = z / m;
  }
}

/* ================= GL ================= */
const gl = cv.getContext("webgl2", { antialias: true, alpha: false });
if (!gl) throw new Error("WebGL2 unavailable");
const sheen = rgb(CONFIG.colors.sheen), sheenAccent = rgb(CONFIG.colors.sheenAccent);
let prog, U = {}, bufP, bufN, bufUV, bufI, glTex, vao, stage = rgb(CONFIG.colors.stage);
const VS = `#version 300 es
in vec3 aP; in vec3 aN; in vec2 aUV; uniform vec2 uView; uniform float uF; out vec2 vUV; out vec3 vN;
void main(){ float s=uF/(uF-aP.z); vec2 c=uView*.5; vec2 q=c+(aP.xy-c)*s;
 gl_Position=vec4(q.x/uView.x*2.-1., 1.-q.y/uView.y*2., -aP.z/4000., 1.); vUV=aUV; vN=aN; }`;
const FS = `#version 300 es
precision highp float; in vec2 vUV; in vec3 vN; out vec4 o;
uniform sampler2D uT; uniform vec3 uL, uS, uS2; uniform float uG, uA, uI;
void main(){
 vec3 n=normalize(vN); float back=1.; if(n.z<0.){ n=-n; back=.82; }
 vec3 L=normalize(uL); float d=min(max(dot(n,L),0.)/L.z,1.1);
 vec3 col=texture(uT,vUV).rgb*(uA+(1.-uA)*d)*back;
 vec3 H=normalize(L+vec3(0.,0.,1.)); float nh=max(dot(n,H),0.);
 vec3 tint=mix(uS,uS2,clamp(.5+n.x*1.6,0.,1.)*uI);
 col+=tint*(pow(nh,uG)*.4+pow(nh,7.)*.05)*back;
 col*=1.04-.08*length(vUV-vec2(.35,.3));
 o=vec4(col,1.); }`;
function glInit() {
  if (!gl) return;
  if (!prog) {
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    ["uView", "uF", "uT", "uL", "uS", "uS2", "uG", "uA", "uI"].forEach(k => U[k] = gl.getUniformLocation(prog, k));
    vao = gl.createVertexArray(); bufP = gl.createBuffer(); bufN = gl.createBuffer(); bufUV = gl.createBuffer(); bufI = gl.createBuffer(); glTex = gl.createTexture();
    gl.enable(gl.DEPTH_TEST);
  }
  gl.bindVertexArray(vao);
  [[bufP, "aP", 3, P, gl.DYNAMIC_DRAW], [bufN, "aN", 3, N, gl.DYNAMIC_DRAW], [bufUV, "aUV", 2, UV, gl.STATIC_DRAW]].forEach(([b, nm, sz, data, use]) => {
    const loc = gl.getAttribLocation(prog, nm); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, use);
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, sz, gl.FLOAT, false, 0, 0);
  });
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufI); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, IDX, gl.STATIC_DRAW);
}
function upload() {
  if (!gl) return;
  gl.bindTexture(gl.TEXTURE_2D, glTex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex); gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
function draw() {
  gl.clearColor(stage[0], stage[1], stage[2], 1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.useProgram(prog); gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, bufP); gl.bufferSubData(gl.ARRAY_BUFFER, 0, P);
  gl.bindBuffer(gl.ARRAY_BUFFER, bufN); gl.bufferSubData(gl.ARRAY_BUFFER, 0, N);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, glTex);
  gl.uniform1i(U.uT, 0); gl.uniform2f(U.uView, vw, vh); gl.uniform1f(U.uF, SH.perspective);
  gl.uniform3fv(U.uL, SH.light); gl.uniform3fv(U.uS, sheen); gl.uniform3fv(U.uS2, sheenAccent);
  gl.uniform1f(U.uG, SH.glossiness); gl.uniform1f(U.uA, SH.ambient); gl.uniform1f(U.uI, SH.iridescence);
  gl.drawElements(gl.TRIANGLES, IDX.length, gl.UNSIGNED_SHORT, 0);
}

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
