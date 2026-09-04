import Link from "next/link";

const links = [
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/jaringan", label: "Jaringan" },
  { href: "/coverage", label: "Coverage" },
  { href: "/partner", label: "Partner" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
      <div className="section-wrap flex items-center gap-5 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-display font-bold text-lg">
          <span className="w-[26px] h-[26px] rounded-full bg-brand-gradient shrink-0" />
          exatel
        </Link>
        <nav className="flex min-w-0 flex-1 justify-end gap-5 overflow-x-auto text-sm text-muted md:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
