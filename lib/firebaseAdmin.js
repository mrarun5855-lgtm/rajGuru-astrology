import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Server-only Firebase Admin SDK setup. This is intentionally NOT the
// client-side Firebase SDK — the Admin SDK runs only inside API routes
// (app/api/**/route.js), authenticates with a service account, and bypasses
// Firestore security rules entirely. That means:
//   - No Firestore security rules need to be written or maintained, since
//     the browser never talks to Firestore directly.
//   - The service account credentials below must NEVER be exposed to the
//     client (never import this file from a "use client" component).
//
// Required environment variable (see .env.example):
//   FIREBASE_SERVICE_ACCOUNT_KEY — the full service account JSON, as a
//   single-line string (see README.md for how to generate/minify it).
//
// A split-field fallback (FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL /
// FIREBASE_PRIVATE_KEY) is also supported for hosts where a multi-line
// JSON env var is awkward to set.

function getServiceAccount() {
  const {
    FIREBASE_SERVICE_ACCOUNT_KEY,
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY,
  } = process.env;

  if (FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      return JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY);
    } catch {
      throw new Error(
        "FIREBASE_SERVICE_ACCOUNT_KEY is set but is not valid JSON. Make sure " +
          "you pasted the entire service account file content as one line.",
      );
    }
  }

  if (FIREBASE_PROJECT_ID && FIREBASE_CLIENT_EMAIL && FIREBASE_PRIVATE_KEY) {
    return {
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      // When a private key is stored as a plain (non-JSON) env var, its
      // real newlines are often flattened to the literal two characters
      // "\n" by the hosting platform's env var UI — undo that here.
      privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  }

  throw new Error(
    "Firebase is not configured. Set FIREBASE_SERVICE_ACCOUNT_KEY (or the " +
      "FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY " +
      "trio) in your environment — see .env.example and README.md.",
  );
}

// Reuse a single initialized app across warm serverless invocations /
// hot-reloads in dev, instead of re-initializing on every import.
function getFirebaseApp() {
  const existing = getApps();
  if (existing.length > 0) return existing[0];
  return initializeApp({ credential: cert(getServiceAccount()) });
}

export function getDb() {
  return getFirestore(getFirebaseApp());
}
