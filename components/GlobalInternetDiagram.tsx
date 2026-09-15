import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import diagram from "@/public/images/exatel-global-internet.png";

export default function GlobalInternetDiagram() {
  return (
    <section id="global-internet" className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="JARINGAN GLOBAL"
          title="Jaringan Internet Global"
          lede="Akses internet global melalui jaringan fiber optic Exatel, menghubungkan pengguna ke seluruh dunia dengan kecepatan dan keandalan terbaik."
        />
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl border border-line rounded-sm bg-white p-6">
            <Image
              src={diagram}
              alt="Diagram konektivitas internet global Exatel melalui jaringan fiber optic ke IX dan upstream internasional"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
