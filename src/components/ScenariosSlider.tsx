"use client";

import { useState } from "react";

export default function ScenariosSlider() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: "robotik-yaris",
      title: "Robotik Yarışma Senaryosu",
      duration: "4-6 saat",
      participants: "50-200 öğrenci",
      ageGroup: "Ortaokul / Lise",
      color: "blue",
      description:
        "Takımların belirli görevleri tamamlamak için robot tasarladığı ve programladığı rekabetçi etkinlik formatı.",
      phases: [
        { name: "Kayıt & Açılış", duration: "30 dk", detail: "Takım kayıtları, kura çekimi, kuralların açıklanması" },
        { name: "Tasarım Süreci", duration: "90 dk", detail: "Robot tasarımı ve montajı" },
        { name: "Programlama", duration: "60 dk", detail: "Görev senaryosuna uygun kodlama" },
        { name: "Test Turları", duration: "45 dk", detail: "Deneme ve optimizasyon" },
        { name: "Final Yarışması", duration: "60 dk", detail: "Resmi yarışma turları" },
        { name: "Ödül Töreni", duration: "30 dk", detail: "Değerlendirme ve ödüller" },
      ],
      includes: [
        "Yarışma alanı kurulumu",
        "Hakem ve teknik destek ekibi",
        "Robotik kit ve malzeme",
        "Skor tablosu ve zamanlama sistemi",
        "Katılım sertifikaları",
      ],
    },
    {
      id: "stem-festival",
      title: "STEM Festival Senaryosu",
      duration: "1-2 gün",
      participants: "200-1000+ katılımcı",
      ageGroup: "İlkokul / Ortaokul / Lise",
      color: "purple",
      description:
        "Farklı STEM istasyonlarının kurulduğu, katılımcıların serbest dolaşarak deneyimlediği açık etkinlik formatı.",
      phases: [
        { name: "Alan Kurulumu", duration: "Önceki gün", detail: "İstasyonların hazırlanması" },
        { name: "Açılış Programı", duration: "30 dk", detail: "Tanıtım ve yönlendirme" },
        { name: "Serbest Dolaşım", duration: "3-4 saat", detail: "İstasyon deneyimleri" },
        { name: "Gösteri / Sunum", duration: "45 dk", detail: "Ana sahne etkinlikleri" },
        { name: "Kapanış", duration: "30 dk", detail: "Çekilişler ve kapanış" },
      ],
      includes: [
        "6-12 farklı STEM istasyonu",
        "Her istasyonda eğitmen",
        "Yönlendirme ve bilgilendirme panoları",
        "Katılımcı takip sistemi",
        "Fotoğraf ve video kayıt",
      ],
    },
    {
      id: "okul-ici-egitim",
      title: "Okul İçi STEM Eğitimi",
      duration: "2-4 saat",
      participants: "20-40 öğrenci",
      ageGroup: "İlkokul / Ortaokul",
      color: "emerald",
      description:
        "Sınıf ortamında veya okul salonunda gerçekleştirilen, müfredat destekli uygulamalı STEM atölyesi.",
      phases: [
        { name: "Tanışma & Isınma", duration: "15 dk", detail: "Eğitmen tanıtımı, beklenti belirleme" },
        { name: "Teorik Giriş", duration: "20 dk", detail: "Konuya ilişkin temel bilgiler" },
        { name: "Uygulama 1", duration: "45 dk", detail: "İlk proje/deney çalışması" },
        { name: "Ara & Paylaşım", duration: "15 dk", detail: "Deneyim paylaşımı" },
        { name: "Uygulama 2", duration: "45 dk", detail: "İleri seviye uygulama" },
        { name: "Sunum & Kapanış", duration: "20 dk", detail: "Projelerin sunumu" },
      ],
      includes: [
        "Müfredata uygun içerik tasarımı",
        "Sınıf için yeterli malzeme",
        "Deneyimli eğitmen",
        "Öğrenci çalışma yaprakları",
        "Öğretmen için ders planı",
      ],
    },
    {
      id: "teknofest-hazirligi",
      title: "TEKNOFEST Hazırlık Kampı",
      duration: "3-5 gün",
      participants: "15-30 öğrenci",
      ageGroup: "Ortaokul / Lise",
      color: "orange",
      description:
        "TEKNOFEST yarışmalarına katılacak takımların yoğunlaştırılmış hazırlık programı.",
      phases: [
        { name: "Gün 1: Temel Eğitim", duration: "6 saat", detail: "Platform ve araç tanıtımı" },
        { name: "Gün 2: Proje Geliştirme", duration: "6 saat", detail: "Tasarım ve prototipleme" },
        { name: "Gün 3: Programlama", duration: "6 saat", detail: "Yazılım geliştirme" },
        { name: "Gün 4: Test & İyileştirme", duration: "6 saat", detail: "Performans testleri" },
        { name: "Gün 5: Simülasyon", duration: "6 saat", detail: "Yarışma simülasyonu" },
      ],
      includes: [
        "Kategori bazlı uzman eğitmenler",
        "Geliştirme ortamı ve araçlar",
        "Yarışma simülasyon parkuru",
        "Teknik mentorluk",
        "Strateji ve sunum koçluğu",
      ],
    },
  ];

  const currentScenario = scenarios[activeScenario];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; bgLight: string; text: string; border: string; gradient: string; button: string }> = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-600 to-blue-700",
        button: "bg-blue-600",
      },
      purple: {
        bg: "bg-purple-600",
        bgLight: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700",
        button: "bg-purple-600",
      },
      emerald: {
        bg: "bg-emerald-600",
        bgLight: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        gradient: "from-emerald-600 to-emerald-700",
        button: "bg-emerald-600",
      },
      orange: {
        bg: "bg-orange-600",
        bgLight: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700",
        button: "bg-orange-600",
      },
    };
    return colors[color] || colors.blue;
  };

  const colors = getColorClasses(currentScenario.color);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Örnek Senaryolar
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Yarışma ve Etkinlik Senaryoları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bu senaryolar, geçmiş etkinliklerimizden derlenen örneklerdir.
            Her etkinlik, ihtiyaçlarınıza göre özelleştirilebilir.
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {scenarios.map((scenario, index) => {
            const tabColors = getColorClasses(scenario.color);
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(index)}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  activeScenario === index
                    ? `${tabColors.button} text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {scenario.title}
              </button>
            );
          })}
        </div>

        {/* Scenario Content */}
        <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border ${colors.border} transition-all duration-300`}>
          {/* Header */}
          <div className={`bg-gradient-to-r ${colors.gradient} px-6 sm:px-8 py-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentScenario.title}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {currentScenario.duration}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {currentScenario.participants}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {currentScenario.ageGroup}
                </span>
              </div>
            </div>
            <p className="text-white/90 mt-3">{currentScenario.description}</p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Phases */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${colors.bg}`}></span>
                  Etkinlik Akışı
                </h4>
                <div className="space-y-3">
                  {currentScenario.phases.map((phase, i) => (
                    <div key={i} className={`${colors.bgLight} rounded-xl p-4 transition-all`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900">{phase.name}</span>
                        <span className={`text-sm ${colors.text} font-medium`}>{phase.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600">{phase.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Paket İçeriği
                </h4>
                <ul className="space-y-3">
                  {currentScenario.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scenarios.map((scenario, index) => {
            const dotColors = getColorClasses(scenario.color);
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeScenario === index
                    ? `${dotColors.bg} w-8`
                    : "bg-gray-300 hover:bg-gray-400 w-2.5"
                }`}
                aria-label={`Senaryo ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-sm text-gray-500 mt-4 sm:hidden">
          Diğer senaryoları görmek için sekmelere tıklayın
        </p>
      </div>
    </section>
  );
}
