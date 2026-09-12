import Hero from "../../components/sections/Hero";
import WhatWeDo from "../../components/sections/WhatWeDo";
import PageLayout from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhatWeDo />
    </PageLayout>
  );
}

export default Home;