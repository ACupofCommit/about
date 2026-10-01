import type { MetadataRoute } from "next"
import { localePath, SITE_URL } from "@/lib/i18n"

const paths = ["/", "/raycast-discount"]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    (["ko", "en"] as const).map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          ko: `${SITE_URL}${localePath("ko", path)}`,
          en: `${SITE_URL}${localePath("en", path)}`,
        },
      },
    }))
  )
}
