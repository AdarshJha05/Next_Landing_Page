import Header  from "./components/Header";
import Hero from "./components/Hero";
import Explorejobs from "./components/ExploreJobs";
import WhyChooseUs from "./components/whyChooseUs";
import Opportunity from "./components/Opportunity";
import GetStartedNow from "./components/GetStartedNow";
import Scope from "./components/Scope";
import ChoosePlan from "./components/ChoosePlan";
import OurClients from "./components/OurClients";
import Footer  from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Explorejobs />
        <Opportunity />
        <WhyChooseUs />
        <GetStartedNow />
        <Scope />
        <ChoosePlan />
        <OurClients />
      </main>
      <Footer />
    </div>
  );
}
