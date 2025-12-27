"use client";

import { useState } from "react";
import Image from "next/image";

interface Theme {
  id: string;
  level: string;
  levelColor: string;
  theme: string;
  topic: string;
  image: string;
  pdfUrl: string;
}

export default function StemThemes() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const themes: Theme[] = [
    {
      id: "saglik-kaliteli-yasam",
      level: "İlkokul",
      levelColor: "orange",
      theme: "Sağlık ve Kaliteli Yaşam",
      topic: "Evde Yaşam Destekçim",
      image: "/images/themes/saglik-kaliteli-yasam.jpg",
      pdfUrl: "/docs/evde-yasam-destekcim.pdf",
    },
    {
      id: "akilli-tarim",
      level: "Ortaokul",
      levelColor: "blue",
      theme: "Akıllı Tarım",
      topic: "Geleceğin Tarım Mühendisleri",
      image: "/images/themes/akilli-tarim.jpg",
      pdfUrl: "/docs/gelecegin-tarim-muhendisleri.pdf",
    },
    {
      id: "uzay-cagi",
      level: "Ortaokul",
      levelColor: "purple",
      theme: "Uzay Çağı",
      topic: "Uzay Gözlemevi: Yeni Dünyaların Keşfi",
      image: "/images/themes/uzay-gozlemevi.jpg",
      pdfUrl: "/docs/uzay-gozlemevi.pdf",
    },
    {
      id: "akilli-sera",
      level: "Lise",
      levelColor: "emerald",
      theme: "Akıllı Tarım",
      topic: "Akıllı Sera Ekosistemi",
      image: "/images/themes/akilli-sera.jpg",
      pdfUrl: "/docs/akilli-sera-ekosistemi.pdf",
    },
  ];

  const getLevelColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-700",
      emerald: "bg-emerald-100 text-emerald-700",
      orange: "bg-orange-100 text-orange-700",
      purple: "bg-purple-100 text-purple-700",
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Örnek İçerikler
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              STEM Temaları ve Etkinlik İçerikleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı kademe ve konularda hazırladığımız örnek etkinlik içeriklerini inceleyebilirsiniz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={theme.topic}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(theme.levelColor)}`}>
                    {theme.level}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-sm text-blue-600 font-medium mb-1">{theme.theme}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {theme.topic}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF İçeriği İncele
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedTheme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedTheme(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(selectedTheme.levelColor)} mr-2`}>
                  {selectedTheme.level}
                </span>
                <span className="text-sm text-gray-500">{selectedTheme.theme}</span>
                <h3 className="font-bold text-gray-900 text-lg">{selectedTheme.topic}</h3>
              </div>
              <button
                onClick={() => setSelectedTheme(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src={`${selectedTheme.pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full"
                title={selectedTheme.topic}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500">
                Bu içerik örnek amaçlıdır. Etkinlikleriniz için özelleştirilebilir.
              </p>
              <a
                href={selectedTheme.pdfUrl}
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF İndir
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
