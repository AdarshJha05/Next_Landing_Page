import Header  from "./components/Header";
import Hero from "./components/Hero";
import Explorejobs from "./components/ExploreJobs";
import WhyChooseUs from "./components/whyChooseUs";
import Footer  from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Explorejobs />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
