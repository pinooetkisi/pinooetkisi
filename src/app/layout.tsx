import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinoo Etkisi | STEM Etkinlikleri için Uygulayıcı & Sponsor Platformu",
  description:
    "STEM etkinlikleri için uygulayıcıları ve sponsorları buluşturuyoruz. Okullar, belediyeler, STK'lar için kiralama, rehberlik ve sponsorluk destekli çözümler.",
  keywords: [
    "STEM etkinlik",
    "robotik kodlama",
    "sponsor eşleştirme",
    "okul etkinliği",
    "pinoo",
    "bilim festivali",
    "eğitim sponsorluğu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
