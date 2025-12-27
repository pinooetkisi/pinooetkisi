import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ulusal & Uluslararası STEM Fırsatları | Pinoo Etkisi",
  description:
    "Scientix, Erasmus+, eTwinning, TÜBİTAK ve TEKNOFEST gibi STEM programlarına hazırlanın. Pinoo Etkisi ile hazırlık, uygulama ve destek süreçlerini kolaylaştırın.",
};

export default function StemFirsatlari() {
  const programs = [
    {
      id: "scientix",
      logo: "/images/scientix-logo.png",
      name: "Scientix",
      color: "blue",
      description:
        "Scientix, Avrupa genelinde STEM eğitimini destekleyen, öğretmen ve okul odaklı bir iş birliği ağıdır.",
      supports: [
        "Scientix içeriklerine uygun uygulamalı STEM etkinlikleri oluşturulur",
        "Öğretmenlerin sınıf içi ve okul temelli STEM uygulamaları güçlendirilir",
        "Teorik içerikler sahada somut deneyimlere dönüştürülür",
      ],
      highlight: "Pinoo Etkisi, Scientix etkinliklerini sınıfın dışına taşır.",
    },
    {
      id: "erasmus",
      logo: "/images/erasmus-logo.png",
      name: "Erasmus+",
      subtitle: "Okul Eğitimi – KA1 / KA2",
      color: "indigo",
      description:
        "Erasmus+, okullar arası iş birliği, öğretmen gelişimi ve yenilikçi eğitim projelerini destekleyen Avrupa Birliği programıdır.",
      supports: [
        "Erasmus+ projeleri için uygulanabilir STEM altyapısı sunulur",
        "Proje fikirleri, öğrenci ve öğretmenlerle sahada test edilir",
        "Proje çıktıları somut ve ölçülebilir hâle getirilir",
      ],
      highlight: "Pinoo Etkisi, Erasmus+ projeleri için \"uygulanabilirlik\" güvencesi sağlar.",
    },
    {
      id: "etwinning",
      logo: "/images/etwinning-logo.png",
      name: "eTwinning",
      color: "purple",
      description:
        "eTwinning, Avrupa'daki okulların çevrim içi projeler ve iş birlikleri yürüttüğü bir platformdur.",
      supports: [
        "eTwinning projeleri için yüz yüze ve uygulamalı STEM etkinlikleri sağlanır",
        "Çevrim içi projeler, gerçek sınıf uygulamalarıyla desteklenir",
        "Projelerin kalite ve sürdürülebilirliği artırılır",
      ],
      highlight: "Pinoo Etkisi, eTwinning projelerini sahaya taşır.",
    },
    {
      id: "tubitak",
      logo: "/images/tübitak-logo.png",
      name: "TÜBİTAK",
      subtitle: "4006 – 2204 – 2202 vb.",
      color: "emerald",
      description:
        "TÜBİTAK, öğrenci ve öğretmenlerin bilimsel araştırma, proje geliştirme ve sergileme süreçlerini destekler.",
      supports: [
        "Proje fikirleri için deneysel ve uygulamalı STEM ortamı sağlanır",
        "Prototip geliştirme süreçleri desteklenir",
        "Sergi ve şenlik hazırlıkları kolaylaştırılır",
      ],
      highlight: "Pinoo Etkisi, TÜBİTAK projelerini fikirden uygulamaya taşır.",
    },
    {
      id: "teknofest",
      logo: "/images/teknofest-logo.png",
      name: "TEKNOFEST",
      color: "orange",
      description:
        "TEKNOFEST, Türkiye'nin en büyük teknoloji ve inovasyon festivali ve yarışma platformudur.",
      supports: [
        "Yarışmalara hazırlık için robotik ve STEM uygulama altyapısı sunulur",
        "Takım çalışması ve problem çözme becerileri geliştirilir",
        "Deneme ve hazırlık süreci güvenli şekilde yürütülür",
      ],
      highlight: "TEKNOFEST'e katılmadan önce Pinoo Etkisi ile hazır olun.",
    },
  ];

  const problems = [
    "Uygulama altyapısının yetersizliği",
    "Öğrencilerin yeterince hazır olmaması",
    "Öğretmenlerin süreçte yalnız kalması",
    "Zaman ve kaynak kısıtları",
  ];

  const solutions = [
    "Uygulama ve deneme ortamı",
    "Öğretmenlere online danışmanlık",
    "Öğrenciler için hazırlık süreci (Pinoo 360 LMS)",
    "Gerekirse sponsorluk desteği",
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; bgLight: string; text: string; border: string; gradient: string }> = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-600 to-blue-700",
      },
      indigo: {
        bg: "bg-indigo-600",
        bgLight: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        gradient: "from-indigo-600 to-indigo-700",
      },
      purple: {
        bg: "bg-purple-600",
        bgLight: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700",
      },
      emerald: {
        bg: "bg-emerald-600",
        bgLight: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        gradient: "from-emerald-600 to-emerald-700",
      },
      orange: {
        bg: "bg-orange-600",
        bgLight: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Ulusal & Uluslararası STEM Fırsatları
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ulusal ve Uluslararası STEM Programlarına{" "}
                <span className="text-blue-600">Hazırlanın</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                Türkiye'de ve Avrupa'da öğrenci ve öğretmenlere yönelik birçok STEM programı,
                proje ve yarışma bulunmaktadır.
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                <strong className="text-gray-900">Pinoo Etkisi,</strong> bu fırsatlara katılmak isteyen kurumlar için
                hazırlık, uygulama ve destek süreçlerini kolaylaştırır.
              </p>
            </div>
          </div>
        </section>

        {/* What Pinoo Provides Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Ekosistemde Yerimiz
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Pinoo Etkisi Ne Sağlar?
                </h2>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-10 border border-gray-100">
                <p className="text-lg text-gray-700 mb-6">
                  <strong className="text-gray-900">Pinoo Etkisi;</strong> ulusal ve uluslararası STEM programlarının yerine geçmez.
                  Bu programlara katılımı güçlendiren, uygulamayı mümkün kılan ve süreçleri sürdürülebilir hâle getiren bir{" "}
                  <span className="text-blue-600 font-semibold">destek modelidir.</span>
                </p>
                <p className="text-lg text-gray-700">
                  Öğretmenler için rehberlik, öğrenciler için uygulama pratiği ve kurumlar için güvenli bir altyapı sunar.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Öğretmenler İçin</h3>
                    <p className="text-sm text-gray-600">Rehberlik ve danışmanlık</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Öğrenciler İçin</h3>
                    <p className="text-sm text-gray-600">Uygulama pratiği</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kurumlar İçin</h3>
                    <p className="text-sm text-gray-600">Güvenli altyapı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Desteklenen Programlar
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                STEM Programları ve Pinoo Etkisi Desteği
              </h2>
            </div>

            <div className="space-y-8">
              {programs.map((program) => {
                const colors = getColorClasses(program.color);
                return (
                  <div
                    key={program.id}
                    id={program.id}
                    className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${colors.border}`}
                  >
                    <div className={`bg-gradient-to-r ${colors.gradient} px-6 sm:px-8 py-5`}>
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-lg">
                          <Image
                            src={program.logo}
                            alt={`${program.name} logo`}
                            width={72}
                            height={72}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{program.name}</h3>
                          {program.subtitle && (
                            <p className="text-white/80 text-sm">{program.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* What is it */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${colors.bg}`}></span>
                            {program.name} Nedir?
                          </h4>
                          <p className="text-gray-600">{program.description}</p>
                        </div>

                        {/* How Pinoo helps */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            Pinoo Etkisi ile Nasıl Desteklenir?
                          </h4>
                          <ul className="space-y-2">
                            {program.supports.map((support, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <svg className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{support}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Highlight */}
                      <div className={`mt-6 ${colors.bgLight} rounded-xl p-4 border ${colors.border}`}>
                        <p className={`font-semibold ${colors.text} flex items-center gap-2`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {program.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Problems & Solutions Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Ortak Sorun – Ortak Çözüm
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Bu Programlara Katılmak Neden Zor?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Problems */}
              <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Karşılaşılan Sorunlar</h3>
                </div>
                <ul className="space-y-4">
                  {problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pinoo Etkisi Ne Sağlar?</h3>
                </div>
                <ul className="space-y-4">
                  {solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Connection Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Bu Fırsatlara Erişim Herkes İçin Mümkün Olsun
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ulusal ve uluslararası STEM programlarına katılım, çoğu zaman ek kaynak gerektirir.
                Pinoo Etkisi, bu süreçte etkinlik düzenleyicilerle sponsorları bir araya getirerek{" "}
                <strong className="text-gray-900">fırsat eşitliğini güçlendirir.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Bu Programlar İçin Sponsor Ara
                </Link>
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  STEM İçin Sponsor Ol
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                STEM Ekosistemine Güçlü Bir Adım Atın
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Hangi programa katılmak istediğinizden bağımsız olarak,
                Pinoo Etkisi ile süreci güvenle planlayın ve hayata geçirin.
              </p>
              <Link
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Bizimle İletişime Geçin
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Strategic Message Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">&quot;Alternatif sistem&quot; <strong className="text-gray-900">değil</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">&quot;Hazırlık ve uygulama köprüsü&quot;</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
