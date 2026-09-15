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
        <div className="mt-12 flex flex-wrap gap-2 rounded-sm border border-line bg-paper-dim/40 p-2 shadow-[0_18px_40px_rgba(7,9,24,0.18)] dark:border-ink-2 dark:bg-ink-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-1 min-w-[200px] border-r border-b border-line bg-white px-5 py-6 flex items-center justify-center min-h-[78px] last:border-0 dark:border-0 dark:rounded-sm dark:bg-[#dfe3f2]"
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
