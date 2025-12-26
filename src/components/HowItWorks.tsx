export default function HowItWorks() {
  const sponsorSteps = [
    { step: "1", title: "Kayıt Ol", desc: "Sponsor profilinizi oluşturun" },
    { step: "2", title: "İlgi Alanı Seç", desc: "Desteklemek istediğiniz alanlar" },
    { step: "3", title: "Etkinlik Gör", desc: "Uygun etkinlikleri inceleyin" },
    { step: "4", title: "Destek Ver", desc: "Seçtiğiniz etkinliği destekleyin" },
    { step: "5", title: "Rapor Al", desc: "Etki raporunuzu alın" },
  ];

  return (
    <section id="nasil-calisir" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Platform Akışı
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-gray-600">
            Hem uygulayıcılar hem de sponsorlar için basit ve net süreçler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Implementer Flow - Updated with branching */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Uygulayıcı Akışı</h3>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900">Kayıt Ol</h4>
                  <p className="text-sm text-gray-600">Kurum bilgilerinizi girin</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900">Plan Oluştur</h4>
                  <p className="text-sm text-gray-600">Etkinlik detaylarını belirleyin</p>
                </div>
              </div>

              {/* Branching Point - Step 3 */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-3">Durumunuza göre seçin:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Option A: Direct Service */}
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 hover:border-blue-400 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <h4 className="font-semibold text-blue-700 text-sm">Doğrudan Hizmet Al</h4>
                        </div>
                        <p className="text-xs text-gray-600">Bütçeniz varsa direkt hizmet alın</p>
                      </div>

                      {/* Option B: Search Sponsor */}
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 hover:border-purple-400 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">B</span>
                          </div>
                          <h4 className="font-semibold text-purple-700 text-sm">Sponsor Ara</h4>
                        </div>
                        <p className="text-xs text-gray-600">Desteğe ihtiyacınız varsa sponsor bulun</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900">Destek Al</h4>
                  <p className="text-sm text-gray-600">Set, rehberlik ve içerik desteği sağlayın</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-4 border-2 border-blue-200">
                  <h4 className="font-semibold text-gray-900">Uygula</h4>
                  <p className="text-sm text-gray-600">Etkinliğinizi başarıyla gerçekleştirin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor Flow */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sponsor Akışı</h3>
            </div>

            <div className="space-y-4">
              {sponsorSteps.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className={`flex-1 rounded-xl p-4 border ${index === sponsorSteps.length - 1 ? 'bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200' : 'bg-white border-gray-200'}`}>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connection Visual */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Uygulayıcılar ve Sponsorlar, Pinoo Etkisi&apos;nde buluşuyor
          </p>
        </div>
      </div>
    </section>
  );
}
