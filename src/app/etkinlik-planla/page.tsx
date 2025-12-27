import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etkinlik Planla | Pinoo Etkisi",
  description:
    "STEM etkinliğinizi planlayın. Etkinlik türü, katılımcı sayısı ve ihtiyaçlarınıza göre size özel bir plan oluşturun.",
};

export default function EtkinlikPlanla() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Etkinlik Planlama
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Etkinliğinizi{" "}
                <span className="text-blue-600">Planlayın</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Bu sayfa yakında aktif olacaktır.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
