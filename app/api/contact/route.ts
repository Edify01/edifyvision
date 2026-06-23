import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, description } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessName || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'edifymediaservices@gmail.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1570EF; border-bottom: 2px solid #1570EF; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>Business:</strong> ${businessName}</p>
          </div>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Description:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${description}</p>
          </div>
          <p style="color: #667085; font-size: 12px; margin-top: 30px;">
            Submitted via edifyvision.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
