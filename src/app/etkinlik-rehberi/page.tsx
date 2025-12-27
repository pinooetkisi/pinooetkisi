import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import StemThemes from "@/components/StemThemes";
import ScenariosSlider from "@/components/ScenariosSlider";

export const metadata: Metadata = {
  title: "Etkinlik Kurgusu & Rehberlik | Pinoo Etkisi",
  description:
    "STEM etkinlikleriniz için anahtar teslim planlama, senaryo tasarımı ve saha rehberliği. Örnek yarışma senaryolarını inceleyin.",
};

export default function EtkinlikRehberi() {
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
        <ScenariosSlider />

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
