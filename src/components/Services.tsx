import Image from "next/image";

export default function Services() {
  const eventTypes = [
    { name: "Robot Yarışmaları", icon: "🤖" },
    { name: "Bilim/STEM Yarışma Etkinlikleri", icon: "🏆" },
    { name: "Bilim/STEM Şenlikleri", icon: "🎪" },
    { name: "STEM Eğitim/Atölye Programları", icon: "📚" },
    { name: "TÜBİTAK/TEKNOFEST Etkinlik Programları", icon: "🚀" },
  ];

  const services = [
    {
      title: "Güvenli Set Kiralama",
      description: "Sigortalı, bakımlı ve tam donanımlı STEM kitleri",
      image: "/images/services/set-kiralama.jpg",
      color: "blue",
    },
    {
      title: "Online Uzman Danışmanlığı",
      description: "Video görüşme ile etkinlik öncesi ve sırası destek",
      image: "/images/services/uzman-danismanlik.jpg",
      color: "purple",
    },
    {
      title: "Pinoo 360 LMS Erişimi",
      description: "Öğrenci hazırlık sürecinde interaktif online eğitim",
      image: "/images/services/lms-erisimi.jpg",
      color: "emerald",
    },
    {
      title: "Etkinlik Kurgusu & Rehber",
      description: "Adım adım uygulama kılavuzları ve hazır senaryolar",
      image: "/images/services/etkinlik-rehber.jpg",
      color: "orange",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  };

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

        {/* Services with Images - 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden border ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                {/* Image - Wide landscape aspect ratio */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={`p-4 ${colors.bg}`}>
                  <h4 className={`text-sm sm:text-base font-bold mb-1 ${colors.text}`}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/etkinlik-planla"
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
