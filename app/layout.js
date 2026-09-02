import "./globals.css";

export const metadata = {
  title: "Exatel — Connecting the Unconnected",
  description: "PT. Elemen Jaringan Nusantara (Exatel) — Fiber infrastructure, internet and IT solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}