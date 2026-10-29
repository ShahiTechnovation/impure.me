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
  narrative: 'Builder Base was founded to bridge the gap between protocol foundations building developer infrastructure and ambitious builders seeking hackathon mentorship, technical distribution, and real grant opportunities. Builder Base operates as an ecosystem distribution channel coordinating multi-city workshops, hackathons, technical dispatches, and protocol collaborations.',
  channels: [
    {
      channel: 'Luma Event Audience',
      reach: '64,000+',
      description: 'Total registrations across technical workshops, hackathons, and developer demo days.'
    },
    {
      channel: 'Technical Newsletter Reach',
      reach: '70,000+',
      description: 'Active subscribers receiving developer dispatches, protocol bounty breakdowns, and hackathon announcements.'
    },
    {
      channel: 'WhatsApp Builder Circles',
      reach: '2,000+',
      description: 'Active developers, builders, and hackathon participants across regional communication groups.'
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
      'Mentored hackathon builders integrating Claude models into full-stack and developer-tooling prototypes.',
      'Authored open-source community repositories and starter templates for tool-use workflows.'
    ]
  },
  {
    role: 'City Lead',
    organization: 'TigerGraph',
    period: '2024 – 2025',
    status: 'Ongoing Contributor',
    scope: 'Regional Developer Ecosystem Evangelism',
    contributions: [
      'Led local graph database developer meetups, introducing builders to GSQL and knowledge graph architectures.',
      'Guided student and developer cohorts on implementing GraphRAG pipelines for relational queries.',
      'Connected regional developer talent with international graph technology challenges.'
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
      'Engineered PyVax as an open source public good bridging Python developers to Avalanche C-Chain.',
      'Assisted developers with Avalanche C-Chain tooling and testnet contract deployment.'
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
      'Facilitated cross-community discussions between university student programmers and Web3 founders.'
    ]
  }
];

export const gtmInitiatives: GtmInitiative[] = [
  {
    id: 'GTM-01',
    title: 'Hack in Hills 2026',
    subtitle: 'High-Altitude Developer Hackathon & Protocol Curation',
    period: '2026 (Active Program)',
    location: 'Himachal Pradesh / Hybrid',
    objective: 'Create a high-density developer retreat and hackathon bringing together regional builders with leading protocol sponsors.',
    targetAudience: 'Student developers, protocol builders, and startup engineering teams.',
    strategy: 'Leverage multi-city Builder Base chapters to recruit developer talent across India, curating track challenges around specific protocol capabilities rather than generic open-ended bounties.',
    responsibilities: [
      'Developer acquisition and multi-stage application review.',
      'Protocol sponsor coordination and bounty track alignment.',
      'Participant journey design, event scheduling, and mentor coordination.'
    ],
    channelsAndPartners: ['Builder Base distribution network', 'Luma events', 'University CS chapters', 'Protocol foundation sponsors'],
    executionDetails: 'Coordinated nationwide application outreach across university campuses and online developer channels. Structured sponsor tracks so participating teams solve specific protocol tooling and dApp challenges.',
    outcomes: [
      { label: 'Event Registrations', value: '10,000+', detail: 'Total participant registrations across university and online channels' },
      { label: 'Curated Tracks', value: 'Multi-Chain', detail: 'Dedicated protocol tracks aligned with real infrastructure bounties' },
      { label: 'Program Phase', value: 'Finalist Cohorts', detail: 'Regional hackathon milestones active through late 2026' }
    ],
    learnings: [
      'Hands-on starter repositories and pre-event setup calls help participants resolve setup problems before day one.',
      'Aligning bounties directly with core protocol engineering needs produces significantly more usable prototypes.'
    ],
    statusNote: 'Note: As of October 2026, finalist cohorts and summit preparations are underway.'
  },
  {
    id: 'GTM-02',
    title: 'Claude Community Multi-City Workshops',
    subtitle: 'Technical Workshops, Model Context Protocol & Builder Activation',
    period: '2025 – 2026',
    location: 'Delhi, Mumbai, Bhopal',
    objective: 'Demonstrate practical agent engineering, Model Context Protocol (MCP), and full-stack AI development to working software engineers and students.',
    targetAudience: 'Software engineers, AI developers, product founders, and computer science students.',
    strategy: 'Focus on hands-on code walkthroughs rather than high-level talk: setting up MCP servers, chaining LLM function calls, and running live tool-calling applications.',
    responsibilities: [
      'Technical curriculum preparation and live-coding demonstrations.',
      'Hands-on workshop facilitation and debugging participant environments.',
      'Community open-source repository maintenance and project showcase.'
    ],
    channelsAndPartners: ['Claude Community India', 'Builder Base network', 'Local tech hub venues', 'GitHub open source repos'],
    executionDetails: 'Conducted interactive workshops where attendees clone starter repositories, configure tool-calling workflows, and test Model Context Protocol servers locally.',
    outcomes: [
      { label: 'Workshop Attendees', value: '1,100+', detail: 'In-person participants across workshops in Delhi, Bhopal, and Mumbai' },
      { label: 'Core Focus Areas', value: 'MCP & Agents', detail: 'Practical implementations of Model Context Protocol and function calling' },
      { label: 'Open Artifacts', value: 'Starter Kits', detail: 'Reusable codebases and setup documentation distributed to builders' }
    ],
    learnings: [
      'Walkthroughs where participants run code locally in the first fifteen minutes create far deeper engagement than theoretical slides.',
      'Clear starter repositories with explicit schema examples eliminate common onboarding stumbling blocks.'
    ]
  },
  {
    id: 'GTM-03',
    title: 'Builder Base Regional Expansion',
    subtitle: 'Grassroots Distribution Architecture for Developer Communities',
    period: '2024 – 2026',
    location: 'Pan-India',
    objective: 'Build an authentic distribution channel connecting emerging technologies and protocol foundations with active developers.',
    targetAudience: 'Founders, Web3 developers, systems engineers, and protocol ecosystem leads.',
    strategy: 'Host consistent regional study groups, demo days, and workshops while consolidating developer reach into a regular technical newsletter and Luma event calendar.',
    responsibilities: [
      'Community architecture design and operational coordination.',
      'Content curation for weekly newsletters, protocol spotlights, and technical guides.',
      'Partner alignment with protocol teams seeking developer feedback.'
    ],
    channelsAndPartners: ['Luma Event Calendar', 'WhatsApp Builder Circles', 'X/Twitter', 'Substack Newsletter', 'Web3 Protocols'],
    executionDetails: 'Consistently published technical dispatches, curated hackathon schedules, and hosted focused developer meetups without paid advertising or spam.',
    outcomes: [
      { label: 'Luma Event Reach', value: '64,000+', detail: 'Total registrations across community calendar' },
      { label: 'Newsletter Readers', value: '70,000+', detail: 'Subscribers receiving technical ecosystem dispatches' },
      { label: 'Builder Circles', value: '2,000+', detail: 'Active participants across curated regional WhatsApp groups' }
    ],
    learnings: [
      'Developers value concrete technical resources and genuine hackathon bounties over vague networking channels.',
      'Maintaining distinct communication channels for announcements versus open discussion preserves signal.'
    ]
  },
  {
    id: 'GTM-04',
    title: 'Mumbai Devcon Week',
    subtitle: 'Technical Gatherings & Cross-Protocol Side Events',
    period: 'November 2026 · Upcoming',
    location: 'Mumbai, India',
    objective: 'Curate high-signal side events and technical discussions during major developer gatherings, connecting builders with protocol engineers.',
    targetAudience: 'Protocol engineers, technical founders, and hackathon builders.',
    strategy: 'Focus on specific architectural topics (such as parallel execution, agentic workflows, and zero-knowledge verification) in intimate workshop settings.',
    responsibilities: [
      'Cross-community programming coordination.',
      'Audience curation and attendee management.',
      'Technical panel facilitation and discussion moderation.'
    ],
    channelsAndPartners: ['Builder Base; other contributors to be confirmed'],
    executionDetails: 'Planning technical sessions for November 2026, focused on developer tools and cross-community discussion. Attendance and participating teams have not yet been confirmed.',
    outcomes: [],
    learnings: [],
    statusNote: 'Upcoming as of October 29, 2026. Program planning is in progress; no completed attendance, partnership or grant outcomes are claimed.'
  }
];
