export interface StoryMilestone {
  year: string;
  quarter?: string;
  title: string;
  category: 'Engineering' | 'Founder' | 'Hackathon' | 'Ecosystem';
  description: string;
  impact: string;
}

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
  identity: 'Technical Founder & Systems Developer',
  tagline: 'Building compilers, multi-agent tools, and developer communities.',
  narrativeSections: [
    {
      title: '01 // Origins & Compilers',
      subtitle: 'Understanding the machine from the ground up',
      content: `I started programming because I wanted to understand how systems actually work under the hood. When I began exploring smart contracts, I noticed how much friction developers face: learning unfamiliar domain-specific languages, struggling with cryptic compiler errors, and setting up complex local environments.

That curiosity led me into compiler internals. I started studying Abstract Syntax Trees (ASTs), intermediate representations, opcode emission, and memory layouts. I built PyVax to explore whether developers could write smart contracts in Python and compile directly to EVM bytecode for the Avalanche C-Chain. Working at the compiler level changed how I think about software: building tools for other developers is one of the highest-leverage things an engineer can do.`
    },
    {
      title: '02 // Building Under Constraints',
      subtitle: 'What hackathons taught me about shipping software',
      content: `Hackathons forced me to become a disciplined builder. When you have 48 hours to design a system, write working code, deploy to a network, and explain your technical tradeoffs to core developers, there is no room for filler.

Across competitions, I focused on difficult problems:
- Core Nexus (Arbitrum): Transpiled Solidity into Rust for Arbitrum Stylus WASM with Sol2Rust (1st Place).
- AVAX Kolkata: Lowered Python AST into EVM opcodes with PyVax (1st Runner-Up).
- Monad Blitz V3: Built FlowMon to visually interconnect protocol agents using Agent Message Protocol (1st Runner-Up).
- BrahmaX 1.0: Developed adaptive workout modeling with NeuroFit (2nd Runner-Up).

Shipping under tight deadlines taught me how to define clean system boundaries, prioritize core functionality, and communicate complex technical work clearly.`
    },
    {
      title: '03 // Why Distribution Matters',
      subtitle: 'Connecting engineering with the builders who need it',
      content: `As I spent more time building, I noticed a recurring problem: technology companies and protocol teams often create capable infrastructure, but struggle to reach developers who will actually build with it. At the same time, ambitious developers outside major tech hubs struggle to find mentorship, clear documentation, and real project opportunities.

I founded Builder Base to help bridge that gap. We started by organizing small technical meetups and study groups. Over time, that grew into regular workshops, hackathon programs, a newsletter reaching over 70,000 subscribers, and an event audience of 64,000+ on Luma.

Growing Builder Base taught me that effective Developer Relations is about practical technical empathy: sitting down with builders, walking through code, debugging setup issues, and providing clear documentation and starter templates.`
    },
    {
      title: '04 // What I Am Working On Now',
      subtitle: 'Developer tools, multi-agent workflows, and ecosystem growth',
      content: `Today, I spend my time between engineering and community growth:
1. Systems & Tooling: Working on compilers (PyVax, Sol2Rust), pre-execution simulation infrastructure on Solana (RustAG), and high-throughput execution environments.
2. Agent Infrastructure: Exploring multi-agent messaging (FlowMon), agent micro-lending protocols (Bloopa), and biomedical GraphRAG prototypes (RxGR).
3. Developer Programs: Leading hands-on workshops on Model Context Protocol (MCP) and agent workflows with the Claude developer community, and organizing developer programs through Builder Base across India.`
    }
  ],
  education: {
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    degree: 'Bachelor of Technology (BTech) in Computer Science Engineering',
    specialization: 'Artificial Intelligence & Data Science',
    timeline: '2024 – 2028',
    location: 'Bhopal, Madhya Pradesh, India',
    status: 'In Progress (Undergraduate Builder)',
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
      title: 'Substantiated Code',
      detail: 'Support technical claims with open repositories, test suites, or reproducible setups rather than unchecked assertions.'
    },
    {
      num: '02',
      title: 'Practical Developer Empathy',
      detail: 'The best developer relations work focuses on removing setup friction and providing clear documentation.'
    },
    {
      num: '03',
      title: 'Distribution as a Priority',
      detail: 'Capable software needs clear distribution channels so developers can discover it and start building quickly.'
    },
    {
      num: '04',
      title: 'Iterate Under Real Constraints',
      detail: 'Working under strict constraints encourages modular architecture and focused, prioritized execution.'
    }
  ],
  milestones: [
    {
      year: '2024',
      quarter: 'Q1',
      title: 'Exploration of EVM & Compiler Internals',
      category: 'Engineering',
      description: 'Began exploring EVM bytecode, AST parsing, and systems programming; initiated early open source tooling experiments.',
      impact: 'Built foundational understanding of bytecode lowering and EVM storage mechanics.'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Founding Builder Base',
      category: 'Founder',
      description: 'Started Builder Base to organize regional developer meetups, study sessions, and technical workshops across central India.',
      impact: 'Established the initial developer network and organized hands-on coding sessions.'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Aptos Winter School Top 15 Finalist',
      category: 'Hackathon',
      description: 'Selected as Top 15 Finalist at IIT Delhi for APV3RSE out of ~900 applicants, presenting AI-driven Move contract development.',
      impact: 'Validated in-browser Move contract generation with formal compiler diagnostics.'
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Core Nexus 1st Place Champion',
      category: 'Hackathon',
      description: 'Won 1st Place at Core Nexus for Sol2Rust, transpiling Solidity into Arbitrum Stylus Rust.',
      impact: 'Demonstrated automated transpilation into Arbitrum Stylus WASM with Stylus SDK primitives.'
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: 'AVAX Kolkata 1st Runner-Up with PyVax',
      category: 'Hackathon',
      description: 'Developed PyVax Python-to-EVM compiler for Avalanche C-Chain, securing 1st Runner-Up at Team1 Hack25.',
      impact: 'Released open source CLI compiler for Python smart contract authoring.'
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Monad Delhi V2 1st Runner-Up',
      category: 'Hackathon',
      description: 'Engineered PyMon for Monad high-throughput EVM; expanded Builder Base technical newsletter and events.',
      impact: 'Adapted Python smart contract tooling for Monad execution environment.'
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'Monad Blitz V3 1st Runner-Up with FlowMon',
      category: 'Hackathon',
      description: 'Architected FlowMon visual multi-agent orchestration, connecting protocol agents with Agent Message Protocol.',
      impact: 'Demonstrated live multi-agent execution pipeline across on-chain protocols.'
    },
    {
      year: '2026',
      quarter: 'Active',
      title: 'Developer Workshops & Systems Tooling',
      category: 'Ecosystem',
      description: 'Leading Claude Community technical workshops, coordinating Hack in Hills 2026, and developing Solana tooling.',
      impact: 'Connecting engineering work with developer distribution channels.'
    }
  ]
};

