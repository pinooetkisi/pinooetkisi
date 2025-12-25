export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Pinoo Etkisi sayesinde 300'den fazla öğrencimiz robotik kodlama ile tanıştı. Organizasyondan teknik desteğe kadar her şey kusursuzdu.",
      author: "Ayşe Yılmaz",
      role: "Okul Müdürü",
      school: "Atatürk Ortaokulu, Ankara",
    },
    {
      quote:
        "Hazır senaryolar ve ders planları işimizi çok kolaylaştırdı. Öğrencilerimiz hâlâ o günü konuşuyor!",
      author: "Mehmet Kaya",
      role: "Bilişim Teknolojileri Öğretmeni",
      school: "Fatih Sultan Mehmet İlkokulu, İstanbul",
    },
    {
      quote:
        "Bütçe kaygımız vardı ama kiralama modeli sayesinde tüm okulu kapsayan bir etkinlik düzenleyebildik.",
      author: "Zeynep Demir",
      role: "Müdür Yardımcısı",
      school: "Cumhuriyet Ortaokulu, İzmir",
    },
  ];

  const stats = [
    { value: "50+", label: "Okul" },
    { value: "5000+", label: "Öğrenci" },
    { value: "200+", label: "Etkinlik" },
    { value: "%100", label: "Memnuniyet" },
  ];

  return (
    <section id="referanslar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Referanslar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Okulların Görüşleri
          </h2>
          <p className="text-xl text-gray-600">
            Pinoo Etkisi ile çalışan okullardan geri bildirimler.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-700 mb-6 mt-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-sm text-blue-600">{testimonial.school}</div>
              </div>
            </div>
          ))}
        </div>

        {/* School Logos Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">
            Türkiye genelinde birçok okul ile çalışıyoruz
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
              >
                Okul Logo {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
