const markets = [
  "Ireland",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Austria",
  "Portugal",
];

function MarketFocus() {
  return (
    <section className="border-y border-white/10 bg-[#050608]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Built for businesses worldwide
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {markets.map((market) => (
                <span
                  key={market}
                  className="text-sm text-slate-300"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-l border-white/10 pl-5">
              <p className="text-sm font-medium text-white">
                Same problems.
              </p>
              <p className="text-sm text-slate-400">
                Better systems.
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-sm font-medium text-white">
                Local businesses.
              </p>
              <p className="text-sm text-slate-400">
                Global possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketFocus;