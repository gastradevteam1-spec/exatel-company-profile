const links = [
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Layanan" },
  { href: "#network", label: "Jaringan" },
  { href: "#coverage", label: "Coverage" },
  { href: "#partners", label: "Partner" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line">
      <div className="section-wrap flex items-center justify-between py-4">
        <div className="flex items-center gap-2.5 font-display font-bold text-lg">
          <span className="w-[26px] h-[26px] rounded-full bg-brand-gradient shrink-0" />
          exatel
        </div>
        <nav className="hidden md:flex gap-7 text-sm text-muted">
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
