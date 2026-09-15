import type { Metadata } from "next";
import Nav from "@/components/Nav";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Tentang Exatel — PT. Elemen Jaringan Nusantara",
  description:
    "Perusahaan infrastruktur telekomunikasi dengan pendekatan netralitas jaringan, lebih dari 20 tahun pengalaman di industri fiber optic dan internet Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Reveal><About /></Reveal>
        <Reveal delay={0.06}><VisionMission /></Reveal>
        <Reveal delay={0.12}><WhyUs /></Reveal>
      </main>
      <Footer />
    </>
  );
}
