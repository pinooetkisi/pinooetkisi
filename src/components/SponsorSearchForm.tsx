"use client";

import { useState } from "react";

export default function SponsorSearchForm() {
  const [formData, setFormData] = useState({
    // Kurum Bilgileri
    orgName: "",
    orgType: "",
    city: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",

    // Etkinlik Bilgileri
    eventType: [] as string[],
    eventTitle: "",
    eventDescription: "",
    targetAgeGroup: [] as string[],
    participantCount: "",
    plannedDate: "",
    eventLocation: "",

    // Destek İhtiyacı
    supportType: "",
    estimatedBudget: "",
    currentBudget: "",
    supportAreas: [] as string[],

    // Sosyal Etki
    socialImpactGoals: "",
    previousExperience: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orgTypes = [
    "Devlet Okulu",
    "Özel Okul",
    "BİLSEM",
    "Belediye / Kamu Kurumu",
    "STK / Dernek / Vakıf",
    "Gençlik Merkezi",
    "Özel STEM Atölyesi",
    "Diğer",
  ];

  const eventTypes = [
    "Robot Yarışması",
    "STEM Festivali / Şenliği",
    "Bilim Yarışması",
    "STEM Eğitimi / Atölye",
    "TÜBİTAK Projesi (4004/4005/4006/4007)",
    "TEKNOFEST Hazırlık",
    "Hackathon",
    "Diğer",
  ];

  const ageGroups = [
    "Okul Öncesi (5-6 yaş)",
    "İlkokul (7-10 yaş)",
    "Ortaokul (11-14 yaş)",
    "Lise (15-18 yaş)",
    "Karma (Birden fazla kademe)",
  ];

  const supportAreas = [
    "Robotik set ve malzeme",
    "Eğitmen / Uzman desteği",
    "Mekan ve organizasyon",
    "Ulaşım ve lojistik",
    "Yiyecek / İkram",
    "Tanıtım ve iletişim",
    "Ödül ve hediyeler",
    "Tüm süreç (anahtar teslim)",
  ];

  const supportTypes = [
    { value: "full", label: "Tam destek (Tüm bütçe sponsordan)" },
    { value: "partial", label: "Kısmi destek (Bütçenin bir kısmı mevcut)" },
    { value: "inkind", label: "Ayni destek (Malzeme, mekan vb.)" },
  ];

  const handleCheckboxChange = (field: string, value: string) => {
    const currentValues = formData[field as keyof typeof formData] as string[];
    if (currentValues.includes(value)) {
      setFormData({
        ...formData,
        [field]: currentValues.filter((v) => v !== value),
      });
    } else {
      setFormData({
        ...formData,
        [field]: [...currentValues, value],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sponsor-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form gönderimi hatası:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionClass = "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Talebiniz Alındı!
        </h2>
        <p className="text-gray-600 mb-6">
          Sponsor arama talebiniz başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 text-left max-w-md mx-auto">
          <h3 className="font-semibold text-gray-900 mb-3">Sonraki Adımlar:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              Talebiniz incelenecek
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              Sizinle ön görüşme yapılacak
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              Uygun sponsorlarla eşleştirme yapılacak
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* 1. Kurum Bilgileri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🏫</span>
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
              İl <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClass}
              placeholder="Örnek: İstanbul"
              required
            />
          </div>
        </div>
      </div>

      {/* 2. İletişim Bilgileri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">📞</span>
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
              E-posta <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className={inputClass}
              placeholder="ornek@kurum.edu.tr"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              className={inputClass}
              placeholder="05XX XXX XX XX"
              required
            />
          </div>
        </div>
      </div>

      {/* 3. Etkinlik Bilgileri */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">3. Etkinlik Bilgileri</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              Etkinlik Türü <span className="text-red-500">*</span> <span className="text-gray-400 font-normal">(Birden fazla seçebilirsiniz)</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {eventTypes.map((type) => (
                <label key={type} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.eventType.includes(type)}
                    onChange={() => handleCheckboxChange("eventType", type)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Etkinlik Başlığı / Adı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.eventTitle}
              onChange={(e) => setFormData({ ...formData, eventTitle: e.target.value })}
              className={inputClass}
              placeholder="Örnek: 2. Geleneksel Robot Yarışması"
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Etkinlik Açıklaması <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.eventDescription}
              onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
              className={inputClass}
              rows={4}
              placeholder="Etkinliğinizi kısaca tanıtın. Amacı, kapsamı ve hedeflerini belirtin."
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Hedef Yaş Grubu <span className="text-red-500">*</span>
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ageGroups.map((group) => (
                <label key={group} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.targetAgeGroup.includes(group)}
                    onChange={() => handleCheckboxChange("targetAgeGroup", group)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-gray-700 text-sm">{group}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className={labelClass}>
                Katılımcı Sayısı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.participantCount}
                onChange={(e) => setFormData({ ...formData, participantCount: e.target.value })}
                className={inputClass}
                placeholder="Örnek: 100-150"
                required
              />
            </div>

            <div>
              <label className={labelClass}>
                Planlanan Tarih <span className="text-gray-400 font-normal">(Tahmini)</span>
              </label>
              <input
                type="text"
                value={formData.plannedDate}
                onChange={(e) => setFormData({ ...formData, plannedDate: e.target.value })}
                className={inputClass}
                placeholder="Örnek: Mayıs 2025"
              />
            </div>

            <div>
              <label className={labelClass}>
                Etkinlik Yeri
              </label>
              <input
                type="text"
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                className={inputClass}
                placeholder="Örnek: Okul spor salonu"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Destek İhtiyacı */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">💰</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">4. Destek İhtiyacı</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              Destek Türü <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {supportTypes.map((type) => (
                <label key={type.value} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="supportType"
                    value={type.value}
                    checked={formData.supportType === type.value}
                    onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                    className="w-5 h-5 text-blue-600"
                    required
                  />
                  <span className="text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>
                Tahmini Toplam Bütçe <span className="text-gray-400 font-normal">(TL)</span>
              </label>
              <input
                type="text"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className={inputClass}
                placeholder="Örnek: 50.000"
              />
            </div>

            <div>
              <label className={labelClass}>
                Mevcut Bütçe <span className="text-gray-400 font-normal">(varsa)</span>
              </label>
              <input
                type="text"
                value={formData.currentBudget}
                onChange={(e) => setFormData({ ...formData, currentBudget: e.target.value })}
                className={inputClass}
                placeholder="Örnek: 10.000"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Destek Gereken Alanlar <span className="text-gray-400 font-normal">(Birden fazla seçebilirsiniz)</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {supportAreas.map((area) => (
                <label key={area} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.supportAreas.includes(area)}
                    onChange={() => handleCheckboxChange("supportAreas", area)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-gray-700 text-sm">{area}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Sosyal Etki ve Ek Bilgiler */}
      <div className={sectionClass}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">💝</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">5. Sosyal Etki ve Ek Bilgiler</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              Hedeflenen Sosyal Etki <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.socialImpactGoals}
              onChange={(e) => setFormData({ ...formData, socialImpactGoals: e.target.value })}
              className={inputClass}
              rows={3}
              placeholder="Bu etkinlik ile hangi sosyal etkiyi yaratmayı hedefliyorsunuz? (Örnek: Dezavantajlı bölgedeki öğrencilerin STEM ile tanışması)"
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Daha Önce Benzer Etkinlik Düzenlediniz mi?
            </label>
            <textarea
              value={formData.previousExperience}
              onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
              className={inputClass}
              rows={2}
              placeholder="Varsa önceki deneyimlerinizi kısaca paylaşın"
            />
          </div>

          <div>
            <label className={labelClass}>
              Eklemek İstediğiniz Notlar
            </label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className={inputClass}
              rows={3}
              placeholder="Sponsorlara iletmek istediğiniz ek bilgiler veya özel talepler"
            />
          </div>
        </div>
      </div>

      {/* Bilgilendirme */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-700 text-sm">
              <strong className="text-gray-900">Not:</strong> Paylaştığınız bilgiler yalnızca uygun sponsorlarla eşleştirme yapılabilmesi amacıyla kullanılacaktır.
              Talebiniz, Pinoo Etkisi ekibi tarafından incelendikten sonra sizinle iletişime geçilecektir.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
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
              Sponsor Talebi Oluştur
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
