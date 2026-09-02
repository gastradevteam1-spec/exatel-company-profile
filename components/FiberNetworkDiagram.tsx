import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FiberNetworkDiagram() {
  return (
    <section className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="INFRASTRUKTUR KAMI"
          title="Jaringan Fiber Optic Exatel"
          lede="Infrastruktur jaringan serat optik terdepan yang menghubungkan seluruh Indonesia dengan konektivitas berkualitas tinggi."
        />
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl border border-line rounded-lg bg-white p-6">
            <img
              src="/images/exatel-fiber-network.png"
              alt="Exatel Fiber Network Diagram"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
