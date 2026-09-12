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
    <section className="overflow-hidden border-y border-white/10 bg-[#050608] py-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
          Markets we build for
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="market-marquee flex w-max items-center gap-4">
          {repeatedCountries.map((country, index) => (
            <div
              key={`${country}-${index}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300"
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