import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/** Where enquiries land, and the verified sender they come from. */
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? "sales@citiuscomm.com";
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? "website@citiuscomm.com";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] as string
  );

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

    // Without a key we cannot deliver, so say so instead of reporting success
    // for a message that goes nowhere.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form submission was not delivered.");
      return NextResponse.json(
        {
          error:
            "Our contact form is temporarily unavailable. Please email sales@citiuscomm.com directly and we'll respond right away.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const details: [string, string][] = [
      ["Name", name],
      ["Email", email],
      ["Company", company?.trim() || "—"],
      ["Service interest", service?.trim() || "—"],
    ];

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New enquiry from ${name}${company?.trim() ? ` (${company.trim()})` : ""}`,
      text: [...details.map(([k, v]) => `${k}: ${v}`), "", "Message:", message].join("\n"),
      html: [
        ...details.map(
          ([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(String(v))}</p>`
        ),
        `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
      ].join(""),
    });

    if (error) {
      console.error("Resend failed to send contact form submission:", error);
      return NextResponse.json(
        {
          error:
            "We couldn't send your message. Please email sales@citiuscomm.com directly and we'll respond right away.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
