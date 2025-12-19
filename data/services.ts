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
  caseStudyIds: string[];
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
    caseStudyIds: [
      "uvtab-tracer-2025",
      "ubteb-business-tracer-2025",
      "ubteb-engineering-tracer-2024",
      "sscs-baseline-2020",
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
      "Our feasibility studies provide investors and organizations with reliable insights into market dynamics, operational requirements, and financial viability.",
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
    caseStudyIds: ["potato-factory-feasibility-2025"],
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
      "We work with clients to develop strategic frameworks and actionable roadmaps aligned with their vision and goals.",
    highlights: [
      "Organizational strategy and planning",
      "Stakeholder engagement and alignment",
      "Scenario planning and risk mitigation",
    ],
    methodology: {
      title: "Our Strategy Development Process",
      steps: [
        "Stakeholder consultations",
        "Situational analysis",
        "Strategy formulation",
        "Validation workshops",
        "Implementation planning",
      ],
    },
    caseStudyIds: ["nta-policy-2025", "kyambogo-donor-mapping-2025"],
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
      "Our M&E services help organizations measure outcomes, learn from evidence, and improve program effectiveness.",
    highlights: [
      "Impact evaluation design and analysis",
      "Quasi-experimental and experimental methods",
      "Learning-oriented MEL systems",
    ],
    methodology: {
      title: "Our MEL Process",
      steps: [
        "Defining outcomes and indicators",
        "Designing evaluation tools",
        "Data collection and analysis",
        "Learning synthesis",
        "Reporting and adaptive management",
      ],
    },
    caseStudyIds: [
      "uwep-midterm-2019",
      "innovative-savings-2018",
      "lpg-adoption-2022",
    ],
    relatedServices: ["baseline-surveys", "human-capacity-development"],
  },

  {
    id: "human-capacity-development-advanced-policy-training",
    title: "Human Capacity Development & Advanced Policy Training",
    description:
      "Specialised, practice-oriented training in impact evaluation and advanced macroeconomic modelling.",
    icon: "users",
    color: "bg-green-600",
    detailedOverview:
      "Through its training arm, HighRoad Academy, Highroad Services Ltd delivers specialised programmes in Impact Evaluation, Computable General Equilibrium (CGE) modelling, and Dynamic Stochastic General Equilibrium (DSGE) modelling.\n\nThe training responds to critical analytical capacity gaps across Africa by combining rigorous theoretical foundations with hands-on application. Participants gain practical skills to design, estimate, simulate, and interpret policy-relevant models for evidence-based decision-making.\n\nTarget participants include economists, policy analysts, researchers, postgraduate students (MSc/PhD), government technical staff, central bank economists, and development practitioners involved in policy analysis, planning, and macroeconomic modelling.",
    highlights: [
      "Impact Evaluation training using experimental and quasi-experimental methods (RCTs, DiD, PSM, RDD, IV)",
      "Hands-on CGE modelling for policy analysis using GAMS and SAMs",
      "Advanced DSGE modelling for macroeconomic policy analysis under uncertainty",
      "Practice-oriented learning with simulations, case studies, and real policy applications",
      "Strengthened capacity to commission, interpret, and use analytical evidence in decision-making",
    ],
    methodology: {
      title: "Our Training & Capacity Development Approach",
      steps: [
        "Skills gap assessment and participant profiling",
        "Curriculum design combining theory and applied policy relevance",
        "Interactive delivery with hands-on modelling and empirical exercises",
        "Policy simulations and real-world case studies",
        "Evaluation of learning outcomes and competencies",
        "Post-training mentorship and application support",
      ],
    },
    caseStudyIds: [
      "nta-policy-2025",
      "uwep-midterm-2019",
      "innovative-savings-2018",
      "uvtab-tracer-2025",
    ],
    relatedServices: [
      "policy-analysis-development",
      "monitoring-evaluation",
      "strategy-development",
    ],
  },

  {
    id: "policy-analysis-development",
    title: "Policy Analysis & Development",
    description:
      "Supporting evidence-based policy formulation and strategic recommendations.",
    icon: "bar-chart-3",
    color: "bg-amber-600",
    detailedOverview:
      "We provide rigorous policy analysis grounded in data, stakeholder engagement, and practical implementation pathways.",
    highlights: [
      "Policy research and evaluation",
      "Scenario modelling and risk analysis",
      "Stakeholder consultation",
    ],
    methodology: {
      title: "Our Policy Development Approach",
      steps: [
        "Situational analysis",
        "Stakeholder engagement",
        "Drafting policy instruments",
        "Scenario modelling",
        "Implementation guidance",
      ],
    },
    caseStudyIds: ["nta-policy-2025"],
    relatedServices: ["strategy-development", "human-capacity-development"],
  },
];
