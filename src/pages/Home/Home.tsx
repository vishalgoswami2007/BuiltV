import Hero from "../../components/sections/Hero";
import WhatWeDo from "../../components/sections/WhatWeDo";
import WorkflowShowcase from "../../components/sections/WorkflowShowcase";
import PageLayout from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhatWeDo />
      <WorkflowShowcase />
    </PageLayout>
  );
}

export default Home;