import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"
import { getDictionary, isLocale, locales, SITE_URL } from "@/lib/i18n"
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getDictionary(locale)
  return {
    metadataBase: new URL(SITE_URL),
    title: t.siteName,
    icons: {
      icon: "/a-cup-of-commit.png",
    },
    openGraph: {
      siteName: t.siteName,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
