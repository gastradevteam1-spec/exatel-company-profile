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
                <h2 className="h2 max-w-xl">Dari kabel ke koneksi bisnis yang berjalan.</h2>
              </div>
              <MoreLink href="/layanan">Lihat layanan</MoreLink>
            </div>
            <div className="mt-10 border-t border-line">
              {servicesOverview.items.map((item, i) => (
                <a
                  key={item.name}
                  href={`#${item.anchor}`}
                  className="focus-ring group grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6 transition-colors hover:bg-paper-dim sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-xl group-hover:text-signal">{item.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{item.tags.join(" · ")}</span>
                  </span>
                  <span className="hidden font-mono text-xs text-muted sm:block">Lihat detail ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="bg-ink py-16 text-white border-b border-ink-2">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2.5 font-mono text-xs text-signal"><span className="h-0.5 w-5 bg-signal" aria-hidden="true" />COVERAGE AREA</p>
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
            <div className="order-2 grid grid-cols-3 gap-2 rounded-sm border border-line bg-paper-dim/40 p-2 shadow-[0_18px_40px_rgba(7,9,24,0.18)] md:order-1 dark:border-ink-2 dark:bg-ink-2">
              {partners.slice(0, 6).map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-[70px] items-center justify-center bg-white px-4 py-5 dark:rounded-sm dark:bg-[#dfe3f2]"
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