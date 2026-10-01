import { dictionaries, LOCALE_COOKIE, type Dictionary, type Locale } from "./dictionaries"

export type { Dictionary, Locale }
export { LOCALE_COOKIE }

export const SITE_URL = "https://commit2.app"
export const locales: Locale[] = ["ko", "en"]
export const defaultLocale: Locale = "ko"

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

// 한국어는 접두사 없이(/raycast-discount), 영어는 /en 접두사(/en/raycast-discount).
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

// Accept-Language 에서 q 값이 가장 높은 지원 언어를 고른다.
// 헤더가 없으면(검색 로봇 등) null, 지원 언어가 하나도 없으면 영어.
export function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const q = params.find((p) => p.trim().startsWith("q="))
      return { lang: tag.split("-")[0].toLowerCase(), q: q ? Number(q.trim().slice(2)) : 1 }
    })
    .filter(({ lang }) => isLocale(lang))
    .sort((a, b) => b.q - a.q)
  return (ranked[0]?.lang as Locale | undefined) ?? "en"
}

// canonical 은 현재 언어 주소, hreflang 은 언어별 주소. x-default 는 한국어.
export function alternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      ko: localePath("ko", path),
      en: localePath("en", path),
      "x-default": localePath("ko", path),
    },
  }
}
