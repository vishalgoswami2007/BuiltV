import { useTranslation } from "react-i18next";

const countries = [
  "ireland",
  "unitedKingdom",
  "germany",
  "netherlands",
  "austria",
  "belgium",
  "france",
  "spain",
  "portugal",
  "italy",
  "denmark",
  "norway",
  "sweden",
  "finland",
  "switzerland",
  "poland",
  "czechia",
  "estonia",
  "lithuania",
  "latvia",
  "greece",
  "croatia",
  "romania",
];

function GlobalMarkets() {
  const { t } = useTranslation();

  const repeatedCountries = [...countries, ...countries];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#050608] py-6 sm:py-8">
      <div className="mb-5 px-5 text-center sm:mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
          {t("markets.title")}
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
              {t(`markets.countries.${country}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalMarkets;