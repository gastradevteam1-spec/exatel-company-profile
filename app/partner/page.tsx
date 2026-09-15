import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Partner Exatel — Ekosistem Telekomunikasi Indonesia",
  description:
    "Mitra dan rekan bisnis Exatel di industri telekomunikasi, mulai dari regulator, IX, hingga penyedia infrastruktur jaringan.",
  openGraph: {
    title: "Partner Exatel — Ekosistem Telekomunikasi Indonesia",
    description:
      "Mitra dan rekan bisnis Exatel di industri telekomunikasi, mulai dari regulator, IX, hingga penyedia infrastruktur jaringan.",
    siteName: "Exatel",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Partner Exatel — Ekosistem Telekomunikasi Indonesia",
    description:
      "Mitra dan rekan bisnis Exatel di industri telekomunikasi, mulai dari regulator, IX, hingga penyedia infrastruktur jaringan.",
  },
};

export default function PartnerPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Reveal><Partners /></Reveal>
      </main>
      <Footer />
    </>
  );
}
