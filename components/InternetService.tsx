import { internetService } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureList from "@/components/ui/FeatureRow";

export default function InternetService() {
  return (
    <section id="internet" className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={internetService.eyebrow}
          title={internetService.title}
          lede={internetService.lede}
        />

        {/* Two parallel offerings, not a sequence — no step numbers. */}
        <div className="mt-12 flex flex-col gap-14">
          {internetService.blocks.map((block) => (
            <div key={block.title} className="border-l-2 border-glass pl-6">
              <h3 className="text-[1.45rem] mb-4">{block.title}</h3>
              <div className="flex flex-col gap-3 max-w-2xl text-body mb-5">
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {block.features && <FeatureList items={block.features} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
