"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line dark:bg-ink/95">
        <div className="section-wrap flex items-center gap-5 py-4">
          <Link href="/" className="focus-ring rounded flex shrink-0 items-center gap-2.5 font-display font-bold text-lg">
            <span className="w-[26px] h-[26px] rounded-full bg-brand-gradient shrink-0" aria-hidden="true" />
            exatel
          </Link>
          <nav aria-label="Utama" className="flex min-w-0 flex-1 justify-end gap-5 overflow-x-auto text-sm text-muted dark:text-on-dark md:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`focus-ring rounded transition-colors hover:text-ink active:opacity-70 dark:hover:text-white ${
                    isActive ? "text-ink dark:text-white font-medium" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
