export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Vignesh Finance Lab
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mb-8">
          Practical Finance Tools for Better Decisions
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Explore Tools
          </button>

          <button className="rounded-lg border border-slate-500 px-6 py-3 font-semibold hover:bg-slate-800">
            Download Templates
          </button>
        </div>
      </section>
    </main>
  );
}