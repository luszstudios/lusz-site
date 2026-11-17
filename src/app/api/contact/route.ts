import { NextResponse } from "next/server";
import { site } from "@/content/site";

// Receives the contact form and emails it to the studio through Resend (resend.com).
// Needs two environment variables on the host:
//   RESEND_API_KEY   the key from your Resend account
//   CONTACT_FROM     a sender on a domain verified in Resend, e.g. "LUSZ site <hello@luszstudios.com>"
// Optional: CONTACT_TO (defaults to the studio email in content/site.ts).

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot field: real visitors never fill it in.
  if (clean(data.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 160);
  const topic = clean(data.topic, 80);
  const message = clean(data.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!key || !from) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM is not set, message not sent.");
    return NextResponse.json({ error: "Email is not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO || site.email,
      reply_to: email,
      subject: `Website: ${topic || "New message"} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nAbout: ${topic || "-"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend returned", res.status, await res.text());
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
