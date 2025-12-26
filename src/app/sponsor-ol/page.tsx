import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SponsorForm from "@/components/SponsorForm";

export const metadata: Metadata = {
  title: "Sponsor Ol | Pinoo Etkisi",
  description:
    "STEM ile sosyal etki yaratın. Pinoo Etkisi, STEM eğitimleri ve etkinlikleri için destek olmak isteyen sponsorları gerçek ihtiyaçlarla buluşturur.",
};

export default function SponsorOl() {
  const eligibleSponsors = [
    { icon: "🏢", text: "Özel sektör firmaları" },
    { icon: "🏛️", text: "Vakıflar ve fon sağlayıcı kuruluşlar" },
    { icon: "💻", text: "Teknoloji, enerji ve üretim şirketleri" },
    { icon: "🏪", text: "Yerel işletmeler" },
    { icon: "🤝", text: "Sosyal sorumluluk projeleri yürüten kurumlar" },
  ];

  const sponsorBenefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Gerçek ihtiyaçlara yönelik destek imkânı",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      text: "Şeffaf ve planlı sponsorluk süreci",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: "Etkinlik bazlı, somut katkı",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: "Ölçülebilir sosyal etki",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      text: "Talep edilmesi hâlinde görünürlük ve iletişim desteği",
    },
  ];

  const processSteps = [
    { number: "1", text: "Sponsor olarak başvuru yapılır" },
    { number: "2", text: "İlgi alanları ve destek kapsamı belirlenir" },
    { number: "3", text: "Uygun STEM etkinlikleri önerilir" },
    { number: "4", text: "Destek sağlanır" },
    { number: "5", text: "Etkinlik gerçekleştirilir ve raporlanır" },
  ];

  const reportingItems = [
    "Desteklenen etkinlik bilgileri",
    "Katılımcı sayıları ve hedef gruplar",
    "Etkinlik çıktıları",
    "Geri bildirimler ve etki özeti",
  ];

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 via-white to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Sponsor Ol
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                STEM ile{" "}
                <span className="text-emerald-600">Sosyal Etki</span> Yaratın
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                <strong className="text-gray-900">Pinoo Etkisi;</strong> STEM eğitimleri, yarışmaları ve festivalleri için
                destek olmak isteyen sponsorları, gerçek ihtiyaçlarla ve ölçülebilir sosyal etkiyle buluşturur.
              </p>
              <a
                href="#sponsor-basvuru-formu"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-600/20"
              >
                Sponsor Ol
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Neden Sponsor Olmalısınız?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Neden Pinoo Etkisi Üzerinden Sponsor Olmalısınız?
                </h2>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-10 border border-emerald-100">
                <p className="text-lg text-gray-700 mb-6">
                  STEM eğitimi; geleceğin üretken, sorgulayan ve çözüm odaklı bireylerini yetiştirmenin
                  <strong className="text-gray-900"> temel taşlarından biridir.</strong>
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Pinoo Etkisi, sponsorların bu dönüşüme doğrudan ve anlamlı katkı sunabilmesi için
                  <span className="text-emerald-600 font-semibold"> yapılandırılmış bir destek modeli</span> sunar.
                </p>
                <div className="bg-white rounded-2xl p-6 border border-emerald-200">
                  <p className="text-gray-700 flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>
                      Bu platform üzerinden sağlanan her destek,{" "}
                      <strong className="text-gray-900">gerçek bir ihtiyaca, doğru bir uygulamaya ve ölçülebilir bir etkiye</strong> dönüşür.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Sponsor Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Hedef Kitle
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Kimler Sponsor Olabilir?
                </h2>
                <p className="text-lg text-gray-600">
                  Pinoo Etkisi; STEM alanında sosyal katkı sağlamak isteyen tüm kurum ve kuruluşlara açıktır.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eligibleSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">{sponsor.icon}</span>
                    <span className="text-gray-700 font-medium">{sponsor.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Sponsor Kazanımları
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sponsorlar İçin Şeffaf ve Güvenli Bir Model
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                {sponsorBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl p-5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <p className="text-gray-300">
                  <strong className="text-white">Not:</strong> Pinoo Etkisi&apos;nde sponsorluk, bağış değil;{" "}
                  <span className="text-emerald-400 font-semibold">yapılandırılmış bir sosyal etki ortaklığıdır.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Süreç
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sponsor Olma Süreci
                </h2>
              </div>

              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-emerald-200 hidden sm:block" />

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10">
                        {step.number}
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                        <p className="text-gray-700 font-medium">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-600 bg-emerald-50 inline-block px-6 py-3 rounded-full">
                  Bu süreç boyunca sponsorlar,{" "}
                  <strong className="text-emerald-700">destek verdikleri etkinliğin tüm aşamalarını takip edebilir.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                    Sosyal Etki ve Raporlama
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Etkisi Ölçülen Destekler
                  </h2>
                  <p className="text-lg text-gray-600">
                    Pinoo Etkisi, sponsorların sağladığı katkıların yalnızca uygulanmasını değil,
                    <strong className="text-gray-900"> etkisini de görünür kılmayı</strong> önemser.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Sunulan Raporlama İçerikleri:</h3>
                  <div className="space-y-3">
                    {reportingItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Together Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Birlikte Geleceğe Yatırım Yapalım
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              STEM alanında yapılan her katkı, yalnızca bugünün değil,
              <strong className="text-gray-900"> geleceğin de güçlenmesine</strong> hizmet eder.
              Pinoo Etkisi ile siz de bu dönüşümün bir parçası olun.
            </p>
          </div>
        </section>

        {/* Sponsor Application Form */}
        <section id="sponsor-basvuru-formu" className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SponsorForm />
          </div>
        </section>

        {/* Message Summary */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">&quot;Bağış&quot; dili <strong className="text-gray-900">yok</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">Şeffaf ve izlenebilir destek modeli</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
