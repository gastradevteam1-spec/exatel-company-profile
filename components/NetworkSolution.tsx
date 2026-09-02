import { networkSolution } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureList from "@/components/ui/FeatureRow";

export default function NetworkSolution() {
  return (
    <section id="network" className="py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={networkSolution.eyebrow}
          title={networkSolution.title}
        />

        <div className="mt-12 flex flex-col gap-14">
          {networkSolution.blocks.map((block) => (
            <div key={block.num}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-2xl font-semibold text-line">
                  {block.num}
                </span>
                <h3 className="text-[1.45rem]">{block.title}</h3>
              </div>
              <div className="flex flex-col gap-3 max-w-2xl text-[#33364f] mb-5">
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
