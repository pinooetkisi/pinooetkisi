"use client";

import { useState } from "react";

export default function SponsorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    // Kurum Bilgileri
    orgName: "",
    orgType: "",
    activityArea: "",
    website: "",
    // İletişim Bilgileri
    contactName: "",
    contactTitle: "",
    email: "",
    phone: "",
    // Sponsorluk Tercihleri
    eventTypes: [] as string[],
    ageGroups: [] as string[],
    geoPreference: "",
    supportModel: "",
    // Sosyal Etki
    motivation: "",
    visibilityRequests: [] as string[],
    // Raporlama
    wantsReport: "",
    // Onay
    consentData: false,
    consentProcess: false,
  });

  const orgTypes = [
    "Özel sektör firması",
    "Vakıf / fon sağlayıcı kuruluş",
    "Yerel işletme",
    "STK / dernek",
    "Diğer",
  ];

  const eventTypeOptions = [
    "STEM eğitimi",
    "Robotik kodlama etkinliği",
    "STEM yarışması",
    "Bilim / STEM festivali",
    "Diğer",
  ];

  const ageGroupOptions = [
    "İlkokul",
    "Ortaokul",
    "Lise",
    "Üniversite / gençlik",
    "Fark etmez",
  ];

  const supportModelOptions = [
    "Tam sponsorluk",
    "Kısmi sponsorluk",
    "Belirli gider kalemlerine destek",
    "İnceleme sonrası karar vermek istiyorum",
  ];

  const visibilityOptions = [
    "Logo / isim kullanımı",
    "Etkinlik raporlarında yer alma",
    "Sosyal medya görünürlüğü",
    "Görünürlük talebim yok",
  ];

  const handleCheckboxChange = (field: "eventTypes" | "ageGroups" | "visibilityRequests", value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field];
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [field]: [...currentValues, value] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          orgName: "",
          orgType: "",
          activityArea: "",
          website: "",
          contactName: "",
          contactTitle: "",
          email: "",
          phone: "",
          eventTypes: [],
          ageGroups: [],
          geoPreference: "",
          supportModel: "",
          motivation: "",
          visibilityRequests: [],
          wantsReport: "",
          consentData: false,
          consentProcess: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
  const sectionClass = "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Sponsor Başvuru Formu
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          STEM Etkinlikleri İçin Sponsor Başvurusu
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bu form, STEM eğitimleri, yarışmaları ve festivallerine destek olmak isteyen kurum ve kuruluşların başvurularını almak amacıyla hazırlanmıştır.
          Paylaştığınız bilgiler, yalnızca uygun etkinliklerle eşleştirme yapılması ve sponsorluk sürecinin sağlıklı şekilde yürütülmesi için kullanılacaktır.
        </p>
      </div>

      {/* 1. Kurum Bilgileri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🏢</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">1. Kurum Bilgileri</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <label className={labelClass}>
              Kurum / Kuruluş Adı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.orgName}
              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
              className={inputClass}
              placeholder="Kurumunuzun resmî adını giriniz"
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Kurum Türü <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.orgType}
              onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
              className={inputClass}
              required
            >
              <option value="">Seçiniz...</option>
              {orgTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Faaliyet Alanı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.activityArea}
              onChange={(e) => setFormData({ ...formData, activityArea: e.target.value })}
              className={inputClass}
              placeholder="Örnek: teknoloji, enerji, üretim, eğitim"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Web Sitesi <span className="text-gray-400 font-normal">(Opsiyonel)</span>
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className={inputClass}
              placeholder="https://www.orneksite.com"
            />
          </div>
        </div>
      </div>

      {/* 2. İletişim Bilgileri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">👤</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">2. İletişim Bilgileri</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>
              Yetkili Kişi Adı Soyadı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className={inputClass}
              placeholder="Ad Soyad"
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Görevi / Ünvanı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.contactTitle}
              onChange={(e) => setFormData({ ...formData, contactTitle: e.target.value })}
              className={inputClass}
              placeholder="Örnek: Pazarlama Müdürü"
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              E-posta Adresi <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              placeholder="ornek@sirket.com"
              required
            />
            <p className="text-sm text-gray-500 mt-1">Süreçle ilgili bilgilendirmeler bu adres üzerinden yapılacaktır.</p>
          </div>

          <div>
            <label className={labelClass}>
              Telefon Numarası <span className="text-gray-400 font-normal">(Opsiyonel)</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
              placeholder="05XX XXX XX XX"
            />
          </div>
        </div>
      </div>

      {/* 3. Sponsorluk Tercihleri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">3. Sponsorluk Tercihleri</h3>
        </div>

        <div className="space-y-6">
          {/* Etkinlik Türleri */}
          <div>
            <label className={labelClass}>
              Desteklemek İstediğiniz Etkinlik Türleri <span className="text-gray-400 font-normal">(Çoklu Seçim)</span>
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {eventTypeOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.eventTypes.includes(option)
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.eventTypes.includes(option)}
                    onChange={() => handleCheckboxChange("eventTypes", option)}
                    className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Yaş Grubu */}
          <div>
            <label className={labelClass}>
              Tercih Ettiğiniz Yaş Grubu <span className="text-gray-400 font-normal">(Çoklu Seçim)</span>
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ageGroupOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.ageGroups.includes(option)
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.ageGroups.includes(option)}
                    onChange={() => handleCheckboxChange("ageGroups", option)}
                    className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Coğrafi Tercih */}
          <div>
            <label className={labelClass}>
              Coğrafi Tercih <span className="text-gray-400 font-normal">(Opsiyonel)</span>
            </label>
            <input
              type="text"
              value={formData.geoPreference}
              onChange={(e) => setFormData({ ...formData, geoPreference: e.target.value })}
              className={inputClass}
              placeholder="Belirli bir il / bölge tercihiniz varsa belirtiniz"
            />
          </div>

          {/* Destek Modeli */}
          <div>
            <label className={labelClass}>
              Destek Modeli Tercihi <span className="text-red-500">*</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {supportModelOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.supportModel === option
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="supportModel"
                    value={option}
                    checked={formData.supportModel === option}
                    onChange={(e) => setFormData({ ...formData, supportModel: e.target.value })}
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                    required
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sosyal Etki ve Beklentiler */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🌱</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">4. Sosyal Etki ve Beklentiler</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              Sponsorluk Motivasyonunuz <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              className={`${inputClass} min-h-[120px]`}
              placeholder="STEM etkinliklerine neden destek olmak istediğinizi kısaca paylaşabilirsiniz..."
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Görünürlük Talebiniz <span className="text-gray-400 font-normal">(Opsiyonel - Çoklu Seçim)</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {visibilityOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.visibilityRequests.includes(option)
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.visibilityRequests.includes(option)}
                    onChange={() => handleCheckboxChange("visibilityRequests", option)}
                    className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Not: Görünürlük talepleri, etkinliğin yapısına ve tarafların mutabakatına göre değerlendirilir.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Raporlama ve Takip */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">5. Raporlama ve Takip</h3>
        </div>

        <div>
          <label className={labelClass}>
            Sosyal Etki Raporu Talebi <span className="text-red-500">*</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            <label
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.wantsReport === "Evet"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              <input
                type="radio"
                name="wantsReport"
                value="Evet"
                checked={formData.wantsReport === "Evet"}
                onChange={(e) => setFormData({ ...formData, wantsReport: e.target.value })}
                className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                required
              />
              <span className="text-gray-700">Evet, rapor almak istiyorum</span>
            </label>
            <label
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.wantsReport === "Hayır"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              <input
                type="radio"
                name="wantsReport"
                value="Hayır"
                checked={formData.wantsReport === "Hayır"}
                onChange={(e) => setFormData({ ...formData, wantsReport: e.target.value })}
                className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                required
              />
              <span className="text-gray-700">Hayır, gerekli değil</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Pinoo Etkisi, desteklenen etkinlikler için temel sosyal etki raporlaması sunar.
          </p>
        </div>
      </div>

      {/* 6. Onay & Gizlilik */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🔐</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">6. Onay &amp; Gizlilik</h3>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-emerald-300 transition-all">
            <input
              type="checkbox"
              checked={formData.consentData}
              onChange={(e) => setFormData({ ...formData, consentData: e.target.checked })}
              className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 mt-0.5"
              required
            />
            <span className="text-gray-700">
              Paylaştığım bilgilerin, Pinoo Etkisi eşleştirme ve sponsorluk süreci kapsamında kullanılmasını kabul ediyorum.
            </span>
          </label>

          <label className="flex items-start gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-emerald-300 transition-all">
            <input
              type="checkbox"
              checked={formData.consentProcess}
              onChange={(e) => setFormData({ ...formData, consentProcess: e.target.checked })}
              className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 mt-0.5"
              required
            />
            <span className="text-gray-700">
              Sürecin şeffaflık ve karşılıklı onay esasına göre yürütüleceğini biliyorum.
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting || !formData.consentData || !formData.consentProcess}
          className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-lg"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Gönderiliyor...
            </>
          ) : (
            <>
              Sponsor Başvurumu Gönder
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Başvurunuz Alındı!</h3>
          <p className="text-emerald-700">
            Pinoo Etkisi ekibi tarafından incelenecek ve uygun etkinlikler için sizinle iletişime geçilecektir.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Bir Hata Oluştu</h3>
          <p className="text-red-700">
            Lütfen daha sonra tekrar deneyin veya bizimle doğrudan iletişime geçin.
          </p>
        </div>
      )}

      {/* Footer Note */}
      <div className="bg-gray-50 rounded-2xl p-6 text-center">
        <p className="text-gray-600">
          <strong className="text-gray-900">Not:</strong> Başvurunuz alındıktan sonra, Pinoo Etkisi ekibi tarafından incelenecek ve uygun etkinlikler için sizinle iletişime geçilecektir. Başvurunuz, herhangi bir yükümlülük doğurmaz.
        </p>
      </div>
    </form>
  );
}
