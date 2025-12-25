import Link from "next/link";

export default function StemOpportunities() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Hazırlık",
      description: "Öğretmenler ve öğrenciler için uygulamalı STEM deneyimi",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Uygulama",
      description: "Proje, yarışma ve etkinlikler için sahada destek",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Güçlendirme",
      description: "Ulusal ve uluslararası programlara daha hazır katılım",
    },
  ];

  const programs = [
    { name: "Scientix", color: "bg-blue-100 text-blue-700" },
    { name: "Erasmus+", color: "bg-indigo-100 text-indigo-700" },
    { name: "eTwinning", color: "bg-purple-100 text-purple-700" },
    { name: "TÜBİTAK", color: "bg-emerald-100 text-emerald-700" },
    { name: "TEKNOFEST", color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            STEM Ekosistemi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ulusal ve Uluslararası STEM Fırsatlarına Hazırlanın
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Türkiye'de ve Avrupa'da öğrenci ve öğretmenlere yönelik birçok resmî STEM programı,
            proje ve yarışma bulunmaktadır.
          </p>

          {/* Program Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {programs.map((program) => (
              <span
                key={program.name}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${program.color}`}
              >
                {program.name}
              </span>
            ))}
          </div>

          <p className="text-gray-600">
            <strong className="text-gray-900">Pinoo Etkisi;</strong> bu fırsatlara katılmak isteyen kurumlar için
            hazırlık, uygulama ve destek süreçlerini kolaylaştıran bir <strong className="text-blue-600">köprü</strong> görevi görür.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Message Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm max-w-2xl mx-auto mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Pinoo Etkisi,</span> bu programların alternatifi değil;
              onlara <span className="text-blue-600 font-semibold">güçlü ve sürdürülebilir bir hazırlık süreci</span> sunar.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/stem-firsatlari"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
          >
            <span>Ulusal & Uluslararası STEM Fırsatlarını Keşfet</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Hangi program size uygun, Pinoo Etkisi nasıl destekler?
          </p>
        </div>
      </div>
    </section>
  );
}
