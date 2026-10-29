export interface Project {
  slug: string;
  id: string;
  title: string;
  headline: string;
  category: 'Compilers & Developer Tools' | 'AI & Agent Infrastructure' | 'Blockchain Infrastructure' | 'Full-Stack Products' | 'Experiments';
  role: string;
  target: string;
  status: string;
  featured: boolean;
  repoUrl: string;
  demoUrl?: string;
  evidenceUrl?: string;
  evidenceLabel?: string;
  award?: string;
  placement?: '1st Place' | '1st Runner-Up' | '2nd Runner-Up' | 'Top 15 Finalist' | 'Active';
  stack: string[];
  summary: string;
  problem: string;
  contribution: string;
  architecture: string;
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  challenges: string[];
  results: string[];
  relatedSlugs: string[];
  verifiedDate: string;
}

export const projects: Project[] = [
  {
    slug: 'pyvax',
    id: 'PRJ-01',
    title: 'PyVax',
    headline: 'Python-to-EVM Compiler & Developer Tooling for Avalanche',
    category: 'Compilers & Developer Tools',
    role: 'Core Compiler Architect & Tooling Author',
    target: 'Avalanche C-Chain',
    status: 'Production Open Source // AVAX Kolkata 1st Runner-Up',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/pyvax-cli',
    demoUrl: 'https://pyvax.xyz',
    evidenceUrl: 'https://luma.com/T1-Hack25-Kolkata',
    evidenceLabel: 'AVAX Kolkata (Team1 Hack25) — 1st Runner-Up',
    award: '1st Runner-Up // AVAX Kolkata',
    placement: '1st Runner-Up',
    stack: ['Python', 'AST Parsing', 'EVM Opcodes', 'Avalanche C-Chain', 'Click CLI', 'Web3.py'],
    summary: 'A Python-to-EVM compiler and developer tooling suite for the Avalanche C-Chain. Enables developers to write smart contracts natively in Python and compile directly to EVM bytecode without Solidity.',
    problem: 'Millions of Python developers are locked out of EVM smart contract development due to Solidity domain complexity, verbose memory management, and fragmented local development toolchains. Existing Python bridges either rely on heavy runtime interpreters or cloud transpilers with zero offline validation.',
    contribution: 'Designed and implemented the core Abstract Syntax Tree (AST) visitor that parses a statically-typed subset of Python into EVM bytecode opcodes. Built the CLI tooling for local simulation, contract ABI generation, gas estimation, and Avalanche C-Chain RPC testnet deployment.',
    architecture: 'PyVax operates in three sequential compiler phases: (1) Python AST extraction and type-inference validation, (2) Intermediate Representation (IR) lowering to an EVM opcode instruction sequence, and (3) Bytecode assembler and ABI metadata generator with automated Avalanche C-Chain deployment bindings.',
    codeSnippet: {
      language: 'python',
      title: 'contracts/token.py -> EVM Bytecode Translation',
      code: `# Python smart contract syntax compiled by PyVax
from pyvax import contract, state, event

@contract
class SimpleVault:
    owner: state[address]
    balance: state[uint256]

    @event
    def Deposit(sender: address, amount: uint256): pass

    def __init__(self):
        self.owner = msg.sender
        self.balance = 0

    def deposit(self) -> None:
        assert msg.value > 0, "Zero deposit"
        self.balance += msg.value
        self.Deposit(msg.sender, msg.value)`
    },
    challenges: [
      'Mapping Python dynamic scoping and variable allocation onto the rigid 256-bit EVM word memory and storage layout.',
      'Constructing efficient jumps and function selector dispatching without exceeding EVM contract code size limits.',
      'Handling custom gas optimization passes to prevent unoptimized AST jumps from draining caller gas.'
    ],
    results: [
      'Awarded 1st Runner-Up at AVAX Kolkata (Team1 Hack25 Hackathon).',
      'Over 500+ successful test contract compilations during live testing.',
      'Zero external Solidity dependency required for end-to-end contract authoring and deployment.'
    ],
    relatedSlugs: ['sol2rust', 'pymon', 'zerothon'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'sol2rust',
    id: 'PRJ-02',
    title: 'Sol2Rust',
    headline: 'Solidity-to-Rust Transpiler for Arbitrum Stylus WASM',
    category: 'Compilers & Developer Tools',
    role: 'Lead Systems Engineer & Transpiler Architect',
    target: 'Arbitrum Stylus',
    status: 'Champion // Core Nexus 1st Place',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/Sol2Rust',
    demoUrl: 'https://sol2rust.vercel.app',
    evidenceUrl: 'https://luma.com/ozoqjknu',
    evidenceLabel: 'Core Nexus (Arbitrum Hackathon) — 1st Place Champion',
    award: '1st Place Champion // Core Nexus',
    placement: '1st Place',
    stack: ['Rust', 'Solidity AST', 'Syn', 'Quote', 'Arbitrum Stylus SDK', 'WASM'],
    summary: 'A transpiler converting Solidity smart contracts to high-performance, memory-safe Rust for Arbitrum Stylus, dramatically lowering the friction of dApp migration into WASM execution environments.',
    problem: 'Arbitrum Stylus allows writing smart contracts in Rust and C++ that compile to WASM, running over 10x faster and cutting gas consumption by 10-100x compared to EVM bytecode. However, rewriting thousands of lines of battle-tested Solidity into Rust Stylus SDK syntax manually is labor-intensive and error-prone.',
    contribution: 'Authored the Solidity grammar parser and Rust code-generation engine using the syn and quote crates. Implemented automated translation of Solidity state variables, functions, modifiers, events, and storage mapping into Stylus Rust macros.',
    architecture: 'Sol2Rust ingests Solidity source, parses the contract into an Abstract Syntax Tree, resolves types (mapping address to stylus_sdk::alloy_primitives::Address, uint256 to U256), translates modifiers into guard clauses, and emits idiomatic Rust code annotated with #[stylus_sdk::prelude::entrypoint] and storage decorators.',
    codeSnippet: {
      language: 'rust',
      title: 'Transpiled Output (Arbitrum Stylus Rust)',
      code: `// Emitted by Sol2Rust transpiler for Arbitrum Stylus
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::{alloy_primitives::{Address, U256}, prelude::*};

sol_storage! {
    #[entrypoint]
    pub struct VaultContract {
        address owner;
        mapping(address => uint256) balances;
    }
}

#[public]
impl VaultContract {
    pub fn get_balance(&self, account: Address) -> U256 {
        self.balances.get(account)
    }
}`
    },
    challenges: [
      'Mapping Solidity fallback/receive functions and payable modifiers into Rust explicit transfer semantics.',
      'Preserving exact arithmetic overflow checks without introducing unnecessary gas overhead in WASM release builds.',
      'Handling nested dynamic arrays and complex mapping references while satisfying Rust borrow checker constraints.'
    ],
    results: [
      'Won 1st Place at Core Nexus (Arbitrum Hackathon) among dozens of participating teams.',
      'Transpiles standard ERC-20 and vault contracts in under 80 milliseconds with valid Stylus ABI export.',
      'Demonstrated 40%+ gas reduction on complex cryptographic verification logic ported from EVM to Stylus.'
    ],
    relatedSlugs: ['pyvax', 'rustag', 'pystylus'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'flowmon',
    id: 'PRJ-03',
    title: 'FlowMon',
    headline: 'Visual Multi-Agent Orchestration for On-Chain Web3 Pipelines',
    category: 'AI & Agent Infrastructure',
    role: 'Lead Systems & Multi-Agent Architect',
    target: 'Monad EVM & Multi-Chain',
    status: '1st Runner-Up // Monad Blitz V3',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/FlowMon',
    demoUrl: 'https://flow-mon.vercel.app',
    evidenceUrl: 'https://luma.com/blitz-delhi-mar-2026',
    evidenceLabel: 'Monad Blitz V3 — 1st Runner-Up',
    award: '1st Runner-Up // Monad Blitz V3',
    placement: '1st Runner-Up',
    stack: ['TypeScript', 'Next.js', 'Agent Message Protocol (AMP)', 'React Flow', 'Monad EVM', 'Chainlink Oracles'],
    summary: 'Visual multi-agent orchestration system for Web3 pipelines. Developers drag 43 protocol agents onto an interactive canvas, wire them together with Agent Message Protocol, and execute live on-chain operations with zero glue code.',
    problem: 'Chaining decentralized finance actions across multiple protocols (oracles, lending vaults, DEX aggregators, cross-chain bridges) requires hundreds of lines of fragile SDK glue code, manual nonce synchronization, and custom error rollback handlers. Autonomous agents lack an interoperable protocol to pass structured transaction data to one another.',
    contribution: 'Architected the Agent Message Protocol (AMP) specification where output envelopes from upstream agents directly satisfy input schema requirements of downstream agents. Built the visual graph canvas, live dependency resolver, and transaction batcher running against Monad testnet.',
    architecture: 'A DAG-based execution pipeline where each agent is an isolated execution worker conforming to a strict input/output interface. When an upstream trigger fires (e.g., Chainlink ETH price deviation), the AMP dispatcher propagates typed state envelopes to intermediate analytical agents (Lido yield monitors) and terminal execution agents (Uniswap router, Base transaction executor).',
    codeSnippet: {
      language: 'typescript',
      title: 'Agent Message Protocol (AMP) Node Execution',
      code: `// FlowMon Agent Message Protocol (AMP) Execution Node
interface AgentMessageEnvelope<T = unknown> {
  sourceAgentId: string;
  timestamp: number;
  payload: T;
  signature: string;
}

export async function executeAgentPipeline(
  nodes: AgentNode[], 
  context: PipelineExecutionContext
): Promise<PipelineResult> {
  const dependencyGraph = resolveAgentDAG(nodes);
  const executionStream = dependencyGraph.streamParallel();

  for await (const stage of executionStream) {
    const envelope = await stage.agent.process(stage.inputs);
    context.broadcastEnvelope(stage.id, envelope);
    if (stage.requiresOnChainVerification) {
      await verifyMonadStateDelta(stage.agent, envelope);
    }
  }
  return context.finalize();
}`
    },
    challenges: [
      'Managing asynchronous state race conditions when multiple parallel agents resolve dependencies at 10,000 TPS speed.',
      'Implementing atomic multi-agent rollbacks if an on-chain execution step reverts midway through the canvas graph.',
      'Connecting 43 distinct protocol adapters (Uniswap, Lido, Aave, Chainlink) with zero mock responses.'
    ],
    results: [
      'Awarded 1st Runner-Up at Monad Blitz V3.',
      'Successfully orchestrated 43 live protocol agents across 23 Web3 protocols.',
      'Demonstrated sub-second pipeline throughput on Monad high-throughput EVM testnet.'
    ],
    relatedSlugs: ['bloopa', 'rxgr', 'apv3rse'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'rustag',
    id: 'PRJ-04',
    title: 'RustAG',
    headline: 'Pre-Execution Assurance Infrastructure for Privileged Solana Operations',
    category: 'Blockchain Infrastructure',
    role: 'Security & Simulation Engineer',
    target: 'Solana',
    status: 'Active Open Source Infrastructure',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/RustAG',
    award: 'Open Source Security Infra',
    placement: 'Active',
    stack: ['Rust', 'Solana Program SDK', 'BPF Loader', 'Transaction Simulation', 'Anchor Framework'],
    summary: 'Pre-execution assurance infrastructure for privileged Solana operations. Simulates transactions deterministically against local account state, verifies authority delegations, audits state deltas, and generates signed execution reports prior to validator broadcast.',
    problem: 'Autonomous agents and automated multisig bots operating on Solana often execute blind instruction payloads where unintended authority delegation or front-running slippage causes irreversible loss of funds. Existing RPC simulateTransaction endpoints do not verify deep invariant constraints or detect privilege escalation.',
    contribution: 'Authored the Rust transaction simulation engine, privilege verification logic, and signed audit report generator. Designed tests simulating hostile state transitions and unauthorized account balance deductions.',
    architecture: 'RustAG sits between client-side transaction builders and Solana RPC nodes. It captures the serialized VersionedTransaction, reconstructs affected account states locally via bank simulation forks, verifies that no unexpected write-locks or account owner transfers occur, and produces an immutable cryptographic execution report.',
    codeSnippet: {
      language: 'rust',
      title: 'RustAG Invariant Guard & Simulation Verifier',
      code: `// Deterministic pre-execution invariant check
pub fn verify_transaction_safety(
    tx: &VersionedTransaction,
    bank_fork: &BankForkState,
) -> Result<ExecutionReport, AssuranceError> {
    let simulation = bank_fork.simulate_transaction(tx)?;
    
    // Invariant 1: Ensure no unauthorized account owner mutation
    for (pubkey, account) in &simulation.state_deltas {
        if account.owner_changed() && !is_whitelisted_governance(pubkey) {
            return Err(AssuranceError::UnauthorizedOwnershipTransfer(*pubkey));
        }
    }
    
    // Invariant 2: Verify lamport balance conservation
    verify_sol_balance_conservation(&simulation)?;
    
    Ok(ExecutionReport::sign(&simulation, &KEYPAIR))
}`
    },
    challenges: [
      'Faithfully recreating Solana BPF instruction limits and compute budget consumption in local simulation.',
      'Accurately tracking dynamic CPI (Cross-Program Invocation) cascades across multiple invoked programs.',
      'Keeping total simulation latency under 25 milliseconds to ensure transactions still hit their slot windows.'
    ],
    results: [
      'Detects 100% of tested unauthorized privilege escalation payloads before submission to validator mempools.',
      'Generates cryptographic execution proofs verifiable by upstream automated multisigs.',
      'Adopted by community builder tooling for automated transaction validation.'
    ],
    relatedSlugs: ['sol2rust', 'flowmon', 'bloopa'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'rxgr',
    id: 'PRJ-05',
    title: 'RxGR',
    headline: 'Drug-Disease GraphRAG System Using Biomedical Knowledge Graphs',
    category: 'AI & Agent Infrastructure',
    role: 'Systems & GraphRAG Architect',
    target: 'Biomedical AI & Research',
    status: 'Research Prototype & Benchmark Evaluation',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/RxGR',
    award: 'Biomedical AI Research Prototype',
    placement: 'Active',
    stack: ['Python', 'Neo4j', 'Knowledge Graphs', 'GraphRAG', 'NetworkX', 'Claude API', 'PubMed API'],
    summary: 'A biomedical GraphRAG system that synergizes knowledge graph entity traversal with LLM retrieval, reasoning across multi-hop drug-disease relationships to identify drug repurposing candidates and reduce clinical hallucinations.',
    problem: 'Standard vector-based RAG architectures perform flat semantic searches across unstructured literature. When tasked with multi-hop biomedical inquiries (e.g. "Identify kinase inhibitors that downregulate Protein X while sparing Pathway Y"), vector search misses relational graph topology and hallucinates molecular mechanisms.',
    contribution: 'Constructed the biomedical knowledge graph extraction pipeline indexing PubMed medical abstracts, disease ontologies, and drug compound databases into Neo4j. Implemented the hybrid retrieval engine combining Cypher graph queries with vector embeddings and Claude 3.5 Sonnet synthesis.',
    architecture: 'RxGR parses user biomedical hypotheses into structured entities and relationships, executes multi-hop subgraph traversals across Neo4j nodes (Drug -> Target -> Biological Process -> Disease), extracts factual path subgraphs, and prompts an LLM with both structured graph paths and contextual literature abstracts.',
    codeSnippet: {
      language: 'python',
      title: 'GraphRAG Multi-Hop Pathway Traversal',
      code: `# Multi-hop biomedical relationship extraction
def query_pathway_candidates(disease_id: str, max_hops: int = 3):
    cypher_query = """
    MATCH path = (d:Disease {id: $disease_id})
          -[:ASSOCIATED_WITH]->(p:Protein)
          <-[:TARGETS]-(dr:Drug)
    WHERE dr.approval_status = 'FDA_APPROVED'
    RETURN dr.name AS drug, p.name AS target, length(path) AS hops,
           relationships(path) AS evidence_edges
    ORDER BY hops ASC
    LIMIT 25
    """
    with graph_db.session() as session:
        subgraph = session.run(cypher_query, disease_id=disease_id).data()
    return synthesize_clinical_reasoning(subgraph)`
    },
    challenges: [
      'Resolving contradictory clinical statements across historical scientific publications into edge weights.',
      'Optimizing multi-hop Cypher queries to execute sub-100ms across 500,000+ biomedical nodes.',
      'Formulating rigorous benchmark evaluation datasets to measure clinical accuracy versus raw vector RAG.'
    ],
    results: [
      'Demonstrated 38% reduction in factual hallucination rates compared to standard vector similarity RAG.',
      'Identified 12 high-confidence off-target drug repurposing candidates verified against clinical literature.',
      'Clean modular architecture ready for open biomedical research collaboration.'
    ],
    relatedSlugs: ['flowmon', 'bloopa', 'with-claude'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'bloopa',
    id: 'PRJ-06',
    title: 'Bloopa',
    headline: 'On-Chain Credit Infrastructure for Autonomous AI Agents',
    category: 'AI & Agent Infrastructure',
    role: 'Protocol Co-Author & Smart Contract Engineer',
    target: 'Algorand & EVM',
    status: 'Top 15 Finalist // Algorand Hack Series 3.0',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/Bloopa',
    award: 'Top 15 Finalist // Algorand Hack Series 3.0',
    placement: 'Top 15 Finalist',
    stack: ['Python', 'PyTeal', 'Algorand Smart Signatures', 'Agent Identity', 'DeFi Credit Scoring'],
    summary: 'On-chain credit scoring and programmable micro-lending infrastructure for autonomous AI agents. Enables algorithmic agents to build verifiable repayment track records, borrow liquidity for transaction fees, and access flash loans.',
    problem: 'Autonomous AI agents executing high-frequency arbitrage, data scraping, or on-chain governance cannot open bank accounts and have no decentralized credit identity. Requiring 100% upfront collateralization strangles autonomous agent utility and limits capital efficiency.',
    contribution: 'Designed the PyTeal smart contracts managing undercollateralized micro-lending pools, dynamic credit scoring based on historic execution profitability, and automated liquidation thresholds.',
    architecture: 'Bloopa issues a cryptographic Agent Credit Profile (ACP) bound to an agent public key. The smart contract measures on-chain operational metrics (successful transaction volume, debt repayment velocity, protocol yield). As score increases, the borrowing limit against pool capital increases dynamically with interest automatically streamed back to liquidity providers.',
    codeSnippet: {
      language: 'python',
      title: 'Bloopa Credit Score & Loan Disbursement (PyTeal)',
      code: `# Algorand PyTeal credit assessment and loan disbursement
@Subroutine(TealType.uint64)
def evaluate_agent_credit(agent_account: Expr) -> Expr:
    repayment_ratio = App.localGet(agent_account, Bytes("repay_ratio"))
    active_defaults = App.localGet(agent_account, Bytes("defaults"))
    volume_tier = App.localGet(agent_account, Bytes("tx_volume_tier"))
    
    return Seq(
        Assert(active_defaults == Int(0)),
        If(repayment_ratio > Int(9500), # > 95%
           Return(volume_tier * Int(1000)),
           Return(Int(0))
        )
    )`
    },
    challenges: [
      'Mitigating sybil attack vectors where agents create disposable keys to borrow and default immediately.',
      'Enforcing deterministic liquidation triggers within Algorand stateless and stateful smart contract constraints.',
      'Balancing high-frequency agent micro-borrowing with fair yields for human liquidity depositors.'
    ],
    results: [
      'Selected as Top 15 Finalist at Algorand Hack Series 3.0.',
      'Implemented fully functional testnet micro-lending pool with programmatic borrow/repay cycles.',
      'Pioneered early foundational architecture for agent-to-agent decentralized finance.'
    ],
    relatedSlugs: ['flowmon', 'rustag', 'apv3rse'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'apv3rse',
    id: 'PRJ-07',
    title: 'APV3RSE',
    headline: 'AI-Assisted Aptos and Move Development Platform',
    category: 'AI & Agent Infrastructure',
    role: 'Lead Full-Stack & AI Systems Developer',
    target: 'Aptos (Move VM)',
    status: 'Top 15 Finalist // Aptos Winterschool IIT Delhi',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/Apv3rse',
    demoUrl: 'https://www.apv3rse.xyz',
    evidenceLabel: 'Aptos Winter School 2025 (IIT Delhi) — Top 15 Finalist (~900 applicants)',
    award: 'Top 15 Finalist // Aptos Winterschool',
    placement: 'Top 15 Finalist',
    stack: ['TypeScript', 'React', 'Move Language', 'Model Context Protocol (MCP)', 'Aptos TS SDK'],
    summary: 'AI-assisted Aptos development platform that turns natural language prompts into production-ready Move smart contracts, featuring MCP context injection, in-browser compilation, and one-click devnet/testnet deployment.',
    problem: 'The Move programming language offers unmatched asset security and resource model protections, but has a steep learning curve. Developers frequently struggle with resource capability management, acquire annotations, and framework module imports.',
    contribution: 'Built the end-to-end platform architecture integrating LLM code generation with Aptos Framework documentation context via Model Context Protocol (MCP). Implemented in-browser Monaco IDE with live syntax diagnostics and direct Aptos wallet transaction signing.',
    architecture: 'APV3RSE connects a client frontend to an intelligent context engine. When a developer prompts "Create an NFT marketplace with 2.5% royalty fees", the context engine retrieves official Aptos Framework move modules, enforces safe resource patterns, generates idiomatic Move code, validates compilation, and prepares deployment payloads.',
    codeSnippet: {
      language: 'rust',
      title: 'Move Module Generated and Validated by APV3RSE',
      code: `// Move smart contract on Aptos generated via APV3RSE
module apv3rse::marketplace {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;

    struct MarketState has key {
        fee_recipient: address,
        fee_basis_points: u64,
    }

    public entry fun initialize(account: &signer, fee_bps: u64) {
        let account_addr = signer::address_of(account);
        assert!(!exists<MarketState>(account_addr), 1);
        move_to(account, MarketState {
            fee_recipient: account_addr,
            fee_basis_points: fee_bps,
        });
    }
}`
    },
    challenges: [
      'Eliminating LLM generation errors related to Move 2024 edition keyword updates and borrow rules.',
      'Compiling and verifying Move packages inside sandbox worker environments before wallet signing.',
      'Achieving smooth interactive latency during multi-turn developer refactor requests.'
    ],
    results: [
      'Recognized as Top 15 Finalist at Aptos Winter School 2025, IIT Delhi, among 900+ national applicants.',
      'Live web application deployed at apv3rse.xyz with hundreds of contract simulations.',
      'Demonstrated 5x acceleration in prototype development for Move ecosystem newcomers.'
    ],
    relatedSlugs: ['pyvax', 'sol2rust', 'with-claude'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'with-claude',
    id: 'PRJ-08',
    title: 'With Claude',
    headline: 'Full-Stack Project Discovery & Community Publishing Platform',
    category: 'Full-Stack Products',
    role: 'Independent Platform Architect & Community Contributor',
    target: 'Web & AI Developer Ecosystem',
    status: 'Live Community Platform',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/with-claude',
    award: 'Independent Community Platform',
    placement: 'Active',
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'Claude API'],
    summary: 'Full-stack discovery and community platform for developers building software with Claude. Features community project submissions, moderation review workflows, verified builder badges, and categorized technical showcases.',
    problem: 'Thousands of high-quality prototypes, tools, and developer experiments built with Anthropic models are scattered across social media and Discord channels without a unified, searchable index or permanent showcase directory.',
    contribution: 'Architected and built the entire full-stack application from scratch: relational database schema, user authentication, submission review pipelines, automated metadata scraping, responsive editorial UI, and community showcase feeds.',
    architecture: 'Next.js App Router application backed by PostgreSQL. Implements server-side rendering for optimal SEO discovery, authenticated project submission workflows with form validation, and automated Claude API calls to summarize and tag submissions by technical domain.',
    codeSnippet: {
      language: 'typescript',
      title: 'Automated Community Submission Tagging & Verification',
      code: `// With Claude Project Ingestion Pipeline
export async function processSubmission(project: SubmissionInput) {
  // 1. Verify source repository accessibility
  const repoData = await fetchGitHubMetadata(project.repoUrl);
  
  // 2. Classify and extract technical categories with Claude API
  const taxonomy = await claudeClient.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: \`Classify this project into tech stacks and architecture tags: \${project.description}\`
    }]
  });
  
  // 3. Persist verified record to PostgreSQL database
  return await db.project.create({
    data: {
      ...project,
      stars: repoData.stargazers_count,
      tags: extractTagsFromResponse(taxonomy),
      status: "APPROVED_FOR_REVIEW"
    }
  });
}`
    },
    challenges: [
      'Establishing spam protection and automated submission quality filters without adding user friction.',
      'Designing an editorial aesthetic that feels authentic to the developer community rather than promotional SaaS.',
      'Ensuring strict independent status disclosure while honoring Anthropic community guidelines.'
    ],
    results: [
      'Built a vibrant repository of developer tools and experiments built with Claude.',
      'Provides a real-world testing ground for Claude Community workshops across India.',
      'Completely open source and modular architecture for ongoing community maintenance.'
    ],
    relatedSlugs: ['flowmon', 'rxgr', 'apv3rse'],
    verifiedDate: 'October 2026'
  },
  // Additional Archive Projects (PRJ-09 to PRJ-18)
  {
    slug: 'pymon',
    id: 'PRJ-09',
    title: 'PyMon',
    headline: 'Python Smart Contracts for Monad High-Throughput EVM',
    category: 'Compilers & Developer Tools',
    role: 'Compiler Engineer',
    target: 'Monad EVM',
    status: '1st Runner-Up // Monad Delhi V2',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    demoUrl: 'https://pokeemon-blond.vercel.app/',
    evidenceUrl: 'https://luma.com/zzogo8yu',
    evidenceLabel: 'Monad Delhi V2 — 1st Runner-Up',
    award: '1st Runner-Up // Monad Delhi V2',
    placement: '1st Runner-Up',
    stack: ['Python', 'EVM Opcodes', 'Monad EVM', 'Web3.py'],
    summary: 'Enables Python developers to author and deploy native smart contracts on Monad 10,000 TPS EVM with automated RPC deployment tooling.',
    problem: 'Extending Python compilation to high-speed asynchronous EVM architectures like Monad.',
    contribution: 'Integrated PyVax core compiler targeting Monad testnet RPC parameters and gas schedules.',
    architecture: 'Python AST lowering directly into Monad EVM compatible opcode binaries.',
    challenges: ['Calibrating transaction nonce management for Monad parallel execution.'],
    results: ['Awarded 1st Runner-Up at Monad Delhi V2 hackathon.'],
    relatedSlugs: ['pyvax', 'flowmon'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'neurofit',
    id: 'PRJ-10',
    title: 'NeuroFit',
    headline: 'Neural Network Adaptive Fitness & Workout Intelligence',
    category: 'Full-Stack Products',
    role: 'Full-Stack & ML Developer',
    target: 'Web & Mobile',
    status: '2nd Runner-Up // BrahmaX 1.0',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/NeuroFit',
    demoUrl: 'https://neurofitt.vercel.app',
    evidenceUrl: 'https://unstop.com/o/Ch1wQ9l',
    evidenceLabel: 'BrahmaX 1.0 — 2nd Runner-Up',
    award: '2nd Runner-Up // BrahmaX 1.0',
    placement: '2nd Runner-Up',
    stack: ['Python', 'Neural Networks', 'React', 'FastAPI'],
    summary: 'AI-driven fitness platform utilizing neural networks to analyze biometric data and dynamically adjust training routines.',
    problem: 'Static workout regimens do not adapt to real-time fatigue or progressive overload variables.',
    contribution: 'Built the predictive workout generation backend and responsive client dashboard.',
    architecture: 'Client telemetry sent to FastAPI inference worker adjusting reps and intensity dynamically.',
    challenges: ['Optimizing neural model weights to run responsive low-latency recommendations.'],
    results: ['2nd Runner-Up at BrahmaX 1.0 Hackathon.'],
    relatedSlugs: ['rxgr'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'x4pn',
    id: 'PRJ-11',
    title: 'X4PN',
    headline: 'Decentralized VPN & Bandwidth Monetization Network',
    category: 'Blockchain Infrastructure',
    role: 'Full-Stack & Protocol Developer',
    target: 'Solana & Web3 Infrastructure',
    status: 'Functional Prototype',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/X4PN-UI',
    demoUrl: 'https://x4pn-vpn.vercel.app/',
    award: 'Decentralized Infra Prototype',
    placement: 'Active',
    stack: ['React', 'Node.js', 'Solana', 'USDC Payments', 'WireGuard'],
    summary: 'A decentralized VPN platform incentivizing bandwidth providers with streaming USDC yields while providing private, censorship-resistant relays for users.',
    problem: 'Centralized VPN services log user metadata and maintain single points of failure.',
    contribution: 'Created the user dashboard, provider node discovery interface, and Solana micro-payment escrow handlers.',
    architecture: 'WireGuard tunnel orchestration paired with Solana program smart contracts handling pay-as-you-go bandwidth metering.',
    challenges: ['Real-time micropayment reconciliation without incurring high transaction fees.'],
    results: ['Live functional UI demo supporting peer connection simulation.'],
    relatedSlugs: ['rustag'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'zerothon',
    id: 'PRJ-12',
    title: 'Zerothon',
    headline: 'In-Browser Python-to-EVM IDE Across 500+ Chains',
    category: 'Compilers & Developer Tools',
    role: 'Lead Developer',
    target: 'Multi-EVM',
    status: 'Live IDE Platform',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/zerothon',
    demoUrl: 'https://zerothon.vercel.app',
    award: 'Multi-EVM Developer Tool',
    placement: 'Active',
    stack: ['Python', 'WebAssembly', 'Monaco Editor', 'Chainlist RPC'],
    summary: 'Zero-install Python-to-EVM playground allowing developers to code, compile, and deploy Python smart contracts directly in the browser across 500+ chains.',
    problem: 'Configuring Python compilation environments, RPC endpoints, and private key security is cumbersome for beginners.',
    contribution: 'Ported PyVax compiler logic to WebAssembly, built the browser Monaco code editor, and integrated Chainlist RPC lookup.',
    architecture: 'Browser client compiling Python to EVM bytecode entirely client-side using WASM with zero server dependency.',
    challenges: ['Running full Python AST parsing inside browser WebAssembly sandbox.'],
    results: ['Zero-install developer playground live at zerothon.vercel.app.'],
    relatedSlugs: ['pyvax', 'apv3rse'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'builderbase-v2',
    id: 'PRJ-13',
    title: 'Builder Base V2',
    headline: 'Next-Gen Distribution Platform for Web3 Developers',
    category: 'Full-Stack Products',
    role: 'Founder & Full-Stack Architect',
    target: 'Web3 & AI Ecosystem',
    status: 'Production Community Hub',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    demoUrl: 'https://www.builderbase.xyz',
    award: 'Community Distribution Engine',
    placement: 'Active',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    summary: 'The central digital platform for Builder Base, coordinating developer hackathon registrations, bounty distributions, and technical workshops.',
    problem: 'Traditional developer communities rely on fragmented Discord channels and unindexed spreadsheets to track builder progress.',
    contribution: 'Architected the community directory, event RSVP tracker, and partner onboarding workflows.',
    architecture: 'High-performance SSR application integrated with Luma webhooks and newsletter distribution APIs.',
    challenges: ['Handling massive traffic spikes during nationwide hackathon launch windows.'],
    results: ['Serves community across 64K+ event audience and 70K+ newsletter subscribers.'],
    relatedSlugs: ['with-claude'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'pystylus',
    id: 'PRJ-14',
    title: 'PyStylus',
    headline: 'Python to Arbitrum Stylus WASM Experimental Compiler',
    category: 'Experiments',
    role: 'Systems Experimenter',
    target: 'Arbitrum Stylus',
    status: 'Experimental Prototype',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    award: 'Stylus Ecosystem Experiment',
    placement: 'Active',
    stack: ['Python', 'Rust', 'WASM', 'Arbitrum Stylus'],
    summary: 'Experimental toolchain compiling Python contracts into intermediate Rust Stylus representations for direct WASM generation.',
    problem: 'Exploring whether Python syntax can leverage Arbitrum Stylus 10x gas improvements without manual Rust rewriting.',
    contribution: 'Synthesized lessons from PyVax and Sol2Rust into an experimental pipeline.',
    architecture: 'Two-stage lowering: Python -> Intermediate AST -> Stylus Rust -> WASM.',
    challenges: ['Reconciling Python memory model with Stylus zero-copy storage requirements.'],
    results: ['Validated core concept for simple token and vault contracts.'],
    relatedSlugs: ['pyvax', 'sol2rust'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'solmeet',
    id: 'PRJ-15',
    title: 'SolMeet',
    headline: 'Decentralized Proof-of-Attendance & Verification System',
    category: 'Experiments',
    role: 'Solidity Developer',
    target: 'Ethereum & Layer 2s',
    status: 'Experimental Prototype',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    award: 'Hackathon Tooling Experiment',
    placement: 'Active',
    stack: ['Solidity', 'React', 'Ethers.js'],
    summary: 'Decentralized event attendance verification protocol issuing soulbound attendance badges.',
    problem: 'Verifying real physical developer participation at technical workshops and hackathons.',
    contribution: 'Wrote ERC-5192 compliant soulbound token contracts with gas-efficient batch minting.',
    architecture: 'QR signature exchange verified against on-chain whitelist contracts.',
    challenges: ['Preventing attendance ticket transfers while allowing multi-device verification.'],
    results: ['Used to verify pilot participant cohorts during local hackathons.'],
    relatedSlugs: ['cpop'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'cpop',
    id: 'PRJ-16',
    title: 'cPOP',
    headline: 'Community Proof of Participation Protocol',
    category: 'Blockchain Infrastructure',
    role: 'Protocol Author',
    target: 'EVM Chains',
    status: 'Open Protocol Draft',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    award: 'Protocol Design Draft',
    placement: 'Active',
    stack: ['Solidity', 'ERC-721', 'Merkle Trees', 'Node.js'],
    summary: 'Cryptographic proof-of-participation protocol using Merkle trees to enable gasless claim of developer workshop credentials.',
    problem: 'High gas fees prevent organizers from issuing participation NFTs to thousands of students.',
    contribution: 'Authored Merkle distributor contracts and offline proof generation scripts.',
    architecture: 'Off-chain attendance tree generated post-event; attendees claim tokens using minimal calldata proofs.',
    challenges: ['Ensuring proof generation remains deterministic across distributed event checkpoints.'],
    results: ['Demonstrated 95% reduction in issuer gas costs for large-scale cohorts.'],
    relatedSlugs: ['solmeet'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'chainlink-cre',
    id: 'PRJ-17',
    title: 'Chainlink CRE',
    headline: 'Chainlink Runtime Environment Execution Harness',
    category: 'Experiments',
    role: 'DeFi Researcher',
    target: 'Chainlink & EVM',
    status: 'Research Experiment',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    award: 'Oracle Research Harness',
    placement: 'Active',
    stack: ['Solidity', 'Chainlink Functions', 'JavaScript', 'Hardhat'],
    summary: 'Explorations in Chainlink Runtime Environment (CRE) for off-chain verifiable compute and cross-chain data synchronization.',
    problem: 'Securely executing off-chain computations and relaying proofs back to smart contracts.',
    contribution: 'Constructed custom Chainlink Functions scripts for verifiable API ingestion.',
    architecture: 'Decentralized Oracle Network (DON) consensus feeding validated outputs into EVM consumer contracts.',
    challenges: ['Operating within strict Chainlink Functions execution time limits.'],
    results: ['Functional proof-of-concept feeding external API computations into smart contracts.'],
    relatedSlugs: ['flowmon'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'x402',
    id: 'PRJ-18',
    title: 'X402',
    headline: 'Agent-to-Agent HTTP 402 Payment Simulation Protocol',
    category: 'Experiments',
    role: 'Protocol Engineer',
    target: 'Solana & Web Standards',
    status: 'Research Protocol',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation',
    award: 'Web Standards Experiment',
    placement: 'Active',
    stack: ['Rust', 'HTTP 402 Standards', 'Solana Pay', 'TypeScript'],
    summary: 'Reviving the HTTP 402 Payment Required standard for autonomous AI agents paying per API call using high-speed micro-transactions.',
    problem: 'AI agents making machine-to-machine API queries cannot complete credit card checkouts.',
    contribution: 'Designed HTTP 402 middleware requesting Solana Pay payment requests before unlocking endpoint responses.',
    architecture: 'API gateway intercepting requests, returning HTTP 402 with transaction payload, unlocking stream upon on-chain confirmation.',
    challenges: ['Achieving sub-second confirmation so streaming LLM calls remain uninterrupted.'],
    results: ['Demonstrated automated agent-to-agent micro-billing simulation.'],
    relatedSlugs: ['bloopa', 'flowmon'],
    verifiedDate: 'October 2026'
  }
];

export const projectCategories = [
  'All',
  'Compilers & Developer Tools',
  'AI & Agent Infrastructure',
  'Blockchain Infrastructure',
  'Full-Stack Products',
  'Experiments'
] as const;

