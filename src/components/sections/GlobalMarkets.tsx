const countries = [
  "Ireland",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Austria",
  "Belgium",
  "France",
  "Spain",
  "Portugal",
  "Italy",
  "Denmark",
  "Norway",
  "Sweden",
  "Finland",
  "Switzerland",
  "Poland",
  "Czechia",
  "Estonia",
  "Lithuania",
  "Latvia",
  "Greece",
  "Croatia",
  "Romania",
];

function GlobalMarkets() {
  const repeatedCountries = [...countries, ...countries];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#050608] py-6 sm:py-8">
      <div className="mb-5 px-5 text-center sm:mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
          Markets we build for
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#050608] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#050608] to-transparent sm:w-24" />

        <div className="market-marquee flex w-max items-center gap-2.5 sm:gap-4">
          {repeatedCountries.map((country, index) => (
            <div
              key={`${country}-${index}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalMarkets;
