import { servicesOverview } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={servicesOverview.eyebrow}
          title={servicesOverview.title}
          lede={servicesOverview.lede}
        />
        <div className="mt-12 flex flex-col">
          {servicesOverview.items.map((item, i) => (
            <div
              key={item.name}
              className={`py-7 grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-8 items-start border-t border-line ${
                i === servicesOverview.items.length - 1
                  ? "border-b border-line"
                  : ""
              }`}
            >
              <h3 className="text-[1.3rem]">{item.name}</h3>
              <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm px-3.5 py-1.5 border border-line rounded-full text-[#33364f] bg-white"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
