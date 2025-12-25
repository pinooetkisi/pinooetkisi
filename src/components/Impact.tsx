export default function Impact() {
  const stats = [
    { value: "50+", label: "Etkinlik", icon: "🎪" },
    { value: "5000+", label: "Öğrenci", icon: "👨‍🎓" },
    { value: "30+", label: "Desteklenen Kurum", icon: "🏫" },
    { value: "15+", label: "Sponsor Katkısı", icon: "💝" },
  ];

  const testimonials = [
    {
      quote: "Pinoo Etkisi ile ilk STEM festivalimizi düzenledik. Sponsor eşleştirme sayesinde tüm maliyetler karşılandı!",
      author: "Ayşe Yılmaz",
      role: "Okul Müdürü",
      org: "Atatürk Ortaokulu, Ankara",
    },
    {
      quote: "Sosyal sorumluluk projelerimizde Pinoo Etkisi'ni tercih ediyoruz. Etki raporları çok değerli.",
      author: "Mehmet Kaya",
      role: "Kurumsal İletişim Müdürü",
      org: "Teknoloji A.Ş.",
    },
  ];

  return (
    <section id="etki" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Sosyal Etki
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Birlikte Yarattığımız Etki
          </h2>
          <p className="text-xl text-gray-300">
            Her etkinlik, geleceğin bilim insanları ve mühendislerine ilham veriyor
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-200 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-emerald-400">{testimonial.org}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Türkiye genelinde güvenilir iş birlikleri</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Okullar", "BİLSEM", "Belediyeler", "STK'lar", "Firmalar"].map((org, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/10 rounded-lg text-gray-300 text-sm font-medium"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
