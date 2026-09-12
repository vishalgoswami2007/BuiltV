import Hero from "../../components/sections/Hero";
import MarketFocus from "../../components/sections/MarketFocus";
import PageLayout from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout>
      <Hero />
      <MarketFocus />
    </PageLayout>
  );
}

export default Home;