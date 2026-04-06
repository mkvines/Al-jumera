"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import translations, { type Locale } from "./translations";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  toggleLocale: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "ar" || stored === "en") {
      setLocale(stored);
    }
    setMounted(true);
  }, []);

  // Apply dir and lang to <html> whenever locale changes
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
    html.setAttribute("lang", locale);
    localStorage.setItem("locale", locale);
  }, [locale, mounted]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) {
        console.warn(`[i18n] Missing translation key: "${key}"`);
        return key;
      }
      return entry[locale];
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, toggleLocale, t }),
    [locale, toggleLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
