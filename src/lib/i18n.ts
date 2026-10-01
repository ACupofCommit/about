import { cookies, headers } from "next/headers"
import { dictionaries, LOCALE_COOKIE, type Dictionary, type Locale } from "./dictionaries"

export type { Dictionary, Locale }

const locales: Locale[] = ["ko", "en"]

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

// Accept-Language 에서 q 값이 가장 높은 지원 언어를 고른다. 지원 언어가 없으면 영어.
function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en"
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

// 사용자가 스위치로 고른 쿠키가 우선이고, 없으면 브라우저 언어 설정을 따른다.
export async function getLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value
  if (isLocale(cookieLocale)) return cookieLocale
  return localeFromAcceptLanguage((await headers()).get("accept-language"))
}

export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale()
  return { locale, t: dictionaries[locale] }
}
