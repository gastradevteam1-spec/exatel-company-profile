import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Exatel — Infrastruktur Fiber Optic, Internet & Solusi IT",
  description:
    "PT. Elemen Jaringan Nusantara (Exatel) — penyedia jaringan fiber optic, layanan internet, dan solusi IT dengan pendekatan netralitas jaringan di seluruh Indonesia.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="main-content">
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
