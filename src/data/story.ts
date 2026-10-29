export interface StoryMilestone {
  year: string;
  quarter?: string;
  title: string;
  category: 'Engineering' | 'Founder' | 'Hackathon' | 'Ecosystem';
  description: string;
  impact: string;
}

export const storyData = {
  name: 'Punit Pal',
  identity: 'Technical Founder // Systems & Web3 Developer // Ecosystem Strategist',
  tagline: 'Building compilers, orchestrating agents, scaling developer communities.',
  narrativeSections: [
    {
      title: '01 // The Origin: From Curiosity to Compilers',
      subtitle: 'Understanding the machine from the ground up',
      content: `I started building because I was dissatisfied with treating computer systems as black boxes. When I first encountered smart contract development, I noticed a striking barrier: millions of capable Python and systems programmers were completely locked out of Web3 because the tooling demanded mastery of esoteric domain-specific languages and fragmented CLI workflows.

Rather than accepting the ecosystem status quo, I became fascinated by how languages are born. I dove deep into Abstract Syntax Trees (ASTs), intermediate representations, opcode emission, and virtual machine memory layouts. This obsession led to PyVax—a compiler that translates Python into EVM bytecode for the Avalanche C-Chain. Building a compiler from scratch taught me that developer tools are the highest-leverage software in the world: when you build a tool that saves one hour for a thousand engineers, you inject half a work-year of human creativity back into the industry.`
    },
    {
      title: '02 // The Crucible of Hackathons',
      subtitle: 'Shipping working prototypes under 48 hours of intense pressure',
      content: `Hackathons were never about vanity badges for me; they were an engineering crucible. When you have exactly 48 hours to conceive an architecture, write memory-safe code, deploy to a live testnet, and pitch to protocol core developers, there is zero room for fluff.

In that pressure cooker, I tested myself against the toughest problems:
- Core Nexus (Arbitrum): Building Sol2Rust, transpiling Solidity into high-performance Rust for Arbitrum Stylus WASM, earning 1st Place.
- AVAX Kolkata: Lowering Python syntax into EVM opcodes with PyVax, earning 1st Runner-Up.
- Monad Blitz V3: Visualizing 43 autonomous protocol agents interacting on high-throughput Monad EVM with FlowMon, earning 1st Runner-Up.
- BrahmaX 1.0: Developing adaptive neural network biometrics with NeuroFit, earning 2nd Runner-Up.

Across 5 podium finishes and multiple top-15 national recognitions, I learned the invaluable discipline of ruthless prioritization, clean system boundaries, and presenting complex engineering with absolute clarity.`
    },
    {
      title: '03 // The Distribution Realization',
      subtitle: 'Code without distribution is an echo chamber',
      content: `As my technical projects matured, I observed an uncomfortable reality across the technology industry: brilliant engineers often build revolutionary protocols in complete isolation, while low-signal projects with aggressive distribution win all the mindshare. Code without distribution is an echo chamber. Community without engineering is empty noise.

I founded Builder Base to permanently bridge this gap. What started as small, passionate technical gatherings in regional cities quickly expanded into a nationwide distribution engine for ambitious builders. Today, Builder Base connects over 64,000 event attendees and 70,000 newsletter subscribers with protocol foundations like Arbitrum, Avalanche, Monad, and Aptos.

Leading Builder Base taught me that authentic Developer Relations is not marketing—it is technical empathy. When you sit down with developers, debug their broken RPC nodes, write clear documentation, and hand them real bounties, you build loyalty that no paid ad campaign can buy.`
    },
    {
      title: '04 // The Frontier: AI Agents, Compilers & GTM',
      subtitle: 'Where software meets autonomous intelligence and ecosystem growth',
      content: `Today, I operate deliberately at the intersection of three converging disciplines:
1. Systems Engineering: Compilers (PyVax, Sol2Rust), transaction simulation infra (RustAG), and high-throughput execution on Monad and Arbitrum Stylus.
2. AI Agent Infrastructure: Multi-agent message protocols (FlowMon), on-chain credit systems (Bloopa), and biomedical GraphRAG (RxGR).
3. Ecosystem GTM & DevRel: Designing distribution architectures that turn protocol whitepapers into thousands of deployed dApps.

I believe the next decade of technology belongs to technical founders who can both build the compiler and rally the developer army that uses it. That is what I do every single day.`
    }
  ],
  education: {
    institution: 'RGPV University (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
    degree: 'Bachelor of Technology (BTech) in Computer Science Engineering',
    specialization: 'Artificial Intelligence & Data Science',
    timeline: '2024 – 2028',
    location: 'Bhopal, Madhya Pradesh, India',
    status: 'In Progress (Active Undergraduate Builder)',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems & Systems Programming',
      'Artificial Intelligence & Machine Learning',
      'Database Management & Graph Systems',
      'Distributed Computing & Cryptography',
      'Compiler Design Foundations'
    ]
  },
  operatingPrinciples: [
    {
      num: '01',
      title: 'Ruthless Code Credibility',
      detail: 'Never make an architectural claim you cannot substantiate with an open source repository, benchmark test, or reproducible demo.'
    },
    {
      num: '02',
      title: 'Developer Empathy Over Hype',
      detail: 'The best DevRel is removing friction from the developer experience—not producing promotional buzzwords.'
    },
    {
      num: '03',
      title: 'Distribution as a First-Class Citizen',
      detail: 'Building great software is only 50% of the battle. Designing the distribution layer to put it in developers’ hands is the other 50%.'
    },
    {
      num: '04',
      title: 'Rapid Iteration Cycles',
      detail: 'Hackathons taught me that speed and rigorous quality are not opposites—clear architectural boundaries enable both.'
    }
  ],
  milestones: [
    {
      year: '2024',
      quarter: 'Q1',
      title: 'First Venture into Smart Contract Tooling',
      category: 'Engineering',
      description: 'Began exploring EVM internals, gas optimizations, and AST parsing; initiated first open source Web3 contributions.',
      impact: 'Built foundational understanding of bytecode lowering and EVM storage slots.'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Genesis of Builder Base',
      category: 'Founder',
      description: 'Founded Builder Base to organize regional developer meetups, hackathons, and technical workshops across central India.',
      impact: 'Bootstrapped first 500 active builder network and onboarded initial protocol sponsors.'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Aptos Winter School Top 15 Finalist',
      category: 'Hackathon',
      description: 'Selected as Top 15 Finalist at IIT Delhi for APV3RSE out of ~900 applicants, presenting AI-driven Move contract development.',
      impact: 'Proved viability of prompt-to-Move code generation with formal compiler checks.'
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Core Nexus 1st Place & Arbitrum Stylus Breakthrough',
      category: 'Hackathon',
      description: 'Won 1st Place Champion at Core Nexus for Sol2Rust, transpiling Solidity into Arbitrum Stylus Rust.',
      impact: 'Demonstrated 40%+ gas improvements on transpiled contracts and gained national recognition.'
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: 'AVAX Kolkata 1st Runner-Up with PyVax',
      category: 'Hackathon',
      description: 'Shipped PyVax Python-to-EVM compiler for Avalanche C-Chain, securing 1st Runner-Up at Team1 Hack25.',
      impact: 'Released open source CLI with over 500+ successful test contract compilations.'
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Monad Delhi V2 1st Runner-Up & Ecosystem Growth',
      category: 'Hackathon',
      description: 'Engineered PyMon for Monad high-throughput EVM; Builder Base expanded to 64K+ event audience on Luma.',
      impact: 'Established Builder Base as a premier distribution channel for emerging L1/L2 networks.'
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'Monad Blitz V3 1st Runner-Up with FlowMon',
      category: 'Hackathon',
      description: 'Architected FlowMon visual multi-agent orchestration, interconnecting 43 protocol agents with Agent Message Protocol.',
      impact: 'Demonstrated complex multi-agent on-chain execution with zero mock responses.'
    },
    {
      year: '2026',
      quarter: 'Q3-Q4',
      title: 'Scaling DevRel & Frontier Agent Infra',
      category: 'Ecosystem',
      description: 'Leading Claude Community technical workshops, launching Hack in Hills 2026, and developing RustAG Solana assurance infra.',
      impact: 'Operating as a full-spectrum technical founder and ecosystem distribution partner.'
    }
  ]
};

