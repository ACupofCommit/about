import Link from "next/link"
import Image from "next/image"
import { ThemeToggleButton } from "@/components/ThemeToggleButton"
import { LanguageToggle } from "@/components/LanguageToggle"
import { getDictionary } from "@/lib/i18n"

export async function PageHeader() {
  const { locale, t } = await getDictionary()

  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/a-cup-of-commit.png"
              alt={t.logoAlt}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold">{t.siteName}</span>
        </Link>
        <div className="z-50 relative flex items-center gap-2">
          <LanguageToggle locale={locale} />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
