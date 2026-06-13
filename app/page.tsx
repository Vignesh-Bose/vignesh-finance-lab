import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">Vignesh Bose</h1>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sky-400 font-semibold mb-4">
              Pricing Analytics • FP&A • Financial Modeling
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Vignesh Bose
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Helping organizations improve profitability through pricing
              strategy, financial modeling, business analytics, Power BI
              dashboards and process automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-sky-500 px-6 py-3 font-semibold hover:bg-sky-600">
                View Projects
              </button>

              <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800">
                Explore Tools
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <Image
                src="/images/vignesh.jpg"
                alt="Vignesh Bose"
                width={450}
                height={550}
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-300 leading-8 text-lg">
          I am a Pricing Analyst with experience across Pricing Analytics,
          FP&A, Financial Modeling, Credit & Collections, and Business
          Operations. My focus is on transforming complex financial and
          commercial data into actionable insights that improve profitability,
          efficiency, and strategic decision-making.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Pricing Strategy",
            "FP&A",
            "Financial Modeling",
            "Power BI",
            "Python Analytics",
            "Excel VBA",
            "Vendavo",
            "SAP"
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Pricing Insights Dashboard
            </h3>

            <p className="text-slate-400">
              Developed Power BI dashboards for margin analysis,
              contract performance, pricing visibility and customer
              profitability tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Price Volume Mix Analysis
            </h3>

            <p className="text-slate-400">
              Built a Python-based PVM framework to analyze revenue
              changes through price, volume and mix effects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Return Credit Automation
            </h3>

            <p className="text-slate-400">
              Automated return credit memo processing using VBA,
              significantly improving efficiency and accuracy.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Credit & Collections Analytics
            </h3>

            <p className="text-slate-400">
              Built performance dashboards and analytics solutions
              supporting DSO reduction initiatives.
            </p>
          </div>

        </div>
      </section>

      {/* Finance Lab */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-6">
          Vignesh Finance Lab
        </h2>

        <p className="text-slate-400 mb-10">
          A growing collection of finance tools, templates and analytics
          solutions designed for finance professionals.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "DCF Valuation Tool",
            "NPV Calculator",
            "IRR Calculator",
            "PVM Analyzer",
            "Pricing Simulator",
            "Budget Variance Analyzer"
          ].map((tool) => (
            <div
              key={tool}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              {tool}
            </div>
          ))}

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-slate-300 mb-2">
          Email: vigneshvicky666411@gmail.com
        </p>

        <p className="text-slate-300">
          LinkedIn: linkedin.com/in/vignesh-bose-14700317a
        </p>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Vignesh Bose. All Rights Reserved.
      </footer>

    </main>
  );
}