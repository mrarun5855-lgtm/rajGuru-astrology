import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

// Leads are stored as a simple JSON file under /data. This is intentionally
// dependency-free (no database needed) so the feature works out of the box.
// Three kinds of leads are stored here, distinguished by `type`:
//   - "consultation": submitted from a "Talk to Astrologer" / "Consult" button
//   - "register":      submitted from the standalone /register page
//   - "contact":       submitted from the site's "Get in Touch" contact form
//
// IMPORTANT — production note:
// This file-based approach persists correctly as long as the app runs on a
// server with a writable, persistent filesystem (e.g. a VPS, Docker
// container, or `next start` on a normal Node host). It will NOT reliably
// persist on serverless/edge platforms (e.g. Vercel's default deployment),
// because their filesystem is read-only outside of `/tmp`, and `/tmp` is
// not guaranteed to survive between requests or across server instances.
//
// For a serverless deployment, replace the `readLeads`/`writeLeads` calls
// below with a real datastore (a database, Google Sheets API, Airtable,
// etc). As a stopgap, this route also emails each new lead (see
// `notifyByEmail`) when SMTP env vars are configured, so leads aren't lost
// even if the JSON file itself doesn't persist.

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function readLeads() {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    // File missing or unreadable/corrupt — start fresh rather than failing
    // the whole request.
    return [];
  }
}

async function writeLeads(leads) {
  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

async function notifyByEmail(lead) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEADS_NOTIFY_EMAIL } =
    process.env;

  // Email notification is entirely optional — only attempted if SMTP env
  // vars have been configured for this deployment.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEADS_NOTIFY_EMAIL) {
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const isContact = lead.type === "contact";
    const isRegister = lead.type === "register";

    const text = isContact
      ? [
          `Name         : ${lead.name}`,
          `Email        : ${lead.email}`,
          `Phone        : ${lead.phone || "Not provided"}`,
          `Subject      : ${lead.subject}`,
          `Submitted At : ${lead.submittedAt}`,
          ``,
          `Message:`,
          lead.message,
        ].join("\n")
      : isRegister
      ? [
          `Source       : Register page`,
          `Name         : ${lead.name}`,
          `Age          : ${lead.age}`,
          `Date of Birth: ${lead.dob}`,
          `Mobile       : ${lead.mobile}`,
          `Submitted At : ${lead.submittedAt}`,
        ].join("\n")
      : [
          `Astrologer   : ${lead.astrologerName}`,
          `Name         : ${lead.name}`,
          `Age          : ${lead.age}`,
          `Date of Birth: ${lead.dob}`,
          `Mobile       : ${lead.mobile}`,
          `Submitted At : ${lead.submittedAt}`,
        ].join("\n");

    await transporter.sendMail({
      from: `"Guru Astrology Website" <${SMTP_USER}>`,
      to: LEADS_NOTIFY_EMAIL,
      subject: isContact
        ? `New contact message — ${lead.subject}`
        : isRegister
        ? `New registration — ${lead.name}`
        : `New consultation request — ${lead.astrologerName}`,
      text,
    });
  } catch (err) {
    // Don't fail the request just because the email couldn't be sent — the
    // lead is still saved to the JSON file (when the filesystem is
    // writable).
    console.error("Failed to send lead notification email:", err);
  }
}

function validatePersonDetails(body) {
  const errors = {};

  if (!body?.name || String(body.name).trim().length < 2) {
    errors.name = "Name is required";
  }
  const age = Number(body?.age);
  if (!body?.age || Number.isNaN(age) || age < 1 || age > 120) {
    errors.age = "A valid age is required";
  }
  if (!body?.dob) {
    errors.dob = "Date of birth is required";
  }
  if (!body?.mobile || !/^[6-9]\d{9}$/.test(String(body.mobile).trim())) {
    errors.mobile = "A valid 10-digit mobile number is required";
  }

  return errors;
}

function validateConsultationBody(body) {
  const errors = validatePersonDetails(body);

  if (!body?.astrologerSlug || !body?.astrologerName) {
    errors.astrologer = "Astrologer is required";
  }

  return errors;
}

// The /register page collects exactly the same fields as the "Talk to
// Astrologer" consultation form, just without being tied to a specific
// astrologer.
function validateRegisterBody(body) {
  return validatePersonDetails(body);
}

function validateContactBody(body) {
  const errors = {};

  if (!body?.name || String(body.name).trim().length < 2) {
    errors.name = "Name is required";
  }
  if (!body?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email).trim())) {
    errors.email = "A valid email is required";
  }
  if (!body?.subject) {
    errors.subject = "Subject is required";
  }
  if (!body?.message || String(body.message).trim().length < 10) {
    errors.message = "Message is required";
  }
  if (body?.phone && !/^[\d\s+\-()]{7,15}$/.test(String(body.phone).trim())) {
    errors.phone = "Enter a valid phone number";
  }

  return errors;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }

  const type =
    body?.type === "contact"
      ? "contact"
      : body?.type === "register"
      ? "register"
      : "consultation";

  const errors =
    type === "contact"
      ? validateContactBody(body)
      : type === "register"
      ? validateRegisterBody(body)
      : validateConsultationBody(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please fill all required fields correctly", errors },
      { status: 400 },
    );
  }

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const submittedAt = new Date().toISOString();

  const lead =
    type === "contact"
      ? {
          id,
          type,
          name: String(body.name).trim(),
          email: String(body.email).trim(),
          phone: body.phone ? String(body.phone).trim() : "",
          subject: String(body.subject).trim(),
          message: String(body.message).trim(),
          submittedAt,
        }
      : type === "register"
      ? {
          id,
          type,
          name: String(body.name).trim(),
          age: Number(body.age),
          dob: body.dob,
          mobile: String(body.mobile).trim(),
          submittedAt,
        }
      : {
          id,
          type,
          astrologerSlug: body.astrologerSlug,
          astrologerName: body.astrologerName,
          name: String(body.name).trim(),
          age: Number(body.age),
          dob: body.dob,
          mobile: String(body.mobile).trim(),
          submittedAt,
        };

  let persisted = true;
  try {
    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);
  } catch (err) {
    // Filesystem isn't writable in this environment (e.g. serverless) —
    // still return success to the user (their submission is valid and, if
    // SMTP is configured, will be emailed below), but flag it so ops can
    // notice leads aren't being persisted to disk here.
    persisted = false;
    console.error("Failed to persist lead to data/leads.json:", err);
  }

  await notifyByEmail(lead);

  return NextResponse.json({ success: true, persisted, lead });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  // Lightweight protection so lead data (names, phone numbers, emails)
  // isn't publicly readable. Set ADMIN_KEY in your environment and share
  // it only with whoever should be able to view leads.
  const adminKey = process.env.ADMIN_KEY || "changeme";
  if (key !== adminKey) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const leads = await readLeads();
  // Newest first.
  leads.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  // Leads saved before the `type` field existed are consultation requests.
  const normalized = leads.map((lead) => ({ type: "consultation", ...lead }));

  return NextResponse.json({ success: true, leads: normalized });
}
