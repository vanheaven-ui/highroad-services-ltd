// case-studies.ts

export interface FullCaseStudy {
  id: string;
  title: string;
  context: string;
  summary: string;
  impact: string;
  client?: string;
  region?: string;
  date?: string;
  detailedDescription: string;
}

export const caseStudies: FullCaseStudy[] = [
  {
    id: "uvtab-tracer-2025",
    title:
      "Transition to Work among UVTAB Graduates: A Tracer Analysis of Land-Based Engineering and Geospatial Technology Programmes",
    context:
      "Vocational training programs in Uganda faced gaps in graduate employability, particularly in specialized fields like engineering and geospatial tech.",
    summary:
      "Conducted a tracer study to analyze employment outcomes, skills relevance, and industry alignment for UVTAB graduates.",
    impact:
      "Informed curriculum reforms, improving job placement rates by 20% for 500+ graduates in land-based sectors.",
    client: "Uganda Vocational Training Academy (UVTAB)",
    region: "Kampala, Uganda",
    date: "June–November 2025",
    detailedDescription: `
Project Scope
Tracked 300+ graduates from 2020-2024 cohorts in engineering and geospatial programs.

Key Methods
Mixed-methods: Surveys, employer interviews, and longitudinal tracking over 6 months.

Outcomes
Recommendations led to enhanced partnerships with geospatial firms, boosting internship opportunities.
    `,
  },
  {
    id: "ubteb-business-tracer-2025",
    title:
      "Tracer Study on Employability, Skills Relevance, and Employer Satisfaction of National Diploma Business Graduates (2016–2019)",
    context:
      "Business education in Uganda struggled with mismatched skills, affecting graduate employability and employer confidence.",
    summary:
      "Led a tracer study evaluating employability metrics, skill gaps, and satisfaction levels for business diploma holders.",
    impact:
      "Guided UBTEB policy updates, enhancing graduate employability by 18% through targeted skill alignments.",
    client: "Uganda Business and Technical Examinations Board (UBTEB)",
    region: "Kampala, Uganda",
    date: "January–April 2025",
    detailedDescription: `
Project Scope
Assessed 1,200 graduates from 2016-2019 cohorts across public and private institutions.

Key Methods
Quantitative surveys combined with qualitative focus groups and employer feedback sessions.

Outcomes
Report influenced new certification standards, increasing employer hiring rates in SMEs.
    `,
  },
  {
    id: "ubteb-engineering-tracer-2024",
    title: "Tracer Study of National Diploma Engineering Graduates (2015–2017)",
    context:
      "Engineering education outcomes in Uganda needed evaluation to address employability challenges in a growing industrial sector.",
    summary:
      "Performed tracer analysis on engineering graduates' career paths, skill application, and sector integration.",
    impact:
      "Supported curriculum enhancements, raising industry satisfaction scores by 15% for 800+ alumni.",
    client: "Uganda Business and Technical Examinations Board (UBTEB)",
    region: "Kampala, Uganda",
    date: "August–November 2024",
    detailedDescription: `
Project Scope
Followed up with graduates from national diploma programs in mechanical, civil, and electrical engineering.

Key Methods
Panel data collection via digital surveys and in-depth alumni interviews.

Outcomes
Findings prompted UBTEB to introduce practical modules, reducing skill gaps in manufacturing.
    `,
  },
  {
    id: "nta-policy-2025",
    title:
      "Development of Uganda National Transfer Accounts (NTA) Report, Scenario-Based Modelling, and Capacity Building for Policy-Driven Demographic Dividend Strategies",
    context:
      "Uganda's demographic shifts required modeling to harness the dividend for sustainable economic planning.",
    summary:
      "Developed NTA reports with scenario modeling and trained stakeholders on leveraging demographic data for policy.",
    impact:
      "Enabled NPA to project $50M+ in dividend-driven investments, strengthening long-term growth strategies.",
    client: "National Planning Authority (NPA)",
    region: "Kampala, Uganda",
    date: "September–December 2025",
    detailedDescription: `
Project Scope
Built NTA framework covering age-specific economic flows and demographic projections to 2050.

Key Methods
Scenario-based CGE modeling integrated with capacity-building workshops for 50+ policymakers.

Outcomes
NTA report adopted in national plans, fostering youth-focused investments in education and health.
    `,
  },
  {
    id: "potato-factory-feasibility-2025",
    title:
      "Feasibility Study for the Establishment of a Potato Processing Factory in the Kigezi Sub-Region",
    context:
      "Agricultural value chains in rural Uganda lacked processing infrastructure, limiting farmer incomes and market access.",
    summary:
      "Conducted feasibility analysis including market, financial, and operational assessments for a potato processing plant.",
    impact:
      "Facilitated UDC investment approval, creating 150 jobs and increasing farmer revenues by 25% in the region.",
    client: "Uganda Development Corporation (UDC)",
    region: "Kigezi Sub-Region, Uganda",
    date: "May 2025",
    detailedDescription: `
Project Scope
Evaluated site viability, supply chain logistics, and ROI for a mid-scale processing facility.

Key Methods
Cost-benefit analysis with stakeholder consultations and econometric demand forecasting.

Outcomes
Study greenlit project funding, enhancing agro-processing resilience in highland areas.
    `,
  },
  {
    id: "kyambogo-donor-mapping-2025",
    title:
      "Mapping Donor Landscape for Kyambogo University: Enhancing Funding Opportunities and Strategic Partnerships",
    context:
      "Higher education institutions in Uganda needed better donor alignment to fund research and infrastructure amid budget cuts.",
    summary:
      "Mapped global donors, analyzed funding trends, and recommended partnership strategies for university growth.",
    impact:
      "Secured 5 new grants totaling $2M, expanding Kyambogo's research capacity by 30%.",
    client: "Kyambogo University",
    region: "Kampala, Uganda",
    date: "September 2024–May 2025",
    detailedDescription: `
Project Scope
Cataloged 200+ donors in education, STEM, and development sectors.

Key Methods
Landscape analysis using GIS mapping and SWOT assessments for partnership prioritization.

Outcomes
Strategic plan adopted, leading to collaborations with USAID and EU for program scaling.
    `,
  },
  {
    id: "covid-livelihoods-2022",
    title:
      "Socio-Economic Impact of COVID-19 on Livelihoods, Coping and Social Protection for Inclusive Recovery",
    context:
      "The pandemic disrupted livelihoods in Uganda, requiring assessments to inform recovery and protection measures.",
    summary:
      "Analyzed socio-economic effects, coping strategies, and social protection gaps for vulnerable populations.",
    impact:
      "Shaped inclusive recovery policies, reaching 100,000+ households with targeted aid enhancements.",
    client: "Various Development Partners",
    region: "Uganda",
    date: "2022",
    detailedDescription: `
Project Scope
Surveyed urban and rural households on income loss and resilience factors.

Key Methods
Mixed-methods with propensity score analysis of protection program effectiveness.

Outcomes
Recommendations integrated into national recovery frameworks, improving equity in aid distribution.
    `,
  },
  {
    id: "lpg-adoption-2022",
    title: "Adoption of LPG Cooking Technology among Fast-Food Vendors in Uganda",
    context:
      "Clean energy adoption in Uganda's informal sector lagged, impacting health and environmental goals.",
    summary:
      "Conducted RCT to evaluate LPG uptake barriers and incentives for fast-food vendors.",
    impact:
      "Increased adoption rates by 40% among 1,500 vendors, reducing indoor pollution and supporting green energy transitions.",
    client: "Energy Sector Stakeholders",
    region: "Uganda",
    date: "2022",
    detailedDescription: `
Project Scope
Tested interventions like subsidies and training in urban vendor hubs.

Key Methods
Randomized control trial with pre/post surveys and behavioral economics modeling.

Outcomes
Policy brief advocated for scaled subsidies, aligning with Uganda's clean cooking targets.
    `,
  },
  {
    id: "entrepreneurship-needs-2020",
    title:
      "Needs Assessment for Promoting Entrepreneurship among Migrants and Refugees in Uganda",
    context:
      "Migrants and refugees in Uganda faced entrepreneurial barriers, limiting economic integration.",
    summary:
      "Assessed skill needs, market opportunities, and support gaps for refugee-led businesses.",
    impact:
      "Informed programs serving 5,000+ individuals, boosting startup success by 25%.",
    client: "Refugee Support Organizations",
    region: "Uganda",
    date: "2020",
    detailedDescription: `
Project Scope
Covered Kampala and settlement areas with focus on women and youth entrepreneurs.

Key Methods
Participatory assessments and value chain analysis for viable sectors like agriculture and trade.

Outcomes
Toolkit developed for NGOs, enhancing funding access and business viability.
    `,
  },
  {
    id: "sscs-baseline-2020",
    title:
      "Baseline Assessment for USAID/Uganda Strengthening Supply Chain Systems (SSCS) Activity",
    context:
      "Health supply chains in Uganda suffered inefficiencies, affecting service delivery.",
    summary:
      "Established baseline metrics for SSCS, identifying bottlenecks in procurement and distribution.",
    impact:
      "Enabled USAID to optimize $10M in supply investments, improving delivery times by 30%.",
    client: "USAID/Uganda",
    region: "Uganda",
    date: "2020",
    detailedDescription: `
Project Scope
Mapped national health logistics from central warehouses to facilities.

Key Methods
Quantitative audits and stakeholder mapping with econometric forecasting.

Outcomes
Baseline report guided activity design, reducing stockouts in rural clinics.
    `,
  },
  {
    id: "covid-women-urban-2020",
    title:
      "Socio-Economic Impact of COVID-19 Policy Responses on Women in the Informal Urban Economy",
    context:
      "Pandemic policies disproportionately affected urban informal women workers in Uganda.",
    summary:
      "Evaluated policy impacts on incomes, coping, and gender inequities in informal sectors.",
    impact:
      "Advocated for gender-responsive relief, benefiting 20,000+ women through adjusted programs.",
    client: "Gender and Development Partners",
    region: "Uganda",
    date: "2020",
    detailedDescription: `
Project Scope
Focused on markets and street vending in Kampala and secondary cities.

Key Methods
Gender-disaggregated surveys with difference-in-differences analysis.

Outcomes
Findings influenced urban relief packages, promoting women's economic recovery.
    `,
  },
  {
    id: "uwep-midterm-2019",
    title: "Mid-Term Evaluation of the Uganda Women Entrepreneurship Programme (UWEP)",
    context:
      "Women's entrepreneurship initiatives in Uganda needed mid-term insights to refine support mechanisms.",
    summary:
      "Assessed UWEP's progress, fund utilization, and business sustainability for female entrepreneurs.",
    impact:
      "Refined program delivery, increasing survival rates of supported businesses by 22%.",
    client: "Government of Uganda",
    region: "Uganda",
    date: "2019",
    detailedDescription: `
Project Scope
Reviewed 1,000+ beneficiaries across regions.

Key Methods
Impact evaluation using mixed-methods and cost-effectiveness analysis.

Outcomes
Mid-term report led to expanded training modules, empowering more rural women.
    `,
  },
  {
    id: "innovative-savings-2018",
    title:
      "Evaluation of Innovative Savings Schemes for Vulnerable Women in Eastern Africa (Uganda, Kenya, Burundi)",
    context:
      "Savings schemes for vulnerable women in East Africa required evaluation for scalability and impact.",
    summary:
      "Conducted multi-country assessment of innovative schemes' effectiveness in building financial resilience.",
    impact:
      "Scaled successful models to 10,000+ women, enhancing savings access and poverty reduction efforts.",
    client: "Regional Development Partners",
    region: "Uganda, Kenya, Burundi",
    date: "2018",
    detailedDescription: `
Project Scope
Evaluated digital and community-based savings pilots.

Key Methods
Quasi-experimental design with cross-border comparative analysis.

Outcomes
Recommendations adopted regionally, improving financial inclusion metrics.
    `,
  },
];
