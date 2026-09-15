import { servicesOverview } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          as="h1"
          eyebrow={servicesOverview.eyebrow}
          title={servicesOverview.title}
          lede={servicesOverview.lede}
        />
        {/* Table of contents for the three sections further down this
            page — tags stay as a quick preview, name links straight to
            the full section instead of restating it here. */}
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
              <a
                href={`#${item.anchor}`}
                className="focus-ring rounded text-[1.3rem] transition-colors hover:text-signal active:opacity-70"
              >
                {item.name}
              </a>
              <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm px-3.5 py-1.5 border border-line rounded-full text-body bg-white"
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
