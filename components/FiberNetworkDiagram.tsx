import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import diagram from "@/public/images/exatel-fiber-network.png";

export default function FiberNetworkDiagram() {
  return (
    <section id="fiber-network" className="py-20 scroll-mt-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="TOPOLOGI FIBER"
          title="Jaringan Fiber Optic Exatel"
          lede="Infrastruktur jaringan serat optik terdepan yang menghubungkan seluruh Indonesia dengan konektivitas berkualitas tinggi."
        />
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl border border-line rounded-sm bg-white p-6">
            <Image
              src={diagram}
              alt="Diagram topologi jaringan fiber optic Exatel dari pusat data hingga ke ODP dan pelanggan"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
