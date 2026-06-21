import { NextResponse } from "next/server";

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

    // In production, you would send an actual email here using a service like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Nodemailer
    
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      businessName,
      description,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // TODO: Replace with actual email service integration
    /*
    Example with Resend:
    
    await resend.emails.send({
      from: 'website@edifyvision.com',
      to: 'info@edifyvision.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    });
    */

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
