import Image from "next/image";

// --- START: SVG Fallback Component ---
const FounderPlaceholder = ({ size = 400, color = "#F59E0B" }) => (
  // Tailwind classes for styling the SVG container
  <div
    className="rounded-lg shadow-xl bg-gray-100 flex items-center justify-center p-8 border-4 border-accentGold/50"
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full opacity-60"
    >
      {/* Professional Head */}
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      {/* Academic/Professional Touch (Book/Degree) */}
      <path d="M17.5 17.5 19 19l1.5-1.5" />
      <path d="M19 14v5.5M19 19h2" />
      <rect
        x="15"
        y="5"
        width="6"
        height="4"
        rx="1"
        ry="1"
        fill={color}
        className="opacity-10"
      />
    </svg>
  </div>
);
// --- END: SVG Fallback Component ---

// Flag to simulate the availability of the image
const hasFounderImage = false; // Set this to 'true' once the image file is confirmed to exist

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About HighRoad Services Ltd
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          Providing **evidence-based consultancy and research** in economics
          across Uganda and East Africa. Led by a PhD economist with decades of
          experience in public policy, development research, and strategic
          advisory.
        </p>
      </div>

      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-sm mx-auto md:mx-0">
          {hasFounderImage ? (
            <Image
              src="/founder.jpg" // replace with actual image
              alt="Founder of HighRoad Services Ltd"
              width={400}
              height={400}
              className="rounded-lg shadow-lg border-4 border-primary/10"
            />
          ) : (
            <FounderPlaceholder size={400} color="#1F2937" /> // Using primary color for consistency
          )}
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold text-primary">
            Dr. Norman Tumwine, PhD
          </h2>
          <p className="text-gray-700">
            Dr. Norman Tumwine is a university lecturer at Kyambogo University
            and has extensive experience in economic research, policy advisory,
            and consultancy. Having worked with PADRI and Research For
            Transformation Development (RTD), Dr. Norman Tumwine brings a deep
            understanding of African, Ugandan, and East African economic
            landscapes.
          </p>
          <p className="text-gray-700">
            His expertise covers research design, economic analysis, feasibility
            studies, and strategic advisory to public and private institutions.
            HighRoad Services Ltd was founded to provide **actionable insights**
            backed by rigorous evidence and cutting-edge research methodologies.
          </p>
        </div>
      </div>

      {/* Expertise / Core Strengths Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primary text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary">
              Economic Research
            </h3>
            <p className="mt-2 text-gray-700">
              Baseline surveys, feasibility studies, and in-depth policy
              analysis to inform strategic decisions.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary">
              Consultancy & Advisory
            </h3>
            <p className="mt-2 text-gray-700">
              Strategic guidance on policy development, human capacity
              enhancement, and impact evaluation.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary">
              Capacity Building
            </h3>
            <p className="mt-2 text-gray-700">
              Training and development programs to strengthen institutional and
              human capacity in economic research and policy implementation.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-primary text-white p-12 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          To empower organizations and governments with evidence-driven insights
          and actionable economic recommendations that drive sustainable
          development in Uganda and East Africa.
        </p>

        <h2 className="text-3xl font-bold mt-6">Our Vision</h2>
        <p className="text-lg max-w-2xl mx-auto">
          To be the most trusted consultancy and research partner in economics
          across East Africa and Africa at large, delivering high-impact
          solutions for a prosperous future.
        </p>
      </div>
    </section>
  );
}
