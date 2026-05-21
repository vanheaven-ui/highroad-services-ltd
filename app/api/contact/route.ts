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

// ─── Shared brand tokens ───────────────────────────────────────────────────
const PRIMARY = "#0B2545";
const GOLD = "#CFA83B";
const GOLD_LIGHT = "#f5edd6";
const GRAY_BG = "#f8f9fb";
const GRAY_BORDER = "#e4e7ec";
const TEXT_DARK = "#111827";
const TEXT_MID = "#4B5563";
const TEXT_LIGHT = "#9CA3AF";

// ─── Email base shell ──────────────────────────────────────────────────────
function emailShell(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>HighRoad Services Ltd</title>
</head>
<body style="margin:0;padding:0;background-color:#eef0f4;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0f4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Shared header ─────────────────────────────────────────────────────────
function emailHeader(preheader: string) {
  return `
  <!-- Preheader (hidden preview text) -->
  <tr><td style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#eef0f4;">${preheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</td></tr>

  <!-- Header -->
  <tr>
    <td style="background:${PRIMARY};border-radius:12px 12px 0 0;padding:32px 36px 28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <!-- Logo wordmark -->
            <div style="margin-bottom:4px;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:900;color:${GOLD};letter-spacing:-0.5px;">HighRoad</span>
            </div>
            <div style="margin-bottom:16px;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.55);">Services Ltd</span>
            </div>
            <!-- Gold rule -->
            <div style="height:2px;background:linear-gradient(to right,${GOLD},transparent);margin-bottom:16px;border-radius:2px;"></div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

// ─── Shared footer ─────────────────────────────────────────────────────────
function emailFooter() {
  return `
  <!-- Footer -->
  <tr>
    <td style="background:${PRIMARY};border-radius:0 0 12px 12px;padding:24px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="border-top:1px solid rgba(207,168,59,0.25);padding-top:20px;">
            <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${GOLD};">HighRoad Services Ltd</p>
            <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:rgba(255,255,255,0.5);">P.O Box 21446, Plot 4 Ttula, Kawempe, Kampala, Uganda</p>
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;">
              <a href="https://highroadservicesltd.com" style="color:${GOLD};text-decoration:none;">highroadservicesltd.com</a>
              <span style="color:rgba(255,255,255,0.3);margin:0 6px;">·</span>
              <a href="mailto:info@highroadservicesltd.com" style="color:rgba(255,255,255,0.5);text-decoration:none;">info@highroadservicesltd.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

// ─── Internal notification email ───────────────────────────────────────────
function buildInternalEmail(name: string, email: string, subject: string, message: string) {
  const escapedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");

  return emailShell(`
    ${emailHeader(`New inquiry from ${name} — ${subject}`)}

    <!-- Badge row -->
    <tr>
      <td style="background:${GOLD};padding:10px 36px;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${PRIMARY};">New Contact Form Submission</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="background:#ffffff;padding:36px 36px 28px;border-left:1px solid ${GRAY_BORDER};border-right:1px solid ${GRAY_BORDER};">

        <!-- Sender meta cards -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          <tr>
            <td style="padding-bottom:12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${GRAY_BG};border:1px solid ${GRAY_BORDER};border-radius:8px;overflow:hidden;">

                <!-- Name row -->
                <tr>
                  <td style="padding:12px 16px;border-bottom:1px solid ${GRAY_BORDER};width:120px;vertical-align:middle;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">From</span>
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${GRAY_BORDER};vertical-align:middle;">
                    <span style="font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:700;color:${TEXT_DARK};">${name}</span>
                  </td>
                </tr>

                <!-- Email row -->
                <tr>
                  <td style="padding:12px 16px;border-bottom:1px solid ${GRAY_BORDER};vertical-align:middle;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">Reply To</span>
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${GRAY_BORDER};vertical-align:middle;">
                    <a href="mailto:${email}" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${GOLD};text-decoration:none;font-weight:600;">${email}</a>
                  </td>
                </tr>

                <!-- Subject row -->
                <tr>
                  <td style="padding:12px 16px;vertical-align:middle;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">Focus Area</span>
                  </td>
                  <td style="padding:12px 16px;vertical-align:middle;">
                    <span style="display:inline-block;background:${GOLD_LIGHT};color:${PRIMARY};font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:0.3px;">${subject}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>

        <!-- Message block -->
        <div style="margin-bottom:8px;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">Project Brief / Inquiry</span>
        </div>
        <div style="background:${GRAY_BG};border:1px solid ${GRAY_BORDER};border-left:4px solid ${GOLD};border-radius:0 8px 8px 0;padding:20px 22px;">
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:14px;line-height:1.75;color:${TEXT_DARK};white-space:pre-wrap;">${escapedMessage}</p>
        </div>

      </td>
    </tr>

    <!-- Reply CTA -->
    <tr>
      <td style="background:${GRAY_BG};padding:20px 36px 24px;border:1px solid ${GRAY_BORDER};border-top:none;text-align:center;">
        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} — HighRoad Services Ltd"
           style="display:inline-block;background:${PRIMARY};color:${GOLD};font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.5px;padding:12px 28px;border-radius:6px;text-decoration:none;border:2px solid ${GOLD};">
          ↩ Reply to ${name}
        </a>
        <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${TEXT_LIGHT};">
          Hit Reply in your email client — it will go directly to <strong style="color:${TEXT_MID};">${email}</strong>
        </p>
      </td>
    </tr>

    ${emailFooter()}
  `);
}

// ─── Confirmation email to sender ──────────────────────────────────────────
function buildConfirmationEmail(name: string, subject: string, message: string) {
  const firstName = name.split(" ")[0];
  const escapedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");

  return emailShell(`
    ${emailHeader(`We received your inquiry — we'll respond within 12 hours.`)}

    <!-- Gold accent bar -->
    <tr>
      <td style="background:${GOLD};padding:10px 36px;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${PRIMARY};">Message Received</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="background:#ffffff;padding:36px 36px 28px;border-left:1px solid ${GRAY_BORDER};border-right:1px solid ${GRAY_BORDER};">

        <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:900;color:${PRIMARY};line-height:1.2;">
          Thank you, ${firstName}.
        </h1>
        <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${TEXT_MID};line-height:1.6;">
          Your inquiry has been received by our team. We review every submission personally and commit to responding within <strong style="color:${PRIMARY};">12 hours</strong>.
        </p>

        <!-- 12hr guarantee badge -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:28px;width:100%;">
          <tr>
            <td style="background:${GOLD_LIGHT};border:1px solid ${GOLD};border-radius:8px;padding:14px 20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="vertical-align:middle;padding-right:12px;width:32px;">
                    <span style="font-size:22px;">⏱</span>
                  </td>
                  <td style="vertical-align:middle;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:${PRIMARY};">Response Guaranteed within 12 Hours</p>
                    <p style="margin:2px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${TEXT_MID};">A consultant will review your brief and reach out directly.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- What happens next -->
        <div style="margin-bottom:28px;">
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">What Happens Next</p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${["We review your brief and match it to the right consultant", "A detailed proposal is prepared within 12 hours", "We schedule a strategy session at your convenience", "Project kick-off on agreed terms"].map(
              (step, i) => `
            <tr>
              <td style="padding:8px 0;vertical-align:top;width:28px;">
                <div style="width:22px;height:22px;background:${PRIMARY};border-radius:50%;text-align:center;line-height:22px;">
                  <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:${GOLD};">${i + 1}</span>
                </div>
              </td>
              <td style="padding:8px 0 8px 10px;vertical-align:top;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${TEXT_DARK};">${step}</span>
              </td>
            </tr>`
            ).join("")}
          </table>
        </div>

        <!-- Divider -->
        <div style="height:1px;background:${GRAY_BORDER};margin-bottom:24px;"></div>

        <!-- Copy of submission -->
        <div style="margin-bottom:8px;">
          <span style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${TEXT_LIGHT};">Your Submission — ${subject}</span>
        </div>
        <div style="background:${GRAY_BG};border:1px solid ${GRAY_BORDER};border-left:4px solid ${GOLD};border-radius:0 8px 8px 0;padding:18px 20px;">
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:13px;line-height:1.75;color:${TEXT_MID};white-space:pre-wrap;">${escapedMessage}</p>
        </div>

      </td>
    </tr>

    <!-- CTA strip -->
    <tr>
      <td style="background:${PRIMARY};padding:20px 36px;text-align:center;border-left:1px solid rgba(207,168,59,0.2);border-right:1px solid rgba(207,168,59,0.2);">
        <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.6);">While you wait, explore our work:</p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="padding:0 6px;">
              <a href="https://highroadservicesltd.com/case-studies"
                 style="display:inline-block;border:1px solid ${GOLD};color:${GOLD};font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;padding:8px 18px;border-radius:4px;text-decoration:none;letter-spacing:0.3px;">
                Our Projects
              </a>
            </td>
            <td style="padding:0 6px;">
              <a href="https://highroadservicesltd.com/services"
                 style="display:inline-block;border:1px solid rgba(255,255,255,0.25);color:rgba(255,255,255,0.7);font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;padding:8px 18px;border-radius:4px;text-decoration:none;letter-spacing:0.3px;">
                Our Services
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${emailFooter()}
  `);
}

// ─── Route handler ─────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    const [internalResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: "HighRoad Contact Form <noreply@highroadservicesltd.com>",
        to: "info@highroadservicesltd.com",
        replyTo: email,
        subject: `[Inquiry] ${subject} — from ${name}`,
        html: buildInternalEmail(name, email, subject, message),
      }),
      resend.emails.send({
        from: "HighRoad Services Ltd <noreply@highroadservicesltd.com>",
        to: email,
        subject: `We received your inquiry — ${subject}`,
        html: buildConfirmationEmail(name, subject, message),
      }),
    ]);

    if (internalResult.error) {
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
