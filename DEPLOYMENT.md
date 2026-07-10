# Vercel Deployment Guide for AstroVedic Next.js

## Deploy to Vercel

1. Push your code to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Migrate to Next.js 15 App Router"
   git remote add origin https://github.com/YOUR_USERNAME/astrovedic.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repository

3. Set Environment Variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL` = `https://astrovedic.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = `astrology@example.com`
   - `NEXT_PUBLIC_PHONE` = `+911800124105`
   - `NEXT_PUBLIC_WHATSAPP` = `911800124105`

4. Deploy — Vercel auto-detects Next.js and configures everything.

## Custom Domain

- Add your domain in Vercel Dashboard → Settings → Domains
- Update `NEXT_PUBLIC_SITE_URL` to your actual domain

## Performance Notes

- All pages are statically generated (SSG) by default
- Images should be placed in `public/images/`
- OG image: place at `public/og-image.png` (1200×630px)
- App icons: place at `public/icons/icon-192.png` and `public/icons/icon-512.png`
- Favicon: replace `public/favicon.ico`
