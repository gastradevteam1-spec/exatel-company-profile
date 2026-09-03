import Nav from "@/components/Nav";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <VisionMission />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
