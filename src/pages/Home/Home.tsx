import PageLayout from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
          BuiltV
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
          We build digital systems that businesses run on.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Websites, software, AI and automation engineered for ambitious
          businesses worldwide.
        </p>
      </section>
    </PageLayout>
  );
}

export default Home;