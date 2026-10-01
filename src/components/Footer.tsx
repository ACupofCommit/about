import { getDictionary, type Locale } from "@/lib/i18n"

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center space-y-1">
        <p className="text-gray-600 dark:text-gray-400">{t.footer.copyright}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {t.footer.businessNumber} ·{" "}
          <a href="mailto:help@commit2.app" className="hover:underline">
            help@commit2.app
          </a>
        </p>
      </div>
    </footer>
  )
}
