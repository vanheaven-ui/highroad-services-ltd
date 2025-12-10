export interface FullCaseStudy {
  title: string;
  context: string;
  summary: string;
  impact: string;
  client?: string; // Additional detail
  region?: string; // Additional detail
  date?: string; // Additional detail
  detailedDescription: string; // The full content
}

export const caseStudies: FullCaseStudy[] = [
  {
    title: "Baseline Surveys and Impact Evaluations for UBOS and USAID",
    context:
      "Uganda's development programs required robust baseline data to measure progress and evaluate long-term impacts amid resource constraints.",
    summary:
      "Led comprehensive research and consultancy, conducting baseline surveys and impact evaluations to assess program effectiveness and guide adjustments.",
    impact:
      "Informed evidence-based policy tweaks, enhancing program reach and efficiency for thousands of beneficiaries.",
    client: "Uganda Bureau of Statistics (UBOS) & USAID",
    region: "Uganda",
    date: "2023",
    detailedDescription: `
      Project Scope
      Focused on key national development initiatives, integrating field data collection with econometric analysis to establish clear metrics.

      Key Methods
      Employed mixed-methods approach: quantitative surveys of 5,000+ households and qualitative stakeholder interviews.

      Outcomes
      Delivered actionable reports that directly influenced USAID funding allocations, resulting in a 15% increase in targeted interventions.
    `,
  },
  {
    title: "Public Investment Appraisal and Policy Analysis with NPA and AERC",
    context:
      "National planning bodies needed tools to evaluate investment viability and refine policies for sustainable growth in a volatile economy.",
    summary:
      "Collaborated on appraisals using cost-benefit analysis and policy modeling to recommend optimized public spending strategies.",
    impact:
      "Shaped national investment frameworks, unlocking $20M+ in efficient funding for infrastructure projects.",
    client:
      "National Planning Authority (NPA) & African Economic Research Consortium (AERC)",
    region: "Uganda",
    date: "2022",
    detailedDescription: `
      Project Scope
      Analyzed 10+ major public investments across sectors like energy and transport.

      Key Methods
      Applied Computable General Equilibrium (CGE) models to simulate policy scenarios and economic ripple effects.

      Outcomes
      Policy briefs adopted by NPA led to revised budgeting guidelines, reducing wasteful spending by 12%.
    `,
  },
  {
    title:
      "Capacity Building and Tracer Studies for Kyambogo University and IDRC",
    context:
      "Educational institutions and research bodies sought to upskill staff in data analytics amid growing demands for evidence-based education reforms.",
    summary:
      "Provided targeted training and tracer studies on AI, data analytics, and econometrics to build institutional capabilities.",
    impact:
      "Equipped 200+ stakeholders with practical skills, boosting research output by 25% in participating programs.",
    client: "Kyambogo University, UBTEB & IDRC",
    region: "Uganda",
    date: "2024",
    detailedDescription: `
      Project Scope
      Designed workshops and follow-up tracer studies for educators and policymakers.

      Key Methods
      Hands-on sessions with tools like Python and Stata, followed by 6-month impact tracking.

      Outcomes
      Tracer studies revealed sustained application, leading to new curriculum integrations in data-driven decision-making.
    `,
  },
  {
    title: "Multi-Country Impact Evaluations Across East and Southern Africa",
    context:
      "Development programs in multiple nations faced challenges in proving causal effects, hindering scale-up and funding renewal.",
    summary:
      "Designed and led evaluations using propensity score matching and difference-in-differences to assess socio-economic outcomes.",
    impact:
      "Validated program efficacy, supporting $15M in continued funding and refinements for 50,000+ beneficiaries.",
    client: "Various (e.g., UNICEF, OPM)",
    region: "Uganda, Kenya, Rwanda, Zambia, Malawi",
    date: "2023",
    detailedDescription: `
      Project Scope
      Covered initiatives like DRDIP, NUSAF3, and Cash+ evaluations across five countries.

      Key Methods
      Quasi-experimental designs with panel data analysis for robust causality.

      Outcomes
      Reports influenced mid-term adjustments, improving service delivery metrics by 18%.
    `,
  },
  {
    title: "Uganda Economic Update and PEFA Assessment Contributions",
    context:
      "Fiscal policy advisors required updated economic insights and public financial management diagnostics to support reforms.",
    summary:
      "Contributed macro-fiscal analysis and advisory on debt toolkits, aiding the 2022 Economic Update and PEFA assessment.",
    impact:
      "Enhanced Uganda's PFM scoring, attracting $10M+ in EU/Norway/Denmark aid for reforms.",
    client: "EU, Norway, Denmark & Government of Uganda",
    region: "Uganda",
    date: "2022",
    detailedDescription: `
      Project Scope
      Focused on debt sustainability and expenditure reviews for the annual update.

      Key Methods
      Panel data econometrics and scenario modeling for fiscal projections.

      Outcomes
      Technical inputs improved the PEFA score by two points, bolstering international credibility.
    `,
  },
  {
    title: "SDG Financing Diagnostics and Africa SDG Index",
    context:
      "African institutions needed diagnostics to align financing with SDGs, amid gaps in tracking and resource allocation.",
    summary:
      "Led diagnostics and authored the Africa SDG Index/Dashboards, developing indicators for multi-country SDG progress.",
    impact:
      "Guided $30M+ in targeted SDG investments, improving continental reporting frameworks.",
    client: "SDG Center for Africa",
    region: "Africa (Multi-Country)",
    date: "2024",
    detailedDescription: `
      Project Scope
      Covered 54 countries, focusing on financing gaps in health, education, and climate.

      Key Methods
      SMART indicator development with mixed-methods data aggregation.

      Outcomes
      Dashboards adopted by AU, enabling better donor coordination and progress tracking.
    `,
  },
  {
    title:
      "Baseline, Midline, and Endline Evaluations for TradeMark East Africa",
    context:
      "Trade facilitation programs required ongoing evaluation to ensure benefits reached small traders and farmers.",
    summary:
      "Led multi-phase evaluations on trade, agriculture, and health impacts using experimental designs.",
    impact:
      "Optimized interventions, increasing cross-border trade volumes by 22% for 8,000+ participants.",
    client: "TradeMark East Africa, UNDP & USAID",
    region: "East Africa",
    date: "2023",
    detailedDescription: `
      Project Scope
      Tracked outcomes across EAC integration initiatives.

      Key Methods
      Quasi-experimental surveys at baseline, midline, and endline stages.

      Outcomes
      Evidence-based tweaks reduced bottlenecks, enhancing market access.
    `,
  },
  {
    title: "AIRTEA Agricultural Technology Transfer Evaluation",
    context:
      "Agricultural tech adoption in East Africa lagged due to unproven transfer mechanisms and farmer barriers.",
    summary:
      "Led evaluations of tech transfer in Kenya, Rwanda, and Uganda, assessing adoption and sustainability.",
    impact:
      "Boosted tech uptake by 30%, benefiting 12,000+ farmers through refined extension models.",
    client: "AIRTEA & SNV",
    region: "Kenya, Rwanda, Uganda",
    date: "2024",
    detailedDescription: `
      Project Scope
      Included SNV Smallholder Dairy Programme evaluations.

      Key Methods
      Mixed-methods with econometric modeling of adoption determinants.

      Outcomes
      Recommendations scaled successful pilots, improving yields by 18%.
    `,
  },
];
