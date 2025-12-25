export default function Sponsorship() {
  const sponsorBenefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Sosyal Sorumluluk Görünürlüğü",
      description: "Eğitime destek veren marka olarak tanınma",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Yerel & Ulusal Etki",
      description: "Bölgesel veya ülke genelinde etkinlik desteği",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Raporlama & Geri Bildirim",
      description: "Etkinlik sonrası detaylı etki raporu",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Logo & İsim Kullanımı",
      description: "Etkinlik materyallerinde marka görünürlüğü",
    },
  ];

  return (
    <section id="sponsorluk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Platform Kalbi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sponsorluk Pazar Yeri
          </h2>
          <p className="text-xl text-gray-600">
            STEM etkinliklerini desteklemek isteyenlerle, desteğe ihtiyaç duyan kurumları
            akıllı eşleştirme ile buluşturuyoruz
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Event Organizers */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sponsor Arıyorum</h3>
            </div>

            <p className="text-gray-700 mb-6">
              STEM etkinliğiniz için uygun sponsorları bulun. Bölge, tema ve yaş grubu
              filtrelerimizle size en uygun eşleşmeleri sunuyoruz.
            </p>

            <div className="bg-white rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Eşleştirme Kriterleri:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Etkinlik türü
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Kurum tipi
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Katılımcı sayısı
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  İhtiyaç duyulan destek
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Bölge / şehir
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Sosyal etki hedefi
                </div>
              </div>
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Etkinliğim İçin Sponsor Ara
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* For Sponsors */}
          <div id="sponsor-ol" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sponsor Olmak İstiyorum</h3>
            </div>

            <p className="text-gray-700 mb-6">
              STEM ile sosyal etki yaratın. Geleceğin bilim insanlarını ve mühendislerini
              yetiştirmeye katkıda bulunun.
            </p>

            <div className="space-y-4 mb-6">
              {sponsorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                    <p className="text-gray-600 text-xs">{benefit.description}</p>
                  </div>
                </div>
              ))}
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

        {/* Matching Info */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-4">Akıllı Eşleştirme Sistemi</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bölge, tema, yaş grubu ve bütçe filtrelerimizle sponsor ve etkinlikleri
            otomatik eşleştiriyoruz. &quot;Bu etkinlik sponsora uygundur&quot; önerileri ile
            en verimli iş birliklerini kuruyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
