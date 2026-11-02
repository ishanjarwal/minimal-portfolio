import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Backend validation via Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify all fields.",
          fieldErrors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser || "ishucodes@gmail.com";

    // If Google SMTP credentials are not yet configured in .env
    if (!gmailUser || !gmailAppPassword) {
      console.warn(
        "[Contact API] Google SMTP credentials not found in environment (GMAIL_USER / GMAIL_APP_PASSWORD). Simulating successful receipt for testing."
      );
      return NextResponse.json({
        success: true,
        message: "Message dispatched! (SMTP configured in demo mode — set GMAIL_USER & GMAIL_APP_PASSWORD to forward real emails).",
      });
    }

    // Configure Google SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: receiverEmail,
      subject: `[Portfolio Inquiry] New message from ${name}`,
      text: `You received a new inquiry from your portfolio website:

Name: ${name}
Email: ${email}
Date: ${new Date().toISOString()}

Message:
${message}
`,
      html: `
        <div style="font-family: monospace, ui-monospace, sans-serif; padding: 20px; border: 1px solid #d0d7de; max-width: 600px; background-color: #faf9f6; color: #1f2328;">
          <h2 style="border-bottom: 2px solid #d0d7de; padding-bottom: 8px; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Timestamp:</strong> ${new Date().toUTCString()}</p>
          <hr style="border: 0; border-top: 1px solid #d0d7de; margin: 16px 0;" />
          <div style="white-space: pre-wrap; line-height: 1.5; background: #ffffff; padding: 12px; border: 1px solid #e1e4e8;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #d0d7de; margin: 16px 0;" />
          <p style="font-size: 11px; color: #656d76;">Sent from Ishan Jarwal's Minimal Retro Developer Portfolio</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been transmitted successfully.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or reach out directly via email.",
      },
      { status: 500 }
    );
  }
}
