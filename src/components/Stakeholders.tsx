export default function Stakeholders() {
  const implementers = [
    {
      title: "Okullar",
      subtitle: "Resmî ve Özel",
      what: "STEM festivalleri ve yarışmalar düzenleyebilir",
      why: "Hazır içerik ve teknik destek ile kolay uygulama",
    },
    {
      title: "BİLSEM'ler",
      subtitle: "Bilim ve Sanat Merkezleri",
      what: "Üstün yetenekli öğrenciler için özel etkinlikler",
      why: "İleri seviye senaryolar ve yarışma formatları",
    },
    {
      title: "Belediyeler",
      subtitle: "Yerel Yönetimler",
      what: "Mahalle ve ilçe genelinde STEM şenlikleri",
      why: "Geniş katılımlı etkinlikler için ölçeklenebilir çözüm",
    },
    {
      title: "STK'lar",
      subtitle: "Sivil Toplum Kuruluşları",
      what: "Sosyal sorumluluk projeleri ve eğitim programları",
      why: "Sponsor eşleştirme ve proje desteği",
    },
    {
      title: "Bilim Atölyeleri",
      subtitle: "Özel STEM Merkezleri",
      what: "Kendi müşterileri için etkinlik ve kurslar",
      why: "Ekipman yatırımı olmadan geniş içerik havuzu",
    },
    {
      title: "Gençlik Merkezleri",
      subtitle: "Kamu & Özel",
      what: "Gençlere yönelik teknoloji atölyeleri",
      why: "Esnek kiralama ve uzman rehberlik",
    },
  ];

  const sponsors = [
    {
      title: "Özel Sektör",
      subtitle: "Kurumsal Firmalar",
      contribution: "Büyük ölçekli etkinlik sponsorluğu",
      benefit: "Ulusal görünürlük ve marka değeri",
    },
    {
      title: "Yerel İşletmeler",
      subtitle: "KOBİ'ler",
      contribution: "Bölgesel etkinlik desteği",
      benefit: "Topluluk bağı ve yerel tanınırlık",
    },
    {
      title: "Vakıflar",
      subtitle: "Eğitim Vakıfları",
      contribution: "Dezavantajlı bölgelerde STEM erişimi",
      benefit: "Sosyal etki raporu ve sürdürülebilir katkı",
    },
    {
      title: "Teknoloji Şirketleri",
      subtitle: "Yazılım & Donanım",
      contribution: "Teknoloji odaklı etkinlik sponsorluğu",
      benefit: "Gelecek nesil yeteneklere erişim",
    },
  ];

  return (
    <section id="kimler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Paydaşlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Kimler Faydalanabilir?
          </h2>
          <p className="text-xl text-gray-600">
            Platform, hem etkinlik düzenleyicileri hem de sponsorları bir araya getirir
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Implementers - Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Uygulayıcı Kurumlar</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {implementers.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
                >
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{item.subtitle}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">Ne yapabilir?</span>{" "}
                      {item.what}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">Neden Pinoo Etkisi?</span>{" "}
                      {item.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors - Right */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sponsorlar</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {sponsors.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer group"
                >
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{item.subtitle}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">Neye katkı sunar?</span>{" "}
                      {item.contribution}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-700">Ne kazanır?</span>{" "}
                      {item.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
