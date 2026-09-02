import { managedService } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ManagedService() {
  return (
    <section className="py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={managedService.eyebrow}
          title={managedService.title}
          lede={managedService.lede}
        />

        <div className="mt-12 flex flex-col gap-12">
          {managedService.blocks.map((block) => (
            <div key={block.num}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-2xl font-semibold text-line">
                  {block.num}
                </span>
                <h3 className="text-[1.45rem]">{block.title}</h3>
              </div>
              <div className="flex flex-col gap-3 max-w-2xl text-[#33364f]">
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-xl">Keunggulan Exatel Managed Service</h3>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-line">
          {managedService.advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="p-6 border-b border-r border-line last:border-r-0 bg-white [&:nth-child(6n)]:border-r-0"
            >
              <div className="font-mono text-blue text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-semibold mt-2.5 text-[0.98rem] text-ink">
                {adv.title}
              </div>
            </div>
          ))}
        </div>

        {/* Process is a genuine sequence, so it's the one place we number steps. */}
        <h3 className="mt-14 text-xl">Proses Layanan Managed Service</h3>
        <div className="mt-5 grid sm:grid-cols-3 md:grid-cols-5 border border-line">
          {managedService.process.map((step, i) => (
            <div
              key={step}
              className="p-6 border-b border-r border-line last:border-r-0 bg-white [&:nth-child(5n)]:border-r-0"
            >
              <div className="font-mono text-blue text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-semibold mt-2.5 text-[0.98rem]">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
