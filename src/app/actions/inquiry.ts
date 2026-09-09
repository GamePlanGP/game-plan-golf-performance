"use server";

import { Resend } from "resend";
import { LESSON_APPLICATION_FIELDS } from "@/lib/lessonApplication";

const resend = new Resend(process.env.RESEND_API_KEY);

export type InquiryResult = { success: true } | { success: false; error: string };

// Submitted values are interpolated into the notification email's HTML, so
// escape them rather than trusting the input.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Minimum time (ms) a genuine visitor takes to fill out the form. Anything
// faster is almost certainly an automated submission.
const MIN_FILL_TIME_MS = 2000;

export async function submitInquiry(
  type: "membership" | "contact" | "training" | "lesson-application",
  formData: FormData
): Promise<InquiryResult> {
  // ── Bot protection ──
  // Honeypot: a hidden field no human can see or tab to. Bots that fill in
  // every field will populate it. We accept the submission silently (so the
  // bot gets no signal) but never send the email.
  const honeypot = (formData.get("company_website") as string)?.trim();
  if (honeypot) {
    return { success: true };
  }
  // Timing trap: our form stamps how long the visitor spent before submitting.
  // A missing or implausibly fast value indicates automation.
  const elapsedRaw = formData.get("form_elapsed_ms");
  const elapsed = elapsedRaw ? Number(elapsedRaw) : NaN;
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME_MS) {
    return { success: true };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  const subject =
    type === "membership"
      ? `New Membership Inquiry from ${name}`
      : type === "training"
        ? `New Adult Fitness (8-Pack) Inquiry from ${name}`
        : type === "lesson-application"
          ? `New Lesson Application from ${name}`
          : `New Contact Form Submission from ${name}`;

  // Screening answers, included only for lesson applications.
  const applicationRows =
    type === "lesson-application"
      ? LESSON_APPLICATION_FIELDS.map((field) => {
          const value = (formData.get(field.name) as string)?.trim();
          return value
            ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top">${escapeHtml(field.label)}</td><td style="padding:8px 0;color:#fff">${escapeHtml(value)}</td></tr>`
            : "";
        })
      : [];

  const rows = [
    `<tr><td style="padding:8px 0;color:#888;width:120px">Name</td><td style="padding:8px 0;color:#fff">${escapeHtml(name)}</td></tr>`,
    `<tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0;color:#fff"><a href="mailto:${escapeHtml(email)}" style="color:#127055">${escapeHtml(email)}</a></td></tr>`,
    phone ? `<tr><td style="padding:8px 0;color:#888">Phone</td><td style="padding:8px 0;color:#fff">${escapeHtml(phone)}</td></tr>` : "",
    ...applicationRows,
    message ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top">Message</td><td style="padding:8px 0;color:#fff">${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>` : "",
  ]
    .filter(Boolean)
    .join("");

  const html = `
    <div style="background:#0a0a0a;padding:32px;font-family:sans-serif;max-width:560px">
      <p style="color:#127055;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px">Game Plan Golf Performance</p>
      <h2 style="color:#fff;margin:0 0 24px;font-size:20px">${escapeHtml(subject)}</h2>
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
