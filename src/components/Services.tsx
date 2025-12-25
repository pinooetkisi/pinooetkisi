export default function Services() {
  const eventTypes = [
    { name: "STEM Eğitimleri", icon: "📚" },
    { name: "Robotik Kodlama Yarışmaları", icon: "🤖" },
    { name: "STEM Festivalleri", icon: "🎪" },
    { name: "Bilim Şenlikleri", icon: "🔬" },
    { name: "Tematik Hackathon'lar", icon: "💻" },
  ];

  const supports = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Güvenli Set Kiralama",
      description: "Sigortalı, bakımlı ve tam donanımlı STEM kitleri",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Online Uzman Danışmanlığı",
      description: "Video görüşme ile etkinlik öncesi ve sırası destek",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Pinoo 360 LMS Erişimi",
      description: "Öğrenci hazırlık sürecinde interaktif online eğitim",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Etkinlik Kurgusu & Rehber",
      description: "Adım adım uygulama kılavuzları ve hazır senaryolar",
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            STEM Etkinlik Hizmetleri
          </h2>
          <p className="text-xl text-gray-600">
            Kiralama ve destek hizmetlerimizle etkinliğinizi başarıya taşıyın
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Düzenleyebileceğiniz Etkinlik Türleri
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-6 py-3 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{event.icon}</span>
                <span className="font-medium text-gray-800">{event.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supports.map((support, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {support.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{support.title}</h4>
              <p className="text-gray-600 text-sm">{support.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Etkinlik Planımı Oluştur
          </a>
        </div>
      </div>
    </section>
  );
}
