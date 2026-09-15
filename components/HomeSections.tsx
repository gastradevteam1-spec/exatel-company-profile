import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { about, partners, servicesOverview } from "@/data/content";
import { coverageRegions } from "@/data/coverage";
import Reveal from "@/components/ui/Reveal";

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="focus-ring rounded inline-flex items-center gap-1.5 font-mono text-xs text-signal transition-colors hover:text-ember active:opacity-70"
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
          <div className="section-wrap grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="kicker"><span className="kicker-bar" />{about.eyebrow}</p>
              <h2 className="h2 max-w-2xl">
                Infrastruktur netral untuk ekosistem digital Indonesia.
              </h2>
              <p className="mt-4 max-w-xl text-muted">{about.paragraphs[0]}</p>
              <div className="mt-6"><MoreLink href="/tentang">Tentang Exatel</MoreLink></div>
            </div>
            {/* Signature stat card — the one big-number moment on this
                page, echoing the fuller version on /tentang. */}
            <div className="bg-ink rounded-sm p-7">
              <div className="font-display text-5xl leading-none grad-text">{about.figureYears}</div>
              <p className="mt-2 max-w-[200px] text-sm text-ink-muted">pengalaman di industri telekomunikasi</p>
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
                <h2 className="h2 max-w-xl">Dari kabel ke koneksi bisnis yang berjalan.</h2>
              </div>
              <MoreLink href="/layanan">Lihat layanan</MoreLink>
            </div>
            {/* Three parallel service lines, not a sequence — no numbers. */}
            <div className="mt-10 grid gap-0 border-t border-line md:grid-cols-3">
              {servicesOverview.items.map((item) => (
                <div key={item.name} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="bg-ink py-16 text-white border-b border-ink-2">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2.5 font-mono text-xs text-glass"><span className="h-0.5 w-5 bg-glass" />COVERAGE AREA</p>
              <h2 className="h2 max-w-2xl text-white">Dari Jabodetabek sampai {cityCount} kota, satu peta yang sama.</h2>
              <p className="mt-4 max-w-xl text-ink-soft">Menjangkau {coverageRegions.length} wilayah di Jawa, Bali, Kalimantan, dan Sulawesi.</p>
            </div>
            <MoreLink href="/coverage">Lihat coverage</MoreLink>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="py-16">
          <div className="section-wrap grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            {/* Logos first, text second — mirrors the About section's
                two-column shape without repeating its left-right order. */}
            <div className="grid grid-cols-3 border-t border-l border-line order-2 md:order-1">
              {partners.slice(0, 6).map((partner) => (
                <div
                  key={partner.name}
                  className="border-r border-b border-line px-4 py-5 flex items-center justify-center min-h-[70px] dark:bg-line"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={36}
                    loading="lazy"
                    className="w-auto h-auto max-h-[36px] max-w-full"
                  />
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <p className="kicker"><span className="kicker-bar" />OUR PARTNERS</p>
              <h2 className="h2 max-w-md">Nama-nama yang sudah terhubung ke jaringan kami.</h2>
              <p className="mt-4 max-w-md text-muted">Kolaborasi yang memperluas konektivitas dan membuka peluang baru.</p>
              <div className="mt-6"><MoreLink href="/partner">Lihat semua {partners.length} partner</MoreLink></div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}