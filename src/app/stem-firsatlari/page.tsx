import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STEM Fırsatları | Pinoo Etkisi",
  description:
    "Türkiye ve Avrupa'daki ulusal ve uluslararası STEM programları, projeleri ve yarışmaları hakkında bilgi edinin. Scientix, Erasmus+, eTwinning, TÜBİTAK, TEKNOFEST.",
};

export default function StemFirsatlari() {
  const programs = [
    {
      name: "TÜBİTAK",
      category: "Ulusal",
      color: "emerald",
      description:
        "Türkiye Bilimsel ve Teknolojik Araştırma Kurumu, öğrenciler ve öğretmenler için çeşitli bilim projeleri, yarışmalar ve destekler sunmaktadır.",
      opportunities: [
        "4006 Bilim Fuarları",
        "2204 Lise Öğrencileri Araştırma Projeleri",
        "2237 Proje Eğitimi Etkinlikleri",
        "Bilim Olimpiyatları",
      ],
      link: "https://www.tubitak.gov.tr",
    },
    {
      name: "TEKNOFEST",
      category: "Ulusal",
      color: "orange",
      description:
        "Türkiye'nin en büyük havacılık, uzay ve teknoloji festivali. Öğrenciler için robotik, yapay zeka, insansız hava araçları gibi alanlarda yarışmalar düzenlenmektedir.",
      opportunities: [
        "Roket Yarışması",
        "İnsansız Hava Araçları",
        "Robotik Yarışmaları",
        "Yapay Zeka Yarışması",
        "Teknoloji Geliştirme Yarışmaları",
      ],
      link: "https://www.teknofest.org",
    },
    {
      name: "Scientix",
      category: "Uluslararası",
      color: "blue",
      description:
        "Avrupa Komisyonu destekli STEM eğitimi topluluğu. Öğretmenler için kaynaklar, projeler ve mesleki gelişim fırsatları sunmaktadır.",
      opportunities: [
        "STEM Öğretmen Akademisi",
        "Proje Kaynakları ve Materyaller",
        "Avrupa STEM Ağı",
        "Mesleki Gelişim Kursları",
      ],
      link: "https://www.scientix.eu",
    },
    {
      name: "Erasmus+",
      category: "Uluslararası",
      color: "indigo",
      description:
        "Avrupa Birliği'nin eğitim, gençlik ve spor programı. Okullar için ortaklık projeleri ve öğretmen/öğrenci hareketliliği fırsatları sunmaktadır.",
      opportunities: [
        "KA1 - Bireylerin Öğrenme Hareketliliği",
        "KA2 - Kurumlar Arası İşbirliği",
        "Okul Ortaklıkları",
        "Öğretmen Hareketliliği",
      ],
      link: "https://erasmus-plus.ec.europa.eu",
    },
    {
      name: "eTwinning",
      category: "Uluslararası",
      color: "purple",
      description:
        "Avrupa okulları için ücretsiz çevrimiçi platform. Öğretmenler projeler oluşturabilir, işbirliği yapabilir ve deneyimlerini paylaşabilir.",
      opportunities: [
        "Uluslararası Okul Projeleri",
        "Çevrimiçi İşbirliği",
        "Ulusal ve Avrupa Kalite Etiketi",
        "eTwinning Ödülleri",
      ],
      link: "https://school-education.ec.europa.eu/en/etwinning",
    },
  ];

  const supportAreas = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Proje Hazırlığı",
      description: "Program gereksinimlerine uygun proje konusu belirleme ve başvuru dosyası hazırlama desteği.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "STEM Atölyeleri",
      description: "Robotik, kodlama ve elektronik atölyeleri ile öğrencilerin proje becerilerini geliştirme.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Öğretmen Eğitimi",
      description: "STEM pedagojisi ve proje yönetimi konularında öğretmenlere yönelik profesyonel gelişim programları.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ekipman Desteği",
      description: "Pinoo robotik setleri ve STEM materyalleri ile proje geliştirme sürecinde teknik altyapı sağlama.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sponsor Eşleştirme",
      description: "Projeleriniz için kurumsal sponsor bulma ve sürdürülebilir kaynak oluşturma desteği.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Süreç Takibi",
      description: "Başvuru sürecinden proje tamamlamaya kadar her aşamada rehberlik ve ilerleme takibi.",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string; border: string }> = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        badge: "bg-emerald-100 text-emerald-700",
        border: "border-emerald-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        badge: "bg-orange-100 text-orange-700",
        border: "border-orange-200",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        badge: "bg-blue-100 text-blue-700",
        border: "border-blue-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        badge: "bg-indigo-100 text-indigo-700",
        border: "border-indigo-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        badge: "bg-purple-100 text-purple-700",
        border: "border-purple-200",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ulusal ve Uluslararası
                <span className="text-blue-600"> STEM Fırsatları</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Türkiye ve Avrupa'da öğrenci ve öğretmenlere yönelik resmî STEM programları,
                projeleri ve yarışmaları keşfedin. Pinoo Etkisi ile bu fırsatlara hazırlanın.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Programlar
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Katılabileceğiniz STEM Programları
              </h2>
            </div>

            <div className="space-y-6">
              {programs.map((program, index) => {
                const colors = getColorClasses(program.color);
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 sm:p-8`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className={`text-2xl font-bold ${colors.text}`}>{program.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                            {program.category}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{program.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Fırsatlar:</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {program.opportunities.map((opp, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-600">
                                <svg className={`w-4 h-4 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {opp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:text-right">
                        <a
                          href={program.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors ${colors.badge} hover:opacity-80`}
                        >
                          Resmi Site
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Pinoo Helps Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Nasıl Destekliyoruz
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Pinoo Etkisi ile Farka Hazırlanın
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bu programlara katılmak isteyen kurumlar için hazırlık, uygulama ve
                destek süreçlerini kolaylaştırıyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Bu Programların Alternatifi Değiliz
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8">
                Pinoo Etkisi, TÜBİTAK, TEKNOFEST, Erasmus+ ve diğer programlara
                <strong className="text-white"> güçlü ve sürdürülebilir bir hazırlık süreci</strong> sunar.
                Kurumunuzu bu fırsatlara en iyi şekilde hazırlıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Hemen Başvurun
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#nasil-calisir"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Nasıl Çalışır?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Pinoo Etkisi, TÜBİTAK veya TEKNOFEST'in resmi bir parçası mı?",
                  a: "Hayır, Pinoo Etkisi bu programların resmi bir parçası değildir. Ancak kurumların bu programlara hazırlanmasına yardımcı olan bağımsız bir destek platformuyuz.",
                },
                {
                  q: "Hangi okullar bu destekten faydalanabilir?",
                  a: "İlkokul, ortaokul ve liseler başta olmak üzere tüm eğitim kurumları, belediyeler, STK'lar ve özel kuruluşlar hizmetlerimizden faydalanabilir.",
                },
                {
                  q: "Destekleriniz ücretli mi?",
                  a: "Hizmetlerimizin bir kısmı sponsor destekli olarak ücretsiz sunulabilmektedir. Detaylı bilgi için bizimle iletişime geçin.",
                },
                {
                  q: "Proje başvurusu için son tarihler konusunda bilgilendirme yapıyor musunuz?",
                  a: "Evet, kayıtlı kurumlarımıza program takvimlerini ve önemli tarihleri düzenli olarak bildiriyoruz.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
