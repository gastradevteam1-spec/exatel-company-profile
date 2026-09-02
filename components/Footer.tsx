import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#c4c8ea] pt-16 pb-10">
      <div className="section-wrap">
        <div className="flex justify-between flex-wrap gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-white">
              <span className="w-[26px] h-[26px] rounded-full bg-brand-gradient shrink-0" />
              exatel
            </div>
            <p className="mt-2 text-sm max-w-[340px] text-[#9aa0cf]">
              {footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-white font-display text-lg">Layanan</h4>
            <p className="mt-2 text-sm max-w-[340px] text-[#9aa0cf]">
              {footer.servicesNote}
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-[#767ca4] flex justify-between flex-wrap gap-2.5">
          <span>PT. Elemen Jaringan Nusantara (Exatel)</span>
          <span>Company Profile</span>
        </div>
      </div>
    </footer>
  );
}
