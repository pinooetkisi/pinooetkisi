"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface FormData {
  eventType: string;
  participantCount: string;
  ageGroup: string[];
  duration: string;
  themes: string[];
  hasEquipment: string;
  needsTrainer: string;
  additionalServices: string[];
  eventDate: string;
  city: string;
  organizationName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
}

export default function EtkinlikPlanla() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    eventType: "",
    participantCount: "",
    ageGroup: [],
    duration: "",
    themes: [],
    hasEquipment: "",
    needsTrainer: "",
    additionalServices: [],
    eventDate: "",
    city: "",
    organizationName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const eventTypes = [
    { id: "egitim", label: "STEM Eğitimi", icon: "📚", desc: "Sınıf içi veya atölye formatında eğitim" },
    { id: "yarisma", label: "Robotik Yarışma", icon: "🤖", desc: "Takım bazlı rekabetçi etkinlik" },
    { id: "festival", label: "STEM Festivali", icon: "🎪", desc: "Çoklu istasyonlu açık etkinlik" },
    { id: "senlik", label: "Bilim Şenliği", icon: "🔬", desc: "Deney ve gösteri ağırlıklı etkinlik" },
    { id: "hackathon", label: "Hackathon", icon: "💻", desc: "Yoğun proje geliştirme maratonu" },
    { id: "kamp", label: "STEM Kampı", icon: "🏕️", desc: "Çok günlü yoğunlaştırılmış program" },
  ];

  const participantOptions = [
    { id: "20-50", label: "20-50 kişi", desc: "Küçük grup" },
    { id: "50-100", label: "50-100 kişi", desc: "Orta grup" },
    { id: "100-200", label: "100-200 kişi", desc: "Büyük grup" },
    { id: "200+", label: "200+ kişi", desc: "Festival ölçeği" },
  ];

  const ageGroups = [
    { id: "ilkokul", label: "İlkokul", desc: "1-4. sınıf" },
    { id: "ortaokul", label: "Ortaokul", desc: "5-8. sınıf" },
    { id: "lise", label: "Lise", desc: "9-12. sınıf" },
  ];

  const durationOptions = [
    { id: "2-4saat", label: "2-4 Saat", desc: "Yarım gün" },
    { id: "1gun", label: "1 Gün", desc: "Tam gün etkinlik" },
    { id: "2gun", label: "2 Gün", desc: "Hafta sonu etkinliği" },
    { id: "3-5gun", label: "3-5 Gün", desc: "Kamp formatı" },
  ];

  const themeOptions = [
    { id: "robotik", label: "Robotik & Kodlama", icon: "🤖" },
    { id: "elektronik", label: "Elektronik & Devreler", icon: "⚡" },
    { id: "mekanik", label: "Mekanik Sistemler", icon: "⚙️" },
    { id: "enerji", label: "Yenilenebilir Enerji", icon: "🌱" },
    { id: "uzay", label: "Uzay & Havacılık", icon: "🚀" },
    { id: "tarim", label: "Akıllı Tarım", icon: "🌾" },
    { id: "saglik", label: "Sağlık Teknolojileri", icon: "🏥" },
    { id: "cevre", label: "Çevre & Sürdürülebilirlik", icon: "🌍" },
  ];

  const additionalServiceOptions = [
    { id: "lms", label: "LMS Erişimi", desc: "Öğrenci hazırlık platformu" },
    { id: "sertifika", label: "Katılım Sertifikası", desc: "Tasarım ve basım dahil" },
    { id: "foto-video", label: "Fotoğraf & Video", desc: "Profesyonel çekim" },
    { id: "raporlama", label: "Etkinlik Raporu", desc: "Detaylı analiz raporu" },
  ];

  const handleArrayToggle = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    if (currentArray.includes(value)) {
      setFormData({ ...formData, [field]: currentArray.filter((v) => v !== value) });
    } else {
      setFormData({ ...formData, [field]: [...currentArray, value] });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.eventType && formData.participantCount && formData.ageGroup.length > 0;
      case 2:
        return formData.duration && formData.themes.length > 0;
      case 3:
        return formData.hasEquipment && formData.needsTrainer;
      case 4:
        return formData.organizationName && formData.contactName && formData.contactEmail && formData.contactPhone;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-24 min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Talebiniz Alındı!
              </h1>
              <p className="text-gray-600 mb-8">
                Etkinlik planınız başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">Özet Bilgiler:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><span className="font-medium">Etkinlik Türü:</span> {eventTypes.find(e => e.id === formData.eventType)?.label}</li>
                  <li><span className="font-medium">Katılımcı:</span> {formData.participantCount}</li>
                  <li><span className="font-medium">Kurum:</span> {formData.organizationName}</li>
                  <li><span className="font-medium">İletişim:</span> {formData.contactEmail}</li>
                </ul>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Etkinliğinizi Planlayın
            </h1>
            <p className="text-gray-600">
              Birkaç adımda size özel etkinlik planı oluşturalım
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                    step === currentStep
                      ? "bg-blue-600 text-white"
                      : step < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Etkinlik Türü</span>
              <span>Tema & Süre</span>
              <span>Hizmetler</span>
              <span>İletişim</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            {/* Step 1: Event Type, Participants, Age Group */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Etkinlik Türü</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData({ ...formData, eventType: type.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.eventType === type.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <h3 className="font-semibold text-gray-900 mt-2">{type.label}</h3>
                        <p className="text-sm text-gray-500">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Tahmini Katılımcı Sayısı</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {participantOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setFormData({ ...formData, participantCount: option.id })}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.participantCount === option.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{option.label}</h3>
                        <p className="text-sm text-gray-500">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Yaş Grubu (Birden fazla seçilebilir)</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {ageGroups.map((group) => (
                      <button
                        key={group.id}
                        onClick={() => handleArrayToggle("ageGroup", group.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.ageGroup.includes(group.id)
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{group.label}</h3>
                        <p className="text-sm text-gray-500">{group.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Duration and Themes */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Etkinlik Süresi</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {durationOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setFormData({ ...formData, duration: option.id })}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.duration === option.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{option.label}</h3>
                        <p className="text-sm text-gray-500">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">İlgilendiğiniz Temalar (Birden fazla seçilebilir)</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {themeOptions.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => handleArrayToggle("themes", theme.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.themes.includes(theme.id)
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <span className="text-2xl">{theme.icon}</span>
                        <h3 className="font-medium text-gray-900 mt-1">{theme.label}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Ekipman Durumu</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormData({ ...formData, hasEquipment: "var" })}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.hasEquipment === "var"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">Mevcut Ekipmanımız Var</h3>
                      <p className="text-sm text-gray-500 mt-1">Kendi robotik kitlerini/ekipmanlarını kullanacağız</p>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, hasEquipment: "yok" })}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.hasEquipment === "yok"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">Ekipman Kiralama İstiyorum</h3>
                      <p className="text-sm text-gray-500 mt-1">Etkinlik için gerekli kit ve malzemeler sağlansın</p>
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Eğitmen Desteği</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormData({ ...formData, needsTrainer: "evet" })}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.needsTrainer === "evet"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">Eğitmen Desteği İstiyorum</h3>
                      <p className="text-sm text-gray-500 mt-1">Deneyimli saha eğitmenleri etkinliği yönetsin</p>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, needsTrainer: "hayir" })}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.needsTrainer === "hayir"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">Kendi Ekibimiz Yönetecek</h3>
                      <p className="text-sm text-gray-500 mt-1">Sadece rehberlik ve planlama desteği yeterli</p>
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Ek Hizmetler (Opsiyonel)</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {additionalServiceOptions.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleArrayToggle("additionalServices", service.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.additionalServices.includes(service.id)
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <h3 className="font-semibold text-gray-900">{service.label}</h3>
                        <p className="text-sm text-gray-500">{service.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">İletişim Bilgileri</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kurum / Okul Adı *
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Örn: Atatürk Ortaokulu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şehir
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Örn: İstanbul"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yetkili Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tahmini Etkinlik Tarihi
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0555 555 55 55"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Eklemek İstediğiniz Notlar
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Etkinlikle ilgili özel istekleriniz veya sorularınız..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Geri
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    canProceed()
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Devam
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                    canProceed() && !isSubmitting
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
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
                      Planı Gönder
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Sorularınız mı var?{" "}
            <Link href="/#iletisim" className="text-blue-600 hover:text-blue-700 font-medium">
              Bizimle iletişime geçin
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
