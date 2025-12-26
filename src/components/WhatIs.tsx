export default function WhatIs() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "STEM Etkinlik Kiralama",
      description: "Robotik setler, bilim kitleri ve tüm ekipmanları güvenle kiralayın",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Eğitim & Uygulama Desteği",
      description: "Uzman danışmanlık, hazır senaryolar ve Pinoo 360 LMS erişimi",
      color: "purple",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Sponsorluk Eşleştirme",
      description: "Etkinliklerinize uygun sponsorlarla buluşun, sosyal etki yaratın",
      color: "emerald",
    },
  ];

  return (
    <section id="nedir" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Platform Hakkında
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pinoo Etkisi Nedir?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pinoo Etkisi; STEM eğitimleri, yarışmaları ve festivalleri düzenlemek isteyen kurumlarla,
            bu etkinlikleri desteklemek isteyen sponsorları bir araya getiren{" "}
            <strong>bütüncül bir platformdur.</strong>
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                feature.color === "blue"
                  ? "from-blue-50 to-blue-100 border-blue-200"
                  : feature.color === "purple"
                  ? "from-purple-50 to-purple-100 border-purple-200"
                  : "from-emerald-50 to-emerald-100 border-emerald-200"
              } rounded-2xl p-8 border-2 hover:shadow-lg transition-all group`}
            >
              <div
                className={`w-16 h-16 ${
                  feature.color === "blue"
                    ? "bg-blue-600"
                    : feature.color === "purple"
                    ? "bg-purple-600"
                    : "bg-emerald-600"
                } text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Platform Identity */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Platform Kimliği
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Sadece &quot;okul hizmeti&quot; değil</span>
                </div>
                <div className="flex items-center gap-3 text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Sadece &quot;robotik kiralama&quot; değil</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>STEM için kaynak + uygulama</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Destek + sosyal etki platformu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
