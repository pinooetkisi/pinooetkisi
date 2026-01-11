"use client";

import { useState } from "react";
import Image from "next/image";

export default function Stakeholders() {
  const [activeTab, setActiveTab] = useState<"implementers" | "sponsors">("implementers");

  const implementers = [
    {
      title: "Okullar",
      description: "Festivaller & Yarışmalar Düzenleyin",
      image: "/images/stakeholders/okullar.png",
      bgColor: "bg-blue-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      iconColor: "text-blue-600",
    },
    {
      title: "BİLSEM'ler",
      description: "Üstün Yetenekliler İçin Özel Etkinlikler",
      image: "/images/stakeholders/bilsemler.png",
      bgColor: "bg-indigo-50",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(120 12 12)" />
        </svg>
      ),
      iconColor: "text-indigo-600",
    },
    {
      title: "Belediyeler",
      description: "İlçe ve Mahalle Genelinde STEM Şenlikleri",
      image: "/images/stakeholders/belediyeler.png",
      bgColor: "bg-emerald-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconColor: "text-emerald-600",
    },
    {
      title: "STK'lar",
      description: "Sosyal Sorumluluk Projeleri ve Eğitim Programları",
      image: "/images/stakeholders/stklar.png",
      bgColor: "bg-rose-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconColor: "text-rose-600",
    },
    {
      title: "Bilim Atölyeleri",
      description: "Kendi Müşterileri İçin Etkinlik ve Kurslar",
      image: "/images/stakeholders/bilim-atolyeleri.png",
      bgColor: "bg-amber-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconColor: "text-amber-600",
    },
    {
      title: "Gençlik Merkezleri",
      description: "Gençlere Yönelik Teknoloji Atölyeleri",
      image: "/images/stakeholders/genclik-merkezleri.png",
      bgColor: "bg-purple-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconColor: "text-purple-600",
    },
  ];

  const sponsors = [
    {
      title: "Kurumsal Firmalar",
      description: "Ulusal Görünürlük ve Marka Değeri",
      image: "/images/stakeholders/kurumsal-firmalar.png",
      bgColor: "bg-emerald-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: "text-emerald-600",
    },
    {
      title: "Yerel İşletmeler",
      description: "Topluluk Bağı ve Yerel Tanınırlık",
      image: "/images/stakeholders/yerel-isletmeler.png",
      bgColor: "bg-amber-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      iconColor: "text-amber-600",
    },
    {
      title: "Eğitim Vakıfları",
      description: "Sosyal Etki ve Sürdürülebilir Katkı",
      image: "/images/stakeholders/egitim-vakiflari.png",
      bgColor: "bg-rose-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconColor: "text-rose-600",
    },
    {
      title: "Teknoloji Şirketleri",
      description: "Gelecek Nesil Yeteneklere Erişim",
      image: "/images/stakeholders/teknoloji-sirketleri.png",
      bgColor: "bg-cyan-50",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: "text-cyan-600",
    },
  ];

  const currentItems = activeTab === "implementers" ? implementers : sponsors;

  return (
    <section id="kimler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Paydaşlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kimler Faydalanabilir?
          </h2>
          <p className="text-lg text-gray-600">
            Platform, etkinlik düzenleyicileri ve sponsorları bir araya getirir
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab("implementers")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "implementers"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Uygulayıcı Kurumlar
            </button>
            <button
              onClick={() => setActiveTab("sponsors")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "sponsors"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Sponsorlar
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Text Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                  <div className={`mt-6 ${item.iconColor}`}>
                    {item.icon}
                  </div>
                </div>
                {/* Image */}
                <div className="w-full sm:w-1/2 h-40 sm:h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain object-center p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600">
              {activeTab === "implementers"
                ? "Etkinlik düzenlemek için hazır altyapı ve destek sunuyoruz"
                : "STEM eğitimine katkı sağlayarak topluma değer katın"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
