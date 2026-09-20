"use client";

import { IntlProvider as NextIntlProvider } from "next-intl";

export function IntlProvider({ children, locale, messages }) {
  return (
    <NextIntlProvider locale={locale} messages={messages}>
      {children}
    </NextIntlProvider>
  );
}
