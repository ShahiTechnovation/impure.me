import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

console.log('--------------------------------------------------');
console.log('🧪 impure.me V2 — Automated Build & Route Verification');
console.log('--------------------------------------------------');

if (!fs.existsSync(distDir)) {
  console.error('❌ Build directory "dist" does not exist. Run "npm run build" first.');
  process.exit(1);
}

const requiredRoutes = [
  'index.html',
  'build/index.html',
  'grow/index.html',
  'story/index.html',
  'contact/index.html',
  'build/pyvax/index.html',
  'build/sol2rust/index.html',
  'build/flowmon/index.html',
  'build/rustag/index.html',
  'build/rxgr/index.html',
  'build/bloopa/index.html',
  'build/apv3rse/index.html',
  'build/with-claude/index.html',
  'build/pymon/index.html',
  'build/neurofit/index.html',
  'build/x4pn/index.html',
  'build/zerothon/index.html',
  'build/builderbase-v2/index.html',
  'build/pystylus/index.html',
  'build/solmeet/index.html',
  'build/cpop/index.html',
  'build/chainlink-cre/index.html',
  'build/x402/index.html'
];

let passed = 0;
let failed = 0;

console.log('\n[1/3] Verifying Generated Routes...');
for (const route of requiredRoutes) {
  const filePath = path.join(distDir, route);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.size > 200) {
      console.log(`  ✓ Route exists: /${route.replace('/index.html', '') || ''} (${stats.size} bytes)`);
      passed++;
    } else {
      console.error(`  ❌ Route file too small: ${route} (${stats.size} bytes)`);
      failed++;
    }
  } else {
    console.error(`  ❌ Missing route: ${route}`);
    failed++;
  }
}

console.log('\n[2/3] Checking HTML Structural Integrity & SEO Meta...');
const keyPages = ['index.html', 'build/index.html', 'grow/index.html', 'story/index.html', 'contact/index.html', 'build/pyvax/index.html'];

for (const page of keyPages) {
  const content = fs.readFileSync(path.join(distDir, page), 'utf-8');
  
  // 1. Single H1 check
  const h1Matches = content.match(/<h1[^>]*>/gi);
  if (h1Matches && h1Matches.length === 1) {
    console.log(`  ✓ Single <h1> verified in /${page}`);
    passed++;
  } else {
    console.error(`  ❌ Expected exactly 1 <h1> in /${page}, found ${h1Matches ? h1Matches.length : 0}`);
    failed++;
  }

  // 2. Canonical check
  if (content.includes('<link rel="canonical"')) {
    console.log(`  ✓ Canonical URL tag verified in /${page}`);
    passed++;
  } else {
    console.error(`  ❌ Missing canonical tag in /${page}`);
    failed++;
  }

  // 3. OpenGraph & Twitter Cards
  if (content.includes('property="og:title"') && content.includes('name="twitter:card"')) {
    console.log(`  ✓ Social meta cards verified in /${page}`);
    passed++;
  } else {
    console.error(`  ❌ Incomplete social meta cards in /${page}`);
    failed++;
  }

  // 4. Skip navigation link
  if (content.includes('class="skip-link"')) {
    console.log(`  ✓ Accessible skip navigation link verified in /${page}`);
    passed++;
  } else {
    console.error(`  ❌ Missing skip-link in /${page}`);
    failed++;
  }
}

console.log('\n[3/3] Checking Static Assets...');
const requiredAssets = [
  'images/punit-pal.jpg',
  'images/paper-texture.png',
  'images/og-image.png',
  'favicon.svg',
  'robots.txt',
  'sitemap-index.xml'
];

for (const asset of requiredAssets) {
  const assetPath = path.join(distDir, asset);
  if (fs.existsSync(assetPath)) {
    const stats = fs.statSync(assetPath);
    console.log(`  ✓ Asset verified: ${asset} (${stats.size} bytes)`);
    passed++;
  } else {
    console.error(`  ❌ Missing asset: ${asset}`);
    failed++;
  }
}

console.log('\n--------------------------------------------------');
console.log(`📊 Test Results: ${passed} Passed, ${failed} Failed`);
console.log('--------------------------------------------------');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 All automated acceptance checks passed successfully!\n');
  process.exit(0);
}
