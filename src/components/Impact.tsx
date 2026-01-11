"use client";

import { useState } from "react";

export default function Impact() {
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

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
        {/* Main Content: Video + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-black/50 aspect-video group">
              {/* Video Placeholder - Replace src with actual video */}
              <video
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg"
                controls
                playsInline
              >
                <source src="/videos/pinoo-etkisi-tanitim.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsVideoFullscreen(true)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                title="Tam ekran"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
            <p className="text-gray-400 text-sm text-center mt-4">
              Pinoo Etkisi&apos;ni tanıyın
            </p>
          </div>

          {/* Stats & Header Section */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Sosyal Etki
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Birlikte Yarattığımız Etki
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Her etkinlik, geleceğin bilim insanları ve mühendislerine ilham veriyor
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Fullscreen Video Modal */}
      {isVideoFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setIsVideoFullscreen(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            className="w-full h-full max-w-6xl max-h-[90vh] object-contain"
            controls
            autoPlay
            playsInline
          >
            <source src="/videos/pinoo-etkisi-tanitim.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
}
