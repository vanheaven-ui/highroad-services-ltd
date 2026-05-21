import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject required"),
  message: z.string().min(1, "Message required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    const { error } = await resend.emails.send({
      from: "HighRoad Contact Form <noreply@highroadservicesltd.com>",
      to: "info@highroadservicesltd.com",
      replyTo: email,
      subject: `[Inquiry] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0b2545; padding: 24px 28px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #CFA83B; margin: 0; font-size: 18px; font-weight: bold; letter-spacing: 0.5px;">
              New Contact Form Submission
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">
              HighRoad Services Ltd — highroadservicesltd.com
            </p>
          </div>

          <div style="background: #f9fafb; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0b2545; width: 110px; font-size: 14px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #374151; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; font-weight: bold; color: #0b2545; font-size: 14px; vertical-align: top;">Reply To</td>
                <td style="padding: 10px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #CFA83B; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; font-weight: bold; color: #0b2545; font-size: 14px; vertical-align: top;">Focus Area</td>
                <td style="padding: 10px 0; color: #374151; font-size: 14px;">${subject}</td>
              </tr>
            </table>

            <div style="background: white; border-left: 4px solid #CFA83B; padding: 16px 20px; border-radius: 0 6px 6px 0;">
              <p style="font-weight: bold; color: #0b2545; margin: 0 0 10px; font-size: 14px;">Project Brief / Inquiry</p>
              <p style="color: #374151; white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>

            <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
              Hit <strong>Reply</strong> in your email client to respond directly to ${name} at ${email}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to deliver message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
