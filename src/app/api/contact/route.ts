import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { schoolName, contactPerson, email, phone, studentCount, message } = body;

    // Validation
    if (!schoolName || !contactPerson || !email || !phone || !studentCount) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldurun" },
        { status: 400 }
      );
    }

    // TODO: Supabase entegrasyonu yapılacak
    // const { data, error } = await supabase
    //   .from('contact_requests')
    //   .insert([
    //     {
    //       school_name: schoolName,
    //       contact_person: contactPerson,
    //       email: email,
    //       phone: phone,
    //       student_count: studentCount,
    //       message: message,
    //       status: 'pending'
    //     }
    //   ]);

    // Şimdilik sadece console'a yazdır
    console.log("Yeni iletişim talebi:", {
      schoolName,
      contactPerson,
      email,
      phone,
      studentCount,
      message,
      timestamp: new Date().toISOString(),
    });

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
