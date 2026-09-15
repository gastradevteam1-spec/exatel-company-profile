import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ServicesOverview from "@/components/ServicesOverview";
import FiberNetworkDiagram from "@/components/FiberNetworkDiagram";
import GlobalInternetDiagram from "@/components/GlobalInternetDiagram";
import NetworkSolution from "@/components/NetworkSolution";
import InternetService from "@/components/InternetService";
import ManagedService from "@/components/ManagedService";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Layanan — Network Solution, Internet Service & Managed Service | Exatel",
  description:
    "Exatel Network Solution, Internet Service, dan Managed Service — infrastruktur fiber optic, koneksi internet dedicated, dan pengelolaan IT untuk kebutuhan bisnis.",
};

// Sections follow the order ServicesOverview lists them in: Network
// Solution (with its infrastructure diagrams), then Internet Service,
// then Managed Service. Previously Network Solution + the diagrams lived
// on a separate /jaringan route; merged here since it's one of the three
// service lines this page already introduces, not a distinct top-level
// section of the site (see next.config.mjs for the old-URL redirect).
export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Reveal><ServicesOverview /></Reveal>
        <Reveal delay={0.04}><FiberNetworkDiagram /></Reveal>
        <Reveal delay={0.06}><GlobalInternetDiagram /></Reveal>
        <Reveal delay={0.08}><NetworkSolution /></Reveal>
        <Reveal delay={0.1}><InternetService /></Reveal>
        <Reveal delay={0.12}><ManagedService /></Reveal>
      </main>
      <Footer />
    </>
  );
}
