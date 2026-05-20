"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type InquiryResult = { success: true } | { success: false; error: string };

export async function submitInquiry(
  type: "membership" | "contact",
  formData: FormData
): Promise<InquiryResult> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const interest = (formData.get("interest") as string)?.trim();

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  const subject =
    type === "membership"
      ? `New Membership Inquiry from ${name}`
      : `New Contact Form Submission from ${name}`;

  const rows = [
    `<tr><td style="padding:8px 0;color:#888;width:120px">Name</td><td style="padding:8px 0;color:#fff">${name}</td></tr>`,
    `<tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0;color:#fff"><a href="mailto:${email}" style="color:#127055">${email}</a></td></tr>`,
    phone ? `<tr><td style="padding:8px 0;color:#888">Phone</td><td style="padding:8px 0;color:#fff">${phone}</td></tr>` : "",
    interest ? `<tr><td style="padding:8px 0;color:#888">Interest</td><td style="padding:8px 0;color:#fff">${interest}</td></tr>` : "",
    message ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top">Message</td><td style="padding:8px 0;color:#fff">${message.replace(/\n/g, "<br>")}</td></tr>` : "",
  ]
    .filter(Boolean)
    .join("");

  const html = `
    <div style="background:#0a0a0a;padding:32px;font-family:sans-serif;max-width:560px">
      <p style="color:#127055;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px">Game Plan Golf Performance</p>
      <h2 style="color:#fff;margin:0 0 24px;font-size:20px">${subject}</h2>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #222">${rows}</table>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Game Plan <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "info@gameplangp.com",
      replyTo: email,
      subject,
      html,
    });
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
