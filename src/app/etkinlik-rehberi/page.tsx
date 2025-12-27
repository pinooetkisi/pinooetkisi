import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import StemThemes from "@/components/StemThemes";

export const metadata: Metadata = {
  title: "Etkinlik Kurgusu & Rehberlik | Pinoo Etkisi",
  description:
    "STEM etkinlikleriniz için anahtar teslim planlama, senaryo tasarımı ve saha rehberliği. Örnek yarışma senaryolarını inceleyin.",
};

export default function EtkinlikRehberi() {
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

  const services = [
    {
      icon: "📋",
      title: "Etkinlik Planlama",
      description: "Hedef kitle, mekan ve bütçeye uygun etkinlik senaryosu tasarımı",
    },
    {
      icon: "🎯",
      title: "İçerik Seçimi",
      description: "Yaş grubuna ve öğrenme hedeflerine uygun aktivite belirleme",
    },
    {
      icon: "📦",
      title: "Malzeme Koordinasyonu",
      description: "Gerekli ekipman, kit ve malzemelerin temin ve lojistiği",
    },
    {
      icon: "👨‍🏫",
      title: "Eğitmen Desteği",
      description: "Deneyimli saha eğitmenleri ile profesyonel uygulama",
    },
    {
      icon: "📊",
      title: "Raporlama",
      description: "Etkinlik sonrası detaylı katılım ve etki raporu",
    },
    {
      icon: "🔄",
      title: "Süreç Yönetimi",
      description: "Baştan sona tüm koordinasyon ve iletişim desteği",
    },
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Etkinlik Kurgusu & Rehber
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Anahtar Teslim{" "}
                <span className="text-blue-600">STEM Etkinlikleri</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                Etkinliğinizi fikirden uygulamaya taşıyoruz. Planlama, koordinasyon ve
                saha desteğiyle sorunsuz bir deneyim sunuyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Aşağıdaki <strong className="text-gray-900">örnek senaryoları ve içerikleri</strong> inceleyerek
                etkinliğiniz için ilham alabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Hizmet Kapsamı
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Rehberlik Hizmetimiz Neleri Kapsar?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-blue-50 rounded-2xl p-6 transition-all hover:shadow-md"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
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

            <div className="space-y-8">
              {scenarios.map((scenario) => {
                const colors = getColorClasses(scenario.color);
                return (
                  <div
                    key={scenario.id}
                    className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${colors.border}`}
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${colors.gradient} px-6 sm:px-8 py-5`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{scenario.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            {scenario.duration}
                          </span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            {scenario.participants}
                          </span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                            {scenario.ageGroup}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <p className="text-gray-600 mb-6">{scenario.description}</p>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Phases */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${colors.bg}`}></span>
                            Etkinlik Akışı
                          </h4>
                          <div className="space-y-3">
                            {scenario.phases.map((phase, i) => (
                              <div key={i} className={`${colors.bgLight} rounded-xl p-4`}>
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
                            {scenario.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
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
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Süreç
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Etkinlik Rehberliği Nasıl Çalışır?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "İhtiyaç Analizi", desc: "Hedeflerinizi ve beklentilerinizi dinliyoruz" },
                  { step: "2", title: "Senaryo Tasarımı", desc: "Size özel etkinlik planı hazırlıyoruz" },
                  { step: "3", title: "Koordinasyon", desc: "Tüm lojistik ve hazırlıkları üstleniyoruz" },
                  { step: "4", title: "Uygulama", desc: "Sahada profesyonel ekiple etkinliği gerçekleştiriyoruz" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STEM Themes Section */}
        <StemThemes />

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Etkinliğinizi Birlikte Planlayalım
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Örnek senaryolardan ilham aldınız mı? Size özel bir etkinlik tasarlamak için
                bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Rehberlik Talebi Oluştur
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/sponsor-ara"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Sponsor Desteği Al
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700">
                <strong className="text-gray-900">Not:</strong> Tüm senaryolar örnek niteliğindedir ve
                kurumunuzun ihtiyaçlarına, mekan koşullarına ve bütçenize göre özelleştirilebilir.
                Etkinlik boyutu ve kapsamına göre fiyatlandırma değişiklik gösterebilir.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
