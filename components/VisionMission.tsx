import Image from "next/image";
import { visionMission, groupCompanies } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VisionMission() {
  // "use client"; // Uncomment if using dynamic features that require client-side rendering
  return (
    <section className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={visionMission.eyebrow}
          title={visionMission.title}
        />

        <div className="mt-12 grid sm:grid-cols-[1fr_1.4fr] border border-line">
          <div className="p-9 bg-ink text-white border-b sm:border-b-0 sm:border-r border-line">
            <div className="font-mono text-xs text-cyan mb-3.5">VISI</div>
            <p className="font-display text-[1.35rem] leading-snug">
              {visionMission.vision}
            </p>
          </div>
          <div className="p-9">
            <div className="font-mono text-xs text-violet mb-3.5">MISI</div>
            <ul className="flex flex-col">
              {visionMission.mission.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 py-4 border-b border-paper-dim last:border-b-0 text-[#33364f]"
                >
                  <span className="font-mono text-muted text-sm pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="kicker">
            <span className="kicker-bar" />
            GROUP KAMI
          </div>
          <div className="grid sm:grid-cols-3 border-t border-line">
            {groupCompanies.map((company, i) => (
              <div
                key={company.name}
                className={`p-7 border-b border-line flex items-center justify-center min-h-[200px] bg-white dark:bg-[#c7cbe0] ${
                  i !== groupCompanies.length - 1 ? "sm:border-r" : ""
                } border-line`}
              >
                <Image
                  src={company.image}
                  alt={company.name}
                  width={200}
                  height={200}
                  className="h-auto w-auto max-w-[200px] object-contain"
                  style={{ maxHeight: "110px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
