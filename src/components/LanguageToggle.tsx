"use client"

import type React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { LOCALE_COOKIE, localePath, type Locale } from "@/lib/i18n"

const options: { value: Locale; label: string }[] = [
  { value: "ko", label: "한" },
  { value: "en", label: "EN" },
]

// 현재 주소에서 /en 접두사를 뗀 경로
function basePath(pathname: string): string {
  if (pathname === "/en") return "/"
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter()
  const path = basePath(usePathname())

  // 고른 언어를 기억해 두면, 다음 방문 때 미들웨어가 그 언어 주소로 보낸다.
  // ?via= 같은 쿼리는 유지한다.
  const select = (event: React.MouseEvent<HTMLAnchorElement>, next: Locale, href: string) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
    if (window.location.search) {
      event.preventDefault()
      router.push(`${href}${window.location.search}`)
    }
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex h-9 items-center rounded-md border bg-background p-0.5 shadow-xs dark:border-input dark:bg-input/30"
    >
      {options.map(({ value, label }) => {
        const href = localePath(value, path)
        return (
          <Link
            key={value}
            href={href}
            // 미리 받아 두면 쿠키가 바뀌기 전 기준으로 리다이렉트된 결과가 캐시된다.
            prefetch={false}
            hrefLang={value}
            aria-current={value === locale ? "true" : undefined}
            onClick={(event) => select(event, value, href)}
            className={cn(
              "flex h-full min-w-8 items-center justify-center rounded-sm px-2 text-sm font-medium transition-colors",
              value === locale
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            )}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
