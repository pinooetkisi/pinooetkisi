import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      eventType,
      participantCount,
      ageGroup,
      duration,
      themes,
      hasEquipment,
      needsTrainer,
      additionalServices,
      eventDate,
      city,
      organizationName,
      contactName,
      contactEmail,
      contactPhone,
      notes,
    } = body;

    // Validation
    if (!eventType || !participantCount || !ageGroup || !duration || !themes) {
      return NextResponse.json(
        { error: "Etkinlik bilgileri eksik" },
        { status: 400 }
      );
    }

    if (!organizationName || !contactName || !contactEmail || !contactPhone) {
      return NextResponse.json(
        { error: "İletişim bilgileri eksik" },
        { status: 400 }
      );
    }

    // Supabase'e kaydet
    const { data, error } = await supabase
      .from("event_plans")
      .insert([
        {
          event_type: eventType,
          participant_count: participantCount,
          age_group: ageGroup,
          duration: duration,
          themes: themes,
          has_equipment: hasEquipment,
          needs_trainer: needsTrainer,
          additional_services: additionalServices,
          event_date: eventDate || null,
          city: city || "",
          organization_name: organizationName,
          contact_name: contactName,
          contact_email: contactEmail,
          contact_phone: contactPhone,
          notes: notes || "",
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

    console.log("Yeni etkinlik planı kaydedildi:", data);

    return NextResponse.json(
      { success: true, message: "Etkinlik planınız başarıyla alındı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Event Plan API Error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
