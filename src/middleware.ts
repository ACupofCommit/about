import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, LOCALE_COOKIE, localeFromAcceptLanguage } from "@/lib/i18n"

// 한국어 주소(/...)는 내부적으로 /ko/... 로 rewrite 하고, 영어는 /en/... 그대로 쓴다.
// 한국어 주소로 들어왔는데 사용자가 고른 언어(쿠키) 또는 브라우저 언어가 영어면 /en 으로 보낸다.
// 브라우저 언어 정보가 없는 요청(검색 로봇 등)은 리다이렉트하지 않는다.
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const [, first] = pathname.split("/")

  if (first === "en") return NextResponse.next()

  // /ko/... 는 /... 와 중복이므로 접두사 없는 주소로 보낸다.
  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/"
    return NextResponse.redirect(url, 308)
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  const preferred = isLocale(cookieLocale)
    ? cookieLocale
    : localeFromAcceptLanguage(request.headers.get("accept-language"))

  if (preferred === "en") {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`
    url.search = search
    return NextResponse.redirect(url)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // _next 정적 파일, 이미지 등 확장자가 있는 파일, robots.txt·sitemap.xml 은 제외
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
