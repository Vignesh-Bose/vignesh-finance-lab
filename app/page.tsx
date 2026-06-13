export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-xl font-bold">
          Vignesh Finance Lab
        </h1>

        <div className="hidden md:flex gap-6 text-slate-300">
          <a href="#about">About</a>
          <a href="#tools">Tools</a>
          <a href="#templates">Templates</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Vignesh Finance Lab
        </h1>

        <p className="max-w-3xl text-xl text-slate-300 mb-8">
          Practical Finance Tools, Financial Modeling Templates,
          FP&A Resources and Analytics Solutions for Better Decisions.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Explore Tools
          </button>

          <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800">
            Download Templates
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          About
        </h2>

        <p className="text-slate-300 leading-8">
          Welcome to Vignesh Finance Lab. This platform is built to
          share practical finance knowledge, financial models,
          valuation tools, FP&A frameworks, Excel templates,
          dashboard solutions and analytics resources for finance
          professionals and business leaders.
        </p>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          Featured Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3">
              NPV Calculator
            </h3>

            <p className="text-slate-400">
              Evaluate investment opportunities and capital projects.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3">
              DCF Calculator
            </h3>

            <p className="text-slate-400">
              Estimate intrinsic value using discounted cash flows.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3">
              PVM Analyzer
            </h3>

            <p className="text-slate-400">
              Analyze price, volume and mix variances effectively.
            </p>
          </div>

        </div>
      </section>

      {/* Templates */}
      <section
        id="templates"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">
          Excel Templates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            Budget Planning Template
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            Cash Flow Forecast Model
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            FP&A Dashboard Template
          </div>

        </div>
      </section>

      {/* Blog */}
      <section
        id="blog"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          Latest Articles
        </h2>

        <p className="text-slate-400">
          Finance, FP&A, Financial Modeling, Excel Automation,
          Power BI and Analytics content coming soon.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-slate-300">
          Connect for finance analytics, financial modeling,
          dashboard development and FP&A discussions.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Vignesh Finance Lab. All Rights Reserved.
      </footer>

    </main>
  );
}