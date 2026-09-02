import Link from "next/link";

const services = [
  {
    group: "Exatel Network Solution",
    items: [
      ["FTTH Open Access", "Infrastruktur FTTH netral untuk ISP dan Subnet/Reseller resmi."],
      ["Local Loop / Metro Ethernet", "Konektivitas point-to-point, point-to-multipoint dan multipoint-to-multipoint."],
    ],
  },
  {
    group: "Exatel Internet Service",
    items: [
      ["Internet Dedicated", "Internet global 24/7 dengan bandwidth dedicated 1:1."],
      ["Internet Broadband Bisnis", "Internet fiber untuk bisnis dan UKM, mulai 100 Mbps hingga 1 Gbps."],
    ],
  },
  {
    group: "Exatel Managed Service",
    items: [
      ["WiFi Managed Service", "Survei, desain, pengadaan, instalasi, konfigurasi, monitoring dan maintenance WiFi."],
      ["Network Managed Service", "Pengelolaan LAN, WAN dan SD-WAN untuk jaringan kantor dan cabang."],
      ["Fiber Building Managed Service", "Perancangan dan implementasi infrastruktur fiber untuk gedung dan antar-gedung."],
    ],
  },
];

const coverage = {
  "Banten": ["Cilegon", "Tangerang", "Kota Serang", "Kab. Serang", "Kab. Lebak"],
  "Jawa Barat": ["Bekasi", "Cikarang", "Karawang", "Purwakarta", "Cirebon", "Subang", "Bandung Raya", "Majalengka", "Sumedang", "Kuningan", "Sukabumi", "Cianjur", "Bogor"],
  "DKI Jakarta": ["Jakarta"],
  "Jawa Tengah": ["Brebes", "Tegal", "Semarang", "Pemalang", "Batang", "Kota Pekalongan", "Kab. Pekalongan", "Kendal"],
  "Jawa Timur": ["Sidoarjo", "Surabaya", "Pasuruan", "Bangil", "Purwosari", "Malang", "Lamongan", "Gresik", "Kediri", "Kertosono", "Mojokerto", "Jombang"],
  "Bali": ["Buleleng", "Gianyar"],
  "NTB": ["Lombok"],
  "Kalimantan Timur": ["Bontang", "Samarinda", "Balikpapan"],
  "Sulawesi Tengah": ["Ampana", "Morowali", "Palu", "Poso", "Luwuk", "Tentena"],
  "Sulawesi Tenggara": ["Kendari"],
};

function NetworkGraphic() {
  return (
    <div className="network-card" aria-label="Ilustrasi jaringan Exatel">
      <svg viewBox="0 0 900 470" role="img">
        <defs>
          <linearGradient id="fiber" x1="0" x2="1">
            <stop offset="0%" stopColor="#36d7ff" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path d="M130 235 C260 70, 330 70, 450 235 S650 400, 770 235" fill="none" stroke="url(#fiber)" strokeWidth="5" filter="url(#glow)" opacity=".95"/>
        <path d="M130 235 C270 400, 340 400, 450 235 S640 70, 770 235" fill="none" stroke="#ffffff" strokeOpacity=".14" strokeWidth="2"/>
        {[
          [130,235,"EXATEL\nNODE A"],
          [300,125,"DATA CENTER"],
          [450,235,"GLOBAL\nINTERNET"],
          [600,125,"EXATEL\nNODE B"],
          [770,235,"CUSTOMER /\nISP"]
        ].map(([x,y,label],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="28" fill="#07101f" stroke="#45d8ff" strokeWidth="2"/>
            <circle cx={x} cy={y} r="7" fill="#45d8ff"/>
            <text x={x} y={y+52} textAnchor="middle" fill="#dce8f5" fontSize="15" fontWeight="600">
              {label.split("\n").map((t,j)=><tspan x={x} dy={j ? 18 : 0} key={j}>{t}</tspan>)}
            </text>
          </g>
        ))}
        <text x="450" y="42" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700">EXATEL FIBER NETWORK</text>
        <text x="450" y="445" textAnchor="middle" fill="#8da2bb" fontSize="14">FTTH • Metro Ethernet • DWDM • Internet Connectivity</text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Link href="#" className="brand">
          <span className="brand-mark">E</span>
          <span>EXATEL</span>
        </Link>
        <nav>
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <a href="#managed">Managed Service</a>
          <a href="#coverage">Coverage</a>
        </nav>
        <a href="#contact" className="nav-cta">Contact</a>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow">PT. ELEMEN JARINGAN NUSANTARA</p>
          <h1>Connecting<br /><span>the Unconnected.</span></h1>
          <p className="hero-text">
            Infrastruktur fiber optic, layanan internet dan solusi IT yang
            dirancang untuk konektivitas yang cepat, stabil, aman dan handal.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#solutions">Explore Solutions</a>
            <a className="button ghost" href="#contact">Talk to Exatel</a>
          </div>
        </div>
        <div className="hero-orbit">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit-core"><b>EXATEL</b><small>NETWORK</small></div>
          <span className="signal s1">FTTH</span>
          <span className="signal s2">100G</span>
          <span className="signal s3">ISP</span>
          <span className="signal s4">IT</span>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">TENTANG KAMI</p>
          <h2>Infrastructure built to connect Indonesia.</h2>
        </div>
        <div className="body-copy">
          <p>
            Exatel adalah perusahaan yang berfokus pada infrastruktur telekomunikasi,
            terutama sebagai penyedia jaringan fiber optic, penyedia layanan internet
            dan solusi IT.
          </p>
          <p>
            Exatel mengedepankan pendekatan netralitas untuk menyediakan infrastruktur
            jaringan yang dapat diakses oleh semua penyedia dan penerima layanan,
            dengan komitmen untuk meningkatkan kualitas dan cakupan layanan internet
            di seluruh Indonesia.
          </p>
          <p>
            Dengan pengalaman lebih dari 20 tahun, Exatel berkomitmen untuk terus
            berinovasi dalam menyediakan solusi dan layanan terbaik yang dapat diandalkan.
          </p>
        </div>
      </section>

      <section className="advantage-band">
        {[
          ["01", "NETRAL", "Infrastruktur terbuka untuk penyedia layanan berbasis IP, internet, IPTV dan telekomunikasi."],
          ["02", "CEPAT & STABIL", "Fiber optic berteknologi terbaru untuk komunikasi data berkecepatan tinggi."],
          ["03", "AMAN", "Infrastruktur dengan daya tahan tinggi terhadap gangguan dan jangkauan luas."],
          ["04", "HANDAL", "Teknologi dan sumber daya manusia profesional untuk layanan yang dapat diandalkan."],
        ].map(([n,t,d])=>(
          <article key={n} className="advantage">
            <span>{n}</span><h3>{t}</h3><p>{d}</p>
          </article>
        ))}
      </section>

      <section className="section network-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NETWORK</p>
            <h2>One infrastructure.<br />Many possibilities.</h2>
          </div>
          <p className="section-lead">
            Jaringan Exatel menghubungkan node, data center, exchange, ISP,
            corporate client dan government client melalui infrastruktur fiber.
          </p>
        </div>
        <NetworkGraphic />
      </section>

      <section id="solutions" className="section solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LAYANAN KAMI</p>
            <h2>Solutions for every layer of connectivity.</h2>
          </div>
        </div>
        <div className="service-groups">
          {services.map((group)=>(
            <div className="service-group" key={group.group}>
              <div className="service-group-title">{group.group}</div>
              <div className="service-grid">
                {group.items.map(([title,desc],i)=>(
                  <article className="service-card" key={title}>
                    <span className="card-number">0{i+1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <a href="#contact">Discuss solution →</a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-feature">
        <div className="section split">
          <div>
            <p className="eyebrow">FTTH OPEN ACCESS</p>
            <h2>A neutral fiber network for ISP growth.</h2>
          </div>
          <div className="body-copy">
            <p>
              Exatel menawarkan kerja sama penyediaan layanan FTTH Open Access
              bagi ISP maupun Subnet/Reseller resmi ISP.
            </p>
            <p>
              Exatel bertanggung jawab atas pembangunan jaringan, survei,
              penyediaan fiber optic dan aksesori, instalasi, commissioning,
              ODP serta pengujian konektivitas hingga CPE/ONT.
            </p>
            <p className="highlight-text">
              Exatel tidak menjual layanan internet langsung kepada end user;
              peluang layanan internet diberikan kepada ISP/Subnet ISP.
            </p>
          </div>
        </div>
      </section>

      <section id="managed" className="section managed">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXATEL MANAGED SERVICE</p>
            <h2>Let your IT team focus on the business.</h2>
          </div>
          <p className="section-lead">
            Pengelolaan infrastruktur IT secara terstruktur agar perusahaan
            dapat fokus pada operasional dan pengembangan bisnis.
          </p>
        </div>

        <div className="managed-benefits">
          {[
            ["PEACE OF MIND", "Pengelolaan infrastruktur oleh MSP dengan dukungan keberlangsungan sistem."],
            ["COST REDUCTION", "Mengubah kebutuhan Capex menjadi Opex berupa layanan bulanan."],
            ["PRODUCTIVITY", "Mengurangi beban pengadaan, pembaruan dan pemeliharaan infrastruktur."],
          ].map(([t,d])=><div key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>

        <div className="process">
          {["Analysis & Optimization","Network Design","Procurement & Installation","CPE, Device & Third Party Integration","Monitoring & Troubleshooting"].map((x,i)=>(
            <div key={x} className="process-step"><span>0{i+1}</span><b>{x}</b></div>
          ))}
        </div>
      </section>

      <section id="coverage" className="coverage-section">
        <div className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">COVERAGE AREA</p>
              <h2>Growing across Indonesia.</h2>
            </div>
            <p className="section-lead">
              Area coverage ditampilkan berdasarkan company profile. Status
              availability dapat diperbarui ketika data operasional tersedia.
            </p>
          </div>
          <div className="coverage-grid">
            {Object.entries(coverage).map(([province,cities])=>(
              <article className="coverage-card" key={province}>
                <h3>{province}</h3>
                <div>{cities.map(c=><span key={c}>{c}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Build your next<br /><span>connection with Exatel.</span></h2>
        <p>Diskusikan kebutuhan fiber, internet, network atau managed service Anda.</p>
        <a className="button primary" href="mailto:info@exatel.id">Contact Exatel</a>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">E</span><span>EXATEL</span></div>
        <p>PT. Elemen Jaringan Nusantara</p>
        <p className="footer-note">Company Profile website concept • Content based on supplied company profile PDF.</p>
      </footer>
    </main>
  );
}