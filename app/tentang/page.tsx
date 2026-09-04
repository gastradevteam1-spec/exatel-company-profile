import Nav from "@/components/Nav";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Reveal><About /></Reveal>
        <Reveal delay={0.06}><VisionMission /></Reveal>
        <Reveal delay={0.12}><WhyUs /></Reveal>
      </main>
      <Footer />
    </>
  );
}
