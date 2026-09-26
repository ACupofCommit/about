import { Footer } from "@/components/Footer"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Globe, Twitter, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/PageHeader"
import { PopoverImage } from "@/components/PopoverImage"
import { RaycastDiscountLink } from "../components/RaycastDiscountLink"

export default function PersonalBrandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <PageHeader />

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* 히어로 섹션 */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-lg">
              <Image
                src="/a-cup-of-commit-1024.jpg"
                alt="커밋한잔 로고"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">커밋한잔은 평생 쓸 반려 앱을 만듭니다</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">생산성 도구 · 웹 서비스 · 개발 콘텐츠</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              유행 따라 바꾸는 도구가 아니라, 한 번 익히면 오래도록 곁에 두는 앱을 만듭니다. 인생 북마크 시스템 1Bookmark처럼 매일 쓰고, 평생 함께할 수 있는 서비스를 개발하고 있습니다.
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
              name="블로그"
              url="https://velog.io/@aluc/posts"
              color="bg-green-600"
            />
            <SocialLink
              icon={<Twitter className="h-6 w-6" />}
              name="X (트위터)"
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
                <h3 className="text-2xl font-bold mb-4">Raycast Pro, Teams Pro 10% 할인</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Raycast Pro 또는 Teams Pro와 같은 Raycast 모든 유료 플랜을 10% 할인 가격에 이용하세요.
                  첫 결제는 물론 매 반복 결제마다 계속 10% 할인된 가격이 적용됩니다.
                  아래 버튼을 눌러 Raycast로 이동하여 로그인하고 결제하면 됩니다.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span>- 결제 전 </span>
                  <PopoverImage src="/raycast-discount-screenshot-1.png" text="스크린샷" alt="Raycast 10% 할인 적용 스크린샷" />
                  과 같이 10% 할인 적용을 꼭 확인하세요.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  - 기존 구독자는 기존 결제가 끝나고 새 결제를 시작할 때 적용할 수 있습니다.
                </p>
                <RaycastDiscountLink />
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
                <h3 className="text-2xl font-bold mb-4">1Bookmark - 인생 북마크 시스템</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  당신의 모든 북마크를 한 곳에서 관리하고, 팀 스페이스를 만들어 팀에서 공유하는 북마크도 관리하세요.
                  고도화된 검색 기능과 Raycast 익스텐션을 통해 원하는 웹 페이지와 슬랙 채널까지 빠르게 열 수 있습니다.
                </p>
                <Link
                  href="https://1bookmark.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 cursor-pointer">
                    시작하기
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
                  AI 동료와 함께하는 복식부기 가계부, 라이프 트래킹 앱
                </p>
                <Button disabled className="w-full bg-gray-400 dark:bg-gray-700 text-white text-lg py-6">
                  Coming soon
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <Footer />
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
