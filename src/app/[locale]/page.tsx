import { Footer } from "@/components/Footer"
import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Globe, Twitter, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/PageHeader"
import { PopoverImage } from "@/components/PopoverImage"
import { RaycastDiscountLink } from "@/components/RaycastDiscountLink"
import { alternates, getDictionary, localePath, SITE_URL, type Locale } from "@/lib/i18n"

type Props = { params: Promise<{ locale: Locale }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDictionary(locale)
  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    alternates: alternates(locale, "/"),
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      url: localePath(locale, "/"),
      images: ["/a-cup-of-commit-1024.jpg"],
    },
  }
}

function jsonLd(locale: Locale) {
  const t = getDictionary(locale)
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: t.siteName,
        alternateName: locale === "ko" ? "A Cup of Commit" : "커밋한잔",
        url: SITE_URL,
        logo: `${SITE_URL}/a-cup-of-commit-1024.jpg`,
        email: "help@commit2.app",
        sameAs: [
          "https://www.youtube.com/c/ACupofCommit",
          "https://x.com/b6pzeusbc54tvhw",
          "https://velog.io/@aluc/posts",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "1Bookmark",
        url: "https://1bookmark.net",
        description: t.oneBookmark.description,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web, macOS, Windows, Linux, iOS, Android",
        image: `${SITE_URL}/1bookmark-512x512.png`,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }
}

export default async function PersonalBrandingPage({ params }: Props) {
  const { locale } = await params
  const t = getDictionary(locale)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
      />
      <PageHeader locale={locale} />

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* 히어로 섹션 */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-lg">
              <Image
                src="/a-cup-of-commit-1024.jpg"
                alt={t.logoAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{t.hero.subtitle}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t.hero.description}
            </p>
          </div>
        </section>

        {/* 소셜 미디어 링크 섹션 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SocialLink
              icon={<Facebook className="h-6 w-6" />}
              name="Facebook"
              url="https://www.facebook.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs"
              color="bg-blue-600"
            />
            <SocialLink
              icon={<Youtube className="h-6 w-6" />}
              name="YouTube"
              url="https://www.youtube.com/c/ACupofCommit"
              color="bg-red-600"
            />
            <SocialLink
              icon={<Globe className="h-6 w-6" />}
              name={t.social.blog}
              url="https://velog.io/@aluc/posts"
              color="bg-green-600"
            />
            <SocialLink
              icon={<Twitter className="h-6 w-6" />}
              name={t.social.x}
              url="https://x.com/b6pzeusbc54tvhw"
              color="bg-black"
            />
          </div>
        </section>

        <section>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/raycast-logo-key.png"
                    alt="Raycast Logo"
                    fill
                    className="object-contain scale-[1.2]"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">{t.raycast.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t.raycast.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span>{t.raycast.checkBefore}</span>
                  <PopoverImage src="/raycast-discount-screenshot-1.png" text={t.raycast.checkScreenshot} alt={t.raycast.screenshotAlt} />
                  {t.raycast.checkAfter}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t.raycast.existingSubscribers}
                </p>
                <RaycastDiscountLink label={t.raycast.button} />
                <Link
                  href={localePath(locale, "/raycast-discount")}
                  className="mt-3 inline-block text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  {t.raycast.detailLink}
                </Link>
              </div>
            </div>
          </div>

        </section>

        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/1bookmark-512x512.png"
                    alt="1Bookmark Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">{t.oneBookmark.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t.oneBookmark.description}
                </p>
                <Link
                  href="https://1bookmark.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 cursor-pointer">
                    {t.oneBookmark.button}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Flame className="w-24 h-24 text-white" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">???</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t.upcoming.description}
                </p>
                <Button disabled className="w-full bg-gray-400 dark:bg-gray-700 text-white text-lg py-6">
                  {t.upcoming.button}
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <Footer locale={locale} />
    </div>
  )
}

interface SocialLinkProps {
  icon: React.ReactNode
  name: string
  url: string
  color: string
}

function SocialLink({ icon, name, url, color }: SocialLinkProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex items-center p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className={`${color} p-3 rounded-full text-white mr-4`}>{icon}</div>
        <span className="font-medium">{name}</span>
      </div>
    </Link>
  )
}
