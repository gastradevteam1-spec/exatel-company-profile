import Nav from "@/components/Nav";
import ServicesOverview from "@/components/ServicesOverview";
import InternetService from "@/components/InternetService";
import ManagedService from "@/components/ManagedService";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <Reveal><ServicesOverview /></Reveal>
        <Reveal delay={0.06}><InternetService /></Reveal>
        <Reveal delay={0.12}><ManagedService /></Reveal>
      </main>
      <Footer />
    </>
  );
}
