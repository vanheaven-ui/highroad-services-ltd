"use client";

import TeamCard, { TeamMember } from "@/components/experts/TeamCard";
import { ExpertModalProvider } from "@/components/experts/ExpertModalProvider";
import { FullExpertProfile } from "@/components/experts/ExpertProfileModal";

import { Briefcase, Trophy, Zap, Globe, Cpu, Handshake } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

/* ----------------------------------------------
 * TEAM MEMBERS DATA
---------------------------------------------- */
const teamMembersData: FullExpertProfile[] = [
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
    // NOTE: Image path needs to be added by the client
    imageSrc: "/images/norman.png",
    fullBio:
      "He has undertaken extensive training and applied analytical methods in research, consultancy assignments, policy advisory work and capacity building. His work further includes macroeconomics, public investment appraisal, baseline surveys, monitoring and evaluation, environmental and social impact assessment, human capacity development, and policy analysis.\n\nHe has demonstrated strong ability in conducting tracer studies, financial and economic analysis of projects, and feasibility assessments, as well as training stakeholders in the application of artificial intelligence, data analytics and econometrics.\n\nDr. Tumwine has participated in and led research and consultancy projects in collaboration with several national and international organisations, including the Uganda Bureau of Statistics (UBOS), United States Agency for International Development (USAID), ActionAid, Uganda Development Corporation (UDC), National Planning Authority (NPA), Kyambogo University, Uganda Business and Technical Examinations Board (UBTEB), African Economic Research Consortium (AERC), Trust Africa, and the International Development Research Centre (IDRC), among others.\n\nHis areas of interest span education, agriculture, energy and climate change, macroeconomic modelling, impact evaluation, policy analysis, and the use of advanced analytical tools to support evidence-based decision-making.",
    keyProjects: [
      "Led research and consultancy projects with Uganda Bureau of Statistics (UBOS) and USAID on baseline surveys and impact evaluations.",
      "Collaborated with National Planning Authority (NPA) and African Economic Research Consortium (AERC) on public investment appraisal and policy analysis.",
      "Provided capacity building and tracer studies for Kyambogo University, UBTEB, and IDRC on data analytics and econometrics.",
    ],
  },
  {
    name: "Enock Twinoburyo Nyorekwa, PhD",
    title: "Research Fellow",
    focus:
      "Public Policy Analysis, Impact Evaluations & Public Financial Management",
    qualifications:
      "PhD in Economics, University of South Africa; MA in Economics, University of Dar es Salaam; BA in Economics, Makerere University",
    bioSummary:
      "Dr. Enock Nyorekwa Twinoburyo is a distinguished Economist with extensive regional experience in public policy analysis, macroeconomic research, impact evaluations, public financial management, public investment appraisal, and development advisory services. With over 17 years of professional engagement across East and Southern Africa, he combines empirical rigor, policy insight, and practical development expertise.",
    email: "enock.nyorekwa@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/enok.png", // Retained original imageSrc
    fullBio:
      "His work spans macroeconomic stability, fiscal policy, public debt management, poverty reduction, and real-time monitoring of service delivery systems. Dr. Twinoburyo's technical strengths include advanced econometric modeling, panel data analysis, mixed-methods research, cost–benefit and cost-effectiveness analysis, and financial and economic appraisal of public investments. He has specialized training in PEFA, Public Financial Management, Governance of Extractives, Aid Effectiveness, and Public Investment Appraisal.\n\nHe has designed and led major impact evaluations and socio-economic studies across Uganda, Kenya, Rwanda, Zambia, and Malawi, applying robust methods such as propensity score matching, difference-in-differences, and quasi-experimental designs. His evaluation portfolio includes DRDIP, NUSAF3, SVD socio-economic assessments, AIRTEA regional surveys, and UNICEF/OPM Cash+ evaluations. He also supported macro-fiscal analysis for development partners, contributed to the Uganda Economic Update (2022), developed public debt toolkits, and served in advisory roles with the EU, Norway, and Denmark, including technical contributions to the Uganda PEFA 2022 assessment.\n\nDr. Twinoburyo provides advisory expertise on public investment management, PFM reforms, MTEF assessments, expenditure reviews, and fiduciary risk analysis. His professional strength lies in translating complex evidence into actionable insights, working with governments and development partners, and leading multi-country, multi-disciplinary teams to deliver high-quality outputs.",
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
      "Dr. Richard Sebaggala is an applied economist, researcher and academic with extensive experience in policy-oriented research, impact evaluation and quantitative economic analysis. He lectures at Uganda Christian University and Makerere University Business School.",
    email: "richard.sebaggala@highroadservicesltd.com",
    linkedinUrl: "#",
    imageSrc: "/images/richard.png", // Retained original imageSrc
    fullBio:
      "His expertise spans applied econometrics, development, health and agricultural economics, trade policy and institutional analysis, using experimental and quasi-experimental designs, survey analytics and large-scale datasets to inform policy and strengthen evidence-based decision-making.\n\nHe has led research and consultancy assignments for organisations including TradeMark East Africa, UNDP, UNCTAD, USAID, CARE International, ICRW, AERC, IDRC, DFID and several government ministries. His contributions cover baseline studies, midline and endline evaluations, strategy development, policy impact assessments and socio-economic diagnostics across trade, health, gender, social protection, agriculture and migration.\n\nDr. Sebaggala has also held leadership roles, including Head of Department (Economics and Statistics) and Head of the Oil and Gas Leadership Institute at Uganda Christian University. His publications include peer-reviewed journal articles, book chapters and policy papers.\n\nHis areas of interest include development policy analysis, governance and corruption, health and agricultural economics, trade and industrial policy, impact evaluation and the use of quantitative tools to support evidence-based decision-making.",
    keyProjects: [
      "Led baseline, midline, and endline evaluations for TradeMark East Africa, UNDP, and USAID on trade, agriculture, and health.",
      "Conducted policy impact assessments and strategy development for UNCTAD, CARE International, ICRW, and AERC on gender, social protection, and migration.",
      "Socio-economic diagnostics and institutional analysis for IDRC, DFID, and government ministries across development and trade policy.",
    ],
  },
  {
    name: "Ambrose Rwaheru Aheise, PhD",
    title: "Research Fellow",
    focus: "Economic Analysis, Impact Evaluation & Agricultural Economics",
    qualifications:
      "PhD in Economics, University of Dar es Salaam; MA & BA in Economics, Makerere University",
    bioSummary:
      "Dr. Ambrose Rwaheru Aheisibwe is a Development Economist with over 15 years of experience in economic analysis, applied research, project management and socio-economic impact evaluation across East and Southern Africa. His work spans data analysis, monitoring and evaluation, agricultural economics, climate resilience and results-based management.",
    email: "ambrose.aheise@highroadservicesltd.com",
    linkedinUrl: "#",
    // NOTE: Image path needs to be added by the client
    imageSrc: "/images/ambrose.png",
    fullBio:
      "He has served as Lecturer and Consultant at the Uganda Management Institute, teaching courses in data analytics, project management, monitoring and evaluation and impact evaluation. He has supervised postgraduate and doctoral research, published widely and mentored early-career researchers. He has held senior leadership roles at the SDG Center for Africa, including Programmes Director, Regional Director and SDGs Advisor, where he coordinated multi-country initiatives on food systems, agricultural innovation, climate adaptation and SDG monitoring and reporting.\n\nDr. Aheisibwe has led and contributed to major evaluations and impact assessments. These include the AIRTEA agricultural technology transfer evaluation in Kenya, Rwanda and Uganda; the SNV Smallholder Dairy Programme in Kigezi; and the ATAAS Cooperative Strengthening Programme assessing governance, sustainability and technology adoption. His consultancy experience further includes IDRC-funded GroW Project evaluations in Rwanda, cash transfer and socio-economic assessments with UNICEF, evaluations under DRDIP and NUSAF3, SDG coordination support in Lesotho, WASH systems analysis and validation of APRM Baseline Studies.\n\nHis areas of expertise include applied econometric modelling, agricultural value chains, climate resilience, social protection analytics, SDG monitoring and capacity strengthening. Dr. Aheisibwe is proficient in STATA, SPSS, R, Python, EViews, Power BI and Tableau, which he uses to transform data into insights that inform policy formulation, strategic planning and sustainable development.",
    keyProjects: [
      "Led AIRTEA agricultural technology transfer evaluation in Kenya, Rwanda, and Uganda; and the SNV Smallholder Dairy Programme in Kigezi.",
      "Contributed to the ATAAS Cooperative Strengthening Programme, IDRC-funded GroW Project evaluations in Rwanda, and UNICEF cash transfer assessments.",
      "Evaluations under DRDIP and NUSAF3, SDG coordination in Lesotho, WASH systems analysis, and APRM Baseline Studies validation.",
    ],
  },
];

/* ----------------------------------------------
 * FRAMER MOTION VARIANTS (NO CHANGE)
---------------------------------------------- */
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const slideUpItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ----------------------------------------------
 * MAIN PAGE CONTENT (NO CHANGE)
---------------------------------------------- */
function ExpertsPageContent(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. Narrative Header */}
      <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-primary leading-snug">
            OUR TEAM
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto font-body text-gray-700">
            HighRoad Services Ltd is led by specialist consultants whose{" "}
            <strong>deep sector experience</strong> and advanced training
            directly translate into actionable, high-impact strategy and policy
            recommendations.
          </p>

          <hr className="w-1/4 mx-auto mt-6 border-t border-primary/20" />
        </motion.div>
      </section>

      {/* 2. Core Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold">
            Focused Expertise. Proven Results.
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Our Core Leadership
          </h3>
          <p className="mt-2 text-gray-600 font-body">
            Click any profile to view full expertise, track record, and key
            projects.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembersData.map((member) => (
            <motion.div key={member.name} variants={slideUpItemVariants}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/careers"
            className="px-8 py-3 bg-accent-gold text-primary font-subheading font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Explore Career Opportunities →
          </Link>
        </motion.div>
      </section>

      {/* 3. Strategic Advantage */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-subheading font-semibold uppercase tracking-widest text-accent-gold">
              Methodology. Experience. Results.
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
              The HighRoad Strategic Advantage
            </h3>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto font-body">
              Our expertise is backed by a framework that ensures analytical
              rigor and reliable, implementable outcomes.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Pillar 1 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Cpu className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Advanced Analytical Rigor
              </h4>
              <p className="text-gray-700 font-body">
                We utilize{" "}
                <strong>Ph.D.-level econometrics and data science</strong> to
                ensure every finding is statistically robust and validated
                against global academic standards.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Globe className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Global Standards, Local Context
              </h4>
              <p className="text-gray-700 font-body">
                Our team blends international best practice with{" "}
                <strong>deep regional knowledge</strong> across the continent.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-accent-gold/70"
              variants={slideUpItemVariants}
            >
              <Handshake className="w-8 h-8 text-accent-gold mb-4" />
              <h4 className="text-xl font-heading font-bold text-primary mb-3">
                Strategy Built for Implementation
              </h4>
              <p className="text-gray-700 font-body">
                We don’t just deliver reports; we deliver{" "}
                <strong>clear, funded roadmaps</strong> designed for immediate
                implementation and measurable success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

/* ----------------------------------------------
 * EXPORT WITH PROVIDER WRAPPER (NO CHANGE)
---------------------------------------------- */
export default function ExpertsPage() {
  return (
    <ExpertModalProvider>
      <ExpertsPageContent />
    </ExpertModalProvider>
  );
}
