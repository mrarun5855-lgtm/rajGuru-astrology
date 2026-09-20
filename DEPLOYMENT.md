# Vercel Deployment Guide for Guru Astrology Next.js

## Deploy to Vercel

1. Push your code to GitHub:

   ```bash
   git init
git add .
git commit -m "Deploy Guru Astrology Next.js site"
git remote add origin https://github.com/YOUR_USERNAME/guru-astrology.git
git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repository

3. Set Environment Variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.guruastrology.in`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = `dobrabhatt@gmail.com`
   - `NEXT_PUBLIC_PHONE` = `+919599327922`
   - `NEXT_PUBLIC_WHATSAPP` = `919599327922`

4. Deploy — Vercel auto-detects Next.js and configures everything.

## Custom Domain

- Add your domain in Vercel Dashboard → Settings → Domains
- Update `NEXT_PUBLIC_SITE_URL` to your actual domain

## Performance Notes

- The site uses Next.js App Router with static site generation (SSG) for most pages
- Place social preview images in `public/`
- Current OG share image: `public/og-image.svg`
- Current favicon: `public/favicon.svg`
