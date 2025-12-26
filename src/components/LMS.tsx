"use client";

import { useState } from "react";

export default function LMS() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "lms",
      badge: "Online Eğitim Platformu",
      title: "Pinoo 360 LMS",
      description:
        "Öğrenci ve katılımcıların etkinlik öncesi hazırlık yapabilmesi için interaktif online eğitim platformu.",
      color: "purple",
      listTitle: "Kimler İçin?",
      listItems: [
        "Daha önce robotik yapmamış öğrenciler",
        "Farklı kurumlardan gelen karma gruplar",
        "Yarışma veya festival öncesi hazırlık yapanlar",
      ],
      ctaText: "LMS Hakkında Bilgi Al",
      benefits: [
        {
          icon: "🎯",
          title: "Eşit Başlangıç",
          description: "Tüm katılımcılar aynı seviyeden başlar",
        },
        {
          icon: "⏱️",
          title: "Kendi Hızında Öğrenme",
          description: "Esnek zamanlı, bireysel ilerleme",
        },
        {
          icon: "🚀",
          title: "Verimli Uygulama",
          description: "Etkinlik günü maksimum performans",
        },
      ],
      visualIcon: "💻",
      visualText: "Video Dersler • Quizler • Simülasyonlar",
    },
    {
      id: "rehber",
      badge: "Etkinlik Kurgusu & Rehber",
      title: "Anahtar Teslim Etkinlik Desteği",
      description:
        "Etkinliklerinizi baştan sona planlayan, uygulayan ve yöneten profesyonel destek hizmeti.",
      color: "blue",
      listTitle: "Neler Dahil?",
      listItems: [
        "Etkinlik senaryosu ve akış planlaması",
        "Yaş grubuna uygun içerik seçimi",
        "Saha rehberi ve eğitmen desteği",
        "Malzeme ve ekipman koordinasyonu",
      ],
      ctaText: "Rehberlik Hizmeti Al",
      benefits: [
        {
          icon: "📋",
          title: "Hazır Senaryolar",
          description: "Test edilmiş etkinlik formatları",
        },
        {
          icon: "👨‍🏫",
          title: "Uzman Rehberlik",
          description: "Deneyimli eğitmenler sahada",
        },
        {
          icon: "🎪",
          title: "Sorunsuz Uygulama",
          description: "Tüm detaylar sizin için planlanır",
        },
      ],
      visualIcon: "🎯",
      visualText: "Planlama • Koordinasyon • Uygulama",
    },
  ];

  const currentSlide = slides[activeSlide];

  const getColorClasses = (color: string) => {
    if (color === "purple") {
      return {
        badge: "text-purple-600",
        check: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        benefitBg: "bg-purple-50",
        gradient: "from-purple-600 to-blue-600",
        dot: "bg-purple-600",
        dotInactive: "bg-purple-200",
      };
    }
    return {
      badge: "text-blue-600",
      check: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      benefitBg: "bg-blue-50",
      gradient: "from-blue-600 to-indigo-600",
      dot: "bg-blue-600",
      dotInactive: "bg-blue-200",
    };
  };

  const colors = getColorClasses(currentSlide.color);

  return (
    <section id="lms" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeSlide === index
                    ? `${slide.color === "purple" ? "bg-purple-600" : "bg-blue-600"} text-white shadow-md`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {index === 0 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )}
                {slide.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Slide Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="transition-all duration-300">
            <span className={`inline-block ${colors.badge} font-semibold text-sm uppercase tracking-wider mb-4`}>
              {currentSlide.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {currentSlide.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {currentSlide.description}
            </p>

            {/* List Items */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">{currentSlide.listTitle}</h3>
              <ul className="space-y-3">
                {currentSlide.listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 ${colors.check} flex-shrink-0`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#iletisim"
              className={`inline-flex items-center gap-2 ${colors.button} text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg`}
            >
              {currentSlide.ctaText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Neyi Sağlar?
            </h3>
            <div className="space-y-6">
              {currentSlide.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 ${colors.benefitBg} rounded-xl`}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual mockup */}
            <div className={`mt-8 bg-gradient-to-r ${colors.gradient} rounded-xl p-6 text-white text-center`}>
              <div className="text-4xl mb-2">{currentSlide.visualIcon}</div>
              <p className="font-medium">{currentSlide.visualText}</p>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === index
                  ? `${slide.color === "purple" ? "bg-purple-600" : "bg-blue-600"} w-8`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-center text-sm text-gray-500 mt-4 lg:hidden">
          Diğer hizmeti görmek için sekmelere tıklayın
        </p>
      </div>
    </section>
  );
}
