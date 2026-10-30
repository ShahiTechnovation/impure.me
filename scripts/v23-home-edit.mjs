import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const path='src/pages/index.astro';let s=execFileSync('git',['show','5d56b26:src/pages/index.astro'],{encoding:'utf8'}).replaceAll('\r\n','\n');
s=s.replace('import BaseLayout', 'import EngineeringVisual from "../components/projects/EngineeringVisual.astro";\nimport BuilderFlag from "../components/ecosystems/BuilderFlag.astro";\nimport BaseLayout');
s=s.replace(/const summaries = \[[\s\S]*?\];/,`const summaries = [
  "Python smart contracts, lowered to EVM bytecode. A compiler and CLI for Avalanche.",
  "An AI-assisted Solidity-to-Rust prototype, exploring the path to Arbitrum Stylus.",
  "Connect protocol agents on a visual canvas. Define a workflow, inspect its dependencies, and explore the tools behind it.",
];`);
s=s.replace('category: "Solana infrastructure",','category: "Solana infrastructure",\n    tech: "Rust / Solana",');
s=s.replace('category: "AI research",','category: "AI research",\n    tech: "Python / GraphRAG",');
s=s.replace('category: "Community publishing",','category: "Community publishing",\n    tech: "Astro / PostgreSQL",');
s=s.replace('Simulate privileged transactions before execution, checking account ownership and balance invariants against a local state fork.','Pre-execution transaction simulation for Solana.');
s=s.replace('Explore drug–disease relationships through biomedical knowledge graphs and retrieval, with a research prototype built around connected evidence.','Explore drug–disease relationships with biomedical knowledge graphs.');
s=s.replace('Discover and share projects built with Claude through a publishing platform using Astro, React islands, Neon and Drizzle.','A place to discover and share projects built with Claude.');
s=s.replace(/From a familiar programming language[\s\S]*?along the way\./,'Compilers, developer tools and agent workflows. Three ways of making the next build possible.');
const start=s.indexOf('            <a\n',s.indexOf('<div class="flagship-grid">'));
const end=s.indexOf('            <div class="flagship-copy">',start);
s=s.slice(0,start)+'            <EngineeringVisual slug={project.slug} />\n'+s.slice(end);
s=s.replace('Rust / Arbitrum Stylus','Solidity / Rust / AI');
s=s.replace(/      <p class="media-note">[\s\S]*?<\/p>\n      <div class="supporting-projects">/,'      <div class="supporting-projects">');
s=s.replace('<p>{p.description}</p>','<p>{p.description}</p><span class="supporting-tech">{p.tech}</span>');
s=s.replace(/The wider archive includes APV3RSE[\s\S]*?technical decisions\./,'More experiments, prototypes and engineering notes.');
const communityStart=s.indexOf('    <section class="community-section"');
const communityEnd=s.indexOf('    <section class="editorial-section container" aria-label="Recognition">',communityStart);
s=s.slice(0,communityStart)+`    <section class="community-section" aria-label="Founder of Builder Base">
      <div class="container community-grid">
        <div class="founder-copy">
          <p class="eyebrow">02 / Founder</p>
          <h2>Builder Base<span class="red-period">.</span></h2>
          <p class="founder-position">The distribution layer for builders.</p>
          <p class="community-lead">I founded Builder Base to bring developers closer to the tools, people, and opportunities they need to build.</p>
          <p class="founder-detail">Workshops, hackathons and developer programs across India.</p>
          <a class="text-link" href="/grow">Meet the community <span aria-hidden="true">↗</span></a>
        </div>
        <BuilderFlag />
        <figure class="founder-photo">
          <img src="/images/work/community-1.webp" width="1400" height="647" alt="Builders gathered around the Builder Base banner at a community event" loading="lazy" />
          <figcaption>From the Builder Base public photo archive. <a href="https://www.builderbase.xyz/" target="_blank" rel="noopener noreferrer">Source ↗</a></figcaption>
        </figure>
        <div class="founder-footnote"><p>Good tools need people to build with.</p><a class="text-link" href="/grow#selected-programs">Selected programs ↗</a></div>
      </div>
    </section>

`+s.slice(communityEnd);
const fieldStart=s.indexOf('    <section\n      class="editorial-section field-section');
const fieldEnd=s.indexOf('    <section class="home-contact',fieldStart);
if(start<0||end<0||communityStart<0||communityEnd<0||fieldStart<0||fieldEnd<0)throw new Error('Expected baseline boundaries missing');
s=s.slice(0,fieldStart)+s.slice(fieldEnd);
s=s.replace('05 / Get in touch','04 / Get in touch');
fs.writeFileSync(path,s);
