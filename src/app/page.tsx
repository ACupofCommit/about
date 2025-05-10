import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Globe, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from "@/components/theme-toggle-button"

export default function PersonalBrandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* 헤더 */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">홍길동</h1>
          <div className="z-50 relative">
            <ThemeToggleButton />
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8">
        {/* 히어로 섹션 */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-lg">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="프로필 사진"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">안녕하세요, 홍길동입니다</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">디자이너 | 개발자 | 콘텐츠 크리에이터</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              창의적인 솔루션을 제공하는 열정적인 전문가입니다. 다양한 프로젝트 경험을 통해 사용자 중심의 디자인과
              효율적인 개발 능력을 키워왔습니다.
            </p>
          </div>
        </section>

        {/* 자기 소개 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">자기 소개</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              안녕하세요! 저는 5년 이상의 경력을 가진 디자이너이자 개발자입니다. 사용자 경험을 중심으로 한 디자인과
              효율적인 코드 작성에 관심이 많습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              다양한 프로젝트를 통해 문제 해결 능력과 창의적인 사고를 발전시켜 왔으며, 항상 새로운 기술과 트렌드를
              배우는 것을 즐깁니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              저는 팀 프로젝트에서 협업을 중요시하며, 명확한 커뮤니케이션을 통해 최상의 결과물을 만들어내는 것을 목표로
              합니다.
            </p>
          </div>
        </section>

        {/* 소셜 미디어 링크 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">소셜 미디어</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SocialLink
              icon={<Facebook className="h-6 w-6" />}
              name="Facebook"
              url="https://facebook.com/username"
              color="bg-blue-600"
            />
            <SocialLink
              icon={<Youtube className="h-6 w-6" />}
              name="YouTube"
              url="https://youtube.com/@username"
              color="bg-red-600"
            />
            <SocialLink
              icon={<Globe className="h-6 w-6" />}
              name="블로그"
              url="https://blog.example.com"
              color="bg-green-600"
            />
            <SocialLink
              icon={<Twitter className="h-6 w-6" />}
              name="X (트위터)"
              url="https://twitter.com/username"
              color="bg-black"
            />
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">연락하기</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
            이메일 보내기
          </Button>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 홍길동. All rights reserved.</p>
        </div>
      </footer>
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
