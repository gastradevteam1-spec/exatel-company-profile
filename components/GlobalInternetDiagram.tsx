import SectionHeading from "@/components/ui/SectionHeading";

export default function GlobalInternetDiagram() {
  return (
    <section className="py-20 bg-white border-y border-line">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="KONEKTIVITAS GLOBAL"
          title="Jaringan Internet Global"
          lede="Akses internet global melalui jaringan fiber optic Exatel, menghubungkan pengguna ke seluruh dunia dengan kecepatan dan keandalan terbaik."
        />
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl border border-line rounded-lg bg-white p-6">
            <img
              src="/images/exatel-global-internet.png"
              alt="Exatel Global Internet Diagram"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
