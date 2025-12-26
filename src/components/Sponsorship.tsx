export default function Sponsorship() {
  const sponsorBenefits = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      text: "Sosyal sorumluluk görünürlüğü",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "Detaylı etki raporu",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      text: "Marka görünürlüğü",
    },
  ];

  return (
    <section id="sponsorluk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nasıl Başlarsınız?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Etkinlik Düzenleme Seçenekleri
          </h2>
          <p className="text-xl text-gray-600">
            Kurumunuzun ihtiyacına göre doğrudan hizmet alabilir veya sponsor desteği arayabilirsiniz
          </p>
        </div>

        {/* Three Options Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Option 1: Direct Service */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Bütçeniz Varsa
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Doğrudan Hizmet Al</h3>
            </div>

            <p className="text-gray-700 mb-6">
              Kendi bütçenizle STEM etkinliği düzenlemek mi istiyorsunuz?
              Ekipman kiralama, eğitmen desteği ve içerik hizmetlerimizden doğrudan faydalanın.
            </p>

            <div className="bg-white rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Hizmetler:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pinoo robotik set kiralama
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Eğitmen ve rehber desteği
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hazır müfredat ve içerikler
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pinoo 360 LMS erişimi
                </div>
              </div>
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Hizmet Talebi Oluştur
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Option 2: Search Sponsor */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Desteğe İhtiyacınız Varsa
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sponsor Ara</h3>
            </div>

            <p className="text-gray-700 mb-6">
              Etkinlik fikriniz var ama bütçeniz yeterli değil mi?
              Size uygun sponsorlarla eşleştirme yaparak etkinliğinizi hayata geçirmenize yardımcı oluyoruz.
            </p>

            <div className="bg-white rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Süreç:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  Etkinlik fikrinizi paylaşın
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  İhtiyaç analizi yapılsın
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  Uygun sponsorlarla eşleşin
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  Etkinliği birlikte gerçekleştirin
                </div>
              </div>
            </div>

            <a
              href="/sponsor-ara"
              className="inline-flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Sponsor Bul
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Option 3: Become Sponsor */}
          <div id="sponsor-ol" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 border-2 border-emerald-200 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Destek Vermek İstiyorsanız
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sponsor Ol</h3>
            </div>

            <p className="text-gray-700 mb-6">
              STEM eğitimine katkı sağlayarak sosyal etki yaratın.
              Geleceğin bilim insanlarını yetiştirmeye destek olun.
            </p>

            <div className="bg-white rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Kazanımlar:</h4>
              <div className="space-y-2">
                {sponsorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    {benefit.text}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Sponsor Ol
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Hangi seçenek size uygun?</h3>
                <p className="text-gray-300 text-sm">
                  Emin değilseniz bize ulaşın, kurumunuzun ihtiyacına göre en uygun yolu birlikte belirleyelim.
                </p>
              </div>
            </div>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Danışmanlık Al
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
