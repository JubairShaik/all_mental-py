export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 新增的映射对象
export const localeMap = {
  en: "English",
  es: "Spanish",
} as const;