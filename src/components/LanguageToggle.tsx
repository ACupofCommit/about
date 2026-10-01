"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { LOCALE_COOKIE, type Locale } from "@/lib/dictionaries"

const options: { value: Locale; label: string }[] = [
  { value: "ko", label: "한" },
  { value: "en", label: "EN" },
]

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const select = (next: Locale) => {
    if (next === locale) return
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
    startTransition(() => router.refresh())
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex h-9 items-center rounded-md border bg-background p-0.5 shadow-xs dark:border-input dark:bg-input/30",
        isPending && "opacity-60"
      )}
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={value === locale}
          onClick={() => select(value)}
          className={cn(
            "h-full min-w-8 rounded-sm px-2 text-sm font-medium transition-colors cursor-pointer",
            value === locale
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
