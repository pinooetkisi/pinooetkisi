export default function LMS() {
  const audiences = [
    "Daha önce robotik yapmamış öğrenciler",
    "Farklı kurumlardan gelen karma gruplar",
    "Yarışma veya festival öncesi hazırlık yapanlar",
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Eşit Başlangıç",
      description: "Tüm katılımcılar aynı seviyeden başlar",
    },
    {
      icon: "⏱️",
      title: "Kendi Hızında Öğrenme",
      description: "Esnek zamanlı, bireysel ilerleme",
    },
    {
      icon: "🚀",
      title: "Verimli Uygulama",
      description: "Etkinlik günü maksimum performans",
    },
  ];

  return (
    <section id="lms" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Online Eğitim Platformu
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Pinoo 360 LMS
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Öğrenci ve katılımcıların etkinlik öncesi hazırlık yapabilmesi için
              interaktif online eğitim platformu.
            </p>

            {/* Audiences */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Kimler İçin?</h3>
              <ul className="space-y-3">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              LMS Hakkında Bilgi Al
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Neyi Sağlar?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual mockup */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl mb-2">💻</div>
              <p className="font-medium">Video Dersler • Quizler • Simülasyonlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
