export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/header-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/90" />
      </div>

      {/* Decorative elements - reduced opacity */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            STEM Etkinlikleri Platformu
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            STEM Etkinlikleri İçin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Uygulayıcıları ve Sponsorları
            </span>{" "}
            Buluşturuyoruz
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Okullar, bilim atölyeleri, BİLSEM&apos;ler, belediyeler ve STK&apos;lar için
            <strong> kiralama, rehberlik ve sponsorluk destekli</strong> STEM çözümleri
          </p>

          {/* 3 Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Etkinlik Düzenlemek İstiyorum
            </a>
            <a
              href="/sponsor-ara"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-purple-600/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Sponsor Arıyorum
            </a>
            <a
              href="/sponsor-ol"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-emerald-600/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Sponsor Olmak İstiyorum
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 pt-8 border-t border-gray-300/50">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600 text-sm">Etkinlik</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">5000+</div>
              <div className="text-gray-600 text-sm">Öğrenci</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">30+</div>
              <div className="text-gray-600 text-sm">Kurum</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600 text-sm">Sponsor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
