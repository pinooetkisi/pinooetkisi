"use client";

import { useState } from "react";

export default function Stakeholders() {
  const [activeTab, setActiveTab] = useState<"implementers" | "sponsors">("implementers");

  const implementers = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "Okullar",
      description: "STEM festivalleri ve yarışmalar düzenleyin",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "BİLSEM'ler",
      description: "Üstün yetenekliler için özel etkinlikler",
      color: "purple",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Belediyeler",
      description: "İlçe ve mahalle genelinde STEM şenlikleri",
      color: "indigo",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "STK'lar",
      description: "Sosyal sorumluluk projeleri ve eğitim programları",
      color: "teal",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Bilim Atölyeleri",
      description: "Kendi müşterileri için etkinlik ve kurslar",
      color: "orange",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Gençlik Merkezleri",
      description: "Gençlere yönelik teknoloji atölyeleri",
      color: "pink",
    },
  ];

  const sponsors = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Kurumsal Firmalar",
      description: "Ulusal görünürlük ve marka değeri",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Yerel İşletmeler",
      description: "Topluluk bağı ve yerel tanınırlık",
      color: "amber",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Eğitim Vakıfları",
      description: "Sosyal etki ve sürdürülebilir katkı",
      color: "rose",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Teknoloji Şirketleri",
      description: "Gelecek nesil yeteneklere erişim",
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; bgLight: string; text: string }> = {
      blue: { bg: "bg-blue-600", bgLight: "bg-blue-50", text: "text-blue-600" },
      purple: { bg: "bg-purple-600", bgLight: "bg-purple-50", text: "text-purple-600" },
      indigo: { bg: "bg-indigo-600", bgLight: "bg-indigo-50", text: "text-indigo-600" },
      teal: { bg: "bg-teal-600", bgLight: "bg-teal-50", text: "text-teal-600" },
      orange: { bg: "bg-orange-600", bgLight: "bg-orange-50", text: "text-orange-600" },
      pink: { bg: "bg-pink-600", bgLight: "bg-pink-50", text: "text-pink-600" },
      emerald: { bg: "bg-emerald-600", bgLight: "bg-emerald-50", text: "text-emerald-600" },
      amber: { bg: "bg-amber-600", bgLight: "bg-amber-50", text: "text-amber-600" },
      rose: { bg: "bg-rose-600", bgLight: "bg-rose-50", text: "text-rose-600" },
      cyan: { bg: "bg-cyan-600", bgLight: "bg-cyan-50", text: "text-cyan-600" },
    };
    return colors[color] || colors.blue;
  };

  const currentItems = activeTab === "implementers" ? implementers : sponsors;

  return (
    <section id="kimler" className="py-20 bg-white">
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
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5">
            <button
              onClick={() => setActiveTab("implementers")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "implementers"
                  ? "bg-white text-blue-600 shadow-sm"
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
                  ? "bg-white text-emerald-600 shadow-sm"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${colors.bgLight} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <div className={colors.text}>{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3">
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
