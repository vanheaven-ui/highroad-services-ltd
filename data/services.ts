export type ServiceIcon =
  | "bar-chart-3"
  | "users"
  | "briefcase"
  | "building"
  | "globe"
  | "line-chart";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string; // Now a Tailwind bg class, e.g., "bg-blue-600"

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

  relatedServices: string[]; // Now uses IDs like "mel" for matching
}

export const services: Service[] = [
  {
    id: "economic-research",
    title: "Economic Research & Analysis",
    description:
      "Data-driven insights supporting policy formulation, investment decisions, and economic strategies.",
    icon: "bar-chart-3",
    color: "bg-blue-600", // Dark blue for analytical depth

    detailedOverview:
      "We provide rigorous economic research and advanced analytics to support evidence-based decision-making for governments, development partners, and private-sector organizations.",

    highlights: [
      "Macroeconomic & sectoral analysis",
      "Impact and cost-benefit assessments",
      "Forecasting and economic modeling",
      "Labor market and social sector analysis",
    ],

    methodology: {
      title: "Our Analytical Approach",
      steps: [
        "Problem definition and data-needs assessment",
        "Primary and secondary data collection",
        "Econometric and statistical modeling",
        "Interpretation of findings and scenario analysis",
        "Policy recommendations and reporting",
      ],
    },

    caseStudies: [
      {
        title: "Agricultural Value-Chain Assessment",
        description:
          "Analyzed productivity drivers in rural districts to identify policy constraints and investment opportunities.",
        impact:
          "Informed a government agricultural transformation agenda and shaped private-sector investment priorities.",
      },
    ],

    relatedServices: ["mel", "policy-advisory", "market-research"],
  },

  {
    id: "capacity-development",
    title: "Capacity Development & Training",
    description:
      "Strengthening institutional and organizational capacity through tailored training and skills development.",
    icon: "users",
    color: "bg-green-600", // Vibrant green for growth & people

    detailedOverview:
      "We design and deliver transformative capacity-development programs that enhance the technical and operational capabilities of institutions, teams, and individuals.",

    highlights: [
      "Institutional capacity assessments",
      "Customized training curriculum design",
      "Workshops and virtual learning programs",
      "Technical mentorship and coaching",
    ],

    methodology: {
      title: "Our Training Methodology",
      steps: [
        "Needs assessment and skills gap analysis",
        "Curriculum and training-material development",
        "Delivery through interactive, adult-learning methods",
        "Assessment and feedback loops",
        "Post-training support and performance tracking",
      ],
    },

    caseStudies: [
      {
        title: "Public Sector Skills Strengthening",
        description:
          "Developed and delivered a leadership and performance-management course for local-government officials.",
        impact:
          "Improved service delivery outcomes and strengthened management capacity.",
      },
    ],

    relatedServices: ["mel", "economic-research", "policy-advisory"],
  },

  {
    id: "policy-advisory",
    title: "Policy Advisory & Strategy",
    description:
      "Supporting public and private institutions with data-driven policy formulation and strategic planning.",
    icon: "briefcase",
    color: "bg-indigo-600", // Indigo for strategic insight

    detailedOverview:
      "We help institutions navigate complex policy environments, design effective policies, and implement strategic plans aligned with economic and developmental objectives.",

    highlights: [
      "Policy design and reform advisory",
      "Institutional strategy development",
      "Regulatory analysis and frameworks",
      "Stakeholder mapping and engagement",
    ],

    methodology: {
      title: "Our Advisory Framework",
      steps: [
        "Policy environment analysis",
        "Stakeholder consultations",
        "Scenario modeling and strategy development",
        "Drafting policy instruments",
        "Implementation support and monitoring",
      ],
    },

    caseStudies: [
      {
        title: "National Digital Strategy Review",
        description:
          "Worked with stakeholders across ICT, finance, and governance to refine a national digital-transformation policy.",
        impact:
          "Enabled government and private sector alignment toward a unified digital-ecosystem approach.",
      },
    ],

    relatedServices: ["economic-research", "mel", "market-research"],
  },

  {
    id: "mel",
    title: "Monitoring, Evaluation & Learning (MEL)",
    description:
      "Providing robust MEL systems to strengthen accountability, learning, and performance across programs.",
    icon: "building",
    color: "bg-purple-600", // Purple for evaluation & structure

    detailedOverview:
      "We design and implement MEL frameworks that enable organizations to track progress, extract insights, and improve program effectiveness.",

    highlights: [
      "Theory of Change development",
      "Baseline, midline, and endline evaluations",
      "Performance monitoring systems",
      "Learning agenda design and facilitation",
    ],

    methodology: {
      title: "Our MEL Process",
      steps: [
        "Understanding program goals and context",
        "Developing MEL tools and frameworks",
        "Data collection and validation",
        "Analysis and learning synthesis",
        "Reporting and adaptive-management support",
      ],
    },

    caseStudies: [
      {
        title: "Youth Employability Program Evaluation",
        description:
          "Conducted a multi-phase evaluation for a national workforce-development initiative.",
        impact:
          "Results improved program targeting and informed donor funding extensions.",
      },
    ],

    relatedServices: [
      "capacity-development",
      "economic-research",
      "policy-advisory",
    ],
  },

  {
    id: "market-research",
    title: "Feasibility Studies",
    description:
      "In-depth feasibility studies supporting investment, expansion, and strategic decisions.",
    icon: "globe",
    color: "bg-red-600", // Red for market energy & global reach

    detailedOverview:
      "Our market research provides investors, organizations, and entrepreneurs with accurate insights to guide strategic planning and operational decisions.",

    highlights: [
      "Market opportunity assessments",
      "Demand & supply analysis",
      "Financial feasibility modeling",
      "Consumer behavior and segmentation studies",
    ],

    methodology: {
      title: "Our Market-Analysis Approach",
      steps: [
        "Context and market-system understanding",
        "Data collection (surveys, interviews, secondary sources)",
        "Competitor and value-chain analysis",
        "Financial and risk modeling",
        "Feasibility recommendations",
      ],
    },

    caseStudies: [
      {
        title: "Fintech Market Entry Study",
        description:
          "Evaluated market readiness, regulatory frameworks, and customer-segment behavior for a regional fintech startup.",
        impact:
          "Supported investment decisions and guided the client’s market-entry roadmap.",
      },
    ],

    relatedServices: [
      "economic-research",
      "policy-advisory",
      "capacity-development",
    ],
  },

  {
    id: "data-analytics",
    title: "Data & Advanced Analytics",
    description:
      "Applying modern data science techniques to drive insights, automation, and smarter decision-making.",
    icon: "line-chart",
    color: "bg-amber-600", // Amber (yellow-600 equiv) for data insights; note: Tailwind uses "amber" not "yellow" for this shade

    detailedOverview:
      "We help organizations harness the power of data through modern analytics, visualization, and predictive modeling.",

    highlights: [
      "Predictive modeling and forecasting",
      "Dashboard development",
      "Data engineering and cleaning",
      "Cloud-based analytics solutions",
    ],

    methodology: {
      title: "Our Data-Analytics Approach",
      steps: [
        "Data audit and systems mapping",
        "Data engineering & preparation",
        "Analytics modeling and experimentation",
        "Visualization and reporting",
        "Training and adoption support",
      ],
    },

    caseStudies: [
      {
        title: "Health Data Predictive Model",
        description:
          "Built a predictive model to forecast health-facility demand for a national health agency.",
        impact: "Improved planning accuracy and optimized resource allocation.",
      },
    ],

    relatedServices: ["economic-research", "mel", "market-research"],
  },
];
