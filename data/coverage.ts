export type CoverageStatus = "available" | "coming-soon";

export interface CoverageRegion {
  group: string;
  status: CoverageStatus;
  // Approximate representative coordinate for the group's map marker.
  lat: number;
  lng: number;
  cities: string[];
}

// Status/coordinates are approximate placeholders pulled from the printed
// company profile's coverage map — swap in exact PoP coordinates when
// available from network ops.
export const coverageRegions: CoverageRegion[] = [
  {
    group: "DKI Jakarta & Banten",
    status: "available",
    lat: -6.2088,
    lng: 106.8456,
    cities: [
      "DKI Jakarta",
      "Tangerang",
      "Cilegon",
      "Kota Serang",
      "Kab. Serang",
      "Kab. Lebak",
    ],
  },
  {
    group: "Jawa Barat",
    status: "available",
    lat: -6.9175,
    lng: 107.6191,
    cities: [
      "Bekasi",
      "Cikarang",
      "Karawang",
      "Purwakarta",
      "Bandung Raya",
      "Sumedang",
      "Majalengka",
      "Kuningan",
      "Cirebon",
      "Subang",
      "Cianjur",
      "Sukabumi",
      "Bogor",
    ],
  },
  {
    group: "Jawa Tengah",
    status: "available",
    lat: -6.9932,
    lng: 110.4203,
    cities: [
      "Semarang",
      "Brebes",
      "Tegal",
      "Pemalang",
      "Weleri",
      "Batang",
      "Kota Pekalongan",
      "Kab. Pekalongan",
      "Kendal",
    ],
  },
  {
    group: "Jawa Timur",
    status: "available",
    lat: -7.2575,
    lng: 112.7521,
    cities: [
      "Surabaya",
      "Sidoarjo",
      "Pasuruan",
      "Bangil",
      "Kediri",
      "Gresik",
      "Lamongan",
      "Kertosono",
      "Jombang",
      "Mojokerto",
      "Purwosari",
      "Malang",
    ],
  },
  {
    group: "Bali & NTB",
    status: "coming-soon",
    lat: -8.4095,
    lng: 115.1889,
    cities: ["Gianyar", "Buleleng", "Lombok"],
  },
  {
    group: "Kalimantan Timur",
    status: "coming-soon",
    lat: -1.2379,
    lng: 116.8529,
    cities: ["Balikpapan", "Samarinda", "Bontang"],
  },
  {
    group: "Sulawesi Tengah",
    status: "coming-soon",
    lat: -0.8917,
    lng: 119.8707,
    cities: ["Palu", "Ampana", "Morowali", "Poso", "Luwuk", "Tentena"],
  },
  {
    group: "Sulawesi Tenggara",
    status: "coming-soon",
    lat: -3.945,
    lng: 122.4989,
    cities: ["Kendari"],
  },
];
