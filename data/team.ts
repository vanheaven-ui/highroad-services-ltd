export interface TeamMember {
  name: string;
  title: string;
  focus: string;
  qualifications: string;
  bioSummary: string;
  email: string;
  linkedinUrl: string;
  imageSrc?: string;
}

export interface FullExpertProfile extends TeamMember {
  fullBio: string; // Detailed section for the modal
  keyProjects: string[]; // List of project highlights
  imageSrc: string; // Profile picture URL
}

export const teamMembersData: FullExpertProfile[] = [
  {
    name: "Geoffrey Norman Tumwine, PhD",
    title: "Founder & Team Leader",
    focus: "Impact Evaluation, Feasibility Studies & Macroeconomic Modelling",
    qualifications:
      "PhD in Economics, University of Dar es Salaam; MA in Economics & BSc in Economics and Mathematics, Makerere University",
    bioSummary:
      "Dr. Tumwine is an economist with extensive experience in teaching, research and consultancy. His expertise spans impact evaluation, feasibility studies, cost benefit analysis, econometric modelling, Computable General Equilibrium (CGE) and Dynamic Stochastic General Equilibrium (DSGE) modelling, Social Accounting Matrix (SAM) and National Transfer Accounts (NTA).",
    email: "geoffrey.tumwine@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/norman.png",
    fullBio:
      "He has undertaken extensive training and applied analytical methods in research, consultancy assignments, policy advisory work and capacity building. His work further includes macroeconomics, public investment appraisal, baseline surveys, monitoring and evaluation, environmental and social impact assessment, human capacity development, and policy analysis. He has demonstrated strong ability in conducting tracer studies, financial and economic analysis of projects, and feasibility assessments, as well as training stakeholders in the application of artificial intelligence, data analytics and econometrics.\n\nDr. Tumwine has participated in and led research and consultancy projects in collaboration with several national and international organisations, including the Uganda Bureau of Statistics (UBOS), United States Agency for International Development (USAID), ActionAid, Uganda Development Corporation (UDC), National Planning Authority (NPA), Kyambogo University, Uganda Business and Technical Examinations Board (UBTEB), African Economic Research Consortium (AERC), Trust Africa, and the International Development Research Centre (IDRC), among others.\n\nHis areas of interest span education, agriculture, energy and climate change, macroeconomic modelling, impact evaluation, policy analysis, and the use of advanced analytical tools to support evidence-based decision-making.",
    keyProjects: [
      "Led research and consultancy projects with Uganda Bureau of Statistics (UBOS) and USAID on baseline surveys and impact evaluations.",
      "Collaborated with National Planning Authority (NPA) and African Economic Research Consortium (AERC) on public investment appraisal and policy analysis.",
      "Provided capacity building and tracer studies for Kyambogo University, UBTEB, and IDRC on data analytics and econometrics.",
    ],
  },
  {
    name: "Enock Nyorekwa Twinoburyo, PhD",
    title: "Co-founder | Research Fellow",
    focus:
      "Public Policy Analysis, Impact Evaluations & Public Financial Management",
    qualifications:
      "PhD in Economics, University of South Africa; MA in Economics, University of Dar es Salaam; BA in Economics, Makerere University",
    bioSummary:
      "Dr. Enock Nyorekwa Twinoburyo is a distinguished Economist with extensive regional experience in public policy analysis, macroeconomic research, impact evaluations, public financial management, public investment appraisal, and development advisory services.",
    email: "enock.nyorekwa@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/enok.png",
    fullBio:
      "His work spans macroeconomic stability, fiscal policy, public debt management, poverty reduction, and real-time monitoring of service delivery systems. Dr. Twinoburyo’s technical strengths include advanced econometric modeling, panel data analysis, mixed-methods research, cost–benefit and cost-effectiveness analysis, and financial and economic appraisal of public investments. He has specialized training in PEFA, Public Financial Management, Governance of Extractives, Aid Effectiveness, and Public Investment Appraisal.\n\nHe has designed and led major impact evaluations and socio-economic studies across Uganda, Kenya, Rwanda, Zambia, and Malawi, applying robust methods such as propensity score matching, difference-in-differences, and quasi-experimental designs. His evaluation portfolio includes DRDIP, NUSAF3, SVD socio-economic assessments, AIRTEA regional surveys, and UNICEF/OPM Cash+ evaluations. He also supported macro-fiscal analysis for development partners, contributed to the Uganda Economic Update (2022), developed public debt toolkits, and served in advisory roles with the EU, Norway, and Denmark, including technical contributions to the Uganda PEFA 2022 assessment.\n\nDr. Twinoburyo provides advisory expertise on public investment management, PFM reforms, MTEF assessments, expenditure reviews, and fiduciary risk analysis. He has advised under FINMAP and JBSF, developed SMART indicators, strengthened frontline service delivery monitoring, and led SDG financing diagnostics at the SDG Center for Africa, including authorship of the Africa SDG Index and Dashboards. His professional strength lies in translating complex evidence into actionable insights, working with governments and development partners, and leading multi-country, multi-disciplinary teams to deliver high-quality outputs.",
    keyProjects: [
      "Designed and led major impact evaluations and socio-economic studies across Uganda, Kenya, Rwanda, Zambia, and Malawi.",
      "Contributed to the Uganda Economic Update (2022) and the Uganda PEFA 2022 assessment, serving in advisory roles with the EU, Norway, and Denmark.",
      "Led SDG financing diagnostics at the SDG Center for Africa, including authorship of the Africa SDG Index and Dashboards.",
    ],
  },
  {
    name: "Richard Sebaggala, PhD",
    title: "Research Fellow",
    focus: "Applied Econometrics, Development & Trade Policy Analysis",
    qualifications:
      "PhD in Applied Economics, University of Agder; MSc in Quantitative Economics & BA in Economics with Education, Makerere University",
    bioSummary:
      "Dr. Richard Sebaggala is an applied economist, researcher and academic with extensive experience in policy-oriented research, impact evaluation and quantitative economic analysis.",
    email: "richard.sebaggala@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/richard.png",
    fullBio:
      "His expertise spans applied econometrics, development, health and agricultural economics, trade policy and institutional analysis, using experimental and quasi-experimental designs, survey analytics and large-scale datasets to inform policy and strengthen evidence-based decision-making.\n\nHe has led research and consultancy assignments for organisations including TradeMark East Africa, UNDP, UNCTAD, USAID, CARE International, ICRW, AERC, IDRC, DFID and several government ministries. His contributions cover baseline studies, midline and endline evaluations, strategy development, policy impact assessments and socio-economic diagnostics across trade, health, gender, social protection, agriculture and migration.\n\nDr. Sebaggala has also held leadership roles, including Head of Department (Economics and Statistics) and Head of the Oil and Gas Leadership Institute at Uganda Christian University. His publications include peer-reviewed journal articles, book chapters and policy papers, and his current interests focus on applying artificial intelligence and advanced analytics in research, policy analysis and higher education capacity building.\n\nHis areas of interest include development policy analysis, governance and corruption, health and agricultural economics, trade and industrial policy, impact evaluation and the use of quantitative tools to support evidence-based decision-making.",
    keyProjects: [
      "Led baseline, midline, and endline evaluations for TradeMark East Africa, UNDP, and USAID on trade, agriculture, and health.",
      "Conducted policy impact assessments and strategy development for UNCTAD, CARE International, ICRW, and AERC on gender, social protection, and migration.",
      "Socio-economic diagnostics and institutional analysis for IDRC, DFID, and government ministries across development and trade policy.",
    ],
  },
  {
    name: "Ambrose Rwaheru Aheisibwe, PhD",
    title: "Research Fellow",
    focus: "Economic Analysis, Impact Evaluation & Agricultural Economics",
    qualifications:
      "PhD in Economics, University of Dar es Salaam; MA & BA in Economics, Makerere University",
    bioSummary:
      "Dr. Ambrose Rwaheru Aheisibwe is a Development Economist with over 15 years of experience in economic analysis, applied research, project management and socio-economic impact evaluation across East and Southern Africa.",
    email: "ambrose.aheise@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/ambrose.png",
    fullBio:
      "He has served as Lecturer and Consultant at the Uganda Management Institute, teaching courses in data analytics, project management, monitoring and evaluation and impact evaluation. He has supervised postgraduate and doctoral research, published widely and mentored early-career researchers. He has held senior leadership roles at the SDG Center for Africa, including Programmes Director, Regional Director and SDGs Advisor, where he coordinated multi-country initiatives on food systems, agricultural innovation, climate adaptation and SDG monitoring and reporting.\n\nDr. Aheisibwe has led and contributed to major evaluations and impact assessments. These include the AIRTEA agricultural technology transfer evaluation in Kenya, Rwanda and Uganda, the SNV Smallholder Dairy Programme in Kigezi, and the ATAAS Cooperative Strengthening Programme assessing governance, sustainability and technology adoption. His consultancy experience further includes IDRC-funded GroW Project evaluations in Rwanda, cash transfer and socio-economic assessments with UNICEF, evaluations under DRDIP and NUSAF3, SDG coordination support in Lesotho, WASH systems analysis and validation of APRM Baseline Studies.\n\nHis areas of expertise include applied econometric modelling, agricultural value chains, climate resilience, social protection analytics, SDG monitoring and capacity strengthening. Dr. Aheisibwe is proficient in STATA, SPSS, R, Python, EViews, Power BI and Tableau, which he uses to transform data into insights that inform policy formulation, strategic planning and sustainable development.",
    keyProjects: [
      "Led AIRTEA agricultural technology transfer evaluation in Kenya, Rwanda, and Uganda; and the SNV Smallholder Dairy Programme in Kigezi.",
      "Contributed to the ATAAS Cooperative Strengthening Programme, IDRC-funded GroW Project evaluations in Rwanda, and UNICEF cash transfer assessments.",
      "Evaluations under DRDIP and NUSAF3, SDG coordination in Lesotho, WASH systems analysis, and APRM Baseline Studies validation.",
    ],
  },
  {
    name: "Irene Bayiyana, PhD",
    title: "Research Fellow",
    focus:
      "Agricultural Economics, Gender-Responsive Research & Impact Evaluation",
    qualifications:
      "PhD in Economics, University of Dar es Salaam; MSc in Agricultural & Applied Economics, Makerere University/University of Pretoria; BSc in Agriculture, Makerere University",
    bioSummary:
      "Dr. Irene Bayiyana is a Senior Research Officer, Agricultural Economist, and Gender responsive researcher. Her expertise spans market and behavioural intelligence, gender-responsive research and analysis, technology adoption, climate-smart agricultural systems, agribusiness and impact evaluation.",
    email: "irene_bayi@yahoo.com",
    linkedinUrl: "#",
    imageSrc: "/images/irene.jpg",
    fullBio:
      "With over ten years of research experience, Irene leads and contributes to multidisciplinary projects aimed at improving productivity, seed systems, and farmer livelihoods. She is widely recognized for integrating gender-transformative approaches with rigorous economic analysis, participatory methods, and applied research to inform breeding programs, policy processes, and value-chain investments. Irene dedicates 60% of her time to research, 10% to teaching, and 30% to outreach and stakeholder engagement.\n\nShe has undertaken specialized training in climate-smart agriculture, gender inclusion and analysis, impact pathway assessment, and project development. Her scholarship appears in reputable journals, including Frontiers in Sustainable Food Systems and Outlook on Agriculture, covering varietal adoption, seed systems strengthening, and innovations in smallholder market systems. Recent publications highlight gendered barriers to varietal replacement, determinants of improved cassava adoption, and seed system dynamics in maize and rice value chains.\n\nIrene is based at the National Crops Resources Research Institute (NaCRRI), NARO in Namulonge and can be reached at irene_bayi@yahoo.com or +256 752 930045.",
    keyProjects: [
      "Led multidisciplinary projects on productivity, seed systems, and farmer livelihoods with gender-transformative approaches.",
      "Contributed to publications in Frontiers in Sustainable Food Systems and Outlook on Agriculture on varietal adoption and seed systems.",
      "Integrated economic analysis and participatory methods for breeding programs, policy processes, and value-chain investments.",
    ],
  },
];
