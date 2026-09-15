import Image from "next/image";
import { partners } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Partners() {
  return (
    <section id="partners" className="py-20">
      <div className="section-wrap">
        <SectionHeading
          as="h1"
          eyebrow="OUR PARTNERS"
          title="Bermitra dengan pemain kunci ekosistem telekomunikasi."
        />
        <div className="mt-12 flex flex-wrap border-t border-l border-line">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-1 min-w-[200px] border-r border-b border-line px-5 py-6 flex items-center justify-center min-h-[78px] dark:bg-line"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={60}
                loading="lazy"
                className="w-auto h-auto max-h-[60px] max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
