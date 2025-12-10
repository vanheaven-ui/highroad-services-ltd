export type ServiceIcon =
  | "bar-chart-3"
  | "users"
  | "briefcase"
  | "building"
  | "globe"
  | "line-chart"
  | "leaf"
  | "clipboard-list";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string;

  detailedOverview: string;
  highlights: string[];

  methodology: {
    title: string;
    steps: string[];
  };

  caseStudies: {
    title: string;
    description: string;
    impact: string;
  }[];

  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: "baseline-surveys",
    title: "Baseline Surveys",
    description:
      "Conducting baseline assessments to establish program starting points and inform planning.",
    icon: "clipboard-list",
    color: "bg-blue-600",

    detailedOverview:
      "We carry out rigorous baseline surveys to collect essential data at the start of projects or interventions. These surveys help organizations understand the initial context, inform program design, and provide a reference point for measuring impact over time.",

    highlights: [
      "Comprehensive household and organizational surveys",
      "Contextual analysis to inform program design",
      "Quantitative and qualitative data collection",
      "Benchmarking for monitoring and evaluation",
    ],

    methodology: {
      title: "Our Baseline Survey Approach",
      steps: [
        "Defining objectives and indicators",
        "Designing survey instruments and sampling",
        "Data collection and quality assurance",
        "Data analysis and reporting",
        "Presentation of findings and recommendations",
      ],
    },

    caseStudies: [
      {
        title: "Baseline Surveys and Impact Evaluations for UBOS and USAID",
        description:
          "Led comprehensive research and consultancy, conducting baseline surveys and impact evaluations to assess program effectiveness and guide adjustments.",
        impact:
          "Informed evidence-based policy tweaks, enhancing program reach and efficiency for thousands of beneficiaries.",
      },
      {
        title:
          "Baseline, Midline, and Endline Evaluations for TradeMark East Africa",
        description:
          "Led multi-phase evaluations on trade, agriculture, and health impacts using experimental designs.",
        impact:
          "Optimized interventions, increasing cross-border trade volumes by 22% for 8,000+ participants.",
      },
    ],

    relatedServices: ["monitoring-evaluation", "human-capacity-development"],
  },

  {
    id: "feasibility-studies",
    title: "Feasibility Studies",
    description:
      "Evaluating the viability, market potential, and strategic options for investments or initiatives.",
    icon: "globe",
    color: "bg-red-600",

    detailedOverview:
      "Our feasibility studies provide investors and organizations with reliable insights into market dynamics, operational requirements, and financial viability. We assess risks and opportunities to guide informed decision-making and minimize investment risks.",

    highlights: [
      "Market and competitive analysis",
      "Financial modeling and projections",
      "Risk and opportunity assessment",
      "Regulatory and operational feasibility",
    ],

    methodology: {
      title: "Our Feasibility Approach",
      steps: [
        "Market and context analysis",
        "Data collection and validation",
        "Financial modeling and scenario analysis",
        "Risk assessment and mitigation planning",
        "Strategic recommendations for implementation",
      ],
    },

    caseStudies: [
      {
        title:
          "Public Investment Appraisal and Policy Analysis with NPA and AERC",
        description:
          "Collaborated on appraisals using cost-benefit analysis and policy modeling to recommend optimized public spending strategies.",
        impact:
          "Shaped national investment frameworks, unlocking $20M+ in efficient funding for infrastructure projects.",
      },
    ],

    relatedServices: ["strategy-development", "policy-analysis-development"],
  },

  {
    id: "strategy-development",
    title: "Strategy Development",
    description:
      "Helping organizations design actionable strategies to achieve their objectives effectively.",
    icon: "briefcase",
    color: "bg-indigo-600",

    detailedOverview:
      "We work with clients to develop strategic frameworks and actionable roadmaps that align with their vision, mission, and goals. Our process ensures that strategies are evidence-based, stakeholder-informed, and implementable.",

    highlights: [
      "Organizational strategy and planning",
      "Programmatic and sector-specific strategies",
      "Stakeholder engagement and alignment",
      "Scenario planning and risk mitigation",
    ],

    methodology: {
      title: "Our Strategy Development Process",
      steps: [
        "Stakeholder consultations and needs assessment",
        "Environmental and situational analysis",
        "Strategy formulation and scenario modeling",
        "Validation workshops and feedback incorporation",
        "Implementation planning and monitoring framework",
      ],
    },

    caseStudies: [
      {
        title:
          "Capacity Building and Tracer Studies for Kyambogo University and IDRC",
        description:
          "Provided targeted training and tracer studies on AI, data analytics, and econometrics to build institutional capabilities.",
        impact:
          "Equipped 200+ stakeholders with practical skills, boosting research output by 25% in participating programs.",
      },
    ],

    relatedServices: ["policy-analysis-development", "monitoring-evaluation"],
  },

  {
    id: "monitoring-evaluation",
    title: "Monitoring & Evaluation",
    description:
      "Designing and implementing robust systems to track performance, outcomes, and impact.",
    icon: "building",
    color: "bg-purple-600",

    detailedOverview:
      "Our M&E services help organizations systematically track their progress, measure outcomes, and learn from experience. We design user-friendly dashboards, reports, and feedback mechanisms to support adaptive management and evidence-based decision-making.",

    highlights: [
      "Development of MEL frameworks and indicators",
      "Real-time dashboards and performance tracking",
      "Evaluation studies (baseline, midline, endline)",
      "Learning integration for program improvement",
    ],

    methodology: {
      title: "Our MEL Process",
      steps: [
        "Defining outcomes and indicators",
        "Designing MEL tools and data collection methods",
        "Data collection, cleaning, and analysis",
        "Synthesizing findings and lessons learned",
        "Reporting and adaptive management support",
      ],
    },

    caseStudies: [
      {
        title:
          "Multi-Country Impact Evaluations Across East and Southern Africa",
        description:
          "Designed and led evaluations using propensity score matching and difference-in-differences to assess socio-economic outcomes.",
        impact:
          "Validated program efficacy, supporting $15M in continued funding and refinements for 50,000+ beneficiaries.",
      },
    ],

    relatedServices: ["baseline-surveys", "human-capacity-development"],
  },

  {
    id: "human-capacity-development",
    title: "Human Capacity Development",
    description:
      "Strengthening organizational and individual capabilities through tailored training and mentorship.",
    icon: "users",
    color: "bg-green-600",

    detailedOverview:
      "We provide targeted capacity development programs designed to enhance skills, knowledge, and operational effectiveness. Our approach is hands-on and practical, ensuring immediate application and measurable improvements.",

    highlights: [
      "Skills assessments and gap analysis",
      "Customized training programs",
      "Workshops, coaching, and mentorship",
      "Performance tracking and feedback mechanisms",
    ],

    methodology: {
      title: "Our Capacity Development Approach",
      steps: [
        "Assessment of learning needs",
        "Curriculum design tailored to context",
        "Interactive training delivery",
        "Evaluation and feedback integration",
        "Ongoing mentorship and skills application",
      ],
    },

    caseStudies: [
      {
        title:
          "Capacity Building and Tracer Studies for Kyambogo University and IDRC",
        description:
          "Provided targeted training and tracer studies to build institutional capabilities.",
        impact:
          "Equipped 200+ stakeholders with practical skills, boosting research output by 25%.",
      },
    ],

    relatedServices: ["strategy-development", "monitoring-evaluation"],
  },

  {
    id: "policy-analysis-development",
    title: "Policy Analysis & Development",
    description:
      "Supporting evidence-based policy formulation and strategic recommendations for institutions.",
    icon: "bar-chart-3",
    color: "bg-amber-600",

    detailedOverview:
      "We analyze policy environments and provide actionable recommendations to guide strategic decisions. Our work involves data-driven insights, stakeholder engagement, and practical policy instruments to facilitate effective implementation.",

    highlights: [
      "Policy research and evaluation",
      "Regulatory and institutional analysis",
      "Stakeholder consultation and engagement",
      "Drafting policy instruments and guidance",
    ],

    methodology: {
      title: "Our Policy Development Approach",
      steps: [
        "Research and situational analysis",
        "Stakeholder engagement",
        "Drafting and consultation of policy documents",
        "Scenario modeling and risk assessment",
        "Implementation guidance and monitoring",
      ],
    },

    caseStudies: [
      {
        title: "Uganda Economic Update and PEFA Assessment Contributions",
        description:
          "Contributed macro-fiscal analysis and advisory on debt toolkits, aiding the 2022 Economic Update and PEFA assessment.",
        impact:
          "Enhanced Uganda's PFM scoring, attracting $10M+ in EU/Norway/Denmark aid for reforms.",
      },
    ],

    relatedServices: ["strategy-development", "feasibility-studies"],
  },

  {
    id: "environmental-social-impact",
    title: "Environmental & Social Impact Assessment",
    description:
      "Assessing potential environmental and social effects of projects and programs to ensure sustainability and compliance.",
    icon: "leaf",
    color: "bg-teal-600",

    detailedOverview:
      "We conduct Environmental and Social Impact Assessments (ESIA) to help organizations anticipate risks, comply with regulations, and design sustainable interventions that benefit communities and ecosystems.",

    highlights: [
      "Environmental baseline studies",
      "Social and community impact assessments",
      "Mitigation planning and recommendations",
      "Compliance with national and international standards",
    ],

    methodology: {
      title: "Our ESIA Methodology",
      steps: [
        "Scoping and stakeholder engagement",
        "Baseline environmental and social data collection",
        "Impact prediction and analysis",
        "Mitigation and management planning",
        "Reporting and monitoring recommendations",
      ],
    },

    caseStudies: [
      {
        title: "SDG Financing Diagnostics and Africa SDG Index",
        description:
          "Led diagnostics and authored the Africa SDG Index/Dashboards, developing indicators for multi-country SDG progress.",
        impact:
          "Guided $30M+ in targeted SDG investments, improving continental reporting frameworks.",
      },
    ],

    relatedServices: ["feasibility-studies", "policy-analysis-development"],
  },
];
