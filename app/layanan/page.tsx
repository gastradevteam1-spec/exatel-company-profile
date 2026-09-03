import Nav from "@/components/Nav";
import ServicesOverview from "@/components/ServicesOverview";
import InternetService from "@/components/InternetService";
import ManagedService from "@/components/ManagedService";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ServicesOverview />
        <InternetService />
        <ManagedService />
      </main>
      <Footer />
    </>
  );
}
