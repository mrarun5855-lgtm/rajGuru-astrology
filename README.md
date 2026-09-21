# Guru Astrology — Next.js Website

This repository contains the Guru Astrology online presence, built with
Next.js (App Router), Tailwind CSS, and `next-intl` for English/Hindi
localization.

## Project Overview

- Vedic astrology consultation and horoscope services website
- Bilingual (English `/en` and Hindi `/hi`) via `next-intl`, with automatic
  locale detection/redirect in `middleware.js`
- **Talk to Astrologer** — browse astrologer profiles (`/talk-to-astrologer`),
  view a full profile, and submit a consultation request from a "Consult"
  button on any astrologer card or profile page
- **Register** (`/register`) — a standalone quick-registration page that
  collects the same details (name, age, DOB, mobile) without needing to
  pick an astrologer first
- **Get in Touch** contact form on the homepage / `/contact` page
- All three of the above (register / consult / contact form submissions)
  are saved as **leads** to **Firebase Firestore** and viewable at `/leads`
  (password-protected), grouped under "Register", "Talk to Astrologer" and
  "Contact Us" headings
- SEO-enhanced metadata, structured data (JSON-LD), sitemap and robots rules
- Mobile-friendly layout with branded hero, services, blog, and contact pages

## Local Development

```bash
npm install
cp .env.example .env   # then fill in values — see "Firebase setup" below
npm run dev
```

Open `http://localhost:3000` to view the site (it will redirect to `/en`).

## Production Build

```bash
npm run build
npm run start
```

---

## Firebase Setup (required for /leads to show data)

Form submissions (Register, Talk to Astrologer, Contact Us) are saved to a
**Firestore** database via the Firebase **Admin SDK**, which runs only on
the server inside `app/api/leads/route.js`. The browser never talks to
Firestore directly, so no Firestore security rules need to be written.

This works correctly on Vercel (unlike writing to a local file, which does
not persist on serverless hosts).

### Step 1 — Create a Firebase project

1. Go to **[console.firebase.google.com](https://console.firebase.google.com/)** and sign in with a Google account.
2. Click **Add project**, give it a name (e.g. `guru-astrology`), and finish the wizard (Google Analytics is optional — you can skip it).

### Step 2 — Create a Firestore database

1. In the left sidebar, go to **Build → Firestore Database**.
2. Click **Create database**.
3. Choose a location close to your users — for an India-based site, **`asia-south1` (Mumbai)** is a good choice. This cannot be changed later, so pick carefully.
4. Choose **Start in production mode** (the default deny-all rules are fine — again, the browser never accesses Firestore directly, only your server does, via the Admin SDK which bypasses these rules).
5. Click **Enable**.

### Step 3 — Generate a service account key

1. Click the **gear icon** (top left, next to "Project Overview") → **Project settings**.
2. Go to the **Service accounts** tab.
3. Click **Generate new private key** → confirm. A `.json` file downloads to your computer (e.g. `guru-astrology-firebase-adminsdk-xxxxx.json`).
4. **Keep this file private** — it grants full admin access to your Firestore data. Don't commit it to git or share it publicly.

### Step 4 — Turn that file into one environment variable

The downloaded JSON is multi-line and pretty-printed, which is awkward to
paste into a single environment variable field. Minify it to one line with
this command (run from wherever you downloaded the file):

```bash
node -e "console.log(JSON.stringify(require('./guru-astrology-firebase-adminsdk-xxxxx.json')))"
```

(replace the filename with your actual downloaded file). This prints one
long line — copy that entire output.

### Step 5 — Add the environment variable

**Locally:** open your `.env` file and set:

```
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...", ... }
```

(paste the minified line from Step 4 as the value, all on one line).

**On Vercel:**

1. Open your project on [vercel.com](https://vercel.com/) → **Settings** → **Environment Variables**.
2. Add a new variable:
   - **Key:** `FIREBASE_SERVICE_ACCOUNT_KEY`
   - **Value:** paste the same minified one-line JSON from Step 4
   - **Environments:** check all three (Production, Preview, Development)
3. While you're there, also add (if not already set):
   - `ADMIN_KEY` — your own private password for the `/leads` page
   - `NEXT_PUBLIC_SITE_URL` — your live domain, e.g. `https://www.guruastrology.in`
   - (optional) `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `LEADS_NOTIFY_EMAIL` if you also want each lead emailed to you
4. Click **Save**.
5. **Redeploy** — env var changes only take effect on a new deployment. Go to the **Deployments** tab → click the **⋯** menu on the latest deployment → **Redeploy**.

### Step 6 — Test it

1. Visit your live site and submit the Register form (or the Contact form, or Consult on an astrologer).
2. Visit `https://your-domain.com/leads`, enter your `ADMIN_KEY`, and confirm the submission shows up.
3. You can also see the raw data anytime in the Firebase Console under **Firestore Database → Data → leads**.

---

## Environment Variables

See `.env.example` for the full list with comments. At minimum, set:

- `FIREBASE_SERVICE_ACCOUNT_KEY` — required for leads to be saved (see above)
- `ADMIN_KEY` — protects the `/leads` page, which shows submitted names, phone numbers and emails

## Deployment

Deploy to Vercel (recommended — Next.js's own platform) or another
Next.js-compatible host. Make sure the Firebase and `ADMIN_KEY` environment
variables from the section above are set on whichever platform you use.

If your domain is registered elsewhere (e.g. BigRock) but the app is hosted
on Vercel, point your domain's DNS records at Vercel (Vercel's project
settings → Domains will show you the exact records to add) rather than
trying to run the Next.js app on shared/PHP hosting, which generally can't
run Node.js apps.

## Assets

- Favicon: `public/favicon.ico`
- Logo: `public/logo.png`
- Open Graph image: `public/og-image.svg`
- Astrologer photos: `public/astrologers/`

## Notes

- The site is configured for `https://www.guruastrology.in`
- Update environment variables in Vercel or your hosting platform as needed
