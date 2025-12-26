import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsor Ara | Pinoo Etkisi",
  description:
    "STEM etkinliğiniz için sponsor bulun. Pinoo Etkisi, STEM eğitimi ve etkinlikleri için sponsor arayan kurumları, sosyal etki yaratmak isteyen destekçilerle buluşturur.",
};

export default function SponsorAra() {
  const eligibleOrganizations = [
    { icon: "🏫", text: "Resmî ve özel okullar" },
    { icon: "💡", text: "BİLSEM'ler" },
    { icon: "🔬", text: "Özel bilim ve STEM atölyeleri" },
    { icon: "🏛️", text: "Belediyeler ve belediyelere bağlı birimler" },
    { icon: "🤝", text: "STK'lar, dernekler ve vakıflar" },
    { icon: "👥", text: "Gençlik ve eğitim merkezleri" },
  ];

  const supportAreas = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      text: "Etkinlik fikrinizin yapılandırılması",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      text: "İhtiyaç duyulan destek miktarının netleştirilmesi",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "Sponsorlar için anlaşılır ve güvenilir bir etkinlik profili oluşturulması",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      text: "Uygun sponsorlarla eşleştirme yapılması",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      text: "Etkinlik sürecinin planlanması ve uygulanması",
    },
  ];

  const processSteps = [
    { number: "1", text: "Kurumunuz adına başvuru yaparsınız" },
    { number: "2", text: "Etkinlik türü ve kapsamı belirlenir" },
    { number: "3", text: "Gerekli destek modeli oluşturulur" },
    { number: "4", text: "Uygun sponsorlarla eşleştirme yapılır" },
    { number: "5", text: "Etkinlik hayata geçirilir" },
  ];

  const socialImpacts = [
    "Daha fazla çocuğun STEM ile tanışmasını",
    "Fırsat eşitliğinin güçlenmesini",
    "Yerel ve ulusal düzeyde sosyal etki oluşmasını",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Sponsor Arama
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                STEM Etkinliğiniz İçin{" "}
                <span className="text-blue-600">Sponsor Bulun</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                Kaynak yetersizliği, nitelikli STEM etkinlikleri düzenlemenin önünde bir engel olmasın.
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                <strong className="text-gray-900">Pinoo Etkisi,</strong> STEM eğitimi ve etkinlikleri için sponsor arayan kurumları,
                sosyal etki yaratmak isteyen destekçilerle buluşturur.
              </p>
            </div>
          </div>
        </section>

        {/* Who Can Search Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Hedef Kitle
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Kimler Sponsor Arayabilir?
                </h2>
                <p className="text-lg text-gray-600">
                  Bu sayfa; STEM eğitimi, yarışması veya festivali düzenlemek isteyen ancak
                  gerekli bütçeye tam olarak sahip olmayan kurumlar için hazırlanmıştır.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {eligibleOrganizations.map((org, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-2xl">{org.icon}</span>
                    <span className="text-gray-700 font-medium">{org.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Önemli Not</p>
                  <p className="text-gray-600">
                    Sponsor arama süreci, Pinoo Etkisi tarafından şeffaf, güvenli ve yapılandırılmış şekilde yürütülür.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sponsor Support Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                    Neden Bu Model?
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Neden Sponsor Desteği?
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    STEM etkinlikleri; çocukların ve gençlerin problem çözme, üretme ve takım çalışması
                    becerilerini geliştiren <strong className="text-gray-900">yüksek etkili çalışmalardır.</strong>
                  </p>
                  <p className="text-lg text-gray-600">
                    Ancak bu etkinlikler her kurum için her zaman erişilebilir olmayabilir.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-gray-900">Pinoo Etkisi,</strong> iyi fikirlerin kaynak yetersizliği
                    nedeniyle hayata geçirilememesinin önüne geçmek için{" "}
                    <span className="text-emerald-600 font-semibold">sponsor destekli bir model</span> sunar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Support Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Destek Alanları
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sponsor Arama Sürecinde Yanınızdayız
                </h2>
              </div>

              <div className="space-y-4">
                {supportAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-50 hover:bg-blue-50 rounded-xl p-5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {area.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{area.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  Süreç
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sponsor Arama Süreci Nasıl İşler?
                </h2>
              </div>

              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-purple-200 hidden sm:block" />

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10">
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
                <p className="text-gray-600 bg-purple-50 inline-block px-6 py-3 rounded-full">
                  Bu süreçte hem kurumlar hem sponsorlar için{" "}
                  <strong className="text-purple-700">şeffaf ve güvenli</strong> bir yapı sağlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Etkinliğiniz İçin Sponsor Talebi Oluşturun
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Aşağıdaki formu doldurarak STEM etkinliğiniz için sponsor talebinizi oluşturabilirsiniz.
                    Paylaştığınız bilgiler, yalnızca uygun sponsorlarla eşleştirme yapılabilmesi amacıyla kullanılacaktır.
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-white mb-4">Formda istenecek bilgiler:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Kurum türü",
                      "Etkinlik türü (STEM eğitimi, yarışma, festival vb.)",
                      "Hedef yaş grubu",
                      "Katılımcı sayısı",
                      "İhtiyaç duyulan destek (tam / kısmi)",
                      "Etkinliğin hedeflenen sosyal etkisi",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-100">
                        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/#iletisim"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Sponsor Talebi Oluştur
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Sosyal Etki
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Bir Etkinlikten Daha Fazlası
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Sponsor desteğiyle hayata geçen her STEM etkinliği;
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {socialImpacts.map((impact, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{impact}</p>
                    <p className="text-sm text-gray-500 mt-1">sağlar</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600">
                <strong className="text-gray-900">Pinoo Etkisi,</strong> bu etkiyi görünür ve sürdürülebilir kılmayı hedefler.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                STEM Etkinliğinizi Birlikte Hayata Geçirelim
              </h2>
              <p className="text-lg sm:text-xl text-emerald-100 mb-8">
                Etkinlik fikriniz hazırsa, sponsor arama sürecini birlikte başlatalım.
              </p>
              <Link
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Sponsor Talebi Oluştur
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
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
                <span className="text-gray-600">&quot;Yardım isteyin&quot; dili <strong className="text-gray-900">yok</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">&quot;Birlikte değer üretelim&quot; dili var</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
