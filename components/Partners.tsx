import { partners } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Partners() {
  return (
    <section id="partners" className="py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="OUR PARTNERS"
          title="Bermitra dengan pemain kunci ekosistem telekomunikasi."
        />
        <div className="mt-12 flex flex-wrap border-t border-l border-line">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-1 min-w-[200px] border-r border-b border-line px-5 py-6 flex items-center justify-center min-h-[78px] dark:bg-[#c7cbe0]"
            >
              <img
                src={partner.image}
                alt={partner.name}
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "60px",
                  maxWidth: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
