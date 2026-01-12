import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      orgName,
      orgType,
      city,
      contactName,
      contactEmail,
      contactPhone,
      eventType,
      eventTitle,
      eventDescription,
      targetAgeGroup,
      participantCount,
      plannedDate,
      eventLocation,
      supportType,
      estimatedBudget,
      currentBudget,
      supportAreas,
      socialImpactGoals,
      previousExperience,
      additionalNotes,
    } = body;

    // Validation
    if (!orgName || !orgType || !city || !contactName || !contactEmail || !contactPhone) {
      return NextResponse.json(
        { error: "Kurum ve iletişim bilgileri zorunludur" },
        { status: 400 }
      );
    }

    if (!eventType || eventType.length === 0 || !eventTitle || !eventDescription) {
      return NextResponse.json(
        { error: "Etkinlik bilgileri zorunludur" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("sponsor_search_requests")
      .insert([
        {
          org_name: orgName,
          org_type: orgType,
          city: city,
          contact_name: contactName,
          contact_email: contactEmail,
          contact_phone: contactPhone,
          event_type: eventType,
          event_title: eventTitle,
          event_description: eventDescription,
          target_age_group: targetAgeGroup,
          participant_count: participantCount,
          planned_date: plannedDate,
          event_location: eventLocation,
          support_type: supportType,
          estimated_budget: estimatedBudget,
          current_budget: currentBudget,
          support_areas: supportAreas,
          social_impact_goals: socialImpactGoals,
          previous_experience: previousExperience,
          additional_notes: additionalNotes,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Veritabanı hatası" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Sponsor arama talebi başarıyla oluşturuldu", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
