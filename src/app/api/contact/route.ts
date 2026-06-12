import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // TODO: Add an email provider to actually send this submission.
    // Recommended: install Resend (npm i resend) then:
    //
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'website@citiuscomm.com',
    //     to: 'sales@citiuscomm.com',
    //     subject: `New enquiry from ${name} (${company || 'no company'})`,
    //     text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\n${message}`,
    //   });

    console.log("Contact form submission:", { name, email, company, service, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
