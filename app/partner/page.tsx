import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export default function PartnerPage() {
  return (
    <>
      <Nav />
      <main>
        <Reveal><Partners /></Reveal>
      </main>
      <Footer />
    </>
  );
}
