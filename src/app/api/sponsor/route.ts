import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      // Kurum Bilgileri
      orgName,
      orgType,
      activityArea,
      website,
      // Iletisim Bilgileri
      contactName,
      contactTitle,
      email,
      phone,
      // Sponsorluk Tercihleri
      eventTypes,
      ageGroups,
      geoPreference,
      supportModel,
      // Sosyal Etki
      motivation,
      visibilityRequests,
      // Raporlama
      wantsReport,
      // Onay
      consentData,
      consentProcess,
    } = body;

    // Validation
    if (!orgName || !orgType || !activityArea || !contactName || !contactTitle || !email || !supportModel || !motivation || !wantsReport) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    if (!consentData || !consentProcess) {
      return NextResponse.json(
        { error: "Onay kutucuklarını işaretlemeniz gerekmektedir" },
        { status: 400 }
      );
    }

    // Supabase'e kaydet
    const { data, error } = await supabase
      .from("sponsor_applications")
      .insert([
        {
          // Kurum Bilgileri
          org_name: orgName,
          org_type: orgType,
          activity_area: activityArea,
          website: website || "",
          // Iletisim Bilgileri
          contact_name: contactName,
          contact_title: contactTitle,
          email: email,
          phone: phone || "",
          // Sponsorluk Tercihleri
          event_types: eventTypes || [],
          age_groups: ageGroups || [],
          geo_preference: geoPreference || "",
          support_model: supportModel,
          // Sosyal Etki
          motivation: motivation,
          visibility_requests: visibilityRequests || [],
          // Raporlama
          wants_report: wantsReport === "Evet",
          // Meta
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { error: "Veritabanı hatası" },
        { status: 500 }
      );
    }

    console.log("Yeni sponsor başvurusu kaydedildi:", data);

    return NextResponse.json(
      { success: true, message: "Başvurunuz başarıyla alındı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sponsor API Error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
