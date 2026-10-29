export interface Achievement {
  id: string;
  projectTitle: string;
  projectSlug: string;
  competition: string;
  placement: '1st Place' | '1st Runner-Up' | '2nd Runner-Up' | 'Top 15 Finalist';
  placementType: 'podium-first' | 'podium-runnerup' | 'podium-third' | 'finalist';
  host: string;
  ecosystem: string;
  date: string;
  evidenceUrl: string;
  evidenceLabel: string;
  summary: string;
  metrics?: string;
  verified: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'ACH-01',
    projectTitle: 'Sol2Rust',
    projectSlug: 'sol2rust',
    competition: 'Core Nexus',
    placement: '1st Place',
    placementType: 'podium-first',
    host: 'Arbitrum Foundation & Core Nexus',
    ecosystem: 'Arbitrum Stylus (WASM)',
    date: 'April 2025',
    evidenceUrl: 'https://luma.com/ozoqjknu',
    evidenceLabel: 'View Core Nexus Hackathon on Luma',
    summary: 'Awarded 1st Place for building a high-speed Solidity-to-Rust transpiler enabling frictionless smart contract migration onto Arbitrum Stylus WASM.',
    metrics: '1st Place / 50k INR Award',
    verified: true
  },
  {
    id: 'ACH-02',
    projectTitle: 'PyVax',
    projectSlug: 'pyvax',
    competition: 'AVAX Kolkata (Team1 Hack25)',
    placement: '1st Runner-Up',
    placementType: 'podium-runnerup',
    host: 'Avalanche Team1',
    ecosystem: 'Avalanche C-Chain',
    date: 'September 2025',
    evidenceUrl: 'https://luma.com/T1-Hack25-Kolkata',
    evidenceLabel: 'View AVAX Kolkata Hack25 on Luma',
    summary: 'Awarded 1st Runner-Up for engineering a Python-to-EVM compiler allowing developers to write smart contracts natively in Python for Avalanche C-Chain.',
    metrics: '1st Runner-Up / $500 Award',
    verified: true
  },
  {
    id: 'ACH-03',
    projectTitle: 'PyMon',
    projectSlug: 'pymon',
    competition: 'Monad Delhi V2',
    placement: '1st Runner-Up',
    placementType: 'podium-runnerup',
    host: 'Monad Ecosystem',
    ecosystem: 'Monad EVM',
    date: 'November 2025',
    evidenceUrl: 'https://luma.com/zzogo8yu',
    evidenceLabel: 'View Monad Delhi V2 on Luma',
    summary: 'Awarded 1st Runner-Up for bringing Python-native smart contract compilation and deployment toolchains to Monad parallel EVM.',
    metrics: '1st Runner-Up / $500 Award',
    verified: true
  },
  {
    id: 'ACH-04',
    projectTitle: 'FlowMon',
    projectSlug: 'flowmon',
    competition: 'Monad Blitz V3',
    placement: '1st Runner-Up',
    placementType: 'podium-runnerup',
    host: 'Monad Ecosystem',
    ecosystem: 'Monad EVM & Multi-Chain',
    date: 'March 2026',
    evidenceUrl: 'https://luma.com/blitz-delhi-mar-2026',
    evidenceLabel: 'View Monad Blitz V3 on Luma',
    summary: 'Awarded 1st Runner-Up for visual multi-agent orchestration enabling 43 protocol agents to execute on-chain pipelines with zero glue code.',
    metrics: '1st Runner-Up / 43 Protocol Agents',
    verified: true
  },
  {
    id: 'ACH-05',
    projectTitle: 'NeuroFit',
    projectSlug: 'neurofit',
    competition: 'BrahmaX 1.0',
    placement: '2nd Runner-Up',
    placementType: 'podium-third',
    host: 'BrahmaX Hackathon',
    ecosystem: 'AI & Neural Networks',
    date: 'May 2025',
    evidenceUrl: 'https://unstop.com/o/Ch1wQ9l',
    evidenceLabel: 'View BrahmaX 1.0 on Unstop',
    summary: 'Awarded 2nd Runner-Up for adaptive neural network fitness modeling that customizes progressive training regimes based on real-time feedback.',
    metrics: '2nd Runner-Up / 3k INR Award',
    verified: true
  },
  {
    id: 'ACH-06',
    projectTitle: 'APV3RSE',
    projectSlug: 'apv3rse',
    competition: 'Aptos Winter School 2025',
    placement: 'Top 15 Finalist',
    placementType: 'finalist',
    host: 'Aptos Foundation & IIT Delhi',
    ecosystem: 'Aptos (Move VM)',
    date: 'January 2025',
    evidenceUrl: 'https://www.apv3rse.xyz',
    evidenceLabel: 'View APV3RSE Platform & Showcase',
    summary: 'Selected as Top 15 Finalist at IIT Delhi among ~900 applicants for natural language Move contract generation and in-browser IDE integration.',
    metrics: 'Top 15 / ~900 Applicants',
    verified: true
  },
  {
    id: 'ACH-07',
    projectTitle: 'Bloopa',
    projectSlug: 'bloopa',
    competition: 'Algorand Hack Series 3.0',
    placement: 'Top 15 Finalist',
    placementType: 'finalist',
    host: 'Algorand Foundation',
    ecosystem: 'Algorand & DeFi',
    date: '2025',
    evidenceUrl: 'https://github.com/ShahiTechnovation/Bloopa',
    evidenceLabel: 'View Bloopa Repository on GitHub',
    summary: 'Selected as Top 15 Finalist for on-chain credit infrastructure and programmable micro-lending for autonomous AI agents.',
    metrics: 'Top 15 Finalist Selection',
    verified: true
  }
];

