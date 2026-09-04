import Nav from "@/components/Nav";
import Coverage from "@/components/Coverage";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export default function CoveragePage() {
  return (
    <>
      <Nav />
      <main>
        <Reveal><Coverage /></Reveal>
      </main>
      <Footer />
    </>
  );
}
