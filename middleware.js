import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const handleI18nRouting = createMiddleware({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
});

export function middleware(request) {
  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|favicon|robots|sitemap).*)'],
};
