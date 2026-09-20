import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'hi'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` corresponds to the `[locale]` route segment matched by
  // the middleware. It can resolve to `undefined` (e.g. requests outside
  // the [locale] segment during static generation) or to an invalid value,
  // so it's always validated with a safe fallback — using `locale` directly
  // here (as older next-intl versions did) is no longer reliable and was
  // causing `Cannot find module './undefined.json'` build failures.
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
