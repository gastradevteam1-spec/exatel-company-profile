import Link from "next/link";
import { footer, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-soft pt-16 pb-10">
      <div className="section-wrap">
        <div className="flex justify-between flex-wrap gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-white">
              <span className="w-[26px] h-[26px] rounded-full bg-brand-gradient shrink-0" aria-hidden="true" />
              exatel
            </div>
            <p className="mt-2 text-sm max-w-[340px] text-ink-muted">
              {footer.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <h4 className="text-white font-display text-lg">Navigasi</h4>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded text-ink-muted transition-colors hover:text-white active:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-ink-muted/70 flex justify-between flex-wrap gap-2.5">
          <span>PT. Elemen Jaringan Nusantara (Exatel)</span>
          <span>Company Profile</span>
        </div>
      </div>
    </footer>
  );
}
