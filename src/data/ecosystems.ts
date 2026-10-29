export interface EcosystemRole {
  role: string;
  organization: string;
  period: string;
  status: 'Active' | 'Alumnus' | 'Ongoing Contributor';
  scope: string;
  contributions: string[];
  link?: string;
}

export interface GtmInitiative {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  objective: string;
  targetAudience: string;
  strategy: string;
  responsibilities: string[];
  channelsAndPartners: string[];
  executionDetails: string;
  outcomes: {
    label: string;
    value: string;
    detail: string;
  }[];
  learnings: string[];
  statusNote?: string;
}

export const builderBaseData = {
  name: 'Builder Base',
  founder: 'Punit Pal',
  website: 'https://www.builderbase.xyz',
  positioning: 'The distribution layer for builders.',
  narrative: 'Builder Base was founded to solve a fundamental disconnect in tech: protocol foundations build extraordinary developer infrastructure, but struggle with grassroots adoption, developer retention, and high-signal hackathon shortlisting. Builder Base operates as an ecosystem engine providing multi-city developer distribution, hackathon incubation, technical workshops, and direct protocol partnerships.',
  channels: [
    {
      channel: 'Luma Event Audience',
      reach: '64,000+',
      description: 'Registered developers and attendees across multi-city workshops, hackathons, and developer demo days.'
    },
    {
      channel: 'Technical Newsletter Reach',
      reach: '70,000+',
      description: 'Active subscribers receiving developer dispatches, protocol bounty breakdowns, and hackathon announcements.'
    },
    {
      channel: 'Verified Builder Community',
      reach: '2,000+',
      description: 'Vetted Web3 and AI developers, founders, and contributors across curated WhatsApp and community groups.'
    }
  ],
  partnerEcosystems: [
    'Arbitrum',
    'Avalanche',
    'Monad',
    'Aptos',
    'Anthropic Claude Community',
    'TigerGraph',
    'Shardeum',
    'Vara Network'
  ]
};

export const ecosystemRoles: EcosystemRole[] = [
  {
    role: 'Claude Community Contributor',
    organization: 'Claude Developer Community',
    period: '2025 – Present',
    status: 'Active',
    scope: 'Community Contributor & Technical Workshop Lead',
    contributions: [
      'Organized and led hands-on technical workshops on Model Context Protocol (MCP) and multi-agent development across Delhi, Bhopal, and Mumbai.',
      'Mentored hackathon builders integrating Claude 3.5 Sonnet into full-stack and developer-tooling prototypes.',
      'Created open source community repositories and starter kits for Claude-assisted workflows.'
    ]
  },
  {
    role: 'City Lead',
    organization: 'TigerGraph',
    period: '2024 – 2025',
    status: 'Ongoing Contributor',
    scope: 'Regional Developer Ecosystem Evangelism',
    contributions: [
      'Led local graph database engineering meetups, introducing developers to GSQL and knowledge graph architectures.',
      'Guided enterprise and student builders on implementing GraphRAG pipelines for complex relationship queries.',
      'Bridged university developer talent with international graph technology challenges.'
    ]
  },
  {
    role: 'Ecosystem Contributor',
    organization: 'Avalanche Team1',
    period: '2025 – Present',
    status: 'Active',
    scope: 'Avalanche Developer Growth & Hackathon Activation',
    contributions: [
      'Co-organized Avalanche developer meetups and hackathon activations in India.',
      'Engineered PyVax as an ecosystem public good bridging Python developers to Avalanche C-Chain.',
      'Facilitated developer onboarding onto Avalanche Subnets and EVM tooling.'
    ]
  },
  {
    role: 'Former BNB Martian',
    organization: 'BNB Chain Community Program',
    period: '2024',
    status: 'Alumnus',
    scope: 'Grassroots Community & Developer Ambassador',
    contributions: [
      'Conducted introductory Web3 and smart contract workshops for university cohorts.',
      'Supported local hackathon teams with deployment and contract testing on BNB Smart Chain.',
      'Facilitated cross-community discussions between Web2 student programmers and Web3 founders.'
    ]
  }
];

export const gtmInitiatives: GtmInitiative[] = [
  {
    id: 'GTM-01',
    title: 'Hack in Hills 2026',
    subtitle: 'Developer Hackathon Growth, Partner Curation & Experience',
    period: '2026 (Active Program)',
    location: 'Himachal Pradesh / Hybrid',
    objective: 'Create a high-density, high-altitude developer retreat and hackathon bringing together top-tier national builders with leading protocol sponsors.',
    targetAudience: 'Senior student developers, Web3/AI protocol builders, and startup engineering leads.',
    strategy: 'Leverage multi-city Builder Base chapters to recruit vetted developer talent rather than open public registrations. Partner with protocols seeking focused, production-grade hackathon submissions rather than generic wrappers.',
    responsibilities: [
      'Developer acquisition and multi-stage application shortlisting.',
      'Protocol sponsor curation, requirement scoping, and bounty alignment.',
      'Participant journey design, physical venue logistics, and mentor coordination.'
    ],
    channelsAndPartners: ['Builder Base distribution network', 'Luma events', 'University CS chapters', 'Protocol foundation grants'],
    executionDetails: 'Structured a multi-stage funnel: initial portfolio review -> technical screening -> shortlisted cohort admission. Coordinated sponsor bounties ensuring teams build against specific protocol pain points.',
    outcomes: [
      { label: 'Developer Applicants', value: '1,200+', detail: 'Verified developer applications across India' },
      { label: 'Cohort Quality', value: 'Top 15%', detail: 'Strict shortlisting rate focused on shipped code' },
      { label: 'Protocol Partners', value: '4 Major Chains', detail: 'Dedicated tracks with active bounty grants' }
    ],
    learnings: [
      'Curated hackathons yield 3x higher protocol deployment rates compared to unvetted mass registrations.',
      'In-person builder intimacy accelerates multi-chain protocol adoption far faster than virtual webinars.'
    ],
    statusNote: 'Note: As of October 2026, finalist cohorts and regional summits are in active execution.'
  },
  {
    id: 'GTM-02',
    title: 'Claude Community Multi-City Programs',
    subtitle: 'Technical Workshops, Model Context Protocol & Builder Activation',
    period: '2025 – 2026',
    location: 'Delhi, Mumbai, Bhopal',
    objective: 'Demystify frontier AI agent engineering, Model Context Protocol (MCP), and full-stack AI development for practical engineering teams.',
    targetAudience: 'Software engineers, AI enthusiasts, product founders, and computer science students.',
    strategy: 'Shift away from high-level "AI prompt engineering" talks toward deep-dive architectural code walks: building MCP servers, chaining LLM function calls, and integrating live tool execution.',
    responsibilities: [
      'Technical curriculum design and live live-coding presentation.',
      'Hands-on workshop facilitation and debugging participant environments.',
      'Post-event repository maintenance and community project showcase.'
    ],
    channelsAndPartners: ['Claude Community India', 'Builder Base network', 'Local tech hub venues', 'GitHub open source repos'],
    executionDetails: 'Delivered immersive 3-4 hour technical workshops where every attendee cloned a repository, configured Claude API / MCP tooling locally, and built an autonomous tool-calling application by session close.',
    outcomes: [
      { label: 'Builders Activated', value: '850+', detail: 'Hands-on workshop participants across 3 key tech cities' },
      { label: 'Prototypes Shipped', value: '140+', detail: 'Working MCP and agent repos produced by attendees' },
      { label: 'Average Feedback', value: '4.9 / 5.0', detail: 'Rated on technical depth and direct usefulness' }
    ],
    learnings: [
      'Live code walkthroughs with immediate local verification generate 10x higher post-event retention than slide presentations.',
      'Clear starter repositories with pre-configured schemas eliminate 90% of beginner onboarding friction.'
    ]
  },
  {
    id: 'GTM-03',
    title: 'Builder Base Regional Expansion',
    subtitle: 'Scalable Distribution Architecture for Developer Communities',
    period: '2024 – 2026',
    location: 'Pan-India',
    objective: 'Transform Builder Base from a local developer meetup into a national distribution layer connecting emerging protocol technologies with ambitious builders.',
    targetAudience: 'Founders, Web3 developers, systems engineers, and protocol ecosystem leads.',
    strategy: 'Establish a repeatable chapter model where regional leads host regular co-working days, study groups, and hackathons, all funneling back into a centralized distribution audience on Luma and Substack.',
    responsibilities: [
      'Community architecture design and operational governance.',
      'Content strategy for weekly newsletters, protocol spotlights, and technical guides.',
      'Sponsor relationship management and grant delivery.'
    ],
    channelsAndPartners: ['Luma', 'WhatsApp Developer Circles', 'X/Twitter', 'Substack Newsletter', 'Web3 Protocols'],
    executionDetails: 'Consistently delivered high-value technical dispatches, curated hackathon opportunities, and exclusive protocol workshops. Maintained high standards for community discussions, eliminating spam and promotional noise.',
    outcomes: [
      { label: 'Luma Event Reach', value: '64,000+', detail: 'Total registrations across community calendar' },
      { label: 'Newsletter Readers', value: '70,000+', detail: 'Weekly technical ecosystem dispatches' },
      { label: 'Core Builder Base', value: '2,000+', detail: 'Direct daily engagement across active circles' }
    ],
    learnings: [
      'Developers value concrete opportunities (bounties, grants, hackathons) over vague networking chat rooms.',
      'Separating distinct communication channels (broadcast newsletter vs interactive chat) preserves community signal.'
    ]
  },
  {
    id: 'GTM-04',
    title: 'Mumbai Devcon Week',
    subtitle: 'High-Density Technical Programming & Cross-Protocol Side Events',
    period: '2025',
    location: 'Mumbai, India',
    objective: 'Curate high-signal side events and technical panels during major crypto-developer conferences, maximizing builder-investor-protocol intersections.',
    targetAudience: 'International protocol teams, institutional builders, venture partners, and hackathon champions.',
    strategy: 'Focus on focused, theme-driven technical gatherings (e.g., EVM Parallelization, Agentic Workflows, Zero-Knowledge Verification) rather than open parties.',
    responsibilities: [
      'Cross-community programming coordination.',
      'Audience curation and high-signal RSVP filtering.',
      'Speaker panel moderation and technical synthesis.'
    ],
    channelsAndPartners: ['Builder Base', 'Arbitrum ecosystem', 'Avalanche community', 'Monad teams'],
    executionDetails: 'Co-hosted and moderated technical discussions where founders and protocol engineers broke down roadmap architectures, benchmark results, and upcoming ecosystem grant opportunities.',
    outcomes: [
      { label: 'Event Attendance', value: '350+', detail: 'Curated senior developers and protocol founders' },
      { label: 'Partners Hosted', value: '6 Protocols', detail: 'Direct founder and core-dev panel participation' },
      { label: 'Ecosystem Connections', value: '50+ Matches', detail: 'Facilitated builder-to-grant introductions' }
    ],
    learnings: [
      'Curating attendance by GitHub profile or project portfolio ensures high technical conversation quality.',
      'Side events during major conferences are the highest-ROI channel for recruiting protocol ambassadors.'
    ]
  }
];
