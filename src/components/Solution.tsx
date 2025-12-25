export default function Solution() {
  return (
    <section id="nasil-calisir" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Çözümümüz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pinoo Etkisi: A&apos;dan Z&apos;ye Tam Kapsamlı Çözüm
          </h2>
          <p className="text-xl text-gray-600">
            Sadece malzeme kiralamıyoruz. Okulunuzda unutulmaz bir teknoloji
            festivali yaratıyoruz.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              step: "1",
              title: "İletişim",
              description:
                "Formu doldurun veya bizi arayın. İhtiyaçlarınızı dinleyelim.",
            },
            {
              step: "2",
              title: "Planlama",
              description:
                "Öğrenci sayısı, tarih ve senaryo seçeneklerini birlikte planlayalım.",
            },
            {
              step: "3",
              title: "Teslimat",
              description:
                "Setleri okulunuza getirelim, kurulumu yapalım, eğitimi verelim.",
            },
            {
              step: "4",
              title: "Etkinlik",
              description:
                "Etkinlik süresince destek sağlayalım, sonra setleri toplayalım.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-600/25">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-blue-100" />
              )}
            </div>
          ))}
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ekonomik Erişilebilirlik
                </h3>
                <p className="text-gray-600">
                  Satın alma yerine kiralama modeli ile yüksek başlangıç
                  maliyetlerini ortadan kaldırın. Bütçenizi verimli kullanın.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Operasyonel Kolaylık
                </h3>
                <p className="text-gray-600">
                  Lojistik, depolama, bakım ve envanter takibi gibi tüm
                  zahmetli işleri biz üstleniyoruz. Siz sadece etkinliğin
                  tadını çıkarın.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pedagojik Derinlik
                </h3>
                <p className="text-gray-600">
                  Maarif Modeli ve 21. yüzyıl becerileriyle uyumlu, müfredata
                  entegre edilebilir, anlamlı öğrenme deneyimleri sunuyoruz.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kapsayıcılık
                </h3>
                <p className="text-gray-600">
                  Robotik kodlama küçük bir kulüp aktivitesi olmaktan çıkıp,
                  tüm okulun katılabileceği bir festivale dönüşsün.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    %70
                  </div>
                  <div className="text-gray-600 text-sm">Maliyet Tasarrufu</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    0
                  </div>
                  <div className="text-gray-600 text-sm">Bakım Derdi</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    10x
                  </div>
                  <div className="text-gray-600 text-sm">Daha Fazla Öğrenci</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    7/24
                  </div>
                  <div className="text-gray-600 text-sm">Teknik Destek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
