"use client";

import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import { coverageRegions } from "@/data/coverage";

// Leaflet touches `window` on init, so the map must never run during SSR.
const CoverageMap = dynamic(() => import("@/components/CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] border border-line bg-white flex items-center justify-center text-muted text-sm">
      Memuat peta cakupan…
    </div>
  ),
});

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="COVERAGE AREA"
          title="Jaringan Exatel telah menjangkau berbagai wilayah di Indonesia."
        />

        <div className="mt-12">
          <CoverageMap />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-7">
          {coverageRegions.map((region) => (
            <div key={region.group}>
              <h4 className="font-mono text-[0.85rem] text-violet mb-2.5 font-medium">
                {region.group}
              </h4>
              <ul className="list-none p-0 m-0">
                {region.cities.map((city) => (
                  <li
                    key={city}
                    className="text-sm text-[#33364f] py-1 border-b border-dashed border-paper-dim"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-7 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <i className="w-2.5 h-2.5 rounded-full bg-magenta inline-block" />
            Tersedia
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-2.5 h-2.5 rounded-full bg-[#e9b93a] inline-block" />
            Akan Tersedia
          </span>
        </div>
      </div>
    </section>
  );
}
