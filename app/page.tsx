import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
