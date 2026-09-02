import { about } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-wrap">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <div className="mt-12 grid md:grid-cols-[1.1fr_1fr] gap-14 items-start">
          <div className="flex flex-col gap-4 text-[#33364f]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="bg-ink rounded-sm p-8 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="font-display text-[4.2rem] leading-none grad-text">
                {about.figureYears}
              </div>
              <div className="text-[#a9b0e0] text-sm mt-2.5 max-w-[220px]">
                {about.figureCaption}
              </div>
            </div>
            <div className="text-[#a9b0e0] text-sm max-w-[240px]">
              {about.figureNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
