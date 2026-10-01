import { Footer } from "@/components/Footer"
import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/PageHeader"
import { RaycastDiscountLink } from "@/components/RaycastDiscountLink"
import { alternates, getDictionary, localePath, type Locale } from "@/lib/i18n"

type Props = { params: Promise<{ locale: Locale }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDictionary(locale)
  return {
    title: t.meta.raycastTitle,
    description: t.meta.raycastDescription,
    alternates: alternates(locale, "/raycast-discount"),
    openGraph: {
      title: t.meta.raycastTitle,
      description: t.meta.raycastDescription,
      url: localePath(locale, "/raycast-discount"),
      images: ["/raycast-discount-screenshot-1.png"],
    },
  }
}

export default async function RaycastDiscountPage({ params }: Props) {
  const { locale } = await params
  const t = getDictionary(locale)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <PageHeader locale={locale} />

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/raycast-logo-key.png"
                    alt="Raycast Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-2xl font-bold mb-4">{t.raycast.title}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t.raycast.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.raycast.checkBelow}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t.raycast.existingSubscribers}
                </p>
                <RaycastDiscountLink label={t.raycast.button} />
              </div>
            </div>
          </div>
        </section>

        {/* 스크린샷 섹션 */}
        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t.raycast.proPlan}</h3>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/raycast-discount-screenshot-1.png"
                alt={t.raycast.screenshotAlt}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t.raycast.proAiPlan}</h3>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/raycast-discount-screenshot-2.png"
                alt={t.raycast.screenshotAlt}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer locale={locale} />
    </div>
  )
}
