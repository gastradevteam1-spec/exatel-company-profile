import Nav from "@/components/Nav";
import FiberNetworkDiagram from "@/components/FiberNetworkDiagram";
import GlobalInternetDiagram from "@/components/GlobalInternetDiagram";
import NetworkSolution from "@/components/NetworkSolution";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export default function NetworkPage() {
  return (
    <>
      <Nav />
      <main>
        <Reveal><FiberNetworkDiagram /></Reveal>
        <Reveal delay={0.06}><GlobalInternetDiagram /></Reveal>
        <Reveal delay={0.12}><NetworkSolution /></Reveal>
      </main>
      <Footer />
    </>
  );
}
