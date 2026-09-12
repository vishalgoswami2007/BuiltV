import Hero from "../../components/sections/Hero";
import WhatWeDo from "../../components/sections/WhatWeDo";
import WorkflowShowcase from "../../components/sections/WorkflowShowcase";
import GlobalMarkets from "../../components/sections/GlobalMarkets";
import Industries from "../../components/sections/Industries";
import SelectedWork from "../../components/sections/SelectedWork";
import Process from "../../components/sections/Process";
import PageLayout from "../../components/layout/PageLayout";


function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhatWeDo />
      <WorkflowShowcase />
      <GlobalMarkets />
      <Industries />
      <SelectedWork />
      <Process />
    </PageLayout>
  );
}

export default Home;