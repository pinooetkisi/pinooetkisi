import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinoo Etkisi | Okullara Robotik Kodlama Etkinlikleri",
  description:
    "Okulunuzda unutulmaz bir teknoloji festivali yaratın. Pinoo robotik setleri kiralama, etkinlik senaryoları ve tam destek paketi.",
  keywords: [
    "robotik kodlama",
    "okul etkinliği",
    "pinoo",
    "STEM eğitimi",
    "teknoloji festivali",
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
