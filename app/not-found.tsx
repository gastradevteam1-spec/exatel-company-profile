import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="py-24">
          <div className="section-wrap">
            <p className="kicker"><span className="kicker-bar" aria-hidden="true" />404</p>
            <h1 className="h2 max-w-xl">Halaman tidak ditemukan.</h1>
            <p className="mt-4 max-w-xl text-muted">
              Halaman yang Anda cari mungkin sudah dipindahkan atau tidak
              tersedia.
            </p>
            <Link
              href="/"
              className="focus-ring rounded mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-signal transition-colors hover:text-ember"
            >
              Kembali ke beranda
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
