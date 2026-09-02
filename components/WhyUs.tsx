import { whyUs } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="py-20">
      <div className="section-wrap">
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} />
        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line border border-line">
          {whyUs.items.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <span className="block font-mono text-blue text-sm mb-4">
                {item.tag}
              </span>
              <h3 className="text-[1.15rem] mb-2.5">{item.title}</h3>
              <p className="text-muted text-[0.95rem]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
