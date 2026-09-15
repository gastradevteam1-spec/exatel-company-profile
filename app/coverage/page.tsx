import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Coverage from "@/components/Coverage";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Coverage Area — Jangkauan Jaringan Exatel",
  description:
    "Peta cakupan jaringan fiber optic Exatel di Jabodetabek dan berbagai kota di Jawa, Bali, Kalimantan, dan Sulawesi.",
};

export default function CoveragePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Reveal><Coverage /></Reveal>
      </main>
      <Footer />
    </>
  );
}
