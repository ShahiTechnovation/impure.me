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
  unavailableDemoUrl?: string;
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
    unavailableDemoUrl: 'https://pyvax.xyz',
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
      'Successfully lowers Python syntax to EVM bytecode for Avalanche C-Chain testnet deployment.',
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
    summary: 'Visual multi-agent orchestration system for Web3 pipelines. Developers drag protocol agents onto an interactive canvas, wire them together with Agent Message Protocol, and execute live on-chain operations with zero glue code.',
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
      'Managing asynchronous state when parallel agents resolve workflow dependencies.',
      'Implementing atomic multi-agent rollbacks if an on-chain execution step reverts midway through the canvas graph.',
      'Distinguishing implemented protocol adapters from placeholder integrations in the agent catalog.'
    ],
    results: [
      'Awarded 1st Runner-Up at Monad Blitz V3.',
      'Built a visual workflow editor with a protocol-agent catalog and demo pipelines; integration completeness varies by agent.',
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
    stack: ['Rust', 'Solana Program SDK', 'Transaction Simulation', 'Anchor Framework'],
    summary: 'Pre-execution assurance infrastructure for privileged Solana operations. Simulates transactions locally against bank state forks, verifies authority delegations, audits state deltas, and generates signed execution reports prior to validator broadcast.',
    problem: 'Autonomous agents and automated multisig bots operating on Solana often execute instruction payloads where unintended authority delegation or front-running slippage causes irreversible loss of funds. Existing RPC simulateTransaction endpoints do not verify deep invariant constraints or detect privilege escalation.',
    contribution: 'Authored the Rust transaction simulation engine, privilege verification logic, and signed audit report generator. Implemented test suites evaluating state transitions and unauthorized account balance deductions.',
    architecture: 'RustAG sits between client-side transaction builders and Solana RPC nodes. It captures the serialized VersionedTransaction, reconstructs affected account states locally via bank simulation forks, verifies that no unexpected write-locks or account owner transfers occur, and produces a cryptographic execution report.',
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
      'Recreating Solana instruction limits and compute budget consumption in local simulation forks.',
      'Tracking dynamic Cross-Program Invocation (CPI) cascades across multiple invoked programs.',
      'Maintaining low simulation latency to prevent transactions from missing target slot windows.'
    ],
    results: [
      'Verified local invariant checks for account ownership and balance conservation in test suites.',
      'Emits cryptographic execution reports verifiable by automated workflows.',
      'Open-source pre-execution harness for Solana developer tooling.'
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
    status: 'Research Prototype',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/RxGR',
    award: 'Biomedical AI Research Prototype',
    placement: 'Active',
    stack: ['Python', 'Neo4j', 'Knowledge Graphs', 'GraphRAG', 'NetworkX', 'Claude API', 'PubMed API'],
    summary: 'A biomedical GraphRAG prototype combining knowledge graph entity traversal with language model retrieval, reasoning across multi-hop drug-disease relationships to explore drug repurposing candidates.',
    problem: 'Standard vector-based RAG architectures perform flat semantic searches across unstructured literature. When tasked with multi-hop biomedical inquiries, vector search often misses relational graph topology and can generate inaccurate molecular mechanism associations.',
    contribution: 'Constructed the biomedical knowledge graph extraction pipeline indexing disease ontologies, PubMed citations, and drug compound databases into Neo4j. Implemented hybrid retrieval combining Cypher graph queries with language model synthesis via Claude 3.5 Sonnet.',
    architecture: 'RxGR parses biomedical queries into structured entities, executes multi-hop subgraph traversals across Neo4j nodes (Drug -> Target -> Biological Process -> Disease), extracts path subgraphs, and provides both structured graph paths and literature context to an LLM for structured reasoning.',
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
      'Representing contradictory clinical statements across historical publications into weighted graph edges.',
      'Optimizing multi-hop Cypher queries across dense biomedical relationship graphs.',
      'Designing structured prompts that ground model synthesis in extracted graph topology.'
    ],
    results: [
      'Prototype demonstrator for multi-hop graph retrieval paired with LLM reasoning.',
      'Exploratory toolchain identifying candidate pathways for drug repurposing hypotheses.',
      'Open-source research prototype designed for biomedical knowledge exploration.'
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
    unavailableDemoUrl: 'https://www.apv3rse.xyz',
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
    role: 'Platform Architect & Full-Stack Developer',
    target: 'Claude Developer Community',
    status: 'Live Community Platform',
    featured: true,
    repoUrl: 'https://github.com/ShahiTechnovation/with-claude',
    award: 'Independent Community Platform',
    placement: 'Active',
    stack: ['Astro', 'React', 'TypeScript', 'Neon PostgreSQL', 'Drizzle ORM', 'Privy', 'Vercel Blob', 'Resend'],
    summary: 'Full-stack discovery and community showcase platform for developers building software with Claude. Features community project submissions, moderation review workflows, verified builder badges, and categorized technical showcases.',
    problem: 'Developer prototypes, tools, and experiments built with Claude models are frequently scattered across social channels and forums without a unified index, persistent showcase directory, or structured taxonomy.',
    contribution: 'Architected and built the full-stack platform using Astro with React islands for dynamic interactions. Structured the database schema using Drizzle ORM backed by Neon serverless PostgreSQL, with Privy authentication, Vercel Blob asset storage, and Resend for transactional notification workflows.',
    architecture: 'Astro renders static pages alongside server-rendered routes for live data. A React island supplies Privy authentication. Drizzle ORM and Neon PostgreSQL store project metadata, Vercel Blob stores uploads, and Resend handles notification workflows.',
    codeSnippet: {
      language: 'typescript',
      title: 'schema/projects.ts — Drizzle ORM Schema & Type Definition (Illustrative)',
      code: `// With Claude Project Schema Definition (Drizzle ORM + Neon PostgreSQL)
import { pgTable, text, timestamp, varchar, integer } from 'drizzle-orm/pg-core';

export const projects = pgTable('community_projects', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: varchar('title', { length: 120 }).notNull(),
  headline: text('headline').notNull(),
  description: text('description').notNull(),
  repoUrl: text('repo_url').notNull(),
  demoUrl: text('demo_url'),
  authorId: text('author_id').notNull(),
  authorHandle: varchar('author_handle', { length: 64 }).notNull(),
  category: varchar('category', { length: 64 }).notNull(),
  status: varchar('status', { length: 32 }).default('PENDING_REVIEW').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export type ProjectRecord = typeof projects.$inferSelect;
export type NewProjectInput = typeof projects.$inferInsert;`
    },
    challenges: [
      'Balancing instant static rendering performance with dynamic client-side authentication and project submissions.',
      'Maintaining clean community submission review workflows and spam prevention without unnecessary user friction.',
      'Ensuring clear independent community status while maintaining high architectural standards.'
    ],
    results: [
      'Live community platform indexing developer prototypes and tools built with Claude.',
      'Open-source reference architecture pairing Astro, React islands, Drizzle ORM, and Neon PostgreSQL.',
      'Active resource for developer workshops and community cohorts across India.'
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
    summary: 'Enables Python developers to author and deploy native smart contracts on Monad EVM with automated RPC deployment tooling.',
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
    unavailableDemoUrl: 'https://zerothon.vercel.app',
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
    headline: 'High-Performance Static Distribution Platform for Web3 Developers',
    category: 'Full-Stack Products',
    role: 'Founder & Frontend Architect',
    target: 'Web3 & AI Developer Community',
    status: 'Live Community Hub',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/builderbase-v2',
    demoUrl: 'https://www.builderbase.xyz',
    award: 'Community Distribution Engine',
    placement: 'Active',
    stack: ['Astro 7', 'TypeScript', 'Tailwind CSS', 'Static Site Generation (SSG)'],
    summary: 'The central digital platform for Builder Base, coordinating developer event calendars, hackathon registration gateways, and community spotlights.',
    problem: 'Developer communities require accessible, fast web portals that load instantly without heavy client-side JavaScript or fragile server dependencies during high-traffic hackathon launches.',
    contribution: 'Architected and built the static web experience using Astro 7, delivering fast load times and responsive editorial layouts.',
    architecture: 'Static Site Generation (SSG) architecture built with Astro 7 and TypeScript, integrating external Luma event calendars and newsletter distribution channels.',
    challenges: ['Keeping event discovery responsive while integrating external calendars and interactive community features.'],
    results: ['Primary digital home for Builder Base; channel reach is owner-reported and is not a count of unique active members.'],
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
    problem: 'Exploring whether Python syntax can leverage Arbitrum Stylus gas improvements without manual Rust rewriting.',
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
    headline: 'Decentralized Proof-of-Attendance Verification on Solana',
    category: 'Experiments',
    role: 'Solana & Systems Developer',
    target: 'Solana',
    status: 'Experimental Prototype',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/SolMeet',
    award: 'Solana Attendance Protocol',
    placement: 'Active',
    stack: ['Solana', 'Rust', 'Anchor Framework', 'Next.js', 'Python', 'Telegram Bot API'],
    summary: 'Decentralized event attendance verification protocol issuing on-chain participation proofs on Solana with QR check-in and Telegram bot integration.',
    problem: 'Verifying real physical developer participation at technical workshops and hackathons without relying on centralized spreadsheets or easily spoofed forms.',
    contribution: 'Built the Solana Anchor program for verifying on-chain attendance proofs, paired with a Next.js frontend and Python Telegram bot for event-floor check-ins.',
    architecture: 'Anchor program on Solana verifying cryptographic QR signatures at check-in stations, coupled with a Python Telegram bot handler notifying attendees and logging check-in status.',
    challenges: ['Preventing attendance ticket transfers while allowing multi-device verification on-site.'],
    results: ['Functional prototype integrating Solana on-chain verification with Telegram bot automation.'],
    relatedSlugs: ['cpop'],
    verifiedDate: 'October 2026'
  },
  {
    slug: 'cpop',
    id: 'PRJ-16',
    title: 'cPOP',
    headline: 'Compressed Proof of Participation Protocol on Solana',
    category: 'Blockchain Infrastructure',
    role: 'Protocol Author',
    target: 'Solana (Light Protocol)',
    status: 'Open Protocol Draft',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/cpop',
    award: 'Compressed State Protocol Draft',
    placement: 'Active',
    stack: ['Solana', 'Rust', 'Light Protocol', 'State Compression', 'TypeScript'],
    summary: 'Compressed proof-of-participation protocol on Solana using Light Protocol to issue zero-rent verifiable attendance credentials at scale.',
    problem: 'Traditional on-chain NFT and token minting on Solana incurs account rent costs that become prohibitive when issuing participation proofs to thousands of hackathon attendees.',
    contribution: 'Designed the compressed token issuance specification leveraging Light Protocol state compression primitives for low-cost credential distribution.',
    architecture: 'Compressed state leaves on Solana issued via Light Protocol zk-compression, allowing organizers to mint thousands of verifiable attendance records with near-zero state rent.',
    challenges: ['Ensuring proof generation remains deterministic across distributed event checkpoints.'],
    results: ['Demonstrated low-cost minting model for large-scale developer cohorts using Solana compressed state.'],
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
    headline: 'Decentralized Compute-Session & Lifecycle Settlement Protocol',
    category: 'Experiments',
    role: 'Systems & Protocol Engineer',
    target: 'EVM / Base Sepolia',
    status: 'Research Protocol',
    featured: false,
    repoUrl: 'https://github.com/ShahiTechnovation/X402',
    award: 'Compute Session Protocol',
    placement: 'Active',
    stack: ['Solidity', 'Hardhat', 'TypeScript', 'OpenZeppelin', 'Base Sepolia'],
    summary: 'Decentralized compute-session protocol implementing node registration, session lifecycle management, and cryptographic payment settlement.',
    problem: 'Distributed compute networks lack standardized, lightweight session protocols to track resource allocation, verify session duration, and settle micropayments deterministically.',
    contribution: 'Implemented Solidity contracts for node registration, compute-session management and token settlement, with Hardhat tooling.',
    architecture: 'X402Token supplies ERC-20 protocol payments, NodeRegistry manages compute-node registration, and SessionManager handles session deposits, lifecycle and settlement. Hardhat scripts target local development and Base Sepolia.',
    challenges: ['Ensuring deterministic session teardown and settlement without latency bottlenecks.'],
    results: ['Specification and protocol implementation for decentralized node session lifecycle management.'],
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

