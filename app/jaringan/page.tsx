import Nav from "@/components/Nav";
import FiberNetworkDiagram from "@/components/FiberNetworkDiagram";
import GlobalInternetDiagram from "@/components/GlobalInternetDiagram";
import NetworkSolution from "@/components/NetworkSolution";
import Footer from "@/components/Footer";

export default function NetworkPage() {
  return (
    <>
      <Nav />
      <main>
        <FiberNetworkDiagram />
        <GlobalInternetDiagram />
        <NetworkSolution />
      </main>
      <Footer />
    </>
  );
}
