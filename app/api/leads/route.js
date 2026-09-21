import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/firebaseAdmin";

// Leads are stored in a Firestore collection called "leads" via the
// Firebase Admin SDK (see lib/firebaseAdmin.js). This works correctly on
// serverless hosts like Vercel — unlike writing to a local JSON file,
// which does not reliably persist there.
//
// Three kinds of leads are stored here, distinguished by `type`:
//   - "consultation": submitted from a "Talk to Astrologer" / "Consult" button
//   - "register":      submitted from the standalone /register page
//   - "contact":       submitted from the site's "Get in Touch" contact form
//
// Setup required before this works: create a Firebase project, enable
// Firestore, generate a service account key, and set
// FIREBASE_SERVICE_ACCOUNT_KEY in your environment. See README.md for the
// full step-by-step guide.

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
    // lead is still saved to Firestore.
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
    const db = getDb();
    // Use our own generated id as the Firestore document id too, so the
    // "id" field and the document path always agree (handy if you ever
    // browse the data directly in the Firebase console).
    await db.collection("leads").doc(id).set(lead);
  } catch (err) {
    // Firestore isn't configured / reachable — still return success to the
    // user (their submission is valid and, if SMTP is configured, will be
    // emailed below), but flag it so ops can notice leads aren't being
    // saved here.
    persisted = false;
    console.error("Failed to save lead to Firestore:", err);
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

  try {
    const db = getDb();
    const snapshot = await db
      .collection("leads")
      .orderBy("submittedAt", "desc")
      .get();

    // Leads saved before the `type` field existed are consultation requests.
    const leads = snapshot.docs.map((doc) => ({ type: "consultation", ...doc.data() }));

    return NextResponse.json({ success: true, leads });
  } catch (err) {
    console.error("Failed to read leads from Firestore:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Could not read leads from Firestore. Check that Firebase env vars are set correctly.",
      },
      { status: 500 },
    );
  }
}
