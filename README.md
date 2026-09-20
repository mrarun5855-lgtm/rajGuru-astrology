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
  are saved as **leads** and viewable at `/leads` (password-protected),
  grouped under "Register", "Talk to Astrologer" and "Contact Us" headings
- SEO-enhanced metadata, structured data (JSON-LD), sitemap and robots rules
- Mobile-friendly layout with branded hero, services, blog, and contact pages

## Local Development

```bash
npm install
cp .env.example .env   # then edit values, especially ADMIN_KEY
npm run dev
```

Open `http://localhost:3000` to view the site (it will redirect to `/en`).

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

See `.env.example` for the full list. At minimum, set `ADMIN_KEY` to
something private before deploying — it protects the `/leads`
page, which shows submitted names and phone numbers.

## Leads / Consultation Requests

Submissions from the `/register` page, the "Consult" flow, and the "Get in
Touch" contact form
are handled by `app/api/leads/route.js` and stored in `data/leads.json`.

**Important:** this JSON-file storage only persists reliably on a host with
a normal, writable, persistent filesystem (a VPS, Docker container, or
`next start` on a plain Node server). It will **not** reliably persist on
serverless platforms like Vercel's default deployment. For those, either:

- configure the optional SMTP email notification (see `.env.example`) so
  every lead is also emailed to you, or
- swap the `readLeads`/`writeLeads` functions in `app/api/leads/route.js`
  for a real datastore (a database, Google Sheets, Airtable, etc).

`data/leads.json` is git-ignored since it holds customer PII — don't commit
real lead data.

## Deployment

Use Vercel or another Next.js-compatible hosting provider (see the leads
note above if you choose a serverless platform).

If deploying to Vercel, set `NEXT_PUBLIC_SITE_URL` to your live domain, and
set `ADMIN_KEY` (and optionally the `SMTP_*` / `LEADS_NOTIFY_EMAIL` vars).

## Assets

- Favicon: `public/favicon.ico`
- Logo: `public/logo.png`
- Open Graph image: `public/og-image.svg`

## Notes

- The site is configured for `https://www.guruastrology.in`
- Update environment variables in Vercel or your hosting platform as needed
