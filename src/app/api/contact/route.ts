import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { requestType, orgName, contactPerson, email, phone, message } = body;

    // Validation
    if (!requestType || !orgName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    // Supabase'e kaydet
    const { data, error } = await supabase
      .from("contact_requests")
      .insert([
        {
          request_type: requestType,
          org_name: orgName,
          contact_person: contactPerson,
          email: email,
          phone: phone,
          message: message || "",
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

    console.log("Yeni iletişim talebi kaydedildi:", data);

    return NextResponse.json(
      { success: true, message: "Talebiniz başarıyla alındı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
