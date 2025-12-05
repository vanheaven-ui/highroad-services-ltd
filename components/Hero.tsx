import Link from "next/link";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    // Relative positioning for absolute background
    <section className="bg-primary text-white relative overflow-hidden py-20 md:py-28">
      {/* Absolute SVG background: Modern abstract geometric pattern with subtle opacity */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified geometric elements for a clean, contemporary feel */}
          <circle
            cx="200"
            cy="150"
            r="100"
            fill="currentColor"
            className="text-white/5"
          />
          <circle
            cx="800"
            cy="450"
            r="150"
            fill="currentColor"
            className="text-white/10"
          />
          <line
            x1="0"
            y1="300"
            x2="1200"
            y2="300"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/10"
          />
          <line
            x1="600"
            y1="0"
            x2="600"
            y2="600"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/10"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center md:text-left relative z-10">
        {/* Updated subheading: Directly highlights core expertise areas */}
        <p className="text-sm uppercase tracking-widest text-accent-gold mb-4 font-semibold">
          Research, Consultancy & Training
        </p>

        {/* Punchy headline: Straightforward, action-oriented */}
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Turning Data into <span className="mr-1">Decisions That Drive</span>
          <br className="hidden sm:inline" />
          Real Results.
        </h1>

        {/* Streamlined description: Ties in expertise areas naturally for client relevance */}
        <p className="mt-6 max-w-4xl text-base md:text-lg opacity-90">
          Through expert research, consultancy, and training, we deliver clear,
          practical strategies powered by deep analysis and hands-on experience.
          Helping you solve challenges and achieve measurable success.
        </p>

        {/* Simple trust signal: Broad and approachable */}
        <div className="mt-8">
          <p className="text-sm italic opacity-75">
            Partnered with governments, NGOs, and businesses worldwide.
          </p>
        </div>

        {/* Clean CTA buttons: Prominent primary, subtle secondary */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-accent-gold text-white font-bold rounded-lg shadow-xl ring-2 ring-accent-gold/30 hover:bg-accent-gold hover:shadow-2xl hover:ring-accent-gold/50 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Request a Consultation
          </Link>
          <Link
            href="/experts"
            className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-primary font-semibold transition"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
