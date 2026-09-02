import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyUs from "@/components/WhyUs";
import FiberNetworkDiagram from "@/components/FiberNetworkDiagram";
import GlobalInternetDiagram from "@/components/GlobalInternetDiagram";
import ServicesOverview from "@/components/ServicesOverview";
import NetworkSolution from "@/components/NetworkSolution";
import InternetService from "@/components/InternetService";
import ManagedService from "@/components/ManagedService";
import Coverage from "@/components/Coverage";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <VisionMission />
      <WhyUs />
      <FiberNetworkDiagram />
      <GlobalInternetDiagram />
      <ServicesOverview />
      <NetworkSolution />
      <InternetService />
      <ManagedService />
      <Coverage />
      <Partners />
      <Footer />
    </>
  );
}
