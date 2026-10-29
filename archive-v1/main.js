import './style.css'

let mainDossierHTML = '';

const projectData = {
    'PRJ-01': {
        title: 'PYVAX',
        role: 'PROTOCOL_CORE',
        status: 'DEPLOYED / MAINTAINED',
        stack: 'PYTHON / EVM / AVALANCHE',
        link: 'https://github.com/ShahiTechnovation/pyvax-cli',
        demo_link: 'https://x.com/PyVax/status/...',
        site_link: 'https://pyvax.xyz',
        desc: 'A Python-to-EVM compiler for the Avalanche C-Chain. Enables developers to write smart contracts natively in Python and deploy without utilizing Solidity.',
        logs: [
            '> pip install pyvax --avalanche',
            '> Compiling Python syntax to EVM bytecode... OK.',
            'IMPACT: Drastically bridges Web2 developers into Web3.'
        ]
    },
    'PRJ-02': {
        title: 'SOL2RUST',
        role: 'TRANSPILER',
        status: '1ST PLACE CORE NEXUS',
        stack: 'RUST / SOLIDITY / ARBITRUM',
        link: 'https://github.com/ShahiTechnovation/Sol2Rust',
        demo_link: 'https://luma.com/ozoqjknu',
        site_link: 'https://sol2rust.vercel.app',
        desc: 'A transpiler converting Solidity smart contracts to Rust for Arbitrum Stylus. Drastically lowers the barrier for dApp migration.',
        logs: [
            '> sol2rust translate ./Vault.sol --target stylusrust',
            '> Generating high-performance Rust contracts... 100%',
            '> Emitting Stylus verifiable VM code...',
            'IMPACT: Secure high-speed porting across VMs.'
        ]
    },
    'PRJ-03': {
        title: 'AGENT',
        role: 'AI ORCHESTRATION',
        status: 'BETA',
        stack: 'PYTHON / AI',
        link: '#',
        desc: 'A no-code AI orchestration layer built on top of PyVax, enabling intuitive natural language commands to compile and deploy direct smart contracts on-chain.',
        logs: [
            '> "Deploy a token named DegenToken with 1B supply" => Processing',
            '> Bytecode derived. Executing transaction...',
            'IMPACT: Text-to-Contract reality.'
        ]
    },
    'PRJ-04': {
        title: 'X4PN',
        role: 'ROUTER',
        status: 'LIVE',
        stack: 'JS / REACT / INFRA',
        link: 'https://github.com/ShahiTechnovation/X4PN-UI',
        desc: 'A decentralized VPN (dVPN) platform incentivizing bandwidth providers where users can pay in native USDC and earn yield/rewards.',
        logs: [
            '> Establishing peer-to-peer relay...',
            '> Routing traffic... SECURED.',
            'IMPACT: Censorship resistant bandwidth.'
        ]
    },
    'PRJ-05': {
        title: 'FLOWMON',
        role: 'ORCHESTRATOR',
        status: '1ST RUNNER UP // MONAD BLITZ V3',
        stack: 'TYPESCRIPT / NEXT.JS / MONAD',
        link: 'https://github.com/leojay-net/agentflow',
        site_link: 'https://flow-mon.vercel.app',
        desc: 'Visual multi-agent orchestration platform for Web3 pipelines. Drag protocol agents onto a canvas, wire them together, and watch 43 real agents execute with live on-chain data — no SDK glue, no boilerplate. 1st Runner Up at Monad Blitz V3.',
        logs: [
            '> [LINK] <a href="https://github.com/leojay-net/agentflow" target="_blank" style="color:var(--accent-color);">github.com/leojay-net/agentflow</a>',
            '> Resolving dependency graph... 43 agents loaded.',
            '> Parallel execution on Monad EVM... 10,000 TPS.',
            '> [Chainlink Oracle] ETH = $2,148.04 ✓',
            '> [Lido Vault Monitor] stETH APR = 2.42% ✓',
            '> [Uniswap Quoter] route built ✓',
            '> [Base TX Executor] tx confirmed ✓',
            'IMPACT: Zero glue code. 43 agents. 23 protocols. 0 mock responses.'
        ]
    },
    'PRJ-06': {
        title: 'PYMON',
        role: 'COMPILER',
        status: '1ST RUNNER UP // MONAD DELHI',
        stack: 'PYTHON / EVM / MONAD',
        link: '#',
        site_link: 'https://pokeemon-blond.vercel.app/',
        demo_link: 'https://luma.com/zzogo8yu',
        desc: 'Python smart contracts for Monad blockchain. Enabling Python developers to build on Monad with seamless Python-to-EVM compilation and deployment tools. 1st Runner-Up at Monad Delhi.',
        logs: [
            '> pyvax compile --target monad',
            '> Transpiling Python AST to EVM opcodes...',
            '> Deploying to Monad testnet... TX CONFIRMED.',
            'IMPACT: Python-native smart contracts on 10,000 TPS Monad EVM.'
        ]
    },
    'PRJ-07': {
        title: 'NEUROFIT',
        role: 'AI/ML PLATFORM',
        status: '1ST RUNNER UP // BRAHMAX',
        stack: 'AI / NEURAL NETS / WEB3',
        link: 'https://github.com/ShahiTechnovation/NeuroFit',
        site_link: 'https://neurofitt.vercel.app',
        demo_link: 'https://unstop.com/o/Ch1wQ9l',
        desc: 'AI-powered fitness platform using neural networks to create adaptive workout plans and track user progress with AI-driven insights. 1st Runner-Up at BrahmaX 1.0.',
        logs: [
            '> Loading neural fitness model...',
            '> Analyzing user biometrics... PROFILE BUILT.',
            '> Generating adaptive workout plan... OPTIMIZED.',
            'IMPACT: Personalized AI fitness at the intersection of Web3 and wellness.'
        ]
    },
    'PRJ-08': {
        title: 'ZEROTHON',
        role: 'PLAYGROUND',
        status: 'LIVE // MANTLE HACK',
        stack: 'PYTHON / EVM / MULTI-CHAIN',
        link: 'https://github.com/ShahiTechnovation/zerothon',
        site_link: 'https://zerothon.vercel.app',
        desc: 'Python-to-EVM playground with live IDE across all EVM chains via Chainlist RPC integration. Write, compile, and deploy Python smart contracts directly in the browser.',
        logs: [
            '> Initializing browser IDE...',
            '> Connecting to Chainlist RPC endpoints... 500+ chains.',
            '> Compiling Python → EVM bytecode in-browser... OK.',
            '> Deploying to target chain... TX HASH received.',
            'IMPACT: Zero-install Python smart contract development for every EVM chain.'
        ]
    },
    'PRJ-09': {
        title: 'APV3RSE',
        role: 'AI DEV PLATFORM',
        status: 'TOP 15 // APTOS WINTERSCHOOL',
        stack: 'REACT / MOVE / APTOS',
        link: 'https://github.com/ShahiTechnovation/Apv3rse',
        site_link: 'https://www.apv3rse.xyz',
        desc: 'AI-powered Aptos development platform. Build Move smart contracts and Aptos dApps directly from AI prompts. Natural language to production-ready Move code with MCP integration, multi-network deployment, and in-browser IDE. Top 15 Finalist at Aptos Winterschool 2025, IIT Delhi (900+ applicants).',
        logs: [
            '> [LINK] <a href="https://www.apv3rse.xyz" target="_blank" style="color:var(--accent-color);">apv3rse.xyz</a>',
            '> Detecting Aptos query... injecting Move docs context.',
            '> "Create an NFT collection in Move" => Generating contract...',
            '> Compiling Move bytecode... VALID.',
            '> Deploying to Aptos devnet... TX CONFIRMED.',
            'IMPACT: Vibe coding on Aptos. Natural language to on-chain Move contracts.'
        ]
    },
    'ACH-01': {
        title: 'HACKATHONS',
        role: 'PROTOTYPER',
        status: '5X WINNER',
        stack: 'SOLIDITY / RUST / CHAINS',
        link: '#',
        desc: '5x Hackathon Winner recognized natively by major protocols including Aptos, Arbitrum, Avalanche, and Monad for shipping highly optimized, disruptive technical prototypes.',
        logs: [
            '> [LINK] <a href="https://luma.com/ozoqjknu" target="_blank" style="color:var(--accent-color);">Core Nexus (1st Place)</a>',
            '> [LINK] <a href="https://luma.com/T1-Hack25-Kolkata" target="_blank" style="color:var(--accent-color);">Avax Kolkata (1st Runner Up)</a>',
            '> [LINK] <a href="https://luma.com/zzogo8yu" target="_blank" style="color:var(--accent-color);">Monad Delhi V2 (1st Runner Up)</a>',
            '> [LINK] <a href="https://unstop.com/o/Ch1wQ9l" target="_blank" style="color:var(--accent-color);">BrahmaX 1.0 (2nd Runner Up)</a>',
            '> [LINK] <a href="https://luma.com/blitz-delhi-mar-2026" target="_blank" style="color:var(--accent-color);">Monad Blitz V3 (1st Runner Up)</a>',
            'IMPACT: High-speed innovation engine for new chains.'
        ]
    },
    'ACH-02': {
        title: 'BUILDERBASE',
        role: 'FOUNDER',
        status: '3,500+ ALIVE',
        stack: 'COMMUNITY / JS / REACT',
        link: 'https://builderbase.xyz',
        demo_link: 'https://farcaster.xyz/0x9899/0x5719d66d',
        desc: 'Successfully scaled "BuilderBase" from 0 to over 3,500 active members, establishing a developer epicenter. Organized 10+ major technical events and hackathons to empower the Web3 ecosystem.',
        logs: [
            '> Bootstrapping genesis node...',
            '> Ping network nodes... 3,500+ ALIVE.',
            '> Hosting 10+ major protocol events.',
            'IMPACT: Core talent incubator for emerging chains.'
        ]
    },
    'ACH-03': {
        title: 'FOSS',
        role: 'CONTRIBUTOR',
        status: 'ONGOING',
        stack: 'PYTHON / RUST / GO',
        link: 'https://github.com/ShahiTechnovation',
        desc: 'Maintains 10+ public repositories with over 50 meaningful PR contributions on GitHub, heavily pushing the boundaries of Web3 compilation tools.',
        logs: [
            '> [LINK] <a href="https://github.com/ShahiTechnovation/stylus-sdk-rs" target="_blank" style="color:var(--accent-color);">Stylus SDK (Contributor Fork)</a>',
            '> [LINK] <a href="https://github.com/ShahiTechnovation/Hacker" target="_blank" style="color:var(--accent-color);">Hacker Layout (Terminal UI)</a>',
            '> [LINK] <a href="https://github.com/ShahiTechnovation/tictactoe" target="_blank" style="color:var(--accent-color);">Tic-Tac-Toe (Shell)</a>',
            '> [LINK] <a href="https://github.com/ShahiTechnovation/Creatir-09" target="_blank" style="color:var(--accent-color);">Creatir-09 Artifact</a>',
            '> git commit -m "Optimize EVM routing and compiler logic"',
            '> Pushing to remote... MERGED.',
            'IMPACT: Strengthened bedrock of Web3 dev tools.'
        ]
    },
    'LUX': {
        title: 'LUX',
        role: 'ARCHITECT',
        status: 'GHOST_IN_THE_MACHINE',
        stack: 'UI / UX / DESIGN',
        link: 'https://instagram.com/luxw.tf',
        desc: 'This digital primitive dossier was conceptualized, orchestrated, and designed by Lux.',
        logs: [
            '> ping instagram.com/luxw.tf',
            '> tracing aesthetic routing protocol...',
            '> CONNECTED: <strong style="color:var(--accent-color);">@luxw.tf</strong>',
            'IMPACT: Brutalist structural integrity.'
        ]
    }
};

function getProjectTemplate(id, data) {
    return `
    <header class="dossier-header animate-up delay-1 in-view">
      <div class="d-row topo-row">
        <span>AUTHORISATION: BUILDERBASE_3500</span>
        <span>ROLE: ${data.role}</span>
        <span>STATUS: ${data.status}</span>
        <span class="click-btn" id="go-back" style="color:var(--accent-color); cursor:pointer;">[←] RETURN</span>
      </div>
      <div class="d-row title-row">
        <span>PROJECT DOSSIER // CONFIDENTIAL</span>
        <span class="live-time" id="timestamp"></span>
      </div>
      <h1 class="massive-text" style="color: var(--accent-color);">${data.title}</h1>
      <div class="d-row under-title-row">
        <div class="sect leader">
          <span class="label">CORE TECH</span>
          <span>${data.stack}</span>
        </div>
        <div class="sect click-btn" id="cmd-trigger">
          <span class="label">SYSTEM PROMPT</span>
          <span>PRESS [CTRL+K] TO EXECUTE</span>
        </div>
      </div>
    </header>

    <div class="main-grid">
      <aside class="parameters-col animate-up delay-2 in-view">
        <h3 class="col-title">PROJECT METRICS</h3>
        <div class="param-box"><span class="param-label">ENVIRONMENT</span><span class="param-val">${data.stack.split('/')[2] || 'MULTICHAIN'}</span></div>
        <div class="param-box"><span class="param-label">STATUS</span><span class="param-val">${data.status}</span></div>

        <h3 class="col-title" style="margin-top: 1.5rem;">ACCESS PROTOCOL</h3>
        ${data.link && data.link !== '#' ? `<div class="param-box interactive-pill click-btn" onclick="window.open('${data.link}', '_blank')">
             <span class="param-label"><span style="font-size:0.85rem;margin-right:4px;">⎇</span> REPOSITORY</span><span class="param-val">SOURCE CODE</span>
        </div>` : ''}
        ${data.site_link ? `<div class="param-box interactive-pill click-btn" onclick="window.open('${data.site_link}', '_blank')">
             <span class="param-label"><span style="font-size:0.85rem;margin-right:4px;">↗</span> LIVE DEPLOY</span><span class="param-val">APP / SITE</span>
        </div>` : ''}
        ${data.demo_link ? `<div class="param-box interactive-pill click-btn" onclick="window.open('${data.demo_link}', '_blank')">
             <span class="param-label"><span style="font-size:0.85rem;margin-right:4px;">↳</span> REFERENCE</span><span class="param-val">VIEW LOG</span>
        </div>` : ''}
        

      </aside>

      <main class="content-col">
        <section class="dossier-section animate-up delay-3 in-view">
          <h2 class="sect-heading">EXECUTION_LOG</h2>
          <div style="font-size: 1.5rem; margin-bottom: 2rem; font-weight:700;">${data.desc}</div>
          
          <div class="expander-inner" style="border-left: 4px solid var(--accent-color); padding-left: 2rem; font-size: 1.2rem;">
             ${data.logs.map(l => `<p class="mock-term" style="margin-bottom:0.75rem;">${l.startsWith('>') ? `> <code style="background:var(--text-color);color:var(--bg-color);padding:0.2rem 0.5rem;">${l.replace('> ', '')}</code>` : `<strong class="metric" style="border: 1px dashed var(--accent-color); padding:0.5rem;display:inline-block;margin-top:1rem;">${l}</strong>`}</p>`).join('')}
          </div>
        </section>
      </main>
    </div>
    
    <footer class="footer-marquee">
      <div class="marquee-content">
        <span>PROJECT: ${data.title} // ROLE: ${data.role} // ENV: ${data.stack} /// PROJECT: ${data.title} // ROLE: ${data.role} // ENV: ${data.stack} /// </span>
      </div>
    </footer>
    `;
}

// ----------------------------------------------------
// DYNAMIC NAVIGATION
// ----------------------------------------------------
const overlay = document.getElementById('maximize-overlay');

function navToProject(id, element) {
    if (element) {
        const rect = element.getBoundingClientRect();
        overlay.style.transition = 'none';
        overlay.style.left = rect.left + 'px';
        overlay.style.top = rect.top + 'px';
        overlay.style.width = rect.width + 'px';
        overlay.style.height = rect.height + 'px';
    }

    // trigger animation
    setTimeout(() => {
        overlay.style.transition = 'all 0.4s cubic-bezier(0.85, 0, 0.15, 1)';
        overlay.classList.add('animating');
    }, 10);

    setTimeout(() => {
        window.history.pushState({}, '', '?project=' + id);
        renderPage();
        window.scrollTo(0, 0);
        setTimeout(() => {
            overlay.classList.remove('animating');
        }, 200);
    }, 500);
}

function navHome() {
    overlay.style.transition = 'none';
    overlay.style.left = '50vw';
    overlay.style.top = '50vh';
    overlay.style.width = '0px';
    overlay.style.height = '0px';

    setTimeout(() => {
        overlay.style.transition = 'all 0.4s cubic-bezier(0.85, 0, 0.15, 1)';
        overlay.classList.add('animating');
    }, 10);

    setTimeout(() => {
        window.history.pushState({}, '', window.location.pathname);
        renderPage();
        window.scrollTo(0, 0);
        setTimeout(() => {
            overlay.classList.remove('animating');
        }, 200);
    }, 500);
}

function attachMainInteractions() {
    // Interactive Filtering
    const filters = document.querySelectorAll('.interactive-pill[data-filter]');
    const projects = document.querySelectorAll('.project-item');

    filters.forEach(filter => {
        filter.addEventListener('mouseenter', () => {
            const tech = filter.getAttribute('data-filter');
            projects.forEach(p => {
                const stack = p.getAttribute('data-stacks') || "";
                if (!stack.includes(tech)) {
                    p.classList.add('dimmed');
                } else {
                    p.classList.remove('dimmed');
                }
            });
        });
        filter.addEventListener('mouseleave', () => {
            projects.forEach(p => p.classList.remove('dimmed'));
        });
    });

    // Project Navigation Click
    projects.forEach(proj => {
        proj.addEventListener('click', () => {
            const id = proj.querySelector('.proj-id').textContent.trim();
            if (projectData[id]) {
                navToProject(id, proj);
            }
        });
    });
}

function reattachObserver() {
    const targets = document.querySelectorAll('.scroll-target, .main-grid > main > section > article');
    targets.forEach(t => t.classList.add('animate-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0 });

    document.querySelectorAll('.animate-up, .scroll-target').forEach(el => observer.observe(el));

    // Bind all interactive pills for cursor
    document.querySelectorAll('a, button, .click-btn, .interactive-pill, #cmd-results li').forEach(el => {
        el.addEventListener('mouseenter', () => document.querySelector('.cursor').classList.add('active'));
        el.addEventListener('mouseleave', () => document.querySelector('.cursor').classList.remove('active'));
    });
}

function renderPage() {
    const wrapper = document.querySelector('.page-wrapper');
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    if (projectId && projectData[projectId]) {
        wrapper.innerHTML = getProjectTemplate(projectId, projectData[projectId]);
        const backBtn = document.getElementById('go-back');
        if (backBtn) backBtn.addEventListener('click', navHome);
    } else {
        wrapper.innerHTML = mainDossierHTML;
        attachMainInteractions();
    }

    reattachObserver();
    if (document.getElementById('cmd-trigger')) {
        document.getElementById('cmd-trigger').addEventListener('click', () => toggleCmd(true));
    }
}

// ----------------------------------------------------
// GLOBAL EFFECTS
// ----------------------------------------------------
const cmdPalette = document.getElementById('cmd-palette');
const cmdInput = document.getElementById('cmd-input');
const toggleCmd = (forceShow) => {
    if (forceShow === true || cmdPalette.classList.contains('hidden')) {
        cmdPalette.classList.remove('hidden');
        cmdInput.value = '';
        setTimeout(() => cmdInput.focus(), 50);
    } else {
        cmdPalette.classList.add('hidden');
        cmdInput.blur();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Cache original HTML
    mainDossierHTML = document.querySelector('.page-wrapper').innerHTML;

    // Initial Render
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('project')) {
        renderPage();
    } else {
        attachMainInteractions();
        reattachObserver();
    }

    // SYSTEM BOOT NARRATIVE
    const bootSeq = document.getElementById('boot-sequence');
    const logsContainer = document.querySelector('.boot-logs');
    const logs = [
        "BOOTING SECURE TERMINAL v9.0.1...",
        "ESTABLISHING HANDSHAKE...",
        "AUTHORIZING BUILDERBASE NODE...",
        "ACCESS GRANTED.",
        "INITIALIZING GUI..."
    ];
    let logIndex = 0;
    const printBootLog = () => {
        if (logIndex < logs.length) {
            const el = document.createElement('div');
            el.textContent = `> ${logs[logIndex]}`;
            logsContainer.appendChild(el);
            logIndex++;
            setTimeout(printBootLog, 100 + Math.random() * 150);
        } else {
            setTimeout(() => { bootSeq.classList.add('done'); }, 200);
        }
    };
    printBootLog();

    // CUSTOM CURSOR
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // SCROLL PARALLAX
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--scroll-y', window.scrollY);
                ticking = false;
            });
            ticking = true;
        }
    });

    setInterval(() => {
        const timeEls = document.querySelectorAll('.live-time');
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const millis = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        timeEls.forEach(el => el.textContent = `T: ${hrs}:${mins}:${secs}:${millis} UTC`);
    }, 50);

    // COMMAND PALETTE
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleCmd();
        }
        if (e.key === 'Escape' && !cmdPalette.classList.contains('hidden')) {
            toggleCmd(false);
        }
    });
    document.querySelector('.cmd-overlay').addEventListener('click', () => toggleCmd(false));

    const executePaletteCmd = (liElement) => {
        if (liElement.getAttribute('data-nav')) {
            navToProject(liElement.getAttribute('data-nav'), document.getElementById('timestamp'));
        } else if (liElement.getAttribute('data-invert')) {
            document.body.classList.toggle('dark-mode');
        } else if (liElement.getAttribute('data-link')) {
            window.open(liElement.getAttribute('data-link'), '_blank');
        }
        toggleCmd(false);
    };

    cmdInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();

        // Native Easter Egg
        if (val === 'lux') {
            navToProject('LUX', document.getElementById('timestamp'));
            toggleCmd(false);
            return;
        }

        const items = Array.from(document.querySelectorAll('#cmd-results li'));
        let visibleItems = [];

        items.forEach(li => {
            if (li.textContent.toLowerCase().includes(val)) {
                li.style.display = 'block';
                visibleItems.push(li);
            } else {
                li.style.display = 'none';
            }
        });

        // Auto execute if it perfectly resolves to exactly one match
        if (visibleItems.length === 1 && val.length > 0) {
            executePaletteCmd(visibleItems[0]);
        }
    });

    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const items = Array.from(document.querySelectorAll('#cmd-results li')).filter(li => li.style.display !== 'none');
            if (items.length > 0) {
                executePaletteCmd(items[0]);
            }
        }
    });

    document.querySelectorAll('#cmd-results li').forEach(li => {
        li.addEventListener('click', () => {
            executePaletteCmd(li);
        });
    });

    // Handle back button for browser history
    window.addEventListener('popstate', () => {
        renderPage();
    });

    // EASTER EGG SEQUENCE
    let konamiCode = ['l', 'u', 'x'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key.toLowerCase() === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Trigger easter egg
                const triggerPoint = document.getElementById('timestamp') || document.body;
                navToProject('LUX', triggerPoint);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    console.log('[SYSTEM] ALL PROTOCOLS SUCCESSFUL');
});
