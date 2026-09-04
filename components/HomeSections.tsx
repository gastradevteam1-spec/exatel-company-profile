import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about, networkSolution, partners, servicesOverview } from "@/data/content";
import { coverageRegions } from "@/data/coverage";
import Reveal from "@/components/ui/Reveal";

function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-mono text-xs text-violet transition-colors hover:text-magenta"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </Link>
  );
}

export default function HomeSections() {
  const cityCount = coverageRegions.reduce(
    (total, region) => total + region.cities.length,
    0,
  );

  return (
    <div>
      <Reveal>
        <section className="py-16 border-b border-line">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="kicker"><span className="kicker-bar" />{about.eyebrow}</p>
              <h2 className="max-w-2xl text-[clamp(1.7rem,3vw,2.35rem)] leading-tight">
                Infrastruktur netral untuk ekosistem digital Indonesia.
              </h2>
              <p className="mt-4 max-w-xl text-muted">{about.paragraphs[0]}</p>
            </div>
            <div className="flex items-end justify-between gap-6 md:justify-end">
              <div>
                <div className="font-display text-5xl leading-none grad-text">{about.figureYears}</div>
                <p className="mt-2 max-w-[170px] text-sm text-muted">pengalaman di industri telekomunikasi</p>
              </div>
              <MoreLink href="/tentang">Tentang Exatel</MoreLink>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="bg-white py-16 border-b border-line">
          <div className="section-wrap">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="kicker"><span className="kicker-bar" />{servicesOverview.eyebrow}</p>
                <h2 className="max-w-xl text-[clamp(1.7rem,3vw,2.35rem)] leading-tight">Tiga lini layanan, satu jaringan fiber optic.</h2>
              </div>
              <MoreLink href="/layanan">Lihat layanan</MoreLink>
            </div>
            <div className="mt-10 grid gap-0 border-t border-line md:grid-cols-3">
              {servicesOverview.items.map((item, index) => (
                <div key={item.name} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <h3 className="mt-5 text-xl">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="py-16 border-b border-line">
          <div className="section-wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="kicker"><span className="kicker-bar" />INFRASTRUKTUR KAMI</p>
              <h2 className="max-w-md text-[clamp(1.7rem,3vw,2.35rem)] leading-tight">Jaringan yang menghubungkan data center hingga bangunan.</h2>
              <div className="mt-6"><MoreLink href="/jaringan">Jelajahi jaringan</MoreLink></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {networkSolution.blocks.map((block) => (
                <div key={block.num} className="border-l-2 border-cyan pl-5">
                  <span className="font-mono text-xs text-muted">{block.num}</span>
                  <h3 className="mt-2 text-lg">{block.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="bg-ink py-16 text-white border-b border-ink-2">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2.5 font-mono text-xs text-cyan"><span className="h-0.5 w-5 bg-cyan" />COVERAGE AREA</p>
              <h2 className="max-w-2xl text-[clamp(1.7rem,3vw,2.35rem)] leading-tight text-white">Menjangkau {coverageRegions.length} wilayah dengan {cityCount} kota dalam jaringan.</h2>
              <p className="mt-4 max-w-xl text-[#c4c8ea]">Dari Jabodetabek hingga berbagai kota di Jawa, Bali, Kalimantan, dan Sulawesi.</p>
            </div>
            <MoreLink href="/coverage">Lihat coverage</MoreLink>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="py-16">
          <div className="section-wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker"><span className="kicker-bar" />OUR PARTNERS</p>
              <h2 className="max-w-xl text-[clamp(1.7rem,3vw,2.35rem)] leading-tight">Bertumbuh bersama pemain kunci ekosistem telekomunikasi.</h2>
              <p className="mt-4 text-muted">Kolaborasi yang memperluas konektivitas dan membuka peluang baru.</p>
            </div>
            <div className="flex items-end gap-8">
              <div className="font-display text-5xl leading-none text-ink">{partners.length}+</div>
              <MoreLink href="/partner">Lihat partner</MoreLink>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}