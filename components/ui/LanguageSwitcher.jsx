"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale) => {
    if (locale === newLocale) return;
    
    // Replace the current locale with the new one in pathname
    // pathname format: /en/about, /hi/about, etc.
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale || "/"}`;
    
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <FaGlobe className="text-white" size={14} />
      <div className="flex gap-1 bg-rgba(255,255,255,0.05) rounded-lg p-1">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-2 py-1 rounded text-xs font-medium transition-all ${
            locale === "en"
              ? "bg-white text-red-700"
              : "text-white hover:bg-white hover:text-red-700"
          }`}
          aria-label="Switch to English"
          aria-pressed={locale === "en"}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange("hi")}
          className={`px-2 py-1 rounded text-xs font-medium transition-all ${
            locale === "hi"
              ? "bg-white text-red-700"
              : "text-white hover:bg-white hover:text-red-700"
          }`}
          aria-label="Switch to Hindi"
          aria-pressed={locale === "hi"}
        >
          HI
        </button>
      </div>
    </div>
  );
}
